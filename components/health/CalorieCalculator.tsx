
import React, { useState } from 'react';
import { Gender } from '../../types';

interface Props {
  onBack: () => void;
  darkMode: boolean;
}

const CalorieCalculator: React.FC<Props> = ({ onBack }) => {
  const [age, setAge] = useState('');
  const [gender, setGender] = useState<Gender>('male');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [activity, setActivity] = useState('1.2');
  const [result, setResult] = useState<any>(null);

  const calculateTDEE = () => {
    const w = parseFloat(weight);
    const h = parseFloat(height);
    const a = parseFloat(age);
    const act = parseFloat(activity);

    if (!w || !h || !a) return alert('Fill all fields');

    const bmr = gender === 'male' 
      ? 10 * w + 6.25 * h - 5 * a + 5 
      : 10 * w + 6.25 * h - 5 * a - 161;
    
    const tdee = bmr * act;

    setResult({
        maintain: Math.round(tdee),
        lose: Math.round(tdee - 500),
        gain: Math.round(tdee + 500)
    });
  };

  return (
    <div className="max-w-2xl mx-auto bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-xl">
      <div className="flex items-center mb-6">
        <button onClick={onBack} className="mr-4 p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg">←</button>
        <h2 className="text-2xl font-bold">Calorie Needs (TDEE)</h2>
      </div>

      <div className="space-y-4">
        <div className="grid grid-cols-3 gap-4">
            <input type="number" placeholder="Age" value={age} onChange={e => setAge(e.target.value)} className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800" />
            <input type="number" placeholder="Weight (kg)" value={weight} onChange={e => setWeight(e.target.value)} className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800" />
            <input type="number" placeholder="Height (cm)" value={height} onChange={e => setHeight(e.target.value)} className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800" />
        </div>

        <select value={activity} onChange={e => setActivity(e.target.value)} className="w-full p-3 rounded-xl bg-slate-50 dark:bg-slate-800 outline-none">
            <option value="1.2">Sedentary (office job)</option>
            <option value="1.375">Lightly Active (1-3 days/week)</option>
            <option value="1.55">Moderately Active (3-5 days/week)</option>
            <option value="1.725">Very Active (6-7 days/week)</option>
            <option value="1.9">Extra Active (physical job)</option>
        </select>

        <button onClick={calculateTDEE} className="w-full py-4 bg-primary-600 text-white rounded-xl font-bold">Calculate Needs</button>

        {result && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-xl text-center">
                    <div className="text-sm opacity-60">Maintain</div>
                    <div className="text-2xl font-bold">{result.maintain}</div>
                </div>
                <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-xl text-center border border-green-200">
                    <div className="text-sm opacity-60">Weight Loss</div>
                    <div className="text-2xl font-bold text-green-600">{result.lose}</div>
                </div>
                <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl text-center border border-blue-200">
                    <div className="text-sm opacity-60">Weight Gain</div>
                    <div className="text-2xl font-bold text-blue-600">{result.gain}</div>
                </div>
            </div>
        )}
      </div>
    </div>
  );
};

export default CalorieCalculator;
