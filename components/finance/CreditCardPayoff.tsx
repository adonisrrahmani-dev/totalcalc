
import React, { useState } from 'react';

interface Props {
  onBack: () => void;
  darkMode: boolean;
}

const CreditCardPayoff: React.FC<Props> = ({ onBack }) => {
  const [balance, setBalance] = useState('2000');
  const [apr, setApr] = useState('19.9');
  const [payment, setPayment] = useState('100');
  const [result, setResult] = useState<any>(null);

  const calculatePayoff = () => {
    let b = parseFloat(balance);
    const r = parseFloat(apr) / 100 / 12;
    const p = parseFloat(payment);
    
    if (p <= b * r) return alert('Payment is too low to cover interest!');

    let months = 0;
    let totalInterest = 0;
    while(b > 0) {
        const interest = b * r;
        totalInterest += interest;
        b = b + interest - p;
        months++;
        if (months > 600) break; // 50 years max
    }

    setResult({ months, years: (months/12).toFixed(1), interest: totalInterest.toFixed(2) });
  };

  return (
    <div className="max-w-2xl mx-auto bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-xl">
      <div className="flex items-center mb-6">
        <button onClick={onBack} className="mr-4 p-2 bg-slate-50 dark:bg-slate-800 rounded-lg">←</button>
        <h2 className="text-2xl font-bold">Credit Card Payoff</h2>
      </div>
      <div className="space-y-4">
          <input type="number" placeholder="Current Balance ($)" value={balance} onChange={e => setBalance(e.target.value)} className="w-full p-4 rounded-xl bg-slate-50 dark:bg-slate-800" />
          <input type="number" placeholder="APR (%)" value={apr} onChange={e => setApr(e.target.value)} className="w-full p-4 rounded-xl bg-slate-50 dark:bg-slate-800" />
          <input type="number" placeholder="Monthly Payment ($)" value={payment} onChange={e => setPayment(e.target.value)} className="w-full p-4 rounded-xl bg-slate-50 dark:bg-slate-800" />
          <button onClick={calculatePayoff} className="w-full py-4 bg-red-600 text-white rounded-xl font-bold">Calculate Timeline</button>
          {result && (
              <div className="mt-8 p-8 bg-slate-50 dark:bg-slate-800 rounded-2xl text-center">
                  <div className="text-5xl font-black mb-1">{result.months} <span className="text-xl font-normal">Months</span></div>
                  <div className="text-sm opacity-50 mb-4">Approximately {result.years} years</div>
                  <div className="pt-4 border-t border-slate-200 dark:border-slate-700">
                      <div className="text-xs uppercase opacity-50">Total Interest to Pay</div>
                      <div className="text-2xl font-bold text-red-600">${result.interest}</div>
                  </div>
              </div>
          )}
      </div>
    </div>
  );
};

export default CreditCardPayoff;
