
import React, { useState } from 'react';

interface Props {
  onBack: () => void;
  darkMode: boolean;
}

const GeometryCalculator: React.FC<Props> = ({ onBack }) => {
  const [shape, setShape] = useState('circle');
  const [dim1, setDim1] = useState('5');
  const [dim2, setDim2] = useState('10');
  const [result, setResult] = useState<any>(null);

  const calculate = () => {
    const d1 = parseFloat(dim1);
    const d2 = parseFloat(dim2);
    let area = 0, volume = 0;

    switch(shape) {
        case 'circle': 
            area = Math.PI * d1 * d1; 
            break;
        case 'rectangle': 
            area = d1 * d2; 
            break;
        case 'triangle': 
            area = 0.5 * d1 * d2; 
            break;
        case 'sphere': 
            area = 4 * Math.PI * d1 * d1;
            volume = (4/3) * Math.PI * Math.pow(d1, 3);
            break;
    }

    setResult({ area: area.toFixed(2), volume: volume.toFixed(2) });
  };

  return (
    <div className="max-w-2xl mx-auto bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-xl">
      <div className="flex items-center mb-6">
        <button onClick={onBack} className="mr-4 p-2 bg-slate-50 dark:bg-slate-800 rounded-lg">←</button>
        <h2 className="text-2xl font-bold">Geometry Solver</h2>
      </div>

      <select value={shape} onChange={e => setShape(e.target.value)} className="w-full p-4 rounded-xl bg-slate-50 dark:bg-slate-800 mb-6 font-bold">
          <option value="circle">Circle (Radius)</option>
          <option value="rectangle">Rectangle (W × H)</option>
          <option value="triangle">Triangle (Base × Height)</option>
          <option value="sphere">Sphere (Radius)</option>
      </select>

      <div className="grid grid-cols-2 gap-4 mb-6">
          <div><label className="text-xs uppercase opacity-40 font-bold mb-1 block">Dimension 1</label><input type="number" value={dim1} onChange={e => setDim1(e.target.value)} className="w-full p-4 rounded-xl bg-slate-50 dark:bg-slate-800" /></div>
          {['rectangle', 'triangle'].includes(shape) && <div><label className="text-xs uppercase opacity-40 font-bold mb-1 block">Dimension 2</label><input type="number" value={dim2} onChange={e => setDim2(e.target.value)} className="w-full p-4 rounded-xl bg-slate-50 dark:bg-slate-800" /></div>}
      </div>

      <button onClick={calculate} className="w-full py-4 bg-primary-600 text-white rounded-xl font-bold">Calculate</button>

      {result && (
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-6 bg-slate-50 dark:bg-slate-800 rounded-2xl text-center">
                  <div className="text-xs uppercase font-bold opacity-40">Surface Area</div>
                  <div className="text-2xl font-black">{result.area} units²</div>
              </div>
              {parseFloat(result.volume) > 0 && (
                  <div className="p-6 bg-slate-50 dark:bg-slate-800 rounded-2xl text-center">
                      <div className="text-xs uppercase font-bold opacity-40">Volume</div>
                      <div className="text-2xl font-black">{result.volume} units³</div>
                  </div>
              )}
          </div>
      )}
    </div>
  );
};

export default GeometryCalculator;
