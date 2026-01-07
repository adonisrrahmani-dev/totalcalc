
import React, { useState } from 'react';

interface Props {
  onBack: () => void;
  darkMode: boolean;
}

const PrimeChecker: React.FC<Props> = ({ onBack }) => {
  const [num, setNum] = useState('');
  const [result, setResult] = useState<any>(null);

  const check = () => {
    const n = parseInt(num);
    if (isNaN(n)) return;
    if (n < 2) return setResult({ isPrime: false, msg: 'Numbers less than 2 are not prime.' });

    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            isPrime = false;
            break;
        }
    }
    setResult({ isPrime, msg: isPrime ? `${n} is a prime number!` : `${n} is divisible by other numbers.` });
  };

  return (
    <div className="max-w-xl mx-auto bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-xl">
      <div className="flex items-center mb-6">
        <button onClick={onBack} className="mr-4 p-2 bg-slate-50 dark:bg-slate-800 rounded-lg">←</button>
        <h2 className="text-2xl font-bold">Prime Checker</h2>
      </div>
      <input 
        type="number" 
        placeholder="Enter a positive integer" 
        value={num} 
        onChange={e => setNum(e.target.value)} 
        className="w-full p-5 bg-slate-50 dark:bg-slate-800 rounded-xl mb-6 text-2xl font-bold text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-primary-500"
      />
      <button onClick={check} className="w-full py-4 bg-indigo-600 text-white rounded-xl font-bold">Check Prime</button>
      
      {result && (
          <div className={`mt-8 p-8 rounded-2xl text-center border-2 ${result.isPrime ? 'bg-emerald-50 border-emerald-100 dark:bg-emerald-900/20 dark:border-emerald-800' : 'bg-red-50 border-red-100 dark:bg-red-900/20 dark:border-red-800'}`}>
              <div className="text-4xl mb-2">{result.isPrime ? '✅' : '❌'}</div>
              <p className={`font-bold text-xl ${result.isPrime ? 'text-emerald-600' : 'text-red-600'}`}>{result.msg}</p>
          </div>
      )}
    </div>
  );
};

export default PrimeChecker;
