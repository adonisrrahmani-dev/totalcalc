
import React, { useState } from 'react';
import { CalculatorProps } from '../../types';

const WaterIntakeCalculator: React.FC<CalculatorProps> = ({ onBack, t }) => {
  const [weight, setWeight] = useState('');
  const [exercise, setExercise] = useState('0');
  const [result, setResult] = useState<string | null>(null);

  const calculateWater = () => {
    const w = parseFloat(weight);
    const ex = parseFloat(exercise);

    if (isNaN(w) || w <= 0) return alert(t('common.invalidInput'));

    const base = w * 0.033;
    const extra = (ex / 30) * 0.35;
    const total = base + extra;

    setResult(total.toFixed(2));
  };

  return (
    <div className="max-w-2xl mx-auto bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-xl">
      <div className="flex items-center mb-6">
        <button onClick={onBack} className="mr-4 p-2 bg-slate-50 dark:bg-slate-800 rounded-lg hover:bg-slate-100 transition-colors">
          <span className="mr-2">←</span>{t('common.back')}
        </button>
        <h2 className="text-2xl font-bold">{t('calculators.water.name')}</h2>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2">{t('calculators.bmi.weight')} (kg)</label>
          <input 
            type="number" value={weight} onChange={(e) => setWeight(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800" placeholder="70"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">{t('calculators.water.exercise')}</label>
          <input 
            type="number" value={exercise} onChange={(e) => setExercise(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800" placeholder="30"
          />
        </div>

        <button 
          onClick={calculateWater}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-bold"
        >
          {t('common.calculate')}
        </button>

        {result && (
          <div className="mt-8 p-8 bg-blue-50 dark:bg-blue-900/20 rounded-2xl text-center">
            <span className="text-xs uppercase font-bold text-blue-400">{t('calculators.water.goal')}</span>
            <div className="text-5xl font-black text-blue-600 my-2">{result} <span className="text-xl font-normal">L</span></div>
            <p className="text-blue-800 dark:text-blue-300">~{Math.round(parseFloat(result) / 0.25)} glasses.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default WaterIntakeCalculator;
