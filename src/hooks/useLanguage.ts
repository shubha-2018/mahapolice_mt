import { useLanguageContext } from '@/context/LanguageContext';

export const useLanguage = () => {
  // Use global context so toggling updates all components instantly
  return useLanguageContext();
};