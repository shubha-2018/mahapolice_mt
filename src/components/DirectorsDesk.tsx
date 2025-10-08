// import React from "react";
// import img from "../assets/images/Deepak_IPS.jpeg";
// import { useLanguageContext } from "../context/LanguageContext"; // adjust path

// export default function DirectorsDesk() {
//   const { language } = useLanguageContext();

//   const content = {
//     marathi: {
//       title: "संचालकांचे मनोगत",
//       name: "श्री. दीपक शिवानंद पाण्डेय्",
//       designation: [
//         "भा पो से",
//         "अपर पोलीस महासंचालक व संचालक",
//         "पोलीस दळणवळण, माहिती तंत्रज्ञान व परिवहन ",
//         "महाराष्ट्र राज्य, पुणे,",
//       ],
//       paragraphs: [
//         "महाराष्ट्र पोलीस दल हा आपल्या राज्याचा कणा आहे. पोलीस दलाचे कार्यक्षेत्र जितके व्यापक आहे, तितकी त्याला लागणारी साधनसामग्री आणि वाहने हे देखील महत्त्वाचे घटक आहेत. या सर्व वाहनांचे नियोजन, देखभाल, दुरुस्ती आणि उच्च कार्यक्षमता राखणेसाठी जे अखंड परिश्रम घेतले जातात, ती जबाबदारी मोटार परिवहन विभागामार्फत पार पाङली जाते.\n\nआपत्ती असो, दंगली असो, कायदा सुव्यवस्था राखण्याची वेळ असो, किंवा नागरीकांसाठी तत्परसेवा पुरविण्याची आवश्यकता असो, परिवहन सुविधा पुरविण्याकरिता विशेष अत्याधुनिक वाहने, सागरी सुरक्षा दरम्यान येणारी आव्हाने पार पाडण्यासाठी व सागरी गस्तीकरिता हाय स्पीड पोलीस नौका तसेच सर्व वाहने व नौका सुसज्ज व कार्यरत ठेवणेकरिता मोटार परिवहन विभाग मोलाची भूमीका बजावत असतो.\n\nआजच्या आधुनिक युगात पोलीस दलातील वेग, तत्परता आणि तांत्रिक क्षमतेने सुसज्ज असलेल्या व नागरिकांच्या तत्पर सेवेत कार्यरत असलेल्या विभागाचे नेतृत्व करण्याचा मला सार्थ अभिमान आहे. मोटार परिवहन विभाग, महाराष्ट्र राज्य पोलीस दलाकरिता अविरत प्रयत्नशील राहील.",
//       ],
//     },
//     english: {
//       title: "From Director's Desk",
//       name: "Mr. Deepak Shivanand Pandey (IPS)",
//       designation: [
//         "Additional Director General of Police",
//         "and Director,",
//         "Police Communication and",
//         "Information Technology & Transport Department,",
//         "Maharashtra State, Pune.",
//       ],
//       paragraphs: [
//         "The Maharashtra Police Force is the backbone of our state. As vast as the responsibilities of the police force are, equally important are the resources and vehicles it requires. The responsibility of planning, maintenance, repair, and ensuring high efficiency of all these vehicles lies with the Motor Transport Department.\n\nBe it disasters, riots, law-and-order situations, or the need to provide prompt services to citizens – the Motor Transport Department plays a vital role in providing special state-of-the-art vehicles, overcoming challenges during maritime security, and maintaining all vehicles and high-speed police boats ready and operational for patrols.\n\nI feel proud to lead a department equipped with speed, readiness, and technical efficiency, working in the service of the citizens. The Motor Transport Department will continue its relentless efforts for the Maharashtra Police Force.\n\nJai Hind..........!!!",
//       ],
//     },
//   };

//   return (
//    <div className="max-w-6xl mx-auto p-6 bg-white mt-28">
//   {/* Header */}
//   <div className="mb-8">
//     <h1 className="text-4xl font-bold text-purple-800 mb-2">
//       {content[language].title}
//     </h1>
//     <div className="w-24 h-1 bg-yellow-400"></div>
//   </div>

//   <div className="flex flex-col md:flex-col lg:flex-row gap-8">
//     {/* Profile Section */}
//     <div className="flex-shrink-0 text-center lg:text-left lg:w-1/3">
//       <div className="w-48 h-48 mx-auto lg:mx-0 mb-4 rounded-full overflow-hidden border-4 border-gray-200">
//         <img
//           src={img}
//           alt="Director Profile"
//           className="w-full h-full object-cover"
//         />
//       </div>

//       <h2 className="text-xl font-bold text-gray-800 mb-2">
//         {content[language].name}
//       </h2>

//       {/* 👉 designation list with "भा पो से" centered */}
//       <div className="text-sm text-gray-600 leading-relaxed">
//         {content[language].designation.map((line, idx) => (
//           <p
//             key={idx}
//             className={
//               line.trim() === "भा पो से"
//                 ? "text-center font-medium text-gray-800"
//                 : "text-left"
//             }
//           >
//             {line}
//           </p>
//         ))}
//       </div>
//     </div>

//     {/* Quote Section */}
//     <div className="flex-1 text-gray-700 text-justify space-y-4 text-base leading-relaxed font-roboto">
//       {content[language].paragraphs.map((para, idx) => (
//         <p key={idx}>{para}</p>
//       ))}
//     </div>
//   </div>
// </div>

//   );
// }



import React from "react";
import img from "../assets/images/Deepak_IPS.jpeg";
import { useLanguageContext } from "../context/LanguageContext"; // adjust path if needed

export default function DirectorsDesk() {
  const { language } = useLanguageContext();

  const content = {
    marathi: {
      title: "संचालकांचे मनोगत",
      name: "श्री. दीपक शिवानंद पाण्डेय्",
      designation: [
        "भा पो से",
        "अपर पोलीस महासंचालक व संचालक",
        "पोलीस दळणवळण, माहिती तंत्रज्ञान व परिवहन ",
        "महाराष्ट्र राज्य, पुणे,",
      ],
      paragraphs: [
        "महाराष्ट्र पोलीस दल हा आपल्या राज्याचा कणा आहे. पोलीस दलाचे कार्यक्षेत्र जितके व्यापक आहे, तितकी त्याला लागणारी साधनसामग्री आणि वाहने हे देखील महत्त्वाचे घटक आहेत. या सर्व वाहनांचे नियोजन, देखभाल, दुरुस्ती आणि उच्च कार्यक्षमता राखणेसाठी जे अखंड परिश्रम घेतले जातात, ती जबाबदारी मोटार परिवहन विभागामार्फत पार पाङली जाते.",
        "आपत्ती असो, दंगली असो, कायदा सुव्यवस्था राखण्याची वेळ असो, किंवा नागरीकांसाठी तत्परसेवा पुरविण्याची आवश्यकता असो, परिवहन सुविधा पुरविण्याकरिता विशेष अत्याधुनिक वाहने, सागरी सुरक्षा दरम्यान येणारी आव्हाने पार पाडण्यासाठी व सागरी गस्तीकरिता हाय स्पीड पोलीस नौका तसेच सर्व वाहने व नौका सुसज्ज व कार्यरत ठेवणेकरिता मोटार परिवहन विभाग मोलाची भूमीका बजावत असतो.",
        "आजच्या आधुनिक युगात पोलीस दलातील वेग, तत्परता आणि तांत्रिक क्षमतेने सुसज्ज असलेल्या व नागरिकांच्या तत्पर सेवेत कार्यरत असलेल्या विभागाचे नेतृत्व करण्याचा मला सार्थ अभिमान आहे. मोटार परिवहन विभाग, महाराष्ट्र राज्य पोलीस दलाकरिता अविरत प्रयत्नशील राहील.",
      ],
    },
    english: {
      title: "From Director's Desk",
      name: "Mr. Deepak Shivanand Pandey",
      designation: [
        "IPS",
        "Additional Director General of Police",
        "and Director,",
        "Police Communication and",
        "Information Technology & Transport Department,",
        "Maharashtra State, Pune.",
      ],
      paragraphs: [
        "The Maharashtra Police Force is the backbone of our state. As vast as the responsibilities of the police force are, equally important are the resources and vehicles it requires. The responsibility of planning, maintenance, repair, and ensuring high efficiency of all these vehicles lies with the Motor Transport Department.",
        "Be it disasters, riots, law-and-order situations, or the need to provide prompt services to citizens – the Motor Transport Department plays a vital role in providing special state-of-the-art vehicles, overcoming challenges during maritime security, and maintaining all vehicles and high-speed police boats ready and operational for patrols.",
        "I feel proud to lead a department equipped with speed, readiness, and technical efficiency, working in the service of the citizens. The Motor Transport Department will continue its relentless efforts for the Maharashtra Police Force.",
        "Jai Hind..........!!!",
      ],
    },
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white mt-28 rounded-lg shadow-sm">
      {/* Header */}
      <div className="mb-8 text-center lg:text-left">
        <h1 className="text-4xl font-bold text-purple-800 mb-2">
          {content[language].title}
        </h1>
        <div className="w-24 h-1 bg-yellow-400 mx-auto lg:mx-0"></div>
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

          {/* ✅ Name with (भा पो से) / (IPS) beside it */}
          <h2 className="text-xl font-bold text-gray-800 mb-2">
            {content[language].name}
            {language === "marathi" ? (
              <span className="font-medium text-gray-700 ml-2">भा पो से</span>
            ) : (
              <span className="font-medium text-gray-700 ml-2">(IPS)</span>
            )}
          </h2>

          {/* ✅ Remaining designation lines */}
          <div className="text-sm text-gray-600 leading-relaxed text-left">
            {content[language].designation
              .filter(
                (line) => line.trim() !== "भा पो से" && line.trim() !== "IPS"
              )
              .map((line, idx) => (
                <p key={idx}>{line}</p>
              ))}
          </div>
        </div>

        {/* Paragraph Section */}
        <div className="flex-1 text-gray-700 text-justify space-y-4 text-base leading-relaxed font-roboto">
          {content[language].paragraphs.map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
