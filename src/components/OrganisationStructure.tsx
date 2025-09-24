import React from "react";
import { Shield, MapPin, Star } from "lucide-react";
import { useLanguageContext } from "@/context/LanguageContext";
import id1 from "@/assets/images/Tushar-Deshmukh.jpg";
import id2 from "@/assets/images/AtulPatilDIG.jpg";
import id3 from "@/assets/images/sandip_shinde.jpg";
import id4 from "@/assets/images/deepak_pandy.jpeg";
import id5 from "@/assets/images/police0.jpg";
import id6 from "@/assets/images/PoliceCar2.jpg";
import id0 from "@/assets/images/Deepak_IPS.jpeg";
import id7 from "@/assets/images/Ashok_morale.jpeg";




const OrganisationStructure = () => {
  const { language } = useLanguageContext();

  // DIGP MT Image
  const digpImage =
    "https://pbs.twimg.com/media/Do2CbyMXUAAbkN4.jpg";

  // Officers Data
  const officers = [
  //  {
  // id: 0,
  // type: "addlDgp",
  // name: { marathi: "श्री. दीपक शिवानंद पाण्डेय्", english: "ADDL.DGP" },
  // position: {
  //   marathi: (
  //     <>
  //       (भा.पो.से.)<br />
  //       अपर पोलीस महासंचालक व संचालक <br />
  //       पोलीस दळणवळण, माहिती तंत्रज्ञान व परिवहन<br />
  //       महाराष्ट्र राज्य, पुणे
  //     </>
  //   ),
  //   english: "Additional Director General of Police",
  // },
  // image: id0, // now correctly imported
  {
      id: 1,
      type: "splIgp",
      name: { marathi: "श्री. दीपक शिवानंद पाण्डेय् ", english: "SPL. IGP MT" },
      position: {
        marathi:
        (<>
       (भा.पो.से.)<br />
      अपर पोलीस महासंचालक व संचालक <br />
         पोलीस दळणवळण, माहिती तंत्रज्ञान व परिवहन<br />
         महाराष्ट्र राज्य, पुणे
        </>),
        english: "Special Inspector General of Police",
      },
      image:id0,
    
},
    {
      id: 1,
      type: "splIgp",
      name: { marathi: "श्री. अशोक मोराळे ", english: "SPL. IGP MT" },
      position: {
        marathi:
        (<>
        (IPS)<br/>
        विशेष पोलिस महानिरीक्षक <br/>मोटर परिवहन विभाग <br/>महाराष्ट्र राज्य, पुणे
        </>),
        english: "Special Inspector General of Police",
      },
      image:id7,
    },
    {
      id: 2,
      type: "sp",
      name: { marathi: "श्री तुषार देशमुख ", english: "SP MT Pune Range" },
      position: { marathi: "अप्पर पोलीस अधीक्षक पुणे परिक्षेत्र ", english: "Senior Police Officer" },
      location: { marathi: "पुणे परिक्षेत्र", english: "Pune Range" },
      image: id1,
    },
    {
      id: 3,
      type: "sp",
      name: {
        marathi: "श्री संदीप शिंदे   ",
        english: "SP MT CH. Sambhaji Nagar Range",
      },
      position: { marathi: "अप्पर पोलीस अधीक्षक संभाजीनगर परिक्षेत्र (अति. कार्यभार )", english: "Senior Police Officer" },
      location: { marathi: "संभाजी नगर परिक्षेत्र ", english: "Sambhaji Nagar Range" },
      image: id3,
    },
    {
      id: 4,
      type: "sp",
      name: { marathi: "श्री संदीप शिंदे", english: "SP MT Nagpur Range" },
      position: { marathi: "अप्पर पोलीस अधीक्षक नागपूर परिक्षेत्र ", english: "Senior Police Officer" },
      location: { marathi: "नागपूर परिक्षेत्र ", english: "Nagpur Range" },
      // image:id3,
    },
    {
      id: 5,
      type: "sp",
      name: { marathi: "श्री तुषार देशमुख ", english: "SP MT Kokan Range" },
      position: { marathi: "अप्पर पोलीस अधीक्षक कोकण परिक्षेत्र (अति. कार्यभार )", english: "Senior Police Officer" },
      location: { marathi: "कोकण परिक्षेत्र", english: "Kokan Range" },
      // image:id1
    },
    {
      id: 6,
      type: "sp",
      name: { marathi: "श्रीमती गायत्री पवार  ", english: "SP MT Head Quarter, Pune" },
      position: { marathi: "पोलीस अधीक्षक मुख्यालय पुणे", english: "Senior Police Officer" },
      location: { marathi: "मुख्यालय, पुणे", english: "Head Quarter, Pune" },
      image:null
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Organisation Structure Section */}
      <section className="py-8 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-3">
            {language === "marathi" ? "संघटनात्मक रचना" : "ORGANISATIONAL STRUCTURE"}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* ADDL.DGP Card */}
            {officers
              .filter((o) => o.type === "addlDgp")
              .map((officer) => (
                <div key={officer.id} className="group relative">
                  <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-500 p-6 border border-gray-100 hover:border-blue-200 transform hover:-translate-y-2">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative mb-4 mx-auto w-36 h-48 rounded-lg overflow-hidden bg-gradient-to-br from-blue-500 to-indigo-600 shadow-md group-hover:shadow-blue-300/50 flex items-center justify-center text-white font-semibold text-base">
                      <div className="text-center">
                        <div className="w-12 h-12 mx-auto mb-2 bg-white/20 rounded-full flex items-center justify-center">
                          <Shield className="w-6 h-6" />
                        </div>
                        <p>{language === "marathi" ? officer.name.marathi : officer.name.english}</p>
                      </div>
                    </div>
                    <div className="text-center relative z-10">
                      <h3 className="text-lg font-bold text-gray-800 mb-1 group-hover:text-blue-700">
                        {language === "marathi" ? officer.name.marathi : officer.name.english}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {language === "marathi" ? officer.position.marathi : officer.position.english}
                      </p>
                    </div>
                  </div>
                </div>
              ))}

            {/* SPL.IGP MT Card */}
            {officers
              .filter((o) => o.type === "splIgp")
              .map((officer) => (
                <div key={officer.id} className="group relative">
                  <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-500 p-6 border border-gray-100 hover:border-indigo-200 transform hover:-translate-y-2">
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <div className="relative mb-4 mx-auto w-36 h-48 rounded-lg overflow-hidden bg-gradient-to-br from-indigo-500 to-purple-600 shadow-md group-hover:shadow-indigo-300/50 flex items-center justify-center">
                      <img
                        src={officer.image}
                        alt={language === "marathi" ? officer.name.marathi : officer.name.english}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="text-center relative z-10">
                      <h3 className="text-lg font-bold text-gray-800 mb-1 group-hover:text-indigo-700">
                        {language === "marathi" ? officer.name.marathi : officer.name.english}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {language === "marathi" ? officer.position.marathi : officer.position.english}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Technical Officer Section */}
      <section className="p-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-black mb-2">
              {language === "marathi" ? "तांत्रिक अधिकारी" : "TECHNICAL OFFICER"}
            </h1>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>

          {/* DIGP Section */}
        <div className="text-center mb-12">
  <div className="bg-white rounded-lg shadow-md p-4 w-64 mx-auto border">
    <div className="w-44 h-48 mx-auto mb-4 overflow-hidden rounded-lg shadow-md bg-gray-100">
      <img
        src={digpImage}
        alt="श्री. अतुल पाटील"
        className="w-full h-full object-cover"
      />
    </div>
    <div className="space-y-2">
      <h2 className="text-lg font-bold text-gray-800">श्री. अतुल पाटील</h2>
      <div className="inline-flex items-center gap-2 bg-blue-100 px-3 py-1 rounded-full">
        <Star className="w-3 h-3 text-blue-600" />
        <span className="text-black font-bold text-1xl ">
          {language === "marathi" ? "उपमहानिरीक्षक " : "DIG MT"}
        </span>
      </div>
    </div>
  </div>
</div>

          {/* SP MT Officers Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
  {officers
    .filter((o) => o.type === "sp") // फक्त SP officers घेणार
    .map((officer) => (
      <div
        key={officer.id}
        className="bg-white rounded-lg shadow-md border overflow-hidden"
      >
        <div className="h-48 overflow-hidden bg-gray-100">
          <img
            src={officer.image}
            alt={language === "marathi" ? officer.name.marathi : officer.name.english}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-5 space-y-3">
          <h3 className="font-bold text-gray-800 text-lg leading-tight">
            {language === "marathi" ? officer.name.marathi : officer.name.english}
          </h3>
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-full">
              <Star className="w-3 h-3 text-blue-600" />
              <span className="text-sm font-medium text-gray-700">
                {language === "marathi"
                  ? officer.position.marathi
                  : officer.position.english}
              </span>
            </div>
            {officer.location && (
              <div className="flex items-center gap-2 text-gray-600">
                <MapPin className="w-4 h-4 text-red-500" />
                <span className="text-sm">
                  {language === "marathi"
                    ? officer.location.marathi
                    : officer.location.english}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    ))}
</div>


        </div>
      </section>
    </div>
  );
};

export default OrganisationStructure;