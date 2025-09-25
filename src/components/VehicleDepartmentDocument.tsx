import React from "react";
import { useLanguageContext } from "@/context/LanguageContext";

const BoatTable = () => {
  const { language } = useLanguageContext();

  const data = [
    {
      district: { marathi: "पालघर", english: "Palghar" },
      gsl12Qty: "0",
      gsl12Boat: { marathi: ["-"], english: ["-"] },
      gsl5Qty: "2",
      gsl5Boat: { marathi: ["तुकाराम", "अशोक"], english: ["Tukaram", "Ashok"] },
      mfl12Qty: "1",
      mfl12Boat: { marathi: ["जीवदानी"], english: ["JivDani"] },
      mfl9Qty: "1",
      mfl9Boat: { marathi: ["कळवा"], english: ["Kalawa"] },
    },
    {
      district: { marathi: "मीरा भाईंदर वसई विरार", english: "Vasai Virar" },
      gsl12Qty: "1",
      gsl12Boat: { marathi: ["शपत"], english: ["Shapat"] },
      gsl5Qty: "2",
      gsl5Boat: { marathi: ["शौर्य", "शक्ती"], english: ["Shaurya", "Shakti"] },
      mfl12Qty: "1",
      mfl12Boat: { marathi: ["-"], english: ["-"] },
      mfl9Qty: "1",
      mfl9Boat: { marathi: ["उटान"], english: ["Uttan"] },
    },
    {
      district: { marathi: "नवी मुंबई", english: "Navi Mumbai" },
      gsl12Qty: "1",
      gsl12Boat: { marathi: ["कर्नाळा"], english: ["Karnala"] },
      gsl5Qty: "3",
      gsl5Boat: { marathi: ["पातळ गंगा", "शक्ती", "सुरक्षा"], english: ["Patla Ganga", "Shakti", "Suraksha"] },
      mfl12Qty: "1",
      mfl12Boat: { marathi: ["सागराधीश"], english: ["Sagaradhish"] },
      mfl9Qty: "1",
      mfl9Boat: { marathi: ["तरंग"], english: ["Tarang"] },
    },
    {
      district: { marathi: "रायगड", english: "Raigad" },
      gsl12Qty: "0",
      gsl12Boat: { marathi: ["-"], english: ["-"] },
      gsl5Qty: "4",
      gsl5Boat: { marathi: ["कुलाबा", "खांदेरी", "कुंडलिका", "सावित्री"], english: ["Kulaba", "Khanderi", "Kundalika", "Savitri"] },
      mfl12Qty: "1",
      mfl12Boat: { marathi: ["रायगड-४"], english: ["Raigad-4"] },
      mfl9Qty: "1",
      mfl9Boat: { marathi: ["रायगड-२"], english: ["Raigad-2"] },
    },
    {
      district: { marathi: "रत्नागिरी", english: "Ratnagiri" },
      gsl12Qty: "1",
      gsl12Boat: { marathi: ["सागरशक्ती"], english: ["SagarShakti"] },
      gsl5Qty: "4",
      gsl5Boat: { marathi: ["सागरशांती", "भगवती", "सागरकन्या", "सागरसमृद्धी"], english: ["SagarShanti", "Bhagwati", "SagarKanya", "SagarSamruddhi"] },
      mfl12Qty: "1",
      mfl12Boat: { marathi: ["रत्नागिरी-३"], english: ["Ratnagiri-3"] },
      mfl9Qty: "2",
      mfl9Boat: { marathi: ["रत्नागिरी-१", "रत्नागिरी-४"], english: ["Ratnagiri-1", "Ratnagiri-4"] },
    },
    {
      district: { marathi: "सिंधुदुर्ग", english: "Sindhudurg" },
      gsl12Qty: "1",
      gsl12Boat: { marathi: ["कल्याणी"], english: ["Kalyani"] },
      gsl5Qty: "4",
      gsl5Boat: { marathi: ["पंचगंगा", "अप्सरा", "अस्मिता", "सागरकन्या"], english: ["Panchganga", "Apsara", "Asmita", "SagarKanya"] },
      mfl12Qty: "1",
      mfl12Boat: { marathi: ["सिंधुदुर्ग-४"], english: ["Sindhudurg-4"] },
      mfl9Qty: "1",
      mfl9Boat: { marathi: ["सिंधुदुर्ग-२"], english: ["Sindhudurg-2"] },
    },
  ];

  // Helper function to render boat names
  const renderBoatNames = (boat) => {
    if (!boat) return "";
    const names = Array.isArray(boat[language]) ? boat[language].join(", ") : boat[language];
    return names === "-" ? (
      <span className="text-gray-500 italic font-medium">N/A</span>
    ) : (
      <span className="text-gray-800 font-medium">{names}</span>
    );
  };

  // Calculate totals
  const totals = data.reduce(
    (acc, row) => ({
      gsl12: acc.gsl12 + parseInt(row.gsl12Qty || 0),
      gsl5: acc.gsl5 + parseInt(row.gsl5Qty || 0),
      mfl12: acc.mfl12 + parseInt(row.mfl12Qty || 0),
      mfl9: acc.mfl9 + parseInt(row.mfl9Qty || 0),
    }),
    { gsl12: 0, gsl5: 0, mfl12: 0, mfl9: 0 }
  );

  return (
    <div className="min-h-screen bg-gray-50">
     
        {/* Table Title */}
        <div className="flex justify-center mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center">
            {language === "marathi" ? "जहाजांची तपशीलवार माहिती" : "Detailed Information of Boats"}
          </h2>
        </div>
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-green-500">
            <p className="text-sm font-medium text-gray-600">GSL 12 Ton</p>
            <p className="text-2xl font-bold text-green-600">{totals.gsl12}</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-blue-500">
            <p className="text-sm font-medium text-gray-600">GSL 5 Ton</p>
            <p className="text-2xl font-bold text-blue-600">{totals.gsl5}</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-purple-500">
            <p className="text-sm font-medium text-gray-600">MFL 12 Meter</p>
            <p className="text-2xl font-bold text-purple-600">{totals.mfl12}</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-orange-500">
            <p className="text-sm font-medium text-gray-600">MFL 9.5 Meter</p>
            <p className="text-2xl font-bold text-orange-600">{totals.mfl9}</p>
          </div>
        </div>


        {/* Main Table */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              {/* Table Header */}
              <thead className="bg-gray-50">
                <tr>
                  <th rowSpan="2" className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider border-r border-gray-200">
                    {language === "marathi" ? "जिल्ह्याचे नाव" : "District Name"}
                  </th>
                  <th colSpan="4" className="px-6 py-3 text-center text-xs font-bold text-gray-700 uppercase tracking-wider border-r border-gray-200 bg-green-50">
                    GSL - {language === "marathi" ? "गोवा शेफर्ड लिमिटेड" : "Goa Shepherd Limited"}
                  </th>
                  <th colSpan="4" className="px-6 py-3 text-center text-xs font-bold text-gray-700 uppercase tracking-wider bg-purple-50">
                    MFL - {language === "marathi" ? "मरीन फ्रोलय प्रा. लि." : "Marine Frolay Pvt. Ltd."}
                  </th>
                </tr>
                <tr>
                  <th className="px-4 py-3 text-center text-xs font-medium text-gray-600 bg-green-50 border-r border-gray-200">{language === "marathi" ? "१२ टन प्रमाण" : "12 Ton Qty"}</th>
                  <th className="px-4 py-3 text-center text-xs font-medium text-gray-600 bg-green-50 border-r border-gray-200">{language === "marathi" ? "नौकेचे नाव" : "Boat Names"}</th>
                  <th className="px-4 py-3 text-center text-xs font-medium text-gray-600 bg-green-50 border-r border-gray-200">{language === "marathi" ? "५ टन प्रमाण" : "5 Ton Qty"}</th>
                  <th className="px-4 py-3 text-center text-xs font-medium text-gray-600 bg-green-50 border-r border-gray-200">{language === "marathi" ? "नौकेचे नाव" : "Boat Names"}</th>
                  <th className="px-4 py-3 text-center text-xs font-medium text-gray-600 bg-purple-50 border-r border-gray-200">{language === "marathi" ? "१२ मीटर प्रमाण" : "12 Meter Qty"}</th>
                  <th className="px-4 py-3 text-center text-xs font-medium text-gray-600 bg-purple-50 border-r border-gray-200">{language === "marathi" ? "नौकेचे नाव" : "Boat Names"}</th>
                  <th className="px-4 py-3 text-center text-xs font-medium text-gray-600 bg-purple-50 border-r border-gray-200">{language === "marathi" ? "९.५ मीटर प्रमाण" : "9.5 Meter Qty"}</th>
                  <th className="px-4 py-3 text-center text-xs font-medium text-gray-600 bg-purple-50">{language === "marathi" ? "नौकेचे नाव" : "Boat Names"}</th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody className="bg-white divide-y divide-gray-200">
                {data.map((row, index) => (
                  <tr key={index} className={`${index % 2 === 0 ? "bg-white" : "bg-gray-50"} hover:bg-blue-50 transition-colors`}>
                    <td className="px-6 py-4 whitespace-nowrap border-r border-gray-200">
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                        <span className="text-sm font-semibold text-gray-900">{row.district[language]}</span>
                      </div>
                    </td>
                    <td className="px-4 py-4 text-center border-r border-gray-200">{row.gsl12Qty}</td>
                    <td className="px-4 py-4 text-center border-r border-gray-200">{renderBoatNames(row.gsl12Boat)}</td>
                    <td className="px-4 py-4 text-center border-r border-gray-200">{row.gsl5Qty}</td>
                    <td className="px-4 py-4 text-center border-r border-gray-200">{renderBoatNames(row.gsl5Boat)}</td>
                    <td className="px-4 py-4 text-center border-r border-gray-200">{row.mfl12Qty}</td>
                    <td className="px-4 py-4 text-center border-r border-gray-200">{renderBoatNames(row.mfl12Boat)}</td>
                    <td className="px-4 py-4 text-center border-r border-gray-200">{row.mfl9Qty}</td>
                    <td className="px-4 py-4 text-center">{renderBoatNames(row.mfl9Boat)}</td>
                  </tr>
                ))}
              </tbody>

              {/* Table Footer */}
              <tfoot className="bg-gray-100 border-t-2 border-gray-300">
                <tr>
                  <td className="px-6 py-4 text-sm font-bold text-gray-800 border-r border-gray-300">{language === "marathi" ? "एकूण" : "TOTAL"}</td>
                  <td className="px-4 py-4 text-center border-r border-gray-300">{totals.gsl12}</td>
                  <td className="px-4 py-4 text-center border-r border-gray-300">-</td>
                  <td className="px-4 py-4 text-center border-r border-gray-300">{totals.gsl5}</td>
                  <td className="px-4 py-4 text-center border-r border-gray-300">-</td>
                  <td className="px-4 py-4 text-center border-r border-gray-300">{totals.mfl12}</td>
                  <td className="px-4 py-4 text-center border-r border-gray-300">-</td>
                  <td className="px-4 py-4 text-center border-r border-gray-300">{totals.mfl9}</td>
                  <td className="px-4 py-4 text-center">-</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoatTable;
