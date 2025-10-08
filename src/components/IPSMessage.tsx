import React from 'react'; 
import img from "../assets/images/Deepak_IPS.jpeg";
import { useLanguage } from '@/hooks/useLanguage';
import { Link } from "react-router-dom";

const DirectorsDesk = () => {
  const { language } = useLanguage();

  const content = {
    english: {
      title: "From Director's Desk",
      name: <>Shri.Deepak Shivanand Pandey (IPS)</>,
      designation: 'Additional Director General of Police and Director, Police Communication, Information Technology and Transport, Maharashtra State Pune.',
      quote: `The Maharashtra Police Force is the backbone of our state. As vast as the responsibilities of the police force are, equally important are the resources and vehicles it requires. The responsibility of planning, maintenance, repair, and ensuring efficiency of all these vehicles lies with the Motor Transport Department. Be it disasters, riots, law-and-order situations, or the need to provide prompt services to citizens – the Motor Transport Department plays a vital role in keeping the police force capable and ready at every moment. Through this department, the police vehicle fleet always remains in functional condition. Not only maintenance but also the adoption of new technologies ensures that vehicle management is becoming more effective day by day.`
    },
    marathi: {
      title: "संचालकांचे मनोगत",
      name: 'श्री. दीपक शिवानंद पाण्डेय् ',
      designation: (
        <>
         भा पो से <br/>
         अपर पोलीस महासंचालक व संचालक,<br/> पोलीस दळणवळण, माहिती तंत्रज्ञान व परिवहन<br/> महाराष्ट्र राज्य, पुणे
        </>
      ),
      quote: `महाराष्ट्र पोलीस दल हा आपल्या राज्याचा कणा आहे. पोलीस दलाचे कार्यक्षेत्र जितके व्यापक आहे, तितकी त्याला लागणारी साधनसामग्री आणि वाहने हे देखील महत्त्वाचे घटक आहेत. या सर्व वाहनांचे नियोजन, देखभाल, दुरुस्ती आणि उच्च कार्यक्षमता राखणेसाठी जे अखंड परिश्रम घेतले जातात, ती जबाबदारी मोटार परिवहन विभागामार्फत पार पाङली जाते. आपत्ती असो, दंगली असो, कायदा सुव्यवस्था राखण्याची वेळ असो, किंवा नागरीकांसाठी तत्परसेवा पुरविण्याची आवश्यकता असो, परिवहन सुविधा पुरविण्याकरिता विशेष अत्याधुनिक वाहने, सागरी सुरक्षा दरम्यान येणारी आव्हाने पार पाडण्यासाठी व सागरी गस्तीकरिता हाय स्पीड पोलीस नौका तसेच सर्व वाहने व नौका सुसज्ज व कार्यरत ठेवणेकरिता मोटार परिवहन विभाग मोलाची भूमीका बजावत असतो. आजच्या आधुनिक युगात पोलीस दलातील वेग, तत्परता आणि तांत्रिक क्षमतेने सुसज्ज असलेल्या व नागरिकांच्या तत्पर सेवेत सेवेत कार्यरत असलेल्या विभागाचे नेतृत्व करण्याचा...`
    }
  };

  return (
    <div className="relative min-h-[600px] sm:min-h-[500px] p-4 sm:p-6 md:p-10 lg:p-14 overflow-hidden bg-gradient-to-br from-indigo-900 via-indigo-800 to-indigo-900 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">

      {/* Background Patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-16 h-16 sm:w-32 sm:h-32 bg-white dark:bg-gray-700 rounded-full -translate-x-8 sm:-translate-x-16 -translate-y-8 sm:-translate-y-16"></div>
        <div className="absolute top-10 sm:top-20 right-10 sm:right-20 w-12 h-12 sm:w-24 sm:h-24 bg-white dark:bg-gray-700 rounded-full opacity-50"></div>
        <div className="absolute bottom-10 sm:bottom-20 left-10 sm:left-32 w-24 h-24 sm:w-40 sm:h-40 bg-white dark:bg-gray-700 rounded-full -translate-x-8 sm:-translate-x-20 translate-y-8 sm:translate-y-20"></div>
        <div className="absolute bottom-0 right-0 w-16 h-16 sm:w-28 sm:h-28 bg-white dark:bg-gray-700 rounded-full translate-x-6 sm:translate-x-14 translate-y-6 sm:translate-y-14"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 sm:gap-10 lg:gap-16">

          {/* Profile Section */}
          <div className="flex flex-col items-center text-center flex-shrink-0 lg:mt-16">
            <div className="w-28 h-28 sm:w-36 sm:h-36 lg:w-48 lg:h-48 rounded-full border-4 border-orange-500 overflow-hidden bg-gray-300 dark:bg-gray-600 transition-colors duration-300 mb-4 sm:mb-6">
              <img src={img} alt="Director" className="w-full h-full object-cover" />
            </div>
            <div className="space-y-1 max-w-xs px-2 sm:px-0">
              <h3 className="text-base sm:text-lg md:text-xl leading-tight text-white dark:text-gray-200 transition-colors duration-300">
                {content[language].name}
              </h3>
              <p className="text-xs sm:text-sm md:text-base leading-relaxed text-white dark:text-gray-300 transition-colors duration-300">
                {content[language].designation}
              </p>
            </div>
          </div>

          {/* Content Section */}
          <div className="flex-1">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-roboto text-white dark:text-gray-200 transition-colors duration-300 mb-4 sm:mb-6">
              {content[language].title}
            </h1>

            <div className="relative">
              <div className="text-3xl sm:text-5xl lg:text-6xl text-orange-500 dark:text-orange-400 absolute -top-2 sm:-top-4 -left-2 sm:-left-4 transition-colors duration-300">
                "
              </div>

              <div className="text-white dark:text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed px-2 sm:px-4 lg:px-8">
                {/* ✅ Mobile short quote */}
                <p className="mb-4 block lg:hidden">
                  {content[language].quote.slice(0, 150)}...
                  <Link to="/directors-desk" className="text-orange-500 dark:text-orange-400 underline hover:text-orange-600 dark:hover:text-orange-300 transition-colors duration-300">
                    Read More
                  </Link>
                </p>
                {/* ✅ Full quote on desktop */}
                <p className="mb-4 hidden lg:block">
                  {content[language].quote}{" "}
                  <Link to="/directors-desk" className="text-orange-500 dark:text-orange-400 underline hover:text-orange-600 dark:hover:text-orange-300 transition-colors duration-300">
                    Read More
                  </Link>
                </p>
              </div>

              <div className="text-3xl sm:text-5xl lg:text-6xl text-orange-500 dark:text-orange-400 absolute -bottom-4 sm:-bottom-8 right-8 sm:right-20 transition-colors duration-300">
                "
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default DirectorsDesk;
