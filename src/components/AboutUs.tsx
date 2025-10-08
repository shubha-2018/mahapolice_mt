import { useLanguageContext } from "../context/LanguageContext";

const AboutUs = () => {
  const { language } = useLanguageContext();

  const aboutContent = {
    marathi: {
      title: "पोलीस मोटार परिवहन विभागाचा इतिहास",
      paragraphs: [
        `मुंबई राज्य पोलीस मोटर परिवहन विभागाची स्थापना १९४८ साली झाली. सुरुवातीस काही वाहने आणि सैन्यामधून निवृत्त झालेले चालक यांची जिल्हयाच्या मोटार परिवहन विभागामध्ये नेमणूक करण्यात आली. काही वाहने सैन्यदलाकडून घेण्यात आली, काही खाजगी मोटार कंत्राटदाराकडून भाडे तत्वावर घेतली होती. तांत्रिक अधिकाऱ्यांची निवड पोलीस मोटार परिवहन विभागासाठी करण्यात आली.`,
        `प्रथम पोलीस अधीक्षक, पोलीस मोटार परिवहन महाराष्ट्र राज्य या पदावर श्री. डी.पी. राव, एम.एस.सी. (इंजिनिअरिंग) बी.ई., एम.आय.व्ही. (लंडन), एम.आय.ई.एस. (ग्लास ग्लो) जी.एम.आय.आर.ई. (यू.एस.ए.) यांची निवड झाली व श्री. राव यांच्या मार्गदर्शनाखाली आवश्यक तांत्रिक अधिकाऱ्यांची निवड झाली.`,
        `१९४९ साली मुंबई प्रांतामध्ये काही नवीन जिल्हयांचा समावेश झाला आणि तीन राज्य राखीव पोलीस बल गट निर्माण करण्यात आले. ते मोटार वाहने व कर्मचारी देवून कार्यान्वित करण्यात आले.`,
        `त्याचवेळी पोलीस वाहनाची देखभाल व दुरुस्ती स्वतंत्ररित्या करण्यासाठी तसेच मोठ्या स्वरूपातील कामे उत्तम व किफायतशीर करण्यासाठी क्षेत्रीय मध्यवर्ती कर्मशाळा पुणे, बेळगांव, बडोदा येथे प्रस्तावित करण्यात आली.`,
        `1950 साली बेळगांव येथील किल्ल्यामध्ये जुन्या जेलच्या आवारात क्षेत्रीय कर्मशाळा चालू करण्यात आली.`,
        `1951 साली चालक प्रशिक्षण केंद्र प्रताप लाईन्स, बडोदया येथे दुसरी क्षेत्रीय कर्मशाळा चालू झाली. नंतर मे 1960 पर्यंत सुधारणा व नवनिर्माण करून गुजरात राज्याला हस्तांतरीत करण्यात आली.`,
        `1956 साली आधुनिक कर्मशाळा नव्या इमारतीमध्ये चालू झाली व त्याच वर्षी 1 नोव्हेंबर रोजी म्हैसुर राज्य निर्मिती झाल्यानंतर सदर कर्मशाळा म्हैसूर राज्याकडे हस्तांतरीत झाली.`,
        `1956 साली सौराष्ट्र व कच्छ विभाग मुंबई राज्यामध्ये विलीन झाल्यानंतर राज्य पोलीस मोटार परिवहन विभाग वाढविण्यात आला व राजकोट येथे नवीन क्षेत्रीय कर्मशाळा निर्माण करण्यात आली.`,
        `नोव्हेंबर 1956 साली विदर्भ व मराठवाडा मुंबई राज्यात विलीन झाल्यानंतर पोलीस परिवहन विभाग वाढविण्यात आला. त्यामध्ये औरंगाबाद व नागपूर क्षेत्रीय कर्मशाळा तात्पुरत्या जागेत निवडक कर्मचारी घेऊन तंबूच्या शेडमध्ये चालू करण्यात आली.`,
        `1960 साली पुणे शहरापासून 6.5 किलोमीटर अंतरावर औंध येथे मोटार परिवहन विभागाच्या नव्या इमारतीमध्ये स्थलांतरित करण्यात आले.`
      ],
    },
    english: {
      title: "History of Police Motor Transport, Maharashtra State, Pune",
      paragraphs: [
        `The Mumbai State Police Motor Transport Department was established in 1948. Initially, some vehicles and retired drivers from the army were appointed to the district Motor Transport Department. Some vehicles were obtained from the military, while others were hired from private motor contractors. Technical officers were selected for the Motor Transport Department.`,
        `Shri D.P. Rao, M.Sc. (Engineering) B.E., M.I.V. (London), M.I.E.S. (Glasgow) G.M.I.R.E. (U.S.A.) was appointed as the first Superintendent of Police, Police Motor Transport Maharashtra State, and under his guidance, the necessary technical officers were selected.`,
        `In 1949, new districts were added to the Bombay Province and three State Reserve Police Force battalions were formed. They were made operational with motor vehicles and staff.`,
        `At the same time, regional central workshops were proposed at Pune, Belgaum, and Baroda for independent maintenance and repair of police vehicles and to carry out large-scale work efficiently and economically.`,
        `In 1950, the regional workshop was started in the old jail premises at Belgaum Fort.`,
        `In 1951, a second regional workshop was started at the Driver Training Center, Pratap Lines, Baroda. Gradual improvements and renovations were made until May 1960, after which it was transferred to Gujarat State.`,
        `In 1956, a modern workshop started in a new building, and on 1st November 1956, after the formation of Mysore State, the workshop was transferred to Mysore State.`,
        `After the Saurashtra and Kutch divisions merged into Bombay State in 1956, the State Police Motor Transport Department expanded and a new regional workshop was established in Rajkot.`,
        `In November 1956, after Vidarbha and Marathwada merged into Bombay State, the Police Transport Department expanded there. Aurangabad and Nagpur regional workshops were started in temporary locations with selected staff in tent sheds.`,
        `In 1960, the new Motor Transport Department building at Aundh, 6.5 km from Pune city, was inaugurated.`
      ],
    },
  };

  const content = aboutContent[language];

  return (
    <section
      id="about-us"
      className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-950 py-16 px-6 md:px-12 lg:px-24 mt-20 transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-4 tracking-tight px-4">
            {content.title}
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
        </div>

        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-2xl rounded-3xl p-8 md:p-12 border border-gray-200/50 dark:border-gray-700/50 transition-all duration-300 hover:shadow-3xl">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            {content.paragraphs.map((para, index) => (
              <div key={index} className="mb-6 last:mb-0">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify text-base md:text-lg transition-colors duration-300">
                  {para}
                </p>
                {index < content.paragraphs.length - 1 && (
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

      {/* Subtle Glow Decoration */}
      <div className="absolute inset-x-0 -bottom-20 h-40 bg-gradient-to-t from-blue-500/10 to-transparent blur-3xl" />
    </section>
  );
};

export default AboutUs;
