
import React, { useState } from 'react';

interface Props {
  onBack: () => void;
  darkMode: boolean;
}

const BloodPressureCalculator: React.FC<Props> = ({ onBack }) => {
  const [systolic, setSystolic] = useState('');
  const [diastolic, setDiastolic] = useState('');
  const [result, setResult] = useState<any>(null);

  const checkBP = () => {
    const s = parseInt(systolic);
    const d = parseInt(diastolic);

    if (!s || !d) return;

    let cat = '';
    let col = '';

    if (s < 120 && d < 80) {
        cat = 'Normal';
        col = 'text-green-500';
    } else if (s < 130 && d < 80) {
        cat = 'Elevated';
        col = 'text-yellow-500';
    } else if (s < 140 || d < 90) {
        cat = 'Hypertension Stage 1';
        col = 'text-orange-500';
    } else if (s >= 180 || d >= 120) {
        cat = 'Hypertensive Crisis (SEEK MEDICAL HELP!)';
        col = 'text-red-600 font-black animate-pulse';
    } else {
        cat = 'Hypertension Stage 2';
        col = 'text-red-500';
    }

    setResult({ cat, col });
  };

  return (
    <div className="max-w-2xl mx-auto bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-xl">
      <div className="flex items-center mb-6">
        <button onClick={onBack} className="mr-4 p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg">←</button>
        <h2 className="text-2xl font-bold">Blood Pressure Checker</h2>
      </div>
      <div className="grid grid-cols-2 gap-4 mb-6">
          <div><label className="text-xs">Systolic (top)</label><input type="number" value={systolic} onChange={e => setSystolic(e.target.value)} className="w-full p-4 rounded-xl bg-slate-50 dark:bg-slate-800" /></div>
          <div><label className="text-xs">Diastolic (bottom)</label><input type="number" value={diastolic} onChange={e => setDiastolic(e.target.value)} className="w-full p-4 rounded-xl bg-slate-50 dark:bg-slate-800" /></div>
      </div>
      <button onClick={checkBP} className="w-full py-4 bg-primary-600 text-white rounded-xl font-bold">Check Status</button>
      {result && (
          <div className="mt-8 p-8 bg-slate-50 dark:bg-slate-800 rounded-2xl text-center">
              <span className="text-sm uppercase opacity-50">Category</span>
              <div className={`text-2xl font-bold mt-2 ${result.col}`}>{result.cat}</div>
          </div>
      )}
    </div>
  );
};

export default BloodPressureCalculator;
