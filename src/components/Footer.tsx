import { useLanguage } from '@/hooks/useLanguage';
import { translations } from '@/data/translations';
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

const Footer = () => {
  const { language } = useLanguage();

  const footerContent = {
    marathi: {
      quickLinks: 'द्रुत दुवे',
      services: 'सेवा',
      contactInfo: 'संपर्क माहिती',
      address: 'विशेष पोलिस महानिरीक्षक, महाराष्ट्र राज्य,औंध-पुणे 411007',
      email: 'igmtpune@gmail.com',
      phone: '+91-02025880718',
      serviceItems: [
        'फ्लीट व्यवस्थापन',
        'कार्यशाळा सेवा',
        'ड्रायव्हर प्रशिक्षण',
        'तांत्रिक सहाय्य'
      ]
    },
    english: {
      quickLinks: 'Quick Links',
      services: 'Services',
      contactInfo: 'Contact Information',
      address: 'Headquarters: Motor Transport Department, Maharashtra Police, Mumbai - 400001',
      email: 'igmtpune@gmail.com',
      phone: '+91-02025880718',
      serviceItems: [
        'Fleet Management',
        'Workshop Services',
        'Driver Training',
        'Technical Support'
      ]
    }
  };

  const quickLinks = [
    { key: 'home', href: '#home' },
    { key: 'about', href: '#about' },
    { key: 'services', href: '#services' },
    { key: 'contact', href: '#contact' }
  ];

  const getNavLabel = (key: string) => {
    return translations.nav[key as keyof typeof translations.nav][language];
  };

  return (
    <footer className="police-footer-bg text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <span className="text-primary font-bold text-sm">MP</span>
              </div>
              <div>
                <h3 className={`font-bold text-lg ${
                  language === 'marathi' ? 'marathi-text' : 'english-text'
                }`}>
                  {language === 'marathi' ? 'मोटार परिवहन विभाग' : 'Motor Transport'}
                </h3>
                <p className="text-sm opacity-80">Maharashtra Police</p>
              </div>
            </div>
            <p className={`text-sm opacity-90 leading-relaxed ${
              language === 'marathi' ? 'marathi-text' : 'english-text'
            }`}>
              {language === 'marathi' 
                ? 'सेवा, सुरक्षा आणि विश्वसनीयतेसह महाराष्ट्राची सेवा करत आहोत.'
                : 'Serving Maharashtra with dedication, security and reliability.'
              }
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className={`font-semibold text-lg mb-6 ${
              language === 'marathi' ? 'marathi-text' : 'english-text'
            }`}>
              {footerContent[language].quickLinks}
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.key}>
                  <a 
                    href={link.href}
                    className={`text-sm opacity-80 hover:opacity-100 hover:text-accent transition-all duration-300 ${
                      language === 'marathi' ? 'marathi-text' : 'english-text'
                    }`}
                  >
                    {getNavLabel(link.key)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className={`font-semibold text-lg mb-6 ${
              language === 'marathi' ? 'marathi-text' : 'english-text'
            }`}>
              {footerContent[language].services}
            </h4>
            <ul className="space-y-3">
              {footerContent[language].serviceItems.map((service, index) => (
                <li key={index}>
                  <span className={`text-sm opacity-80 hover:opacity-100 transition-opacity ${
                    language === 'marathi' ? 'marathi-text' : 'english-text'
                  }`}>
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className={`font-semibold text-lg mb-6 ${
              language === 'marathi' ? 'marathi-text' : 'english-text'
            }`}>
              {footerContent[language].contactInfo}
            </h4>
            <div className="space-y-4">
              
              {/* Address */}
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <p className={`text-sm opacity-80 ${
                  language === 'marathi' ? 'marathi-text' : 'english-text'
                }`}>
                  {footerContent[language].address}
                </p>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <a 
                  href={`tel:${footerContent[language].phone}`}
                  className="text-sm opacity-80 hover:opacity-100 hover:text-accent transition-all"
                >
                  {footerContent[language].phone}
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <a 
                  href={`mailto:${footerContent[language].email}`}
                  className="text-sm opacity-80 hover:opacity-100 hover:text-accent transition-all"
                >
                  {footerContent[language].email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className={`text-sm opacity-80 text-center md:text-left ${
              language === 'marathi' ? 'marathi-text' : 'english-text'
            }`}>
              {translations.common.copyright[language]}
            </p>
            
            <div className="flex items-center gap-4">
              <a 
                href="https://mahapolice.gov.in" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm opacity-80 hover:opacity-100 hover:text-accent transition-all flex items-center gap-1"
              >
                Maharashtra Police
                <ExternalLink className="w-3 h-3" />
              </a>
              <span className="text-white/40">|</span>
              <a 
                href="https://www.maharashtra.gov.in" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm opacity-80 hover:opacity-100 hover:text-accent transition-all flex items-center gap-1"
              >
                Maharashtra Govt.
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;