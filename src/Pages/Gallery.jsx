// src/pages/GalleryPage.jsx
import React, { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import img1 from "../assets/images/services/s1.jpg";
import img2 from "../assets/images/services/s2.jpg";
import img3 from "../assets/images/services/s3.jpg";
import img4 from "../assets/images/services/s4.jpg";
import img5 from "../assets/images/services/s5.jpg";
import img6 from "../assets/images/services/s6.jpg";
import img7 from "../assets/images/services/s7.jpg";
import img8 from "../assets/images/services/s8.jpg";
import img9 from "../assets/images/services/s9.jpg";
import img10 from "../assets/images/services/s10.jpg";
import img11 from "../assets/images/services/s12.jpg";
import img12 from "../assets/images/services/s11.jpg";
import img13 from "../assets/images/services/n1.jpg";
import img14 from "../assets/images/services/n2.jpg";
import img15 from "../assets/images/services/n3.jpg";

import GalleryHero from "../Components/GalleryHero";

export default function GalleryPage() {
  const images = [
    { src: img1, title: "Expert Packing Solutions" },
    { src: img2, title: "Safe Loading & Unloading" },
    { src: img3, title: "Efficient Relocation Plans" },
    { src: img4, title: "Reliable Household Shifting" },
    { src: img5, title: "City-to-City Relocations" },
    { src: img6, title: "Specialized Vehicle Shifting" },
    { src: img9, title: "Pet Transportation with Comfort" },
    { src: img10, title: "On-Time Delivery Assured" },
    { src: img11, title: "Smart Packing Techniques" },
    { src: img12, title: "Reliable Loading & Unloading" },
    { src: img7, title: "Car Transport Services" },
    { src: img8, title: "Bike Transportation Services" },
    { src: img15, title: "Electric Bill" },
    { src: img13, title: "Shop Address" },
    { src: img14, title: "Shop Address" },
  ];

  const [selectedIndex, setSelectedIndex] = useState(null);

  const closeModal = () => setSelectedIndex(null);
  const prev = () =>
    setSelectedIndex(selectedIndex > 0 ? selectedIndex - 1 : images.length - 1);
  const next = () =>
    setSelectedIndex(selectedIndex < images.length - 1 ? selectedIndex + 1 : 0);

  return (
    <>
      <GalleryHero />

      <section className="w-full py-10 px-6 bg-white font-[Poppins]">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-[#1C1C1C]">
            Every Move Tells a Story
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto mb-10">
            Our gallery shows real packing, loading, shifting, and delivery
            experiences handled by our professional team.
          </p>

          {/* Simple Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {images.map((img, index) => (
              <div
                key={index}
                className="cursor-pointer border rounded-lg overflow-hidden"
                onClick={() => setSelectedIndex(index)}
              >
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-40 object-cover"
                />
                <p className="p-2 text-sm text-[#1C1C1C] font-medium">
                  {img.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Simple Modal */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-white"
          >
            <X size={30} />
          </button>

          <div className="max-w-3xl w-full">
            <img
              src={images[selectedIndex].src}
              alt={images[selectedIndex].title}
              className="w-full max-h-[80vh] object-contain rounded"
            />

            <p className="text-center text-white mt-3 text-lg">
              {images[selectedIndex].title}
            </p>

            {/* Simple Prev/Next */}
            <button
              onClick={prev}
              className="absolute top-1/2 left-6 text-white"
            >
              <ChevronLeft size={35} />
            </button>

            <button
              onClick={next}
              className="absolute top-1/2 right-6 text-white"
            >
              <ChevronRight size={35} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
