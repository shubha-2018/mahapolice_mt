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
        " मला मोटार परिवहन विभाग, महाराष्ट्र राज्य, पुणे या आपल्या विभागाबद्दल बोलताना अत्यंत अभिमान वाटतो.",
        "महाराष्ट्र पोलीस दल हा आपल्या राज्याचा कणा आहे. पोलीस दलाचे कार्यक्षेत्र जितके व्यापक आहे, तितकी त्याला लागणारी साधनसामग्री आणि वाहने हेदेखील महत्त्वाचे घटक आहेत. या सर्व वाहनांचे नियोजन, देखभाल, दुरुस्ती आणि कार्यक्षमतेसाठी जे अखंड परिश्रम घेतले जातात, ती जबाबदारी मोटार  परिवहन विभागाची आहे.",
        "आपत्ती असो, दंगली असोत, कायदा-सुव्यवस्था राखण्याची वेळ असो किंवा नागरिकांसाठी तत्पर सेवा पुरवण्याची आवश्यकता असो – पोलिस दलाला प्रत्येक क्षणी सक्षम आणि सज्ज ठेवण्यामध्ये मोटार  परिवहन विभाग मोलाची भूमिका बजावत आहे.",
        "या विभागामार्फत पोलीस वाहनांचा ताफा नेहमीच कार्यक्षम स्थितीत राहतो. केवळ दुरुस्तीच नाही, तर नवीन तंत्रज्ञानाचा वापर करून वाहन व्यवस्थापन अधिक परिणामकारक बनवण्याचे काम सातत्याने केले जात आहे.",
        "आजच्या आधुनिक युगात पोलीस दलाला वेग, तत्परता आणि तांत्रिक सक्षमतेची आवश्यकता आहे. मोटार परिवहन विभाग ह्या सगळ्या बाबी सुनिश्चित करतो. नवे प्रशिक्षण, तांत्रिक साधने, आणि नियोजन यांच्या जोरावर हा विभाग संपूर्ण राज्यातील पोलीस यंत्रणेचे कार्य अधिक सुरळीत करतो.",
        "म्हणूनच, मोटार  परिवहन विभाग हे केवळ वाहन व्यवस्थापनाचे केंद्र नसून – तो पोलीस दलाच्या कार्यक्षमतेचा पाया आहे.",
        "शेवटी, मी एवढेच सांगू इच्छितो की या विभागामुळेच महाराष्ट्र पोलीस दल सदैव तत्पर, सज्ज आणि सक्षम राहतो. या कार्याची जाणीव ठेवून आपण सर्वांनी एकत्रितपणे हा अभिमान वाढवूया.",
      ],
    },
    english: {
      title: "From Director's Desk",
      name: "Mr. Deepak Shivanand Pandey (IPS)",
      designation: [
        "Additional Director General of Police",
        "and Director,",
        "Police Communication and",
        "Information Technology & Transport Department,",
        "Maharashtra State, Pune.",
      ],
      paragraphs: [
        "I feel extremely proud to speak about the Motor Transport Department, Maharashtra State, Pune.",
        "The Maharashtra Police Force is the backbone of our state. As vast as the responsibilities of the police force are, equally important are the resources and vehicles it requires. The responsibility of planning, maintenance, repair, and ensuring efficiency of all these vehicles lies with the Motor Transport Department.",
        "Be it disasters, riots, law-and-order situations, or the need to provide prompt services to citizens – the Motor Transport Department plays a vital role in keeping the police force capable and ready at every moment.",
        "Through this department, the police vehicle fleet always remains in functional condition. Not only maintenance but also the adoption of new technologies ensures that vehicle management is becoming more effective day by day.",
        "In today’s modern era, the police force requires speed, readiness, and technological efficiency. The Motor Transport Department ensures all these aspects. With new training, technical tools, and systematic planning, this department makes the functioning of the state police machinery smoother.",
        "Thus, the Motor Transport Department is not merely a center of vehicle management – it is the foundation of the police force’s efficiency.",
        "In conclusion, I would like to state that because of this department, the Maharashtra Police Force always remains ready, capable, and efficient. Let us all collectively take pride in this contribution.",
      ],
    },
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white mt-28">
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
