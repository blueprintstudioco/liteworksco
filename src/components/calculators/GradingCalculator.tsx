import { useState } from 'react';
import { Calculator, Phone } from 'lucide-react';

export default function GradingCalculator() {
  const [length, setLength] = useState(40);
  const [width, setWidth] = useState(30);
  const [purpose, setPurpose] = useState<'drainage' | 'pad' | 'yard'>('drainage');
  const [needsFill, setNeedsFill] = useState(false);
  const [calculated, setCalculated] = useState(false);
  const [result, setResult] = useState({ low: 0, high: 0 });

  const calculate = () => {
    const sqft = length * width;

    let lowRate: number, highRate: number;

    switch (purpose) {
      case 'drainage':
        // Drainage correction - moderate complexity
        lowRate = 2.50;
        highRate = 5.00;
        break;
      case 'pad':
        // Building pad - higher precision, compaction required
        lowRate = 3.50;
        highRate = 6.50;
        break;
      case 'yard':
        // Full yard regrading - large area, moderate precision
        lowRate = 2.00;
        highRate = 4.00;
        break;
    }

    if (needsFill) {
      lowRate += 1.50;
      highRate += 3.00;
    }

    const low = Math.max(2000, Math.round(sqft * lowRate));
    const high = Math.max(3000, Math.round(sqft * highRate));

    setResult({ low, high });
    setCalculated(true);
  };

  const sqft = length * width;

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-[#c4d931]/20 p-2 rounded-lg">
            <Calculator className="w-6 h-6 text-[#1a1a1a]" />
          </div>
          <h2 className="text-2xl font-[Rajdhani] font-bold text-[#1a1a1a]">Grading & Leveling Cost Calculator</h2>
        </div>

        {/* Purpose */}
        <div className="mb-6">
          <label className="block text-sm font-semibold text-gray-700 mb-2">What do you need graded?</label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              { val: 'drainage' as const, label: 'Drainage Fix', desc: 'Redirect water away from house' },
              { val: 'pad' as const, label: 'Building Pad', desc: 'Level pad for patio/shed/garage' },
              { val: 'yard' as const, label: 'Full Yard', desc: 'Regrade entire yard' },
            ].map((opt) => (
              <button
                key={opt.val}
                onClick={() => setPurpose(opt.val)}
                className={`p-3 rounded-lg border-2 text-left transition ${purpose === opt.val ? 'border-[#c4d931] bg-[#c4d931]/10' : 'border-gray-200 hover:border-gray-300'}`}
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
            <label className="block text-sm font-semibold text-gray-700 mb-2">Area Length (feet)</label>
            <input
              type="number"
              min="10"
              max="500"
              value={length}
              onChange={(e) => setLength(Math.max(10, parseInt(e.target.value) || 10))}
              className="w-full border-2 border-gray-200 rounded-lg px-4 py-2.5 focus:border-[#c4d931] focus:outline-none transition"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Area Width (feet)</label>
            <input
              type="number"
              min="10"
              max="500"
              value={width}
              onChange={(e) => setWidth(Math.max(10, parseInt(e.target.value) || 10))}
              className="w-full border-2 border-gray-200 rounded-lg px-4 py-2.5 focus:border-[#c4d931] focus:outline-none transition"
            />
          </div>
        </div>

        <p className="text-sm text-gray-500 mb-6 bg-[#f5f5f0] rounded-lg px-4 py-2">
          Total area: <span className="font-semibold">{sqft.toLocaleString()} sq ft</span>
        </p>

        {/* Fill needed */}
        <div className="mb-6">
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={needsFill}
              onChange={(e) => setNeedsFill(e.target.checked)}
              className="w-5 h-5 accent-[#c4d931] rounded"
            />
            <div>
              <span className="font-semibold text-sm text-gray-700">Fill dirt needed</span>
              <p className="text-xs text-gray-500">Low areas that need imported fill material</p>
            </div>
          </label>
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
                {sqft.toLocaleString()} sq ft · {purpose === 'drainage' ? 'Drainage correction' : purpose === 'pad' ? 'Building pad' : 'Full yard regrade'}{needsFill ? ' · Fill included' : ''}
              </p>
            </div>
            <p className="text-xs text-gray-500 text-center mb-4">
              Includes grading, compaction, and topsoil management. Actual pricing depends on existing slope, soil conditions, and access.
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
