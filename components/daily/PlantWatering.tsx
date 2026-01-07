
import React, { useState } from 'react';
import { CalculatorProps } from '../../types';

const PlantWatering: React.FC<CalculatorProps> = ({ onBack }) => {
  const [type, setType] = useState('succulent');
  const [result, setResult] = useState<string | null>(null);

  const guide: any = {
    succulent: "Once every 2-3 weeks. Let soil dry completely.",
    tropical: "1-2 times a week. Keep soil consistently moist.",
    cactus: "Once a month. Thrives in dry soil.",
    fern: "Every 2 days. Loves high humidity and damp soil."
  };

  return (
    <div className="max-w-xl mx-auto bg-white dark:bg-slate-900 rounded-[2.5rem] p-10 shadow-xl">
      <div className="flex items-center mb-8">
        <button onClick={onBack} className="mr-4 p-2.5 bg-slate-50 dark:bg-slate-800 rounded-xl">←</button>
        <h2 className="text-2xl font-bold">Plant Care</h2>
      </div>
      <select value={type} onChange={e => setType(e.target.value)} className="w-full p-4 rounded-xl bg-slate-50 dark:bg-slate-800 mb-6 font-bold">
        <option value="succulent">Succulent</option>
        <option value="tropical">Tropical (Monstera, Pothos)</option>
        <option value="cactus">Cactus</option>
        <option value="fern">Fern</option>
      </select>
      <div className="p-8 bg-emerald-50 dark:bg-emerald-900/20 rounded-3xl text-center border border-emerald-100">
        <div className="text-xs uppercase opacity-50 font-bold mb-2">Watering Schedule</div>
        <div className="text-xl font-bold text-emerald-700 dark:text-emerald-300 italic">"{guide[type]}"</div>
      </div>
    </div>
  );
};

export default PlantWatering;
