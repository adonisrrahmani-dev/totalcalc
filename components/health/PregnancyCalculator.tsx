
import React, { useState } from 'react';

interface Props {
  onBack: () => void;
  darkMode: boolean;
}

const PregnancyCalculator: React.FC<Props> = ({ onBack }) => {
  const [lmp, setLmp] = useState('');
  const [result, setResult] = useState<string | null>(null);

  const calculateDue = () => {
    if (!lmp) return;
    const date = new Date(lmp);
    // Naegele's rule: LMP + 7 days - 3 months + 1 year
    const due = new Date(date);
    due.setDate(due.getDate() + 7);
    due.setMonth(due.getMonth() + 9);
    
    setResult(due.toLocaleDateString('en-US', { dateStyle: 'long' }));
  };

  return (
    <div className="max-w-2xl mx-auto bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-xl">
      <div className="flex items-center mb-6">
        <button onClick={onBack} className="mr-4 p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg">←</button>
        <h2 className="text-2xl font-bold">Pregnancy Due Date</h2>
      </div>
      <label className="block mb-2 font-medium">First day of last period (LMP)</label>
      <input type="date" value={lmp} onChange={e => setLmp(e.target.value)} className="w-full p-4 rounded-xl bg-slate-50 dark:bg-slate-800 mb-6" />
      <button onClick={calculateDue} className="w-full py-4 bg-pink-500 text-white rounded-xl font-bold">Estimate Due Date</button>
      {result && (
          <div className="mt-8 p-8 bg-pink-50 dark:bg-pink-900/20 rounded-2xl text-center border border-pink-100">
              <span className="text-pink-600 font-bold uppercase tracking-widest text-xs">Estimated Arrival</span>
              <div className="text-3xl font-black mt-2 text-pink-700 dark:text-pink-300">{result}</div>
          </div>
      )}
    </div>
  );
};

export default PregnancyCalculator;
