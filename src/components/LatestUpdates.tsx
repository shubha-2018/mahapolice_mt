import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, ArrowRight, Clock } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { translations } from '@/data/translations';

interface Update {
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
  category: {
    marathi: string;
    english: string;
  };
  priority: 'high' | 'medium' | 'low';
}

const updates: Update[] = [
  {
    id: 1,
    date: '2025-01-14',
    title: {
      marathi: 'नवीन GPS ट्रॅकिंग सिस्टम',
      english: 'New GPS Tracking System'
    },
    description: {
      marathi: 'सर्व पोलीस वाहनांमध्ये अत्याधुनिक GPS ट्रॅकिंग सिस्टम स्थापित केले गेले आहे. यामुळे वाहनांची रिअल-टाइम स्थिती आणि मार्ग ट्रॅकिंग शक्य होणार आहे.',
      english: 'Advanced GPS tracking system has been installed in all police vehicles. This will enable real-time location and route tracking of vehicles.'
    },
    category: {
      marathi: 'तंत्रज्ञान',
      english: 'Technology'
    },
    priority: 'high'
  },
  {
    id: 2,
    date: '2025-01-12',
    title: {
      marathi: 'इको-फ्रेंडली वाहन अभियान',
      english: 'Eco-Friendly Vehicle Campaign'
    },
    description: {
      marathi: 'पर्यावरण संरक्षणाच्या दृष्टीने ५०० नवीन इलेक्ट्रिक आणि हायब्रिड वाहनांची खरेदी करण्यात आली आहे. हा अभियान २०२५ च्या अखेरीस पूर्ण होणार आहे.',
      english: '500 new electric and hybrid vehicles have been purchased for environmental protection. This campaign will be completed by the end of 2025.'
    },
    category: {
      marathi: 'पर्यावरण',
      english: 'Environment'
    },
    priority: 'high'
  },
  {
    id: 3,
    date: '2025-01-10',
    title: {
      marathi: 'ड्रायव्हर सुरक्षा प्रशिक्षण',
      english: 'Driver Safety Training'
    },
    description: {
      marathi: 'सर्व पोलीस ड्रायव्हर्ससाठी सुरक्षित वाहन चालवण्याचे प्रशिक्षण कार्यक्रम सुरू केले गेले आहेत. या कार्यक्रमात आपत्कालीन परिस्थितीत वाहन चालवण्याचे धडे समाविष्ट आहेत.',
      english: 'Safety driving training programs have been started for all police drivers. These programs include lessons on driving in emergency situations.'
    },
    category: {
      marathi: 'प्रशिक्षण',
      english: 'Training'
    },
    priority: 'medium'
  }
];

const LatestUpdates = () => {
  const { language } = useLanguage();

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return language === 'marathi' 
      ? date.toLocaleDateString('mr-IN')
      : date.toLocaleDateString('en-IN', { 
          day: 'numeric', 
          month: 'long', 
          year: 'numeric' 
        });
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-700 border-red-200';
      case 'medium': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'low': return 'bg-green-100 text-green-700 border-green-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  return (
    <section className="py-10 police-section-bg ">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className={`police-heading text-3xl md:text-4xl mb-4 ${
            language === 'marathi' ? 'marathi-text' : 'english-text'
          }`}>
            {translations.home.latestUpdatesTitle[language]}
          </h2>
          <p className={`police-body text-lg max-w-2xl mx-auto ${
            language === 'marathi' ? 'marathi-text' : 'english-text'
          }`}>
            {language === 'marathi' 
              ? 'मोटार  ट्रान्सपोर्ट विभागातील अलीकडील घडामोडी आणि अपडेट्स'
              : 'Recent developments and updates from Motor Transport Department'
            }
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {updates.map((update, index) => (
            <Card 
              key={update.id}
              className={`police-card hover-lift group transition-all duration-500 fade-in-up ${
                index < 3 ? 'animate' : ''
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardContent className="p-6">
                {/* Header with date and priority */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2 text-primary">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm font-medium">
                      {formatDate(update.date)}
                    </span>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded-full border ${getPriorityColor(update.priority)}`}>
                    {update.category[language]}
                  </span>
                </div>

                {/* Title */}
                <h3 className={`police-subheading text-xl mb-3 group-hover:text-accent transition-colors ${
                  language === 'marathi' ? 'marathi-text' : 'english-text'
                }`}>
                  {update.title[language]}
                </h3>

                {/* Description */}
                <p className={`police-body mb-6 line-clamp-4 ${
                  language === 'marathi' ? 'marathi-text' : 'english-text'
                }`}>
                  {update.description[language]}
                </p>

                {/* Read more button */}
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="police-accent-text hover:bg-accent/10 p-0 group-hover:translate-x-1 transition-transform duration-300 button-visible"
                >
                  {translations.common.readMore[language]}
                  <ArrowRight className="w-4 h-4 ml-2 transition-all duration-300" />
                </Button>

                {/* Decorative element */}
                <div className="mt-4 w-full h-1 bg-gradient-to-r from-primary to-accent rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        {/* <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="police-button-black group button-visible button-hover-effect">
            {translations.common.viewAll[language]}
            <Clock className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform duration-300" />
          </Button>
        </div> */}
      </div>
    </section>
  );
};

export default LatestUpdates;