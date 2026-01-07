
import React, { useState } from 'react';
import { CalculatorProps } from '../../types';

const TimeZoneConverter: React.FC<CalculatorProps> = ({ onBack }) => {
  const [time, setTime] = useState('12:00');
  const [fromZone, setFromZone] = useState('UTC');
  const [toZone, setToZone] = useState('America/New_York');
  const [result, setResult] = useState<string | null>(null);

  const zones = ['UTC', 'America/New_York', 'Europe/London', 'Asia/Tokyo', 'Asia/Kolkata', 'Australia/Sydney', 'America/Los_Angeles'];

  const convert = () => {
    try {
      const [h, m] = time.split(':').map(Number);
      const date = new Date();
      date.setHours(h, m, 0, 0);
      
      const options: any = { timeZone: toZone, hour: '2-digit', minute: '2-digit', hour12: true };
      const formatted = new Intl.DateTimeFormat('en-US', options).format(date);
      setResult(formatted);
    } catch (e) {
      alert('Error converting time');
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white dark:bg-slate-900 rounded-[2.5rem] p-10 shadow-xl">
      <div className="flex items-center mb-8">
        <button onClick={onBack} className="mr-4 p-2.5 bg-slate-50 dark:bg-slate-800 rounded-xl">←</button>
        <h2 className="text-2xl font-bold">Time Zone Converter</h2>
      </div>
      <div className="space-y-4">
        <input type="time" value={time} onChange={e => setTime(e.target.value)} className="w-full p-4 rounded-xl bg-slate-50 dark:bg-slate-800 text-2xl font-bold" />
        <div className="grid grid-cols-2 gap-4">
          <select value={fromZone} onChange={e => setFromZone(e.target.value)} className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800">
            {zones.map(z => <option key={z} value={z}>{z}</option>)}
          </select>
          <select value={toZone} onChange={e => setToZone(e.target.value)} className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800">
            {zones.map(z => <option key={z} value={z}>{z}</option>)}
          </select>
        </div>
        <button onClick={convert} className="w-full py-5 bg-primary-600 text-white rounded-xl font-bold">Convert Time</button>
        {result && (
          <div className="mt-8 p-10 bg-slate-50 dark:bg-slate-800 rounded-3xl text-center">
            <div className="text-5xl font-black text-primary-600">{result}</div>
            <p className="text-sm opacity-50 mt-2">Time in {toZone}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TimeZoneConverter;
