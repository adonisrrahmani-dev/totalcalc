
import React, { useState } from 'react';
import { Gender, UnitSystem, HealthResult, CalculatorProps } from '../../types';

const BMRCalculator: React.FC<CalculatorProps> = ({ onBack, t }) => {
  const [units, setUnits] = useState<UnitSystem>('metric');
  const [gender, setGender] = useState<Gender>('male');
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [result, setResult] = useState<HealthResult | null>(null);

  const calculateBMR = () => {
    const w = parseFloat(weight);
    const h = parseFloat(height);
    const a = parseFloat(age);

    if (isNaN(w) || isNaN(h) || isNaN(a) || w <= 0 || h <= 0 || a <= 0) {
      alert(t('common.invalidInput'));
      return;
    }

    let bmr = 0;
    let kg = w;
    let cm = h;

    if (units === 'imperial') {
      kg = w * 0.453592;
      cm = h * 2.54;
    }

    if (gender === 'male') {
      bmr = 10 * kg + 6.25 * cm - 5 * a + 5;
    } else {
      bmr = 10 * kg + 6.25 * cm - 5 * a - 161;
    }

    setResult({
      value: Math.round(bmr),
      description: `BMR: ${Math.round(bmr)} kcal/day`,
      advice: t('calculators.bmr.desc')
    });
  };

  return (
    <div className="max-w-2xl mx-auto bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-xl">
      <div className="flex items-center mb-6">
        <button onClick={onBack} className="mr-4 p-2 bg-slate-50 dark:bg-slate-800 rounded-lg hover:bg-slate-100 transition-colors">
          <span className="mr-2">←</span>{t('common.back')}
        </button>
        <h2 className="text-2xl font-bold">{t('calculators.bmr.name')}</h2>
      </div>

      <div className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <button 
            onClick={() => setGender('male')}
            className={`py-3 rounded-xl border-2 transition-all font-bold ${gender === 'male' ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20 text-primary-600' : 'border-transparent bg-slate-50 dark:bg-slate-800'}`}
          >
            Male ♂
          </button>
          <button 
            onClick={() => setGender('female')}
            className={`py-3 rounded-xl border-2 transition-all font-bold ${gender === 'female' ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20 text-primary-600' : 'border-transparent bg-slate-50 dark:bg-slate-800'}`}
          >
            Female ♀
          </button>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">{t('calculators.bmr.age')}</label>
          <input 
            type="number" value={age} onChange={(e) => setAge(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 outline-none" placeholder="25"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">{t('calculators.bmi.weight')} ({units === 'metric' ? 'kg' : 'lb'})</label>
            <input 
              type="number" value={weight} onChange={(e) => setWeight(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 outline-none" placeholder="70"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">{t('calculators.bmi.height')} ({units === 'metric' ? 'cm' : 'in'})</label>
            <input 
              type="number" value={height} onChange={(e) => setHeight(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 outline-none" placeholder="175"
            />
          </div>
        </div>

        <button 
          onClick={calculateBMR}
          className="w-full bg-primary-600 hover:bg-primary-700 text-white py-4 rounded-xl font-bold shadow-lg shadow-primary-500/20"
        >
          {t('calculators.bmr.calculate')}
        </button>

        {result && (
          <div className="mt-8 p-8 bg-primary-50 dark:bg-primary-900/20 rounded-2xl text-center">
            <div className="text-5xl font-black mb-2">{result.value} <span className="text-xl font-normal opacity-70">kcal/day</span></div>
            <p className="text-slate-600 dark:text-slate-300">{result.advice}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BMRCalculator;
