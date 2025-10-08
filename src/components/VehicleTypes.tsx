import React from "react";
import { useLanguageContext } from "@/context/LanguageContext";

// ✅ Import all images from assets folder
import car1 from "../assets/images/car1.jpg";
import car2 from "../assets/images/car2.jpg";
import car3 from "../assets/images/car3.jpg";

import jeep1 from "../assets/images/j1.jpg";
import jeep2 from "../assets/images/j2.jpg";
import jeep3 from "../assets/images/j3.jpg";

import van1 from "../assets/images/car1.jpg";
import van2 from "../assets/images/car2.jpg";
import van3 from "../assets/images/car3.jpg";

import bike1 from "../assets/images/j1.jpg";
import bike2 from "../assets/images/j2.jpg";
import bike3 from "../assets/images/j3.jpg";

import spv1 from "../assets/images/car1.jpg";
import spv2 from "../assets/images/car2.jpg";
import spv3 from "../assets/images/car3.jpg";

const VehicleTypes = () => {
  const { language } = useLanguageContext();

  const vehicleData = [
    { 
      id: 1, 
      title: { marathi: "कार", english: "CAR" }, 
      images: [car1, car2, car3] 
    },
    { 
      id: 2, 
      title: { marathi: "जीप", english: "JEEP" }, 
      images: [jeep1, jeep2, jeep3] 
    },
    { 
      id: 3, 
      title: { marathi: "लाइट व्हॅन", english: "LIGHT VAN" }, 
      images: [van1, van2, van3] 
    },
    { 
      id: 4, 
      title: { marathi: "मोटार  सायकल", english: "MOTOR CYCLE" }, 
      images: [bike1, bike2, bike3] 
    },
    { 
      id: 5, 
      title: { marathi: "विशेष उपयोगी वाहन", english: "SPECIAL PURPOSE VEHICLES" }, 
      images: [spv1, spv2, spv3] 
    },
  ];

  return (
    <div className="py-12 px-6 md:px-12 lg:px-24 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Main Title */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {language === "marathi" ? "छायाचित्रांसह वाहन प्रकार" : "Type of Vehicle with Photo"}
          </h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        {/* Vehicle Categories */}
        <div className="space-y-12">
          {vehicleData.map((vehicle) => (
            <div key={vehicle.id} className="text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
                {vehicle.title[language]}
              </h2>

              <div className="flex justify-center">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl">
                  {vehicle.images.map((image, index) => (
                    <div
                      key={index}
                      className="group relative bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-all duration-300 w-72 h-[320px] flex flex-col"
                    >
                      {/* Card Header */}
                      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center py-2">
                        <h3 className="font-semibold text-base">
                          {vehicle.title[language]} {index + 1}
                        </h3>
                      </div>

                      {/* Image */}
                      <div className="relative flex-grow overflow-hidden bg-gray-100">
                        <img
                          src={image}
                          alt={`${vehicle.title[language]} ${index + 1}`}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
                      </div>

                      {/* Footer */}
                      <div className="p-2 bg-white">
                        <div className="flex justify-center">
                          <div className="inline-flex items-center justify-center w-8 h-8 bg-blue-100 text-blue-600 rounded-full font-bold text-sm">
                            {index + 1}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VehicleTypes;
