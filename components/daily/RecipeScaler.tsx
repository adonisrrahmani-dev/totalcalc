
import React, { useState } from 'react';
import { CalculatorProps } from '../../types';

const RecipeScaler: React.FC<CalculatorProps> = ({ onBack }) => {
  const [servings, setServings] = useState('4');
  const [target, setTarget] = useState('2');
  const [ingredients, setIngredients] = useState('250g Flour, 2 Eggs, 100ml Milk');
  const [result, setResult] = useState<string[]>([]);

  const scale = () => {
    const s = parseFloat(servings);
    const t = parseFloat(target);
    if (!s || !t) return;
    const factor = t / s;

    const list = ingredients.split(',').map(item => {
      const match = item.match(/(\d+(\.\d+)?)/);
      if (match) {
        const num = parseFloat(match[0]);
        return item.replace(match[0], (num * factor).toFixed(1));
      }
      return item;
    });
    setResult(list);
  };

  return (
    <div className="max-w-2xl mx-auto bg-white dark:bg-slate-900 rounded-[2.5rem] p-10 shadow-xl">
      <div className="flex items-center mb-8">
        <button onClick={onBack} className="mr-4 p-2.5 bg-slate-50 dark:bg-slate-800 rounded-xl">←</button>
        <h2 className="text-2xl font-bold">Recipe Scaler</h2>
      </div>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div><label className="text-xs font-bold opacity-40 uppercase mb-1 block">Current Servings</label><input type="number" value={servings} onChange={e => setServings(e.target.value)} className="w-full p-4 rounded-xl bg-slate-50 dark:bg-slate-800" /></div>
          <div><label className="text-xs font-bold opacity-40 uppercase mb-1 block">Desired Servings</label><input type="number" value={target} onChange={e => setTarget(e.target.value)} className="w-full p-4 rounded-xl bg-slate-50 dark:bg-slate-800" /></div>
        </div>
        <textarea 
          placeholder="Ingredients (separate by commas)" value={ingredients} onChange={e => setIngredients(e.target.value)}
          className="w-full p-4 h-32 rounded-xl bg-slate-50 dark:bg-slate-800 font-mono text-sm"
        />
        <button onClick={scale} className="w-full py-5 bg-orange-600 text-white rounded-xl font-bold">Scale Recipe</button>
        {result.length > 0 && (
          <div className="mt-8 p-6 bg-slate-50 dark:bg-slate-800 rounded-2xl">
            <h4 className="font-bold mb-4">Scaled Ingredients:</h4>
            <ul className="list-disc pl-5 space-y-2">
              {result.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default RecipeScaler;
