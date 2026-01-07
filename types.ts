
export type Gender = 'male' | 'female';
export type UnitSystem = 'metric' | 'imperial';
export type Language = 'en' | 'es' | 'zh' | 'hi';

export interface CalculatorProps {
  darkMode: boolean;
  lang: Language;
  onBack: () => void;
  t: (path: string) => string;
}

export enum Category {
  HEALTH = 'Health',
  FINANCE = 'Finance',
  MATH = 'Math',
  DAILY = 'Daily Life'
}

export interface CalculatorDef {
  id: string;
  name: string;
  category: Category;
  icon: string;
  desc: string;
  keywords: string[];
}

export interface HealthResult {
  value: string | number;
  category?: string;
  color?: string;
  description: string;
  advice: string;
}
