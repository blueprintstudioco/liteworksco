import { useState } from 'react';
import { Calculator, Phone } from 'lucide-react';

export default function PoolRemovalCalculator() {
  const [poolLength, setPoolLength] = useState(30);
  const [poolWidth, setPoolWidth] = useState(15);
  const [poolType, setPoolType] = useState<'concrete' | 'fiberglass' | 'vinyl'>('concrete');
  const [removalType, setRemovalType] = useState<'partial' | 'full'>('partial');
  const [calculated, setCalculated] = useState(false);
  const [result, setResult] = useState({ low: 0, high: 0 });

  const calculate = () => {
    const sqft = poolLength * poolWidth;

    let baseLow: number, baseHigh: number;

    if (removalType === 'partial') {
      switch (poolType) {
        case 'concrete':
          baseLow = 6000; baseHigh = 10000;
          break;
        case 'fiberglass':
          baseLow = 5000; baseHigh = 8000;
          break;
        case 'vinyl':
          baseLow = 4500; baseHigh = 7500;
          break;
      }
    } else {
      switch (poolType) {
        case 'concrete':
          baseLow = 10000; baseHigh = 18000;
          break;
        case 'fiberglass':
          baseLow = 8000; baseHigh = 14000;
          break;
        case 'vinyl':
          baseLow = 7000; baseHigh = 12000;
          break;
      }
    }

    // Scale by pool size (base prices assume ~400 sqft pool)
    const sizeFactor = sqft / 400;
    const low = Math.round(baseLow * Math.max(0.7, Math.min(1.8, sizeFactor)));
    const high = Math.round(baseHigh * Math.max(0.7, Math.min(1.8, sizeFactor)));

    setResult({ low, high });
    setCalculated(true);
  };

  const sqft = poolLength * poolWidth;

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-[#c4d931]/20 p-2 rounded-lg">
            <Calculator className="w-6 h-6 text-[#1a1a1a]" />
          </div>
          <h2 className="text-2xl font-[Rajdhani] font-bold text-[#1a1a1a]">Pool Removal Cost Calculator</h2>
        </div>

        {/* Removal Type */}
        <div className="mb-6">
          <label className="block text-sm font-semibold text-gray-700 mb-2">Removal Type</label>
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => setRemovalType('partial')}
              className={`p-3 rounded-lg border-2 text-left transition ${removalType === 'partial' ? 'border-[#c4d931] bg-[#c4d931]/10' : 'border-gray-200 hover:border-gray-300'}`}
            >
              <div className="font-semibold text-sm">Partial Removal</div>
              <div className="text-xs text-gray-500">Break walls, punch holes, backfill</div>
            </button>
            <button
              onClick={() => setRemovalType('full')}
              className={`p-3 rounded-lg border-2 text-left transition ${removalType === 'full' ? 'border-[#c4d931] bg-[#c4d931]/10' : 'border-gray-200 hover:border-gray-300'}`}
            >
              <div className="font-semibold text-sm">Full Removal</div>
              <div className="text-xs text-gray-500">Complete extraction of all material</div>
            </button>
          </div>
        </div>

        {/* Pool Type */}
        <div className="mb-6">
          <label className="block text-sm font-semibold text-gray-700 mb-2">Pool Construction</label>
          <div className="grid grid-cols-3 gap-3">
            {[
              { val: 'concrete' as const, label: 'Concrete/Gunite' },
              { val: 'fiberglass' as const, label: 'Fiberglass' },
              { val: 'vinyl' as const, label: 'Vinyl Liner' },
            ].map((opt) => (
              <button
                key={opt.val}
                onClick={() => setPoolType(opt.val)}
                className={`p-3 rounded-lg border-2 text-center transition ${poolType === opt.val ? 'border-[#c4d931] bg-[#c4d931]/10' : 'border-gray-200 hover:border-gray-300'}`}
              >
                <div className="font-semibold text-sm">{opt.label}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Pool Dimensions */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Pool Length (feet)</label>
            <input
              type="number"
              min="10"
              max="80"
              value={poolLength}
              onChange={(e) => setPoolLength(Math.max(10, parseInt(e.target.value) || 10))}
              className="w-full border-2 border-gray-200 rounded-lg px-4 py-2.5 focus:border-[#c4d931] focus:outline-none transition"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Pool Width (feet)</label>
            <input
              type="number"
              min="5"
              max="50"
              value={poolWidth}
              onChange={(e) => setPoolWidth(Math.max(5, parseInt(e.target.value) || 5))}
              className="w-full border-2 border-gray-200 rounded-lg px-4 py-2.5 focus:border-[#c4d931] focus:outline-none transition"
            />
          </div>
        </div>

        <p className="text-sm text-gray-500 mb-6 bg-[#f5f5f0] rounded-lg px-4 py-2">
          Pool size: <span className="font-semibold">{sqft.toLocaleString()} sq ft</span>
        </p>

        <button
          onClick={calculate}
          className="w-full bg-[#c4d931] text-[#1a1a1a] py-3 rounded-lg font-[Rajdhani] font-bold text-lg hover:bg-[#b5ca2d] transition"
        >
          Calculate My Estimate
        </button>

        {calculated && (
          <div className="mt-6 border-t pt-6">
            <div className="bg-[#f5f5f0] rounded-lg p-6 text-center mb-4">
              <p className="text-sm text-gray-500 mb-1">Estimated Cost Range</p>
              <p className="text-4xl font-[Rajdhani] font-bold text-[#1a1a1a]">
                ${result.low.toLocaleString()} – ${result.high.toLocaleString()}
              </p>
              <p className="text-xs text-gray-400 mt-2">
                {poolLength}' × {poolWidth}' {poolType} pool · {removalType === 'partial' ? 'Partial' : 'Full'} removal
              </p>
            </div>
            <p className="text-xs text-gray-500 text-center mb-4">
              Includes demolition, backfill, grading, debris disposal, and permit assistance. Actual pricing depends on access, deck removal, and site conditions.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a href="/get-a-quote" className="block text-center bg-[#1a1a1a] text-white py-3 rounded-lg font-[Rajdhani] font-semibold hover:bg-black transition">
                Get Your Exact Quote
              </a>
              <a href="tel:5139279675" className="flex items-center justify-center gap-2 bg-white border-2 border-[#1a1a1a] text-[#1a1a1a] py-3 rounded-lg font-[Rajdhani] font-semibold hover:bg-gray-50 transition">
                <Phone className="w-4 h-4" /> (513) 927-9675
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
