
import React, { useState } from 'react';

interface Props {
  onBack: () => void;
  darkMode: boolean;
}

const RetirementCalculator: React.FC<Props> = ({ onBack }) => {
  const [currentAge, setCurrentAge] = useState('25');
  const [retireAge, setRetireAge] = useState('65');
  const [savings, setSavings] = useState('10000');
  const [monthly, setMonthly] = useState('500');
  const [returnRate, setReturnRate] = useState('7');
  const [result, setResult] = useState<string | null>(null);

  const calculateRetirement = () => {
    const ageStart = parseInt(currentAge);
    const ageEnd = parseInt(retireAge);
    const months = (ageEnd - ageStart) * 12;
    const r = parseFloat(returnRate) / 100 / 12;
    const m = parseFloat(monthly);
    let total = parseFloat(savings);

    for(let i = 0; i < months; i++) {
        total = (total + m) * (1 + r);
    }

    setResult(Math.round(total).toLocaleString());
  };

  return (
    <div className="max-w-2xl mx-auto bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-xl">
      <div className="flex items-center mb-6">
        <button onClick={onBack} className="mr-4 p-2 bg-slate-50 dark:bg-slate-800 rounded-lg">←</button>
        <h2 className="text-2xl font-bold">Retirement Planner</h2>
      </div>
      <div className="grid grid-cols-2 gap-4 mb-4">
          <div><label className="text-xs">Current Age</label><input type="number" value={currentAge} onChange={e => setCurrentAge(e.target.value)} className="w-full p-4 rounded-xl bg-slate-50 dark:bg-slate-800" /></div>
          <div><label className="text-xs">Retirement Age</label><input type="number" value={retireAge} onChange={e => setRetireAge(e.target.value)} className="w-full p-4 rounded-xl bg-slate-50 dark:bg-slate-800" /></div>
          <div><label className="text-xs">Current Savings ($)</label><input type="number" value={savings} onChange={e => setSavings(e.target.value)} className="w-full p-4 rounded-xl bg-slate-50 dark:bg-slate-800" /></div>
          <div><label className="text-xs">Monthly Contribution ($)</label><input type="number" value={monthly} onChange={e => setMonthly(e.target.value)} className="w-full p-4 rounded-xl bg-slate-50 dark:bg-slate-800" /></div>
      </div>
      <label className="text-xs">Expected Annual Return (%)</label>
      <input type="number" value={returnRate} onChange={e => setReturnRate(e.target.value)} className="w-full p-4 rounded-xl bg-slate-50 dark:bg-slate-800 mb-6" />
      <button onClick={calculateRetirement} className="w-full py-4 bg-primary-600 text-white rounded-xl font-bold">Calculate Future Nest Egg</button>
      {result && (
          <div className="mt-8 p-10 bg-primary-50 dark:bg-primary-900/20 rounded-2xl text-center">
              <div className="text-sm font-bold opacity-60 uppercase mb-2">Estimated Balance at Age {retireAge}</div>
              <div className="text-6xl font-black text-slate-900 dark:text-white">${result}</div>
          </div>
      )}
    </div>
  );
};

export default RetirementCalculator;
