// import { useEffect, useRef, useState } from 'react';
// import { Card, CardContent } from '@/components/ui/card';
// import { Truck, Clock, MapPin, Users, Ship, Building, Car } from 'lucide-react';
// import { useLanguage } from '@/hooks/useLanguage';

// // Import all 6 different background images
// import cardBg1 from "../assets/images/car4 - Copy.jpg";
// import cardBg2 from "../assets/images/police6.jpg";
// import cardBg3 from "../assets/images/motorlogo.jpg";
// import cardBg4 from "../assets/images/office1.jpg";
// import cardBg5 from "../assets/images/car5.jpg";
// import cardBg6 from "../assets/images/police8.jpg";

// interface ImpactStat {
//   id: number;
//   icon: React.ReactNode;
//   value: number;
//   suffix: string;
//   label: {
//     marathi: string;
//     english: string;
//   };
//   color: string;
//   bgImage: string; // Add background image property
// }

// const impactStats: ImpactStat[] = [
//   {
//     id: 1,
//     icon: <Car className="w-8 h-8" />,
//     value: 24000,
//     suffix: '+',
//     label: { marathi: 'वाहने', english: 'Vehicles' },
//     color: 'text-primary',
//     bgImage: cardBg1,
//   },
//   {
//     id: 2,
//     icon: <Ship className="w-8 h-8" />,
//     value: 55,
//     suffix: '+',
//     label: { marathi: 'नौका', english: 'Boats' },
//     color: 'text-accent',
//     bgImage: cardBg2,
//   },
//   {
//     id: 3,
//     icon: <Clock className="w-8 h-8" />,
//     value: 77,
//     suffix: '+',
//     label: { marathi: 'वर्षांची सेवा', english: 'Years of Service' },
//     color: 'text-primary',
//     bgImage: cardBg3,
//   },
//   {
//     id: 4,
//     icon: <MapPin className="w-8 h-8" />,
//     value: 4,
//     suffix: '',
//     label: { marathi: 'प्रादेशिक कार्यालये', english: 'Regional Offices' },
//     color: 'text-accent',
//     bgImage: cardBg4,
//   },
//   {
//     id: 5,
//     icon: <Building className="w-8 h-8" />,
//     value: 91,
//     suffix: '',
//     label: { marathi: 'मोटार परिवहन विभाग', english: 'Motor Transport Departments' },
//     color: 'text-accent',
//     bgImage: cardBg5,
//   },
//   {
//     id: 6,
//     icon: <Users className="w-8 h-8" />,
//     value: 3000,
//     suffix: '+',
//     label: { marathi: 'कर्मचारी', english: 'Personnel' },
//     color: 'text-primary',
//     bgImage: cardBg6,
//   },
// ];

// const OurImpact = () => {
//   const { language } = useLanguage();
//   const [isVisible, setIsVisible] = useState(false);
//   const [animatedValues, setAnimatedValues] = useState<{ [key: number]: number }>({});
//   const sectionRef = useRef<HTMLElement>(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting && !isVisible) {
//           setIsVisible(true);

//           // Animate counters
//           impactStats.forEach((stat) => {
//             let current = 0;
//             const increment = stat.value / 50; // 50 steps
//             const timer = setInterval(() => {
//               current += increment;
//               if (current >= stat.value) {
//                 current = stat.value;
//                 clearInterval(timer);
//               }
//               setAnimatedValues(prev => ({
//                 ...prev,
//                 [stat.id]: Math.floor(current)
//               }));
//             }, 30);
//           });
//         }
//       },
//       { threshold: 0.3 }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => observer.disconnect();
//   }, [isVisible]);

//   return (
//     <section ref={sectionRef} className="relative py-16 bg-background overflow-hidden">
//       {/* Background Watermark Image */}
//       <div className="absolute inset-0">
//         <img 
//           src="/images/watermark.png"
//           alt="watermark background"
//           className="w-full h-full object-cover opacity-10"
//         />
//       </div>

//       {/* Overlay */}
//       <div className="absolute inset-0 bg-background/70"></div>

//       <div className="relative container mx-auto px-4">
//         <div className="text-center mb-12">
//           <h2 className={`police-heading text-3xl md:text-4xl mb-4 ${
//             language === 'marathi' ? 'marathi-text' : 'english-text'
//           }`}>
//             {language === 'marathi' ? 'आमचा प्रभाव' : 'Our Impact'}
//           </h2>
//           <p className={`police-body text-lg max-w-2xl mx-auto text-black ${
//             language === 'marathi' ? 'marathi-text' : 'english-text'
//           }`}>
//             {language === 'marathi' 
//               ? 'महाराष्ट्र पोलीस मोटार परिवहन विभाग '
//               : 'Achievements and service milestones of Maharashtra Police Motor Transport Department'
//             }
//           </p>
//         </div>

//         {/* Single row for all cards */}
//         <div className="grid grid-cols-1 md:grid-cols-6 gap-6 text-center">
//           {impactStats.map((stat) => (
//             <Card 
//               key={stat.id} 
//               className={`police-card border-4 border-blue-700 hover-lift hover-glow text-center group transition-all duration-500 relative overflow-hidden ${
//                 isVisible ? 'fade-in-up animate' : 'fade-in-up'
//               }`}
//               style={{ animationDelay: `${stat.id * 150}ms` }}
//             >
//               {/* Card Background Image */}
//               <div 
//                 className="absolute inset-0 z-0 bg-cover bg-center opacity-30"
//                 style={{ backgroundImage: `url(${stat.bgImage})` }}
//               ></div>
              
//               <CardContent className="p-8 relative z-10">
//                 <div 
//                   className="mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300" 
//                   style={{ color: '#1A4CA1' }}
//                 >
//                   {stat.icon}
//                 </div>
                
//                 <div className="mb-2 text-center">
//                   <span 
//                     className="police-heading text-4xl md:text-5xl font-bold transition-all duration-300"
//                     style={{ color: '#1A4CA1' }}
//                   >
//                     {animatedValues[stat.id] || 0}
//                   </span>
//                   <span 
//                     className="police-heading text-4xl md:text-5xl font-bold"
//                     style={{ color: '#1A4CA1' }}
//                   >
//                     {stat.suffix}
//                   </span>
//                 </div>
                
//                 <p className={`police-subheading ${
//                   language === 'marathi' ? 'text-2xl font-bold' : 'text-lg'
//                 } ${language === 'marathi' ? 'marathi-text' : 'english-text'} text-center`}>
//                   {stat.label[language]}
//                 </p>
                
//                 <div 
//                   className="w-12 h-1 mx-auto mt-4 rounded-full group-hover:w-16 transition-all duration-300"
//                   style={{ backgroundColor: '#1A4CA1' }}
//                 ></div>
//               </CardContent>
//             </Card>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// };

// export default OurImpact;


import { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Truck, Clock, MapPin, Users, Ship, Building, Car } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

// Import all 6 different background images
import cardBg1 from "../assets/images/car4 - Copy.jpg";
import cardBg2 from "../assets/images/police6.jpg";
import cardBg3 from "../assets/images/motorlogo.jpg";
import cardBg4 from "../assets/images/office1.jpg";
import cardBg5 from "../assets/images/car5.jpg";
import cardBg6 from "../assets/images/police8.jpg";

interface ImpactStat {
  id: number;
  icon: React.ReactNode;
  value: number;
  suffix: string;
  label: {
    marathi: string;
    english: string;
  };
  color: string;
  bgImage: string;
}

const impactStats: ImpactStat[] = [



  {
    id: 3,
    icon: <Clock className="w-8 h-8" />,
    value: 1948,
    suffix: '',
    label: { marathi: 'पासून सेवेत कार्यरत ', english: 'In service since ' },
    color: 'text-primary',
    bgImage: cardBg3,
  },
   {
    id: 4,
    icon: <MapPin className="w-8 h-8" />,
    value: 4,
    suffix: '',
    label: { marathi: 'प्रादेशिक कार्यालये', english: 'Regional Offices' },
    color: 'text-accent',
    bgImage: cardBg4,
  },
   {
    id: 5,
    icon: <Building className="w-8 h-8" />,
    value: 89,
    suffix: '',
    label: { marathi: 'मोटार परिवहन विभाग', english: 'Motor Transport Departments' },
    color: 'text-accent',
    bgImage: cardBg5,
  },
   {
    id: 6,
    icon: <Users className="w-8 h-8" />,
    value: 2650,
    suffix: '+',
    label: { marathi: 'कर्मचारी', english: 'Personnel' },
    color: 'text-primary',
    bgImage: cardBg6,
  },
  {


    id: 1,
    icon: <Car className="w-8 h-8" />,
    value: 19159,
    suffix: '+',
    label: { marathi: 'वाहने', english: 'Vehicles' },
    color: 'text-primary',
    bgImage: cardBg1,
  },
  {
    id: 2,
    icon: <Ship className="w-8 h-8" />,
    value: 55,
    suffix: '+',
    label: { marathi: 'नौका', english: 'Boats' },
    color: 'text-accent',
    bgImage: cardBg2,
  },
  
 
 
 
];

const OurImpact = () => {
  const { language } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [animatedValues, setAnimatedValues] = useState<{ [key: number]: number }>({});
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);

          // Animate counters
          impactStats.forEach((stat) => {
            let current = 0;
            const increment = stat.value / 50;
            const timer = setInterval(() => {
              current += increment;
              if (current >= stat.value) {
                current = stat.value;
                clearInterval(timer);
              }
              setAnimatedValues(prev => ({
                ...prev,
                [stat.id]: Math.floor(current)
              }));
            }, 30);
          });
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="relative py-16 bg-background overflow-hidden">
      {/* Background Watermark */}
      <div className="absolute inset-0">
        <img 
          src="/images/watermark.png"
          alt="watermark background"
          className="w-full h-full object-cover opacity-10"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-background/70"></div>

      <div className="relative container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className={`police-heading text-3xl md:text-4xl mb-4 ${
            language === 'marathi' ? 'marathi-text' : 'english-text'
          }`}>
            {language === 'marathi' ? 'आमचा प्रभाव' : 'Our Impact'}
          </h2>
          <p className={`police-body text-lg max-w-2xl mx-auto text-black ${
            language === 'marathi' ? 'marathi-text' : 'english-text'
          }`}>
            {language === 'marathi' 
              ? 'महाराष्ट्र पोलीस मोटार परिवहन विभाग '
              : 'Achievements and service milestones of Maharashtra Police Motor Transport Department'
            }
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-6 text-center">
          {impactStats.map((stat) => (
            <Card 
              key={stat.id} 
              className={`police-card border-4 border-blue-700 hover-lift hover-glow text-center group transition-all duration-500 relative overflow-hidden ${
                isVisible ? 'fade-in-up animate' : 'fade-in-up'
              }`}
              style={{ animationDelay: `${stat.id * 150}ms` }}
            >
              <div 
                className="absolute inset-0 z-0 bg-cover bg-center opacity-30"
                style={{ backgroundImage: `url(${stat.bgImage})` }}
              ></div>
              
              <CardContent className="p-8 relative z-10">
                <div 
                  className="mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300" 
                  style={{ color: '#1A4CA1' }}
                >
                  {stat.icon}
                </div>
                
                <div className="mb-2 text-center">
                  <span 
                    className="police-heading text-4xl md:text-5xl font-bold transition-all duration-300"
                    style={{ color: '#1A4CA1' }}
                  >
                    {animatedValues[stat.id] || 0}
                  </span>
                  <span 
                    className="police-heading text-4xl md:text-5xl font-bold"
                    style={{ color: '#1A4CA1' }}
                  >
                    {stat.suffix}
                  </span>
                </div>
                
                <p className={`police-subheading ${
                  language === 'marathi' ? 'text-2xl font-bold' : 'text-lg'
                } ${language === 'marathi' ? 'marathi-text' : 'english-text'} text-center`}>
                  {stat.label[language]}
                </p>
                
                <div 
                  className="w-12 h-1 mx-auto mt-4 rounded-full group-hover:w-16 transition-all duration-300"
                  style={{ backgroundColor: '#1A4CA1' }}
                ></div>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};

export default OurImpact;
