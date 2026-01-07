
import React, { useState } from 'react';

interface Props {
  onBack: () => void;
  darkMode: boolean;
}

const MortgageCalculator: React.FC<Props> = ({ onBack }) => {
  const [homePrice, setHomePrice] = useState('300000');
  const [downPayment, setDownPayment] = useState('60000');
  const [loanTerm, setLoanTerm] = useState('30');
  const [interestRate, setInterestRate] = useState('6.5');
  const [result, setResult] = useState<any>(null);

  const calculateMortgage = () => {
    const p = parseFloat(homePrice) - parseFloat(downPayment);
    const r = parseFloat(interestRate) / 100 / 12;
    const n = parseFloat(loanTerm) * 12;

    if (p <= 0 || isNaN(r) || isNaN(n)) return alert('Please enter valid positive values.');

    const monthlyPayment = p * (r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const totalPayment = monthlyPayment * n;
    const totalInterest = totalPayment - p;

    setResult({
      monthly: monthlyPayment.toFixed(2),
      total: totalPayment.toFixed(2),
      interest: totalInterest.toFixed(2)
    });
  };

  return (
    <div className="max-w-2xl mx-auto bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-xl transition-colors">
      <div className="flex items-center mb-6">
        <button onClick={onBack} className="mr-4 p-2 bg-slate-50 dark:bg-slate-800 rounded-lg">←</button>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Mortgage Calculator</h2>
      </div>

      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1.5 text-slate-700 dark:text-slate-300">Home Price ($)</label>
            <input type="number" value={homePrice} onChange={e => setHomePrice(e.target.value)} className="w-full p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800 border-none outline-none focus:ring-2 focus:ring-primary-500 text-slate-900 dark:text-white" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1.5 text-slate-700 dark:text-slate-300">Down Payment ($)</label>
            <input type="number" value={downPayment} onChange={e => setDownPayment(e.target.value)} className="w-full p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800 border-none outline-none focus:ring-2 focus:ring-primary-500 text-slate-900 dark:text-white" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1.5 text-slate-700 dark:text-slate-300">Interest Rate (%)</label>
            <input type="number" step="0.1" value={interestRate} onChange={e => setInterestRate(e.target.value)} className="w-full p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800 border-none outline-none focus:ring-2 focus:ring-primary-500 text-slate-900 dark:text-white" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1.5 text-slate-700 dark:text-slate-300">Term (Years)</label>
            <input type="number" value={loanTerm} onChange={e => setLoanTerm(e.target.value)} className="w-full p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800 border-none outline-none focus:ring-2 focus:ring-primary-500 text-slate-900 dark:text-white" />
          </div>
        </div>

        <button onClick={calculateMortgage} className="w-full py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-xl font-bold shadow-lg transition-all active:scale-[0.98]">
          Calculate Payment
        </button>

        {result && (
          <div className="mt-8 p-6 bg-primary-50 dark:bg-primary-900/20 rounded-2xl border border-primary-100 dark:border-primary-800 text-center animate-in zoom-in-95">
            <span className="text-sm font-bold uppercase tracking-widest text-primary-600">Monthly Payment</span>
            <div className="text-5xl font-black my-2 text-slate-900 dark:text-white">${result.monthly}</div>
            <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-primary-100 dark:border-primary-800/50">
              <div>
                <div className="text-xs text-slate-500 uppercase">Total Interest</div>
                <div className="font-bold text-slate-900 dark:text-white">${result.interest}</div>
              </div>
              <div>
                <div className="text-xs text-slate-500 uppercase">Total Paid</div>
                <div className="font-bold text-slate-900 dark:text-white">${result.total}</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MortgageCalculator;
