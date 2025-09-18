import React from "react";
import { useLanguageContext } from "@/context/LanguageContext";

const UnitDyspSp: React.FC = () => {
  const { language } = useLanguageContext();

  const data = [
    { sr: 1, unit: { marathi: "ईस्ट झोन, नागपूर", english: "East Zone, Nagpur" }, name: { marathi: "रिक्त", english: "Vacant" }, contact: "" },
    { sr: 2, unit: { marathi: "एम.टी. वर्कशॉप, नागपूर", english: "M.T. Workshop, Nagpur" }, name: { marathi: "सुरेश असगर", english: "Suresh Asgar" }, contact: "9923243941" },
    { sr: 3, unit: { marathi: "नागपूर शहर, एमटी सेक्शन", english: "Nagpur city, MT Section" }, name: { marathi: "युवराज शंकरसिंह ठाकूर (राजपूत)", english: "Yuvraj Shankarsingh Thakur (Rajput)" }, contact: "9699224502" },
    { sr: 4, unit: { marathi: "एम.टी. वर्कशॉप, औरंगाबाद", english: "M.T. Workshop, Aurangabad" }, name: { marathi: "राजपाल यादव", english: "Rajpal Yadav" }, contact: "9921100880" },
    { sr: 5, unit: { marathi: "नागपाडा, मुंबई", english: "Nagpada, Mumbai" }, name: { marathi: "जयवंतराव रामचंद्र देशमुख", english: "Jaywantrao Ramchandra Deshamukh" }, contact: "9892331525" },
    { sr: 6, unit: { marathi: "नागपाडा, मुंबई", english: "Nagpada, Mumbai" }, name: { marathi: "रिक्त", english: "Vacant" }, contact: "" },
    { sr: 7, unit: { marathi: "नागपाडा, मुंबई", english: "Nagpada, Mumbai" }, name: { marathi: "प्रसांजित बाबासाहेब प्रतापे", english: "Prasanjit Babasaheb Pratape" }, contact: "9821560683" },
    { sr: 8, unit: { marathi: "नागपाडा, मुंबई", english: "Nagpada, Mumbai" }, name: { marathi: "सुनित यशवंत धायगुडे", english: "Sunit Yashawant Dhaygude" }, contact: "8087015902" },
    { sr: 9, unit: { marathi: "नागपाडा, मुंबई", english: "Nagpada, Mumbai" }, name: { marathi: "रिक्त", english: "Vacant" }, contact: "" },
    { sr: 10, unit: { marathi: "एसीपी, स्पेशल आयजीपी, एमटी लांच सेक्शन, ठाणे", english: "ACP, Spl. IGP, MT Lanch Section, Thane" }, name: { marathi: "रिक्त", english: "Vacant" }, contact: "" },
    { sr: 11, unit: { marathi: "ठाणे शहर, एमटी सेक्शन", english: "Thane City, MT Section" }, name: { marathi: "नशीरखान गुलाबखान पाठान", english: "Nashirkhan Gulabkhan Pathan" }, contact: "9664857867" },
    { sr: 12, unit: { marathi: "साउथ झोन, पुणे", english: "South Zone, Pune" }, name: { marathi: "रविंद्र बलगोविंद हिंगनेकर", english: "Ravindra Balgovind Hingnekar" }, contact: "8108000062" },
    { sr: 13, unit: { marathi: "एम.टी. वर्कशॉप, पुणे", english: "M.T. Workshop, Pune" }, name: { marathi: "आनंद माळी (अतिरिक्त चार्ज)", english: "Anand Mali (addl. Charge)" }, contact: "9923107242" },
    { sr: 14, unit: { marathi: "एम.टी. सेक्शन, ड्रायविंग ट्रेनिंग स्कूल, पुणे", english: "M.T. Section, Driving Training School, Pune" }, name: { marathi: "अनंत द्यानेश्वर माळी", english: "Anant Dyaneswar Mali" }, contact: "8378979474" },
    { sr: 15, unit: { marathi: "एसीपी, स्पेशल आयजीपी, एमटी पुणे सेंट्रल परचेस ब्र., पुणे", english: "ACP, Spl. IGP, MT Pune Central purchase Br. Pune" }, name: { marathi: "रविंद्र बलगोविंद हिंगनेकर (अतिरिक्त चार्ज)", english: "Ravindra Balgovind Hingnekar (addl. Charge)" }, contact: "8108000062" },
    { sr: 16, unit: { marathi: "पुणे शहर, एमटी सेक्शन", english: "Pune City, MT Section" }, name: { marathi: "सुनील निउरुती कदम", english: "Sunil Niuruti Kadam" }, contact: "9702980753" },
    { sr: 17, unit: { marathi: "कंट्रोलर, सरकारी वाहतूक (डेप्यूटेशनवर) (सांवर्गबाह्य पोस्ट) डी.वाय.एस.पी./ए.सी.पी. (एम.टी.) द्वारे ट्रान्सफरद्वारे भरणे आवश्यक", english: "Controller, Govt. transport (On Deputation) (Sanvargbahya post) to be filled up by transfer amongst Dy.Sp./A.C.P. (M.T.)" }, name: { marathi: "रिक्त", english: "Vacant" }, contact: "" },
  ];

  return (
    <section className="py-12 px-6 md:px-12 lg:px-24 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            {language === "marathi" ? "युनिट एसीपी आणि डीवायएसपी" : "UNIT ACP & DYSP"}
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden border">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-blue-600 text-white">
                  <th className="px-6 py-4 text-left font-semibold border-r border-blue-500">
                    {language === "marathi" ? "क्र.सं" : "Sr. No"}
                  </th>
                  <th className="px-6 py-4 text-left font-semibold border-r border-blue-500">
                    {language === "marathi" ? "युनिट" : "Unit"}
                  </th>
                  <th className="px-6 py-4 text-left font-semibold border-r border-blue-500">
                    {language === "marathi" ? "नाव" : "Name"}
                  </th>
                  <th className="px-6 py-4 text-left font-semibold">
                    {language === "marathi" ? "संपर्क क्रमांक" : "Contact Number"}
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.map((row, index) => (
                  <tr
                    key={row.sr}
                    className={`${index % 2 === 0 ? "bg-white" : "bg-blue-50"} hover:bg-blue-100 border-b border-gray-200`}
                  >
                    <td className="px-6 py-4 text-gray-800 font-medium border-r border-gray-200">
                      {row.sr}
                    </td>
                    <td className="px-6 py-4 text-gray-800 border-r border-gray-200">
                      {language === "marathi" ? row.unit.marathi : row.unit.english}
                    </td>
                    <td className="px-6 py-4 text-gray-800 border-r border-gray-200">
                      {language === "marathi" ? row.name.marathi : row.name.english === "Vacant" ? <span className="text-red-600 font-medium bg-red-100 px-3 py-1 rounded">{language === "marathi" ? "रिक्त" : "Vacant"}</span> : language === "marathi" ? row.name.marathi : row.name.english}
                    </td>
                    <td className="px-6 py-4 text-gray-800">
                      {row.contact ? (
                        <a
                          href={`tel:${row.contact}`}
                          className="text-blue-600 hover:underline"
                        >
                          {row.contact}
                        </a>
                      ) : (
                        <span className="text-gray-400">-</span>
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
