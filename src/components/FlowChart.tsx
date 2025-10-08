import React from "react";
import { Users, Building2 } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";
import { useLanguage } from "@/hooks/useLanguage";

const OrganizationalChart: React.FC = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();

  const organizationData = {
    headquarters: {
      title: { marathi: "SPMT मुख्यालय", english: "SPMT Headquarters" },
      fullName: {
        marathi: "राज्य पोलीस मोटार परिवहन मुख्यालय, मुंबई",
        english: "State Police Motor Transport Headquarters, Mumbai",
      },
      location: { marathi: "मुंबई", english: "Mumbai" },
    },
    mainStructure: [
      {
        id: "addl_dg",
        title: { marathi: "अपर पोलीस महासंचालक", english: "Additional DGP" },
        fullName: {
          marathi:
            "अपर पोलीस महासंचालक व संचालक, पोलीस दळणवळण, माहिती तंत्रज्ञान व परिवहन, महाराष्ट्र राज्य, पुणे",
          english:
            "Additional Director General of Police and Director, Communication, IT & Transport, Maharashtra State, Pune",
        },
        color: "from-purple-500 to-purple-700",
      },
      {
        id: "igp_mt",
        title: { marathi: "विशेष पोलीस महानिरीक्षक", english: "IGP MT" },
        fullName: {
          marathi:
            "विशेष पोलीस महानिरीक्षक, मोटार परिवहन, महाराष्ट्र राज्य, पुणे",
          english:
            "Special Inspector General of Police, Motor Transport, Maharashtra State, Pune",
        },
        color: "from-blue-500 to-blue-700",
      },
      {
        id: "dig_mt",
        title: { marathi: "पोलीस उप महानिरीक्षक", english: "DIG MT" },
        fullName: {
          marathi:
            "पोलीस उप महानिरीक्षक, मोटार परिवहन, महाराष्ट्र राज्य, पुणे",
          english:
            "Deputy Inspector General of Police, Motor Transport, Maharashtra State, Pune",
        },
        color: "from-green-500 to-green-700",
      },
      {
        id: "sp_mthq",
        title: { marathi: "पोलीस अधीक्षक (मुख्यालय)", english: "SP MTHQ" },
        fullName: {
          marathi:
            "पोलीस अधीक्षक (मुख्यालय), मोटार परिवहन, महाराष्ट्र राज्य, पुणे",
          english:
            "Superintendent of Police (Headquarters), Motor Transport, Maharashtra State, Pune",
        },
        color: "from-yellow-400 to-yellow-600",
      },
    ],
    ranges: [
      {
        id: "pune",
        title: {
          marathi: "पोलीस अधीक्षक, पुणे परिक्षेत्र",
          english: "Addl. Superintendent of Police, Motor Transport, Pune",
        },
        description: {
          marathi: "पोलीस अधीक्षक, मोटार परिवहन, पुणे परिक्षेत्र",
          english: "Additional Superintendent of Police, Motor Transport, Pune Range",
        },
        color: "from-indigo-500 to-indigo-700",
      },
      {
        id: "nagpur",
        title: {
          marathi: "पोलीस अधीक्षक, नागपूर परिक्षेत्र",
          english: "Addl. Superintendent of Police, Motor Transport, Nagpur",
        },
        description: {
          marathi: "पोलीस अधीक्षक, मोटार परिवहन, नागपूर परिक्षेत्र",
          english: "Additional Superintendent of Police, Motor Transport, Nagpur Range",
        },
        color: "from-teal-500 to-teal-700",
      },
      {
        id: "cs_nagar",
        title: {
          marathi: "पोलीस अधीक्षक, छत्रपती संभाजीनगर परिक्षेत्र",
          english: "Addl. Superintendent of Police, Motor Transport, C.S. Nagar",
        },
        description: {
          marathi:
            "पोलीस अधीक्षक, मोटार परिवहन, छत्रपती संभाजीनगर परिक्षेत्र",
          english:
            "Additional Superintendent of Police, Motor Transport, C.S. Nagar Range",
        },
        color: "from-orange-500 to-orange-700",
      },
      {
        id: "konkan",
        title: {
          marathi: "पोलीस अधीक्षक, कोकण परिक्षेत्र",
          english: "Addl. Superintendent of Police, Motor Transport, Konkan",
        },
        description: {
          marathi: "पोलीस अधीक्षक, मोटार परिवहन, कोकण परिक्षेत्र",
          english:
            "Additional Superintendent of Police, Motor Transport, Konkan Range",
        },
        color: "from-purple-500 to-purple-700",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-950 transition-colors duration-500">
      
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 py-14 text-center relative">
        <p className="text-3xl sm:text-4xl md:text-5xl text-blue-200 dark:text-blue-300 font-semibold">
          {language === "marathi"
            ? "पोलीस मोटार परिवहन विभागाची  रचना"
            : "Organizational Structure of State Police Motor Transport Department"}
        </p>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* SP Headquarters */}
        <div className="flex justify-center relative mb-12 sm:mb-20">
          <Link to="/unit-dysp" className="w-full sm:w-64">
            <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 dark:from-gray-700 dark:to-gray-800 text-white rounded-xl shadow-lg p-4 sm:p-6 text-center hover:scale-105 transition-transform duration-300 cursor-pointer">
              <Users className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2" />
              <h3 className="font-bold text-sm sm:text-base md:text-lg">
                {language === "marathi"
                  ? "पोलीस अधीक्षक, मुख्यालय"
                  : "Superintendent of Police, HQ"}
              </h3>
            </div>
          </Link>
        </div>

        {/* Regional Ranges */}
        <h3 className="text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8 text-gray-800 dark:text-gray-100">
          {language === "marathi" ? "परिक्षेत्रीय कार्यालये" : "Regional Offices"}
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 place-items-center">
          {organizationData.ranges.map((range) => (
            <div
              key={range.id}
              onClick={() => navigate(`/range/${range.id}`)}
              className="cursor-pointer bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 w-full sm:w-64 flex flex-col"
            >
              <div
                className={`bg-gradient-to-r ${range.color} dark:from-gray-700 dark:to-gray-800 p-4 sm:p-5 rounded-t-2xl text-white`}
              >
                <Building2 className="w-6 h-6 sm:w-8 sm:h-8 mb-2" />
                <h4 className="font-bold text-sm sm:text-base">
                  {range.title[language]}
                </h4>
              </div>
              <div className="p-4 sm:p-5 flex-1 overflow-auto">
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                  {range.description[language]}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrganizationalChart;
