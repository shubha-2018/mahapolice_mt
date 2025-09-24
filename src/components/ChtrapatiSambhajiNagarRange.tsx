import React from "react";
import { useLanguageContext } from "@/context/LanguageContext";

const ChtrapatiSambhajiNagarRange: React.FC = () => {
  const { language } = useLanguageContext();

  const data = [
    { sr: 1, commissionerate: { marathi: "छत्रपती संभाजी नगर", english: "Chhatrapati Sambhaji Nagar" }, officerName: { marathi: "भाऊसाहेब पाटील", english: "Bhausaheb Patil" }, contact: "9823431551" },
    { sr: 2, commissionerate: { marathi: "छत्रपती संभाजी नगर ग्रामीण", english: "Chhatrapati Sambhaji Nagar Rural" }, officerName: { marathi: "संतोष वयचाळ", english: "Santosh Waychal" }, contact: "8888287111" },
    { sr: 3, commissionerate: { marathi: "जालना", english: "Jalna" }, officerName: { marathi: "महेंद्र मोहल", english: "Mahendra Mohol" }, contact: "8830901611" },
    { sr: 4, commissionerate: { marathi: "बीड", english: "Bead" }, officerName: { marathi: "सादिक पठाण", english: "Sadik Pathan" }, contact: "8082467867" },
    { sr: 5, commissionerate: { marathi: "उस्मानाबाद", english: "Usmanabad" }, officerName: { marathi: "", english: "" }, contact: "" },
    { sr: 6, commissionerate: { marathi: "बुलढाणा", english: "Buldhana" }, officerName: { marathi: "गजानन वांखेडे", english: "Gajanan Wankhede" }, contact: "8380093712" },
    { sr: 7, commissionerate: { marathi: "जळगाव", english: "Jalgaon" }, officerName: { marathi: "टायडे", english: "Tayde" }, contact: "9664919990" },
    { sr: 8, commissionerate: { marathi: "हिंगोली", english: "Hingoli" }, officerName: { marathi: "", english: "" }, contact: "" },
    { sr: 9, commissionerate: { marathi: "लातूर", english: "Latur" }, officerName: { marathi: "रामकांत बन्सोडे", english: "Ramakant Bansode" }, contact: "9823089144" },
    { sr: 10, commissionerate: { marathi: "नांदेड", english: "Nanded" }, officerName: { marathi: "दिलीप चोपडे", english: "Dilip Chopade" }, contact: "9158061990" },
    { sr: 11, commissionerate: { marathi: "पारभणी", english: "Parbhani" }, officerName: { marathi: "", english: "" }, contact: "" },
    { sr: 12, commissionerate: { marathi: "धुळे", english: "Dhule" }, officerName: { marathi: "", english: "" }, contact: "" },
    { sr: 13, commissionerate: { marathi: "नंदुरबार", english: "Nandurbar" }, officerName: { marathi: "", english: "" }, contact: "" },
    { sr: 14, commissionerate: { marathi: "एसआरपीएफ ग्रुप 3. जालना", english: "SRPF Group 3. Jalana" }, officerName: { marathi: "", english: "" }, contact: "" },
    { sr: 15, commissionerate: { marathi: "एसआरपीएफ ग्रुप 6. धुळे", english: "SRPF Group 6. Dhule" }, officerName: { marathi: "", english: "" }, contact: "" },
    { sr: 16, commissionerate: { marathi: "एसआरपीएफ ग्रुप 12. हिंगोली", english: "SRPF Group 12. Hingoli" }, officerName: { marathi: "", english: "" }, contact: "" },
    { sr: 17, commissionerate: { marathi: "एसआरपीएफ ग्रुप 14. औरंगाबाद", english: "SRPF Group 14. Aurangabad" }, officerName: { marathi: "", english: "" }, contact: "" },
    { sr: 18, commissionerate: { marathi: "SDRF महाराष्ट्र कॅम्प ऑफिस, धुळे", english: "SDRF Maharashtra camp office, Dhule" }, officerName: { marathi: "", english: "" }, contact: "" },
    { sr: 19, commissionerate: { marathi: "पोलीस प्रशिक्षण केंद्र, जालना", english: "Police training Centre, Jalana" }, officerName: { marathi: "", english: "" }, contact: "" },
    { sr: 20, commissionerate: { marathi: "पोलीस प्रशिक्षण केंद्र, लातूर", english: "Police training Centre, Latur" }, officerName: { marathi: "", english: "" }, contact: "" },
    { sr: 21, commissionerate: { marathi: "पोलीस प्रशिक्षण केंद्र, धुळे", english: "Police training Centre, Dhule" }, officerName: { marathi: "", english: "" }, contact: "" },
    { sr: 22, commissionerate: { marathi: "छत्रपती संभाजी नगर वर्कशॉप", english: "Chhatrapati Sambhaji Nagar w/shop" }, officerName: { marathi: "", english: "" }, contact: "" },
  ];

  return (
    <div className="py-12 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold text-center text-black mb-8">
          {language === "marathi" ? "छत्रपती संभाजीनगर परिक्षेत्र" : "CHTRAPATI SAMBHAJI NAGAR RANGE"}
        </h1>

        {/* Table */}
        <div className="overflow-x-auto shadow-md rounded-lg border border-gray-300">
          <table className="w-full border-collapse">
            {/* Table Header */}
            <thead>
              <tr className="bg-blue-600 text-white">
                <th className="px-4 py-3 text-left border-r border-blue-500">
                  {language === "marathi" ? "क्र.सं." : "Sr.No."}
                </th>
                <th className="px-4 py-3 text-left border-r border-blue-500">
                  {language === "marathi" ? "राज्य राखीव पोलीस दल" : "State Reserve Police Force"}
                </th>
                <th className="px-4 py-3 text-left border-r border-blue-500">
                  {language === "marathi" ? "अधिकाऱ्याचे नाव" : "Officer Name"}
                </th>
                <th className="px-4 py-3 text-left">
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
                  <td className="px-4 py-3 border-r border-gray-300 font-medium text-gray-900">
                    {row.sr}
                  </td>
                  <td className="px-4 py-3 border-r border-gray-300 text-gray-900">
                    {language === "marathi" ? row.commissionerate.marathi : row.commissionerate.english}
                  </td>
                  <td className="px-4 py-3 border-r border-gray-300 text-gray-900">
                    {row.officerName.marathi || row.officerName.english || "-"}
                  </td>
                  <td className="px-4 py-3 text-gray-900">
                    {row.contact || "-"}
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

export default ChtrapatiSambhajiNagarRange;
