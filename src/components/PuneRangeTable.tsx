import React from "react";
import { useLanguageContext } from "@/context/LanguageContext";

const PuneRangeTable = () => {
  const { language } = useLanguageContext();

  const data = [
    {
      sr: 1,
      commissionerate: { marathi: "मोटार परिवहन विभाग,पुणे शहर", english: "Pune City" },
      officerName: { marathi: "अमित कुमार लिगाडे", english: "Amit Kumar Ligade" },
      designation: { marathi: "पोलीस निरीक्षक", english: "Police Inspector" },
      contact: "8275304090",
      website: "https://punepolice.gov.in/",
    },
    {
      sr: 2,
      commissionerate: { marathi: "मोटार परिवहन विभाग,पिंपरी चिंचवड", english: "Pimpri Chinchwad" },
      officerName: { marathi: "पी.एस.बावसकर (अतिरिक्त चार्ज)", english: "P.S. Bawaskar (Addl. Charge)" },
      designation: { marathi: "पोलीस निरीक्षक", english: "Police Inspector" },
      contact: "9552352323",
      website: "https://pune.police.gov.in/pimpri-chinchwad",  // <-- example specific
    },
    {
      sr: 3,
      commissionerate: { marathi: "मोटार परिवहन विभाग,सोलापूर शहर", english: "Solapur City" },
      officerName: { marathi: "महेश काळे", english: "Mahesh Kale" },
      designation: { marathi: "पोलीस निरीक्षक", english: "Police Inspector" },
      contact: "9823036560",
      website: "https://solapurpolice.gov.in/",  // <-- example specific
    },
    {
      sr: 4,
      commissionerate: { marathi: "मोटार परिवहन विभाग,पुणे ग्रामीण", english: "Pune Rural" },
      officerName: { marathi: "मंगेश पाटील", english: "Mangesh Patil" },
      designation: { marathi: "पोलीस निरीक्षक", english: "Police Inspector" },
      contact: "8108970707",
      website: "https://pune.police.gov.in/rural",  // <-- example specific
    },
    {
      sr: 5,
      commissionerate: { marathi: "मोटार परिवहन विभाग,सातारा", english: "Satara" },
      officerName: { marathi: "राजेंद्र शिंदे", english: "Rajendra Shinde" },
      designation: { marathi: "पोलीस निरीक्षक", english: "Police Inspector" },
      contact: "9823017588",
      website: "https://satarapolice.gov.in/",
    },
    {
      sr: 6,
      commissionerate: { marathi: "मोटार परिवहन विभाग,सांगली", english: "Sangli" },
      officerName: { marathi: "प्रशांत मारुळकर", english: "Prashant Marulkar" },
      designation: { marathi: "पोलीस निरीक्षक", english: "Police Inspector" },
      contact: "9552560091",
      website: "https://sanglipolice.gov.in/",
    },
    {
      sr: 7,
      commissionerate: { marathi: "मोटार परिवहन विभाग,कोल्हापूर", english: "Kolhapur" },
      officerName: { marathi: "सुरजीत सिंह राजपूत", english: "Surjit Singh Rajput" },
      designation: { marathi: "पोलीस निरीक्षक", english: "Police Inspector" },
      contact: "9923450059",
      website: "https://kolhapurpolice.gov.in/",
    },
    {
      sr: 8,
      commissionerate: { marathi: "मोटार परिवहन विभाग,सोलापूर ग्रामीण", english: "Solapur Rural" },
      officerName: { marathi: "सागर खरे", english: "Sagar Khare" },
      designation: { marathi: "पोलीस निरीक्षक", english: "Police Inspector" },
      contact: "7350619991",
      website: "https://solapurpolice.gov.in/rural",
    },
    {
      sr: 9,
      commissionerate: { marathi: "मोटार परिवहन विभाग,अहिल्यानगर", english: "Ahilyanagar" },
      officerName: { marathi: "प्रेमदीप माने", english: "Premdeep Mane" },
      designation: { marathi: "पोलीस निरीक्षक", english: "Police Inspector" },
      contact: "9960832345",
      website: "https://ahilyanagarpolice.gov.in/",
    },
    {
      sr: 10,
      commissionerate: { marathi: "एसआरपीएफ ग्रुप 1, पुणे", english: "SRPF Group 1, Pune" },
      officerName: { marathi: "स्नेहलराज पाटील", english: "Snehlraj Patil" },
      designation: { marathi: "पोलीस निरीक्षक", english: "Police Inspector" },
      contact: "9923107626",
      website: "https://srpf1.pune.police.gov.in/",
    },
    {
      sr: 11,
      commissionerate: { marathi: "एसआरपीएफ ग्रुप 2, पुणे", english: "SRPF Group 2, Pune" },
      officerName: { marathi: "दत्तात्रय भोंगले", english: "Dattatraya Bhongale" },
      designation: { marathi: "पोलीस निरीक्षक", english: "Police Inspector" },
      contact: "9960840223",
      website: "https://srpf2.pune.police.gov.in/",
    },
    {
      sr: 12,
      commissionerate: { marathi: "एसआरपीएफ ग्रुप 5, दौंड", english: "SRPF Group 5, Dound" },
      officerName: { marathi: "अविनाश हराळ", english: "Avinash Haral" },
      designation: { marathi: "पोलीस निरीक्षक", english: "Police Inspector" },
      contact: "8308041041",
      website: "https://srpf5.dound.police.gov.in/",
    },
    {
      sr: 13,
      commissionerate: { marathi: "एसआरपीएफ ग्रुप 7, दौंड", english: "SRPF Group 7, Dound" },
      officerName: { marathi: "मोहम्मद वारुणकर", english: "Mohammad Warumkar" },
      designation: { marathi: "पोलीस निरीक्षक", english: "Police Inspector" },
      contact: "9823778630",
      website: "https://srpf7.dound.police.gov.in/",
    },
    {
      sr: 14,
      commissionerate: { marathi: "एसआरपीएफ ग्रुप 10, सोलापूर", english: "SRPF Group 10, Solapur" },
      officerName: { marathi: "अंबर निंबाळकर", english: "Amber Nimbalkar" },
      designation: { marathi: "पोलीस निरीक्षक", english: "Police Inspector" },
      contact: "9870015252",
      website: "https://srpf10.solapur.police.gov.in/",
    },
    {
      sr: 15,
      commissionerate: { marathi: "एसआरपीएफ ग्रुप 19, कुसडगाव", english: "SRPF Group 19, Kusadgaon" },
      officerName: { marathi: "", english: "" },
      designation: { marathi: "", english: "" },
      contact: "",
      website: "",  // no link
    },
    {
      sr: 16,
      commissionerate: { marathi: "पोलीस मध्यवर्ती मोटर परिवहन कर्मशाळा,पुणे", english: "Pune Workshop" },
      officerName: { marathi: "पी.एस.बावसकर", english: "P.S. Bawaskar" },
      designation: { marathi: "पोलीस निरीक्षक", english: "Police Inspector" },
      contact: "9552352323",
      website: "https://pune.police.gov.in/workshop",
    },
    {
      sr: 17,
      commissionerate: { marathi: "पोलीस चालक प्रशिक्षण केंद्र पुणे", english: "Training Center" },
      officerName: { marathi: "अमोल तपासे", english: "Amol Tapase" },
      designation: { marathi: "पोलीस निरीक्षक", english: "Police Inspector" },
      contact: "9552560082",
      website: "https://pune.police.gov.in/training",
    },
    {
      sr: 18,
      commissionerate: { marathi: "बॉडी बिल्डिंग सेक्शन, पुणे", english: "Body Building Section, Pune" },
      officerName: { marathi: "अबरार सय्यद", english: "Abrar Sayad" },
      designation: { marathi: "पोलीस निरीक्षक", english: "Police Inspector" },
      contact: "9823186786",
      website: "https://pune.police.gov.in/body-building",
    },
  ];

  return (
    <div className="py-12 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-black mb-8">
          {language === "marathi" ? "पोलीस मोटार परिवहन पुणे परिक्षेत्र" : "PUNE RANGE"}
        </h1>

        <div className="overflow-x-auto shadow-md rounded-lg border border-gray-300">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-blue-600">
                <th className="px-4 py-3 text-white font-semibold text-left border-r border-blue-500">
                  {language === "marathi" ? "अ.क्र" : "Sr.No."}
                </th>
                <th className="px-4 py-3 text-white font-semibold text-left border-r border-blue-500">
                  {language === "marathi" ? "मोटार परिवहन विभागाचे नाव" : "Commissionerate"}
                </th>
                <th className="px-4 py-3 text-white font-semibold text-left border-r border-blue-500">
                  {language === "marathi" ? "प्रभारी अधिकारी पदनाम" : "Designation"}
                </th>
                <th className="px-4 py-3 text-white font-semibold text-left border-r border-blue-500">
                  {language === "marathi" ? "प्रभारी अधिकाऱ्याचे नाव" : "Officer Name"}
                </th>
                <th className="px-4 py-3 text-white font-semibold text-left border-r border-blue-500">
                  {language === "marathi" ? "संपर्क क्रमांक" : "Contact Number"}
                </th>
                <th className="px-4 py-3 text-white font-semibold text-left">
                  {language === "marathi" ? "वेबसाईट लिंक" : "Website"}
                </th>
              </tr>
            </thead>

            <tbody>
              {data.map((row, idx) => (
                <tr
                  key={row.sr}
                  className={`${idx % 2 === 0 ? "bg-blue-100" : "bg-white"} border-b border-gray-300`}
                >
                  <td className="px-4 py-3 text-gray-900 border-r border-gray-300 font-medium">{row.sr}</td>
                  <td className="px-4 py-3 text-gray-900 border-r border-gray-300">
                    {language === "marathi"
                      ? row.commissionerate.marathi
                      : row.commissionerate.english}
                  </td>
                  <td className="px-4 py-3 text-gray-900 border-r border-gray-300">
                    {language === "marathi"
                      ? row.designation.marathi
                      : row.designation.english}
                  </td>
                  <td className="px-4 py-3 text-gray-900 border-r border-gray-300">
                    {language === "marathi"
                      ? row.officerName.marathi
                      : row.officerName.english}
                  </td>
                  <td className="px-4 py-3 text-gray-900 border-r border-gray-300">
                    {row.contact}
                  </td>
                  <td className="px-4 py-3 text-blue-600 font-medium">
                    {row.website ? (
                      <a href={row.website} target="_blank" rel="noopener noreferrer">{row.website}</a>
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
    </div>
  );
};

export default PuneRangeTable;
