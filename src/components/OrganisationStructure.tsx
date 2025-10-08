import React from "react";
import { Shield, MapPin, Users } from "lucide-react";
import { useLanguageContext } from "@/context/LanguageContext";

// Import your images
import id1 from "@/assets/images/deshmukh123.jpg";
import id3 from "@/assets/images/sandip_shinde.jpg";
import id0 from "@/assets/images/Deepak_IPS.jpeg";
import id7 from "@/assets/images/morale_sir12.jpg";
import id8 from "@/assets/images/gayatri_sp-removebg-preview.png";
import id2 from "@/assets/images/atul_patilsir.jpg";

const officers = [
  {
    id: 0,
    type: "splIgp",
    name: { marathi: "श्री. दीपक शिवानंद पाण्डेय्", english: "Shri. Deepak Shivananad Pandey" },
    position: {
      marathi: (
        <>
          भा पो से<br />
          अपर पोलीस महासंचालक व संचालक <br />
          पोलीस दळणवळण, माहिती तंत्रज्ञान व परिवहन<br />
          महाराष्ट्र राज्य, पुणे
        </>
      ),
      english:
        "Additional Director General of Police And Director, IT and Logistics, Maharashtra State, Pune",
    },
    image: id0,
  },
  {
    id: 1,
    type: "splIgp",
    name: { marathi: "श्री अशोक मोराळे", english: "Shri. Ashok Morale" },
    position: {
      marathi: (
        <>
          भा पो से<br />
          विशेष पोलिस महानिरीक्षक <br />
          मोटार परिवहन  <br />
          महाराष्ट्र राज्य, पुणे
        </>
      ),
      english:
        "Special Inspector General of Police, Motor Transport, Maharashtra State, Pune",
    },
    image: id7,
  },
  {
    id: 3,
    type: "sp",
    name: { marathi: "श्रीमती गायत्री पवार", english: "Gayatri Pawar" },
    position: {
      marathi: "पोलीस अधीक्षक मुख्यालय पुणे",
      english: "Superintendent of Police, Headquarters, Pune",
    },
    location: { marathi: "मुख्यालय, पुणे", english: "Headquarters, Pune" },
    image: id8,
  },
  {
    id: 4,
    type: "sp",
    name: { marathi: "श्री तुषार देशमुख", english: "Shri Tushar Deshmukh" },
    position: {
      marathi: "पोलीस अधीक्षक पुणे परिक्षेत्र",
      english: "Additional Superintendent of Police, Pune Range",
    },
    location: { marathi: "पुणे परिक्षेत्र", english: "Pune Range" },
    image: id1,
  },
  {
    id: 5,
    type: "sp",
    name: { marathi: "रिक्त ", english: "Vacant" },
    position: {
      marathi: "पोलीस अधीक्षक संभाजीनगर परिक्षेत्र",
      english: "Additional Superintendent of Police, CH. Sambhaji Nagar Range (Additional Charge)",
    },
    location: { marathi: "संभाजी नगर परिक्षेत्र", english: "Sambhaji Nagar Range" },
    image: null,
  },
  {
    id: 6,
    type: "sp",
    name: { marathi: "श्री संदीप शिंदे", english: "Shri Sandip Shinde" },
    position: {
      marathi: "पोलीस अधीक्षक नागपूर परिक्षेत्र",
      english: "Additional Superintendent of Police, Nagpur Range",
    },
    location: { marathi: "नागपूर परिक्षेत्र", english: "Nagpur Range" },
    image: id3,
  },
  {
    id: 7,
    type: "sp",
    name: { marathi: "रिक्त ", english: "Vacant" },
    position: {
      marathi: "पोलीस अधीक्षक कोकण परिक्षेत्र",
      english: "Additional Superintendent of Police, Kokan Range (Additional Charge)",
    },
    location: { marathi: "कोकण परिक्षेत्र", english: "Kokan Range" },
    image: null,
  },
];

const OfficerCard = ({ officer }: { officer: typeof officers[0] }) => {
  const { language } = useLanguageContext();
  const t = (textObj: { marathi: string; english: string }) =>
    language === "marathi" ? textObj.marathi : textObj.english;

  return (
    <div className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl p-3 sm:p-4 md:p-6 border border-blue-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-600 transform hover:-translate-y-1 transition-all duration-300">
      <div className="relative mb-2 sm:mb-3 mx-auto w-28 h-32 sm:w-36 sm:h-40 md:w-40 md:h-48 rounded-xl overflow-hidden shadow-lg ring-2 ring-blue-100 dark:ring-gray-600 group-hover:ring-blue-300 transition-all duration-300">
        {officer.image ? (
          <img
            src={officer.image}
            alt={t(officer.name)}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <Shield className="w-10 h-10 sm:w-12 sm:h-12 text-blue-500 dark:text-blue-300 mx-auto mt-10" />
        )}
      </div>
      <div className="text-center px-1">
        <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-800 dark:text-gray-100 mb-1 sm:mb-1 group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors duration-300">
          {t(officer.name)}
        </h3>
        <p className="text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-700 dark:to-gray-800 p-2 sm:p-3 rounded-lg border-l-4 border-blue-400 dark:border-blue-600 shadow-inner">
          {t(officer.position)}
        </p>
        {officer.location && (
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-700 dark:to-gray-800 rounded-lg p-1 sm:p-2 border border-blue-200 dark:border-gray-600 flex items-center justify-center space-x-2 text-slate-700 dark:text-gray-300 text-xs sm:text-sm mt-2">
            <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-white bg-blue-600 dark:bg-blue-500 rounded-full p-0.5 sm:p-1" />
            <span className="font-medium">{t(officer.location)}</span>
          </div>
        )}
      </div>
    </div>
  );
};

const OrganisationStructure = () => {
  const { language } = useLanguageContext();
  const t = (textObj: { marathi: string; english: string }) =>
    language === "marathi" ? textObj.marathi : textObj.english;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-950 transition-colors duration-500">
      <section className="py-6 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        {/* Header */}
        <div className="text-center mb-4 sm:mb-6">
          <div className="inline-flex items-center space-x-2 sm:space-x-3 mb-1 sm:mb-2">
            <div className="bg-blue-600 dark:bg-blue-500 rounded-full p-2 sm:p-3">
              <Users className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-800 to-indigo-800 bg-clip-text text-transparent dark:from-blue-400 dark:to-indigo-400">
              {t({ marathi: "संरचना", english: "ORGANISATIONAL STRUCTURE" })}
            </h2>
          </div>
          <div className="w-16 sm:w-24 h-1.5 bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-600 dark:from-blue-400 dark:via-indigo-400 mx-auto rounded-full mb-2 sm:mb-3"></div>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-slate-600 dark:text-slate-300 max-w-xs sm:max-w-md md:max-w-3xl mx-auto leading-relaxed">
            {t({
              marathi: "महाराष्ट्र राज्य पोलीस मोटार परिवहन विभागाची संरचना",
              english: "Organizational hierarchy of Maharashtra State Police Motor Transport Department showcasing our leadership structure",
            })}
          </p>
        </div>

        {/* SPL.IGP Officers */}
        <div className="max-w-4xl mx-auto space-y-4 sm:space-y-5">
          {officers.filter((o) => o.type === "splIgp").map((officer) => (
            <OfficerCard key={officer.id} officer={officer} />
          ))}
        </div>

        {/* Atul Patil Card */}
        <div className="max-w-4xl mx-auto mt-4 sm:mt-6">
          <OfficerCard
            officer={{
              id: 100,
              type: "splIgp",
              name: { marathi: "श्री. अतुल पाटील", english: "Shri. Atul Patil" },
              position: {
                marathi: (
                  <>
                    पोलीस उप-महानिरीक्षक
                    <br />
                    मोटार परिवहन
                    <br />
                    महाराष्ट्र राज्य, पुणे
                  </>
                ),
                english: "Deputy Inspector General of Police, Motor Transport, Maharashtra State, Pune",
              },
              image: id2,
            }}
          />
        </div>

        {/* SP Officers */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4 md:gap-6">
          {officers.filter((o) => o.type === "sp").map((officer) => (
            <OfficerCard key={officer.id} officer={officer} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default OrganisationStructure;
