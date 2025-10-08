import React from "react";
import { useLanguageContext } from "@/context/LanguageContext";

const PoliceLaunchSection: React.FC = () => {
  const { language } = useLanguageContext();

  const data = [
    { sr: 1, commissionerate: { marathi: "नवी मुंबई शहर", english: "Navi Mumbai City" }, officerName: { marathi: "सचिन दंताल", english: "Sachin Dantal" }, contact: "8108383006" },
    { sr: 2, commissionerate: { marathi: "मीरा भायंदर शहर", english: "Mira Bahindar City" }, officerName: { marathi: "प्रभाकर झेंडे", english: "Prabhakar Zende" }, contact: "9823112469" },
    { sr: 3, commissionerate: { marathi: "पालघर", english: "Palghar" }, officerName: { marathi: "", english: "" }, contact: "" },
    { sr: 4, commissionerate: { marathi: "रायगड", english: "Raigad" }, officerName: { marathi: "", english: "" }, contact: "" },
    { sr: 5, commissionerate: { marathi: "रत्नागिरी", english: "Ratnagiri" }, officerName: { marathi: "", english: "" }, contact: "" },
    { sr: 6, commissionerate: { marathi: "सिंधुदुर्ग", english: "Sindhudurg" }, officerName: { marathi: "", english: "" }, contact: "" },
  ];

  return (
    <section className="py-12 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-8">
          {language === "marathi" ? "पोलीस लाँच सेक्शन" : "POLICE LAUNCH SECTION"}
        </h2>

        {/* Table */}
        <div className="overflow-x-auto border border-gray-300 rounded-md shadow">
          <table className="w-full border-collapse text-center">
            <thead>
              <tr className="bg-blue-700 text-white">
                <th className="px-6 py-3 border-r border-white font-semibold">
                  {language === "marathi" ? "अ.क्र" : "Sr.No."}
                </th>
                <th className="px-6 py-3 border-r border-white font-semibold">
                  {language === "marathi" ? "कमिशनरेट" : "Commissionerate"}
                </th>
                <th className="px-6 py-3 border-r border-white font-semibold">
                  {language === "marathi" ? "अधिकाऱ्याचे नाव" : "Officer Name"}
                </th>
                <th className="px-6 py-3 font-semibold">
                  {language === "marathi" ? "संपर्क क्रमांक" : "Contact Number"}
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => (
                <tr
                  key={row.sr}
                  className={`${index % 2 === 0 ? "bg-gray-100" : "bg-white"}`}
                >
                  <td className="px-6 py-3 border border-gray-300">{row.sr}</td>
                  <td className="px-6 py-3 border border-gray-300 text-gray-800">
                    {language === "marathi" ? row.commissionerate.marathi : row.commissionerate.english}
                  </td>
                  <td className="px-6 py-3 border border-gray-300 text-gray-800">
                    {row.officerName.marathi || row.officerName.english || (
                      <span className="text-red-600 font-medium bg-red-100 px-2 py-1 rounded">
                        {language === "marathi" ? "रिक्त" : "Vacant"}
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-3 border border-gray-300 text-gray-800">
                    {row.contact ? (
                      <a href={`tel:${row.contact}`} className="hover:underline">
                        {row.contact}
                      </a>
                    ) : (
                      "-"
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default PoliceLaunchSection;
