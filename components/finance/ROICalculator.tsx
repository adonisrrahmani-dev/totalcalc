
import React, { useState } from 'react';

interface Props {
  onBack: () => void;
  darkMode: boolean;
}

const ROICalculator: React.FC<Props> = ({ onBack }) => {
  const [initial, setInitial] = useState('1000');
  const [final, setFinal] = useState('1500');
  const [years, setYears] = useState('3');
  const [result, setResult] = useState<any>(null);

  const calculateStats = () => {
    const i = parseFloat(initial);
    const f = parseFloat(final);
    const t = parseFloat(years);

    const roi = ((f - i) / i) * 100;
    const cagr = (Math.pow(f / i, 1 / t) - 1) * 100;

    setResult({ roi: roi.toFixed(2), cagr: cagr.toFixed(2), profit: (f - i).toFixed(2) });
  };

  return (
    <div className="max-w-2xl mx-auto bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-xl">
      <div className="flex items-center mb-6">
        <button onClick={onBack} className="mr-4 p-2 bg-slate-50 dark:bg-slate-800 rounded-lg">←</button>
        <h2 className="text-2xl font-bold">ROI & CAGR Calculator</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <input type="number" placeholder="Initial Investment" value={initial} onChange={e => setInitial(e.target.value)} className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800" />
          <input type="number" placeholder="Final Value" value={final} onChange={e => setFinal(e.target.value)} className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800" />
      </div>
      <input type="number" placeholder="Time Period (Years)" value={years} onChange={e => setYears(e.target.value)} className="w-full p-4 rounded-xl bg-slate-50 dark:bg-slate-800 mb-6" />
      <button onClick={calculateStats} className="w-full py-4 bg-primary-600 text-white rounded-xl font-bold">Analyze Returns</button>
      
      {result && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
              <div className="p-5 bg-slate-50 dark:bg-slate-800 rounded-xl text-center">
                  <div className="text-xs opacity-50 uppercase">Total ROI</div>
                  <div className="text-2xl font-bold text-primary-600">{result.roi}%</div>
              </div>
              <div className="p-5 bg-slate-50 dark:bg-slate-800 rounded-xl text-center">
                  <div className="text-xs opacity-50 uppercase">CAGR (Annual)</div>
                  <div className="text-2xl font-bold text-emerald-600">{result.cagr}%</div>
              </div>
              <div className="p-5 bg-slate-50 dark:bg-slate-800 rounded-xl text-center">
                  <div className="text-xs opacity-50 uppercase">Net Profit</div>
                  <div className="text-2xl font-bold">${result.profit}</div>
              </div>
          </div>
      )}
    </div>
  );
};

export default ROICalculator;
