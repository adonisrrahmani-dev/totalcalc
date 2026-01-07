
import React, { useState } from 'react';
import { CalculatorProps } from '../../types';

const LotteryOdds: React.FC<CalculatorProps> = ({ onBack }) => {
  const [pool, setPool] = useState('50');
  const [picks, setPicks] = useState('5');
  const [result, setResult] = useState<string | null>(null);

  const calculate = () => {
    const n = parseInt(pool);
    const r = parseInt(picks);
    if (isNaN(n) || isNaN(r) || r > n) return alert('Invalid input');

    const fact = (num: number) => {
      let res = 1;
      for (let i = 2; i <= num; i++) res *= i;
      return res;
    };

    // nCr = n! / (r! * (n-r)!)
    // To avoid huge factorials, we simplify
    let odds = 1;
    for (let i = 0; i < r; i++) {
      odds *= (n - i) / (r - i);
    }
    
    setResult(Math.round(odds).toLocaleString());
  };

  return (
    <div className="max-w-xl mx-auto bg-white dark:bg-slate-900 rounded-[2.5rem] p-10 shadow-xl">
      <div className="flex items-center mb-8">
        <button onClick={onBack} className="mr-4 p-2.5 bg-slate-50 dark:bg-slate-800 rounded-xl">←</button>
        <h2 className="text-2xl font-bold">Lottery Odds</h2>
      </div>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div><label className="text-xs font-bold opacity-40 uppercase block mb-1">Total Balls</label><input type="number" value={pool} onChange={e => setPool(e.target.value)} className="w-full p-4 rounded-xl bg-slate-50 dark:bg-slate-800" /></div>
          <div><label className="text-xs font-bold opacity-40 uppercase block mb-1">Picks</label><input type="number" value={picks} onChange={e => setPicks(e.target.value)} className="w-full p-4 rounded-xl bg-slate-50 dark:bg-slate-800" /></div>
        </div>
        <button onClick={calculate} className="w-full py-5 bg-indigo-600 text-white rounded-xl font-bold">What are the odds?</button>
        {result && (
          <div className="mt-8 p-10 bg-indigo-50 dark:bg-indigo-900/20 rounded-3xl text-center">
            <div className="text-sm opacity-60 uppercase font-bold">1 In chance of winning</div>
            <div className="text-5xl font-black text-indigo-600 mt-2">{result}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LotteryOdds;
