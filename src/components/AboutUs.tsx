import { useLanguageContext } from "../context/LanguageContext";

const AboutUs = () => {
  const { language } = useLanguageContext();

  const aboutContent = {
    marathi: {
      title: "पोलीस मोटार परिवहन, महाराष्ट्र राज्य, पुणे इतिहास",
      paragraphs: [
        "मुंबई राज्य पोलीस मोटार परिवहन विभागाची स्थापना १९४८ साली झाली. सुरूवातीस काही वाहने आणि सैन्यामधून नियुक्त्त झालेले चालक यांची जिल्हयाच्या मोटार परिवहन विभागामध्ये नेमणूक करण्यात आली. खाजगी मोटार कंत्राटदाराकडून काही वाहने भाडे तत्वावर घेतली होती. तसेच काही वाहने सैन्यदलाकडून घेण्यात आली. तांत्रिक अधिकाऱ्यांची निवड पोलीस मोटार परिवहन विभागासाठी करण्यात आली",
        "प्रथम पोलीस अधीक्षक, पोलीस मोटार परिवहन महाराष्ट्र राज्य या पदावर श्री. डी.पी.राव, एम.एस.सी. (इंजिनिअरिंग) बी.ई., एम.आय.बी. (लंडन), एम. आय.ई.एस. (ग्लास ग्लो) जी.एम.आय. आर.ई. (यु.एस.ए.) यांची निवड झाली व श्री. राव यांच्या मार्गदर्शनाखाली आवश्यक त्या तांत्रिक अधिकाऱ्यांची निवड झाली.",
        "1949 साली मुंबई प्रांतामध्ये काही नवीन जिल्हयांच्या समावेश करण्यात आला त्याचबरोबर तीन राज्य राखीव पोलीस बल गट निर्माण करण्यात आले. ते मोटार वाहने व कर्मचारी देवून कार्यान्वीत करणेत आले. त्याचवेळी पोलीस वाहनाची देखभाल व दुरूस्ती स्वतंत्ररित्या करणेसाठी तसेच मोठ्या स्वरूपातील कामे उत्तम व किफायतशीर करणेसाठी क्षेत्रिय मध्यवर्ती कर्मशाळा, पुना, बेळगांव, बडोदा या ठिकाणी प्रस्तावीत करणेत आली. 1950 साली बेळगांव येथील किल्ल्यामध्ये जुन्या जेलच्या आवारात मंजूर करून क्षेत्रिय कर्मशाळा चालू करणेत आले नंतर 1956 साली आधुनिक कर्मशाळा नव्या इमारतीमध्ये चालू करणेत आली व त्याच वर्षीं। नोव्हेंबर रोजी म्हसुर राज्य निर्मिती झाल्यानंतर सदर कर्मशाळा म्हैसूर राज्याकडे हस्तांतरीत करण्यात आली.",
        "1951 साली चालक प्रशिक्षण केंद्र प्रताप लाईन्स, बडोदाया ठिकाणी दुसरे क्षेत्रिय कर्मशाळा चालू करण्यात आली त्यानंतर मे 1960 सालापर्यंत सदर कर्मशाळेमध्ये हळूहळू सुधारणा व नवनिर्माण करून गुजरात राज्याला हस्तांतरीत करण्यात आले.",
        "1956 साली सौराट्र व कच्छ विभाग, मुंबई राज्यामध्ये विलीन करण्यात आल्यानंतर राज्य पोलीस मोटार परिवहन विभाग वाढविण्यात आले व राजकोट याठिकाणी नवीन क्षेत्रिय कर्मशाळा निर्माण करण्यात आली.",
        "1959 साली भुज कर्मशाळा ताब्यात घेण्यात आली त्यानंतर गुजरात राज्याची निर्मिती झाल्यानंतर बडोदा राजकोट तसेच भुज येथील कर्मशाळा गुजरात राज्याकडे वर्ग करण्यात आली.",
        "नोव्हेंबर 1956 साली विदर्भ व मराठवाडा मुंबई राज्यात विलीन झालेनंतर त्याठिकाणी पोलीस परिवहन विभाग वाढविण्यात आले. त्यामध्ये औरंगाबाद व नागपूर क्षेत्रीय कर्मशाळा मंजूर करून तात्पुरत्या जागेत निवडक कर्मचारी घेवून तंबूच्या शेडमध्ये चालू करण्यात आले.",
        "1956 साली अन्नधान्य विभागाच्या जुन्या धान्य गोदामामध्ये पुणे क्षेत्रीय कर्मशाळा कार्यान्वीत करण्यात आली त्यानंतर 1960 साली पुणे शहरापासून 6.5 किलोमीटर अंतरावर औंध या ठिकाणी मोटार परिवहन विभागाच्या नव्या इमारतीमध्ये स्थलांतरीत करण्यात आले.",
        "पोलीस अधीक्षक, महाराष्ट्र राज्य, पुणे हे बृन्हमुंबई वगळून संपूर्ण महाराष्ट्राच्या मोटार परिवहन विभागाचे देखरेख करीत आणि संपूर्ण तांत्रिक नियंत्रण त्यांचेकडे होते. पोलीस महानिरीक्षक, मुंबई यांचे ते तांत्रिक सल्लागार होते. संपूर्ण महाराष्ट्राचे तांत्रिक सोयीच्या दृष्टीने दक्षिण परिमंडळ व पूर्व परिमंडळ असे दोन परिमंडळ करण्यात आले व त्यासाठी पोलीस निरीक्षक मोटार परिवहन दर्जाचा अधिकारी नेमण्यात आले ते संपूर्ण परिमंडळ मो.प.विभागांचे निरीक्षण, देखरेख व आवश्यकतेनुसार तांत्रिक सल्ला देत. तसेच वर्षातून दोन वेळा त्यांच्या अखत्यारीतील प्रत्येक जिल्हयांचे निरीक्षण करीत दक्षिण परिमंडळामध्ये मुंबई व पुणे क्षेत्र येत असून त्याचे मुख्यालय पुणे येथे आहे तसेच पूर्व परिमंडळामध्ये नागपूर व औरंगाबाद क्षेत्र येत असून त्याचे मुख्यालय औरंगाबाद येथे आहे.",
        "श्री.डी.पी.राव हे पहिले पोलीस अधीक्षक, पोलीस मोटार परिवहन, महाराष्ट्र राज्य म्हणून कार्यरत होते. त्यांचा कालावधी दिनांक 21/10/1948 ते 31/03/1967 पर्यंत होता त्यांनतर दुसरे पोलीस अधीक्षक मो.प. म्हणून श्री. एम. के. फउके हे होते त्यांचा कालावधी दिनांक 1/4/1967 पासून 22/7/1981 पर्यंत होता त्यानंतर सैन्य दालातील निवृत्त अधिकारी व्ही.पी. जगताप यांनी दिनांक 23/7/1981 ते 15/04/1994 पर्यंत पोलीस अधीक्षक मो.प. पदाचा कार्यभार सांभाळला त्यांनी पदोन्नतीवर पोलीस उप महानिरीक्षक, मोटार परिवहन, महाराष्ट्र राज्य, पुणे या पदावर दिनांक 16/04/1994 पासून ते दिनांक 14/11/2000 पर्यंत तसेच विशेष पोलीस महानिरीक्षक, मोटार परिवहन, महाराष्ट्र राज्य, पुणे या पदाचे दिनांक 14/11/2000 ते 30/11/2001 पर्यंत काम पाहिल्यानंतर ते संवानिवृत्त झाले. दरम्यान पोलीस अधीक्षक मो.प. या पदावर दिनांक 21/3/1996 ते 30/09/1997 पर्यंत श्री. बी.टी. टेमकर यांनी काम केले.",
        "सध्या श्री अतुल पाटील हे दिनांक 8/10/2003 पासून पोलीस अधीक्षक मो.प. या पदावर कार्यरत आहेत"
      ],
    },
    english: {
      title: "HISTORY OF POLICE MOTOR TRANSPORT, MAHARASHTRA STATE, PUNE",
      paragraphs: [
        "The Mumbai State Police Motor Transport Department was established in 1948. Initially, some vehicles and drivers recruited from the army were appointed to the district's Motor Transport Department. Some vehicles were hired from private motor contractors. Also, some vehicles were obtained from the military. Technical officers were selected for the Police Motor Transport Department.",
        "Shri D.P. Rao, M.Sc. (Engineering) B.E., M.I.B. (London), M.I.E.S. (Glasgow) G.M.I.R.E. (U.S.A.) was selected as the first Superintendent of Police, Police Motor Transport Maharashtra State, and under Shri Rao's guidance, the necessary technical officers were selected.",
        "In 1949, some new districts were included in the Bombay Province, and three State Reserve Police Force battalions were created. They were made operational by providing motor vehicles and staff. At the same time, regional central workshops were proposed at Pune, Belgaum, and Baroda for independent maintenance and repair of police vehicles and for carrying out large-scale work efficiently and economically. In 1950, a regional workshop was started in the old jail premises in the fort at Belgaum. Later in 1956, a modern workshop was started in a new building, and in November of the same year, after the formation of Mysore State, the said workshop was transferred to Mysore State.",
        "In 1951, a second regional workshop was started at the Driver Training Center Pratap Lines, Baroda. Thereafter, gradual improvements and renovations were made in the said workshop until May 1960, and it was transferred to Gujarat State.",
        "In 1956, after the Saurashtra and Kutch divisions were merged into Bombay State, the State Police Motor Transport Department was expanded, and a new regional workshop was established at Rajkot.",
        "In 1959, the Bhuj workshop was taken over. After the formation of Gujarat State, the workshops at Baroda, Rajkot, and Bhuj were transferred to Gujarat State.",
        "In November 1956, after Vidarbha and Marathwada were merged into Bombay State, the Police Transport Department was expanded there. Aurangabad and Nagpur regional workshops were sanctioned and started in temporary locations with selected staff in tent sheds.",
        "In 1956, the Pune regional workshop was started in the old grain warehouse of the Food Department. Later in 1960, it was shifted to a new Motor Transport Department building at Aundh, 6.5 kilometers from Pune city.",
        "The Superintendent of Police, Maharashtra State, Pune, supervised the Motor Transport Department of the entire Maharashtra except Greater Mumbai and had complete technical control. He was the technical advisor to the Inspector General of Police, Mumbai. For technical convenience, the entire Maharashtra was divided into two circles: South Circle and East Circle, and a Police Inspector rank officer of Motor Transport was appointed for this purpose. They supervised, monitored, and provided technical advice as required to all Motor Transport departments in the circle. They also inspected each district under their jurisdiction twice a year. The South Circle includes Mumbai and Pune regions, and its headquarters is in Pune. The East Circle includes Nagpur and Aurangabad regions, and its headquarters is in Aurangabad.",
        "Shri D.P. Rao was the first Superintendent of Police, Police Motor Transport, Maharashtra State. His tenure was from 21/10/1948 to 31/03/1967. After him, Shri M.K. Fauke was the second Superintendent of Police Motor Transport, whose tenure was from 1/4/1967 to 22/7/1981. Then retired military officer V.P. Jagtap handled the post of Superintendent of Police Motor Transport from 23/7/1981 to 15/04/1994. He was promoted to Deputy Inspector General of Police, Motor Transport, Maharashtra State, Pune from 16/04/1994 to 14/11/2000, and also worked as Special Inspector General of Police, Motor Transport, Maharashtra State, Pune from 14/11/2000 to 30/11/2001, after which he retired. Meanwhile, Shri B.T. Temkar worked as Superintendent of Police Motor Transport from 21/3/1996 to 30/09/1997.",
        "Currently, Shri Atul Patil has been working as Superintendent of Police Motor Transport since 8/10/2003"
      ],
    },
  };

  return (
    <section
      id="about-us"
      className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-950 py-16 px-6 md:px-12 lg:px-24 mt-20 transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-4 tracking-tight px-4">
            {aboutContent[language].title}
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
        </div>

        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-2xl rounded-3xl p-8 md:p-12 border border-gray-200/50 dark:border-gray-700/50 transition-all duration-300 hover:shadow-3xl">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            {aboutContent[language].paragraphs.map((para, index) => (
              <div key={index} className="mb-6 last:mb-0">
                {/* ✅ Removed first-letter styling */}
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify text-base md:text-lg transition-colors duration-300">
                  {para}
                </p>
                {index < aboutContent[language].paragraphs.length - 1 && (
                  <div className="mt-6 w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent"></div>
                )}
              </div>
            ))}
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl -z-10"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-3xl -z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
