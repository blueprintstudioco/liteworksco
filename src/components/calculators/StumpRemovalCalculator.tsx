import { useState } from 'react';
import { Calculator, TreePine, Phone } from 'lucide-react';

export default function StumpRemovalCalculator() {
  const [stumps, setStumps] = useState<{ diameter: number }[]>([{ diameter: 12 }]);
  const [method, setMethod] = useState<'grinding' | 'extraction'>('grinding');
  const [calculated, setCalculated] = useState(false);
  const [result, setResult] = useState({ low: 0, high: 0 });

  const addStump = () => setStumps([...stumps, { diameter: 12 }]);
  const removeStump = (i: number) => setStumps(stumps.filter((_, idx) => idx !== i));
  const updateDiameter = (i: number, val: number) => {
    const updated = [...stumps];
    updated[i].diameter = val;
    setStumps(updated);
  };

  const calculate = () => {
    let totalLow = 0;
    let totalHigh = 0;

    stumps.forEach((stump) => {
      if (method === 'grinding') {
        // $10-15 per inch diameter, minimum $150
        const low = Math.max(150, stump.diameter * 10);
        const high = Math.max(200, stump.diameter * 15);
        totalLow += low;
        totalHigh += high;
      } else {
        // Full extraction: $20-30 per inch, minimum $300
        const low = Math.max(300, stump.diameter * 20);
        const high = Math.max(500, stump.diameter * 30);
        totalLow += low;
        totalHigh += high;
      }
    });

    // Volume discount for 3+ stumps
    if (stumps.length >= 5) {
      totalLow = Math.round(totalLow * 0.85);
      totalHigh = Math.round(totalHigh * 0.85);
    } else if (stumps.length >= 3) {
      totalLow = Math.round(totalLow * 0.9);
      totalHigh = Math.round(totalHigh * 0.9);
    }

    setResult({ low: totalLow, high: totalHigh });
    setCalculated(true);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-[#c4d931]/20 p-2 rounded-lg">
            <Calculator className="w-6 h-6 text-[#1a1a1a]" />
          </div>
          <h2 className="text-2xl font-[Rajdhani] font-bold text-[#1a1a1a]">Stump Removal Cost Calculator</h2>
        </div>

        {/* Method Selection */}
        <div className="mb-6">
          <label className="block text-sm font-semibold text-gray-700 mb-2">Removal Method</label>
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => setMethod('grinding')}
              className={`p-3 rounded-lg border-2 text-left transition ${method === 'grinding' ? 'border-[#c4d931] bg-[#c4d931]/10' : 'border-gray-200 hover:border-gray-300'}`}
            >
              <div className="font-semibold text-sm">Stump Grinding</div>
              <div className="text-xs text-gray-500">Ground 6-12" below grade</div>
            </button>
            <button
              onClick={() => setMethod('extraction')}
              className={`p-3 rounded-lg border-2 text-left transition ${method === 'extraction' ? 'border-[#c4d931] bg-[#c4d931]/10' : 'border-gray-200 hover:border-gray-300'}`}
            >
              <div className="font-semibold text-sm">Full Extraction</div>
              <div className="text-xs text-gray-500">Complete root ball removal</div>
            </button>
          </div>
        </div>

        {/* Stumps */}
        <div className="mb-6">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Your Stumps ({stumps.length})
          </label>
          <div className="space-y-3">
            {stumps.map((stump, i) => (
              <div key={i} className="flex items-center gap-3">
                <TreePine className="w-5 h-5 text-gray-400 flex-shrink-0" />
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <input
                      type="range"
                      min="4"
                      max="48"
                      value={stump.diameter}
                      onChange={(e) => updateDiameter(i, parseInt(e.target.value))}
                      className="flex-1 accent-[#c4d931]"
                    />
                    <span className="text-sm font-mono font-semibold w-16 text-right">{stump.diameter}" dia</span>
                  </div>
                </div>
                {stumps.length > 1 && (
                  <button onClick={() => removeStump(i)} className="text-red-400 hover:text-red-600 text-sm">✕</button>
                )}
              </div>
            ))}
          </div>
          <button
            onClick={addStump}
            className="mt-3 text-sm text-[#c4d931] hover:text-[#a8bc20] font-semibold flex items-center gap-1"
          >
            + Add another stump
          </button>
          {stumps.length >= 3 && (
            <p className="text-xs text-green-600 mt-1">✓ Volume discount applied for {stumps.length} stumps</p>
          )}
        </div>

        {/* Calculate Button */}
        <button
          onClick={calculate}
          className="w-full bg-[#c4d931] text-[#1a1a1a] py-3 rounded-lg font-[Rajdhani] font-bold text-lg hover:bg-[#b5ca2d] transition"
        >
          Calculate My Estimate
        </button>

        {/* Results */}
        {calculated && (
          <div className="mt-6 border-t pt-6">
            <div className="bg-[#f5f5f0] rounded-lg p-6 text-center mb-4">
              <p className="text-sm text-gray-500 mb-1">Estimated Cost Range</p>
              <p className="text-4xl font-[Rajdhani] font-bold text-[#1a1a1a]">
                ${result.low.toLocaleString()} – ${result.high.toLocaleString()}
              </p>
              <p className="text-xs text-gray-400 mt-2">
                {stumps.length} stump{stumps.length > 1 ? 's' : ''} · {method === 'grinding' ? 'Grinding' : 'Full Extraction'}
              </p>
            </div>
            <p className="text-xs text-gray-500 text-center mb-4">
              Actual pricing depends on access, species, root system, and site conditions. This estimate is for budgeting purposes.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href="/get-a-quote"
                className="block text-center bg-[#1a1a1a] text-white py-3 rounded-lg font-[Rajdhani] font-semibold hover:bg-black transition"
              >
                Get Your Exact Quote
              </a>
              <a
                href="tel:5139279675"
                className="flex items-center justify-center gap-2 bg-white border-2 border-[#1a1a1a] text-[#1a1a1a] py-3 rounded-lg font-[Rajdhani] font-semibold hover:bg-gray-50 transition"
              >
                <Phone className="w-4 h-4" />
                (513) 927-9675
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
