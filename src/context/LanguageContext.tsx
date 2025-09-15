import { createContext, useContext, useEffect, useMemo, useState, ReactNode } from 'react';
import { Language } from '@/types/language';

const STORAGE_KEY = 'mp_lang'; // per requirements

interface LanguageContextValue {
  language: Language;
  switchLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  isMarathi: boolean;
  isEnglish: boolean;
}

const defaultValue: LanguageContextValue = {
  language: 'marathi',
  switchLanguage: () => {},
  toggleLanguage: () => {},
  isMarathi: true,
  isEnglish: false,
};

const LanguageContext = createContext<LanguageContextValue>(defaultValue);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('marathi');

  // Initialize with Marathi default - no localStorage
  useEffect(() => {
    setLanguage('marathi'); // Always default to Marathi
  }, []);

  const switchLanguage = (newLanguage: Language) => {
    setLanguage(newLanguage);
    // No localStorage - just session-based toggle
  };

  const toggleLanguage = () => {
    switchLanguage(language === 'marathi' ? 'english' : 'marathi');
  };

  const value = useMemo(
    () => ({
      language,
      switchLanguage,
      toggleLanguage,
      isMarathi: language === 'marathi',
      isEnglish: language === 'english',
    }),
    [language]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguageContext = () => useContext(LanguageContext);
export { LanguageContext };