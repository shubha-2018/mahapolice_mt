import React from "react";

const OfficialOrder: React.FC = () => {
  const orderPoints = [
    "सर्व शाखा अधिकारी संबंधित कर्मचार्‍यांची यादी तयार करतील.",
    "सर्व बदल्या आदेश लवकरात लवकर लागू केले जातील.",
    "येत्या महिन्याच्या अखेरीस सर्व कामकाजाची नोंद पूर्ण केली पाहिजे.",
  ];

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-xl mt-28">
      {/* Header */}
      <h1 className="text-2xl font-bold text-center mb-4">
        म.पो. महासंचालक कार्यालय आदेश
      </h1>
      <p className="text-center text-gray-600 mb-6">
        दिनांक: {new Date().toLocaleDateString("mr-IN")}
      </p>

      {/* Preamble */}
      <p className="mb-4 text-gray-700">
        खालील आदेशानुसार सर्व संबंधित कर्मचाऱ्यांनी आवश्यक ती कार्यवाही करावी.
      </p>

      {/* Points / Orders */}
      <ol className="list-decimal list-inside space-y-2 text-gray-800">
        {orderPoints.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ol>

      {/* Footer / Signature */}
      <div className="mt-8 text-right text-gray-700">
        <p>संचालक</p>
        <p>म.पो. महासंचालक कार्यालय</p>
      </div>
    </div>
  );
};

export default OfficialOrder;
