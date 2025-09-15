import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, Briefcase, Users, Bell } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

interface QuickAccessItem {
  id: number;
  icon: React.ReactNode;
  title: {
    marathi: string;
    english: string;
  };
  description: {
    marathi: string;
    english: string;
  };
  content: {
    marathi: string[];
    english: string[];
  };
  color: string;
}

const quickAccessItems: QuickAccessItem[] = [
  {
    id: 1,
    icon: <FileText className="w-8 h-8" />,
    title: {
      marathi: 'महत्वाचे',
      english: 'Important'
    },
    description: {
      marathi: 'महत्वाच्या नोटिसा आणि आदेश',
      english: 'Important notices and orders'
    },
    content: {
      marathi: [
        'वाहन नूतनीकरण मार्गदर्शिका',
        'नवीन सुरक्षा नियम',
        'ड्रायव्हर लायसन्स नूतनीकरण',
        'वाहन तपासणी नियमावली'
      ],
      english: [
        'Vehicle renewal guidelines',
        'New safety regulations',
        'Driver license renewal',
        'Vehicle inspection rules'
      ]
    },
    color: 'primary'
  },
  {
    id: 2,
    icon: <Briefcase className="w-8 h-8" />,
    title: {
      marathi: 'निविदा',
      english: 'Tenders'
    },
    description: {
      marathi: 'चालू आणि आगामी निविदा',
      english: 'Current and upcoming tenders'
    },
    content: {
      marathi: [
        'वाहन खरेदी निविदा',
        'तेल आणि इंधन पुरवठा',
        'मेंटेनन्स सेवा',
        'तांत्रिक उपकरणे'
      ],
      english: [
        'Vehicle procurement tender',
        'Oil and fuel supply',
        'Maintenance services',
        'Technical equipment'
      ]
    },
    color: 'accent'
  },
  {
    id: 3,
    icon: <Users className="w-8 h-8" />,
    title: {
      marathi: 'भरती',
      english: 'Recruitment'
    },
    description: {
      marathi: 'नोकरीच्या संधी आणि भरती',
      english: 'Job opportunities and recruitment'
    },
    content: {
      marathi: [
        'ड्रायव्हर भरती',
        'तांत्रिक सहाय्यक',
        'मेकॅनिक पदे',
        'प्रशासकीय कर्मचारी'
      ],
      english: [
        'Driver recruitment',
        'Technical assistant',
        'Mechanic positions',
        'Administrative staff'
      ]
    },
    color: 'primary'
  },
  {
    id: 4,
    icon: <Bell className="w-8 h-8" />,
    title: {
      marathi: 'सूचना',
      english: 'Notifications'
    },
    description: {
      marathi: 'अलीकडील सूचना आणि अपडेट',
      english: 'Recent notifications and updates'
    },
    content: {
      marathi: [
        'वेळापत्रक बदल',
        'नवीन धोरणे',
        'प्रशिक्षण कार्यक्रम',
        'सुट्टी कॅलेंडर'
      ],
      english: [
        'Schedule changes',
        'New policies',
        'Training programs',
        'Holiday calendar'
      ]
    },
    color: 'accent'
  }
];

const QuickAccess = () => {
  const { language } = useLanguage();
  const [activeItem, setActiveItem] = useState<number | null>(null);

  const handleItemClick = (itemId: number) => {
    setActiveItem(activeItem === itemId ? null : itemId);
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className={`police-heading text-3xl md:text-4xl mb-4 ${
            language === 'marathi' ? 'marathi-text' : 'english-text'
          }`}>
            {language === 'marathi' ? 'द्रुत प्रवेश' : 'Quick Access'}
          </h2>
          <p className={`police-body text-lg max-w-2xl mx-auto ${
            language === 'marathi' ? 'marathi-text' : 'english-text'
          }`}>
            {language === 'marathi' 
              ? 'महत्वाच्या माहितीसाठी द्रुत प्रवेश'
              : 'Quick access to important information'
            }
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {quickAccessItems.map((item) => (
            <Card 
              key={item.id}
              className={`police-card hover-lift cursor-pointer transition-all duration-300 ${
                activeItem === item.id ? 'ring-2 ring-primary shadow-xl' : ''
              }`}
              onClick={() => handleItemClick(item.id)}
            >
              <CardContent className="p-6 text-center">
                <div className={`${
                  item.color === 'primary' ? 'text-primary' : 'text-accent'
                } mb-4 flex justify-center hover:scale-110 transition-transform duration-300`}>
                  {item.icon}
                </div>
                
                <h3 className={`police-subheading text-lg mb-2 ${
                  language === 'marathi' ? 'marathi-text' : 'english-text'
                }`}>
                  {item.title[language]}
                </h3>
                
                <p className={`police-body text-sm ${
                  language === 'marathi' ? 'marathi-text' : 'english-text'
                }`}>
                  {item.description[language]}
                </p>

                <div className={`w-8 h-1 ${
                  item.color === 'primary' ? 'bg-primary' : 'bg-accent'
                } mx-auto mt-4 rounded-full transition-all duration-300 ${
                  activeItem === item.id ? 'w-12' : ''
                }`}></div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Dynamic Info Panel */}
        {activeItem && (
          <Card className="police-card animate-fade-in-up bg-gradient-to-br from-card to-accent/5">
            <CardContent className="p-8">
              {(() => {
                const selectedItem = quickAccessItems.find(item => item.id === activeItem);
                if (!selectedItem) return null;

                return (
                  <div className="text-center">
                    <div className={`${
                      selectedItem.color === 'primary' ? 'text-primary' : 'text-accent'
                    } mb-6 flex justify-center`}>
                      {selectedItem.icon}
                    </div>
                    
                    <h3 className={`police-heading text-2xl mb-6 ${
                      language === 'marathi' ? 'marathi-text' : 'english-text'
                    }`}>
                      {selectedItem.title[language]}
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                      {selectedItem.content[language].map((contentItem, index) => (
                        <div 
                          key={index}
                          className="p-4 bg-background rounded-lg border border-border hover:shadow-md transition-shadow"
                        >
                          <p className={`police-body ${
                            language === 'marathi' ? 'marathi-text' : 'english-text'
                          }`}>
                            {contentItem}
                          </p>
                        </div>
                      ))}
                    </div>

                    <Button 
                      variant="outline" 
                      onClick={() => setActiveItem(null)}
                      className="police-button-primary button-visible button-hover-effect"
                    >
                      {language === 'marathi' ? 'बंद करा' : 'Close'}
                    </Button>
                  </div>
                );
              })()}
            </CardContent>
          </Card>
        )}
      </div>
    </section>
  );
};

export default QuickAccess;