
import React, { useState } from 'react';
import { CalculatorProps } from '../../types';

const CookingConverter: React.FC<CalculatorProps> = ({ onBack }) => {
  const [val, setVal] = useState('1');
  const [from, setFrom] = useState('cup');
  const [to, setTo] = useState('ml');
  const [result, setResult] = useState<string | null>(null);

  const rates: any = { cup: 236.58, tbsp: 14.78, tsp: 4.92, ml: 1, oz: 29.57 };

  const convert = () => {
    const v = parseFloat(val);
    const inMl = v * rates[from];
    const res = inMl / rates[to];
    setResult(res.toFixed(2));
  };

  return (
    <div className="max-w-2xl mx-auto bg-white dark:bg-slate-900 rounded-[2.5rem] p-10 shadow-xl">
      <div className="flex items-center mb-8">
        <button onClick={onBack} className="mr-4 p-2.5 bg-slate-50 dark:bg-slate-800 rounded-xl">←</button>
        <h2 className="text-2xl font-bold">Kitchen Converter</h2>
      </div>
      <div className="space-y-4">
        <input type="number" value={val} onChange={e => setVal(e.target.value)} className="w-full p-4 rounded-xl bg-slate-50 dark:bg-slate-800 font-bold" />
        <div className="grid grid-cols-2 gap-4">
          <select value={from} onChange={e => setFrom(e.target.value)} className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800">
            {Object.keys(rates).map(k => <option key={k} value={k}>{k}</option>)}
          </select>
          <select value={to} onChange={e => setTo(e.target.value)} className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800">
            {Object.keys(rates).map(k => <option key={k} value={k}>{k}</option>)}
          </select>
        </div>
        <button onClick={convert} className="w-full py-5 bg-primary-600 text-white rounded-xl font-bold">Convert</button>
        {result && <div className="text-center text-4xl font-black mt-8 text-primary-600">{result} {to}</div>}
      </div>
    </div>
  );
};

export default CookingConverter;
