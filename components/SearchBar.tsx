
import React, { useState, useRef, useEffect } from 'react';
import { CalculatorDef, Language } from '../types';

interface SearchBarProps {
  value: string;
  onChange: (v: string) => void;
  results: CalculatorDef[];
  onSelect: (id: string) => void;
  lang: Language;
  t: (path: string) => string;
}

const SearchBar: React.FC<SearchBarProps> = ({ value, onChange, results, onSelect, lang, t }) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) setIsOpen(false);
    };
    window.addEventListener('mousedown', handler);
    return () => window.removeEventListener('mousedown', handler);
  }, []);

  return (
    <div className="relative" ref={containerRef}>
      <div className="relative group">
        <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
          <svg className="h-6 w-6 text-slate-400 group-focus-within:text-primary-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <input
          type="text"
          className="block w-full pl-14 pr-6 py-5 bg-white dark:bg-slate-800 border-none rounded-3xl shadow-2xl ring-1 ring-slate-900/10 focus:ring-4 focus:ring-primary-500/20 outline-none text-slate-900 dark:text-white text-lg transition-all"
          placeholder={t('nav.search')}
          value={value}
          onChange={(e) => { onChange(e.target.value); setIsOpen(true); }}
          onFocus={() => setIsOpen(true)}
        />
      </div>

      {isOpen && value.length > 0 && (
        <div className="absolute z-50 w-full mt-3 bg-white dark:bg-slate-900 rounded-[2rem] shadow-2xl border border-slate-100 dark:border-slate-800 max-h-[30rem] overflow-y-auto p-4 scrollbar-hide animate-in slide-in-from-top-2 duration-200">
          {results.length > 0 ? (
            <div className="space-y-2">
              {results.map((res) => (
                <button
                  key={res.id}
                  onClick={() => { onSelect(res.id); setIsOpen(false); }}
                  className="w-full flex items-center p-4 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-2xl transition-all text-left group"
                >
                  <div className="text-3xl mr-4 bg-slate-100 dark:bg-slate-800 w-12 h-12 flex items-center justify-center rounded-xl group-hover:bg-primary-500 group-hover:text-white transition-colors">
                    {res.icon}
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 dark:text-white group-hover:text-primary-600 transition-colors">{res.name}</div>
                    <div className="text-sm text-slate-500 dark:text-slate-400">{res.desc}</div>
                  </div>
                </button>
              ))}
            </div>
          ) : (
            <div className="p-8 text-center text-slate-500 dark:text-slate-400">
              <div className="text-4xl mb-4">🔍</div>
              <p className="font-medium">{t('nav.noResults')}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
