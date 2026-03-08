import { useState } from 'react';
import { Calculator, Phone } from 'lucide-react';

export default function RetainingWallCalculator() {
  const [length, setLength] = useState(30);
  const [height, setHeight] = useState(3);
  const [material, setMaterial] = useState<'boulder' | 'block' | 'timber'>('boulder');
  const [calculated, setCalculated] = useState(false);
  const [result, setResult] = useState({ low: 0, high: 0 });

  const calculate = () => {
    const faceSqft = length * height;

    let lowRate: number, highRate: number;

    switch (material) {
      case 'boulder':
        lowRate = 55;
        highRate = 85;
        break;
      case 'block':
        lowRate = 45;
        highRate = 70;
        break;
      case 'timber':
        lowRate = 30;
        highRate = 50;
        break;
    }

    // Engineering costs for tall walls
    let engineeringAdder = 0;
    if (height > 4) {
      engineeringAdder = 2000; // Engineering plans + permit
    }

    const low = Math.max(4000, Math.round(faceSqft * lowRate) + engineeringAdder);
    const high = Math.max(6000, Math.round(faceSqft * highRate) + engineeringAdder);

    setResult({ low, high });
    setCalculated(true);
  };

  const faceSqft = length * height;

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-[#c4d931]/20 p-2 rounded-lg">
            <Calculator className="w-6 h-6 text-[#1a1a1a]" />
          </div>
          <h2 className="text-2xl font-[Rajdhani] font-bold text-[#1a1a1a]">Retaining Wall Cost Calculator</h2>
        </div>

        {/* Material */}
        <div className="mb-6">
          <label className="block text-sm font-semibold text-gray-700 mb-2">Wall Material</label>
          <div className="grid grid-cols-3 gap-3">
            {[
              { val: 'boulder' as const, label: 'Natural Boulder', desc: 'Most natural look' },
              { val: 'block' as const, label: 'Concrete Block', desc: 'Clean, uniform lines' },
              { val: 'timber' as const, label: 'Timber', desc: 'Most affordable' },
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

        {/* Dimensions */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Wall Length (feet)</label>
            <input
              type="number"
              min="5"
              max="500"
              value={length}
              onChange={(e) => setLength(Math.max(5, parseInt(e.target.value) || 5))}
              className="w-full border-2 border-gray-200 rounded-lg px-4 py-2.5 focus:border-[#c4d931] focus:outline-none transition"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Wall Height (feet)</label>
            <input
              type="number"
              min="1"
              max="12"
              step="0.5"
              value={height}
              onChange={(e) => setHeight(Math.max(1, parseFloat(e.target.value) || 1))}
              className="w-full border-2 border-gray-200 rounded-lg px-4 py-2.5 focus:border-[#c4d931] focus:outline-none transition"
            />
          </div>
        </div>

        <div className="text-sm text-gray-500 mb-6 bg-[#f5f5f0] rounded-lg px-4 py-2 space-y-1">
          <p>Wall face area: <span className="font-semibold">{faceSqft.toLocaleString()} sq ft</span></p>
          {height > 4 && (
            <p className="text-amber-600 font-medium">⚠ Walls over 4 ft require engineered plans and a building permit (included in estimate)</p>
          )}
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
                {length}' long × {height}' tall · {material === 'boulder' ? 'Natural Boulder' : material === 'block' ? 'Concrete Block' : 'Timber'}
                {height > 4 ? ' · Includes engineering' : ''}
              </p>
            </div>
            <p className="text-xs text-gray-500 text-center mb-4">
              Includes excavation, base preparation, drainage behind wall, material, and installation. Actual pricing depends on site access, soil conditions, and slope.
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
