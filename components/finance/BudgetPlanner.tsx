
import React, { useState } from 'react';

interface Props {
  onBack: () => void;
  darkMode: boolean;
}

const BudgetPlanner: React.FC<Props> = ({ onBack }) => {
  const [income, setIncome] = useState('4000');
  const [result, setResult] = useState<any>(null);

  const calculateBudget = () => {
    const inc = parseFloat(income);
    if (!inc) return;
    setResult({
        needs: (inc * 0.5).toFixed(2),
        wants: (inc * 0.3).toFixed(2),
        savings: (inc * 0.2).toFixed(2)
    });
  };

  return (
    <div className="max-w-2xl mx-auto bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-xl">
      <div className="flex items-center mb-6">
        <button onClick={onBack} className="mr-4 p-2 bg-slate-50 dark:bg-slate-800 rounded-lg">←</button>
        <h2 className="text-2xl font-bold">50/30/20 Budget Planner</h2>
      </div>
      <p className="mb-6 opacity-70">Enter your monthly take-home income to see the ideal budget breakdown:</p>
      <input type="number" value={income} onChange={e => setIncome(e.target.value)} className="w-full p-4 rounded-xl bg-slate-50 dark:bg-slate-800 font-bold mb-6" />
      <button onClick={calculateBudget} className="w-full py-4 bg-indigo-600 text-white rounded-xl font-bold">Plan My Budget</button>
      {result && (
          <div className="mt-8 space-y-4">
              <div className="p-5 bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 rounded-r-xl">
                  <div className="font-bold">Needs (50%) - ${result.needs}</div>
                  <div className="text-xs opacity-60">Rent, groceries, utilities, transit.</div>
              </div>
              <div className="p-5 bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 rounded-r-xl">
                  <div className="font-bold">Wants (30%) - ${result.wants}</div>
                  <div className="text-xs opacity-60">Dining out, entertainment, hobbies.</div>
              </div>
              <div className="p-5 bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 rounded-r-xl">
                  <div className="font-bold">Savings (20%) - ${result.savings}</div>
                  <div className="text-xs opacity-60">Debt payoff, emergency fund, investments.</div>
              </div>
          </div>
      )}
    </div>
  );
};

export default BudgetPlanner;
