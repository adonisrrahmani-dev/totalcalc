
import React, { useMemo } from 'react';

interface HealthCalculatorsListProps {
  onSelect: (id: string) => void;
  onBack: () => void;
  t: (path: string) => string;
}

const HealthCalculatorsList: React.FC<HealthCalculatorsListProps> = ({ onSelect, onBack, t }) => {
  const HEALTH_CALCULATORS = useMemo(() => [
    { id: 'bmi', icon: '⚖️' },
    { id: 'bmr', icon: '🔥' },
    { id: 'water', icon: '💧' },
    { id: 'calorie', icon: '🍎' },
    { id: 'bodyFat', icon: '📏' },
    { id: 'idealWeight', icon: '🏃' },
    { id: 'heartRate', icon: '💓' },
    { id: 'bloodPressure', icon: '🩺' },
    { id: 'sleep', icon: '🛌' },
    { id: 'pregnancy', icon: '👶' },
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
          className="mr-4 p-2 bg-white dark:bg-slate-800 shadow-sm border border-slate-200 dark:border-slate-700 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700 transition-all flex items-center font-bold text-sm"
        >
          <span className="mr-2">←</span>{t('common.back')}
        </button>
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">{t('categories.healthTools')}</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {HEALTH_CALCULATORS.map((calc) => (
          <button
            key={calc.id}
            onClick={() => onSelect(calc.id)}
            className="group flex p-6 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-2xl hover:shadow-lg transition-all text-left"
          >
            <div className="text-4xl mr-5 bg-slate-50 dark:bg-slate-900 w-16 h-16 flex items-center justify-center rounded-xl group-hover:bg-primary-50 dark:group-hover:bg-primary-900/20 transition-colors">
              {calc.icon}
            </div>
            <div>
              <h4 className="text-lg font-bold mb-1">{calc.name}</h4>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-snug">{calc.desc}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default HealthCalculatorsList;
