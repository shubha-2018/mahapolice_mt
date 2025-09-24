import React, { useState } from "react";

const TransferOrders: React.FC = () => {
  const [orders, setOrders] = useState<
    { title: string; date: string; pdfUrl: string }[]
  >([]);

  // Upload Handler
  const handleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files) return;

    const newOrders = Array.from(files).map((file) => ({
      title: file.name.replace(".pdf", ""),
      date: new Date().toLocaleDateString("mr-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }),
      pdfUrl: URL.createObjectURL(file),
    }));

    setOrders((prev) => [...prev, ...newOrders]);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Heading */}
      <h1 className="text-2xl font-bold text-indigo-900 mb-2">
        सर्वसाधारण बदली / बदली
      </h1>
      <p className="text-gray-600 mb-6">
        येथे तुम्ही नवीन बदली आदेश PDF फाइल्स अपलोड करू शकता आणि यादीमध्ये पाहू शकता.
      </p>

      {/* Upload Section */}
      <div className="mb-6">
        <input
          type="file"
          accept="application/pdf"
          multiple
          onChange={handleUpload}
          className="block w-full text-sm text-gray-700 border border-gray-300 rounded-lg cursor-pointer p-2"
        />
      </div>

      {/* Orders List */}
      <div className="space-y-4">
        {orders.map((order, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row justify-between items-start md:items-center bg-white shadow-md rounded-xl p-4 border"
          >
            <div>
              <h2 className="text-lg font-medium text-gray-900">
                {order.title}
              </h2>
              <p className="text-sm text-gray-500">{order.date}</p>
            </div>
            <div className="flex gap-2 mt-3 md:mt-0">
              <a
                href={order.pdfUrl}
                download
                className="px-4 py-2 bg-indigo-900 text-white rounded-lg hover:bg-indigo-700 transition"
              >
                Download
              </a>
              <a
                href={order.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-indigo-900 text-white rounded-lg hover:bg-indigo-700 transition"
              >
                View
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Extra Content Section */}
      <div className="mt-10 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
        <h2 className="text-lg font-semibold text-yellow-800 mb-2">
          सूचना:
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>अपलोड केलेली PDF फाईल योग्य आणि पूर्ण असावी.</li>
          <li>Download व View बटण वापरून आदेश पाहता येतील.</li>
          <li>प्रत्येक आदेश तारीख सहित सेव्ह केला जाईल.</li>
        </ul>
      </div>
    </div>
  );
};

export default TransferOrders;
