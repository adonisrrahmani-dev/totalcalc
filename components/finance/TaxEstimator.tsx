
import React, { useState } from 'react';

interface Props {
  onBack: () => void;
  darkMode: boolean;
}

const TaxEstimator: React.FC<Props> = ({ onBack }) => {
  const [income, setIncome] = useState('75000');
  const [result, setResult] = useState<any>(null);

  const estimateTax = () => {
    const inc = parseFloat(income);
    let tax = 0;
    
    // Extremely simplified bracket for demo
    if (inc <= 11000) tax = inc * 0.10;
    else if (inc <= 44725) tax = 1100 + (inc - 11000) * 0.12;
    else if (inc <= 95375) tax = 5147 + (inc - 44725) * 0.22;
    else tax = 16290 + (inc - 95375) * 0.24;

    setResult({ tax: tax.toFixed(2), takeHome: (inc - tax).toFixed(2), rate: ((tax / inc) * 100).toFixed(1) });
  };

  return (
    <div className="max-w-2xl mx-auto bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-xl">
      <div className="flex items-center mb-6">
        <button onClick={onBack} className="mr-4 p-2 bg-slate-50 dark:bg-slate-800 rounded-lg">←</button>
        <h2 className="text-2xl font-bold">Tax Estimator (Simplified)</h2>
      </div>
      <p className="mb-6 opacity-60 text-sm italic">Note: These are simplified US Federal standard deduction estimates. Not tax advice.</p>
      <input type="number" placeholder="Gross Annual Income ($)" value={income} onChange={e => setIncome(e.target.value)} className="w-full p-4 rounded-xl bg-slate-50 dark:bg-slate-800 mb-6 font-bold text-xl" />
      <button onClick={estimateTax} className="w-full py-4 bg-slate-900 dark:bg-primary-600 text-white rounded-xl font-bold">Estimate Take-Home</button>
      {result && (
          <div className="mt-8 space-y-4">
              <div className="p-6 bg-green-50 dark:bg-green-900/20 rounded-2xl flex justify-between items-center">
                  <span className="font-bold">Estimated Take-Home</span>
                  <span className="text-3xl font-black text-green-600">${result.takeHome}</span>
              </div>
              <div className="flex gap-4">
                  <div className="flex-1 p-4 bg-slate-50 dark:bg-slate-800 rounded-xl text-center">
                      <div className="text-xs opacity-50">Tax Paid</div>
                      <div className="font-bold">${result.tax}</div>
                  </div>
                  <div className="flex-1 p-4 bg-slate-50 dark:bg-slate-800 rounded-xl text-center">
                      <div className="text-xs opacity-50">Effective Rate</div>
                      <div className="font-bold">{result.rate}%</div>
                  </div>
              </div>
          </div>
      )}
    </div>
  );
};

export default TaxEstimator;
