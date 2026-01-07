
import React from 'react';

interface CategoryCardProps {
  title: string;
  icon: string;
  description: string;
  onClick: () => void;
  disabled?: boolean;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ title, icon, description, onClick, disabled }) => {
  return (
    <button 
      onClick={onClick}
      disabled={disabled}
      className={`group p-8 text-left rounded-3xl transition-all duration-300 ${
        disabled 
          ? 'bg-slate-100 dark:bg-slate-900/40 opacity-60 cursor-not-allowed border border-dashed border-slate-300 dark:border-slate-700' 
          : 'bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 hover:shadow-xl hover:-translate-y-1'
      }`}
    >
      <div className={`w-14 h-14 mb-6 rounded-2xl flex items-center justify-center text-3xl shadow-sm group-hover:scale-110 transition-transform ${
        disabled ? 'bg-slate-200 dark:bg-slate-800' : 'bg-primary-50 dark:bg-primary-900/30'
      }`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2 flex items-center">
        {title}
        {disabled && <span className="ml-2 text-[10px] uppercase bg-slate-200 dark:bg-slate-700 px-1.5 py-0.5 rounded">Soon</span>}
      </h3>
      <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{description}</p>
    </button>
  );
};

export default CategoryCard;
