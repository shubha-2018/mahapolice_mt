import React from "react";
import { useLanguageContext } from "@/context/LanguageContext";

const VehicleDepartmentDocument = () => {
  const { language } = useLanguageContext();

  const workshopData = [
    { srNo: 1, district: { marathi: 'बुलढाणा', english: 'Buldhana' }, m5ton: 3, m12ton: 1, m55motor: 14, m92motor: 2, total: 20 },
    { srNo: 2, district: { marathi: 'पालघर', english: 'Palghar' }, m5ton: 2, m12ton: 0, m55motor: 1, m92motor: 1, total: 4 },
    { srNo: 3, district: { marathi: 'मिरा भाईंदर वसई-विरार', english: 'Mira-Bhayandar Vasai-Virar' }, m5ton: 2, m12ton: 1, m55motor: 1, m92motor: 0, total: 4 },
    { srNo: 4, district: { marathi: 'नवी मुंबई', english: 'Navi Mumbai' }, m5ton: 3, m12ton: 1, m55motor: 1, m92motor: 1, total: 6 },
    { srNo: 5, district: { marathi: 'रायगड', english: 'Raigad' }, m5ton: 4, m12ton: 0, m55motor: 1, m92motor: 1, total: 6 },
    { srNo: 6, district: { marathi: 'रत्नागिरी', english: 'Ratnagiri' }, m5ton: 4, m12ton: 1, m55motor: 2, m92motor: 1, total: 8 },
    { srNo: 7, district: { marathi: 'सिंधुदुर्ग', english: 'Sindhudurg' }, m5ton: 4, m12ton: 1, m55motor: 1, m92motor: 1, total: 7 },
  ];

  const workshopTotal = { m5ton: 22, m12ton: 5, m55motor: 21, m92motor: 7, total: 55 };

  const policeData = [
    { srNo: 1, post: { marathi: 'पोलीस निरीक्षक', english: 'Police Inspector' }, designation: { marathi: 'नैविगेशन', english: 'Navigation' }, sanctioned: 3, vacant: 0, filled: 3 },
    { srNo: '', post: '', designation: { marathi: 'इंजिनिअर', english: 'Engineer' }, sanctioned: 3, vacant: 0, filled: 3 },
    { srNo: 2, post: { marathi: 'सहा.पोलीस निरीक्षक', english: 'Asst. Police Inspector' }, designation: { marathi: 'फर्स्ट क्लास मास्टर', english: 'First Class Master' }, sanctioned: 6, vacant: 0, filled: 6 },
    { srNo: '', post: '', designation: { marathi: 'लासमन इ अदर इंजिनिअर', english: 'Lashman & Other Engineer' }, sanctioned: 6, vacant: 0, filled: 6 },
    { srNo: 3, post: { marathi: 'पोलीस उप निरीक्षक', english: 'Sub Inspector' }, designation: { marathi: 'सेकंड क्लास मास्टर', english: 'Second Class Master' }, sanctioned: 125, vacant: 52, filled: 83 },
    { srNo: '', post: '', designation: { marathi: 'फर्स्ट क्लास इंजन ड्रायव्हर', english: 'First Class Engine Driver' }, sanctioned: 125, vacant: 43, filled: 92 },
    { srNo: 4, post: { marathi: 'सपादैनिक', english: 'Constable' }, designation: { marathi: 'सारंग', english: 'Sarangg' }, sanctioned: 225, vacant: 83, filled: 142 },
    { srNo: '', post: '', designation: { marathi: 'इंजन चालक', english: 'Engine Operator' }, sanctioned: 227, vacant: 97, filled: 130 },
    { srNo: 5, post: { marathi: 'पोलीस हवालदार', english: 'Police Havaldar' }, designation: { marathi: 'डेक साईड', english: 'Deck Side' }, sanctioned: 144, vacant: 4, filled: 40 },
    { srNo: '', post: '', designation: { marathi: 'इंजन साईड', english: 'Engine Side' }, sanctioned: 141, vacant: 5, filled: 36 },
    { srNo: 6, post: { marathi: 'पोलीस नाईक', english: 'Police Naik' }, designation: { marathi: 'डेक साईड', english: 'Deck Side' }, sanctioned: 31, vacant: 4, filled: 27 },
    { srNo: '', post: '', designation: { marathi: 'इंजन साईड', english: 'Engine Side' }, sanctioned: 30, vacant: 1, filled: 29 },
    { srNo: 7, post: { marathi: 'पोलीस शिपाई', english: 'Police Sepoy' }, designation: { marathi: 'डेक साईड', english: 'Deck Side' }, sanctioned: 361, vacant: 31, filled: 220 },
    { srNo: '', post: '', designation: { marathi: 'इंजन साईड', english: 'Engine Side' }, sanctioned: 361, vacant: 15, filled: 236 },
  ];

  const policeTotal = { sanctioned: 1388, vacant: 335, filled: 1053 };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-12">
      <div className="container mx-auto px-6 max-w-6xl">

        {/* Title Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            {language === "marathi" ? "नौका विभाग." : "Vehicle Department."}
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full"></div>
        </div>

        {/* Main Paragraphs */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-10 border border-blue-100">
          <div className="prose prose-lg max-w-none text-justify leading-relaxed text-gray-800">
            <p>
              {language === "marathi"
                ? "महाराष्ट्र राज्याला लागलेल्या विस्तृण अशा ५२० किमी लांबीच्या सागरी किनारपट्टीची सुरक्षा आणि कागदा व सुव्यवस्था राखण्याची जबाबदारी महाराष्ट्र पोलीसांच्या दललामध्ये सागरी दलाकडे सोपविण्यात आलेली आहे. सागरी गस्तीकरिता स्वतंत्र मोटार परिवहन पोलीस नौका विभागाची स्थापन सन १९६० च्या दरम्यान केली आहे. महाराष्ट्र राज्याला व विशेषतः आर्थिक राजधानी असलेल्या मुंबई शहरावर आजपर्यंत परकीय शत्रूकडून अनेक घ्याड आतंकी हल्ले (उदा. १९९३ साखळी बॉम्बस्फोट व २६/११ साखळी भीषण दहशतवादी हल्ले इ.) समग्र मागीत झालेले आहेत. त्यामुरेता सागरी सीमा आणि किना-यांची सुरक्षा अधिक बळकट करण्याच्या दृष्टीने भारतीय सागरी सुरक्षा हा मुख्यतः तीन टप्प्यामध्ये कार्यरत आहे. आंतरराष्ट्रीय सागरी सीमेचे संरक्षण भारतीय नौदल करीत असुन बेतलाईड पायून (०-२०० नॉटिकल मैल) भारतीय तटरक्षक दल करीत आहे व सागरी किनारपट्टीपासुन १२ नॉटिकल मैल सागरी परिसराचे आणि सागरी किना-यांचे संरक्षण करण्याकरिता मा.अपर पोलीस महासंचालक व संचालक, पोलीस दळणवळण, माहिती तंत्रज्ञान व परिवहन महाराष्ट्र राज्य, पुणे यांचे मार्गदर्शनाखाली सागरी जिल्हे/आयुक्तालय यांचे आस्थापनेवरील पोलीस नौका विभाग कार्यरत आहेत. महाराष्ट्र पोलीस दललकडे २६/११ च्या हल्ल्यापूर्वी डिझेलवर चालणा-या फायबर व लाकडी या प्रकारच्या बोटी सागरी सुरक्षेकरिता उपलब्ध होत्या, सदर बोटी पहस्थिती कालबाह्य झालेल्या असल्यामे त्यांचे निकामीकरण करण्यात आलेले आहे."
                : "The responsibility of securing the extensive 520 km long coastline of Maharashtra and maintaining law and order has been entrusted to the Maritime Division of the Maharashtra Police. For maritime patrolling, a separate Motor Transport Police Boat Department was established around 1960. Maharashtra, especially its financial capital Mumbai, has faced several terrorist attacks from foreign enemies (e.g., the 1993 serial bomb blasts and the 26/11 devastating terrorist attacks). To strengthen maritime security, India’s maritime defense operates in three main tiers: the Indian Navy protects the international maritime boundary, the Coast Guard secures the belt area (0–200 nautical miles), and the Police Boat Departments under the Additional Director General of Police and Director of Police Transport, IT & Transport, Maharashtra, Pune, protect the maritime area up to 12 nautical miles."}
            </p>
            <p>
              {language === "marathi"
                ? "पोलीस नौका विभागाकडे उपलब्ध असलेल्या एकुण ५५ गस्ती बोटीव्दारे नियमित सागरी गस्त करण्यात येत असते. सदर गस्तीवेळी बोटीच्या सुचालनाकरिता BPRD (Bureau Of Police Research Development) च्या मानक कार्यप्रणालीमध्ये नमूद केल्याप्रमाणे एकुण ०६ तांत्रिक अधिकारी व अमलदार यांची आवश्यकता असते. व सागरी पोलीस टाणे येथुन १ अधिकारी व ३ अमलदार यांची नेमणूक केली जाते. सद्यस्थितीत उपलब्ध असलेल्या बोटी परदेशी बनावटीच्या असल्यामुळे त्यांचा देखभाल व दुरुस्तीकरिता मा.विशेष पोलीस महानिरीक्षक, मोटार परिवहन, महाराष्ट्र राज्य, पुणे यांचे कार्यालयामार्फत मुळ उत्पादक कंपनी किंवा त्यांचे अधिकृत दुरुस्तीधारक यांचे सेवत कराम केला जातो. सदर कराराध्ये नमूद केलेल्या अटी व शर्तो याप्रमाणे देखभाल व दुरुस्तीचे काम करण्यात येतात."
                : "The Police Boat Department operates 55 patrol boats for regular maritime patrols. According to BPRD standards, a total of 6 technical officers and personnel are required per patrol, with 1 officer and 3 personnel appointed from Marine Police Thane. As the boats are of foreign make, maintenance and repair are carried out through the original manufacturer or authorized repairers under the supervision of the Special Inspector General of Police, Motor Transport, Maharashtra State, Pune."}
            </p>
            <p>
              {language === "marathi"
                ? "महाराष्ट्र राज्यावर आजपर्यंत परकीय शत्रूकडून अनेक घ्याड आतंकी हल्ले समग्र मागीत झालेले आहेत. मुंबई शहरावर २६/११ सारखा मोठा आतंकी हल्ला झाल्यानंतर महाराष्ट्र पोलीस दलाकडे वेगवान नौका व त्यांची सुचालन व देखभाल दुरुस्तीकरिता मनुष्यबळ उपलब्ध झाले, त्यामुळे सतत सागर गस्त सुरू राहू लागली. यामुळे राज्याच्या सागरी किना-यांची सुरक्षा राखणे अत्यंत महत्वाचे झाले व पोलीस नौका विभागाने दैनंदिन सागर गस्त करून दहशतवाद तसेच तस्करी हलचालीवर लक्ष ठेवणे आणि सागरी सुरक्षा, कागद व सुव्यवस्था राखण्यात महत्त्वाची भूमिका बजावली आहे."
                : "Maharashtra has faced multiple terrorist attacks. After the 26/11 attack in Mumbai, the Maharashtra Police received fast boats and personnel for operation and maintenance, enabling continuous maritime patrols. This has been crucial in maintaining coastal security, and the Police Boat Department plays an important role in daily patrols, monitoring terrorism and smuggling activities, and ensuring maritime safety and law and order."}
            </p>
          </div>
        </div>

        {/* Workshop Table */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-10 border border-blue-100">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-blue-300 rounded-lg overflow-hidden shadow-sm">
              <thead>
                <tr className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
                  <th className="border border-blue-300 px-4 py-3 text-center font-semibold">{language === "marathi" ? "अ.क्र." : "Sr.No."}</th>
                  <th className="border border-blue-300 px-4 py-3 text-center font-semibold">{language === "marathi" ? "जिल्हे/आयुक्तालय" : "District/Office"}</th>
                  <th className="border border-blue-300 px-4 py-3 text-center font-semibold">5 ton</th>
                  <th className="border border-blue-300 px-4 py-3 text-center font-semibold">12 ton</th>
                  <th className="border border-blue-300 px-4 py-3 text-center font-semibold">9.5 m</th>
                  <th className="border border-blue-300 px-4 py-3 text-center font-semibold">12 m</th>
                  <th className="border border-blue-300 px-4 py-3 text-center font-semibold">{language === "marathi" ? "एकुण" : "Total"}</th>
                </tr>
              </thead>
              <tbody>
                {workshopData.map((row, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-blue-50" : "bg-white"}>
                    <td className="border border-blue-200 px-4 py-3 text-center font-medium">{row.srNo}</td>
                    <td className="border border-blue-200 px-4 py-3">{row.district[language]}</td>
                    <td className="border border-blue-200 px-4 py-3 text-center">{row.m5ton}</td>
                    <td className="border border-blue-200 px-4 py-3 text-center">{row.m12ton}</td>
                    <td className="border border-blue-200 px-4 py-3 text-center">{row.m55motor}</td>
                    <td className="border border-blue-200 px-4 py-3 text-center">{row.m92motor}</td>
                    <td className="border border-blue-200 px-4 py-3 text-center font-bold">{row.total}</td>
                  </tr>
                ))}
                <tr className="bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold">
                  <td className="border border-blue-300 px-4 py-3 text-center" colSpan="2">{language === "marathi" ? "एकुण" : "Total"}</td>
                  <td className="border border-blue-300 px-4 py-3 text-center">{workshopTotal.m5ton}</td>
                  <td className="border border-blue-300 px-4 py-3 text-center">{workshopTotal.m12ton}</td>
                  <td className="border border-blue-300 px-4 py-3 text-center">{workshopTotal.m55motor}</td>
                  <td className="border border-blue-300 px-4 py-3 text-center">{workshopTotal.m92motor}</td>
                  <td className="border border-blue-300 px-4 py-3 text-center">{workshopTotal.total}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Police Table */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-10 border border-green-100">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-green-300 rounded-lg overflow-hidden shadow-sm">
              <thead>
                <tr className="bg-gradient-to-r from-green-600 to-green-700 text-white">
                  <th className="border border-green-300 px-4 py-3 text-center font-semibold">{language === "marathi" ? "अ.क्र." : "Sr.No."}</th>
                  <th className="border border-green-300 px-4 py-3 text-center font-semibold">{language === "marathi" ? "पद" : "Post"}</th>
                  <th className="border border-green-300 px-4 py-3 text-center font-semibold">{language === "marathi" ? "पदनाम" : "Designation"}</th>
                  <th className="border border-green-300 px-4 py-3 text-center font-semibold">{language === "marathi" ? "मंजुर" : "Sanctioned"}</th>
                  <th className="border border-green-300 px-4 py-3 text-center font-semibold">{language === "marathi" ? "रिक्त" : "Vacant"}</th>
                  <th className="border border-green-300 px-4 py-3 text-center font-semibold">{language === "marathi" ? "भरलेले" : "Filled"}</th>
                </tr>
              </thead>
              <tbody>
                {policeData.map((row, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-green-50" : "bg-white"}>
                    <td className="border border-green-200 px-4 py-3 text-center font-medium">{row.srNo}</td>
                    <td className="border border-green-200 px-4 py-3">{row.post ? row.post[language] : ''}</td>
                    <td className="border border-green-200 px-4 py-3">{row.designation[language]}</td>
                    <td className="border border-green-200 px-4 py-3 text-center">{row.sanctioned}</td>
                    <td className="border border-green-200 px-4 py-3 text-center">{row.vacant}</td>
                    <td className="border border-green-200 px-4 py-3 text-center">{row.filled}</td>
                  </tr>
                ))}
                <tr className="bg-gradient-to-r from-green-600 to-green-700 text-white font-bold">
                  <td className="border border-green-300 px-4 py-3 text-center" colSpan="3">{language === "marathi" ? "एकुण" : "Total"}</td>
                  <td className="border border-green-300 px-4 py-3 text-center">{policeTotal.sanctioned}</td>
                  <td className="border border-green-300 px-4 py-3 text-center">{policeTotal.vacant}</td>
                  <td className="border border-green-300 px-4 py-3 text-center">{policeTotal.filled}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
};

export default VehicleDepartmentDocument;
