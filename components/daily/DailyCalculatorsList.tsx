
import React, { useMemo } from 'react';
import { Language } from '../../types';

interface Props {
  onSelect: (id: string) => void;
  onBack: () => void;
  lang: Language;
  t: (path: string) => string;
}

const DailyCalculatorsList: React.FC<Props> = ({ onSelect, onBack, t }) => {
  const DAILY_CALCULATORS = useMemo(() => [
    { id: 'random', icon: '🎲' },
    { id: 'tip', icon: '🍽️' },
    { id: 'age', icon: '🎂' },
    { id: 'dateDiff', icon: '📅' },
    { id: 'timezone', icon: '🌐' },
    { id: 'password', icon: '🔐' },
    { id: 'qr', icon: '📱' },
    { id: 'color', icon: '🎨' },
    { id: 'lottery', icon: '🎰' },
    { id: 'fuel', icon: '⛽' },
    { id: 'recipe', icon: '👨‍🍳' },
    { id: 'travel', icon: '🚗' },
    { id: 'clothing', icon: '🧥' },
    { id: 'countdown', icon: '⏳' },
    { id: 'grocery', icon: '🛒' },
    { id: 'habit', icon: '🔁' },
    { id: 'cooking', icon: '🥣' },
    { id: 'worldClock', icon: '⌚' },
    { id: 'dogAge', icon: '🐕' },
    { id: 'plant', icon: '🪴' },
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
        <h2 className="text-3xl font-bold">{t('categories.dailyTools')}</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {DAILY_CALCULATORS.map((calc) => (
          <button
            key={calc.id}
            onClick={() => onSelect(calc.id)}
            className="group flex items-start p-6 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-3xl hover:shadow-2xl hover:border-primary-50 transition-all text-left"
          >
            <div className="text-3xl mr-5 bg-slate-50 dark:bg-slate-900 w-14 h-14 shrink-0 flex items-center justify-center rounded-2xl group-hover:scale-110 transition-all">
              {calc.icon}
            </div>
            <div>
              <h4 className="text-lg font-bold mb-1">{calc.name}</h4>
              <p className="text-sm text-slate-500 dark:text-slate-400">{calc.desc}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default DailyCalculatorsList;
