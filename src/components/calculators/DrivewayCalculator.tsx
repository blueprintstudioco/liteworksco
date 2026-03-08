import { useState } from 'react';
import { Calculator, Phone } from 'lucide-react';

export default function DrivewayCalculator() {
  const [length, setLength] = useState<number | ''>(60);
  const [width, setWidth] = useState<number | ''>(12);
  const [material, setMaterial] = useState<'gravel' | 'concrete' | 'asphalt'>('gravel');
  const [isNew, setIsNew] = useState(true);
  const [calculated, setCalculated] = useState(false);
  const [result, setResult] = useState({ low: 0, high: 0 });

  const calculate = () => {
    const sqft = (length || 0) * (width || 0);

    let lowRate: number, highRate: number;

    switch (material) {
      case 'gravel':
        lowRate = 4.50;
        highRate = 8.00;
        break;
      case 'asphalt':
        lowRate = 8.00;
        highRate = 14.00;
        break;
      case 'concrete':
        lowRate = 10.00;
        highRate = 18.00;
        break;
    }

    // Add removal cost for replacement jobs
    if (!isNew) {
      lowRate += 3.00;
      highRate += 5.00;
    }

    const low = Math.max(2500, Math.round(sqft * lowRate));
    const high = Math.max(4000, Math.round(sqft * highRate));

    setResult({ low, high });
    setCalculated(true);
  };

  const sqft = (length || 0) * (width || 0);

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-[#c4d931]/20 p-2 rounded-lg">
            <Calculator className="w-6 h-6 text-[#1a1a1a]" />
          </div>
          <h2 className="text-2xl font-[Rajdhani] font-bold text-[#1a1a1a]">Driveway Cost Calculator</h2>
        </div>

        {/* New vs Replacement */}
        <div className="mb-6">
          <label className="block text-sm font-semibold text-gray-700 mb-2">Project Type</label>
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => setIsNew(true)}
              className={`p-3 rounded-lg border-2 text-left transition ${isNew ? 'border-[#c4d931] bg-[#c4d931]/10' : 'border-gray-200 hover:border-gray-300'}`}
            >
              <div className="font-semibold text-sm">New Driveway</div>
              <div className="text-xs text-gray-500">No existing surface to remove</div>
            </button>
            <button
              onClick={() => setIsNew(false)}
              className={`p-3 rounded-lg border-2 text-left transition ${!isNew ? 'border-[#c4d931] bg-[#c4d931]/10' : 'border-gray-200 hover:border-gray-300'}`}
            >
              <div className="font-semibold text-sm">Replacement</div>
              <div className="text-xs text-gray-500">Remove old + install new</div>
            </button>
          </div>
        </div>

        {/* Dimensions */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Length (feet)</label>
            <input
              type="number"
              min="10"
              max="1000"
              value={length}
              onChange={(e) => setLength(e.target.value === '' ? '' : parseInt(e.target.value))}
              onBlur={() => setLength(prev => (prev === '' || isNaN(prev as number)) ? 10 : Math.max(10, prev as number))}
              className="w-full border-2 border-gray-200 rounded-lg px-4 py-2.5 focus:border-[#c4d931] focus:outline-none transition"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Width (feet)</label>
            <input
              type="number"
              min="8"
              max="100"
              value={width}
              onChange={(e) => setWidth(e.target.value === '' ? '' : parseInt(e.target.value))}
              onBlur={() => setWidth(prev => (prev === '' || isNaN(prev as number)) ? 8 : Math.max(8, prev as number))}
              className="w-full border-2 border-gray-200 rounded-lg px-4 py-2.5 focus:border-[#c4d931] focus:outline-none transition"
            />
          </div>
        </div>

        <p className="text-sm text-gray-500 mb-6 bg-[#f5f5f0] rounded-lg px-4 py-2">
          Total area: <span className="font-semibold">{sqft.toLocaleString()} sq ft</span>
        </p>

        {/* Material */}
        <div className="mb-6">
          <label className="block text-sm font-semibold text-gray-700 mb-2">Surface Material</label>
          <div className="grid grid-cols-3 gap-3">
            {[
              { val: 'gravel' as const, label: 'Gravel', desc: 'Most affordable' },
              { val: 'asphalt' as const, label: 'Asphalt', desc: 'Mid-range' },
              { val: 'concrete' as const, label: 'Concrete', desc: 'Premium' },
            ].map((opt) => (
              <button
                key={opt.val}
                onClick={() => setMaterial(opt.val)}
                className={`p-3 rounded-lg border-2 text-left transition ${material === opt.val ? 'border-[#c4d931] bg-[#c4d931]/10' : 'border-gray-200 hover:border-gray-300'}`}
              >
                <div className="font-semibold text-sm">{opt.label}</div>
                <div className="text-xs text-gray-500">{opt.desc}</div>
              </button>
            ))}
          </div>
        </div>

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
                {sqft.toLocaleString()} sq ft · {material.charAt(0).toUpperCase() + material.slice(1)} · {isNew ? 'New' : 'Replacement'}
              </p>
            </div>
            <p className="text-xs text-gray-500 text-center mb-4">
              Includes base preparation, material, and installation.{!isNew ? ' Includes removal of existing surface.' : ''} Actual pricing depends on terrain, drainage, and access.
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
