
import React, { useState } from 'react';

const UNITS: any = {
    length: {
        m: 1, km: 1000, cm: 0.01, mm: 0.001, mile: 1609.34, inch: 0.0254, ft: 0.3048
    },
    weight: {
        kg: 1, g: 0.001, lb: 0.453592, oz: 0.0283495, ton: 1000
    }
};

interface Props {
  onBack: () => void;
  darkMode: boolean;
}

const UnitConverter: React.FC<Props> = ({ onBack }) => {
  const [cat, setCat] = useState('length');
  const [val, setVal] = useState('1');
  const [from, setFrom] = useState('km');
  const [to, setTo] = useState('m');
  const [result, setResult] = useState<string | null>(null);

  const convert = () => {
    const v = parseFloat(val);
    const inBase = v * UNITS[cat][from];
    const res = inBase / UNITS[cat][to];
    setResult(res.toFixed(4));
  };

  return (
    <div className="max-w-2xl mx-auto bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-xl">
      <div className="flex items-center mb-6">
        <button onClick={onBack} className="mr-4 p-2 bg-slate-50 dark:bg-slate-800 rounded-lg">←</button>
        <h2 className="text-2xl font-bold">Unit Converter</h2>
      </div>

      <div className="flex gap-2 p-1 bg-slate-100 dark:bg-slate-800 rounded-xl mb-6">
          <button onClick={() => {setCat('length'); setFrom('km'); setTo('m');}} className={`flex-1 py-2 rounded-lg font-bold ${cat === 'length' ? 'bg-white dark:bg-slate-700 shadow' : ''}`}>Length</button>
          <button onClick={() => {setCat('weight'); setFrom('kg'); setTo('lb');}} className={`flex-1 py-2 rounded-lg font-bold ${cat === 'weight' ? 'bg-white dark:bg-slate-700 shadow' : ''}`}>Weight</button>
      </div>

      <div className="space-y-4">
          <input type="number" value={val} onChange={e => setVal(e.target.value)} className="w-full p-4 rounded-xl bg-slate-50 dark:bg-slate-800 text-xl font-bold outline-none" />
          <div className="flex gap-4 items-center">
              <select value={from} onChange={e => setFrom(e.target.value)} className="flex-1 p-4 rounded-xl bg-slate-50 dark:bg-slate-800">
                  {Object.keys(UNITS[cat]).map(u => <option key={u} value={u}>{u}</option>)}
              </select>
              <span>to</span>
              <select value={to} onChange={e => setTo(e.target.value)} className="flex-1 p-4 rounded-xl bg-slate-50 dark:bg-slate-800">
                  {Object.keys(UNITS[cat]).map(u => <option key={u} value={u}>{u}</option>)}
              </select>
          </div>
          <button onClick={convert} className="w-full py-4 bg-primary-600 text-white rounded-xl font-bold">Convert</button>
          {result && (
              <div className="mt-8 p-8 bg-slate-50 dark:bg-slate-800 rounded-2xl text-center">
                  <div className="text-4xl font-black text-slate-900 dark:text-white">{result} <span className="text-lg font-normal opacity-50">{to}</span></div>
              </div>
          )}
      </div>
    </div>
  );
};

export default UnitConverter;
