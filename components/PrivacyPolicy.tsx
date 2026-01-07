
import React from 'react';
import { Language } from '../types';

interface PrivacyPolicyProps {
  onBack: () => void;
  lang: Language;
  t: (path: string) => string;
}

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onBack, lang, t }) => {
  return (
    <div className="max-w-4xl mx-auto bg-white dark:bg-slate-900 rounded-[2.5rem] p-12 shadow-xl animate-in fade-in duration-500">
      <button onClick={onBack} className="mb-8 p-3 bg-slate-50 dark:bg-slate-800 rounded-xl hover:scale-105 transition-transform text-sm font-bold">← {t('common.back')}</button>
      <h1 className="text-4xl font-black mb-6 text-slate-900 dark:text-white">{t('privacy.title')}</h1>
      <div className="prose dark:prose-invert max-w-none text-slate-600 dark:text-slate-400 space-y-6 leading-relaxed">
          <p className="text-lg font-medium">{t('privacy.intro')}</p>
          <div className="p-6 bg-slate-50 dark:bg-slate-800 rounded-3xl space-y-4 border border-slate-100 dark:border-slate-700">
            <p>{t('privacy.dataCollection')}</p>
            <p>{t('privacy.cookies')}</p>
            <p>{t('privacy.google')}</p>
            <p>{t('privacy.rights')}</p>
            <p>{t('privacy.contact')}</p>
          </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
