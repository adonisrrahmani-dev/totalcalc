
import React from 'react';
import { Language } from '../types';

interface NavigationProps {
  darkMode: boolean;
  onToggleDarkMode: () => void;
  onHome: () => void;
  lang: Language;
  onLangChange: (l: Language) => void;
  t: (path: string) => string;
}

const Navigation: React.FC<NavigationProps> = ({ darkMode, onToggleDarkMode, onHome, lang, onLangChange, t }) => {
  return (
    <nav className="sticky top-0 z-50 glass border-b border-slate-200 dark:border-slate-800 transition-all">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div 
          onClick={onHome} 
          className="flex items-center space-x-3 cursor-pointer group"
          role="button"
        >
          <div className="w-10 h-10 bg-slate-900 dark:bg-primary-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl transition-transform group-hover:rotate-12">
            T
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">TotalCalc</span>
        </div>

        <div className="flex items-center space-x-3">
          <select 
            value={lang} 
            onChange={(e) => onLangChange(e.target.value as Language)}
            className="bg-slate-100 dark:bg-slate-800 border-none text-xs sm:text-sm font-bold outline-none focus:ring-0 cursor-pointer px-3 py-1.5 rounded-xl hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors text-slate-700 dark:text-slate-200"
          >
            <option value="en">🇺🇸 EN</option>
            <option value="es">🇪🇸 ES</option>
            <option value="zh">🇨🇳 中文</option>
            <option value="hi">🇮🇳 हिन्दी</option>
          </select>

          <button 
            onClick={onToggleDarkMode}
            className="p-2.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-all text-slate-600 dark:text-slate-200"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? (
              <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" /></svg>
            ) : (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" /></svg>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
