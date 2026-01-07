
import React, { useState } from 'react';
import { Gender } from '../../types';

interface Props {
  onBack: () => void;
  darkMode: boolean;
}

const IdealWeightCalculator: React.FC<Props> = ({ onBack }) => {
  const [gender, setGender] = useState<Gender>('male');
  const [height, setHeight] = useState('');
  const [result, setResult] = useState<string | null>(null);

  const calculateIdeal = () => {
    const h = parseFloat(height);
    if (!h || h < 152) return alert('Height must be at least 152.4 cm for these formulas.');

    const inchesAboveBase = (h - 152.4) / 2.54;
    let weight = 0;

    if (gender === 'male') {
        weight = 50 + 2.3 * inchesAboveBase;
    } else {
        weight = 45.5 + 2.3 * inchesAboveBase;
    }

    setResult(weight.toFixed(1));
  };

  return (
    <div className="max-w-2xl mx-auto bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-xl">
      <div className="flex items-center mb-6">
        <button onClick={onBack} className="mr-4 p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg">←</button>
        <h2 className="text-2xl font-bold">Ideal Weight</h2>
      </div>
      <div className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
            <button onClick={() => setGender('male')} className={`p-4 rounded-xl ${gender === 'male' ? 'bg-primary-600 text-white' : 'bg-slate-100 dark:bg-slate-800'}`}>Male</button>
            <button onClick={() => setGender('female')} className={`p-4 rounded-xl ${gender === 'female' ? 'bg-primary-600 text-white' : 'bg-slate-100 dark:bg-slate-800'}`}>Female</button>
        </div>
        <input type="number" placeholder="Height (cm)" value={height} onChange={e => setHeight(e.target.value)} className="w-full p-4 rounded-xl bg-slate-50 dark:bg-slate-800" />
        <button onClick={calculateIdeal} className="w-full py-4 bg-primary-600 text-white rounded-xl font-bold">Calculate</button>
        {result && (
            <div className="mt-6 p-8 bg-slate-100 dark:bg-slate-800 rounded-2xl text-center">
                <div className="text-4xl font-black mb-1">{result} kg</div>
                <p className="opacity-60 text-sm">Based on Devine Formula</p>
            </div>
        )}
      </div>
    </div>
  );
};

export default IdealWeightCalculator;
