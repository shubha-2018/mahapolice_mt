import React from "react";
import { Shield, MapPin, Badge, Users } from "lucide-react";
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
    <div className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl p-4 sm:p-6 border border-blue-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-600 transform hover:-translate-y-1 transition-all duration-300">
      <div className="relative mb-2 sm:mb-3 mx-auto w-36 h-40 sm:w-40 sm:h-48 rounded-xl overflow-hidden shadow-lg ring-2 ring-blue-100 dark:ring-gray-600 group-hover:ring-blue-300 transition-all duration-300">
        <img
          src={officer.image!}
          alt={t(officer.name)}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="text-center">
        <h3 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-gray-100 mb-1 sm:mb-1 group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors duration-300">
          {t(officer.name)}
        </h3>
        <p className="text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-700 dark:to-gray-800 p-2 sm:p-3 rounded-lg border-l-4 border-blue-400 dark:border-blue-600 shadow-inner">
          {t(officer.position)}
        </p>
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
      <section className="py-6 px-4 sm:px-6 md:px-8 lg:px-16">
        {/* Header */}
        <div className="text-center mb-4 sm:mb-6">
          <div className="inline-flex items-center space-x-3 mb-1 sm:mb-2">
            <div className="bg-blue-600 dark:bg-blue-500 rounded-full p-2">
              <Users className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-800 to-indigo-800 bg-clip-text text-transparent dark:from-blue-400 dark:to-indigo-400">
              {t({ marathi: "संरचना", english: "ORGANISATIONAL STRUCTURE" })}
            </h2>
          </div>
          <div className="w-24 sm:w-32 h-1.5 bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-600 dark:from-blue-400 dark:via-indigo-400 mx-auto rounded-full mb-2 sm:mb-3"></div>
          <p className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-300 max-w-md sm:max-w-3xl mx-auto leading-relaxed">
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
          <div className="bg-white rounded-lg shadow-md overflow-hidden border border-blue-200 dark:border-gray-700">
            <div className="flex justify-center pt-6 pb-4">
             <div className="w-48 h-56 rounded-lg overflow-hidden shadow-lg">
              <img
  src={id2}  // Use the imported image variable
  alt="Shri. Atul Patil"
  className="w-full h-full object-cover"
/>

              </div>
            </div>
            <div className="text-center px-6 pb-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-3">श्री. अतुल पाटील</h2>
              <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-400 space-y-1">
                <p className="text-base text-gray-700 leading-relaxed">पोलीस उप-महानिरीक्षक</p>
                <p className="text-base text-gray-700 leading-relaxed">मोटार परिवहन</p>
                <p className="text-base text-gray-700 leading-relaxed">महाराष्ट्र राज्य, पुणे</p>
              </div>
            </div>
          </div>
        </div>

        {/* SP Officers */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 md:gap-8">
          {officers.filter((o) => o.type === "sp").map((officer) => (
            <div
              key={officer.id}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg transition-all duration-300 overflow-hidden border-[10px] border-blue-500 dark:border-blue-400 group transform"
            >
              <div className="p-4 sm:p-6">
                <div className="relative mb-2 sm:mb-3">
                  <div className="w-full h-40 sm:h-48 rounded-xl overflow-hidden shadow-lg bg-gradient-to-br from-blue-100 to-blue-200 dark:from-gray-700 dark:to-gray-800 border-2 border-white ring-2 dark:ring-gray-600 flex items-center justify-center">
                    {officer.image ? (
                      <img src={officer.image} alt={t(officer.name)} className="w-full h-full object-cover" />
                    ) : (
                      <Shield className="w-12 h-12 sm:w-16 sm:h-16 text-blue-500 dark:text-blue-300" />
                    )}
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-500 dark:to-blue-600 rounded-full p-1 sm:p-2 shadow-lg">
                    <Badge className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                  </div>
                </div>

                <div className="space-y-2 sm:space-y-3">
                  <h4 className="font-bold text-slate-800 dark:text-gray-100 text-base sm:text-lg leading-tight transition-colors duration-300">
                    {t(officer.name)}
                  </h4>

                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-700 dark:to-gray-800 rounded-lg p-2 sm:p-3 border-l-4 border-blue-400 dark:border-blue-600 shadow-inner">
                    <p className="text-xs sm:text-sm md:text-base font-medium text-slate-700 dark:text-gray-300 leading-relaxed">
                      {t(officer.position)}
                    </p>
                  </div>

                  {officer.location && (
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-700 dark:to-gray-800 rounded-lg p-2 sm:p-3 border border-blue-200 dark:border-gray-600 flex items-center space-x-2 text-slate-700 dark:text-gray-300 text-xs sm:text-sm">
                      <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-white bg-blue-600 dark:bg-blue-500 rounded-full p-0.5 sm:p-1" />
                      <span className="font-medium">{t(officer.location)}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default OrganisationStructure;
