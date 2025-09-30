import { useLanguageContext } from "../context/LanguageContext";

const AboutUs = () => {
  const { language } = useLanguageContext();

  const aboutContent = {
    marathi: {
      title: "मोटार  परिवहन विभागाचा इतिहास",
        paragraphs:  [
  "महाराष्ट्र राज्य पोलीस मोटार परिवहन विभागाची स्थापना सन १९४८ साली काही वाहनांच्या लहान ताफ्याने आणि सैनिक चालकांच्या मदतीने झाली. काही वाहने भाड्याने घेण्यात आली होती. पर्यवेक्षणाकरिता तांत्रिक अधिकाऱ्यांची नेमणूक करण्यात आली. १९४८ ते २००१ या काळात ही संघटना पोलीस अधिक्षक ते पोलीस उप महानिरीक्षक पदावरील तांत्रिक अधिकारी यांच्या नेतृत्वाखाली होती. २००१ नंतर पदोन्नतीसाठी फीडर कॅडरमध्ये तांत्रिक अधिकारी नसल्याने, विशेष पोलीस महानिरीक्षक दर्जाच्या पोलिस अधिकाऱ्यांच्या नेतृत्वाखाली हा विभाग कार्यरत असून त्यांना पोलीस अधिक्षक ते पोलीस उप महानिरीक्षक पदावरील तांत्रिक अधिकारी सहाय्य करतात. मुंबई शहरासाठी हा विभाग थेट पोलीस आयुक्तांच्या नियंत्रणाखाली असून, अपर पोलीस आयुक्त (तांत्रिक) यांच्या नेतृत्वाखाली आहे. पोलीस अधिक्षक व पोलीस उप महानिरीक्षक पदावरील तांत्रिक अधिकारी हे अभियंते असून तांत्रिक क्षेत्रातील उच्चशिक्षित आहेत.",
  
  "पुढे सर्व तांत्रिक शाखा एका छताखाली आणण्यासाठी शासनाने ठराव करून मोटार परिवहन विभाग व पोलीस दळणवळण व माहिती तंत्रज्ञान विभाग एकत्र करून त्याचे प्रमुख अपर पोलीस महासंचालक व संचालक पोलीस दळणवळण, माहिती तंत्रज्ञान व परिवहन यांना करण्यात आले. सध्या महाराष्ट्र पोलीस दलाकडे (मुंबईसह) २४,००० वाहने आहेत. ऑटोमोबाईल डिप्लोमा व पदवीधर अधिकारी एमटी विभागाचे पर्यवेक्षण करत असून, नमूद वाहनांची प्रशिक्षित व पात्र तांत्रिक अंमलदार यांच्याद्वारे देखभाल व दुरुस्ती कार्य केले जाते. १९८० नंतर या विभागाचा विस्तार होण्यास सुरवात होऊन १९९० नंतर हा विस्तार जलद गतीने व मोठ्या प्रमाणावर झाला आहे. सद्यपरिस्थिती पाहता राज्य तसेच मुंबईतील संपूर्ण पोलिस दल वाहतुकीसाठी या विभागावर पूर्णपणे अवलंबून आहे."
],
    },
    english: {
      title: "HISTORY OF MT SECTION",
      paragraphs:[
    "The Maharashtra State Motor Transport Organisation was established in 1948 with a small fleet of vehicles and with the help of ex-servicemen drivers. Some vehicles were hired. Technical officers were appointed for supervisory work. From 1948 to 2001, this organisation was headed by technically qualified officers of the rank of SP to DIG. From 2001 onwards, as there were no technical officers in the feeder cadre for promotion, the section has been headed by a police officer of IGP rank, assisted by technical officers of the rank SP to DIG. For Mumbai city, the MT section is under the direct control of the Commissioner of Police and is headed by Addl. Police Commissioner (Technical). The SP and DIG level technical officers are engineers with advanced technical qualifications.",
    "Further, in order to bring all technical wings under one roof, a government resolution was passed to merge the Motor Transport Section with the Police Transport & IT Department, headed by Addl. Director General of Police / Director Police Transport, IT & Communication. Presently, Maharashtra Police (including Mumbai) have 24,000 vehicles. The MT section is supervised by automobile diploma and degree holder officers, and maintenance and repair work is carried out by trained and qualified technical personnel.",
    "From 1980 onwards, this organisation began expanding, and after 1990 this expansion took place rapidly and on a large scale. At present, the entire police force of the state, including Mumbai, is completely dependent on this organisation for mobility."
  ],
    },
  };

  return (
    <section
      id="about-us"
      className="relative bg-white dark:bg-gray-900 py-12 px-6 md:px-12 lg:px-24 mt-20 transition-colors duration-300"
    >
      <div className="max-w-5xl mx-auto">
        <div className="bg-gray-50 dark:bg-gray-800 shadow-lg rounded-2xl p-6 md:p-10 border border-gray-200 dark:border-gray-700 transition-colors duration-300">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-gray-900 dark:text-white transition-colors duration-300">
            {aboutContent[language].title}
          </h2>

          {aboutContent[language].paragraphs.map((para, index) => (
            <p
              key={index}
              className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify mb-4 transition-colors duration-300"
            >
              {para}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
