import { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Truck, Clock, MapPin, Users } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

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
}

const impactStats: ImpactStat[] = [
  {
    id: 1,
    icon: <Truck className="w-8 h-8" />,
    value: 24000,
    suffix: '+',
    label: {
      marathi: 'वाहने',
      english: 'Vehicles'
    },
    color: 'text-primary'
  },
  {
    id: 2,
    icon: <Clock className="w-8 h-8" />,
    value: 77,
    suffix: '+',
    label: {
      marathi: 'वर्षांची सेवा',
      english: 'Years of Service'
    },
    color: 'text-accent'
  },
  {
    id: 3,
    icon: <MapPin className="w-8 h-8" />,
    value: 4,
    suffix: '',
    label: {
      marathi: 'प्रादेशिक कार्यालये',
      english: 'Regional Offices'
    },
    color: 'text-primary'
  },
  {
    id: 4,
    icon: <Users className="w-8 h-8" />,
    value: 5000,
    suffix: '+',
    label: {
      marathi: 'कर्मचारी',
      english: 'Personnel'
    },
    color: 'text-accent'
  }
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
            const increment = stat.value / 50; // 50 steps
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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className={`police-heading text-3xl md:text-4xl mb-4 ${
            language === 'marathi' ? 'marathi-text' : 'english-text'
          }`}>
            {language === 'marathi' ? 'आमचा प्रभाव' : 'Our Impact'}
          </h2>
          <p className={`police-body text-lg max-w-2xl mx-auto ${
            language === 'marathi' ? 'marathi-text' : 'english-text'
          }`}>
            {language === 'marathi' 
              ? 'महाराष्ट्र पोलीस मोटार  ट्रान्सपोर्ट विभागाची उपलब्धी आणि सेवा'
              : 'Achievements and service milestones of Maharashtra Police Motor Transport Department'
            }
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {impactStats.map((stat) => (
            <Card 
              key={stat.id} 
              className={`police-card hover-lift hover-glow text-center group transition-all duration-500 ${
                isVisible ? 'fade-in-up animate' : 'fade-in-up'
              }`}
              style={{ animationDelay: `${stat.id * 150}ms` }}
            >
              <CardContent className="p-8">
                <div className={`${stat.color} mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300`}>
                  {stat.icon}
                </div>
                
                <div className="mb-2">
                  <span className={`police-heading text-4xl md:text-5xl font-bold ${stat.color} transition-all duration-300`}>
                    {animatedValues[stat.id] || 0}
                  </span>
                  <span className={`police-heading text-4xl md:text-5xl font-bold ${stat.color}`}>
                    {stat.suffix}
                  </span>
                </div>
                
                <p className={`police-subheading text-lg ${
                  language === 'marathi' ? 'marathi-text' : 'english-text'
                }`}>
                  {stat.label[language]}
                </p>
                
                <div className={`w-12 h-1 ${stat.color === 'text-primary' ? 'bg-primary' : 'bg-accent'} mx-auto mt-4 rounded-full group-hover:w-16 transition-all duration-300`}></div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurImpact;