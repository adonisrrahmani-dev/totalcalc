
import React, { useState } from 'react';

interface Props {
  onBack: () => void;
  darkMode: boolean;
}

const ProbabilityCalculator: React.FC<Props> = ({ onBack }) => {
  const [n, setN] = useState('10');
  const [r, setR] = useState('3');
  const [result, setResult] = useState<any>(null);

  const fact = (num: number): number => {
      let res = 1;
      for (let i = 2; i <= num; i++) res *= i;
      return res;
  };

  const calculate = () => {
    const vn = parseInt(n);
    const vr = parseInt(r);

    if (vn < vr) return alert('n must be greater than or equal to r');
    if (vn > 20) return alert('n must be 20 or less for precise JS factorials');

    const nCr = fact(vn) / (fact(vr) * fact(vn - vr));
    const nPr = fact(vn) / fact(vn - vr);

    setResult({ nCr: Math.round(nCr), nPr: Math.round(nPr) });
  };

  return (
    <div className="max-w-xl mx-auto bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-xl">
      <div className="flex items-center mb-6">
        <button onClick={onBack} className="mr-4 p-2 bg-slate-50 dark:bg-slate-800 rounded-lg">←</button>
        <h2 className="text-2xl font-bold">Combinations & Permutations</h2>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-8">
          <div><label className="text-xs font-bold uppercase block mb-1">Total (n)</label><input type="number" value={n} onChange={e => setN(e.target.value)} className="w-full p-4 rounded-xl bg-slate-50 dark:bg-slate-800 text-xl font-bold" /></div>
          <div><label className="text-xs font-bold uppercase block mb-1">Select (r)</label><input type="number" value={r} onChange={e => setR(e.target.value)} className="w-full p-4 rounded-xl bg-slate-50 dark:bg-slate-800 text-xl font-bold" /></div>
      </div>

      <button onClick={calculate} className="w-full py-4 bg-primary-600 text-white rounded-xl font-bold">Calculate</button>

      {result && (
          <div className="mt-8 space-y-4">
              <div className="p-6 bg-slate-50 dark:bg-slate-800 rounded-2xl flex justify-between items-center">
                  <div>
                      <span className="text-xs uppercase font-bold opacity-40 block">nCr (Combinations)</span>
                      <span className="text-sm opacity-50 italic">Order doesn't matter</span>
                  </div>
                  <div className="text-3xl font-black text-primary-600">{result.nCr}</div>
              </div>
              <div className="p-6 bg-slate-50 dark:bg-slate-800 rounded-2xl flex justify-between items-center">
                  <div>
                      <span className="text-xs uppercase font-bold opacity-40 block">nPr (Permutations)</span>
                      <span className="text-sm opacity-50 italic">Order matters</span>
                  </div>
                  <div className="text-3xl font-black text-indigo-600">{result.nPr}</div>
              </div>
          </div>
      )}
    </div>
  );
};

export default ProbabilityCalculator;
