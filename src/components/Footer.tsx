// import { useLanguage } from '@/hooks/useLanguage';
// import { translations } from '@/data/translations';
// import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
// import motorlogo from "@/assets/images/MT_logo.jpg";

// const Footer = () => {
//   const { language } = useLanguage();

//   const footerContent = {
//     marathi: {
//       quickLinks: 'Links',
//       services: 'सेवा',
//       contactInfo: 'संपर्क माहिती',
//       address: 'विशेष महानिरीक्षक,मोटार परिवहन विभाग,महाराष्ट्र राज्य,औंध-पुणे 411067',
//       email: 'ig.mt.pune@mahapolice.gov.in',
//       phone: '+91-02025880718',
//       serviceItems: [
        
//        ' वाहनांची दुरुस्ती व देखभाल सेवा' ,
//         'वाहन ताफा व्यवस्थापन सेवा' ,
//         'चालक व तांत्रिक प्रशिक्षण सेवा ',
//        ' सागरी किनारा पेट्रोलिंग सेवा ',
//        'RTI',

        
//       ]
//     },
//     english: {
//       quickLinks: 'Quick Links',
//       services: 'Services',
//       contactInfo: 'Contact Information',
//       address: 'Headquarters: Motor Transport Department, Maharashtra Police, Mumbai - 400001',
//       email: 'ig.mt.pune@mahapolice.gov.in',
//       phone: '+91-02025880718',
//       serviceItems: [
//         'Fleet Management',
//         'Workshop Services',
//         'Driver Training',
//         'Technical Support'
//       ]
//     }
//   };

//   const quickLinks = [
//     { key: 'home', href: '#home' },
//     { key: 'about', href: '#about' },
//     { key: 'organization', href: '#organaization' },
//     { key: 'flash', href: '#flash' },
//     { key : 'service' , href:'#service'},
//     { key: 'contact', href: '#contact' }
//   ];

//   const getNavLabel = (key: string) => {
//     const item = translations.nav[key as keyof typeof translations.nav];
//     if (!item) {
//       return key.toUpperCase();
//     }
//     return item[language] || key.toUpperCase();
//   };

//   return (
//     <footer className="police-footer-bg text-white py-12">
//       <div className="container mx-auto px-4">

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
//           {/* Logo and Description */}
//           <div className="lg:col-span-1">
//             <div className="flex items-center gap-3 mb-6">
//            <div className="w-12 h-12 rounded-full flex items-center justify-center overflow-hidden bg-white">
//   <img
//     src={motorlogo}
//     alt="MT Logo"
//     className="w-10 h-10 object-contain"
//   />
// </div>

//               <div>
//                 <h3 className={`font-bold text-lg ${
//                   language === 'marathi' ? 'marathi-text' : 'english-text'
//                 }`}>
//                   {language === 'marathi' ? 'मोटार परिवहन विभाग' : 'Motor Transport'}
//                 </h3>
//                 <p className="text-sm opacity-80">Maharashtra Police</p>
//               </div>
//             </div>
//             <p className={`text-sm opacity-90 leading-relaxed ${
//               language === 'marathi' ? 'marathi-text' : 'english-text'
//             }`}>
//               {language === 'marathi' 
//                 ? 'वाहन व्यवस्थापन व  तत्पर सेवा '
//                 : 'Serving Maharashtra with dedication, security and reliability.'
//               }
//             </p>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h4 className={`font-semibold text-lg mb-6 ${
//               language === 'marathi' ? 'marathi-text' : 'english-text'
//             }`}>
//               {footerContent[language].quickLinks}
//             </h4>
//             <ul className="space-y-3">
//               {quickLinks.map((link) => (
//                 <li key={link.key}>
//                   <a 
//                     href={link.href}
//                     className={`text-sm opacity-80 hover:opacity-100 hover:text-accent transition-all duration-300 ${
//                       language === 'marathi' ? 'marathi-text' : 'english-text'
//                     }`}
//                   >
//                     {getNavLabel(link.key)}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Services */}
//           <div>
//             <h4 className={`font-semibold text-lg mb-6 ${
//               language === 'marathi' ? 'marathi-text' : 'english-text'
//             }`}>
//               {footerContent[language].services}
//             </h4>
//             <ul className="space-y-3">
//               {footerContent[language].serviceItems.map((service, index) => (
//                 <li key={index}>
//                   <span className={`text-sm opacity-80 hover:opacity-100 transition-opacity ${
//                     language === 'marathi' ? 'marathi-text' : 'english-text'
//                   }`}>
//                     {service}
//                   </span>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Contact Information */}
//           <div>
//             <h4 className={`font-semibold text-lg mb-6 ${
//               language === 'marathi' ? 'marathi-text' : 'english-text'
//             }`}>
//               {footerContent[language].contactInfo}
//             </h4>
//             <div className="space-y-4">
              
//               {/* Address */}
//               <div className="flex items-start gap-3">
//                 <MapPin className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
//                 <p className={`text-sm opacity-80 ${
//                   language === 'marathi' ? 'marathi-text' : 'english-text'
//                 }`}>
//                   {footerContent[language].address}
//                 </p>
//               </div>

//               {/* Phone */}
//               <div className="flex items-center gap-3">
//                 <Phone className="w-5 h-5 text-accent flex-shrink-0" />
//                 <a 
//                   href={`tel:${footerContent[language].phone}`}
//                   className="text-sm opacity-80 hover:opacity-100 hover:text-accent transition-all"
//                 >
//                   {footerContent[language].phone}
//                 </a>
//               </div>

//               {/* Email */}
//               <div className="flex items-center gap-3">
//                 <Mail className="w-5 h-5 text-accent flex-shrink-0" />
//                 <a 
//                   href={`mailto:${footerContent[language].email}`}
//                   className="text-sm opacity-80 hover:opacity-100 hover:text-accent transition-all"
//                 >
//                   {footerContent[language].email}
//                 </a>
//               </div>
              
//             </div>
//           </div>
//         </div>

//         {/* Bottom Bar */}
//         <div className="border-t border-white/20 mt-12 pt-8">
//           <div className="flex flex-col md:flex-row justify-between items-center gap-4">
//             <p className={`text-sm opacity-80 text-center md:text-left ${
//               language === 'marathi' ? 'marathi-text' : 'english-text'
//             }`}>
//               {translations.common.copyright[language]}
//             </p>
            
//             <div className="flex items-center gap-4">
//               <a 
//                 href="https://mahapolice.gov.in" 
//                 target="_blank" 
//                 rel="noopener noreferrer"
//                 className="text-sm opacity-80 hover:opacity-100 hover:text-accent transition-all flex items-center gap-1"
//               >
//                 Maharashtra Police
//                 <ExternalLink className="w-3 h-3" />
//               </a>
//               <span className="text-white/40">|</span>
//               <a 
//                 href="https://www.maharashtra.gov.in" 
//                 target="_blank" 
//                 rel="noopener noreferrer"
//                 className="text-sm opacity-80 hover:opacity-100 hover:text-accent transition-all flex items-center gap-1"
//               >
//                 Maharashtra Govt.
//                 <ExternalLink className="w-3 h-3" />
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import { useLanguage } from '@/hooks/useLanguage';
import { translations } from '@/data/translations';
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import motorlogo from "@/assets/images/mt-logo.jpeg";

// Utility function to convert text to Title Case, except "RTI"
const toTitleCase = (text: string) => {
  if (text.toUpperCase() === 'RTI') return 'RTI';
  return text.replace(/\w\S*/g, (word) => word.charAt(0).toUpperCase() + word.substr(1).toLowerCase());
};

const Footer = () => {
  const { language } = useLanguage();

  const footerContent = {
    marathi: {
      quickLinks: 'Links',
      services: 'सेवा',
      contactInfo: 'संपर्क माहिती',
      address: 'विशेष पोलीस महानिरीक्षक, मोटार परिवहन विभाग, महाराष्ट्र राज्य, औंध-पुणे 411067',
      email: 'ig.mt.pune@mahapolice.gov.in',
      phone: '+91-02025880718',
      serviceItems: [
        'वाहनांची दुरुस्ती व देखभाल सेवा',
        'वाहन ताफा व्यवस्थापन सेवा',
        'चालक व तांत्रिक प्रशिक्षण सेवा',
        'सागरी किनारा पेट्रोलिंग सेवा',
        'RTI'
      ]
    },
    english: {
      quickLinks: 'Quick Links',
      services: 'Services',
      contactInfo: 'Contact Information',
      address: 'Headquarters: Motor Transport Department, Maharashtra Police, Pune - 411067',
      email: 'ig.mt.pune@mahapolice.gov.in',
      phone: '+91-02025880718',
      serviceItems: [
        'Vehicle Maintenance and Repair Services',
        'Fleet Management Services',
        'Driver and Technical Training Services',
        'Coastal Patrolling Services',
        'RTI'
      ]
    }
  };

  const quickLinks = [
    { key: 'home', href: '/' },
    { key: 'about', href: '/aboutpage' },
    { key: 'organization', href: '/organizationpage' },
    { key: 'flash', href: '#flash' },
    { key: 'service', href: '#service' },
    { key: 'contact', href: '/contact' }
  ];

  const getNavLabel = (key: string) => {
    const item = translations.nav[key as keyof typeof translations.nav];
    if (!item) {
      return toTitleCase(key);
    }
    return toTitleCase(item[language] || key);
  };

  return (
    <footer className="police-footer-bg text-white py-12">
      <div className="container mx-auto px-4">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full flex items-center justify-center overflow-hidden bg-white">
                <img
                  src={motorlogo}
                  alt="MT Logo"
                  className="w-10 h-10 object-contain"
                />
              </div>

              <div>
                <h3 className={`font-bold text-lg ${
                  language === 'marathi' ? 'marathi-text' : 'english-text'
                }`}>
                  {language === 'marathi' ? toTitleCase('मोटार परिवहन विभाग') : toTitleCase('motor transport department')}
                </h3>
                <p className="text-sm opacity-80">
                  {language === 'marathi' ? toTitleCase('महाराष्ट्र पोलीस') : toTitleCase('maharashtra police')}
                </p>
              </div>
            </div>
            <p className={`text-sm opacity-90 leading-relaxed ${
              language === 'marathi' ? 'marathi-text' : 'english-text'
            }`}>
              {language === 'marathi'
                ? toTitleCase('वाहन व्यवस्थापन व तत्पर सेवा')
                : toTitleCase('serving maharashtra with dedication, security and reliability.')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className={`font-semibold text-lg mb-6 ${
              language === 'marathi' ? 'marathi-text' : 'english-text'
            }`}>
              {toTitleCase(footerContent[language].quickLinks)}
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
              {toTitleCase(footerContent[language].services)}
            </h4>
            <ul className="space-y-3">
              {footerContent[language].serviceItems.map((service, index) => (
                <li key={index}>
                  <span className={`text-sm opacity-80 hover:opacity-100 transition-opacity ${
                    language === 'marathi' ? 'marathi-text' : 'english-text'
                  }`}>
                    {toTitleCase(service)}
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
              {toTitleCase(footerContent[language].contactInfo)}
            </h4>
            <div className="space-y-4">
              
              {/* Address */}
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <p className={`text-sm opacity-80 ${
                  language === 'marathi' ? 'marathi-text' : 'english-text'
                }`}>
                  {toTitleCase(footerContent[language].address)}
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
              {toTitleCase(translations.common.copyright[language])}
            </p>
            
            <div className="flex items-center gap-4">
              <a 
                href="https://mahapolice.gov.in" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm opacity-80 hover:opacity-100 hover:text-accent transition-all flex items-center gap-1"
              >
                {toTitleCase('maharashtra police')}
                <ExternalLink className="w-3 h-3" />
              </a>
              <span className="text-white/40">|</span>
              <a 
                href="https://www.maharashtra.gov.in" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm opacity-80 hover:opacity-100 hover:text-accent transition-all flex items-center gap-1"
              >
                {toTitleCase('maharashtra govt.')}
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
