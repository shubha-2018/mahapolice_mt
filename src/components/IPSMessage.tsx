// export default DirectorsDesk;
import React from 'react'; 
import img from "../assets/images/Deepak_IPS.jpeg";
import { useLanguage } from '@/hooks/useLanguage';
import { Link } from "react-router-dom";

const DirectorsDesk = () => {
  const { language } = useLanguage(); // get language from navbar/global state

  // Text in both languages
  const content = {
    english: {
      title: "From Director's Desk",
      name:
      (<>
       
       Shri.Deepak Shivanand Pandey (IPS)
      </>
      ),
      designation: 'Additional Director General of Police and Director, Police Communication, Information Technology and Transport, Maharashtra State Pune.',
      quote: `The Police Wireless Department prior to Police Communication and Information
      Technology Department typically handles communication systems used by law
      enforcement authority that is Maharashtra State Police. This includes managing
      radio frequencies, dispatching officers, and ensuring secure and efficient
      communication between police units in the field. Uninterrupted 24×7
      communication system is provided by our Department. The Police Communication and Information Technology Department plays a vital role in policing by ensuring effective communication and coordination among officers with key functions such as real-time Communication which facilitates immediate contact between officers in the field and dispatch...`
    },
    marathi: {
      // title: 'विशेष IGP चा संदेश',
       title: "संचालकांचे मनोगत",
      name: 'श्री. दीपक शिवानंद पाण्डेय् ',
      designation: (
        <>
         (भा.पो.से.) <br/>
         अपर पोलीस महासंचालक व संचालक,<br/> पोलीस दळणवळण, माहिती तंत्रज्ञान व परिवहन<br/> महाराष्ट्र राज्य, पुणे
        </>
      ),
      quote: `पोलीस वायरलेस विभाग, पोलीस दळणवळण आणि माहिती तंत्रज्ञान विभागापूर्वी, महाराष्ट्र राज्य पोलीस यंत्रणेद्वारे वापरल्या जाणार्‍या संवाद प्रणालींचे व्यवस्थापन करतो. यात रेडिओ फ्रिक्वेन्सीज, अधिकाऱ्यांचे डिस्पॅचिंग आणि पोलीस युनिट्समधील सुरक्षित व कार्यक्षम संवाद सुनिश्चित करणे समाविष्ट आहे. आमच्या विभागाद्वारे २४×७ निरंतर संवाद सेवा प्रदान केली जाते. पोलीस संवाद आणि माहिती तंत्रज्ञान विभाग पोलीसिंगमध्ये अत्यंत महत्त्वाची भूमिका बजावतो, कारण तो अधिकाऱ्यांमध्ये प्रभावी संवाद आणि समन्वय सुनिश्चित करतो. या विभागाचे एक मुख्य कार्य म्हणजे रिअल-टाइम संवाद, ज्यामुळे मैदानातील अधिकाऱ्यांशी आणि डिस्पॅचशी तत्काळ संपर्क साधता येतो, आणि घटनेला वेळेवर प्रतिसाद देणे शक्य होते....`
    }
  };

  return (
    <div className="relative bg-gradient-to-br from-indigo-900 via-indigo-800 to-indigo-900 h-[500px] p-14 overflow-hidden">
      {/* Background Patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full -translate-x-16 -translate-y-16"></div>
        <div className="absolute top-20 right-20 w-24 h-24 bg-white rounded-full opacity-50"></div>
        <div className="absolute bottom-20 left-32 w-40 h-40 bg-white rounded-full -translate-x-20 translate-y-20"></div>
        <div className="absolute bottom-0 right-0 w-28 h-28 bg-white rounded-full translate-x-14 translate-y-14"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-16">
          {/* Profile Section */}
          <div className="flex flex-col items-center text-center flex-shrink-0 lg:mt-16">
            <div className="relative mb-6">
              <div className="w-40 h-40 lg:w-48 lg:h-48 rounded-full border-4 border-orange-500 overflow-hidden bg-gray-300">
                <img
                  src={img}
                  alt="Director"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Name and Title */}
            <div className="text-white space-y-1 max-w-xs">
              <h3 className="text-lg leading-tight">
                {content[language].name}
              </h3>
              <p className="text-sm leading-relaxed">
                {content[language].designation}
              </p>
            </div>
          </div>

          {/* Content Section */}
          <div className="flex-1">
            <div className="mb-8">
  <h1 className="text-3xl lg:text-2xl xl:text-3xl text-white font-roboto">
    {content[language].title}
  </h1>
</div>


            <div className="relative">
              <div className="text-6xl lg:text-7xl text-orange-500  absolute -top-6 -left-4">
                "
              </div>

              <div className="text-white text-medium lg:text-lg xl:text-xl leading-relaxed pl-8 pr-8 ">
                <p className="mb-4">
                {content[language].quote}{" "}
                  <Link to="/directors-desk"className="text-orange-500 underline hover:text-orange-600">Read More</Link>
                  </p>  
              </div>

              <div className="text-6xl lg:text-7xl text-orange-500 absolute -bottom-10 right-64">
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
