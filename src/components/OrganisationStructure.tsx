import React from "react";
import { Shield, MapPin, Star, Users, Badge } from "lucide-react"; 
import { useLanguageContext } from "@/context/LanguageContext";

// Import your images
import id1 from "@/assets/images/Tushar-Deshmukh.jpg";
import id3 from "@/assets/images/sandip_shinde.jpg";
import id0 from "@/assets/images/Deepak_IPS.jpeg";
import id7 from "@/assets/images/Ashok_morale.jpeg";

const OrganisationStructure = () => {
  const { language } = useLanguageContext();
  const t = (textObj: { marathi: string; english: string }) =>
    language === "marathi" ? textObj.marathi : textObj.english;

  const digpImage = "https://pbs.twimg.com/media/Do2CbyMXUAAbkN4.jpg";

  const officers = [
    {
      id: 1,
      type: "splIgp",
      name: { marathi: "श्री. दीपक शिवानंद पाण्डेय्", english: "Shri. Deepak Shivananad Pandey" },
      position: {
        marathi: (
          <>
            (भा.पो.से.)<br />
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
      id: 2,
      type: "splIgp",
      name: { marathi: "श्री अशोक मोराळे", english: "Shri. Ashok Morale" },
      position: {
        marathi: (
          <>
            (IPS)<br />
            विशेष पोलिस महानिरीक्षक <br />
            मोटार परिवहन विभाग <br />
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
      name: { marathi: "श्री तुषार देशमुख", english: "Shri Tushar Deshmukh" },
      position: {
        marathi: "अप्पर पोलीस अधीक्षक पुणे परिक्षेत्र",
        english: "Additional Superintendent of Police, Pune Range",
      },
      location: { marathi: "पुणे परिक्षेत्र", english: "Pune Range" },
      image: id1,
    },
    {
      id: 4,
      type: "sp",
      name: { marathi: "श्री संदीप शिंदे", english: "Shri Sandip Shinde" },
      position: {
        marathi: "अप्पर पोलीस अधीक्षक संभाजीनगर परिक्षेत्र (अति. कार्यभार)",
        english: "Additional Superintendent of Police, CH. Sambhaji Nagar Range (Additional Charge)",
      },
      location: { marathi: "संभाजी नगर परिक्षेत्र", english: "Sambhaji Nagar Range" },
      image: id3,
    },
    {
      id: 5,
      type: "sp",
      name: { marathi: "श्री संदीप शिंदे", english: "Shri Sandip Shinde" },
      position: {
        marathi: "अप्पर पोलीस अधीक्षक नागपूर परिक्षेत्र",
        english: "Additional Superintendent of Police, Nagpur Range",
      },
      location: { marathi: "नागपूर परिक्षेत्र", english: "Nagpur Range" },
      image: null,
    },
    {
      id: 6,
      type: "sp",
      name: { marathi: "श्री तुषार देशमुख", english: "Shri Tushar Deshmukh" },
      position: {
        marathi: "अप्पर पोलीस अधीक्षक कोकण परिक्षेत्र (अति. कार्यभार)",
        english: "Additional Superintendent of Police, Kokan Range (Additional Charge)",
      },
      location: { marathi: "कोकण परिक्षेत्र", english: "Kokan Range" },
      image: null,
    },
    {
      id: 7,
      type: "sp",
      name: { marathi: "श्रीमती गायत्री पवार", english: "Gayatri Pawar" },
      position: {
        marathi: "पोलीस अधीक्षक मुख्यालय पुणे",
        english: "Superintendent of Police, Headquarters, Pune",
      },
      location: { marathi: "मुख्यालय, पुणे", english: "Headquarters, Pune" },
      image: null,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-950 transition-colors duration-500">

      {/* Organisation Structure Section */}
      <section className="py-12 px-4 sm:px-6 md:px-8 lg:px-16">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-3 mb-4 sm:mb-6">
            <div className="bg-blue-600 dark:bg-blue-500 rounded-full p-2">
              <Users className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-800 to-indigo-800 bg-clip-text text-transparent dark:from-blue-400 dark:to-indigo-400">
              {t({ marathi: "संघटनात्मक रचना", english: "ORGANISATIONAL STRUCTURE" })}
            </h2>
          </div>
          <div className="w-24 sm:w-32 h-1.5 bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-600 dark:from-blue-400 dark:via-indigo-400 mx-auto rounded-full mb-4 sm:mb-6"></div>
          <p className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-300 max-w-md sm:max-w-3xl mx-auto leading-relaxed">
            {t({
              marathi: "महाराष्ट्र राज्य पोलिस मोटार परिवहन विभागाची संघटनात्मक रचना",
              english: "Organizational hierarchy of Maharashtra State Police Motor Transport Department showcasing our leadership structure",
            })}
          </p>
        </div>

        {/* SPL.IGP Cards */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {officers.filter((o) => o.type === "splIgp").map((officer) => (
              <div
                key={officer.id}
                className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl p-4 sm:p-6 border border-blue-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-600 transform hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative mb-4 sm:mb-6 mx-auto w-36 h-40 sm:w-40 sm:h-48 rounded-xl overflow-hidden shadow-lg ring-2 ring-blue-100 dark:ring-gray-600 group-hover:ring-blue-300 transition-all duration-300">
                  <img
                    src={officer.image}
                    alt={t(officer.name)}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-gray-100 mb-1 sm:mb-2 group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {t(officer.name)}
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-700 dark:to-gray-800 p-2 sm:p-3 rounded-lg border-l-4 border-blue-400 dark:border-blue-600 shadow-inner">
                    {t(officer.position)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Officer Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-white via-slate-50 to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          {/* DIGP Section */}
          <div className="text-center mb-12 sm:mb-20">
            <div className="inline-block">
              <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-6 sm:p-10 border border-slate-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-500 group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 via-indigo-50/30 to-blue-50/50 dark:from-gray-700/50 dark:via-gray-800/30 dark:to-gray-900/50 rounded-3xl"></div>
                <div className="relative mb-6 sm:mb-8 group-hover:scale-105 transition-transform duration-500">
                  <div className="w-36 sm:w-44 h-40 sm:h-48 mx-auto rounded-3xl overflow-hidden shadow-lg bg-gradient-to-br from-purple-100 to-indigo-100 dark:from-gray-700 dark:to-gray-800 border-4 border-white ring-4 sm:ring-8 ring-purple-100/50">
                    <img
                      src={digpImage}
                      alt={t({ marathi: "श्री. अतुल पाटील", english: "Shri. Atul Patil" })}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full p-2 sm:p-4 shadow-lg">
                    <Shield className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                  </div>
                </div>
                <div className="relative space-y-4 sm:space-y-6">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 dark:text-gray-100 group-hover:text-purple-700 dark:group-hover:text-purple-400 transition-colors duration-300">
                    {t({ marathi: "श्री. अतुल पाटील", english: "Shri. Atul Patil" })}
                  </h2>
                  <div className="bg-gradient-to-br from-slate-50 to-purple-50 dark:from-gray-700 dark:to-gray-800 rounded-2xl p-4 sm:p-6 border-l-4 border-purple-500 shadow-inner">
                    <p className="text-sm sm:text-base md:text-lg text-slate-700 dark:text-gray-300 font-semibold leading-relaxed">
                      {t({
                        marathi: "पोलीस उपमहानिरीक्षक मोटार परिवहन महाराष्ट्र राज्य पुणे ",
                        english: "Deputy Inspector General of Police, Motor Transport, Maharashtra State, Pune",
                      })}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* SP MT Officers Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 md:gap-8">
              {officers.filter((o) => o.type === "sp").map((officer) => (
                <div
                  key={officer.id}
                  className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-blue-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-600 group transform hover:-translate-y-1"
                >
                  <div className="p-4 sm:p-6">
                    <div className="relative mb-4 sm:mb-6 group-hover:scale-105 transition-transform duration-300">
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

                    {/* Officer Details */}
                    <div className="space-y-2 sm:space-y-3">
                      <h4 className="font-bold text-slate-800 dark:text-gray-100 text-base sm:text-lg leading-tight group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors duration-300">
                        {t(officer.name)}
                      </h4>

                      <div className="space-y-2">
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
                </div>
              ))}
            </div>
        </div>
      </section>
    </div>
  );
};

export default OrganisationStructure;
