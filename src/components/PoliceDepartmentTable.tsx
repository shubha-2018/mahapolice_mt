import React from "react";
import { useLanguageContext } from "@/context/LanguageContext";

const PoliceDepartmentTable = () => {
  const { language } = useLanguageContext();

  // Translation for static text
  const translations = {
    thane: {
      title: { marathi: "पोलीस नौका विभाग, ठाणे", english: "Police Boat Department, Thane" },
      rows: [
        { srNo: "१", post: { marathi: "पोलीस अधीक्षक, म.पो.कोकण परिक्षेत्र, नवी मुंबई", english: "Police Superintendent, M.Po. Konkan Range, Navi Mumbai" }, sanctioned: "१", present: "१", vacant: "०" },
        { srNo: "२", post: { marathi: "अपर पोलीस अधीक्षक, म.पो.नौका विभाग, ठाणे", english: "Asst. Police Superintendent, M.Po. Boat Dept., Thane" }, sanctioned: "१", present: "०", vacant: "१" },
        { srNo: "३", post: { marathi: "पोलीस उप - अधीक्षक, म.पो.नौका विभाग, ठाणे", english: "Deputy Police Superintendent, M.Po. Boat Dept., Thane" }, sanctioned: "२", present: "२", vacant: "०" },
        { srNo: "४", post: { marathi: "पोलीस निरीक्षक, म.पो.नौका विभाग, ठाणे", english: "Police Inspector, M.Po. Boat Dept., Thane" }, sanctioned: "१", present: "०", vacant: "१" },
        { srNo: "५", post: { marathi: "पोलीस उप निरीक्षक, म.पो.नौका विभाग, ठाणे", english: "Sub Inspector, M.Po. Boat Dept., Thane" }, sanctioned: "१", present: "०", vacant: "१" },
      ],
    },
    mumbai: {
      title: { marathi: "पोलीस नौका विभाग, बृहन्मुंबई", english: "Police Boat Department, Mumbai" },
      rows: [
        { srNo: "१", post: { marathi: "अपर पोलीस अधीक्षक, म.पो., बृहन्मुंबई", english: "Asst. Police Superintendent, M.Po., Mumbai" }, sanctioned: "१", present: "१", vacant: "०" },
        { srNo: "२", post: { marathi: "पोलीस उप - अधीक्षक (२), म.पो., बृहन्मुंबई", english: "Deputy Police Superintendent (2), M.Po., Mumbai" }, sanctioned: "१", present: "०", vacant: "१" },
        { srNo: "३", post: { marathi: "पोलीस उप - अधीक्षक (१), म.पो., बृहन्मुंबई", english: "Deputy Police Superintendent (1), M.Po., Mumbai" }, sanctioned: "१", present: "१", vacant: "०" },
        { srNo: "४", post: { marathi: "पोलीस निरीक्षक, म.पो., बृहन्मुंबई", english: "Police Inspector, M.Po., Mumbai" }, sanctioned: "१", present: "१", vacant: "०" },
      ],
    },
    tableHeaders: {
      srNo: { marathi: "अ.क्र.", english: "Sr.No." },
      post: { marathi: "पद", english: "Post" },
      sanctioned: { marathi: "मंजूर", english: "Sanctioned" },
      present: { marathi: "हजर", english: "Present" },
      vacant: { marathi: "रिक्त", english: "Vacant" },
    },
  };

  return (
    <div className="container mx-auto px-4 py-8 space-y-10">
      {/* विभाग 1 - ठाणे */}
      <div>
        <h2 className="text-center text-xl md:text-2xl font-bold mb-4">
          {translations.thane.title[language]}
        </h2>

        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-blue-500 text-white text-center">
              <th className="border px-4 py-2">{translations.tableHeaders.srNo[language]}</th>
              <th className="border px-4 py-2">{translations.tableHeaders.post[language]}</th>
              <th className="border px-4 py-2">{translations.tableHeaders.sanctioned[language]}</th>
              <th className="border px-4 py-2">{translations.tableHeaders.present[language]}</th>
              <th className="border px-4 py-2">{translations.tableHeaders.vacant[language]}</th>
            </tr>
          </thead>
          <tbody>
            {translations.thane.rows.map((row, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "text-center" : "bg-gray-100 text-center"}
              >
                <td className="border px-4 py-2">{row.srNo}</td>
                <td className="border px-4 py-2 text-left">{row.post[language]}</td>
                <td className="border px-4 py-2">{row.sanctioned}</td>
                <td className="border px-4 py-2">{row.present}</td>
                <td className="border px-4 py-2">{row.vacant}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* विभाग 2 - मुंबई */}
      <div>
        <h2 className="text-center text-xl md:text-2xl font-bold mb-4">
          {translations.mumbai.title[language]}
        </h2>

        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-blue-500 text-white text-center">
              <th className="border px-4 py-2">{translations.tableHeaders.srNo[language]}</th>
              <th className="border px-4 py-2">{translations.tableHeaders.post[language]}</th>
              <th className="border px-4 py-2">{translations.tableHeaders.sanctioned[language]}</th>
              <th className="border px-4 py-2">{translations.tableHeaders.present[language]}</th>
              <th className="border px-4 py-2">{translations.tableHeaders.vacant[language]}</th>
            </tr>
          </thead>
          <tbody>
            {translations.mumbai.rows.map((row, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "text-center" : "bg-gray-100 text-center"}
              >
                <td className="border px-4 py-2">{row.srNo}</td>
                <td className="border px-4 py-2 text-left">{row.post[language]}</td>
                <td className="border px-4 py-2">{row.sanctioned}</td>
                <td className="border px-4 py-2">{row.present}</td>
                <td className="border px-4 py-2">{row.vacant}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PoliceDepartmentTable;
