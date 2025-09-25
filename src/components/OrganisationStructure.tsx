import React from "react";
import { Shield, MapPin, Star } from "lucide-react";
import { useLanguageContext } from "@/context/LanguageContext";
import id1 from "@/assets/images/Tushar-Deshmukh.jpg";
import id3 from "@/assets/images/sandip_shinde.jpg";
import id0 from "@/assets/images/Deepak_IPS.jpeg";
import id7 from "@/assets/images/Ashok_morale.jpeg";

const OrganisationStructure = () => {
  const { language } = useLanguageContext();

  // Helper function to choose language text
  const t = (textObj) => (language === "marathi" ? textObj.marathi : textObj.english);

  // DIGP MT Image
  const digpImage = "https://pbs.twimg.com/media/Do2CbyMXUAAbkN4.jpg";

  // Officers Data
  const officers = [
    {
      id: 1,
      type: "splIgp",
      name: { marathi: "श्री. दीपक शिवानंद पाण्डेय्", english: "Shri. Deepak Shivananad Pandey" },
      position: {
        marathi: (
          <>
            (भा.पो.से.)<br />
            अपर पोलीस महासंचालक व संचालक <br />
            पोलीस दळणवळण, माहिती तंत्रज्ञान व परिवहन<br />
            महाराष्ट्र राज्य, पुणे
          </>
        ),
        english: "Special Inspector General of Police, Police Transport, IT and Logistics, Maharashtra State, Pune",
      },
      image: id0,
    },
    {
      id: 2,
      type: "splIgp",
      name: { marathi: "श्री. अशोक मोराळे", english: "Shri. Ashok Morale" },
      position: {
        marathi: (
          <>
            (IPS)<br />
            विशेष पोलिस महानिरीक्षक <br />
            मोटर परिवहन विभाग <br />
            महाराष्ट्र राज्य, पुणे
          </>
        ),
        english: "Special Inspector General of Police, Motor Transport Department, Maharashtra State, Pune",
      },
      image: id7,
    },
    {
      id: 3,
      type: "sp",
      name: { marathi: "श्री तुषार देशमुख", english: "Shri Tushar Deshmukh" },
      position: { marathi: "अप्पर पोलीस अधीक्षक पुणे परिक्षेत्र", english: "Senior Police Officer, Pune Range" },
      location: { marathi: "पुणे परिक्षेत्र", english: "Pune Range" },
      image: id1,
    },
    {
      id: 4,
      type: "sp",
      name: { marathi: "श्री संदीप शिंदे", english: "Shri Sandip Shinde" },
      position: { marathi: "अप्पर पोलीस अधीक्षक संभाजीनगर परिक्षेत्र (अति. कार्यभार)", english: "Senior Police Officer, CH. Sambhaji Nagar Range (Additional Charge)" },
      location: { marathi: "संभाजी नगर परिक्षेत्र", english: "Sambhaji Nagar Range" },
      image: id3,
    },
    {
      id: 5,
      type: "sp",
      name: { marathi: "श्री संदीप शिंदे", english: "Shri Sandip Shinde" },
      position: { marathi: "अप्पर पोलीस अधीक्षक नागपूर परिक्षेत्र", english: "Senior Police Officer, Nagpur Range" },
      location: { marathi: "नागपूर परिक्षेत्र", english: "Nagpur Range" },
      image: null,
    },
    {
      id: 6,
      type: "sp",
      name: { marathi: "श्री तुषार देशमुख", english: "Shri Tushar Deshmukh" },
      position: { marathi: "अप्पर पोलीस अधीक्षक कोकण परिक्षेत्र (अति. कार्यभार)", english: "Senior Police Officer, Kokan Range (Additional Charge)" },
      location: { marathi: "कोकण परिक्षेत्र", english: "Kokan Range" },
      image: null,
    },
    {
      id: 7,
      type: "sp",
      name: { marathi: "श्रीमती गायत्री पवार", english: "Gayatri Pawar" },
      position: { marathi: "पोलीस अधीक्षक मुख्यालय पुणे", english: "Senior Police Officer, Head Quarter, Pune" },
      location: { marathi: "मुख्यालय, पुणे", english: "Head Quarter, Pune" },
      image: null,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Organisation Structure Section */}
      <section className="py-8 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-3">
            {t({ marathi: "संघटनात्मक रचना", english: "ORGANISATIONAL STRUCTURE" })}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* SPL.IGP Cards */}
            {officers
              .filter((o) => o.type === "splIgp")
              .map((officer) => (
                <div key={officer.id} className="group relative">
                  <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-500 p-6 border border-gray-100 hover:border-indigo-200 transform hover:-translate-y-2">
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <div className="relative mb-4 mx-auto w-36 h-48 rounded-lg overflow-hidden bg-gradient-to-br from-indigo-500 to-purple-600 shadow-md group-hover:shadow-indigo-300/50 flex items-center justify-center">
                      <img
                        src={officer.image}
                        alt={t(officer.name)}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="text-center relative z-10">
                      <h3 className="text-lg font-bold text-gray-800 mb-1 group-hover:text-indigo-700">
                        {t(officer.name)}
                      </h3>
                      <p className="text-gray-600 text-sm">{t(officer.position)}</p>
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
              {t({ marathi: "तांत्रिक अधिकारी", english: "TECHNICAL OFFICER" })}
            </h1>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>

          {/* DIGP Section */}
          <div className="text-center mb-12">
            <div className="bg-white rounded-lg shadow-md p-4 w-64 mx-auto border">
              <div className="w-44 h-48 mx-auto mb-4 overflow-hidden rounded-lg shadow-md bg-gray-100">
                <img
                  src={digpImage}
                  alt={t({ marathi: "श्री. अतुल पाटील", english: "Shri. Atul Patil" })}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-2">
                <h2 className="text-lg font-bold text-gray-800">
                  {t({ marathi: "श्री. अतुल पाटील", english: "Shri. Atul Patil" })}
                </h2>
                <div className="inline-flex items-center gap-2 bg-blue-100 px-3 py-1 rounded-full">
                  <Star className="w-3 h-3 text-blue-600" />
                  <span className="text-black font-bold text-1xl">
                    {t({ marathi: "उपमहानिरीक्षक", english: "DIG MT" })}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* SP MT Officers Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {officers
              .filter((o) => o.type === "sp")
              .map((officer) => (
                <div
                  key={officer.id}
                  className="bg-white rounded-lg shadow-md border overflow-hidden"
                >
                  <div className="h-48 overflow-hidden bg-gray-100">
                    {officer.image && (
                      <img
                        src={officer.image}
                        alt={t(officer.name)}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                  <div className="p-5 space-y-3">
                    <h3 className="font-bold text-gray-800 text-lg leading-tight">{t(officer.name)}</h3>
                    <div className="space-y-2">
                      <div className="inline-flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-full">
                        <Star className="w-3 h-3 text-blue-600" />
                        <span className="text-sm font-medium text-gray-700">{t(officer.position)}</span>
                      </div>
                      {officer.location && (
                        <div className="flex items-center gap-2 text-gray-600">
                          <MapPin className="w-4 h-4 text-red-500" />
                          <span className="text-sm">{t(officer.location)}</span>
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
