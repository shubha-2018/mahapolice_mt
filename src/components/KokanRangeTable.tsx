import React from "react";
import { useLanguageContext } from "@/context/LanguageContext";

const KokanRangeTable = () => {
  const { language } = useLanguageContext();

  const data = [
    { 
      sr: 1, 
      commissionerate: { marathi: "नवी मुंबई शहर", english: "Navi Mumbai City" }, 
      designation: { marathi: "पोलीस निरीक्षक", english: "Police Inspector" }, 
      officerName: { marathi: "सचिन दंताल", english: "Sachin Dantal" }, 
      contact: "8108383006" 
    },
    { 
      sr: 2, 
      commissionerate: { marathi: "ठाणे शहर", english: "Thane City" }, 
      designation: { marathi: "पोलीस निरीक्षक", english: "Police Inspector" }, 
      officerName: { marathi: "अयाज शेख", english: "Ayaz Shaikh" }, 
      contact: "9803786100" 
    },
    { 
      sr: 3, 
      commissionerate: { marathi: "मीरा भायंदर शहर", english: "Mira Bahindar City" }, 
      designation: { marathi: "पोलीस निरीक्षक", english: "Police Inspector" }, 
      officerName: { marathi: "प्रभाकर झेंडे", english: "Prabhakar Zende" }, 
      contact: "9823112469" 
    },
    { 
      sr: 4, 
      commissionerate: { marathi: "नाशिक शहर", english: "Nashik City" }, 
      designation: { marathi: "पोलीस निरीक्षक", english: "" }, 
      officerName: { marathi: "पंकज पवार", english: "Pankaj Pawar" }, 
      contact: "9923430414" 
    },
    { 
      sr: 5, 
      commissionerate: { marathi: "ठाणे ग्रामीण", english: "Thane Rural" }, 
      designation: { marathi: "पोलीस निरीक्षक", english: "" }, 
      officerName: { marathi: "बाळासाहेब दत्तात्रय झेंडे ", english: "Balasaheb Dattatry Zende" }, 
      contact: "9823112469" 
    },
    { 
      sr: 6, 
      commissionerate: { marathi: "पालघर", english: "Palghar" }, 
      designation: { marathi: "", english: "" }, 
      officerName: { marathi: "", english: "" }, 
      contact: "" 
    },
    { 
      sr: 7, 
      commissionerate: { marathi: "नाशिक ग्रामीण", english: "Nashik Rural" }, 
      designation: { marathi: "पोलीस निरीक्षक", english: "" }, 
      officerName: { marathi: "अनिल घाडगे", english: "Anil Ghadage" }, 
      contact: "9823168900" 
    },
    { 
      sr: 8, 
      commissionerate: { marathi: "रायगड", english: "Raigad" }, 
      designation: { marathi: "पोलीस उपनिरीक्षक", english: "Police Sub Inspector" }, 
      officerName: { marathi: "मुत्सुफा शेख ", english: "Mustufa Shaikh" }, 
      contact: "9881359199" 
    },
    { 
      sr: 9, 
      commissionerate: { marathi: "रत्नागिरी", english: "Ratnagiri" }, 
      designation: { marathi: "", english: "" }, 
      officerName: { marathi: "", english: "" }, 
      contact: "" 
    },
    { 
      sr: 10, 
      commissionerate: { marathi: "सिंधुदुर्ग", english: "Sindhudurg" }, 
      designation: { marathi: "पोलीस उपनिरीक्षक", english: "Police Sub Inspector" }, 
      officerName: { marathi: " प्रदीप चव्हाण ", english: "Pradip Chavan" }, 
      contact: "8108343636" 
    },
    { 
      sr: 11, 
      commissionerate: { marathi: "पोलीस नौका वर्कशॉप", english: "Police Nauka W/Shop" }, 
      designation: { marathi: "पोलीस निरीक्षक", english: "Police Inspector" }, 
      officerName: { marathi: "संतोष डोईफोडे ", english: "Santosh Doephode" }, 
      contact: "9049003537" 
    },
    { 
      sr: 12, 
      commissionerate: { marathi: "एसआरपीएफ ग्रुप 8, मुंबई", english: "SRPF Group 8.Mumbai" }, 
      designation: { marathi: "पोलीस निरीक्षक", english: "Police Inspector" }, 
      officerName: { marathi: "अशोक निमबाळकर", english: "Ashok Nimbalkar" }, 
      contact: "9372928211" 
    },
    { 
      sr: 13, 
      commissionerate: { marathi: "एसआरपीएफ ग्रुप 11, नवी मुंबई", english: "SRPF Group 11. Navi Mumbai" }, 
      designation: { marathi: "पोलीस निरीक्षक", english: "Police Inspector" }, 
      officerName: { marathi: "विठ्ठल बडे", english: "Vitthal Badhe" }, 
      contact: "9773071673" 
    },
  ];

  return (
    <div className="py-12 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h1 className="text-3xl md:text-4xl font-bold text-center text-black mb-8">
          {language === "marathi" ? "पोलीस मोटार  परिवहन कोकण परिक्षेत्र" : "KOKAN RANGE"}
        </h1>

        {/* Table */}
        <div className="overflow-x-auto shadow-md rounded-lg border border-gray-300">
          <table className="w-full border-collapse">
            {/* Table Header */}
            <thead>
              <tr className="bg-blue-600">
                <th className="px-4 py-3 text-white font-semibold text-left border-r border-blue-500">
                  {language === "marathi" ? "क्र.सं." : "Sr.No."}
                </th>
                <th className="px-4 py-3 text-white font-semibold text-left border-r border-blue-500">
                  {language === "marathi" ? "मोटार  परिवहन विभागाचे नाव" : "Commissionerate"}
                </th>
                 <th className="px-4 py-3 text-white font-semibold text-left border-r border-blue-500">
                  {language === "marathi" ? "प्रभारी अधिकाऱ्याचे नाव" : "Officer Name"}
                </th>
                 <th className="px-4 py-3 text-white font-semibold text-left border-r border-blue-500">
                  {language === "marathi" ? "प्रभारी अधिकारी पदनाम" : "Designation"}
                </th>
                
               
               
                <th className="px-4 py-3 text-white font-semibold text-left">
                  {language === "marathi" ? "संपर्क क्रमांक" : "Contact Number"}
                </th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody>
              {data.map((row, index) => (
                <tr
                  key={row.sr}
                  className={`${index % 2 === 0 ? "bg-blue-100" : "bg-white"} border-b border-gray-300`}
                >
                  <td className="px-4 py-3 text-gray-900 border-r border-gray-300 font-medium">
                    {row.sr}
                  </td>
                   <td className="px-4 py-3 text-gray-900 border-r border-gray-300">
                    {language === "marathi" ? row.designation.marathi : row.designation.english}
                  </td>
                  <td className="px-4 py-3 text-gray-900 border-r border-gray-300">
                    {language === "marathi" ? row.commissionerate.marathi : row.commissionerate.english}
                  </td>
                 
                  <td className="px-4 py-3 text-gray-900 border-r border-gray-300">
                    {language === "marathi" ? row.officerName.marathi : row.officerName.english}
                  </td>
                  
                  <td className="px-4 py-3 text-gray-900">
                    {row.contact || ""}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default KokanRangeTable;
