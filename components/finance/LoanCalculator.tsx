
import React, { useState } from 'react';

interface Props {
  onBack: () => void;
  darkMode: boolean;
}

const LoanCalculator: React.FC<Props> = ({ onBack }) => {
  const [amount, setAmount] = useState('10000');
  const [rate, setRate] = useState('10');
  const [term, setTerm] = useState('2'); // Years
  const [result, setResult] = useState<any>(null);

  const calculateLoan = () => {
    const p = parseFloat(amount);
    const r = parseFloat(rate) / 100 / 12;
    const n = parseFloat(term) * 12;

    const monthly = p * r * Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1);
    const total = monthly * n;
    
    // Generate simple schedule (first 5 and last 5)
    let schedule = [];
    let balance = p;
    for(let i = 1; i <= n; i++) {
        const interest = balance * r;
        const principal = monthly - interest;
        balance -= principal;
        if (i <= 3 || i > n - 3) {
            schedule.push({ month: i, principal: principal.toFixed(2), interest: interest.toFixed(2), balance: Math.max(0, balance).toFixed(2) });
        } else if (i === 4) {
            schedule.push({ month: '...', principal: '...', interest: '...', balance: '...' });
        }
    }

    setResult({ monthly: monthly.toFixed(2), total: total.toFixed(2), schedule });
  };

  return (
    <div className="max-w-3xl mx-auto bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-xl">
      <div className="flex items-center mb-6">
        <button onClick={onBack} className="mr-4 p-2 bg-slate-50 dark:bg-slate-800 rounded-lg">←</button>
        <h2 className="text-2xl font-bold">Loan Calculator</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div><label className="text-xs font-bold uppercase opacity-50">Loan Amount</label><input type="number" value={amount} onChange={e => setAmount(e.target.value)} className="w-full p-4 rounded-xl bg-slate-50 dark:bg-slate-800" /></div>
          <div><label className="text-xs font-bold uppercase opacity-50">Rate (%)</label><input type="number" value={rate} onChange={e => setRate(e.target.value)} className="w-full p-4 rounded-xl bg-slate-50 dark:bg-slate-800" /></div>
          <div><label className="text-xs font-bold uppercase opacity-50">Years</label><input type="number" value={term} onChange={e => setTerm(e.target.value)} className="w-full p-4 rounded-xl bg-slate-50 dark:bg-slate-800" /></div>
      </div>

      <button onClick={calculateLoan} className="w-full py-4 bg-primary-600 text-white rounded-xl font-bold">Calculate Loan</button>

      {result && (
          <div className="mt-8">
              <div className="text-center mb-6 p-6 bg-slate-50 dark:bg-slate-800 rounded-2xl">
                  <div className="text-sm opacity-50">Monthly Payment</div>
                  <div className="text-4xl font-black">${result.monthly}</div>
              </div>
              <h4 className="font-bold mb-4">Preview Schedule</h4>
              <div className="overflow-hidden rounded-xl border border-slate-100 dark:border-slate-800">
                  <table className="w-full text-sm">
                      <thead className="bg-slate-50 dark:bg-slate-800">
                          <tr><th className="p-3 text-left">Month</th><th className="p-3 text-right">Principal</th><th className="p-3 text-right">Interest</th><th className="p-3 text-right">Balance</th></tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                          {result.schedule.map((row: any, i: number) => (
                              <tr key={i} className="dark:text-slate-300">
                                  <td className="p-3">{row.month}</td>
                                  <td className="p-3 text-right">${row.principal}</td>
                                  <td className="p-3 text-right">${row.interest}</td>
                                  <td className="p-3 text-right">${row.balance}</td>
                              </tr>
                          ))}
                      </tbody>
                  </table>
              </div>
          </div>
      )}
    </div>
  );
};

export default LoanCalculator;
