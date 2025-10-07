import { Card, CardContent } from '@/components/ui/card';
import { Quote } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { useState } from 'react';
import { Description } from '@radix-ui/react-toast';
import AshokMoraleImg from '../assets/images/morale_sir12.jpg'; 
// 👆 adjust the path according to your project structure


const IGPMessage = () => {
  const { language } = useLanguage();
  const [imgError, setImgError] = useState(false);

  const messageContent = {
    marathi: { 
      title: 'विशेष पोलिस महानिरीक्षक यांचा संदेश',
      message:
        'महाराष्ट्र राज्य मोटार परिवहन विभागात पोलीस वाहनांची देखभाल व वाहन ताफा व्यवस्थापन, तांत्रिक व चालक मनुष्यबळ यांच्या योग्य समन्वयातून कायदा व सुव्यवस्था राखणेकरिता व नागरिकांच्या तत्पर सेवेकरिता वाहने पुरविण्याचे कामकाज या विभागामार्फत करण्यात येते.मुख राज्यातील सर्व पोलीस घटकांकरिता मोटार परिवहन विभागात पोलीस उप-अधीक्षक/ सहा पोलीस आयुक्त तसेच पोलीस निरीक्षक दर्जाचे मोटार परिवहन अधिकारी आहेत. वाहनांचे व्यवस्थापन व देखभाल दुरुस्तीचे कामकाज तांत्रिक मनुष्यबळाच्या आधारे केले जाते.राज्याच्या सागरी जिल्ह्यांच्या सागरी सुरक्षेच्या दृष्टीने गस्तीकरिता हाय स्पीड पोलीस नौका उपलब्ध आहेत. सदर नौकांची देखभाल व दुरुस्ती पोलीस नौका कर्मशाळा, ठाणे यांचे मार्फतीने केली जाते.कायदा व सुव्यवस्था राखणे करिता मोटार परिवहन विभागाच्या ताफ्यामधुन अत्याधुनिक वाहने पुरविणे व राज्याच्या ७२० कि.मी लांबीच्या सागरी किनारा गस्तीकरिता नौका सुस्थित ठेवणे, मनुष्यबळ पुरविणे याकरिता मोटार परिवहन विभाग निरंतर प्रयत्नशील राहिल.तत्पर सेवेत कार्यरत असलेल्या मोटार परिवहन विभागाचे नेतृत्व करण्याची ही गौरवाची बाब असुन याचा मला सार्थ अभिमान आहे.',
     signature: (
  <>
    श्री. अशोक मोराळे.
    <span className="text-sm"> भा पो से</span>
  </>
),

      designation: 'विशेष  पोलीस महानिरीक्षक,मोटार  परिवहन विभाग,महाराष्ट्र राज्य ',
    },
    english: {
      title: "Special IGP's Message",
      message:
        'The Maharashtra State Motor Transport Department is responsible for providing vehicles to maintain law and order and deliver prompt service to citizens through proper maintenance of police vehicles, fleet management, and coordination of technical and driving personnel. The department is headed by Police Deputy Superintendents / Assistant Police Commissioners as well as Motor Transport Officers of Inspector rank for all police units across the state. Vehicle management and maintenance work are carried out based on technical manpower.For maritime security in the coastal districts of the state, high-speed police boats are available for patrolling. The maintenance and repair of these boats are carried out through police boat workshops and stations.To maintain law and order, the Motor Transport Department continually strives to provide modern vehicles, keep boats in good condition for patrolling the state’s 720 km coastline, and supply manpower. Leading a department that is always ready to serve is a matter of pride and I am deeply honored to do so',
      signature: 'Shri. Ashok Morale (IPS)',
      designation: 'Special Inspector General of Police, Motor Transport Department, Maharashtra State',
    },
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="police-card hover-glow bg-gradient-to-br from-card to-accent/5">
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col lg:flex-row items-start gap-8">
                {/* Portrait Section */}
                <div className="flex-shrink-0 mx-auto lg:mx-0">
                  <div className="relative w-48 h-56 rounded-xl overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center shadow-xl">
                    {!imgError ? (
                     <img
  src={AshokMoraleImg}   // 👈 use imported image instead of URL
  alt="Special IGP Shri. Ashok Morale (IPS)"
  className="w-40 h-48 rounded-lg object-cover"
  onError={() => setImgError(true)}
/>

                    ) : (
                      <div className="w-40 h-48 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                        <span className="text-4xl text-white">👨‍💼</span>
                      </div>
                    )}

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                      <p className="text-white text-sm text-center">
                        Official portrait of Special IGP Shri. Ashok Morale (IPS) - Motor Transport Department
                      </p>
                    </div>
                  </div>
                </div>

                {/* Message Content */}
                <div className="flex-1 text-center lg:text-left ">
                  <div className="mb-6">
                    <Quote className="w-10 h-10 text-accent mx-auto lg:mx-0 mb-4" />
                    <h2
                      className={`police-heading text-2xl md:text-3xl mb-2 ${
                        language === 'marathi' ? 'marathi-text' : 'english-text'
                      }`}
                    >
                      {messageContent[language].title}
                    </h2>
                  </div>

                  <blockquote
                    className={`police-body text-lg leading-relaxed mb-8  ${
                      language === 'marathi' ? 'marathi-text' : 'english-text'
                    }`}
                  >
                    "{messageContent[language].message}"
                  </blockquote>

                  {/* Signature Section */}
                  <div className="border-t border-border pt-6">
                    <div className={`${language === 'marathi' ? 'marathi-text' : 'english-text'}`}>
                      <p className="police-heading text-xl mb-1">
                        {messageContent[language].signature}
                      </p>
                      <p className="police-accent-text font-medium">
                        {messageContent[language].designation}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default IGPMessage;
