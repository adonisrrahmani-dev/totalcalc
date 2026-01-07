
import React, { useState, useEffect } from 'react';
import { CalculatorProps } from '../../types';

const WorldClock: React.FC<CalculatorProps> = ({ onBack }) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const i = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(i);
  }, []);

  const cities = [
    { name: 'London', zone: 'Europe/London' },
    { name: 'New York', zone: 'America/New_York' },
    { name: 'Tokyo', zone: 'Asia/Tokyo' },
    { name: 'New Delhi', zone: 'Asia/Kolkata' },
  ];

  return (
    <div className="max-w-2xl mx-auto bg-white dark:bg-slate-900 rounded-[2.5rem] p-10 shadow-xl">
      <div className="flex items-center mb-8">
        <button onClick={onBack} className="mr-4 p-2.5 bg-slate-50 dark:bg-slate-800 rounded-xl">←</button>
        <h2 className="text-2xl font-bold">World Clock</h2>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {cities.map(c => (
          <div key={c.name} className="p-6 bg-slate-50 dark:bg-slate-800 rounded-3xl text-center border border-slate-100 dark:border-slate-700">
            <div className="text-xs uppercase font-bold opacity-40 mb-1">{c.name}</div>
            <div className="text-2xl font-black">{time.toLocaleTimeString('en-US', { timeZone: c.zone, hour12: true, hour: '2-digit', minute: '2-digit' })}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorldClock;
