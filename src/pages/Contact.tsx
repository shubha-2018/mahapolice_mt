// import React, { useEffect } from 'react';
// import { MapPin, Phone, Mail, ExternalLink } from 'lucide-react';
// import { useLanguage } from '@/hooks/useLanguage'; // Custom hook for language

// const ContactPage = () => {
//   const { language: lang } = useLanguage(); // Get current language

//   // Ensure the Contact page opens at the very top
//   useEffect(() => {
//     window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
//   }, []);

//   const contacts = [
//     {
//       title: {
//         marathi: 'मोटार परिवहन, महाराष्ट्र राज्य पुणे',
//         english: 'Motor Transport Department, Maharashtra State Pune',
//       },
//       address: {
//         marathi: 'विशेष पोलीस निरीक्षक, मोटार परिवहन, महाराष्ट्र राज्य, औंध, पुणे. 411067',
//         english: 'Special Inspector General of Police, Motor Transport, Maharashtra State, Aundh, Pune. 411067',
//       },
//       phone: '02025880718',
//       email: 'ig.mt.pune@mahapolice.gov.in',
//       // department: { marathi: '', english: 'Police Vehicle Management' }
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-500">
//       {/* Contact Section */}
//       <div id="contact" className="py-20 px-6 mt-24">
//         <div className="max-w-5xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 dark:text-gray-200 mb-4">
//               {lang === 'marathi' ? 'आमच्याशी संपर्क साधा' : 'Contact Us'}
//             </h2>
//             <p className="text-xl text-gray-600 dark:text-gray-300">
//               {lang === 'marathi' ? 'कोणत्याही सहाय्यासाठी किंवा चौकशीसाठी संपर्क साधा' : 'Reach out for any assistance or inquiries'}
//             </p>
//           </div>

//           {contacts.map((contact, index) => (
//             <div
//               key={index}
//               className="bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 rounded-3xl overflow-hidden shadow-2xl transition-colors duration-500"
//             >
//               <div className="flex flex-col lg:flex-row">
//                 {/* Contact Info Side */}
//                 <div className="lg:w-1/2 p-8 lg:p-12">
//                   <div className="mb-8">
//                     <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">
//                       {contact.title[lang]}
//                     </h3>
//                   </div>

//                   <div className="space-y-6">
//                     <div className="flex items-center space-x-4">
//                       <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
//                         <MapPin className="w-6 h-6 text-white" />
//                       </div>
//                       <div>
//                         <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-1">
//                           {lang === 'marathi' ? 'कार्यालयाचा पत्ता' : 'Office Address'}
//                         </h4>
//                         <p className="text-gray-600 dark:text-gray-300">{contact.address[lang]}</p>
//                       </div>
//                     </div>

//                     <div className="flex items-center space-x-4">
//                       <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
//                         <Phone className="w-6 h-6 text-white" />
//                       </div>
//                       <div>
//                         <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-1">
//                           {lang === 'marathi' ? 'फोन नंबर' : 'Phone Number'}
//                         </h4>
//                         <a
//                           href={`tel:${contact.phone}`}
//                           className="text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-500 font-semibold text-lg transition-colors"
//                         >
//                           {contact.phone}
//                         </a>
//                       </div>
//                     </div>

//                     <div className="flex items-center space-x-4">
//                       <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
//                         <Mail className="w-6 h-6 text-white" />
//                       </div>
//                       <div>
//                         <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-1">
//                           {lang === 'marathi' ? 'ईमेल पत्ता' : 'Email Address'}
//                         </h4>
//                         <a
//                           href={`mailto:${contact.email}`}
//                           className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-semibold break-all transition-colors"
//                         >
//                           {contact.email}
//                         </a>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Map/Visual Side */}
//                 <div className="lg:w-1/2 bg-gradient-to-br from-blue-600 to-indigo-700 dark:from-gray-700 dark:to-gray-800 p-8 lg:p-12 text-white flex items-center justify-center transition-colors duration-500">
//                   <div className="text-center">
//                     <div className="w-24 h-24 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
//                       <MapPin className="w-12 h-12 text-white" />
//                     </div>
//                     <h3 className="text-2xl font-bold mb-4">
//                       {lang === 'marathi' ? 'आमच्या कार्यालयाला भेट द्या' : 'Visit Our Office'}
//                     </h3>
//                     <p className="text-blue-100 dark:text-gray-200 mb-6 leading-relaxed">
//                       {lang === 'marathi'
//                         ? 'पुण्याच्या हृदयात स्थित, आमचे कार्यालय सहज प्रवेशयोग्य असून आधुनिक सुविधा उपलब्ध आहेत.'
//                         : 'Located in the heart of Pune, our office is easily accessible and equipped with modern facilities.'}
//                     </p>
//                     <div className="space-y-3">
//                       <a
//                         href="https://www.google.com/maps?q=18.562883246780896,73.81327144433503"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="inline-flex items-center justify-center w-full bg-white text-blue-600 dark:text-blue-400 dark:bg-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors"
//                       >
//                         <ExternalLink className="w-5 h-5 mr-2" />
//                         {lang === 'marathi' ? 'नकाशावर पहा' : 'View on Maps'}
//                       </a>

//                       <a
//                         href={`tel:${contact.phone}`}
//                         className="inline-flex items-center justify-center w-full border-2 border-white dark:border-gray-400 text-white dark:text-gray-200 px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 dark:hover:bg-gray-400 dark:hover:text-gray-900 transition-colors"
//                       >
//                         <Phone className="w-5 h-5 mr-2" />
//                         {lang === 'marathi' ? 'थेट कॉल करा' : 'Call Directly'}
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactPage;


import React, { useEffect } from 'react';
import { useLanguage } from '@/hooks/useLanguage';

const Gear = ({ size, teeth, x, y, speed, reverse, opacity = 0.15 }) => {
  const radius = size / 2;
  const innerRadius = radius * 0.6;
  const toothHeight = radius * 0.2;

  let path = '';
  for (let i = 0; i < teeth; i++) {
    const angle1 = (i * 2 * Math.PI) / teeth;
    const angle2 = ((i + 0.4) * 2 * Math.PI) / teeth;
    const angle3 = ((i + 0.6) * 2 * Math.PI) / teeth;
    const angle4 = ((i + 1) * 2 * Math.PI) / teeth;
    const outerRadius = radius + toothHeight;

    if (i === 0) path += `M ${radius * Math.cos(angle1)} ${radius * Math.sin(angle1)} `;
    path += `L ${outerRadius * Math.cos(angle1)} ${outerRadius * Math.sin(angle1)} `;
    path += `L ${outerRadius * Math.cos(angle2)} ${outerRadius * Math.sin(angle2)} `;
    path += `L ${radius * Math.cos(angle2)} ${radius * Math.sin(angle2)} `;
    path += `L ${radius * Math.cos(angle4)} ${radius * Math.sin(angle4)} `;
  }
  path += 'Z';

  return (
    <g
      transform={`translate(${x}, ${y})`}
      style={{
        animation: `${reverse ? 'rotateReverse' : 'rotate'} ${speed}s linear infinite`,
        transformOrigin: 'center',
      }}
      opacity={opacity}
    >
      <path d={path} fill="currentColor" stroke="currentColor" strokeWidth="2" opacity="0.9" />
      <circle cx="0" cy="0" r={innerRadius} fill="currentColor" opacity="0.7" />
      <circle cx="0" cy="0" r={innerRadius * 0.3} fill="currentColor" opacity="1" />
    </g>
  );
};

const ContactPage = () => {
  const { language: lang, setLanguage } = useLanguage();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  const contacts = [
    {
      title: {
        marathi: 'मोटार परिवहन, महाराष्ट्र राज्य पुणे',
        english: 'Motor Transport Department, Maharashtra State Pune',
      },
      address: {
        marathi: 'विशेष पोलीस निरीक्षक, मोटार परिवहन, महाराष्ट्र राज्य, औंध, पुणे. 411067',
        english: 'Special Inspector General of Police, Motor Transport, Maharashtra State, Aundh, Pune. 411067',
      },
      phone: '02025880718',
      email: 'ig.mt.pune@mahapolice.gov.in',
      mapLink: 'https://www.google.com/maps?q=18.562883246780896,73.81327144433503',
    },
    {
      title: {
        marathi: 'कार्यालयाचा पत्ता',
        english: 'Office Address',
      },
      address: {
        marathi: 'पोलीस दळणवळण व माहिती तंत्रज्ञान विभाग महाराष्ट्र राज्य, पुणे डॉ. होमी भाभा रोड, चव्हाणनगर पुणे – ४११००८, महाराष्ट्र, भारत',
        english: 'Police Communication and Information Technology Department, Maharashtra State Pune, Dr. Homi Bhabha Road, Vadtalnagar, Pune – 411008, Maharashtra, India',
      },
      phone: '020-25652505',
      email: 'dir.polwireless.pune@mahapolice.gov.in',
      mapLink: 'https://www.google.com/maps?q=18.5299,73.8567',
    },
  ];

  const toggleLanguage = () => {
    setLanguage(lang === 'marathi' ? 'english' : 'marathi');
  };

  return (
    <>
      <style>{`
        @keyframes rotate { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes rotateReverse { from { transform: rotate(360deg); } to { transform: rotate(0deg); } }
        @keyframes float { 0%,100%{ transform: translateY(0px);} 50%{ transform: translateY(-20px); } }
        @keyframes slideInUp { from{ transform:translateY(20px); opacity:0;} to{ transform:translateY(0); opacity:1;} }
        @keyframes fadeIn { from{opacity:0;} to{opacity:1;} }
        .animate-slide-up{ animation: slideInUp 0.8s ease-out forwards; }
        .animate-fade-in{ animation: fadeIn 1s ease-out forwards; }
      `}</style>

      <div className="relative w-screen min-h-screen overflow-x-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 dark:from-gray-950 dark:via-blue-950 dark:to-indigo-950 transition-all duration-500">

        {/* Animated Gears */}
        <svg className="fixed inset-0 w-full h-full pointer-events-none z-0">
          <g fill="url(#gearGradient)">
            <Gear size={320} teeth={24} x="50%" y="50%" speed={30} reverse={false} opacity={0.25} />
            <Gear size={220} teeth={18} x="50%" y="25%" speed={22} reverse={true} opacity={0.3} />
            <Gear size={200} teeth={16} x="70%" y="35%" speed={20} reverse={false} opacity={0.28} />
            <Gear size={190} teeth={15} x="75%" y="55%" speed={19} reverse={true} opacity={0.27} />
          </g>
        </svg>

        {/* Language Toggle button */}
        <div className="absolute top-6 right-6">
          <button
            onClick={toggleLanguage}
            className="px-4 py-2 bg-white/20 backdrop-blur-md rounded-lg hover:bg-white/30 transition font-semibold"
          >
            {lang === 'marathi' ? 'English' : 'मराठी'}
          </button>
        </div>

        {/* Page Content */}
        <div className="relative z-10 flex flex-col justify-center items-center w-full min-h-screen px-6 py-20 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-lg animate-fade-in text-white">
            {lang === 'marathi' ? 'आमच्याशी संपर्क साधा' : 'Get In Touch'}
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl max-w-2xl mb-10 animate-fade-in text-white">
            {lang === 'marathi'
              ? 'कोणत्याही सहाय्यासाठी किंवा चौकशीसाठी आमच्याशी संपर्क साधा'
              : 'Reach out for any assistance, inquiries, or support'}
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-7xl w-full">
            {contacts.map((contact, index) => (
              <div
                key={index}
                className={`animate-slide-up bg-white rounded-3xl p-6 md:p-10 shadow-lg ${
                  index === 0 ? 'lg:order-2' : 'lg:order-1'
                }`}
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-black">
                  {contact.title[lang]}
                </h2>
                <p className="mb-2 text-black text-sm md:text-base">{contact.address[lang]}</p>
                <p className="mb-2 text-black text-sm md:text-base">
                  {lang === 'marathi' ? 'फोन:' : 'Phone:'} {contact.phone}
                </p>
                <p className="mb-2 text-black text-sm md:text-base">
                  {lang === 'marathi' ? 'ईमेल:' : 'Email:'} {contact.email}
                </p>

                <div className="flex flex-col md:flex-row justify-center gap-4 mt-4">
                  <a
                    href={`tel:${contact.phone}`}
                    className="px-4 py-2 rounded-lg bg-green-500 hover:bg-green-600 text-white font-semibold text-sm md:text-base transition"
                  >
                    {lang === 'marathi' ? 'थेट कॉल करा' : 'Call'}
                  </a>
                  <a
                    href={contact.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-semibold text-sm md:text-base transition"
                  >
                    {lang === 'marathi' ? 'नकाशावर पहा' : 'View on Maps'}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
