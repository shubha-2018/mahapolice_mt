import { Card, CardContent } from '@/components/ui/card';
import { Quote } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { useState } from 'react';

const IGPMessage = () => {
  const { language } = useLanguage();
  const [imgError, setImgError] = useState(false);

  const messageContent = {
    marathi: {
      title: 'विशेष IGP चा संदेश',
      message:
        'महाराष्ट्र पोलीस मोटर ट्रान्सपोर्ट विभाग राज्यभरातील पोलीस बलांचा मेरुदंड आहे. आमचे आधुनिक वाहन संच आणि तांत्रिक सुविधा पोलीस कार्यक्षमता वाढवण्यात महत्त्वपूर्ण भूमिका बजावतात. पर्यावरण संरक्षणासाठी इलेक्ट्रिक वाहनांचा वापर वाढवून आम्ही भविष्याच्या दिशेने वाटचाल करत आहोत. आमच्या कुशल ड्रायव्हर्स आणि तांत्रिक कर्मचार्‍यांचे योगदान अतुलनीय आहे.',
      signature: 'श्री. अशोक मोराळे (IPS)',
      designation: 'विशेष IGP (मोटर ट्रान्सपोर्ट)',
    },
    english: {
      title: "Special IGP's Message",
      message:
        'The Maharashtra Police Motor Transport Department serves as the backbone of police forces across the state. Our modern fleet and technical facilities play a crucial role in enhancing police efficiency. We are moving towards the future by increasing the use of electric vehicles for environmental protection. The contribution of our skilled drivers and technical staff is invaluable.',
      signature: 'Shri. Ashok Morale (IPS)',
      designation: 'Special IGP (Motor Transport)',
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
                        src="https://rhtechnology.in/MT1/images/leaders/ashok-morale.jpg" // <-- Replace with actual image path
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
