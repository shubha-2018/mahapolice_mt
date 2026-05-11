import React from "react";
import { useLanguage } from "@/hooks/useLanguage";

import officer1 from "../assets/images/seniorOff/senioroff1.jpg";
import officer2 from "../assets/images/seniorOff/senioroff2.jpg";
import officer3 from "../assets/images/seniorOff/senioroff3.jpg";

const SeniorOfficers = () => {
  const { language: lang } = useLanguage();

  const text = {
    title: {
      marathi: "विभागाचे उच्च पदस्थ  पूर्व तांत्रिक अधिकारी ",
      english: "Former Directors of the Department",
    },
  };

  const officers = [
    {
      image: officer3,
      name: { marathi: "श्री.डी.पी. राव", english: "Mr. D. P. Rao" },
      designation: {
        marathi: "पोलीस अधीक्षक, पोलीस  मोटार परिवहन, महाराष्ट्र राज्य",
        english: "Superintendent of Police, Motor Transport, Maharashtra State",
      },
      tenure: { marathi: "21/10/1948 ते 31/03/1967", english: "1948 - 1967" },
    },
    {
      image: officer2,
      name: { marathi: "श्री. एम. के. फडके", english: "Mr. M. K. Phadke" },
      designation: {
        marathi: "पोलीस अधीक्षक, पोलीस मोटार परिवहन, महाराष्ट्र राज्य",
        english: "Superintendent of Police, Motor Transport, Maharashtra State",
      },
      tenure: { marathi: "1/4/1967 ते 22/7/1981", english: "1967 - 1981" },
    },
    {
      image: officer1,
      name: { marathi: "डॉ. पी. जगताप", english: "Dr. P. Jagtap" },
      designation: {
        marathi: "संयुक्त दलातील निवृत्त अधिकारी",
        english: "Retired Senior Officer (Joint Cadre)",
      },
      roles: [
        {
          marathi: "23/07/1981 ते 15/04/1994 — पोलीस अधीक्षक",
          english: "1981 - 1994 — Superintendent of Police",
        },
        {
          marathi:
            "16/04/1994 ते 14/11/2000 — पोलीस उप महानिरीक्षक, मोटार परिवहन",
          english:
            "1994 - 2000 — Deputy Inspector General, Motor Transport",
        },
        {
          marathi:
            "14/11/2000 ते 30/11/2001 — विशेष पोलीस महानिरीक्षक, मोटार परिवहन",
          english:
            "2000 - 2001 — Special Inspector General, Motor Transport",
        },
      ],
    },
  ];

  return (
    <section className="bg-gray-100 py-16 min-h-screen">
      <h2 className="text-center text-4xl font-bold text-blue-900 mb-10">
        {text.title[lang]}
      </h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">

        {officers.map((officer, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl p-8 text-center shadow-xl
            transform transition-all duration-500
            hover:shadow-[0_8px_30px_rgba(0,0,0,0.18)]
            hover:-translate-y-2 hover:scale-[1.04]"
          >
            {/* Updated Photo Box → Taller Rectangle */}
            <div className="w-40 h-56 mx-auto overflow-hidden shadow-md transition-transform duration-700 rounded-xl">
              <img src={officer.image} alt="" className="w-full h-full object-cover" />
            </div>

            <h3 className="mt-6 text-xl font-bold text-gray-900">
              {officer.name[lang]}
            </h3>

            <p className="mt-2 text-gray-700 font-medium">
              {officer.designation[lang]}
            </p>

            {officer.roles ? (
              <div className="mt-4 text-gray-600 text-sm space-y-1">
                {officer.roles.map((role, index) => (
                  <p key={index}>{role[lang]}</p>
                ))}
              </div>
            ) : (
              <p className="mt-2 text-gray-500 text-sm">
                {officer.tenure[lang]}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default SeniorOfficers;
