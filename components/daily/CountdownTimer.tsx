
import React, { useState, useEffect } from 'react';
import { CalculatorProps } from '../../types';

const CountdownTimer: React.FC<CalculatorProps> = ({ onBack }) => {
  const [target, setTarget] = useState('');
  const [timeLeft, setTimeLeft] = useState<any>(null);

  useEffect(() => {
    if (!target) return;
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const end = new Date(target).getTime();
      const diff = end - now;

      if (diff < 0) {
        setTimeLeft(null);
        clearInterval(interval);
      } else {
        const d = Math.floor(diff / (1000 * 60 * 60 * 24));
        const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((diff % (1000 * 60)) / 1000);
        setTimeLeft({ d, h, m, s });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [target]);

  return (
    <div className="max-w-2xl mx-auto bg-white dark:bg-slate-900 rounded-[2.5rem] p-10 shadow-xl">
      <div className="flex items-center mb-8">
        <button onClick={onBack} className="mr-4 p-2.5 bg-slate-50 dark:bg-slate-800 rounded-xl">←</button>
        <h2 className="text-2xl font-bold">Event Countdown</h2>
      </div>
      <input type="datetime-local" value={target} onChange={e => setTarget(e.target.value)} className="w-full p-4 rounded-xl bg-slate-50 dark:bg-slate-800 mb-8" />
      {timeLeft ? (
        <div className="grid grid-cols-4 gap-2">
          {Object.entries(timeLeft).map(([unit, val]) => (
            <div key={unit} className="p-4 bg-primary-50 dark:bg-primary-900/20 rounded-2xl text-center">
              <div className="text-3xl font-black text-primary-600">{val as number}</div>
              <div className="text-[10px] uppercase opacity-50 font-bold">{unit}</div>
            </div>
          ))}
        </div>
      ) : <p className="text-center opacity-50">Enter a future date to start the clock!</p>}
    </div>
  );
};

export default CountdownTimer;
