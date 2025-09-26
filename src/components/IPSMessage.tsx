import React from 'react'; 
import img from "../assets/images/Deepak_IPS.jpeg";
import { useLanguage } from '@/hooks/useLanguage';
import { Link } from "react-router-dom";

const DirectorsDesk = () => {
  const { language } = useLanguage(); // get language from navbar/global state

  const content = {
    english: {
      title: "From Director's Desk",
      name:(<>Shri.Deepak Shivanand Pandey (IPS)</>),
      designation: 'Additional Director General of Police and Director, Police Communication, Information Technology and Transport, Maharashtra State Pune.',
      quote: `The Maharashtra Police Force is the backbone of our state. As vast as the responsibilities of the police force are, equally important are the resources and vehicles it requires. The responsibility of planning, maintenance, repair, and ensuring efficiency of all these vehicles lies with the Motor Transport Department.

Be it disasters, riots, law-and-order situations, or the need to provide prompt services to citizens – the Motor Transport Department plays a vital role in keeping the police force capable and ready at every moment.Through this department, the police vehicle fleet always remains in functional condition. Not only maintenance but also the adoption of new technologies ensures that vehicle management is becoming more effective day by..`
    },
    marathi: {
       title: "संचालकांचे मनोगत",
      name: 'श्री. दीपक शिवानंद पाण्डेय् ',
      designation: (
        <>
         (भा.पो.से.) <br/>
         अपर पोलीस महासंचालक व संचालक,<br/> पोलीस दळणवळण, माहिती तंत्रज्ञान व परिवहन<br/> महाराष्ट्र राज्य, पुणे
        </>
      ),
      quote: `महाराष्ट्र पोलीस दल हे आपल्या राज्याचे आधारस्तंभ आहे. त्यांच्या विस्तृत जबाबदाऱ्यांसोबतच सक्षम संसाधने आणि विश्वासार्ह वाहन ताफ्याची गरजही तितकीच महत्त्वाची आहे. या वाहनांचे नियोजन, देखभाल, दुरुस्ती आणि कार्यक्षमतेची जबाबदारी मोटार  परिवहन विभाग  पार पाडतो.

आपत्ती व्यवस्थापन असो, दंगल नियंत्रण असो, कायदा-सुव्यवस्था राखणे असो किंवा नागरिकांना तत्काळ सेवा पुरविणे असो – मोटार  परिवहन विभाग पोलीस दलाला सदैव सज्ज आणि सक्षम ठेवण्यात मोलाची भूमिका बजावतो. हा विभाग केवळ वाहनांची कार्यस्थिती सुनिश्चित करत नाही, तर नवी तंत्रज्ञानं स्वीकारून वाहन व्यवस्थापन अधिक प्रभावी आणि भविष्याभिमुख बनवत आहे.आजच्या आधुनिक युगात पोलीस दलाला वेग, तत्परता आणि तांत्रिक कार्यक्षमतेची गरज असते. हे सर्व पैलू मोटार  परिवहन विभाग  सुनिश्चित करतो. नवीन प्रशिक्षण, तांत्रिक साधने आणि प्रणालीबद्ध नियोजनाद्वारे हा विभाग राज्यातील पोलीस यंत्रणेच्या कार्यप्रणालीला अधिक सुरळीत बनवतो

म्हणूनच, मोटार  परिवहन विभाग फक्त वाहन व्यवस्थापनाचे केंद्र नाही – तर पोलीस दलाच्या कार्यक्षमतेचा...`
    }
  };

  return (
    <div className="relative min-h-[600px] sm:min-h-[500px] p-6 sm:p-10 md:p-14 overflow-hidden bg-gradient-to-br from-indigo-900 via-indigo-800 to-indigo-900 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
      {/* Background Patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-20 h-20 sm:w-32 sm:h-32 bg-white dark:bg-gray-700 rounded-full -translate-x-10 sm:-translate-x-16 -translate-y-10 sm:-translate-y-16"></div>
        <div className="absolute top-10 sm:top-20 right-10 sm:right-20 w-16 h-16 sm:w-24 sm:h-24 bg-white dark:bg-gray-700 rounded-full opacity-50"></div>
        <div className="absolute bottom-10 sm:bottom-20 left-16 sm:left-32 w-28 h-28 sm:w-40 sm:h-40 bg-white dark:bg-gray-700 rounded-full -translate-x-10 sm:-translate-x-20 translate-y-10 sm:translate-y-20"></div>
        <div className="absolute bottom-0 right-0 w-20 h-20 sm:w-28 sm:h-28 bg-white dark:bg-gray-700 rounded-full translate-x-6 sm:translate-x-14 translate-y-6 sm:translate-y-14"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-16">
          {/* Profile Section */}
          <div className="flex flex-col items-center text-center flex-shrink-0 lg:mt-16">
            <div className="relative mb-6">
              <div className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-full border-4 border-orange-500 overflow-hidden bg-gray-300 dark:bg-gray-600 transition-colors duration-300">
                <img
                  src={img}
                  alt="Director"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Name and Title */}
            <div className="space-y-1 max-w-xs px-2 sm:px-0">
              <h3 className="text-base sm:text-lg leading-tight text-white dark:text-gray-200 transition-colors duration-300">
                {content[language].name}
              </h3>
              <p className="text-xs sm:text-sm leading-relaxed text-white dark:text-gray-300 transition-colors duration-300">
                {content[language].designation}
              </p>
            </div>
          </div>

          {/* Content Section */}
          <div className="flex-1">
            <div className="mb-6 sm:mb-8">
              <h1 className="text-2xl sm:text-3xl lg:text-2xl xl:text-3xl font-roboto text-white dark:text-gray-200 transition-colors duration-300">
                {content[language].title}
              </h1>
            </div>

            <div className="relative">
              <div className="text-4xl sm:text-6xl lg:text-7xl text-orange-500 dark:text-orange-400 absolute -top-4 sm:-top-6 -left-2 sm:-left-4 transition-colors duration-300">
                "
              </div>

              <div className="text-white dark:text-gray-300 text-sm sm:text-base lg:text-lg xl:text-xl leading-relaxed px-4 sm:px-8 transition-colors duration-300">
                <p className="mb-4">
                  {content[language].quote}{" "}
                  <Link to="/directors-desk" className="text-orange-500 dark:text-orange-400 underline hover:text-orange-600 dark:hover:text-orange-300 transition-colors duration-300">
                    Read More
                  </Link>
                </p>  
              </div>

              <div className="text-4xl sm:text-6xl lg:text-7xl text-orange-500 dark:text-orange-400 absolute -bottom-6 sm:-bottom-10 right-10 sm:right-60 transition-colors duration-300">
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
