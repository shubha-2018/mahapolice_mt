import React from "react";
import { useLanguageContext } from "@/context/LanguageContext";

const UnitDyspSp: React.FC = () => {
  const { language } = useLanguageContext();

  const data = [
  { sr: 1, unit: { marathi: "मोटार परिवहन पूर्व परिमंडळ, नागपूर", english: "East Zone, Nagpur" }, name: { marathi: "रिक्त", english: "Vacant" }, contact: "" },
  { sr: 2, unit: { marathi: "पोलीस मध्यवर्ती मोटर परिवहन कर्मशाळा, नागपूर", english: "Police Central M.T. Workshop, Nagpur" }, name: { marathi: "रिक्त", english: "Vacant" }, contact: "" },
  { sr: 3, unit: { marathi: "मोटार परिवहन विभाग, नागपूर शहर", english: "Nagpur City, MT Section" }, name: { marathi: "युवराज शंकरसिंह ठाकूर (राजपूत)", english: "Yuvraj Shankarsingh Thakur (Rajput)" }, contact: "9699224502" },
  { sr: 4, unit: { marathi: "पोलीस मध्यवर्ती मोटर परिवहन कर्मशाळा, छत्रपती संभाजीनगर", english: "Police Central M.T. Workshop, Chhatrapati Sambhaji Nagar" }, name: { marathi: "रिक्त", english: "Vacant" }, contact: "" },
  { sr: 5, unit: { marathi: "नागपाडा, मुंबई", english: "Nagpada, Mumbai" }, name: { marathi: "जयवंतराव रामचंद्र देशमुख", english: "Jaywantrao Ramchandra Deshmukh" }, contact: "9892331525" },
  { sr: 6, unit: { marathi: "नागपाडा, मुंबई", english: "Nagpada, Mumbai" }, name: { marathi: "मयूर अरुण तपासे", english: "Mayur Arun Tapase" }, contact: "" },
  { sr: 7, unit: { marathi: "नागपाडा, मुंबई", english: "Nagpada, Mumbai" }, name: { marathi: "प्रसांजित बाबासाहेब प्रतापे", english: "Prasanjit Babasaheb Pratape" }, contact: "9821560683" },
  { sr: 8, unit: { marathi: "नागपाडा, मुंबई", english: "Nagpada, Mumbai" }, name: { marathi: "सुनित यशवंत धायगुडे", english: "Sunit Yashawant Dhaygude" }, contact: "8087015902" },
  { sr: 9, unit: { marathi: "नागपाडा, मुंबई", english: "Nagpada, Mumbai" }, name: { marathi: "रामानंद मोरेश्वर कळसकर", english: "Ramanand Moreshwar Kalaskar" }, contact: "" },
  { sr: 10, unit: { marathi: "नौका विभाग, ठाणे", english: "MT Launch Section, Thane" }, name: { marathi: "रिक्त", english: "Vacant" }, contact: "" },
  { sr: 11, unit: { marathi: "मोटार परिवहन विभाग, ठाणे शहर", english: "Thane City, MT Section" }, name: { marathi: "नशीरखान गुलाबखान पठाण", english: "Nashirkhan Gulabkhan Pathan" }, contact: "9664857867" },
  { sr: 12, unit: { marathi: "मोटार परिवहन दक्षिण परिमंडल, पुणे", english: "South Zone, Pune" }, name: { marathi: "रविंद्र बलगोविंद हिंगनेकर", english: "Ravindra Balgovind Hingnekar" }, contact: "8108000062" },
  { sr: 13, unit: { marathi: "पोलीस मध्यवर्ती मोटर परिवहन कर्मशाळा, पुणे", english: "Police Central M.T. Workshop, Pune" }, name: { marathi: "रिक्त", english: "Vacant" }, contact: "" },
  { sr: 14, unit: { marathi: "पोलीस चालक प्रशिक्षण केंद्र, पुणे", english: "Police MT Driving Training School, Pune" }, name: { marathi: "अनंत द्यानेश्वर माळी", english: "Anant Dnyaneshwar Mali" }, contact: "8378979474" },
  { sr: 15, unit: { marathi: "मध्यवर्ती भांडार खरेदी शाखा, पुणे", english: "Central Purchase Branch, Pune" }, name: { marathi: "रिक्त", english: "Vacant" }, contact: "" },
  { sr: 16, unit: { marathi: "मोटार परिवहन विभाग, पुणे शहर", english: "Pune City, MT Section" }, name: { marathi: "सुनील निवृत्ती कदम", english: "Sunil Nivrutti Kadam" }, contact: "9702980753" },
  { sr: 17, unit: { marathi: "कंट्रोलर, सरकारी वाहतूक (डेप्युटेशनवर) (सांवर्गबाह्य पोस्ट) डी.वाय.एस.पी./ए.सी.पी. (एम.टी.) द्वारे ट्रान्सफरद्वारे भरणे आवश्यक", english: "Controller, Govt. Transport (On Deputation) (Ex-cadre Post) to be filled by transfer from Dy. SP/ACP (MT)" }, name: { marathi: "रिक्त", english: "Vacant" }, contact: "" }
];


  return (
    <section className="py-12 px-6 md:px-12 lg:px-24 bg-gray-50 dark:bg-gray-900 transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            {language === "marathi"
              ? "सहाय्यक पोलीस आयुक्त  व पोलीस  उप-अधीक्षक "
              : "UNIT ACP & DYSP"}
          </h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
        </div>

        {/* Table */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-blue-600 dark:bg-blue-700 text-white">
                  <th className="px-6 py-4 text-left font-semibold border-r border-blue-500 dark:border-blue-600">
                    {language === "marathi" ? "अ.क्र" : "Sr. No"}
                  </th>
                  <th className="px-6 py-4 text-left font-semibold border-r border-blue-500 dark:border-blue-600">
                    {language === "marathi"
                      ? "मोटार  परिवहन विभागाचे नाव"
                      : "Unit"}
                  </th>
                  <th className="px-6 py-4 text-left font-semibold border-r border-blue-500 dark:border-blue-600">
                    {language === "marathi" ? "नाव" : "Name"}
                  </th>
                  <th className="px-6 py-4 text-left font-semibold">
                    {language === "marathi"
                      ? "संपर्क क्रमांक"
                      : "Contact Number"}
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.map((row, index) => (
                  <tr
                    key={row.sr}
                    className={`${
                      index % 2 === 0
                        ? "bg-white dark:bg-gray-800"
                        : "bg-blue-50 dark:bg-gray-700"
                    } hover:bg-blue-100 dark:hover:bg-gray-600 border-b border-gray-200 dark:border-gray-700`}
                  >
                    <td className="px-6 py-4 text-gray-800 dark:text-gray-200 font-medium border-r border-gray-200 dark:border-gray-700">
                      {row.sr}
                    </td>
                    <td className="px-6 py-4 text-gray-800 dark:text-gray-200 border-r border-gray-200 dark:border-gray-700">
                      {language === "marathi" ? row.unit.marathi : row.unit.english}
                    </td>
                    <td className="px-6 py-4 text-gray-800 dark:text-gray-200 border-r border-gray-200 dark:border-gray-700">
                      {language === "marathi"
                        ? row.name.marathi
                        : row.name.english === "Vacant" ? (
                          <span className="text-red-600 dark:text-red-400 font-medium bg-red-100 dark:bg-red-900/40 px-3 py-1 rounded">
                            {language === "marathi" ? "रिक्त" : "Vacant"}
                          </span>
                        ) : (
                          row.name.english
                        )}
                    </td>
                    <td className="px-6 py-4 text-gray-800 dark:text-gray-200">
                      {row.contact ? (
                        <a
                          href={`tel:${row.contact}`}
                          className="text-blue-600 dark:text-blue-400 hover:underline"
                        >
                          {row.contact}
                        </a>
                      ) : (
                        <span className="text-gray-400 dark:text-gray-500">-</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UnitDyspSp;
