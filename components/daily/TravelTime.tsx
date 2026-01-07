
import React, { useState } from 'react';
import { CalculatorProps } from '../../types';

const TravelTime: React.FC<CalculatorProps> = ({ onBack }) => {
  const [distance, setDistance] = useState('100');
  const [speed, setSpeed] = useState('50');
  const [result, setResult] = useState<any>(null);

  const calculate = () => {
    const d = parseFloat(distance);
    const s = parseFloat(speed);
    if (!d || !s) return;
    const hours = d / s;
    const h = Math.floor(hours);
    const m = Math.round((hours - h) * 60);
    setResult({ h, m });
  };

  return (
    <div className="max-w-2xl mx-auto bg-white dark:bg-slate-900 rounded-[2.5rem] p-10 shadow-xl">
      <div className="flex items-center mb-8">
        <button onClick={onBack} className="mr-4 p-2.5 bg-slate-50 dark:bg-slate-800 rounded-xl">←</button>
        <h2 className="text-2xl font-bold">Travel ETA</h2>
      </div>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div><label className="text-xs font-bold opacity-40 mb-1 block">Distance (km)</label><input type="number" value={distance} onChange={e => setDistance(e.target.value)} className="w-full p-4 rounded-xl bg-slate-50 dark:bg-slate-800" /></div>
          <div><label className="text-xs font-bold opacity-40 mb-1 block">Avg Speed (km/h)</label><input type="number" value={speed} onChange={e => setSpeed(e.target.value)} className="w-full p-4 rounded-xl bg-slate-50 dark:bg-slate-800" /></div>
        </div>
        <button onClick={calculate} className="w-full py-5 bg-primary-600 text-white rounded-xl font-bold">Calculate ETA</button>
        {result && (
          <div className="mt-8 p-10 bg-slate-50 dark:bg-slate-800 rounded-3xl text-center">
            <div className="text-5xl font-black text-primary-600">{result.h}h {result.m}m</div>
            <p className="text-sm opacity-50 mt-2">Estimated Travel Duration</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TravelTime;
