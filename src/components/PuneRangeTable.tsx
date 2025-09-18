import React from "react";
import { useLanguageContext } from "@/context/LanguageContext";

const PuneRangeTable = () => {
  const { language } = useLanguageContext();

  const data = [
    { sr: 1, commissionerate: { marathi: "पुणे शहर", english: "Pune City" }, officerName: { marathi: "अमित कुमार लिगडे", english: "Amit Kumar Ligade" }, contact: "8275304090" },
    { sr: 2, commissionerate: { marathi: "पिंपरी चिंचवड", english: "Pimpri Chinchwad" }, officerName: { marathi: "पी.एस. बवसकर (अतिरिक्त चार्ज)", english: "P.S.Bawaskar (addl. Charge)" }, contact: "9552352323" },
    { sr: 3, commissionerate: { marathi: "सोलापूर शहर", english: "Solapur City" }, officerName: { marathi: "महेष काळे", english: "Mahesh Kale" }, contact: "9823036560" },
    { sr: 4, commissionerate: { marathi: "पुणे ग्रामीण", english: "Pune Rural" }, officerName: { marathi: "मंगेश पाटील", english: "Mangesh Patil" }, contact: "8108970707" },
    { sr: 5, commissionerate: { marathi: "सातारा", english: "Satara" }, officerName: { marathi: "", english: "" }, contact: "" },
    { sr: 6, commissionerate: { marathi: "सांगली", english: "Sangli" }, officerName: { marathi: "", english: "" }, contact: "" },
    { sr: 7, commissionerate: { marathi: "कोल्हापूर", english: "Kolhapur" }, officerName: { marathi: "सुरजीत सिंह राजपूत", english: "Surjit Sihn Rajput" }, contact: "9923450059" },
    { sr: 8, commissionerate: { marathi: "सोलापूर ग्रामीण", english: "Solapur Rural" }, officerName: { marathi: "", english: "" }, contact: "" },
    { sr: 9, commissionerate: { marathi: "अहिल्यानगर", english: "Ahilyanagar" }, officerName: { marathi: "प्रेमदीप माने", english: "Premdeep Mane" }, contact: "9960832345" },
    { sr: 10, commissionerate: { marathi: "एसआरपीएफ ग्रुप 1, पुणे", english: "SRPF Group 1. Pune" }, officerName: { marathi: "स्नेहलराज पाटील", english: "Snehlraj Patil" }, contact: "9923107626" },
    { sr: 11, commissionerate: { marathi: "एसआरपीएफ ग्रुप 2, पुणे", english: "SRPF Group 2. Pune" }, officerName: { marathi: "दत्तात्रय भोंगले", english: "Dattatraya Bhongale" }, contact: "9960840223" },
    { sr: 12, commissionerate: { marathi: "एसआरपीएफ ग्रुप 5, दौंड", english: "SRPF Group 5.Dound" }, officerName: { marathi: "अविनाश हराळ", english: "Avinash Haral" }, contact: "8308041041" },
    { sr: 13, commissionerate: { marathi: "एसआरपीएफ ग्रुप 7, दौंड", english: "SRPF Group 7.Dound" }, officerName: { marathi: "मोहमद वरुम", english: "Mohammad Warum" }, contact: "9823778630" },
    { sr: 14, commissionerate: { marathi: "एसआरपीएफ ग्रुप 10, सोलापूर", english: "SRPF Group 10. Solapur" }, officerName: { marathi: "अंबर निमबाळकर", english: "Amber Nimbalkar" }, contact: "9870015252" },
    { sr: 15, commissionerate: { marathi: "एसआरपीएफ ग्रुप 19, कुसडगाव", english: "SRPF Group 19.Kusadgaon" }, officerName: { marathi: "", english: "" }, contact: "" },
    { sr: 16, commissionerate: { marathi: "पुणे वर्कशॉप", english: "Pune W/Shop" }, officerName: { marathi: "पर्शु बवसकर", english: "Parshu Bawaskar" }, contact: "9552352323" },
    { sr: 17, commissionerate: { marathi: "ट्रेनिंग सेंटर", english: "Training Center" }, officerName: { marathi: "अमोल तपसे", english: "Amol Tapase" }, contact: "9552560082" },
    { sr: 18, commissionerate: { marathi: "बॉडी बिल्डिंग सेक्शन, पुणे", english: "Body Building Section, Pune" }, officerName: { marathi: "अबरार सय्यद", english: "Abrar Sayad" }, contact: "9823186786" },
  ];

  return (
    <div className="py-12 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h1 className="text-3xl md:text-4xl font-bold text-center text-black mb-8">
          {language === "marathi" ? "पुणे रेंज" : "PUNE RANGE"}
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
                  {language === "marathi" ? "कमिशनरेट" : "Commissionerate"}
                </th>
                <th className="px-4 py-3 text-white font-semibold text-left border-r border-blue-500">
                  {language === "marathi" ? "अधिकाऱ्याचे नाव" : "Officer Name"}
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
                    {language === "marathi" ? row.commissionerate.marathi : row.commissionerate.english}
                  </td>
                  <td className="px-4 py-3 text-gray-900 border-r border-gray-300">
                    {row.officerName.marathi || row.officerName.english || ""}
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

export default PuneRangeTable;
