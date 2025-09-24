// src/pages/CertificatePage.jsx
import React, { useState } from "react";
import {
  FaEye,
  FaDownload,
  FaTimes,
  FaShieldAlt,
  FaCheckCircle,
  FaUserTie,
} from "react-icons/fa";
import { HiDocumentText } from "react-icons/hi2";

import gst from "../assets/certificates/gsat1.pdf";

import DocumentsHero from "../Components/DocumentsHero";

const certificates = [
  {
    id: 1,
    name: "GST Certificate",
    description:
      "Official Goods and Services Tax certificate ensuring compliance and trust.",
    file: gst,
    tag: "Government",
  },
 
];

const CertificatePage = () => {
  const [previewFile, setPreviewFile] = useState(null);

  return (
    <>
      <DocumentsHero />

      {/* Certificates Section */}
      <section className="relative w-full bg-gradient-to-b from-[#f9fafb] to-white py-20 px-6 font-[Poppins]">
        <div className="max-w-7xl mx-auto">
          {/* Page Title */}
          <div className="text-center mb-16" id="docs">
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#1C1C1C] uppercase">
              Verified <span className="text-[#FFD700]">Certificates</span>
            </h1>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              At{" "}
              <span className="font-bold text-[#3CB371]">
                Safe Fast Packers & Movers
              </span>
              , we value transparency and credibility. Explore our official
              documents that validate our services, authenticity, and compliance
              with legal standards.
            </p>
          </div>

          {/* Certificates Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {certificates.map(({ id, name, description, file, tag }) => (
              <div
                key={id}
                className="relative bg-white/90 backdrop-blur-lg border border-gray-200 rounded-3xl shadow-xl p-6 flex flex-col transition-transform hover:-translate-y-2 hover:shadow-2xl duration-300"
              >
                {/* Ribbon */}
                <div className="absolute top-4 right-4 bg-gradient-to-r from-[#FFD700] to-[#3CB371] text-[#1C1C1C] text-xs font-bold px-3 py-1 rounded-full shadow">
                  {tag}
                </div>

                {/* Title */}
                <div className="flex items-center gap-4 mb-4">
                  <HiDocumentText className="text-[#3CB371] text-4xl" />
                  <h2 className="text-xl font-bold text-[#1C1C1C]">{name}</h2>
                </div>

                {/* Description */}
                <p className="text-gray-700 mb-6 text-base leading-relaxed flex-1">
                  {description}
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row items-center gap-4 w-full">
                  <button
                    onClick={() => setPreviewFile(file)}
                    className="w-full sm:w-auto flex-1 bg-gradient-to-r from-[#FFD700] to-[#3CB371] hover:from-[#FFC300] hover:to-[#2E8B57] text-[#1C1C1C] font-semibold py-3 px-4 rounded-xl flex items-center justify-center gap-2 text-sm md:text-base shadow-lg transition"
                  >
                    <FaEye />
                    View
                  </button>

                  <a
                    href={file}
                    download
                    className="w-full sm:w-auto flex-1 border border-[#3CB371] text-[#3CB371] hover:bg-[#3CB371] hover:text-white font-semibold py-3 px-4 rounded-xl flex items-center justify-center gap-2 text-sm md:text-base shadow transition"
                  >
                    <FaDownload />
                    Download
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Extra Info Section */}
      <section className="bg-gray-100 text-[#1C1C1C] py-20 px-6 shadow-xl font-[Poppins]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">
          <div className="flex flex-col items-center">
            <FaShieldAlt className="text-[#3CB371] text-5xl mb-4" />
            <h3 className="text-xl font-bold">Government Approved</h3>
            <p className="mt-2 text-gray-600 text-sm">
              All our certificates are verified and approved by government
              authorities.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <FaCheckCircle className="text-[#FFD700] text-5xl mb-4" />
            <h3 className="text-xl font-bold">100% Authentic</h3>
            <p className="mt-2 text-gray-600 text-sm">
              Genuine legal documents that ensure transparency and trust.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <FaUserTie className="text-[#1C1C1C] text-5xl mb-4" />
            <h3 className="text-xl font-bold">Trusted Brand</h3>
            <p className="mt-2 text-gray-600 text-sm">
              Serving thousands of happy customers with credibility for years.
            </p>
          </div>
        </div>
      </section>

      {/* PDF Preview Modal */}
      {previewFile && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-lg p-6">
          <div className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden">
            <button
              onClick={() => setPreviewFile(null)}
              className="absolute top-3 right-3 bg-[#FFD700] text-[#1C1C1C] rounded-full p-2 shadow hover:bg-[#FFC300] transition"
            >
              <FaTimes />
            </button>
            <iframe
              src={previewFile}
              title="Certificate Preview"
              className="w-full h-[80vh] border-0 rounded-b-2xl"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default CertificatePage;
