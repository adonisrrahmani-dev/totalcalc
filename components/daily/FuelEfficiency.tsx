
import React, { useState } from 'react';
import { CalculatorProps } from '../../types';

const FuelEfficiency: React.FC<CalculatorProps> = ({ onBack }) => {
  const [dist, setDist] = useState('500');
  const [fuel, setFuel] = useState('40');
  const [result, setResult] = useState<string | null>(null);

  const calculate = () => {
    const d = parseFloat(dist);
    const f = parseFloat(fuel);
    if (!d || !f) return;
    const eff = (f / d) * 100;
    setResult(eff.toFixed(2));
  };

  return (
    <div className="max-w-2xl mx-auto bg-white dark:bg-slate-900 rounded-[2.5rem] p-10 shadow-xl">
      <div className="flex items-center mb-8">
        <button onClick={onBack} className="mr-4 p-2.5 bg-slate-50 dark:bg-slate-800 rounded-xl">←</button>
        <h2 className="text-2xl font-bold">Fuel Efficiency</h2>
      </div>
      <div className="space-y-4">
          <div><label className="text-xs font-bold opacity-40 uppercase mb-2 block">Distance (km)</label><input type="number" value={dist} onChange={e => setDist(e.target.value)} className="w-full p-4 rounded-xl bg-slate-50 dark:bg-slate-800" /></div>
          <div><label className="text-xs font-bold opacity-40 uppercase mb-2 block">Fuel Used (L)</label><input type="number" value={fuel} onChange={e => setFuel(e.target.value)} className="w-full p-4 rounded-xl bg-slate-50 dark:bg-slate-800" /></div>
          <button onClick={calculate} className="w-full py-5 bg-slate-900 text-white rounded-xl font-bold">Calculate L/100km</button>
          {result && (
              <div className="mt-8 p-10 bg-slate-50 dark:bg-slate-800 rounded-3xl text-center">
                  <div className="text-5xl font-black text-primary-600">{result}</div>
                  <p className="text-sm opacity-50 mt-2">Litres per 100 Kilometres</p>
              </div>
          )}
      </div>
    </div>
  );
};

export default FuelEfficiency;
