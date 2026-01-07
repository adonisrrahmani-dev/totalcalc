
import React, { useState } from 'react';
import { CalculatorProps } from '../../types';

const DateDiffCalculator: React.FC<CalculatorProps> = ({ onBack }) => {
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');
  const [result, setResult] = useState<any>(null);

  const calculate = () => {
    if (!start || !end) return;
    const d1 = new Date(start);
    const d2 = new Date(end);
    const diff = Math.abs(d2.getTime() - d1.getTime());
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const weeks = (days / 7).toFixed(1);
    const months = (days / 30.44).toFixed(1);

    setResult({ days, weeks, months });
  };

  return (
    <div className="max-w-2xl mx-auto bg-white dark:bg-slate-900 rounded-[2.5rem] p-10 shadow-xl">
      <div className="flex items-center mb-8">
        <button onClick={onBack} className="mr-4 p-2.5 bg-slate-50 dark:bg-slate-800 rounded-xl">←</button>
        <h2 className="text-2xl font-bold">Date Difference</h2>
      </div>
      <div className="space-y-4">
        <div><label className="text-xs font-bold opacity-40 uppercase block mb-1">Start Date</label><input type="date" value={start} onChange={e => setStart(e.target.value)} className="w-full p-4 rounded-xl bg-slate-50 dark:bg-slate-800" /></div>
        <div><label className="text-xs font-bold opacity-40 uppercase block mb-1">End Date</label><input type="date" value={end} onChange={e => setEnd(e.target.value)} className="w-full p-4 rounded-xl bg-slate-50 dark:bg-slate-800" /></div>
        <button onClick={calculate} className="w-full py-5 bg-primary-600 text-white rounded-xl font-bold">Calculate Gap</button>
        {result && (
          <div className="mt-8 grid grid-cols-3 gap-3">
            <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-xl text-center"><div className="text-xl font-black">{result.days}</div><div className="text-[10px] opacity-50 uppercase">Days</div></div>
            <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-xl text-center"><div className="text-xl font-black">{result.weeks}</div><div className="text-[10px] opacity-50 uppercase">Weeks</div></div>
            <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-xl text-center"><div className="text-xl font-black">{result.months}</div><div className="text-[10px] opacity-50 uppercase">Months</div></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DateDiffCalculator;
