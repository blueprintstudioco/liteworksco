import { useState } from 'react';
import { Calculator, Phone } from 'lucide-react';

export default function ConcreteRemovalCalculator() {
  const [length, setLength] = useState<number | ''>(20);
  const [width, setWidth] = useState<number | ''>(20);
  const [thickness, setThickness] = useState<'4' | '6' | '8+'>('4');
  const [hasRebar, setHasRebar] = useState(false);
  const [calculated, setCalculated] = useState(false);
  const [result, setResult] = useState({ low: 0, high: 0 });

  const calculate = () => {
    const sqft = (length || 0) * (width || 0);
    
    // Base rate per sqft (high side for Cincinnati)
    let lowRate = 3.50;
    let highRate = 5.50;

    if (thickness === '6') {
      lowRate = 4.50;
      highRate = 7.00;
    } else if (thickness === '8+') {
      lowRate = 6.00;
      highRate = 9.00;
    }

    if (hasRebar) {
      lowRate += 1.50;
      highRate += 2.00;
    }

    // Minimum charge
    const low = Math.max(1500, Math.round(sqft * lowRate));
    const high = Math.max(2000, Math.round(sqft * highRate));

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
          <h2 className="text-2xl font-[Rajdhani] font-bold text-[#1a1a1a]">Concrete Removal Cost Calculator</h2>
        </div>

        {/* Dimensions */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Length (feet)</label>
            <input
              type="number"
              min="1"
              max="500"
              value={length}
              onChange={(e) => setLength(e.target.value === '' ? '' : parseInt(e.target.value))}
              onBlur={() => setLength(prev => (prev === '' || isNaN(prev as number)) ? 1 : Math.max(1, prev as number))}
              className="w-full border-2 border-gray-200 rounded-lg px-4 py-2.5 focus:border-[#c4d931] focus:outline-none transition"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Width (feet)</label>
            <input
              type="number"
              min="1"
              max="500"
              value={width}
              onChange={(e) => setWidth(e.target.value === '' ? '' : parseInt(e.target.value))}
              onBlur={() => setWidth(prev => (prev === '' || isNaN(prev as number)) ? 1 : Math.max(1, prev as number))}
              className="w-full border-2 border-gray-200 rounded-lg px-4 py-2.5 focus:border-[#c4d931] focus:outline-none transition"
            />
          </div>
        </div>

        <p className="text-sm text-gray-500 mb-6 bg-[#f5f5f0] rounded-lg px-4 py-2">
          Total area: <span className="font-semibold">{sqft.toLocaleString()} sq ft</span>
        </p>

        {/* Thickness */}
        <div className="mb-6">
          <label className="block text-sm font-semibold text-gray-700 mb-2">Concrete Thickness</label>
          <div className="grid grid-cols-3 gap-3">
            {[
              { val: '4' as const, label: '4 inches', desc: 'Standard patio/sidewalk' },
              { val: '6' as const, label: '6 inches', desc: 'Standard driveway' },
              { val: '8+' as const, label: '8+ inches', desc: 'Heavy-duty / foundation' },
            ].map((opt) => (
              <button
                key={opt.val}
                onClick={() => setThickness(opt.val)}
                className={`p-3 rounded-lg border-2 text-left transition ${thickness === opt.val ? 'border-[#c4d931] bg-[#c4d931]/10' : 'border-gray-200 hover:border-gray-300'}`}
              >
                <div className="font-semibold text-sm">{opt.label}</div>
                <div className="text-xs text-gray-500">{opt.desc}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Rebar */}
        <div className="mb-6">
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={hasRebar}
              onChange={(e) => setHasRebar(e.target.checked)}
              className="w-5 h-5 accent-[#c4d931] rounded"
            />
            <div>
              <span className="font-semibold text-sm text-gray-700">Reinforced with rebar</span>
              <p className="text-xs text-gray-500">Adds time for cutting and separation</p>
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
                {sqft.toLocaleString()} sq ft · {thickness}" thick{hasRebar ? ' · Reinforced' : ''}
              </p>
            </div>
            <p className="text-xs text-gray-500 text-center mb-4">
              Includes demolition, loading, hauling, disposal, and grading. Actual pricing depends on access and site conditions.
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
