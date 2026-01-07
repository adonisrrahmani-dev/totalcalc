
import React, { useState } from 'react';

interface Props {
  onBack: () => void;
  darkMode: boolean;
}

const ScientificCalculator: React.FC<Props> = ({ onBack }) => {
  const [val, setVal] = useState('0');

  const scientific = (func: string) => {
    const num = parseFloat(val);
    let res: number;
    switch(func) {
        case 'sin': res = Math.sin(num); break;
        case 'cos': res = Math.cos(num); break;
        case 'tan': res = Math.tan(num); break;
        case 'log': res = Math.log10(num); break;
        case 'ln': res = Math.log(num); break;
        case 'sqrt': res = Math.sqrt(num); break;
        case 'sq': res = Math.pow(num, 2); break;
        case 'exp': res = Math.exp(num); break;
        default: res = num;
    }
    setVal(String(res));
  };

  return (
    <div className="max-w-2xl mx-auto bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-xl">
      <div className="flex items-center mb-6">
        <button onClick={onBack} className="mr-4 p-2 bg-slate-50 dark:bg-slate-800 rounded-lg">←</button>
        <h2 className="text-2xl font-bold">Scientific Tools</h2>
      </div>

      <input 
        type="number" 
        value={val} 
        onChange={e => setVal(e.target.value)} 
        className="w-full p-6 bg-slate-50 dark:bg-slate-950 rounded-2xl mb-8 text-3xl font-black text-right border border-slate-100 dark:border-slate-800 text-slate-900 dark:text-white"
      />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <button onClick={() => scientific('sin')} className="p-4 bg-slate-100 dark:bg-slate-800 rounded-xl font-bold hover:bg-primary-500 hover:text-white transition-all">SIN</button>
          <button onClick={() => scientific('cos')} className="p-4 bg-slate-100 dark:bg-slate-800 rounded-xl font-bold hover:bg-primary-500 hover:text-white transition-all">COS</button>
          <button onClick={() => scientific('tan')} className="p-4 bg-slate-100 dark:bg-slate-800 rounded-xl font-bold hover:bg-primary-500 hover:text-white transition-all">TAN</button>
          <button onClick={() => scientific('log')} className="p-4 bg-slate-100 dark:bg-slate-800 rounded-xl font-bold hover:bg-primary-500 hover:text-white transition-all">LOG₁₀</button>
          <button onClick={() => scientific('ln')} className="p-4 bg-slate-100 dark:bg-slate-800 rounded-xl font-bold hover:bg-primary-500 hover:text-white transition-all">LN</button>
          <button onClick={() => scientific('sqrt')} className="p-4 bg-slate-100 dark:bg-slate-800 rounded-xl font-bold hover:bg-primary-500 hover:text-white transition-all">√x</button>
          <button onClick={() => scientific('sq')} className="p-4 bg-slate-100 dark:bg-slate-800 rounded-xl font-bold hover:bg-primary-500 hover:text-white transition-all">x²</button>
          <button onClick={() => scientific('exp')} className="p-4 bg-slate-100 dark:bg-slate-800 rounded-xl font-bold hover:bg-primary-500 hover:text-white transition-all">eˣ</button>
      </div>
    </div>
  );
};

export default ScientificCalculator;
