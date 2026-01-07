
import React, { useState } from 'react';
import { CalculatorProps } from '../../types';

const HabitTracker: React.FC<CalculatorProps> = ({ onBack }) => {
  const [perWeek, setPerWeek] = useState('3');
  const [result, setResult] = useState<any>(null);

  const calculate = () => {
    const w = parseInt(perWeek);
    if (!w) return;
    setResult({
      year: w * 52,
      month: (w * 4.3).toFixed(1),
      threeYear: w * 52 * 3
    });
  };

  return (
    <div className="max-w-xl mx-auto bg-white dark:bg-slate-900 rounded-[2.5rem] p-10 shadow-xl">
      <div className="flex items-center mb-8">
        <button onClick={onBack} className="mr-4 p-2.5 bg-slate-50 dark:bg-slate-800 rounded-xl">←</button>
        <h2 className="text-2xl font-bold">Habit Projection</h2>
      </div>
      <div className="space-y-6">
        <div><label className="text-xs font-bold uppercase block mb-2 opacity-40">Times per Week</label><input type="number" value={perWeek} onChange={e => setPerWeek(e.target.value)} className="w-full p-5 rounded-2xl bg-slate-50 dark:bg-slate-800 text-3xl font-black" /></div>
        <button onClick={calculate} className="w-full py-5 bg-primary-600 text-white rounded-2xl font-bold">See Long Term</button>
        {result && (
          <div className="grid grid-cols-3 gap-3">
            <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-xl text-center"><div className="text-xl font-black">{result.month}</div><div className="text-[10px] uppercase">/ Month</div></div>
            <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-xl text-center"><div className="text-xl font-black">{result.year}</div><div className="text-[10px] uppercase">/ Year</div></div>
            <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-xl text-center"><div className="text-xl font-black">{result.threeYear}</div><div className="text-[10px] uppercase">3 Years</div></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HabitTracker;
