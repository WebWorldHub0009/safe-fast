// src/components/RateChart.jsx
import React from "react";

export default function RateChart() {
  const rates = [
    {
      type: "1 BHK Home",
      values: [
        "Rs. 7,000 - 11,000",
        "Rs. 12,000 - 16,000",
        "Rs. 20,000 - 25,000",
        "Rs. 26,000 - 32,000",
        "Rs. 30,000 - 35,000",
      ],
    },
    {
      type: "2 BHK Home",
      values: [
        "Rs. 12,000 - 15,000",
        "Rs. 20,000 - 23,000",
        "Rs. 25,000 - 30,000",
        "Rs. 32,000 - 40,000",
        "Rs. 40,000 - 45,000",
      ],
    },
    {
      type: "3 BHK Home",
      values: [
        "Rs. 15,000 - 18,000",
        "Rs. 25,000 - 30,000",
        "Rs. 35,000 - 40,000",
        "Rs. 45,000 - 50,000",
        "Rs. 50,000 - 65,000",
      ],
    },
    {
      type: "4 BHK / Villa",
      values: [
        "Rs. 25,000 - 30,000",
        "Rs. 35,000 - 40,000",
        "Rs. 50,000 - 60,000",
        "Rs. 55,000 - 65,000",
        "Rs. 70,000 - 90,000",
      ],
    },
    {
      type: "Car Transportation",
      values: [
        "Rs. 9,000 - 11,500",
        "Rs. 12,000 - 14,500",
        "Rs. 17,000 - 20,000",
        "Rs. 21,000 - 25,000",
        "-",
      ],
    },
    {
      type: "Bike Transportation",
      values: [
        "Rs. 3,000 - 7,000",
        "Rs. 7,000 - 10,500",
        "Rs. 10,000 - 15,000",
        "Rs. 15,000 - 18,000",
        "-",
      ],
    },
  ];

  const headers = [
    "Shifting Type",
    "Up to 50 KM",
    "Up to 500 KM",
    "Up to 1000 KM",
    "Up to 1500 KM",
    "Within 2500 KM",
  ];

  return (
    <section className="py-16 px-4 sm:px-8 lg:px-16 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-gray-900">
          Rates & Charges –{" "}
          <span className="text-yellow-500">Safe Fast Packers</span>{" "}
          <span className="text-red-600">and Movers</span>
        </h2>

        <div className="overflow-x-auto shadow-2xl rounded-3xl border border-gray-200">
          <table className="w-full border-collapse rounded-3xl overflow-hidden">
            <thead>
              <tr className="bg-gradient-to-r from-yellow-500 to-red-500 text-white text-sm sm:text-base">
                {headers.map((head, idx) => (
                  <th
                    key={idx}
                    className="px-4 sm:px-6 py-3 text-center font-semibold"
                  >
                    {head}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rates.map((row, idx) => (
                <tr
                  key={idx}
                  className={`text-center text-gray-900 text-sm sm:text-base ${
                    idx % 2 === 0 ? "bg-white" : "bg-yellow-50"
                  } hover:bg-yellow-100 transition`}
                >
                  <td className="px-4 sm:px-6 py-3 font-bold text-gray-900">
                    {row.type}
                  </td>
                  {row.values.map((val, i) => (
                    <td key={i} className="px-4 sm:px-6 py-3">
                      {val}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-center text-gray-600 text-sm mt-6">
          *Note: Prices are approximate and may vary depending on distance, goods volume, and additional services.
        </p>
      </div>
    </section>
  );
}
