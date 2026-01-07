
import React, { useState } from 'react';
import { CalculatorProps } from '../../types';

const TipCalculator: React.FC<CalculatorProps> = ({ onBack }) => {
  const [bill, setBill] = useState('50');
  const [tipPct, setTipPct] = useState('15');
  const [people, setPeople] = useState('2');
  const [result, setResult] = useState<any>(null);

  const calculate = () => {
    const b = parseFloat(bill);
    const t = parseFloat(tipPct) / 100;
    const p = parseInt(people);
    if (!b || !p) return;
    const totalTip = b * t;
    const total = b + totalTip;
    setResult({
        tipPer: (totalTip / p).toFixed(2),
        totalPer: (total / p).toFixed(2)
    });
  };

  return (
    <div className="max-w-2xl mx-auto bg-white dark:bg-slate-900 rounded-[2.5rem] p-10 shadow-xl">
      <div className="flex items-center mb-8">
        <button onClick={onBack} className="mr-4 p-2.5 bg-slate-50 dark:bg-slate-800 rounded-xl">←</button>
        <h2 className="text-2xl font-bold">Tip Calculator</h2>
      </div>
      <div className="space-y-6">
          <input type="number" placeholder="Bill Amount" value={bill} onChange={e => setBill(e.target.value)} className="w-full p-5 rounded-2xl bg-slate-50 dark:bg-slate-800 font-bold text-xl" />
          <div className="grid grid-cols-2 gap-4">
              <input type="number" placeholder="Tip %" value={tipPct} onChange={e => setTipPct(e.target.value)} className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800" />
              <input type="number" placeholder="People" value={people} onChange={e => setPeople(e.target.value)} className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800" />
          </div>
          <button onClick={calculate} className="w-full py-5 bg-emerald-600 text-white rounded-2xl font-bold">Split the Bill</button>
          {result && (
              <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="p-6 bg-slate-50 dark:bg-slate-800 rounded-3xl text-center">
                      <div className="text-xs font-bold opacity-40 uppercase mb-1">Tip / Person</div>
                      <div className="text-3xl font-black text-emerald-600">${result.tipPer}</div>
                  </div>
                  <div className="p-6 bg-slate-50 dark:bg-slate-800 rounded-3xl text-center">
                      <div className="text-xs font-bold opacity-40 uppercase mb-1">Total / Person</div>
                      <div className="text-3xl font-black text-slate-900 dark:text-white">${result.totalPer}</div>
                  </div>
              </div>
          )}
      </div>
    </div>
  );
};

export default TipCalculator;
