
import React, { useState } from 'react';
import { CalculatorProps } from '../../types';

const RandomNumberGen: React.FC<CalculatorProps> = ({ onBack, t }) => {
  const [min, setMin] = useState('1');
  const [max, setMax] = useState('100');
  const [result, setResult] = useState<number | null>(null);

  const generate = () => {
    const minVal = parseInt(min);
    const maxVal = parseInt(max);
    if (isNaN(minVal) || isNaN(maxVal) || minVal >= maxVal) return alert(t('common.invalidInput'));
    const num = Math.floor(Math.random() * (maxVal - minVal + 1)) + minVal;
    setResult(num);
  };

  return (
    <div className="max-w-2xl mx-auto bg-white dark:bg-slate-900 rounded-[2.5rem] p-10 shadow-xl">
      <div className="flex items-center mb-8">
        <button onClick={onBack} className="mr-4 p-2.5 bg-slate-50 dark:bg-slate-800 rounded-xl hover:bg-slate-100 transition-colors">←</button>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">{t('calculators.random.name')}</h2>
      </div>
      <div className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
              <div><label className="text-xs font-bold opacity-40 uppercase block mb-2">{t('calculators.random.min')}</label><input type="number" value={min} onChange={e => setMin(e.target.value)} className="w-full p-4 rounded-2xl bg-slate-50 dark:bg-slate-800 font-bold outline-none border-none focus:ring-2 focus:ring-primary-500 text-slate-900 dark:text-white" /></div>
              <div><label className="text-xs font-bold opacity-40 uppercase block mb-2">{t('calculators.random.max')}</label><input type="number" value={max} onChange={e => setMax(e.target.value)} className="w-full p-4 rounded-2xl bg-slate-50 dark:bg-slate-800 font-bold outline-none border-none focus:ring-2 focus:ring-primary-500 text-slate-900 dark:text-white" /></div>
          </div>
          <button onClick={generate} className="w-full py-5 bg-primary-600 text-white rounded-2xl font-bold text-xl hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-primary-500/20">{t('calculators.random.roll')}</button>
          {result !== null && (
              <div className="mt-8 text-center p-12 bg-primary-50 dark:bg-primary-900/20 rounded-3xl border border-primary-100 dark:border-primary-800 animate-in zoom-in-90">
                  <div className="text-8xl font-black text-primary-600 mb-2">{result}</div>
                  <p className="text-slate-500 dark:text-slate-400 font-medium">{t('calculators.random.msg')}</p>
              </div>
          )}
      </div>
    </div>
  );
};

export default RandomNumberGen;
