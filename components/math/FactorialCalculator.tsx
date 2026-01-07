
import React, { useState } from 'react';

interface Props {
  onBack: () => void;
  darkMode: boolean;
}

const FactorialCalculator: React.FC<Props> = ({ onBack }) => {
  const [num, setNum] = useState('5');
  const [result, setResult] = useState<string | null>(null);

  const calc = () => {
    const n = parseInt(num);
    if (n < 0 || n > 170) return alert('Enter a number between 0 and 170 (limit for floating point)');
    
    let res = 1;
    for (let i = 2; i <= n; i++) res *= i;
    setResult(res.toLocaleString());
  };

  return (
    <div className="max-w-xl mx-auto bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-xl">
      <div className="flex items-center mb-6">
        <button onClick={onBack} className="mr-4 p-2 bg-slate-50 dark:bg-slate-800 rounded-lg">←</button>
        <h2 className="text-2xl font-bold">Factorial (n!)</h2>
      </div>
      <input type="number" value={num} onChange={e => setNum(e.target.value)} className="w-full p-5 bg-slate-50 dark:bg-slate-800 rounded-xl mb-6 text-3xl font-black text-slate-900 dark:text-white" />
      <button onClick={calc} className="w-full py-4 bg-primary-600 text-white rounded-xl font-bold">Calculate</button>
      {result && (
          <div className="mt-8 p-10 bg-slate-50 dark:bg-slate-800 rounded-2xl text-center break-words">
              <span className="text-xs uppercase opacity-40 font-black">Result</span>
              <div className="text-4xl font-black mt-2 text-primary-600">{result}</div>
          </div>
      )}
    </div>
  );
};

export default FactorialCalculator;
