import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/hooks/useLanguage';

interface Leader {
  id: number;
  name: {
    marathi: string;
    english: string;
  };
  designation: {
    marathi: string;
    english: string;
  };
  imageUrl: string; // ✅ added
  imagePlaceholder: string;
}

const leaders: Leader[] = [
  {
    id: 1,
    name: {
      marathi: 'श्री. देवेंद्र फडणवीस',
      english: 'Shri. Devendra Fadnavis'
    },
    designation: {
      marathi:
      (
        <>
       माननीय  मुख्यमंत्री 
        <br/>महाराष्ट्र राज्य
        </> 
        ),

      english:
      (
        
        <>
        Hon'ble Chief Minister
        <br/>Maharashtra State
        </>
      )
    },
    imageUrl: 'data:image/jpeg;base64,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',
    imagePlaceholder: 'Official portrait of Shri. Devendra Fadnavis, Chief Minister of Maharashtra'
  },
    {
    id: 2,
    name: {
      marathi: 'श्री.एकनाथ शिंदे',
      english: 'Shri.Eknath Shinde'
    },
    designation: {
      marathi:
      (
        <>
       माननीय उपमुख्यमंत्री
        <br/>महाराष्ट्र राज्य
        </> 
        ),

      english:
      (
        
        <>
        Hon'ble Deputy Chief Minister 
        <br/>Maharashtra State
        </>
      )
    },
   
   
   imageUrl: '//images.moneycontrol.com/static-mcnews/2022/06/Eknath-Shinde-435x435.jpg',
    // imageUrl: 'data:image/jpeg;base64,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',
    imagePlaceholder: 'Official portrait of Shri.Eknath Shinde, Deputy Chief Minister of Maharashtra'
  },
  {
  id: 3,
  name: {
    marathi: 'श्री. अजित पवार',
    english: 'Shri. Ajit Pawar'
  },
  designation: {
    marathi: (
      <>
        माननीय उपमुख्यमंत्री
        <br />महाराष्ट्र राज्य
      </>
    ),
    english: (
      <>
        Hon'ble Deputy Chief Minister
        <br />Maharashtra State
      </>
    )
  },
  imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLySIDnTd2ealPwIzvgZ3eC7SP22ud4MreVg&s',
  imagePlaceholder: 'Official portrait of Shri. Ajit Pawar, Deputy Chief Minister of Maharashtra'
},

  {
    id: 4,
    name: {
      marathi: 'डॉ. पंकज भोयर',
      english: 'Dr. Pankaj Bhoyar'
    },
    designation: {
      marathi:
      (
        <>
       
       माननीय माननीय राज्य मंत्री, गृह (ग्रामीण)
        <br/>
        महाराष्ट्र राज्य
        </>
      ),
      english:
      (
        <>
     
       Hon'ble Minister of State, Home (Rural)
       <br />Maharashtra State 
      </>
      ),
    },
    imageUrl: 'data:image/jpeg;base64,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',
    imagePlaceholder: 'Official portrait of Dr. Pankaj Bhoyar, Home Minister of Maharashtra'
  },
  {
    id: 5,
    name: {
      marathi: 'श्री. योगेश कदम',
      english: 'Shri. Yogesh Kadam'
    },
    designation: {
      marathi: 
      (
        <>
       माननीय राज्य मंत्री, गृह (शहरे)
         <br/>
        महाराष्ट्र राज्य 
        </>
      )  ,
         english: 
         (
          <>
        Hon'ble Minister of State, Home (Urban)
         <br />Maharashtra State 
          </>
         )
    },
    imageUrl: 'data:image/jpeg;base64,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',
    imagePlaceholder: 'Official portrait of Shri. Yogesh Kadam, Minister of State for Home'
  },
  {
    id: 6,
    name: {
      marathi: 'श्री. इक्बालसिंग चहल',
      english: 'Shri. Iqbal Singh chahal'
    },
    designation: {

      marathi: 
      (
        <>
    माननीय अपर मुख्य सचिव ( गृह)
       <br/>
        महाराष्ट्र राज्य 

        </>
      ),
      english: 
      (
        <>
     Additional Chief Secretary (Home)
      <br />Maharashtra State

        </>
      )
    },
    imageUrl: 'https://www.asiadialogues.com/indias-most-distinguished-ias-officers/assets/img/winners/Iqbal_Singh_Chahal_1.png',
    imagePlaceholder: 'Official portrait of Shri. Iqbal Singh Chahal, Chief Secretary'
  },
  {
    id: 7,
    name: {
      marathi: 'श्रीमती रश्मि शुक्‍ला',
      english: 'Smt. Rashmi Shukla (IPS)'
    },
    designation: {
      marathi: 
      (
        
        <>
         (भा.पो.से.)<br />
       माननीय पोलीस महासंचालक
        <br/> महाराष्ट्र राज्य
        </>
        ),

      english:
      (
        <> Director General of Police  <br />Maharashtra State 
        </>
      ),
    },
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOLHMd2RGzu8JG_V1EMov6fZx8iF3quGlVpQ&s',
    imagePlaceholder: 'Official portrait of Smt. Rashmi Shukla, Director General of Police'
  },
   {
    id: 8,
    name: {
      marathi: 'श्री. दीपक शिवानंद पाण्डेय्',
      english: 'Shri. Deepak Shivanand Pandey (IPS)'
    },
    designation: {
      marathi: (
        <>
          (भा.पो.से.)<br />
          अपर पोलीस महासंचालक व संचालक <br />पोलीस दळणवळण, माहिती तंत्रज्ञान व परिवहन<br /> महाराष्ट्र राज्य, पुणे
        </>
      ),
      english: (
        <>
          Additional Director General of Police and Director, Police Communication, Information Technology and Transport <br />
          Maharashtra State, Pune.
        </>
      ),
    },
    imageUrl: 'https://www.witnessinthecorridors.com/ImgNewsPolitical/240708185120309.png',
    imagePlaceholder: 'Official portrait of Shri. Deepak Shivanand Pandey, ADG Motor Transport'
  },
   {
    id: 9,
    name: {
      marathi: 'श्री.अशोक मोराले',
      english: 'Shri.Ashok Morale'
    },
    designation: {
      marathi: (
        <>
         
          विशेष पोलिस महानिरीक्षक, मोटर परिवहन<br /> महाराष्ट्र राज्य, पुणे
        </>
      ),
      english: (
        <>
         Special Inspector Genral of Police Motor Transport  Maharashtra State, Pune.
        </>
      ),
    },
    
  
  imageUrl:'https://www.vanjariworld.com/wp-content/uploads/2018/04/Ashok-Morale.jpeg',
    imagePlaceholder: 'Official portrait of Shri.Ashok Morale , special inspector genral of police motor transport'
  }
]


const Leadership = () => {
  const { language } = useLanguage();

  return (
    <section className="py-6 police-section-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2
            className={`police-heading text-3xl md:text-4xl mb-4 ${
              language === 'marathi' ? 'marathi-text' : 'english-text'
            }`}
          >
            {language === 'marathi' ? 'आमचे नेतृत्व' : 'Our Leadership'}
          </h2>
          <p
            className={`police-body text-lg max-w-2xl mx-auto ${
              language === 'marathi' ? 'marathi-text' : 'english-text'
            }`}
          >
            {language === 'marathi'
              ? 'महाराष्ट्र पोलीस मोटर ट्रान्सपोर्ट विभागाचे नेतृत्व आणि मार्गदर्शन'
              : 'Leadership and guidance of Maharashtra Police Motor Transport Department'}
          </p>
        </div>
<div className="space-y-8 px-4 md:px-8">
  {/* First Row - 1 Image (Featured/Main Leader) */}
  <div className="flex justify-center">
    {leaders.slice(0, 1).map((leader, index) => {
      const languageClass = language === 'marathi' ? 'marathi-text' : 'english-text';
      
      return (
        <Card
          key={leader.id}
          className="group transition-all duration-700 w-64 shadow-xl hover:shadow-2xl border-0 bg-gradient-to-br from-white via-blue-50 to-indigo-100 hover:from-blue-50 hover:via-indigo-100 hover:to-purple-100 hover:-translate-y-2 rounded-xl"
          style={{ animationDelay: `${index * 150}ms` }}
        >
          <CardContent className="p-6 text-center relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-blue-400 to-transparent rounded-full transform translate-x-6 -translate-y-6"></div>
              <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-purple-400 to-transparent rounded-full transform -translate-x-4 translate-y-4"></div>
            </div>
            
            <div className="relative mb-4 mx-auto w-28 h-28 rounded-full overflow-hidden border-4 border-blue-400 p-1 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 group-hover:shadow-xl group-hover:scale-105 transition-all duration-500">
              <div className="w-full h-full rounded-full overflow-hidden bg-white p-1">
                <img
                  src={leader.imageUrl}
                  alt={leader.name[language]}
                  className="w-full h-full object-cover rounded-full"
                  loading="lazy"
                />
              </div>
            </div>
            
            <div className="space-y-2 relative z-10">
              <h3 className={`text-lg font-bold group-hover:text-blue-600 transition-colors duration-300 ${languageClass}`}>
                {leader.name[language]}
              </h3>
              <p className={`text-sm text-gray-600 font-medium ${languageClass}`}>
                {leader.designation[language]}
              </p>
              <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full group-hover:w-24 transition-all duration-500"></div>
            </div>
          </CardContent>
        </Card>
      );
    })}
  </div>

  {/* Second Row - 3 Images */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center px-4 md:px-16">
    {leaders.slice(1, 4).map((leader, index) => {
      const languageClass = language === 'marathi' ? 'marathi-text' : 'english-text';
      
      return (
        <Card
          key={leader.id}
          className="group transition-all duration-600 w-64 shadow-lg hover:shadow-xl border-0 bg-gradient-to-br from-white via-slate-50 to-gray-100 hover:from-slate-50 hover:via-blue-50 hover:to-indigo-100 hover:-translate-y-2 rounded-xl"
          style={{ animationDelay: `${(index + 1) * 150}ms` }}
        >
          <CardContent className="p-6 text-center relative overflow-hidden">
            {/* Subtle Background Effects */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-2 right-2 w-16 h-16 bg-gradient-to-bl from-blue-300 to-transparent rounded-full"></div>
              <div className="absolute bottom-2 left-2 w-14 h-14 bg-gradient-to-tr from-indigo-300 to-transparent rounded-full"></div>
            </div>
            
            <div className="relative mb-4 mx-auto w-28 h-28 rounded-full overflow-hidden border-4 border-blue-300 p-1 bg-gradient-to-r from-blue-300 to-indigo-400 group-hover:shadow-xl group-hover:scale-105 transition-all duration-400">
              <div className="w-full h-full rounded-full overflow-hidden bg-white p-1">
                <img
                  src={leader.imageUrl}
                  alt={leader.name[language]}
                  className="w-full h-full object-cover rounded-full"
                  loading="lazy"
                />
              </div>
            </div>
            
            <div className="space-y-2 relative z-10">
              <h3 className={`text-lg font-semibold group-hover:text-blue-600 transition-colors duration-300 ${languageClass}`}>
                {leader.name[language]}
              </h3>
              <p className={`text-sm text-gray-600 ${languageClass}`}>
                {leader.designation[language]}
              </p>
              <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-indigo-500 mx-auto rounded-full group-hover:w-24 transition-all duration-400"></div>
            </div>
          </CardContent>
        </Card>
      );
    })}
  </div>

  {/* Third Row - Remaining Images (3 per row) */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center px-4 md:px-16">
    {leaders.slice(4).map((leader, index) => {
      const languageClass = language === 'marathi' ? 'marathi-text' : 'english-text';
      
      return (
        <Card
          key={leader.id}
          className="group transition-all duration-600 w-64 shadow-lg hover:shadow-xl border-0 bg-gradient-to-br from-white via-slate-50 to-gray-100 hover:from-slate-50 hover:via-blue-50 hover:to-indigo-100 hover:-translate-y-2 rounded-xl"
          style={{ animationDelay: `${(index + 4) * 150}ms` }}
        >
          <CardContent className="p-6 text-center relative overflow-hidden">
            {/* Subtle Background Effects */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-2 right-2 w-16 h-16 bg-gradient-to-bl from-blue-300 to-transparent rounded-full"></div>
              <div className="absolute bottom-2 left-2 w-14 h-14 bg-gradient-to-tr from-indigo-300 to-transparent rounded-full"></div>
            </div>
            
            <div className="relative mb-4 mx-auto w-28 h-28 rounded-full overflow-hidden border-4 border-blue-300 p-1 bg-gradient-to-r from-blue-300 to-indigo-400 group-hover:shadow-xl group-hover:scale-105 transition-all duration-400">
              <div className="w-full h-full rounded-full overflow-hidden bg-white p-1">
                <img
                  src={leader.imageUrl}
                  alt={leader.name[language]}
                  className="w-full h-full object-cover rounded-full"
                  loading="lazy"
                />
              </div>
            </div>
            
            <div className="space-y-2 relative z-10">
              <h3 className={`text-lg font-semibold group-hover:text-blue-600 transition-colors duration-300 ${languageClass}`}>
                {leader.name[language]}
              </h3>
              <p className={`text-sm text-gray-600 ${languageClass}`}>
                {leader.designation[language]}
              </p>
              <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-indigo-500 mx-auto rounded-full group-hover:w-24 transition-all duration-400"></div>
            </div>
          </CardContent>
        </Card>
      );
    })}
  </div>
</div>






      </div>
    </section>
  );
};  

export default Leadership;
