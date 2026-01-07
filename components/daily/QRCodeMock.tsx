
import React, { useState } from 'react';
import { CalculatorProps } from '../../types';

const QRCodeMock: React.FC<CalculatorProps> = ({ onBack }) => {
  const [text, setText] = useState('https://totalcalc.com');
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(text)}`;

  return (
    <div className="max-w-xl mx-auto bg-white dark:bg-slate-900 rounded-[2.5rem] p-10 shadow-xl text-center">
      <button onClick={onBack} className="absolute left-8 p-2.5 bg-slate-50 dark:bg-slate-800 rounded-xl">←</button>
      <h2 className="text-2xl font-bold mb-8">QR Code Generator</h2>
      <input 
        type="text" value={text} onChange={e => setText(e.target.value)}
        className="w-full p-5 rounded-2xl bg-slate-50 dark:bg-slate-800 mb-8 outline-none focus:ring-2 focus:ring-primary-500"
        placeholder="Enter URL or Text"
      />
      <div className="inline-block p-6 bg-white rounded-3xl shadow-inner border border-slate-100 dark:border-slate-800">
        <img src={qrUrl} alt="QR Code" className="w-56 h-56 mx-auto rounded-xl" />
      </div>
      <p className="mt-6 text-sm text-slate-400">Scan this code with your phone camera!</p>
    </div>
  );
};

export default QRCodeMock;
