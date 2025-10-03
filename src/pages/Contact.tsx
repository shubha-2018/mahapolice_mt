import React, { useEffect } from 'react';
import { MapPin, Phone, Mail, ExternalLink } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage'; // Custom hook for language

const ContactPage = () => {
  const { language: lang } = useLanguage(); // Get current language

  // Ensure the Contact page opens at the very top
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, []);

  const contacts = [
    {
      title: {
        marathi: 'मोटार परिवहन विभाग, महाराष्ट्र राज्य पुणे',
        english: 'Motor Transport Department, Maharashtra State Pune',
      },
      address: {
        marathi: 'विशेष पोलीस निरीक्षक, मोटार परिवहन विभाग, महाराष्ट्र राज्य, औंध, पुणे. 411067',
        english: 'Special Inspector General of Police, Motor Transport, Maharashtra State, Aundh, Pune. 411067',
      },
      phone: '02025880718',
      email: 'ig.mt.pune@mahapolice.gov.in',
      // department: { marathi: '', english: 'Police Vehicle Management' }
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-500">
      {/* Contact Section */}
      <div id="contact" className="py-20 px-6 mt-24">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 dark:text-gray-200 mb-4">
              {lang === 'marathi' ? 'आमच्याशी संपर्क साधा' : 'Contact Us'}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              {lang === 'marathi' ? 'कोणत्याही सहाय्यासाठी किंवा चौकशीसाठी संपर्क साधा' : 'Reach out for any assistance or inquiries'}
            </p>
          </div>

          {contacts.map((contact, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 rounded-3xl overflow-hidden shadow-2xl transition-colors duration-500"
            >
              <div className="flex flex-col lg:flex-row">
                {/* Contact Info Side */}
                <div className="lg:w-1/2 p-8 lg:p-12">
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                      {contact.title[lang]}
                    </h3>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-1">
                          {lang === 'marathi' ? 'कार्यालयाचा पत्ता' : 'Office Address'}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300">{contact.address[lang]}</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-1">
                          {lang === 'marathi' ? 'फोन नंबर' : 'Phone Number'}
                        </h4>
                        <a
                          href={`tel:${contact.phone}`}
                          className="text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-500 font-semibold text-lg transition-colors"
                        >
                          {contact.phone}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-1">
                          {lang === 'marathi' ? 'ईमेल पत्ता' : 'Email Address'}
                        </h4>
                        <a
                          href={`mailto:${contact.email}`}
                          className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-semibold break-all transition-colors"
                        >
                          {contact.email}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Map/Visual Side */}
                <div className="lg:w-1/2 bg-gradient-to-br from-blue-600 to-indigo-700 dark:from-gray-700 dark:to-gray-800 p-8 lg:p-12 text-white flex items-center justify-center transition-colors duration-500">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
                      <MapPin className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">
                      {lang === 'marathi' ? 'आमच्या कार्यालयाला भेट द्या' : 'Visit Our Office'}
                    </h3>
                    <p className="text-blue-100 dark:text-gray-200 mb-6 leading-relaxed">
                      {lang === 'marathi'
                        ? 'पुण्याच्या हृदयात स्थित, आमचे कार्यालय सहज प्रवेशयोग्य असून आधुनिक सुविधा उपलब्ध आहेत.'
                        : 'Located in the heart of Pune, our office is easily accessible and equipped with modern facilities.'}
                    </p>
                    <div className="space-y-3">
                      <a
                        href="https://www.google.com/maps?q=18.562883246780896,73.81327144433503"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-full bg-white text-blue-600 dark:text-blue-400 dark:bg-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors"
                      >
                        <ExternalLink className="w-5 h-5 mr-2" />
                        {lang === 'marathi' ? 'नकाशावर पहा' : 'View on Maps'}
                      </a>

                      <a
                        href={`tel:${contact.phone}`}
                        className="inline-flex items-center justify-center w-full border-2 border-white dark:border-gray-400 text-white dark:text-gray-200 px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 dark:hover:bg-gray-400 dark:hover:text-gray-900 transition-colors"
                      >
                        <Phone className="w-5 h-5 mr-2" />
                        {lang === 'marathi' ? 'थेट कॉल करा' : 'Call Directly'}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
