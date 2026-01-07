
import React from 'react';
import { Language } from '../types';

interface ContactProps {
  onBack: () => void;
  lang: Language;
  t: (path: string) => string;
}

const Contact: React.FC<ContactProps> = ({ onBack, lang, t }) => {
  return (
    <div className="max-w-2xl mx-auto bg-white dark:bg-slate-900 rounded-[2.5rem] p-12 shadow-xl animate-in zoom-in-95 duration-300">
      <button onClick={onBack} className="mb-8 p-3 bg-slate-50 dark:bg-slate-800 rounded-xl text-sm font-bold">← {t('common.back')}</button>
      <h1 className="text-4xl font-black mb-4 text-slate-900 dark:text-white">{t('contact.title')}</h1>
      <p className="text-slate-500 dark:text-slate-400 mb-8">{t('contact.sub')}</p>
      
      <div className="p-8 bg-primary-50 dark:bg-primary-900/20 rounded-3xl border border-primary-100 dark:border-primary-800 mb-8">
          <div className="text-xs font-bold uppercase tracking-widest text-primary-600 mb-1">{t('contact.emailLabel')}</div>
          <div className="text-xl font-bold text-slate-900 dark:text-white">adonisrrahmani7@gmail.com</div>
      </div>

      <div className="space-y-4">
          <input type="text" placeholder={t('contact.formName')} className="w-full p-4 rounded-xl bg-slate-50 dark:bg-slate-800 border-none focus:ring-2 focus:ring-primary-500 outline-none text-slate-900 dark:text-white" />
          <input type="email" placeholder={t('contact.formEmail')} className="w-full p-4 rounded-xl bg-slate-50 dark:bg-slate-800 border-none focus:ring-2 focus:ring-primary-500 outline-none text-slate-900 dark:text-white" />
          <textarea placeholder={t('contact.formMsg')} className="w-full p-4 h-32 rounded-xl bg-slate-50 dark:bg-slate-800 border-none focus:ring-2 focus:ring-primary-500 outline-none text-slate-900 dark:text-white"></textarea>
          <button className="w-full py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-xl font-bold shadow-lg shadow-primary-500/20 transition-all active:scale-95">{t('contact.send')}</button>
      </div>
    </div>
  );
};

export default Contact;
