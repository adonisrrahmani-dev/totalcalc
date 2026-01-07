
import React, { useState } from 'react';

interface Props {
  onBack: () => void;
  darkMode: boolean;
}

const PercentageCalculator: React.FC<Props> = ({ onBack }) => {
  const [p1, setP1] = useState('20');
  const [v1, setV1] = useState('100');
  const [res1, setRes1] = useState<string | null>(null);

  const [v2a, setV2a] = useState('50');
  const [v2b, setV2b] = useState('200');
  const [res2, setRes2] = useState<string | null>(null);

  return (
    <div className="max-w-2xl mx-auto bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-xl">
      <div className="flex items-center mb-6">
        <button onClick={onBack} className="mr-4 p-2 bg-slate-50 dark:bg-slate-800 rounded-lg">←</button>
        <h2 className="text-2xl font-bold">Percentage Tools</h2>
      </div>

      <div className="space-y-12">
          {/* Part 1 */}
          <div className="p-6 bg-slate-50 dark:bg-slate-800 rounded-2xl">
              <h4 className="font-bold mb-4 opacity-70">What is % of a number?</h4>
              <div className="flex items-center gap-3">
                  <input type="number" value={p1} onChange={e => setP1(e.target.value)} className="w-20 p-3 rounded-lg bg-white dark:bg-slate-950 text-center font-bold" />
                  <span>% of</span>
                  <input type="number" value={v1} onChange={e => setV1(e.target.value)} className="w-32 p-3 rounded-lg bg-white dark:bg-slate-950 text-center font-bold" />
                  <button onClick={() => setRes1(((parseFloat(p1)/100)*parseFloat(v1)).toFixed(2))} className="bg-primary-600 text-white px-4 py-3 rounded-lg font-bold">Solve</button>
              </div>
              {res1 && <div className="mt-4 text-2xl font-black text-primary-600">Answer: {res1}</div>}
          </div>

          {/* Part 2 */}
          <div className="p-6 bg-slate-50 dark:bg-slate-800 rounded-2xl">
              <h4 className="font-bold mb-4 opacity-70">What percent is X of Y?</h4>
              <div className="flex items-center gap-3">
                  <input type="number" value={v2a} onChange={e => setV2a(e.target.value)} className="w-24 p-3 rounded-lg bg-white dark:bg-slate-950 text-center font-bold" />
                  <span>is what % of</span>
                  <input type="number" value={v2b} onChange={e => setV2b(e.target.value)} className="w-24 p-3 rounded-lg bg-white dark:bg-slate-950 text-center font-bold" />
                  <button onClick={() => setRes2(((parseFloat(v2a)/parseFloat(v2b))*100).toFixed(2))} className="bg-primary-600 text-white px-4 py-3 rounded-lg font-bold">Solve</button>
              </div>
              {res2 && <div className="mt-4 text-2xl font-black text-primary-600">Answer: {res2}%</div>}
          </div>
      </div>
    </div>
  );
};

export default PercentageCalculator;
