import React from "react";
import img from "../assets/images/Deepak_IPS.jpeg";
import { useLanguageContext } from "../context/LanguageContext"; // adjust path

export default function DirectorsDesk() {
  const { language } = useLanguageContext();

  const content = {
    marathi: {
      title: "संचालकांचे मनोगत",
      name: "श्री. दीपक शिवानंद पांडे (आयपीएस)",
      designation: [
        "(भा.पो.से.)",
        "अपर पोलीस महासंचालक व संचालक",
        "पोलीस दळणवळण, माहिती तंत्रज्ञान व परिवहन ",
        "महाराष्ट्र राज्य, पुणे,",
      ],
      paragraphs: [
        "पोलीस वायरलेस विभाग (आताचा पोलीस संप्रेषण व माहिती तंत्रज्ञान विभाग) राज्य पोलीसांना संप्रेषण सुविधा उपलब्ध करून देतो...",
        "पोलीस संप्रेषण व माहिती तंत्रज्ञान विभाग हा पोलीस दलामध्ये अत्यंत महत्त्वाची भूमिका बजावतो...",
        "कोयना भूकंप १० डिसेंबर १९६७ रोजी ६.३ रिश्टर तीव्रतेचा आणि किल्लारी भूकंप ३० सप्टेंबर १९९३ रोजी ६.०४ तीव्रतेचा झाला. या आपत्तीमध्ये इमारती व पायाभूत सुविधा कोसळल्यामुळे मोठे नुकसान झाले आणि २०० हून अधिक मृत्यू झाले. २६ जुलै २००५ रोजी मुंबईत झालेल्या अतिवृष्टीमुळे पूरस्थिती निर्माण झाली. हजारो नागरिक विस्थापित झाले, वाहतूक विस्कळीत झाली आणि अनेक मृत्यू झाले. २६/११ दहशतवादी हल्ला, दंगली व स्फोट या सर्व घटनांमध्ये खाजगी संप्रेषण जसे की मोबाईल नेटवर्क पूर्णपणे बंद पडले. अशा प्रसंगी पोलीस वायरलेस संप्रेषणाने आपत्ती व्यवस्थापन व प्रतिसाद देण्यासाठी मोलाची भूमिका बजावली. त्यामुळे कार्यक्षम वायरलेस संप्रेषण ही सार्वजनिक सुरक्षितता व पोलिसींगमधील कार्यक्षमता टिकवण्यासाठी अत्यावश्यक बाब आहे.",
        "आधुनिक तंत्रज्ञानाचा वापर करून पोलीस विभागात संप्रेषण प्रणाली अधिक कार्यक्षम करण्यात येत आहे. नवीन साधने आणि सॉफ्टवेअर वापरल्यामुळे आपत्ती प्रतिसाद वेळ कमी झाला आहे.",
        "सार्वजनिक सुरक्षिततेसाठी आणि आपत्ती व्यवस्थापनासाठी पोलीस वायरेलस नेटवर्क सातत्याने सुधारत राहणे आवश्यक आहे. प्रशिक्षण आणि उपाययोजना यांमुळे पोलिस दल अधिक तत्पर होऊ शकतो.",
      ],
    },
    english: {
      title: "From Director's Desk",
      name: "Mr. Deepak Shivanand Pandey (IPS)",
      designation: [
        "Additional Director General of Police",
        "and Director,",
        "Police Communication and",
        "Information Technology Department,",
        "Maharashtra State, Pune.",
      ],
      paragraphs: [
        "The Police Wireless Department prior to Police Communication and Information Technology Department typically handles communication systems...",
        "The Police Communication and Information Technology Department plays a vital role in policing...",
        "The Koyna earthquake on December 10, 1967 with a magnitude of 6.3 and the Killari earthquake on September 30, 1993 with a magnitude of 6.04 occurred in Maharashtra state, India. It caused significant damage and resulted in over 200 deaths, largely due to the collapse of buildings and infrastructure. The floods that followed on July 26, 2005, in Mumbai, were devastating. Heavy rainfall led to widespread flooding, impacting transportation, displacing thousands, and causing numerous fatalities. The city faced significant challenges in emergency response and infrastructure resilience during this disaster. 26/11 terrorist attack, riots and blasts were happened in Maharashtra state. Wireless communication has played a crucial role in disaster management and response during such crucial events when private network like mass communication, mobile network failed. Hence effective wireless communication is essential for maintaining public safety and operational efficiency in policing.",
        "The department has been leveraging modern technology to enhance communication systems. Advanced tools and software have improved response times during emergencies.",
        "Continuous upgrades of the wireless network are essential for public safety and disaster management. Training and preventive measures ensure that the police force remains proactive and efficient.",
      ],
    },
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-purple-800 mb-2">
          {content[language].title}
        </h1>
        <div className="w-24 h-1 bg-yellow-400"></div>
      </div>

      <div className="flex flex-col md:flex-col lg:flex-row gap-8">
        {/* Profile Section */}
        <div className="flex-shrink-0 text-center lg:text-left lg:w-1/3">
          <div className="w-48 h-48 mx-auto lg:mx-0 mb-4 rounded-full overflow-hidden border-4 border-gray-200">
            <img
              src={img}
              alt="Director Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="text-xl font-bold text-gray-800 mb-2">
            {content[language].name}
          </h2>
          <div className="text-sm text-gray-600 leading-relaxed">
            {content[language].designation.map((line, idx) => (
              <p key={idx}>{line}</p>
            ))}
          </div>
        </div>

        {/* Quote Section */}
        <div className="flex-1 text-gray-700 text-justify space-y-4 text-base leading-relaxed font-roboto">
          {content[language].paragraphs.map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
