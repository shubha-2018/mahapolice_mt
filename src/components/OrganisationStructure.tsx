import React from "react";
import { Shield, MapPin, Star } from "lucide-react";
import { useLanguageContext } from "@/context/LanguageContext";

const OrganisationStructure = () => {
  const { language } = useLanguageContext();

  // Mock image for DIGP MT, PUNE
  const digpImage =
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='250' viewBox='0 0 200 250'%3E%3Crect width='200' height='250' fill='%23f8fafc'/%3E%3Crect x='50' y='40' width='100' height='120' fill='%232563eb' rx='10'/%3E%3Ccircle cx='100' cy='80' r='25' fill='white'/%3E%3Crect x='75' y='110' width='50' height='40' fill='white' rx='5'/%3E%3Ctext x='100' y='200' font-family='Arial, sans-serif' font-size='14' font-weight='bold' text-anchor='middle' fill='%231e293b'%3EDIGP MT, PUNE%3C/text%3E%3C/svg%3E";

  const officers = [
    {
      id: 1,
      name: { marathi: "एसपी एमटी पुणे रेंज", english: "SP MT Pune Range" },
      position: { marathi: "वरिष्ठ पोलीस अधिकारी", english: "Senior Police Officer" },
      location: { marathi: "पुणे रेंज", english: "Pune Range" },
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='280' height='200'%3E...",
    },
    {
      id: 2,
      name: { marathi: "एसपी एमटी च. संभाजी नगर रेंज", english: "SP MT CH.Sambhaji Nagar Range" },
      position: { marathi: "वरिष्ठ पोलीस अधिकारी", english: "Senior Police Officer" },
      location: { marathi: "संभाजी नगर रेंज", english: "Sambhaji Nagar Range" },
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='280' height='200'%3E...",
    },
    {
      id: 3,
      name: { marathi: "एसपी एमटी नागपूर रेंज", english: "SP MT Nagpur Range" },
      position: { marathi: "वरिष्ठ पोलीस अधिकारी", english: "Senior Police Officer" },
      location: { marathi: "नागपूर रेंज", english: "Nagpur Range" },
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='280' height='200'%3E...",
    },
    {
      id: 4,
      name: { marathi: "एसपी एमटी कोकण रेंज", english: "SP MT Kokan Range" },
      position: { marathi: "वरिष्ठ पोलीस अधिकारी", english: "Senior Police Officer" },
      location: { marathi: "कोकण रेंज", english: "Kokan Range" },
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='280' height='200'%3E...",
    },
    {
      id: 5,
      name: { marathi: "एसपी एमटी मुख्यालय, पुणे", english: "SP MT Head Quarter, Pune" },
      position: { marathi: "वरिष्ठ पोलीस अधिकारी", english: "Senior Police Officer" },
      location: { marathi: "मुख्यालय, पुणे", english: "Head Quarter, Pune" },
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='280' height='200'%3E...",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Organisation Structure Section */}
      <section className="py-8 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-3">
            {language === "marathi"
              ? "संघटनात्मक रचना"
              : "ORGANISATIONAL STRUCTURE"}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1 - ADDL.DGP */}
            <div className="group relative">
              <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-500 p-6 border border-gray-100 hover:border-blue-200 transform hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative mb-4 mx-auto w-36 h-48 rounded-lg overflow-hidden bg-gradient-to-br from-blue-500 to-indigo-600 shadow-md group-hover:shadow-blue-300/50 flex items-center justify-center text-white font-semibold text-base">
                  <div className="text-center">
                    <div className="w-12 h-12 mx-auto mb-2 bg-white/20 rounded-full flex items-center justify-center">
                      <Shield className="w-6 h-6" />
                    </div>
                    <p>ADDL.DGP</p>
                  </div>
                </div>
                <div className="text-center relative z-10">
                  <h3 className="text-lg font-bold text-gray-800 mb-1 group-hover:text-blue-700">
                    {language === "marathi" ? "अति. डीजीपी छायाचित्र" : "ADDL.DGP IMAGE"}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {language === "marathi"
                      ? "पोलीस अति. महासंचालक"
                      : "Additional Director General of Police"}
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 - SPL.IGP MT */}
            <div className="group relative">
              <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-500 p-6 border border-gray-100 hover:border-indigo-200 transform hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative mb-4 mx-auto w-36 h-48 rounded-lg overflow-hidden bg-gradient-to-br from-indigo-500 to-purple-600 shadow-md group-hover:shadow-indigo-300/50 flex items-center justify-center text-white font-semibold text-base">
                  <div className="text-center">
                    <div className="w-12 h-12 mx-auto mb-2 bg-white/20 rounded-full flex items-center justify-center">
                      <Shield className="w-6 h-6" />
                    </div>
                    <p>SPL.IGP MT</p>
                  </div>
                </div>
                <div className="text-center relative z-10">
                  <h3 className="text-lg font-bold text-gray-800 mb-1 group-hover:text-indigo-700">
                    {language === "marathi" ? "विशेष आयजीपी छायाचित्र" : "SPL.IGP MT IMAGE"}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {language === "marathi"
                      ? "विशेष पोलीस महानिरीक्षक - मोटर ट्रान्सपोर्ट"
                      : "Special Inspector General of Police - Motor Transport"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Officer Section */}
      <section className="p-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-black mb-2">
              {language === "marathi" ? "तांत्रिक अधिकारी" : "TECHNICAL OFFICER"}
            </h1>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>

          {/* DIGP Section */}
          <div className="text-center mb-12">
            <div className="bg-white rounded-lg shadow-md p-4 w-64 mx-auto border">
              <div className="w-44 h-48 mx-auto mb-4 overflow-hidden rounded-lg shadow-md bg-gray-100">
                <img
                  src={digpImage}
                  alt="DIGP MT, PUNE"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-2">
                <h2 className="text-lg font-bold text-gray-800">
                  DIGP MT, PUNE
                </h2>
                <div className="inline-flex items-center gap-2 bg-blue-100 px-3 py-1 rounded-full">
                  <Star className="w-3 h-3 text-blue-600" />
                  <span className="text-blue-800 font-medium text-xs">
                    {language === "marathi" ? "उप पोलीस महानिरीक्षक" : "Deputy Inspector General"}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Officers Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {officers.map((officer) => (
              <div
                key={officer.id}
                className="bg-white rounded-lg shadow-md border overflow-hidden"
              >
                <div className="h-48 overflow-hidden bg-gray-100">
                  <img
                    src={officer.image}
                    alt={language === "marathi" ? officer.name.marathi : officer.name.english}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5 space-y-3">
                  <h3 className="font-bold text-gray-800 text-lg leading-tight">
                    {language === "marathi" ? officer.name.marathi : officer.name.english}
                  </h3>
                  <div className="space-y-2">
                    <div className="inline-flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-full">
                      <Star className="w-3 h-3 text-blue-600" />
                      <span className="text-sm font-medium text-gray-700">
                        {language === "marathi" ? officer.position.marathi : officer.position.english}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPin className="w-4 h-4 text-red-500" />
                      <span className="text-sm">
                        {language === "marathi" ? officer.location.marathi : officer.location.english}
                      </span>
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
