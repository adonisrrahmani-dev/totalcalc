
import React, { useMemo } from 'react';

interface Props {
  onSelect: (id: string) => void;
  onBack: () => void;
  t: (path: string) => string;
}

const MathCalculatorsList: React.FC<Props> = ({ onSelect, onBack, t }) => {
  const MATH_CALCULATORS = useMemo(() => [
    { id: 'arithmetic', icon: '➕' },
    { id: 'scientific', icon: '🔬' },
    { id: 'quadratic', icon: '📉' },
    { id: 'prime', icon: '🔢' },
    { id: 'factorial', icon: '❗️' },
    { id: 'percentage', icon: '🏷️' },
    { id: 'unitConverter', icon: '⚖️' },
    { id: 'geometry', icon: '⚪' },
    { id: 'statistics', icon: '📈' },
    { id: 'probability', icon: '🎲' },
  ].map(c => ({
    ...c,
    name: t(`calculators.${c.id}.name`),
    desc: t(`calculators.${c.id}.desc`)
  })), [t]);

  return (
    <div className="animate-in slide-in-from-right duration-500">
      <div className="flex items-center mb-8">
        <button 
          onClick={onBack}
          className="mr-4 p-2.5 bg-white dark:bg-slate-800 shadow-sm border border-slate-200 dark:border-slate-700 rounded-xl hover:bg-slate-50 transition-colors"
        >
          <span className="mr-2">←</span>{t('common.back')}
        </button>
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">{t('categories.mathTools')}</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {MATH_CALCULATORS.map((calc) => (
          <button
            key={calc.id}
            onClick={() => onSelect(calc.id)}
            className="group flex items-start p-6 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl hover:shadow-xl hover:border-primary-50 transition-all text-left"
          >
            <div className="text-3xl mr-5 bg-slate-50 dark:bg-slate-900 w-14 h-14 shrink-0 flex items-center justify-center rounded-xl group-hover:bg-primary-50 transition-colors">
              {calc.icon}
            </div>
            <div>
              <h4 className="text-lg font-bold mb-1 text-slate-900 dark:text-white">{calc.name}</h4>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-snug">{calc.desc}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default MathCalculatorsList;
