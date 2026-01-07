
import React, { useState } from 'react';

const RATES: any = { USD: 1, EUR: 0.92, GBP: 0.79, JPY: 151.4, CAD: 1.36, AUD: 1.52, INR: 83.3 };

interface Props {
  onBack: () => void;
  darkMode: boolean;
}

const CurrencyConverter: React.FC<Props> = ({ onBack }) => {
  const [amount, setAmount] = useState('100');
  const [from, setFrom] = useState('USD');
  const [to, setTo] = useState('EUR');
  const [result, setResult] = useState<string | null>(null);

  const convert = () => {
    const amt = parseFloat(amount);
    if (isNaN(amt)) return;
    const usdVal = amt / RATES[from];
    const final = usdVal * RATES[to];
    setResult(final.toFixed(2));
  };

  return (
    <div className="max-w-2xl mx-auto bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-xl">
      <div className="flex items-center mb-6">
        <button onClick={onBack} className="mr-4 p-2 bg-slate-50 dark:bg-slate-800 rounded-lg">←</button>
        <h2 className="text-2xl font-bold">Currency Converter</h2>
      </div>
      <div className="space-y-4">
          <input type="number" value={amount} onChange={e => setAmount(e.target.value)} className="w-full p-4 rounded-xl bg-slate-50 dark:bg-slate-800 text-xl font-bold" />
          <div className="flex gap-4">
              <select value={from} onChange={e => setFrom(e.target.value)} className="flex-1 p-4 rounded-xl bg-slate-50 dark:bg-slate-800 outline-none">
                  {Object.keys(RATES).map(c => <option key={c} value={c}>{c}</option>)}
              </select>
              <div className="flex items-center">⇄</div>
              <select value={to} onChange={e => setTo(e.target.value)} className="flex-1 p-4 rounded-xl bg-slate-50 dark:bg-slate-800 outline-none">
                  {Object.keys(RATES).map(c => <option key={c} value={c}>{c}</option>)}
              </select>
          </div>
          <button onClick={convert} className="w-full py-4 bg-primary-600 text-white rounded-xl font-bold">Convert Now</button>
          {result && (
              <div className="mt-8 p-8 bg-slate-50 dark:bg-slate-800 rounded-2xl text-center">
                  <div className="text-5xl font-black">{result} <span className="text-xl font-normal opacity-50">{to}</span></div>
                  <p className="mt-2 text-xs opacity-40">Demo rates used for offline speed.</p>
              </div>
          )}
      </div>
    </div>
  );
};

export default CurrencyConverter;
