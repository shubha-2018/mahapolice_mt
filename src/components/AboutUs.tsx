// import { useLanguageContext } from "@/context/LanguageContext";
import { useLanguageContext } from "../context/LanguageContext";


const AboutUs = () => {
  // const { language } = useLanguageContext();
  const { language, isMarathi, isEnglish } = useLanguageContext();


  const aboutContent = {
    marathi: {
      title: "१. एमटी विभागाचा इतिहास",
      paragraphs: [
        "महाराष्ट्र राज्य मोटर ट्रान्सपोर्ट संघटना सन १९४८ साली काही वाहनांच्या लहान ताफ्याने आणि भूतपूर्व सैनिक चालकांच्या मदतीने स्थापन झाली. काही वाहने भाड्याने घेण्यात आली होती. पर्यवेक्षण कार्यासाठी तांत्रिक अधिकारी नेमण्यात आले.",
        "१९४८ ते २००१ या काळात ही संघटना एसपी ते आयजीपी पदावरील तांत्रिक अधिकारी यांच्या नेतृत्वाखाली होती. २००१ नंतर पदोन्नतीसाठी फीडर कॅडरमध्ये तांत्रिक अधिकारी नसल्याने, आयजीपी दर्जाच्या पोलिस अधिकाऱ्यांच्या नेतृत्वाखाली हा विभाग कार्यरत आहे. त्यांना डीआयजी व एसपी पदाचे तांत्रिक अधिकारी सहाय्य करतात. मुंबई शहरासाठी हा विभाग थेट पोलीस आयुक्तांच्या नियंत्रणाखाली असून अति. पोलीस आयुक्त (एमटी) या तांत्रिक अधिकाऱ्यांच्या नेतृत्वाखाली आहे. डीआयजी, एमटी व अति. पोलीस आयुक्त (एमटी) हे दोघेही पदवीधर ऑटोमोबाईल अभियंते आहेत.",
        "पुढे सर्व तांत्रिक शाखा एका छताखाली आणण्यासाठी शासनाने ठराव करून मोटर ट्रान्सपोर्ट विभाग व पोलीस वायरलेस विभाग यांना एकत्र करून त्याचे प्रमुख अति. डीजीपी/संचालक पोलीस संचार व वाहतूक यांना करण्यात आले.",
        "सध्या महाराष्ट्र पोलीस दलाकडे (मुंबईसह) २४,००० वाहने आहेत. प्रशिक्षित व पात्र तंत्रज्ञांद्वारे दुरुस्ती व देखभाल कार्य घरगुती पातळीवर केले जाते. ऑटोमोबाईल डिप्लोमा व पदवीधर अधिकारी एमटी विभागाचे पर्यवेक्षण करतात.",
        "१९८० नंतर या विभागाचा विस्तार सुरू झाला आणि १९९० नंतर हा विस्तार जलद गतीने व मोठ्या प्रमाणावर झाला. राज्य तसेच मुंबईतील संपूर्ण पोलिस दल वाहतुकीसाठी या विभागावर पूर्णपणे अवलंबून आहे."
      ],
    },
    english: {
      title: "1. HISTORY OF MT SECTION",
      paragraphs: [
        "The Maharashtra State Motor Transport Organisation was established in the year 1948, with a small fleet of vehicles and with the help of Ex-servicemen drivers as some vehicles were taken on hire charge. Technical officers were appointed for supervisory work.",
        "Since 1948 to 2001 this organisation was headed by officers of the rank SP to IGP who were technically qualified. From 2001 onwards, as there were no technical officers in the feeder cadre for promotion, it has been headed by a police officer of IGP Rank, assisted by a technical officer of the DIG and SP rank. For Mumbai City, the MT section is under direct control of CP Mumbai and is headed by a technical officer of the rank Addl. C.P. Both the DIG, MT and Addl. C.P., MT are qualified automobile engineers.",
        "Further, in order to bring all technical wings under one roof, government resolution was passed to bring the Motor Transport Section and Police Wireless Department together, headed by Addl. DGP/Director Police Communication & Transport.",
        "Presently, Maharashtra Police (including Mumbai) have 24,000 vehicles on road. In-house repair and maintenance is carried out by trained and qualified technicians. Automobile diploma and degree holder officers supervise the MT Section.",
        "From 1980 onwards this organisation began expanding and after 1990 this expansion took place rapidly and on a large scale. The entire force of the state as well as Mumbai is totally dependent on this organisation for mobility."
      ],
    },
  };

  return (
    <section id="about-us" className="relative bg-white py-12 px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <div className="bg-gray-50 shadow-lg rounded-2xl p-6 md:p-10 border border-gray-200">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6 text-center">
            {aboutContent[language].title}
          </h2>

          {aboutContent[language].paragraphs.map((para, index) => (
            <p key={index} className="text-gray-700 leading-relaxed text-justify mb-4">
              {para}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
