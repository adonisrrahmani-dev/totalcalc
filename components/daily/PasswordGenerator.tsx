
import React, { useState } from 'react';
import { CalculatorProps } from '../../types';

const PasswordGenerator: React.FC<CalculatorProps> = ({ onBack }) => {
  const [length, setLength] = useState(16);
  const [pass, setPass] = useState('');

  const generate = () => {
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
    let res = "";
    for(let i=0; i<length; i++) res += chars[Math.floor(Math.random() * chars.length)];
    setPass(res);
  };

  return (
    <div className="max-w-xl mx-auto bg-white dark:bg-slate-900 rounded-[2.5rem] p-10 shadow-xl">
      <div className="flex items-center mb-8">
        <button onClick={onBack} className="mr-4 p-2.5 bg-slate-50 dark:bg-slate-800 rounded-xl">←</button>
        <h2 className="text-2xl font-bold">Password Generator</h2>
      </div>
      <div className="space-y-6">
          <div className="flex items-center justify-between p-5 bg-slate-50 dark:bg-slate-800 rounded-2xl">
              <span className="font-bold">Length: {length}</span>
              <input type="range" min="8" max="32" value={length} onChange={e => setLength(parseInt(e.target.value))} className="accent-primary-600" />
          </div>
          <button onClick={generate} className="w-full py-5 bg-slate-900 dark:bg-primary-600 text-white rounded-2xl font-bold text-lg">Generate Secure Key</button>
          {pass && (
              <div className="mt-8 p-6 bg-primary-50 dark:bg-primary-900/20 rounded-2xl text-center border-2 border-primary-200 border-dashed">
                  <div className="text-2xl font-mono font-black break-all text-primary-600">{pass}</div>
              </div>
          )}
      </div>
    </div>
  );
};

export default PasswordGenerator;
