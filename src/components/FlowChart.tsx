import React from "react";
import { Users, Building2, Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/hooks/useLanguage";

const OrganizationalChart = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();

  const organizationData = {
    headquarters: {
      title: { marathi: "SPMT HQ", english: "SPMT Headquarters" },
      fullName: {
        marathi: "राज्य पोलिस मोटार परिवहन मुख्यालय",
        english: "State Police Motor Transport Headquarters",
      },
      location: { marathi: "मुंबई", english: "Mumbai" },
    },
    mainStructure: [
      {
        id: "addl_dg",
        title: { marathi: "", english: "ADDL DG" },
        fullName: {
          marathi:
            "अपर पोलीस महासंचालक व संचालक पोलीस दळणवळण, माहिती तंत्रज्ञान व परिवहन महाराष्ट्र राज्य, पुणे",
          english:
            "Additional Director General of Police And Director, Maharashtra State, Pune",
        },
        color: "from-purple-500 to-purple-700",
      },
      {
        id: "igp_mt",
        title: { marathi: "", english: "IGP MT" },
        fullName: {
          marathi: "विशेष पोलिस महानिरीक्षक मोटार परिवहन महाराष्ट्र राज्य, पुणे",
          english:
            "Special Inspector General of Police, Motor Transport, Maharashtra State, Pune",
        },
        color: "from-blue-500 to-blue-700",
      },
      {
        id: "dig_mt",
        title: { marathi: "", english: "DIG MT" },
        fullName: {
          marathi: "पोलिस उप महानिरीक्षक, मोटार परिवहन महाराष्ट्र राज्य, पुणे",
          english:
            "Deputy Inspector General of Police, Motor Transport, Maharashtra State, Pune",
        },
        color: "from-green-500 to-green-700",
      },
      {
        id: "SP MTHQ",
        title: { marathi: "", english: "SP MTHQ" },
        fullName: {
          marathi: "पोलीस अधीक्षक (मुख्यालय) मोटार परिवहन महाराष्ट्र राज्य पुणे",
          english:
            "Superintendent of Police, Motor Transport, Maharashtra State, Pune",
        },
        color: "from-yellow-400 to-yellow-600",
      },
    ],
    ranges: [
      {
        id: "pune",
        title: {
          marathi: "पोलीस अधीक्षक,पुणे परिक्षेत्र",
          english: "Additional Superintendent of Police, Motor Transport, Pune",
        },
        name: {
          // marathi: "तुषार देशमुख",
          // english: "Tushar Deshmukh",
        },
        description: {
          marathi: " पोलीस अधीक्षक, पुणे परिक्षेत्र",
          english: "Additional Superintendent of Police, Pune Range",
        },
        color: "from-indigo-500 to-indigo-700",
      },
      {
        id: "nagpur",
        title: {
          marathi: "पोलीस अधीक्षक,नागपूर परिक्षेत्र",
          english: "Additional Superintendent of Police, Motor Transport, Nagpur",
        },
        name: {
          // marathi: "श्री संदीप शिंदे",
          // english: "Sandip Shinde",
        },
        description: {
          marathi: " पोलीस अधीक्षक नागपूर परिक्षेत्र",
          english: "Additional Superintendent of Police, Nagpur Range",
        },
        color: "from-teal-500 to-teal-700",
      },
      {
        id: "cs_nagar",
        title: {
          marathi: "पोलीस अधीक्षक, छ.संभाजीनगर परिक्षेत्र",
          english:
            "Additional Superintendent of Police, Motor Transport, C.S.Nagar Range",
        },
        name: {
          // marathi: "श्री संदीप शिंदे",
          // english: "Sandip Shinde",
        },
        description: {
          marathi: " पोलीस अधीक्षक छ.संभाजीनगर परिक्षेत्र ",
          english: "Additional Superintendent of Police, C.S.Nagar Range",
        },
        color: "from-orange-500 to-orange-700",
      },
      {
        id: "konkan",
        title: {
          marathi: "पोलीस अधीक्षक,कोकण परिक्षेत्र",
          english: "Additional Superintendent of Police, Motor Transport, Kokan",
        },
        name: {
          // marathi: "तुषार देशमुख",
          // english: "Tushar Deshmukh",
        },
        description: {
          marathi: " पोलीस अधीक्षक कोकण परिक्षेत्र ",
          english: "Additional Superintendent of Police, Kokan Range",
        },
        color: "from-purple-500 to-purple-700",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-950 transition-colors duration-500">
      
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 dark:from-gray-800 dark:via-gray-900 dark:to-gray-950 py-14 text-center relative">
{/*       
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 mb-4 md:mb-6 drop-shadow-lg animate-pulse">
          {language === "marathi" ? "संघटना चार्ट" : "Organizational Chart"}
        </h1> */}
        <p className="text-3xl sm:text-4xl md:text-5xl text-blue-200 dark:text-blue-300 text-sm sm:text-base md:text-medium">
          {language === "marathi"
            ? "राज्य पोलिस मोटार परिवहन विभागाची परिक्षेत्र निहाय माहिती "
            : "State Police Motor Transport Department Organizational Structure"}
        </p>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* HQ */}
        {/* <div className="flex justify-center mb-12">
          <div className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-700 dark:from-orange-600 dark:via-orange-700 dark:to-orange-800 text-white rounded-2xl p-6 sm:p-8 shadow-xl text-center w-64 sm:w-72">
            <Building2 className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3" />
            <h2 className="text-base sm:text-lg font-bold mb-1">
              {organizationData.headquarters.fullName[language]}
            </h2>
            <div className="flex items-center justify-center text-white/90 text-sm sm:text-base">
              <span>{organizationData.headquarters.location[language]}</span>
            </div>
          </div>
        </div> */}

        {/* Main Leadership */}
       <div className="flex justify-center relative mb-12 sm:mb-20"> 
  <div 
    className="bg-gradient-to-r from-yellow-400 to-yellow-600 dark:from-gray-700 dark:to-gray-800 text-white rounded-xl shadow-lg p-4 sm:p-6 w-full sm:w-64 text-center" 
  > 
    <Users className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2" /> 
    <h3 className="font-bold text-sm sm:text-base md:text-lg"> 
     पोलिस  अधीक्षक,मुख्यालय. 
    </h3> 
    {/* <p className="text-xs sm:text-sm md:text-sm opacity-90"> 
     मोटार परिवहन<br/> महाराष्ट्र राज्य पुणे
    </p>  */}
  </div> 
</div>

        {/* Regional Ranges Grid */}
        <h3 className="text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8 text-gray-800 dark:text-gray-100">
          {language === "marathi" ? " परिक्षेत्र कार्यालय " : "Regional Ranges"}
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
                {range.name && (
                  <p className="text-sm font-semibold text-gray-800 dark:text-gray-100 mb-1 sm:mb-2">
                    {range.name[language]}
                  </p>
                )}
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                  {range.description ? range.description[language] : ""}
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
