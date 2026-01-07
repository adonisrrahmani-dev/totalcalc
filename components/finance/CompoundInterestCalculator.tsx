
import React, { useState } from 'react';

interface Props {
  onBack: () => void;
  darkMode: boolean;
}

const CompoundInterestCalculator: React.FC<Props> = ({ onBack }) => {
  const [principal, setPrincipal] = useState('5000');
  const [rate, setRate] = useState('5');
  const [years, setYears] = useState('10');
  const [frequency, setFrequency] = useState('12'); // Monthly
  const [result, setResult] = useState<string | null>(null);

  const calculateCompound = () => {
    const p = parseFloat(principal);
    const r = parseFloat(rate) / 100;
    const t = parseFloat(years);
    const n = parseFloat(frequency);

    const amount = p * Math.pow(1 + r/n, n * t);
    setResult(amount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }));
  };

  return (
    <div className="max-w-2xl mx-auto bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-xl">
      <div className="flex items-center mb-6">
        <button onClick={onBack} className="mr-4 p-2 bg-slate-50 dark:bg-slate-800 rounded-lg">←</button>
        <h2 className="text-2xl font-bold">Compound Interest</h2>
      </div>
      <div className="space-y-4">
          <input type="number" placeholder="Principal Amount ($)" value={principal} onChange={e => setPrincipal(e.target.value)} className="w-full p-4 rounded-xl bg-slate-50 dark:bg-slate-800" />
          <input type="number" placeholder="Interest Rate (%)" value={rate} onChange={e => setRate(e.target.value)} className="w-full p-4 rounded-xl bg-slate-50 dark:bg-slate-800" />
          <input type="number" placeholder="Years" value={years} onChange={e => setYears(e.target.value)} className="w-full p-4 rounded-xl bg-slate-50 dark:bg-slate-800" />
          <select value={frequency} onChange={e => setFrequency(e.target.value)} className="w-full p-4 rounded-xl bg-slate-50 dark:bg-slate-800 outline-none">
              <option value="1">Compounded Yearly</option>
              <option value="4">Compounded Quarterly</option>
              <option value="12">Compounded Monthly</option>
              <option value="365">Compounded Daily</option>
          </select>
          <button onClick={calculateCompound} className="w-full py-4 bg-emerald-600 text-white rounded-xl font-bold">Calculate Future Value</button>
          {result && (
              <div className="mt-8 p-8 bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl text-center">
                  <div className="text-sm uppercase text-emerald-600 font-bold mb-1">Estimated Future Balance</div>
                  <div className="text-5xl font-black text-slate-900 dark:text-white">${result}</div>
              </div>
          )}
      </div>
    </div>
  );
};

export default CompoundInterestCalculator;
