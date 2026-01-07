
import React, { useState } from 'react';

interface Props {
  onBack: () => void;
  darkMode: boolean;
}

const SleepCalculator: React.FC<Props> = ({ onBack }) => {
  const [wakeTime, setWakeTime] = useState('07:00');
  const [times, setTimes] = useState<string[]>([]);

  const calculateSleep = () => {
    const [h, m] = wakeTime.split(':').map(Number);
    const date = new Date();
    date.setHours(h, m, 0);

    const calculatedTimes: string[] = [];
    // Calculate backwards for 6, 5, and 4 sleep cycles (90 mins each)
    // Plus 15 mins to fall asleep
    [6, 5, 4, 3].forEach(cycles => {
        const d = new Date(date.getTime() - (cycles * 90 + 15) * 60000);
        calculatedTimes.push(d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    });

    setTimes(calculatedTimes);
  };

  return (
    <div className="max-w-2xl mx-auto bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-xl">
      <div className="flex items-center mb-6">
        <button onClick={onBack} className="mr-4 p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg">←</button>
        <h2 className="text-2xl font-bold">Sleep Calculator</h2>
      </div>
      <p className="mb-6 opacity-70">Waking up in between sleep cycles (90 mins) leaves you feeling refreshed. Enter your desired wake-up time:</p>
      <input type="time" value={wakeTime} onChange={e => setWakeTime(e.target.value)} className="w-full p-4 rounded-xl bg-slate-50 dark:bg-slate-800 mb-6" />
      <button onClick={calculateSleep} className="w-full py-4 bg-indigo-600 text-white rounded-xl font-bold">When should I sleep?</button>

      {times.length > 0 && (
          <div className="mt-8">
              <h4 className="font-bold mb-4">Aim to be asleep by one of these times:</h4>
              <div className="grid grid-cols-2 gap-4">
                  {times.map((t, idx) => (
                      <div key={t} className="p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl text-center border border-indigo-100 dark:border-indigo-800">
                          <div className="text-xs opacity-60 mb-1">{6-idx} cycles</div>
                          <div className="text-2xl font-black text-indigo-600">{t}</div>
                      </div>
                  ))}
              </div>
          </div>
      )}
    </div>
  );
};

export default SleepCalculator;
