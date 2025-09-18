import React from "react";
import { useLanguageContext } from "@/context/LanguageContext";

import pune1 from "../assets/images/police0.jpg";
import pune2 from "../assets/images/police1.jpg";
import pune3 from "../assets/images/police2.jpg";

import sambhaji1 from "../assets/images/police3.jpg";
import sambhaji2 from "../assets/images/police4.jpg";
import sambhaji3 from "../assets/images/police5.jpg";

import nagpur1 from "../assets/images/police6.jpg";
import nagpur2 from "../assets/images/police7.jpg";
import nagpur3 from "../assets/images/police6.jpg";

const WorkshopPhotos = () => {
  const { language } = useLanguageContext();

  const workshops = [
    {
      key: "pune",
      title: { marathi: "पुणे वर्कशॉप", english: "Pune Workshop" },
      images: [pune1, pune2, pune3],
    },
    {
      key: "sambhaji",
      title: { marathi: "छत्रपती संभाजीनगर वर्कशॉप", english: "Chhatrapati Sambhajinagar Workshop" },
      images: [sambhaji1, sambhaji2, sambhaji3],
    },
    {
      key: "nagpur",
      title: { marathi: "नागपूर वर्कशॉप", english: "Nagpur Workshop" },
      images: [nagpur1, nagpur2, nagpur3],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 py-16">
      <div className="container mx-auto px-4">
        {/* Main Title */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-800 via-indigo-700 to-purple-700 bg-clip-text text-transparent mb-4">
            {language === "marathi" ? "वर्कशॉप फोटो" : "WORKSHOP PHOTOS"}
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto space-y-20">
          {workshops.map((workshop) => (
            <div key={workshop.key}>
              <div className="text-center mb-6">
                <h2 className="text-2xl md:text-3xl font-bold uppercase bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                  {language === "marathi" ? workshop.title.marathi : workshop.title.english}
                </h2>
                <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full mx-auto mt-2"></div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {workshop.images.map((img, i) => (
                  <div key={i} className="group">
                    <div className="relative overflow-hidden rounded-xl shadow-md hover:shadow-xl border border-gray-200 bg-white">
                      <div className="w-full h-52 relative">
                        <img
                          src={img}
                          alt={`${language === "marathi" ? workshop.title.marathi : workshop.title.english} ${i + 1}`}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                      </div>
                      <div className="p-3 bg-white">
                        <p className="text-xs md:text-sm text-gray-600 font-medium text-center">
                          {language === "marathi"
                            ? `${workshop.title.marathi} - प्रतिमा ${i + 1}`
                            : `${workshop.title.english} - Image ${i + 1}`}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkshopPhotos;
