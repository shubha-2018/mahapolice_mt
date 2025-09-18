import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Clock, TrendingUp, ChevronRight } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { translations } from '@/data/translations';

interface NewsItem {
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
}

const newsItems: NewsItem[] = [
  {
    id: 1,
    date: '2025-01-15',
    title: {
      marathi: 'ई-वाहन अभियान',
      english: 'E-Vehicle Campaign'
    },
    description: {
      marathi: 'पर्यावरण संरक्षणासाठी इलेक्ट्रिक वाहनांचा वापर वाढवण्याचा नवा अभियान',
      english: 'New campaign to increase electric vehicle usage for environmental protection'
    }
  },
  {
    id: 2,
    date: '2025-01-10',
    title: {
      marathi: 'AI तंत्रज्ञान',
      english: 'AI Technology'
    },
    description: {
      marathi: 'वाहन ट्रॅकिंग आणि मेंटेनन्ससाठी कृत्रिम बुद्धिमत्तेचा वापर',
      english: 'Implementation of artificial intelligence for vehicle tracking and maintenance'
    }
  },
  {
    id: 3,
    date: '2025-01-05',
    title: {
      marathi: 'सुरक्षा प्रमाणपत्र',
      english: 'Safety Certification'
    },
    description: {
      marathi: 'सर्व ड्रायव्हर्ससाठी नवीन सुरक्षा प्रमाणपत्र कार्यक्रम सुरू',
      english: 'New safety certification program launched for all drivers'
    }
  }
];

const AboutSection = () => {
  const { language } = useLanguage();

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return language === 'marathi' 
      ? date.toLocaleDateString('mr-IN')
      : date.toLocaleDateString('en-IN', { 
          day: 'numeric', 
          month: 'short', 
          year: 'numeric' 
        });
  };

  const aboutContent = {
    marathi: {
      title: 'मोटर ट्रान्सपोर्ट बद्दल',
      description: 'महाराष्ट्र पोलीस मोटर ट्रान्सपोर्ट विभाग हा १९४७ पासून राज्यातील पोलीस बलाच्या वाहतूक गरजा पूर्ण करत आहे. आमच्याकडे आधुनिक वाहन संच, कुशल ड्रायव्हर्स आणि तांत्रिक कर्मचारी आहेत. आम्ही पर्यावरण संरक्षण, तंत्रज्ञान वापर आणि सुरक्षितता यांना प्राधान्य देतो.',
      readMore: 'अधिक वाचा'
    },
    english: {
      title: 'About Motor Transport',
      description: 'The Maharashtra Police Motor Transport Department has been fulfilling the transportation needs of the state police force since 1947. We have a modern fleet, skilled drivers, and technical staff. We prioritize environmental protection, technology adoption, and safety.',
      readMore: 'Read More'
    }
  };

  const whatsNewTitle = {
    marathi: 'नवीन घडामोडी',
    english: "What's New"
  };

  return (
    <section className="py-16 police-section-bg">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* About Motor Transport */}
          <div className="space-y-6">
            <Card className="police-card hover-lift">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className={`police-heading text-2xl ${
                    language === 'marathi' ? 'marathi-text' : 'english-text'
                  }`}>
                    {aboutContent[language].title}
                  </h2>
                </div>

                <p className={`police-body text-lg leading-relaxed mb-6 ${
                  language === 'marathi' ? 'marathi-text' : 'english-text'
                }`}>
                  {aboutContent[language].description}
                </p>

                <Button variant="outline" className="police-button-black group button-visible button-hover-effect">
                  {aboutContent[language].readMore}
                  <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* What's New */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-accent" />
              </div>
              <h2 className={`police-heading text-2xl ${
                language === 'marathi' ? 'marathi-text' : 'english-text'
              }`}>
                {whatsNewTitle[language]}
              </h2>
            </div>

            <div className="space-y-4">
              {newsItems.map((item, index) => (
                <Card 
                  key={item.id} 
                  className="police-card hover-lift group cursor-pointer"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-2 h-16 bg-accent rounded-full"></div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-sm text-accent font-medium">
                            {formatDate(item.date)}
                          </span>
                        </div>
                        
                        <h3 className={`police-subheading text-lg mb-2 group-hover:text-accent transition-colors ${
                          language === 'marathi' ? 'marathi-text' : 'english-text'
                        }`}>
                          {item.title[language]}
                        </h3>
                        
                        <p className={`police-body text-sm ${
                          language === 'marathi' ? 'marathi-text' : 'english-text'
                        }`}>
                          {item.description[language]}
                        </p>
                      </div>
                      
                      <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center pt-4">
              <Button variant="ghost" className="police-accent-text hover:bg-accent/10 button-visible button-hover-effect">
                {translations.common.viewAll[language]}
                <ChevronRight className="w-4 h-4 ml-1 transition-all duration-300" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;