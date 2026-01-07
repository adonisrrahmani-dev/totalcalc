
import React, { useState } from 'react';

interface Props {
  onBack: () => void;
  darkMode: boolean;
}

const HeartRateCalculator: React.FC<Props> = ({ onBack }) => {
  const [age, setAge] = useState('');
  const [rhr, setRhr] = useState(''); // Resting heart rate
  const [zones, setZones] = useState<any[] | null>(null);

  const calculateZones = () => {
    const a = parseInt(age);
    const r = parseInt(rhr) || 60;

    if (!a) return alert('Enter age');

    const maxHr = 220 - a;
    const hrr = maxHr - r; // Heart Rate Reserve

    const calc = (pct: number) => Math.round(r + (hrr * pct));

    setZones([
        { name: 'Warm Up', range: `${calc(0.5)} - ${calc(0.6)}`, color: 'bg-green-500' },
        { name: 'Fat Burn', range: `${calc(0.6)} - ${calc(0.7)}`, color: 'bg-yellow-500' },
        { name: 'Aerobic', range: `${calc(0.7)} - ${calc(0.8)}`, color: 'bg-orange-500' },
        { name: 'Anaerobic', range: `${calc(0.8)} - ${calc(0.9)}`, color: 'bg-red-500' },
        { name: 'Red Line', range: `${calc(0.9)} - ${maxHr}`, color: 'bg-slate-900' },
    ]);
  };

  return (
    <div className="max-w-2xl mx-auto bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-xl">
      <div className="flex items-center mb-6">
        <button onClick={onBack} className="mr-4 p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg">←</button>
        <h2 className="text-2xl font-bold">Heart Rate Zones</h2>
      </div>
      <div className="grid grid-cols-2 gap-4 mb-6">
          <input type="number" placeholder="Age" value={age} onChange={e => setAge(e.target.value)} className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800" />
          <input type="number" placeholder="Resting HR (Optional)" value={rhr} onChange={e => setRhr(e.target.value)} className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800" />
      </div>
      <button onClick={calculateZones} className="w-full py-4 bg-red-600 text-white rounded-xl font-bold">Calculate Zones</button>

      {zones && (
          <div className="mt-8 space-y-3">
              {zones.map(z => (
                  <div key={z.name} className="flex items-center p-4 bg-slate-50 dark:bg-slate-800 rounded-xl">
                      <div className={`w-4 h-4 rounded-full ${z.color} mr-4`}></div>
                      <div className="flex-grow font-bold">{z.name}</div>
                      <div className="text-xl font-black">{z.range} <span className="text-sm font-normal opacity-50">BPM</span></div>
                  </div>
              ))}
          </div>
      )}
    </div>
  );
};

export default HeartRateCalculator;
