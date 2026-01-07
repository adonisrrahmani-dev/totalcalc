
import React, { useState } from 'react';
import { UnitSystem, HealthResult, Language, CalculatorProps } from '../../types';

const BMICalculator: React.FC<CalculatorProps> = ({ onBack, t }) => {
  const [units, setUnits] = useState<UnitSystem>('metric');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [result, setResult] = useState<HealthResult | null>(null);

  const calculateBMI = () => {
    const w = parseFloat(weight);
    const h = parseFloat(height);

    if (isNaN(w) || isNaN(h) || w <= 0 || h <= 0) {
      alert(t('common.invalidInput'));
      return;
    }

    let bmiValue = 0;
    if (units === 'metric') {
      bmiValue = w / Math.pow(h / 100, 2);
    } else {
      bmiValue = (w / Math.pow(h, 2)) * 703;
    }

    let category = '';
    let adviceKey = '';
    let color = '';

    if (bmiValue < 18.5) {
      category = 'Underweight';
      adviceKey = 'calculators.bmi.advice.under';
      color = 'text-blue-500';
    } else if (bmiValue < 25) {
      category = 'Normal';
      adviceKey = 'calculators.bmi.advice.normal';
      color = 'text-green-500';
    } else if (bmiValue < 30) {
      category = 'Overweight';
      adviceKey = 'calculators.bmi.advice.over';
      color = 'text-yellow-500';
    } else {
      category = 'Obese';
      adviceKey = 'calculators.bmi.advice.obese';
      color = 'text-red-500';
    }

    setResult({
      value: bmiValue.toFixed(1),
      category,
      color,
      description: `${t('calculators.bmi.name')}: ${bmiValue.toFixed(1)}`,
      advice: t(adviceKey)
    });
  };

  return (
    <div className="max-w-2xl mx-auto bg-white dark:bg-slate-900 rounded-[2.5rem] p-10 shadow-xl animate-in zoom-in-95 duration-300">
      <div className="flex items-center mb-6">
        <button onClick={onBack} className="mr-4 p-2 bg-slate-50 dark:bg-slate-800 rounded-lg hover:bg-slate-100 transition-colors">
          <span className="mr-2">←</span>{t('common.back')}
        </button>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">{t('calculators.bmi.name')}</h2>
      </div>

      <p className="text-slate-500 dark:text-slate-400 mb-8">{t('calculators.bmi.desc')}</p>

      <div className="space-y-6">
        <div className="flex p-1 bg-slate-100 dark:bg-slate-800 rounded-2xl">
          <button 
            onClick={() => setUnits('metric')}
            className={`flex-1 py-2 rounded-xl font-bold transition-all ${units === 'metric' ? 'bg-white dark:bg-slate-700 shadow-sm text-primary-600' : 'text-slate-500'}`}
          >
            {units === 'metric' ? 'Metric' : 'Métrico'} (kg/cm)
          </button>
          <button 
            onClick={() => setUnits('imperial')}
            className={`flex-1 py-2 rounded-xl font-bold transition-all ${units === 'imperial' ? 'bg-white dark:bg-slate-700 shadow-sm text-primary-600' : 'text-slate-500'}`}
          >
            {units === 'imperial' ? 'Imperial' : 'Imperial'} (lb/in)
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-bold mb-2 text-slate-600 dark:text-slate-400">{t('calculators.bmi.weight')} ({units === 'metric' ? 'kg' : 'lb'})</label>
            <input 
              type="number" value={weight} onChange={(e) => setWeight(e.target.value)}
              className="w-full px-4 py-4 rounded-xl bg-slate-50 dark:bg-slate-800 border-none outline-none focus:ring-2 focus:ring-primary-500 text-slate-900 dark:text-white"
            />
          </div>
          <div>
            <label className="block text-sm font-bold mb-2 text-slate-600 dark:text-slate-400">{t('calculators.bmi.height')} ({units === 'metric' ? 'cm' : 'in'})</label>
            <input 
              type="number" value={height} onChange={(e) => setHeight(e.target.value)}
              className="w-full px-4 py-4 rounded-xl bg-slate-50 dark:bg-slate-800 border-none outline-none focus:ring-2 focus:ring-primary-500 text-slate-900 dark:text-white"
            />
          </div>
        </div>

        <button 
          onClick={calculateBMI}
          className="w-full bg-primary-600 hover:bg-primary-700 text-white py-5 rounded-2xl font-black text-lg transition-all shadow-xl shadow-primary-500/30 active:scale-95"
        >
          {t('common.calculate')}
        </button>

        {result && (
          <div className="mt-8 p-10 bg-primary-50 dark:bg-primary-900/20 rounded-[2rem] border border-primary-100 dark:border-primary-800 animate-in fade-in slide-in-from-bottom-4">
            <div className="text-center">
              <span className="text-slate-500 dark:text-slate-400 text-xs uppercase tracking-widest font-black">{t('common.results')}</span>
              <div className="text-6xl font-black my-4 text-slate-900 dark:text-white">{result.value}</div>
              <div className={`text-2xl font-bold ${result.color}`}>{result.category}</div>
              <p className="mt-6 text-slate-600 dark:text-slate-300 italic text-lg leading-relaxed">"{result.advice}"</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BMICalculator;
