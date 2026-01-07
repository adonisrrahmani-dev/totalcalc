
import React, { useState } from 'react';

interface Props {
  onBack: () => void;
  darkMode: boolean;
}

const SalaryCalculator: React.FC<Props> = ({ onBack }) => {
  const [salary, setSalary] = useState('50000');
  const [result, setResult] = useState<any>(null);

  const calculate = () => {
    const s = parseFloat(salary);
    if (!s) return;
    setResult({
        monthly: (s / 12).toFixed(2),
        weekly: (s / 52).toFixed(2),
        daily: (s / 260).toFixed(2),
        hourly: (s / 2080).toFixed(2)
    });
  };

  return (
    <div className="max-w-2xl mx-auto bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-xl">
      <div className="flex items-center mb-6">
        <button onClick={onBack} className="mr-4 p-2 bg-slate-50 dark:bg-slate-800 rounded-lg">←</button>
        <h2 className="text-2xl font-bold">Salary Calculator</h2>
      </div>
      <label className="text-sm font-bold uppercase opacity-50">Annual Gross Salary</label>
      <input type="number" value={salary} onChange={e => setSalary(e.target.value)} className="w-full p-5 rounded-xl bg-slate-50 dark:bg-slate-800 text-2xl font-black mb-6" />
      <button onClick={calculate} className="w-full py-4 bg-primary-600 text-white rounded-xl font-bold">Break It Down</button>
      {result && (
          <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-xl text-center">
                  <div className="text-xs opacity-50">Monthly</div>
                  <div className="text-xl font-bold">${result.monthly}</div>
              </div>
              <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-xl text-center">
                  <div className="text-xs opacity-50">Weekly</div>
                  <div className="text-xl font-bold">${result.weekly}</div>
              </div>
              <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-xl text-center">
                  <div className="text-xs opacity-50">Daily (Business)</div>
                  <div className="text-xl font-bold">${result.daily}</div>
              </div>
              <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-xl text-center">
                  <div className="text-xs opacity-50">Hourly (2080/yr)</div>
                  <div className="text-xl font-bold">${result.hourly}</div>
              </div>
          </div>
      )}
    </div>
  );
};

export default SalaryCalculator;
