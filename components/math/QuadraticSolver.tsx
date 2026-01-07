
import React, { useState } from 'react';

interface Props {
  onBack: () => void;
  darkMode: boolean;
}

const QuadraticSolver: React.FC<Props> = ({ onBack }) => {
  const [a, setA] = useState('1');
  const [b, setB] = useState('-5');
  const [c, setC] = useState('6');
  const [result, setResult] = useState<any>(null);

  const solve = () => {
    const va = parseFloat(a);
    const vb = parseFloat(b);
    const vc = parseFloat(c);

    if (va === 0) return alert('Input "a" cannot be 0 for a quadratic equation.');

    const d = vb * vb - 4 * va * vc;
    let roots = [];

    if (d > 0) {
        roots = [
            ((-vb + Math.sqrt(d)) / (2 * va)).toFixed(4),
            ((-vb - Math.sqrt(d)) / (2 * va)).toFixed(4)
        ];
    } else if (d === 0) {
        roots = [(-vb / (2 * va)).toFixed(4)];
    } else {
        const real = (-vb / (2 * va)).toFixed(4);
        const imag = (Math.sqrt(-d) / (2 * va)).toFixed(4);
        roots = [`${real} + ${imag}i`, `${real} - ${imag}i`];
    }

    setResult({ roots, d });
  };

  return (
    <div className="max-w-2xl mx-auto bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-xl">
      <div className="flex items-center mb-6">
        <button onClick={onBack} className="mr-4 p-2 bg-slate-50 dark:bg-slate-800 rounded-lg">←</button>
        <h2 className="text-2xl font-bold">Quadratic Solver</h2>
      </div>
      <p className="mb-6 text-sm text-slate-500">Solves equations of form ax² + bx + c = 0</p>
      
      <div className="grid grid-cols-3 gap-4 mb-8">
          <div><label className="text-xs font-bold block mb-1">a</label><input type="number" value={a} onChange={e => setA(e.target.value)} className="w-full p-4 rounded-xl bg-slate-50 dark:bg-slate-800 text-center text-xl font-bold" /></div>
          <div><label className="text-xs font-bold block mb-1">b</label><input type="number" value={b} onChange={e => setB(e.target.value)} className="w-full p-4 rounded-xl bg-slate-50 dark:bg-slate-800 text-center text-xl font-bold" /></div>
          <div><label className="text-xs font-bold block mb-1">c</label><input type="number" value={c} onChange={e => setC(e.target.value)} className="w-full p-4 rounded-xl bg-slate-50 dark:bg-slate-800 text-center text-xl font-bold" /></div>
      </div>

      <button onClick={solve} className="w-full py-4 bg-primary-600 text-white rounded-xl font-bold hover:bg-primary-700 transition-all">Find Roots</button>

      {result && (
          <div className="mt-8 p-8 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 animate-in fade-in zoom-in-95">
              <div className="text-xs text-slate-400 uppercase tracking-widest font-bold mb-4">Results</div>
              <div className="space-y-4">
                  {result.roots.map((r: string, idx: number) => (
                      <div key={idx} className="flex justify-between items-center border-b border-slate-200 dark:border-slate-700 pb-2">
                          <span className="font-medium text-slate-500">Root x{idx+1}</span>
                          <span className="text-2xl font-black text-primary-600">{r}</span>
                      </div>
                  ))}
                  <div className="flex justify-between items-center pt-2">
                      <span className="font-medium text-slate-500">Discriminant (Δ)</span>
                      <span className="font-bold">{result.d}</span>
                  </div>
              </div>
          </div>
      )}
    </div>
  );
};

export default QuadraticSolver;
