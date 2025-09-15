export type Language = 'marathi' | 'english';

export interface LanguageContent {
  marathi: string;
  english: string;
}

export interface NavItem {
  key: string;
  href: string;
  label: LanguageContent;
}

export interface Translation {
  nav: {
    home: LanguageContent;
    about: LanguageContent;
    leadership: LanguageContent;
    services: LanguageContent;
    organization: LanguageContent;
    employee: LanguageContent;
    citizen: LanguageContent;
    contact: LanguageContent;
  };
  common: {
    readMore: LanguageContent;
    viewAll: LanguageContent;
    contact: LanguageContent;
    address: LanguageContent;
    phone: LanguageContent;
    email: LanguageContent;
    copyright: LanguageContent;
  };
  home: {
    title: LanguageContent;
    subtitle: LanguageContent;
    heroMessage: LanguageContent;
    impactTitle: LanguageContent;
    leadershipTitle: LanguageContent;
    igpMessageTitle: LanguageContent;
    aboutTitle: LanguageContent;
    whatsNewTitle: LanguageContent;
    quickAccessTitle: LanguageContent;
    latestUpdatesTitle: LanguageContent;
  };
}