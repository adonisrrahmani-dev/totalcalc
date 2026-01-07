
import React, { useState } from 'react';
import { CalculatorProps } from '../../types';

const AgeCalculator: React.FC<CalculatorProps> = ({ onBack }) => {
  const [dob, setDob] = useState('');
  const [age, setAge] = useState<any>(null);

  const calculate = () => {
    if (!dob) return;
    const birth = new Date(dob);
    const now = new Date();
    const diff = now.getTime() - birth.getTime();
    const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
    const months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30.44));
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    setAge({ years, months, days });
  };

  return (
    <div className="max-w-2xl mx-auto bg-white dark:bg-slate-900 rounded-[2.5rem] p-10 shadow-xl">
      <div className="flex items-center mb-8">
        <button onClick={onBack} className="mr-4 p-2.5 bg-slate-50 dark:bg-slate-800 rounded-xl">←</button>
        <h2 className="text-2xl font-bold">Age Calculator</h2>
      </div>
      <input type="date" value={dob} onChange={e => setDob(e.target.value)} className="w-full p-5 rounded-2xl bg-slate-50 dark:bg-slate-800 mb-6 font-bold" />
      <button onClick={calculate} className="w-full py-5 bg-primary-600 text-white rounded-2xl font-bold">How old am I?</button>
      {age && (
          <div className="mt-8 grid grid-cols-3 gap-3">
              <div className="p-4 bg-slate-100 dark:bg-slate-800 rounded-2xl text-center"><div className="text-2xl font-black">{age.years}</div><div className="text-xs opacity-50">Years</div></div>
              <div className="p-4 bg-slate-100 dark:bg-slate-800 rounded-2xl text-center"><div className="text-2xl font-black">{age.months}</div><div className="text-xs opacity-50">Months</div></div>
              <div className="p-4 bg-slate-100 dark:bg-slate-800 rounded-2xl text-center"><div className="text-2xl font-black">{age.days}</div><div className="text-xs opacity-50">Days</div></div>
          </div>
      )}
    </div>
  );
};

export default AgeCalculator;
