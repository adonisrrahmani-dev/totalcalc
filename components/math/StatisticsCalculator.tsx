
import React, { useState } from 'react';

interface Props {
  onBack: () => void;
  darkMode: boolean;
}

const StatisticsCalculator: React.FC<Props> = ({ onBack }) => {
  const [data, setData] = useState('10, 20, 30, 40, 50');
  const [result, setResult] = useState<any>(null);

  const calculate = () => {
    const nums = data.split(',').map(n => parseFloat(n.trim())).filter(n => !isNaN(n));
    if (nums.length === 0) return;

    const mean = nums.reduce((a, b) => a + b) / nums.length;
    
    const sorted = [...nums].sort((a, b) => a - b);
    const median = sorted.length % 2 === 0 
        ? (sorted[sorted.length/2 - 1] + sorted[sorted.length/2]) / 2 
        : sorted[Math.floor(sorted.length/2)];

    const variance = nums.reduce((a, b) => a + Math.pow(b - mean, 2), 0) / nums.length;
    const stdDev = Math.sqrt(variance);

    setResult({ mean: mean.toFixed(2), median: median.toFixed(2), std: stdDev.toFixed(2), count: nums.length });
  };

  return (
    <div className="max-w-2xl mx-auto bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-xl">
      <div className="flex items-center mb-6">
        <button onClick={onBack} className="mr-4 p-2 bg-slate-50 dark:bg-slate-800 rounded-lg">←</button>
        <h2 className="text-2xl font-bold">Statistics Analyzer</h2>
      </div>
      <label className="block text-sm opacity-50 mb-2">Enter numbers separated by commas:</label>
      <textarea 
        value={data} 
        onChange={e => setData(e.target.value)} 
        className="w-full p-4 h-32 bg-slate-50 dark:bg-slate-800 rounded-xl mb-6 font-mono outline-none focus:ring-2 focus:ring-primary-500"
      />
      <button onClick={calculate} className="w-full py-4 bg-primary-600 text-white rounded-xl font-bold">Analyze Dataset</button>

      {result && (
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-xl text-center">
                  <div className="text-xs opacity-50 uppercase font-bold">Mean</div>
                  <div className="text-xl font-black">{result.mean}</div>
              </div>
              <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-xl text-center">
                  <div className="text-xs opacity-50 uppercase font-bold">Median</div>
                  <div className="text-xl font-black">{result.median}</div>
              </div>
              <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-xl text-center">
                  <div className="text-xs opacity-50 uppercase font-bold">Std Dev</div>
                  <div className="text-xl font-black">{result.std}</div>
              </div>
              <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-xl text-center">
                  <div className="text-xs opacity-50 uppercase font-bold">Count</div>
                  <div className="text-xl font-black">{result.count}</div>
              </div>
          </div>
      )}
    </div>
  );
};

export default StatisticsCalculator;
