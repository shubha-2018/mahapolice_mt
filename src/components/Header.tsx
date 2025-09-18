import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { LanguageToggle } from './LanguageToggle';
import { ThemeToggle } from './ThemeToggle';
import { useLanguage } from '@/hooks/useLanguage';
import { translations } from '@/data/translations';
import { Menu, Accessibility } from 'lucide-react';
import policelogo from "../assets/images/mahapolice-logo-removebg-preview.png";
import Emblem from "../assets/images/Emblem12.png";
import motorlogo from "../assets/images/motorlogo.jpg";
import { Link } from "react-router-dom"; 

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
    if (!document.getElementById('accessibility-widget')) {
      const container = document.createElement('div');
      container.id = 'accessibility-widget';
      document.body.appendChild(container);
    }

    const script = document.createElement('script');
    script.src = 'https://cdn.ux4g.gov.in/tools/accessibility-widget.js';
    script.async = true;

    script.onload = () => {
      if (window.AccessibilityWidget?.init) {
        window.AccessibilityWidget.init({
          target: '#accessibility-widget',
          autoOpen: false,
        });
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
    { key: 'home', href: '/' },
    { key: 'about', href: '/aboutpage' },
    { key: 'organization', href: '/organizationpage' },
    { key: 'employee', href: '/employeecorner' },
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
          <div className="flex items-center gap-2">
            <div className="w-15 h-18 rounded-full flex items-center justify-center overflow-hidden">
              {/* Emblem Logo */}
              <img
                src={Emblem}
                alt="Maharashtra Police Logo"
                className="w-16 h-16 object-contain"
              />
            </div>
            <div className="w-20 h-20 rounded-full flex items-center justify-center overflow-hidden">
              {/* Police Logo */}
              <img
                src={policelogo}
                alt="Maharashtra Police Logo"
                className="w-20 h-20 object-contain"
              />
            </div>

            <div className="text-left">
              <h1
                className={`police-heading text-lg md:text-xl lg:text-2xl ${
                  lang === 'marathi' ? 'marathi-text' : 'english-text'
                }`}
              >
                {lang === 'marathi'
                  ? 'मोटर परिवहन विभाग, महाराष्ट्र राज्य पुणे'
                  : 'Motor Transport Department, Maharashtra State, Pune'}
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
    <Link
      key={item.key}
      to={item.href}
      className={`police-nav-link ${lang === 'marathi' ? 'marathi-text' : 'english-text'}`}
    >
      {getNavLabel(item.key)}
    </Link>
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
                   <Link
                 key={item.key}
                 to={item.href}
                 onClick={() => setIsOpen(false)}
                 className="police-nav-link text-lg py-2"
                   >
               {getNavLabel(item.key)}
                 </Link>

                  ))}
                </nav>
              </SheetContent>
            </Sheet>

            {/* Police Logo (End of Navbar) */}
            <div className="w-20 h-20 rounded-full flex items-center justify-center overflow-hidden ml-2">
              <img
                src={motorlogo}
                alt="Maharashtra Police Logo"
                className="w-20 h-20 object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
