import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { LanguageToggle } from './LanguageToggle';
import { ThemeToggle } from './ThemeToggle';
import { useLanguage } from '@/hooks/useLanguage';
import { translations } from '@/data/translations';
import { Menu, Accessibility } from 'lucide-react';

// Extend global
declare global {
  interface Window {
    AccessibilityWidget?: {
      init?: (config?: Record<string, unknown>) => void;
      open?: () => void;
      close?: () => void;
    };
  }
}

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language: lang } = useLanguage();
  const [widgetReady, setWidgetReady] = useState(false);

  useEffect(() => {
    // Ensure container exists
    if (!document.getElementById('accessibility-widget')) {
      const container = document.createElement('div');
      container.id = 'accessibility-widget';
      document.body.appendChild(container);
    }

    const script = document.createElement('script');
    script.src = 'https://cdn.ux4g.gov.in/tools/accessibility-widget.js';
    script.async = true;

    script.onload = () => {
      console.log('Accessibility Widget script loaded');
      if (window.AccessibilityWidget?.init) {
        // Call init with config
        window.AccessibilityWidget.init({
          target: '#accessibility-widget',
          autoOpen: false,
        });
        console.log('Accessibility Widget initialized');
        setWidgetReady(true);
      }
    };

    script.onerror = () => {
      console.error('Failed to load Accessibility Widget');
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const navItems = [
    { key: 'home', href: '#home' },
    { key: 'about', href: '#about' },
    { key: 'leadership', href: '#leadership' },
    { key: 'services', href: '#services' },
    { key: 'organization', href: '#organization' },
    { key: 'employee', href: '#employee' },
    { key: 'citizen', href: '#citizen' },
    { key: 'contact', href: '#contact' },
  ];

  const getNavLabel = (key: string) =>
    translations.nav[key as keyof typeof translations.nav][lang];

  return (
    <header className="police-header sticky top-0 z-50 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo + Title */}
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 border-2 border-dashed border-primary/60 rounded-full flex items-center justify-center bg-primary/10">
              <div className="text-center">
                <div className="text-primary text-[10px] font-medium mb-1">MP SYMBOL</div>
                <div className="text-primary/70 text-[8px]">REPLACE WITH IMAGE</div>
              </div>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/c/c6/Ashok_Emblem_svg.svg"
                alt="Maharashtra Police Symbol"
                className="hidden w-full h-full object-contain rounded-full"
                onLoad={(e) => {
                  e.currentTarget.style.display = 'block';
                  e.currentTarget.parentElement?.querySelector('.text-center')?.remove();
                }}
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>

            <div className="text-left">
              <h1
                className={`police-heading text-lg md:text-xl lg:text-2xl ${
                  lang === 'marathi' ? 'marathi-text' : 'english-text'
                }`}
              >
                {lang === 'marathi'
                  ? 'मोटर ट्रान्सपोर्ट विभाग, महाराष्ट्र पोलीस'
                  : 'Motor Transport Department, Maharashtra Police'}
              </h1>
              <p
                className={`text-sm text-muted-foreground ${
                  lang === 'marathi' ? 'marathi-text' : 'english-text'
                }`}
              >
                {lang === 'marathi'
                  ? 'महाराष्ट्र पोलीस अधिकृत संकेतस्थळ'
                  : 'Official website of Maharashtra Police'}
              </p>
            </div>
          </div>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className={`police-nav-link ${
                  lang === 'marathi' ? 'marathi-text' : 'english-text'
                }`}
              >
                {getNavLabel(item.key)}
              </a>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3">
            {/* Accessibility */}
            <Button
              variant="ghost"
              size="sm"
              disabled={!widgetReady}
              className="hover:bg-accent/10 button-visible button-hover-effect"
              onClick={() => {
                if (window.AccessibilityWidget?.open) {
                  window.AccessibilityWidget.open();
                }
              }}
            >
              <Accessibility
                size={20}
                className="text-primary transition-all duration-300 hover:scale-110"
              />
            </Button>

            <ThemeToggle />
            <LanguageToggle />

            {/* Mobile nav */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button
                  variant="ghost"
                  size="sm"
                  className="button-visible button-hover-effect"
                >
                  <Menu size={24} className="transition-all duration-300 hover:scale-110" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col gap-4 mt-8">
                  {navItems.map((item) => (
                    <a
                      key={item.key}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`police-nav-link text-lg py-2 ${
                        lang === 'marathi' ? 'marathi-text' : 'english-text'
                      }`}
                    >
                      {getNavLabel(item.key)}
                    </a>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

