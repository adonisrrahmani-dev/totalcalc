
import React, { useState } from 'react';
import { CalculatorProps } from '../../types';

const ClothingSuggester: React.FC<CalculatorProps> = ({ onBack }) => {
  const [temp, setTemp] = useState('20');
  const [result, setResult] = useState<string | null>(null);

  const suggest = () => {
    const t = parseFloat(temp);
    if (isNaN(t)) return;
    if (t < 0) setResult("Thermal gear, heavy coat, and gloves. It's freezing!");
    else if (t < 10) setResult("Heavy jacket, scarf, and warm layers.");
    else if (t < 18) setResult("Light jacket or sweater should be perfect.");
    else if (t < 25) setResult("T-shirt and light pants. Very pleasant!");
    else setResult("Shorts and light fabrics. It's a hot one!");
  };

  return (
    <div className="max-w-xl mx-auto bg-white dark:bg-slate-900 rounded-[2.5rem] p-10 shadow-xl">
      <div className="flex items-center mb-8">
        <button onClick={onBack} className="mr-4 p-2.5 bg-slate-50 dark:bg-slate-800 rounded-xl">←</button>
        <h2 className="text-2xl font-bold">What to Wear?</h2>
      </div>
      <div className="space-y-6">
        <div><label className="text-xs font-bold opacity-40 uppercase mb-2 block">Outside Temperature (°C)</label><input type="number" value={temp} onChange={e => setTemp(e.target.value)} className="w-full p-5 rounded-2xl bg-slate-50 dark:bg-slate-800 text-3xl font-black text-center" /></div>
        <button onClick={suggest} className="w-full py-5 bg-primary-600 text-white rounded-2xl font-bold">Get Suggestion</button>
        {result && (
          <div className="mt-8 p-8 bg-primary-50 dark:bg-primary-900/20 rounded-3xl text-center border border-primary-100">
            <p className="text-xl font-bold italic">"{result}"</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ClothingSuggester;
