
import React, { useState } from 'react';
import { CalculatorProps } from '../../types';

const ColorPicker: React.FC<CalculatorProps> = ({ onBack }) => {
  const [color, setColor] = useState('#0ea5e9');

  const hexToRgb = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}` : 'N/A';
  };

  return (
    <div className="max-w-2xl mx-auto bg-white dark:bg-slate-900 rounded-[2.5rem] p-10 shadow-xl">
      <div className="flex items-center mb-8">
        <button onClick={onBack} className="mr-4 p-2.5 bg-slate-50 dark:bg-slate-800 rounded-xl">←</button>
        <h2 className="text-2xl font-bold">Color Converter</h2>
      </div>
      <div className="space-y-8 text-center">
        <input 
          type="color" value={color} onChange={e => setColor(e.target.value)}
          className="w-40 h-40 mx-auto block cursor-pointer bg-transparent"
        />
        <div className="grid grid-cols-2 gap-4">
          <div className="p-5 bg-slate-50 dark:bg-slate-800 rounded-2xl">
            <div className="text-xs opacity-50 uppercase font-bold mb-1">HEX</div>
            <div className="text-xl font-black uppercase">{color}</div>
          </div>
          <div className="p-5 bg-slate-50 dark:bg-slate-800 rounded-2xl">
            <div className="text-xs opacity-50 uppercase font-bold mb-1">RGB</div>
            <div className="text-xl font-black">{hexToRgb(color)}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorPicker;
