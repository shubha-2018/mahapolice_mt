import React from "react";
import { Users, Building2, MapPin, Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/hooks/useLanguage"; // ✅ shared hook

const OrganizationalChart = () => {
  const { language, toggleLanguage } = useLanguage(); // ✅ global language
  const navigate = useNavigate();

  const organizationData = {
    headquarters: {
      title: { marathi: "SPMT HQ", english: "SPMT Headquarters" },
      fullName: {
        marathi: "राज्य पोलिस मोटर परिवहन मुख्यालय",
        english: "State Police Motor Transport Headquarters",
      },
      location: { marathi: "मुंबई", english: "Mumbai" },
    },
    mainStructure: [
      {
        id: "addl_dg",
        title: { marathi: "ADDL DG", english: "ADDL DG" },
        fullName: {
          marathi: "अतिरिक्त पोलिस महासंचालक",
          english: "Additional Director General",
        },
        color: "from-red-500 to-red-700",
      },
      {
        id: "igp_mt",
        title: { marathi: "IGP MT", english: "IGP MT" },
        fullName: {
          marathi: "पोलिस महानिरीक्षक (मोटर परिवहन)",
          english: "Inspector General of Police (Motor Transport)",
        },
        color: "from-blue-500 to-blue-700",
      },
      {
        id: "dig_mt",
        title: { marathi: "DIG MT", english: "DIG MT" },
        fullName: {
          marathi: "पोलिस उप महानिरीक्षक (मोटर परिवहन)",
          english: "Deputy Inspector General (Motor Transport)",
        },
        color: "from-green-500 to-green-700",
      },
    ],
    ranges: [
      {
        id: "konkan",
        title: { marathi: "SPMT कोकण परिक्षेत्र", english: "SPMT KONKAN RANGE" },
        location: { marathi: "अप्पर पोलीस अधीक्षक कोकण परिक्षेत्र", english: "Konkan" },
        position: {
          marathi: "श्री तुषार देशमुख",
          english: "Tushar Deshmukh",
        },
        color: "from-purple-500 to-purple-700",
      },
      {
        id: "pune",
        title: { marathi: "SPMT पुणे परिक्षेत्र", english: "SPMT PUNE RANGE" },
        location: { marathi: "अप्पर पोलीस अधीक्षक पुणे परिक्षेत्र", english: "Pune" },
        position: {
          marathi: "श्री तुषार देशमुख",
          english: "Pune, Satara, Sangli, Kolhapur",
        },
        color: "from-indigo-500 to-indigo-700",
      },
      {
        id: "nagpur",
        title: { marathi: "SPMT नागपूर परिक्षेत्र", english: "SPMT NAGPUR RANGE" },
        location: { marathi: "अप्पर पोलीस अधीक्षक नागपूर परिक्षेत्र", english: "Nagpur" },
        position: {
          marathi: "श्री संदीप शिंदे",
          english: "Nagpur, Wardha, Chandrapur, Gadchiroli",
        },
        color: "from-teal-500 to-teal-700",
      },
      {
        id: "cs_nagar",
        title: { marathi: "SPMT छ.स. नगर परिक्षेत्र", english: "SPMT CS NAGAR RANGE" },
        location: { marathi: "अप्पर पोलीस अधीक्षक संभाजीनगर परिक्षेत्र", english: "Chhatrapati Sambhajinagar" },
        position: {
          marathi: "श्री संदीप शिंदे",
          english: "C.S.Nagar, Jalna, Parbhani, Hingoli",
        },
        color: "from-orange-500 to-orange-700",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* ✅ Language Toggle Button */}
      
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 py-14 text-center relative">
        <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
          <Shield className="w-5 h-5 text-white mr-2" />
          <span className="text-white text-sm font-medium">
            {language === "marathi" ? "महाराष्ट्र पोलिस" : "Maharashtra Police"}
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 mb-6 drop-shadow-lg animate-pulse">
          {language === "marathi" ? "संघटना चार्ट" : "Organizational Chart"}
        </h1>
        <p className="text-blue-200 text-medium">
          {language === "marathi"
            ? "राज्य पोलिस मोटर परिवहन विभागाची संघटन रचना"
            : "State Police Motor Transport Department Organizational Structure"}
        </p>
      </div>

      {/* Horizontal Structure */}
      <div className="container mx-auto px-4 py-16">
        {/* HQ */}
        <div className="flex justify-center mb-12">
          <div className="bg-gradient-to-r from-red-600 to-red-800 text-white rounded-2xl p-8 shadow-xl text-center w-72">
            <Building2 className="w-12 h-12 mx-auto mb-3" />
            <h2 className="text-lg font-bold mb-1">
              {organizationData.headquarters.fullName[language]}
            </h2>
            <div className="flex items-center justify-center text-red-100">
              <MapPin className="w-4 h-4 mr-1" />
              <span>{organizationData.headquarters.location[language]}</span>
            </div>
          </div>
        </div>

        {/* Main Leadership */}
        <div className="flex justify-center space-x-10 relative mb-20">
          {organizationData.mainStructure.map((position) => (
            <div
              key={position.id}
              className={`bg-gradient-to-r ${position.color} text-white rounded-xl shadow-lg p-6 w-64 text-center`}
            >
              <Users className="w-8 h-8 mx-auto mb-2" />
              <h3 className="font-bold">{position.title[language]}</h3>
              <p className="text-sm opacity-90">{position.fullName[language]}</p>
            </div>
          ))}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-300 -z-10"></div>
        </div>

        {/* Regional Ranges Grid */}
        <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">
          {language === "marathi" ? "प्रादेशिक परिक्षेत्र" : "Regional Ranges"}
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 place-items-center">
          {organizationData.ranges.map((range) => (
            <div
              key={range.id}
              onClick={() => navigate(`/range/${range.id}`)}
              className="cursor-pointer bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className={`bg-gradient-to-r ${range.color} p-5 rounded-t-2xl text-white`}>
                <Building2 className="w-8 h-8 mb-2" />
                <h4 className="font-bold">{range.title[language]}</h4>
                <div className="flex items-center text-sm opacity-90">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span>{range.location[language]}</span>
                </div>
              </div>
              <div className="p-5">
                <h5 className="font-semibold text-gray-800 mb-2 flex flex-wrap gap-2">
                  <span>{language === "marathi" ? "नाव:" : "Name:"}</span>
                  <span className="mr-4">{range.position[language]}</span>
                </h5>
                <p className="text-sm text-gray-600">
                  {language === "marathi" ? range.location.marathi : range.location.english}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Extra Card */}
        <div className="flex justify-center mt-8">
          <div
            onClick={() => navigate("/extra-card")}
            className="cursor-pointer bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 w-64"
          >
            <div className="bg-gradient-to-r from-pink-500 to-red-500 p-5 rounded-t-2xl text-white">
              <Building2 className="w-8 h-8 mb-2" />
              <h4 className="font-bold">
                {language === "marathi" ? "SPMT बृहमुंबई  परिक्षेत्र" : "New Card"}
              </h4>
              <div className="flex items-center text-sm opacity-90">
                <MapPin className="w-4 h-4 mr-1" />
                <span>{language === "marathi" ? "मुंबई" : "New Location"}</span>
              </div>
            </div>
            <div className="p-5">
              <h5 className="font-semibold text-gray-800 mb-2">
                {language === "marathi" ? "नाव:" : "Name:"} <span>श्री नवीन अधिकारी</span>
              </h5>
              <p className="text-sm text-gray-600">
                {language === "marathi" ? "नवीन कार्यालय" : "New Office"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrganizationalChart;
