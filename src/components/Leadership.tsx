import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/hooks/useLanguage";

import AshokMoraleImg from "../assets/images/morale_sir12.jpg";

interface Leader {
  id: number;
  name: {
    marathi: string;
    english: string;
  };
  designation: {
    marathi: React.ReactNode;
    english: React.ReactNode;
  };
  imageUrl: string;
  imagePlaceholder: string;
}

const leaders: Leader[] = [
  {
    id: 1,
    name: {
      marathi: "श्री. देवेंद्र फडणवीस",
      english: "Shri. Devendra Fadnavis",
    },
    designation: {
      marathi: (
        <>
          मा. मुख्यमंत्री
          <br />
          महाराष्ट्र राज्य
        </>
      ),
      english: (
        <>
          Hon&apos;ble Chief Minister
          <br />
          Maharashtra State
        </>
      ),
    },
    imageUrl:
      "https://i.cdn.newsbytesapp.com/images/l84920241204121312.jpeg",
    imagePlaceholder:
      "Official portrait of Shri. Devendra Fadnavis",
  },

  // {
  //   id: 2,
  //   name: {
  //     marathi: "श्री. एकनाथ शिंदे",
  //     english: "Shri. Eknath Shinde",
  //   },
  //   designation: {
  //     marathi: (
  //       <>
  //         मा. उपमुख्यमंत्री
  //         <br />
  //         महाराष्ट्र राज्य
  //       </>
  //     ),
  //     english: (
  //       <>
  //         Hon&apos;ble Deputy Chief Minister
  //         <br />
  //         Maharashtra State
  //       </>
  //     ),
  //   },
  //   imageUrl:
  //     "https://images.moneycontrol.com/static-mcnews/2022/06/Eknath-Shinde-435x435.jpg",
  //   imagePlaceholder:
  //     "Official portrait of Shri. Eknath Shinde",
  // },

  // {
  //   id: 3,
  //   name: {
  //     marathi: "श्री. अजित पवार",
  //     english: "Shri. Ajit Pawar",
  //   },
  //   designation: {
  //     marathi: (
  //       <>
  //         मा. उपमुख्यमंत्री
  //         <br />
  //         महाराष्ट्र राज्य
  //       </>
  //     ),
  //     english: (
  //       <>
  //         Hon&apos;ble Deputy Chief Minister
  //         <br />
  //         Maharashtra State
  //       </>
  //     ),
  //   },
  //   imageUrl:
  //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLySIDnTd2ealPwIzvgZ3eC7SP22ud4MreVg&s",
  //   imagePlaceholder:
  //     "Official portrait of Shri. Ajit Pawar",
  // },

  // {
  //   id: 4,
  //   name: {
  //     marathi: "डॉ. पंकज भोयर",
  //     english: "Dr. Pankaj Bhoyar",
  //   },
  //   designation: {
  //     marathi: (
  //       <>
  //         मा. राज्य मंत्री, गृह (ग्रामीण)
  //         <br />
  //         महाराष्ट्र राज्य
  //       </>
  //     ),
  //     english: (
  //       <>
  //         Hon&apos;ble Minister of State, Home (Rural)
  //         <br />
  //         Maharashtra State
  //       </>
  //     ),
  //   },
  //   imageUrl:
  //     "https://upload.wikimedia.org/wikipedia/commons/6/6b/No_image_3x4.svg",
  //   imagePlaceholder:
  //     "Official portrait of Dr. Pankaj Bhoyar",
  // },

  // {
  //   id: 5,
  //   name: {
  //     marathi: "श्री. योगेश कदम",
  //     english: "Shri. Yogesh Kadam",
  //   },
  //   designation: {
  //     marathi: (
  //       <>
  //         मा. राज्य मंत्री, गृह (शहरे)
  //         <br />
  //         महाराष्ट्र राज्य
  //       </>
  //     ),
  //     english: (
  //       <>
  //         Hon&apos;ble Minister of State, Home (Urban)
  //         <br />
  //         Maharashtra State
  //       </>
  //     ),
  //   },
  //   imageUrl:
  //     "https://upload.wikimedia.org/wikipedia/commons/6/6b/No_image_3x4.svg",
  //   imagePlaceholder:
  //     "Official portrait of Shri. Yogesh Kadam",
  // },

  // {
  //   id: 6,
  //   name: {
  //     marathi: "श्री. इक्बालसिंग चहल",
  //     english: "Shri. Iqbal Singh Chahal",
  //   },
  //   designation: {
  //     marathi: (
  //       <>
  //         भा प्र से
  //         <br />
  //         मा. अपर मुख्य सचिव (गृह)
  //         <br />
  //         महाराष्ट्र राज्य
  //       </>
  //     ),
  //     english: (
  //       <>
  //         Additional Chief Secretary (Home)
  //         <br />
  //         Maharashtra State
  //       </>
  //     ),
  //   },
  //   imageUrl:
  //     "https://www.asiadialogues.com/indias-most-distinguished-ias-officers/assets/img/winners/Iqbal_Singh_Chahal_1.png",
  //   imagePlaceholder:
  //     "Official portrait of Shri. Iqbal Singh Chahal",
  // },

  {
    id: 7,
    name: {
      marathi: "श्री. सदानंद दाते",
      english: "Shri. Sadanand Date (IPS)",
    },
    designation: {
      marathi: (
        <>
          भा पो से
          <br />
          मा. पोलीस महासंचालक
          <br />
          महाराष्ट्र राज्य
        </>
      ),
      english: (
        <>
          Director General of Police
          <br />
          Maharashtra State
        </>
      ),
    },
    imageUrl:
      "https://www.thanepolice.gov.in/_next/image?url=%2F8.jpeg&w=256&q=75",
    imagePlaceholder:
      "Official portrait of Shri. Sadanand Date",
  },

  {
    id: 8,
    name: {
      marathi: "श्री. दीपक शिवानंद पाण्डेय",
      english: "Shri. Deepak Shivanand Pandey (IPS)",
    },
    designation: {
      marathi: (
        <>
          भा पो से
          <br />
          अपर पोलीस महासंचालक व संचालक
          <br />
          पोलीस दळणवळण, माहिती तंत्रज्ञान व परिवहन
          <br />
          महाराष्ट्र राज्य, पुणे
        </>
      ),
      english: (
        <>
          Additional Director General of Police and Director
          <br />
          Police Communication, Information Technology and Transport
          <br />
          Maharashtra State, Pune
        </>
      ),
    },
    imageUrl:
      "https://www.witnessinthecorridors.com/ImgNewsPolitical/240708185120309.png",
    imagePlaceholder:
      "Official portrait of Shri. Deepak Shivanand Pandey",
  },

  {
    id: 9,
    name: {
      marathi: "श्री. अशोक मोराळे",
      english: "Shri. Ashok Morale",
    },
    designation: {
      marathi: (
        <>
          भा पो से
          <br />
          विशेष पोलीस महानिरीक्षक
          <br />
          मोटार परिवहन
          <br />
          महाराष्ट्र राज्य, पुणे
        </>
      ),
      english: (
        <>
          Special Inspector General of Police
          <br />
          Motor Transport
          <br />
          Maharashtra State, Pune
        </>
      ),
    },
    imageUrl: AshokMoraleImg,
    imagePlaceholder:
      "Official portrait of Shri. Ashok Morale",
  },
];

const Leadership = () => {
  const { language } = useLanguage();

  const renderCard = (leader: Leader, index: number) => {
    const languageClass =
      language === "marathi" ? "marathi-text" : "english-text";

    return (
      <Card
        key={leader.id}
        className="group transition-all duration-500 w-64 shadow-lg hover:shadow-2xl border-0 bg-gradient-to-br from-white via-blue-50 to-indigo-100 hover:-translate-y-2 rounded-xl"
        style={{ animationDelay: `${index * 150}ms` }}
      >
        <CardContent className="p-6 text-center relative overflow-hidden">
          {/* Background Effect */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-blue-400 to-transparent rounded-full transform translate-x-6 -translate-y-6"></div>

            <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-purple-400 to-transparent rounded-full transform -translate-x-4 translate-y-4"></div>
          </div>

          {/* Image */}
          <div className="relative mb-4 mx-auto w-28 h-28 rounded-full overflow-hidden border-4 border-blue-400 p-1 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 group-hover:scale-105 transition-all duration-500">
            <div className="w-full h-full rounded-full overflow-hidden bg-white p-1">
              <img
                src={leader.imageUrl}
                alt={leader.name[language]}
                className="w-full h-full object-cover rounded-full"
                loading="lazy"
              />
            </div>
          </div>

          {/* Content */}
          <div className="relative z-10">
            <h3
              className={`text-lg font-bold group-hover:text-blue-600 transition-colors duration-300 ${languageClass}`}
            >
              {leader.name[language]}
            </h3>

            <p
              className={`text-sm text-gray-600 mt-2 ${languageClass}`}
            >
              {leader.designation[language]}
            </p>

            <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full group-hover:w-24 transition-all duration-500 mt-3"></div>
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <section className="py-6 police-section-bg">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2
            className={`police-heading text-3xl md:text-4xl mb-4 ${
              language === "marathi"
                ? "marathi-text"
                : "english-text"
            }`}
          >
            {language === "marathi"
              ? "आमचे नेतृत्व"
              : "Our Leadership"}
          </h2>

          <p
            className={`police-body text-lg max-w-2xl mx-auto text-black ${
              language === "marathi"
                ? "marathi-text"
                : "english-text"
            }`}
          >
            {language === "marathi"
              ? "महाराष्ट्र पोलीस परिवहन विभागाचे नेतृत्व आणि मार्गदर्शक"
              : "Leadership and guidance of Maharashtra Police Motor Transport Department"}
          </p>
        </div>

        {/* Leadership Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
          {leaders.map((leader, index) =>
            renderCard(leader, index)
          )}
        </div>
      </div>
    </section>
  );
};

export default Leadership;