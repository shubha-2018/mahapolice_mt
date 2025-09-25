import React from "react";
import { Shield, MapPin, Calendar } from "lucide-react";
import { useLanguageContext } from "../context/LanguageContext";

const BruhMumbai = () => {
  const { language, toggleLanguage } = useLanguageContext();

  const t = (textObj: { marathi: string; english: string }) =>
    language === "marathi" ? textObj.marathi : textObj.english;

  const officers = [
    {
      id: 1,
      title: { marathi: "अतिरिक्त एसपी एमटी, मुंबई", english: "Additional CP MT, Mumbai" },
      name: { marathi: "श्री राजेश कुमार आयपीएस", english: "Shri Rajesh Kumar IPS" },
      image: "/api/placeholder/300/200",
      department: { marathi: "मुंबई पोलीस", english: "Mumbai Police" },
      zone: { marathi: "महानगर", english: "Metropolitan" },
      contact: "+91-22-2672-0111",
      email: "acp.mt@mumbaipolice.gov.in",
    },
    {
      id: 2,
      title: { marathi: "डीसीपी, एमटी-1", english: "DCP, MT-1" },
      name: { marathi: "श्री अमित शर्मा आयपीएस", english: "Shri Amit Sharma IPS" },
      image: "/api/placeholder/300/200",
      department: { marathi: "मुंबई पोलीस", english: "Mumbai Police" },
      zone: { marathi: "झोन 1", english: "Zone 1" },
      contact: "+91-22-2672-0112",
      email: "dcp.mt1@mumbaipolice.gov.in",
    },
    {
      id: 3,
      title: { marathi: "डीसीपी, एमटी-2", english: "DCP, MT-2" },
      name: { marathi: "श्री प्रदीप सिंह आयपीएस", english: "Shri Pradeep Singh IPS" },
      image: "/api/placeholder/300/200",
      department: { marathi: "मुंबई पोलीस", english: "Mumbai Police" },
      zone: { marathi: "झोन 2", english: "Zone 2" },
      contact: "+91-22-2672-0113",
      email: "dcp.mt2@mumbaipolice.gov.in",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-lg border-b-4 border-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo + Title */}
            <div className="flex items-center space-x-4">
              <div className="bg-blue-600 p-3 rounded-full">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">{t({ marathi: "मुंबई पोलीस", english: "Mumbai Police" })}</h1>
                <p className="text-sm text-gray-600">{t({ marathi: "महानगर विभाग", english: "Metropolitan Division" })}</p>
              </div>
            </div>

            {/* Toggle Button */}
            <button
              onClick={toggleLanguage}
              className="px-4 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
            >
              {language === "marathi" ? "English" : "मराठी"}
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{t({ marathi: "वरिष्ठ अधिकारी निर्देशिका", english: "Senior Officers Directory" })}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t({ marathi: "मुंबई महानगर विभागासाठी वरिष्ठ पोलीस अधिकाऱ्यांशी संपर्क साधा", english: "Connect with our senior police officials for Mumbai Metropolitan Division" })}</p>
          <div className="mt-6 flex items-center justify-center space-x-2">
            <Calendar className="h-5 w-5 text-blue-600" />
            <span className="text-sm text-gray-600">{t({ marathi: "अद्यतनित: सप्टेंबर 2025", english: "Last Updated: September 2025" })}</span>
          </div>
        </div>

        {/* Officers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {officers.map((officer) => (
            <div
              key={officer.id}
              className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-52 sm:h-56 bg-gradient-to-br from-blue-500 to-blue-700 overflow-hidden">
                <img
                  src={officer.image}
                  alt={t(officer.name)}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-bold text-lg">{t(officer.title)}</h3>
                  <p className="text-blue-100 text-sm">{t(officer.name)}</p>
                </div>
              </div>

              {/* Details */}
              <div className="p-5 space-y-4 text-sm">
                <div className="flex items-center space-x-3">
                  <Shield className="h-4 w-4 text-blue-600" />
                  <span>{t(officer.department)}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-4 w-4 text-green-600" />
                  <span>{t(officer.zone)}</span>
                </div>
                <div className="flex flex-col space-y-1">
                  <a href={`tel:${officer.contact}`} className="text-blue-600 hover:text-blue-800">{officer.contact}</a>
                  <a href={`mailto:${officer.email}`} className="text-green-600 hover:text-green-800">{officer.email}</a>
                </div>
                <a href="https://mumbaipolice.gov.in" target="_blank" rel="noopener noreferrer" className="block text-center bg-gradient-to-r from-blue-600 to-blue-700 text-white py-2 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-200">
                  {t({ marathi: "सरकारी वेबसाइट", english: "Government Website" })}
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default BruhMumbai;
