
import React, { useState } from 'react';
import { Gender } from '../../types';

interface Props {
  onBack: () => void;
  darkMode: boolean;
}

const BodyFatCalculator: React.FC<Props> = ({ onBack }) => {
  const [gender, setGender] = useState<Gender>('male');
  const [height, setHeight] = useState('');
  const [waist, setWaist] = useState('');
  const [neck, setNeck] = useState('');
  const [hip, setHip] = useState('');
  const [result, setResult] = useState<string | null>(null);

  const calculateFat = () => {
    const h = parseFloat(height);
    const w = parseFloat(waist);
    const n = parseFloat(neck);
    const hp = parseFloat(hip);

    if (!h || !w || !n || (gender === 'female' && !hp)) return alert('Enter all measurements');

    let bodyFat = 0;
    if (gender === 'male') {
      bodyFat = 495 / (1.0324 - 0.19077 * Math.log10(w - n) + 0.15456 * Math.log10(h)) - 450;
    } else {
      bodyFat = 495 / (1.29579 - 0.35004 * Math.log10(w + hp - n) + 0.221 * Math.log10(h)) - 450;
    }

    setResult(bodyFat.toFixed(1));
  };

  return (
    <div className="max-w-2xl mx-auto bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-xl">
      <div className="flex items-center mb-6">
        <button onClick={onBack} className="mr-4 p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg">←</button>
        <h2 className="text-2xl font-bold">Body Fat Percentage</h2>
      </div>

      <div className="space-y-4">
        <div className="flex bg-slate-100 dark:bg-slate-800 p-1 rounded-xl">
            <button onClick={() => setGender('male')} className={`flex-1 p-2 rounded-lg ${gender === 'male' ? 'bg-white dark:bg-slate-700 shadow' : ''}`}>Male</button>
            <button onClick={() => setGender('female')} className={`flex-1 p-2 rounded-lg ${gender === 'female' ? 'bg-white dark:bg-slate-700 shadow' : ''}`}>Female</button>
        </div>
        <div className="grid grid-cols-2 gap-4">
            <div><label className="text-xs">Height (cm)</label><input type="number" value={height} onChange={e => setHeight(e.target.value)} className="w-full p-3 rounded-xl bg-slate-50 dark:bg-slate-800" /></div>
            <div><label className="text-xs">Waist (cm)</label><input type="number" value={waist} onChange={e => setWaist(e.target.value)} className="w-full p-3 rounded-xl bg-slate-50 dark:bg-slate-800" /></div>
            <div><label className="text-xs">Neck (cm)</label><input type="number" value={neck} onChange={e => setNeck(e.target.value)} className="w-full p-3 rounded-xl bg-slate-50 dark:bg-slate-800" /></div>
            {gender === 'female' && <div><label className="text-xs">Hip (cm)</label><input type="number" value={hip} onChange={e => setHip(e.target.value)} className="w-full p-3 rounded-xl bg-slate-50 dark:bg-slate-800" /></div>}
        </div>
        <button onClick={calculateFat} className="w-full py-4 bg-primary-600 text-white rounded-xl font-bold">Estimate Body Fat</button>
        {result && (
            <div className="mt-6 p-8 bg-primary-50 dark:bg-primary-900/20 rounded-2xl text-center">
                <div className="text-5xl font-black">{result}%</div>
                <p className="mt-2 opacity-70">U.S. Navy Method Estimate</p>
            </div>
        )}
      </div>
    </div>
  );
};

export default BodyFatCalculator;
