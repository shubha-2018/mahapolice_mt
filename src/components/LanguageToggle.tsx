import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/useLanguage';
import { Globe } from 'lucide-react';

export const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="police-nav-link flex items-center gap-2  language-toggle button-visible button-hover-effect"
      aria-label={language === 'marathi' ? 'Switch language to English' : 'भाषा मराठीत बदला'}
      aria-pressed={language === 'english'}
    >
      <Globe size={16} className="transition-transform duration-300 hover:rotate-180" />
      <span className="font-medium transition-all duration-300">
        {language === 'marathi' ? 'English' : 'मराठी'}
      </span>
    </Button>
  );
}; 