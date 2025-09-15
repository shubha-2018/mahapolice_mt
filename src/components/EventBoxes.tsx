import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, ChevronRight } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { translations } from '@/data/translations';
import HeroSlider from './HeroSlider';

interface Event {
  id: number;
  date: string;
  title: {
    marathi: string;
    english: string;
  };
  description: {
    marathi: string;
    english: string;
  };
  category: string;
}

const events: Event[] = [
  {
    id: 1,
    date: '2025-01-15',
    title: {
      marathi: 'नवीन वाहन संच जोडले',
      english: 'New Vehicle Fleet Added'
    },
    description: {
      marathi: '१०० नवीन आधुनिक वाहने महाराष्ट्र पोलीस विभागात जोडली गेली',
      english: '100 new modern vehicles added to Maharashtra Police fleet'
    },
    category: 'Fleet Update'
  },
  {
    id: 2,
    date: '2025-01-12',
    title: {
      marathi: 'ड्रायव्हर प्रशिक्षण कार्यक्रम',
      english: 'Driver Training Program'
    },
    description: {
      marathi: 'सुरक्षित वाहन चालवण्यासाठी विशेष प्रशिक्षण कार्यक्रम सुरू',
      english: 'Special training program launched for safe driving practices'
    },
    category: 'Training'
  },
  {
    id: 3,
    date: '2025-01-10',
    title: {
      marathi: 'इको-फ्रेंडली वाहने',
      english: 'Eco-Friendly Vehicles'
    },
    description: {
      marathi: 'पर्यावरणास अनुकूल इलेक्ट्रिक वाहनांची चाचणी यशस्वी',
      english: 'Successful testing of eco-friendly electric vehicles completed'
    },
    category: 'Environment'
  },
  {
    id: 4,
    date: '2025-01-08',
    title: {
      marathi: 'तंत्रज्ञान सुधारणा',
      english: 'Technology Upgrade'
    },
    description: {
      marathi: 'आधुनिक GPS आणि ट्रॅकिंग सिस्टमची अंमलबजावणी',
      english: 'Implementation of advanced GPS and tracking systems'
    },
    category: 'Technology'
  },
  {
    id: 5,
    date: '2025-01-05',
    title: {
      marathi: 'कार्यशाळा विस्तार',
      english: 'Workshop Expansion'
    },
    description: {
      marathi: 'नवीन आधुनिक कार्यशाळांचे उद्घाटन झाले',
      english: 'New modern workshops have been inaugurated'
    },
    category: 'Infrastructure'
  },
  {
    id: 6,
    date: '2025-01-03',
    title: {
      marathi: 'सुरक्षा प्रमाणपत्र',
      english: 'Safety Certification'
    },
    description: {
      marathi: 'सर्व वाहनांना राष्ट्रीय सुरक्षा प्रमाणपत्र मिळाले',
      english: 'All vehicles received national safety certification'
    },
    category: 'Safety'
  }
];

const EventBoxes = () => {
  const { language } = useLanguage();

  const getEventDate = (dateString: string) => {
    return language === 'marathi' 
      ? new Date(dateString).toLocaleDateString('mr-IN')
      : new Date(dateString).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  return (
    <>
      {/* Desktop Layout: Event cards on sides of slider */}
      <div className="hidden lg:block relative">
        <div className="flex">
          {/* Left Event Cards */}
          <div className="w-80 bg-background/95 backdrop-blur-sm border-r border-border p-6 space-y-4 h-[70vh] overflow-y-auto">
            <h3 className={`police-heading text-lg mb-4 text-center ${language === 'marathi' ? 'marathi-text' : 'english-text'}`}>
              {language === 'marathi' ? 'अलीकडील बातम्या' : 'Recent Updates'}
            </h3>
            {events.slice(0, 3).map((event, index) => (
              <Card key={event.id} className="police-card hover-lift transition-all duration-300 fade-in-up animate">
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar size={14} className="text-primary" />
                    <span className="text-xs text-muted-foreground">{getEventDate(event.date)}</span>
                  </div>
                  <h4 className={`police-heading text-sm mb-2 ${
                    language === 'marathi' ? 'marathi-text' : 'english-text'
                  }`}>
                    {event.title[language]}
                  </h4>
                  <p className={`text-xs text-muted-foreground mb-3 ${
                    language === 'marathi' ? 'marathi-text' : 'english-text'
                  }`}>
                    {event.description[language]}
                  </p>
                  <Button variant="ghost" size="sm" className="text-xs p-0 h-auto font-medium hover:text-accent button-visible button-hover-effect">
                    {translations.common.readMore[language]} <ChevronRight size={12} className="ml-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Hero Slider */}
          <div className="flex-1">
            <HeroSlider />
          </div>

          {/* Right Event Cards */}
          <div className="w-80 bg-background/95 backdrop-blur-sm border-l border-border p-6 space-y-4 h-[70vh] overflow-y-auto">
            <h3 className={`police-heading text-lg mb-4 text-center ${language === 'marathi' ? 'marathi-text' : 'english-text'}`}>
              {language === 'marathi' ? 'नवीन घडामोडी' : 'Latest News'}
            </h3>
            {events.slice(3, 6).map((event, index) => (
              <Card key={event.id} className="police-card hover-lift transition-all duration-300 fade-in-up animate">
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar size={14} className="text-primary" />
                    <span className="text-xs text-muted-foreground">{getEventDate(event.date)}</span>
                  </div>
                  <h4 className={`police-heading text-sm mb-2 ${
                    language === 'marathi' ? 'marathi-text' : 'english-text'
                  }`}>
                    {event.title[language]}
                  </h4>
                  <p className={`text-xs text-muted-foreground mb-3 ${
                    language === 'marathi' ? 'marathi-text' : 'english-text'
                  }`}>
                    {event.description[language]}
                  </p>
                  <Button variant="ghost" size="sm" className="text-xs p-0 h-auto font-medium hover:text-accent button-visible button-hover-effect">
                    {translations.common.readMore[language]} <ChevronRight size={12} className="ml-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile/Tablet Layout: Slider first, then events below */}
      <div className="lg:hidden">
        <HeroSlider />
        <div className="py-8 bg-police-section-bg">
          <div className="container mx-auto px-4">
            <h2 className={`police-heading text-2xl md:text-3xl mb-4 ${language === 'marathi' ? 'marathi-text' : 'english-text'}`}>
              {language === 'marathi' ? 'ताज्या घडामोडी' : 'Latest Updates'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {events.map((event, index) => (
                <Card 
                  key={event.id} 
                  className="police-card hover-lift transition-all duration-300 fade-in-up animate"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Calendar size={16} className="text-primary transition-all duration-300" />
                      <span className="text-sm font-medium text-muted-foreground">
                        {getEventDate(event.date)}
                      </span>
                    </div>
                    <h3 className={`police-heading text-lg mb-3 ${
                      language === 'marathi' ? 'marathi-text' : 'english-text'
                    }`}>
                      {event.title[language]}
                    </h3>
                    <p className={`police-body mb-4 ${
                      language === 'marathi' ? 'marathi-text' : 'english-text'
                    }`}>
                      {event.description[language]}
                    </p>
                    <Button variant="ghost" className="p-0 h-auto font-medium hover:text-accent transition-all duration-300 button-visible button-hover-effect">
                      {translations.common.readMore[language]}
                      <ChevronRight size={16} className="ml-2 transition-all duration-300 group-hover:translate-x-1" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventBoxes;