
import React, { useState } from 'react';
import { CalculatorProps } from '../../types';

const DogAgeConverter: React.FC<CalculatorProps> = ({ onBack }) => {
  const [dogAge, setDogAge] = useState('2');
  const [result, setResult] = useState<number | null>(null);

  const calculate = () => {
    const age = parseFloat(dogAge);
    if (!age) return;
    // Accurate logic: first year is 15, second is 9, after that is 5
    let human;
    if (age <= 1) human = age * 15;
    else if (age <= 2) human = 15 + (age - 1) * 9;
    else human = 24 + (age - 2) * 5;
    setResult(Math.round(human));
  };

  return (
    <div className="max-w-2xl mx-auto bg-white dark:bg-slate-900 rounded-[2.5rem] p-10 shadow-xl">
      <div className="flex items-center mb-8">
        <button onClick={onBack} className="mr-4 p-2.5 bg-slate-50 dark:bg-slate-800 rounded-xl">←</button>
        <h2 className="text-2xl font-bold">Dog Age Converter</h2>
      </div>
      <div className="space-y-6">
          <input type="number" value={dogAge} onChange={e => setDogAge(e.target.value)} className="w-full p-5 rounded-2xl bg-slate-50 dark:bg-slate-800 text-2xl font-bold" placeholder="Dog's Age" />
          <button onClick={calculate} className="w-full py-5 bg-orange-500 text-white rounded-2xl font-bold">Human Equivalent</button>
          {result && (
              <div className="mt-8 p-12 bg-orange-50 dark:bg-orange-900/20 rounded-3xl text-center border border-orange-200">
                  <div className="text-6xl font-black text-orange-600 mb-2">{result}</div>
                  <p className="text-orange-800 dark:text-orange-200 font-bold uppercase tracking-widest text-sm">Human Years</p>
              </div>
          )}
      </div>
    </div>
  );
};

export default DogAgeConverter;
