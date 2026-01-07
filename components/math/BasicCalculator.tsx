
import React, { useState } from 'react';

interface Props {
  onBack: () => void;
  darkMode: boolean;
}

const BasicCalculator: React.FC<Props> = ({ onBack }) => {
  const [display, setDisplay] = useState('0');
  const [equation, setEquation] = useState('');

  const handleInput = (val: string) => {
    if (display === '0' && !isNaN(parseInt(val))) {
      setDisplay(val);
    } else {
      setDisplay(display + val);
    }
  };

  const calculate = () => {
    try {
      // Use eval cautiously, here limited to simple math strings
      // For a production app, a proper parser is better
      const result = Function(`'use strict'; return (${display})`)();
      setEquation(display + ' =');
      setDisplay(String(result));
    } catch (e) {
      setDisplay('Error');
    }
  };

  const clear = () => {
    setDisplay('0');
    setEquation('');
  };

  const buttons = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', '.', '=', '+'
  ];

  return (
    <div className="max-w-md mx-auto bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-xl">
      <div className="flex items-center mb-6">
        <button onClick={onBack} className="mr-4 p-2 bg-slate-50 dark:bg-slate-800 rounded-lg">←</button>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Basic Arithmetic</h2>
      </div>

      <div className="mb-6 bg-slate-50 dark:bg-slate-950 p-6 rounded-2xl text-right overflow-hidden border border-slate-100 dark:border-slate-800">
        <div className="text-xs text-slate-400 h-4">{equation}</div>
        <div className="text-4xl font-black text-slate-900 dark:text-white truncate">{display}</div>
      </div>

      <div className="grid grid-cols-4 gap-3">
        <button onClick={clear} className="col-span-3 py-4 bg-slate-100 dark:bg-slate-800 rounded-xl font-bold text-red-500 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">AC</button>
        <button onClick={() => handleInput('/')} className="py-4 bg-primary-100 dark:bg-primary-900/30 text-primary-600 rounded-xl font-black">÷</button>
        
        {buttons.slice(0, 3).map(b => <button key={b} onClick={() => handleInput(b)} className="py-4 bg-slate-50 dark:bg-slate-800 rounded-xl font-bold hover:bg-slate-100 transition-colors">{b}</button>)}
        <button onClick={() => handleInput('*')} className="py-4 bg-primary-100 dark:bg-primary-900/30 text-primary-600 rounded-xl font-black">×</button>

        {buttons.slice(4, 7).map(b => <button key={b} onClick={() => handleInput(b)} className="py-4 bg-slate-50 dark:bg-slate-800 rounded-xl font-bold hover:bg-slate-100 transition-colors">{b}</button>)}
        <button onClick={() => handleInput('-')} className="py-4 bg-primary-100 dark:bg-primary-900/30 text-primary-600 rounded-xl font-black">-</button>

        {buttons.slice(8, 11).map(b => <button key={b} onClick={() => handleInput(b)} className="py-4 bg-slate-50 dark:bg-slate-800 rounded-xl font-bold hover:bg-slate-100 transition-colors">{b}</button>)}
        <button onClick={() => handleInput('+')} className="py-4 bg-primary-100 dark:bg-primary-900/30 text-primary-600 rounded-xl font-black">+</button>

        <button onClick={() => handleInput('0')} className="col-span-2 py-4 bg-slate-50 dark:bg-slate-800 rounded-xl font-bold">0</button>
        <button onClick={() => handleInput('.')} className="py-4 bg-slate-50 dark:bg-slate-800 rounded-xl font-bold">.</button>
        <button onClick={calculate} className="py-4 bg-primary-600 text-white rounded-xl font-black shadow-lg shadow-primary-500/30">=</button>
      </div>
    </div>
  );
};

export default BasicCalculator;
