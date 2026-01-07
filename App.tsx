
import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Category, Language, CalculatorDef } from './types';
import { locales } from './locales';
import Navigation from './components/Navigation';
import SearchBar from './components/SearchBar';
import CategoryCard from './components/CategoryCard';
import PrivacyPolicy from './components/PrivacyPolicy';
import Contact from './components/Contact';

// Lists
import HealthCalculatorsList from './components/health/HealthCalculatorsList';
import FinanceCalculatorsList from './components/finance/FinanceCalculatorsList';
import MathCalculatorsList from './components/math/MathCalculatorsList';
import DailyCalculatorsList from './components/daily/DailyCalculatorsList';

// Calculators
import BMICalculator from './components/health/BMICalculator';
import BMRCalculator from './components/health/BMRCalculator';
import WaterIntakeCalculator from './components/health/WaterIntakeCalculator';
import CalorieCalculator from './components/health/CalorieCalculator';
import BodyFatCalculator from './components/health/BodyFatCalculator';
import IdealWeightCalculator from './components/health/IdealWeightCalculator';
import HeartRateCalculator from './components/health/HeartRateCalculator';
import BloodPressureCalculator from './components/health/BloodPressureCalculator';
import SleepCalculator from './components/health/SleepCalculator';
import PregnancyCalculator from './components/health/PregnancyCalculator';

import MortgageCalculator from './components/finance/MortgageCalculator';
import LoanCalculator from './components/finance/LoanCalculator';
import CompoundInterestCalculator from './components/finance/CompoundInterestCalculator';
import ROICalculator from './components/finance/ROICalculator';
import CurrencyConverter from './components/finance/CurrencyConverter';
import RetirementCalculator from './components/finance/RetirementCalculator';
import TaxEstimator from './components/finance/TaxEstimator';
import BudgetPlanner from './components/finance/BudgetPlanner';
import CreditCardPayoff from './components/finance/CreditCardPayoff';
import SalaryCalculator from './components/finance/SalaryCalculator';

import BasicCalculator from './components/math/BasicCalculator';
import ScientificCalculator from './components/math/ScientificCalculator';
import QuadraticSolver from './components/math/QuadraticSolver';
import PrimeChecker from './components/math/PrimeChecker';
import FactorialCalculator from './components/math/FactorialCalculator';
import PercentageCalculator from './components/math/PercentageCalculator';
import UnitConverter from './components/math/UnitConverter';
import GeometryCalculator from './components/math/GeometryCalculator';
import StatisticsCalculator from './components/math/StatisticsCalculator';
import ProbabilityCalculator from './components/math/ProbabilityCalculator';

import RandomNumberGen from './components/daily/RandomNumberGen';
import TipCalculator from './components/daily/TipCalculator';
import AgeCalculator from './components/daily/AgeCalculator';
import DateDiffCalculator from './components/daily/DateDiffCalculator';
import TimeZoneConverter from './components/daily/TimeZoneConverter';
import PasswordGenerator from './components/daily/PasswordGenerator';
import QRCodeMock from './components/daily/QRCodeMock';
import ColorPicker from './components/daily/ColorPicker';
import LotteryOdds from './components/daily/LotteryOdds';
import FuelEfficiency from './components/daily/FuelEfficiency';
import RecipeScaler from './components/daily/RecipeScaler';
import TravelTime from './components/daily/TravelTime';
import ClothingSuggester from './components/daily/ClothingSuggester';
import CountdownTimer from './components/daily/CountdownTimer';
import GroceryEstimator from './components/daily/GroceryEstimator';
import HabitTracker from './components/daily/HabitTracker';
import CookingConverter from './components/daily/CookingConverter';
import WorldClock from './components/daily/WorldClock';
import DogAgeConverter from './components/daily/DogAgeConverter';
import PlantWatering from './components/daily/PlantWatering';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>(() => {
    const saved = localStorage.getItem('tc_lang');
    if (saved) return saved as Language;
    return 'en';
  });

  const t = useCallback((path: string): string => {
    const keys = path.split('.');
    let value = locales[lang];
    for (const key of keys) {
      value = value?.[key];
    }
    // Return localized string or raw key if missing
    return typeof value === 'string' ? value : path;
  }, [lang]);

  useEffect(() => {
    localStorage.setItem('tc_lang', lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('tc_dark') === 'true');
  const [currentView, setCurrentView] = useState<'home' | 'category' | 'calculator' | 'privacy' | 'contact'>('home');
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [selectedCalculator, setSelectedCalculator] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (darkMode) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
    localStorage.setItem('tc_dark', String(darkMode));
  }, [darkMode]);

  const ALL_CALCS = useMemo((): CalculatorDef[] => [
    { id: 'bmi', category: Category.HEALTH, icon: '⚖️', keywords: ['weight', 'health', 'imc'] },
    { id: 'bmr', category: Category.HEALTH, icon: '🔥', keywords: ['metabolism', 'tmb'] },
    { id: 'water', category: Category.HEALTH, icon: '💧', keywords: ['hydration'] },
    { id: 'calorie', category: Category.HEALTH, icon: '🍎', keywords: ['diet', 'tdee'] },
    { id: 'bodyFat', category: Category.HEALTH, icon: '📏', keywords: ['fat'] },
    { id: 'idealWeight', category: Category.HEALTH, icon: '🏃', keywords: ['weight'] },
    { id: 'heartRate', category: Category.HEALTH, icon: '💓', keywords: ['cardio'] },
    { id: 'bloodPressure', category: Category.HEALTH, icon: '🩺', keywords: ['bp'] },
    { id: 'sleep', category: Category.HEALTH, icon: '🛌', keywords: ['sleep'] },
    { id: 'pregnancy', category: Category.HEALTH, icon: '👶', keywords: ['baby'] },
    { id: 'mortgage', category: Category.FINANCE, icon: '🏠', keywords: ['home'] },
    { id: 'loan', category: Category.FINANCE, icon: '💳', keywords: ['debt'] },
    { id: 'compoundInterest', category: Category.FINANCE, icon: '📈', keywords: ['save'] },
    { id: 'roi', category: Category.FINANCE, icon: '📊', keywords: ['profit'] },
    { id: 'currency', category: Category.FINANCE, icon: '💱', keywords: ['money'] },
    { id: 'retirement', category: Category.FINANCE, icon: '🏖️', keywords: ['future'] },
    { id: 'tax', category: Category.FINANCE, icon: '📝', keywords: ['income'] },
    { id: 'budget', category: Category.FINANCE, icon: '💼', keywords: ['expense'] },
    { id: 'creditCard', category: Category.FINANCE, icon: '✂️', keywords: ['debt'] },
    { id: 'salary', category: Category.FINANCE, icon: '💵', keywords: ['wages'] },
    { id: 'arithmetic', category: Category.MATH, icon: '➕', keywords: ['sum'] },
    { id: 'scientific', category: Category.MATH, icon: '🔬', keywords: ['trig'] },
    { id: 'quadratic', category: Category.MATH, icon: '📉', keywords: ['roots'] },
    { id: 'prime', category: Category.MATH, icon: '🔢', keywords: ['numbers'] },
    { id: 'factorial', category: Category.MATH, icon: '❗️', keywords: ['math'] },
    { id: 'percentage', category: Category.MATH, icon: '🏷️', keywords: ['stats'] },
    { id: 'unitConverter', category: Category.MATH, icon: '⚖️', keywords: ['metric'] },
    { id: 'geometry', category: Category.MATH, icon: '⚪', keywords: ['area'] },
    { id: 'statistics', category: Category.MATH, icon: '📈', keywords: ['mean'] },
    { id: 'probability', category: Category.MATH, icon: '🎲', keywords: ['chance'] },
    { id: 'random', category: Category.DAILY, icon: '🎲', keywords: ['luck'] },
    { id: 'tip', category: Category.DAILY, icon: '🍽️', keywords: ['bill'] },
    { id: 'age', category: Category.DAILY, icon: '🎂', keywords: ['birthday'] },
    { id: 'dateDiff', category: Category.DAILY, icon: '📅', keywords: ['calendar'] },
    { id: 'worldClock', category: Category.DAILY, icon: '⌚', keywords: ['time'] },
    { id: 'dogAge', category: Category.DAILY, icon: '🐕', keywords: ['pet'] },
  ].map(c => ({
    ...c,
    name: t(`calculators.${c.id}.name`),
    desc: t(`calculators.${c.id}.desc`)
  })), [t]);

  const filteredCalculators = useMemo(() => {
    if (!searchQuery) return [];
    const q = searchQuery.toLowerCase();
    return ALL_CALCS.filter(c => 
      c.name.toLowerCase().includes(q) || 
      c.desc.toLowerCase().includes(q) || 
      c.keywords.some(k => k.includes(q))
    );
  }, [searchQuery, ALL_CALCS]);

  const navigateToCalculator = (id: string) => {
    setSelectedCalculator(id);
    setCurrentView('calculator');
    setSearchQuery('');
    window.scrollTo(0, 0);
  };

  const renderContent = () => {
    if (currentView === 'privacy') return <PrivacyPolicy onBack={() => setCurrentView('home')} lang={lang} t={t} />;
    if (currentView === 'contact') return <Contact onBack={() => setCurrentView('home')} lang={lang} t={t} />;

    const commonProps = { onBack: () => setCurrentView('category'), darkMode, lang, t };

    if (currentView === 'home') {
      return (
        <div className="space-y-8 animate-in fade-in duration-500">
          <section className="text-center py-16 md:py-24 bg-gradient-to-br from-slate-900 to-primary-800 rounded-[3rem] text-white px-6 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute -top-20 -left-20 w-80 h-80 bg-white rounded-full blur-3xl"></div>
                <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-primary-500 rounded-full blur-3xl"></div>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight leading-none">{t('home.heroTitle')}</h1>
            <p className="text-xl md:text-2xl text-primary-50 opacity-90 max-w-3xl mx-auto mb-12 font-light">{t('home.heroSub')}</p>
            <div className="max-w-2xl mx-auto relative z-10">
              <SearchBar 
                value={searchQuery} 
                onChange={setSearchQuery} 
                results={filteredCalculators} 
                onSelect={navigateToCalculator} 
                lang={lang} 
                t={t}
              />
            </div>
          </section>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <CategoryCard title={t('categories.math')} icon="📐" description={t('home.mathDesc')} onClick={() => { setSelectedCategory(Category.MATH); setCurrentView('category'); }} />
            <CategoryCard title={t('categories.finance')} icon="💰" description={t('home.financeDesc')} onClick={() => { setSelectedCategory(Category.FINANCE); setCurrentView('category'); }} />
            <CategoryCard title={t('categories.health')} icon="🏥" description={t('home.healthDesc')} onClick={() => { setSelectedCategory(Category.HEALTH); setCurrentView('category'); }} />
            <CategoryCard title={t('categories.daily')} icon="🗓️" description={t('home.dailyDesc')} onClick={() => { setSelectedCategory(Category.DAILY); setCurrentView('category'); }} />
          </div>
        </div>
      );
    }

    if (currentView === 'category') {
      const listProps = { onSelect: navigateToCalculator, onBack: () => setCurrentView('home'), lang, t };
      switch (selectedCategory) {
        case Category.MATH: return <MathCalculatorsList {...listProps} />;
        case Category.FINANCE: return <FinanceCalculatorsList {...listProps} />;
        case Category.HEALTH: return <HealthCalculatorsList {...listProps} />;
        case Category.DAILY: return <DailyCalculatorsList {...listProps} />;
        default: return null;
      }
    }

    if (currentView === 'calculator') {
      switch (selectedCalculator) {
        case 'bmi': return <BMICalculator {...commonProps} />;
        case 'bmr': return <BMRCalculator {...commonProps} />;
        case 'water': return <WaterIntakeCalculator {...commonProps} />;
        case 'calorie': return <CalorieCalculator {...commonProps} />;
        case 'bodyFat': return <BodyFatCalculator {...commonProps} />;
        case 'idealWeight': return <IdealWeightCalculator {...commonProps} />;
        case 'heartRate': return <HeartRateCalculator {...commonProps} />;
        case 'bloodPressure': return <BloodPressureCalculator {...commonProps} />;
        case 'sleep': return <SleepCalculator {...commonProps} />;
        case 'pregnancy': return <PregnancyCalculator {...commonProps} />;
        case 'mortgage': return <MortgageCalculator {...commonProps} />;
        case 'loan': return <LoanCalculator {...commonProps} />;
        case 'compoundInterest': return <CompoundInterestCalculator {...commonProps} />;
        case 'roi': return <ROICalculator {...commonProps} />;
        case 'currency': return <CurrencyConverter {...commonProps} />;
        case 'retirement': return <RetirementCalculator {...commonProps} />;
        case 'tax': return <TaxEstimator {...commonProps} />;
        case 'budget': return <BudgetPlanner {...commonProps} />;
        case 'creditCard': return <CreditCardPayoff {...commonProps} />;
        case 'salary': return <SalaryCalculator {...commonProps} />;
        case 'arithmetic': return <BasicCalculator {...commonProps} />;
        case 'scientific': return <ScientificCalculator {...commonProps} />;
        case 'quadratic': return <QuadraticSolver {...commonProps} />;
        case 'prime': return <PrimeChecker {...commonProps} />;
        case 'factorial': return <FactorialCalculator {...commonProps} />;
        case 'percentage': return <PercentageCalculator {...commonProps} />;
        case 'unitConverter': return <UnitConverter {...commonProps} />;
        case 'geometry': return <GeometryCalculator {...commonProps} />;
        case 'statistics': return <StatisticsCalculator {...commonProps} />;
        case 'probability': return <ProbabilityCalculator {...commonProps} />;
        case 'random': return <RandomNumberGen {...commonProps} />;
        case 'tip': return <TipCalculator {...commonProps} />;
        case 'age': return <AgeCalculator {...commonProps} />;
        case 'dateDiff': return <DateDiffCalculator {...commonProps} />;
        case 'timezone': return <TimeZoneConverter {...commonProps} />;
        case 'password': return <PasswordGenerator {...commonProps} />;
        case 'qr': return <QRCodeMock {...commonProps} />;
        case 'color': return <ColorPicker {...commonProps} />;
        case 'lottery': return <LotteryOdds {...commonProps} />;
        case 'fuel': return <FuelEfficiency {...commonProps} />;
        case 'recipe': return <RecipeScaler {...commonProps} />;
        case 'travel': return <TravelTime {...commonProps} />;
        case 'clothing': return <ClothingSuggester {...commonProps} />;
        case 'countdown': return <CountdownTimer {...commonProps} />;
        case 'grocery': return <GroceryEstimator {...commonProps} />;
        case 'habit': return <HabitTracker {...commonProps} />;
        case 'cooking': return <CookingConverter {...commonProps} />;
        case 'worldClock': return <WorldClock {...commonProps} />;
        case 'dogAge': return <DogAgeConverter {...commonProps} />;
        case 'plant': return <PlantWatering {...commonProps} />;
        default: return <div className="p-8 text-center">{t('common.invalidInput')}</div>;
      }
    }
    return null;
  };

  return (
    <div className="flex flex-col min-h-screen selection:bg-primary-500 selection:text-white transition-colors duration-300">
      <Navigation 
        darkMode={darkMode} onToggleDarkMode={() => setDarkMode(!darkMode)} 
        onHome={() => setCurrentView('home')} 
        lang={lang} onLangChange={setLang}
        t={t}
      />
      <main className="flex-grow container mx-auto px-4 py-8 max-w-6xl">
        {renderContent()}
      </main>
      <footer className="border-t border-slate-200 dark:border-slate-800 py-16 bg-white dark:bg-slate-900 transition-colors">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-1">
              <h3 className="font-bold text-2xl mb-4 text-slate-900 dark:text-white">TotalCalc</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{t('common.description')}</p>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-slate-900 dark:text-white">{t('categories.math')}</h4>
              <ul className="text-sm space-y-3 text-slate-500 dark:text-slate-400">
                <li className="hover:text-primary-600 cursor-pointer">{t('categories.mathTools')}</li>
                <li className="hover:text-primary-600 cursor-pointer">{t('categories.financeTools')}</li>
                <li className="hover:text-primary-600 cursor-pointer">{t('categories.healthTools')}</li>
                <li className="hover:text-primary-600 cursor-pointer">{t('categories.dailyTools')}</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-slate-900 dark:text-white">Support</h4>
              <ul className="text-sm space-y-3 text-slate-500 dark:text-slate-400">
                <li onClick={() => setCurrentView('privacy')} className="hover:text-primary-600 cursor-pointer">{t('nav.privacy')}</li>
                <li onClick={() => setCurrentView('contact')} className="hover:text-primary-600 cursor-pointer">{t('nav.contact')}</li>
              </ul>
            </div>
            <div>
                <h4 className="font-bold mb-4 text-slate-900 dark:text-white">Social</h4>
                <p className="text-sm text-slate-500 dark:text-slate-400">adonisrrahmani7@gmail.com</p>
                <div className="mt-4 flex space-x-4">
                   <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center hover:bg-primary-100 transition-colors cursor-pointer">🐦</div>
                   <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center hover:bg-primary-100 transition-colors cursor-pointer">📸</div>
                </div>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-100 dark:border-slate-800 text-center">
            <p className="text-slate-500 dark:text-slate-400 text-xs">{t('common.copyright')}</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
