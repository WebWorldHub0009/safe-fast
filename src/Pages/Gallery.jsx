// src/pages/GalleryPage.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

import GalleryHero from "../Components/GalleryHero"

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
  ];

  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleClose = () => setSelectedIndex(null);
  const handlePrev = () =>
    setSelectedIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  const handleNext = () =>
    setSelectedIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));

  return (
    <>
      
<GalleryHero/>
      {/* Gallery Section */}
      <section className="w-full py-8 px-6 bg-gradient-to-b from-white to-[#F9F9F9] font-[Poppins]">
        <div className="max-w-7xl mx-auto text-center">
          {/* Premium Heading */}
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 leading-snug text-[#1C1C1C]">
            “Every move tells a story, <br /> we craft yours with{" "}
            <span className="text-[#C62828]">care</span> &{" "}
            <span className="text-[#3CB371]">precision</span>.”
          </h2>
          <p className="text-[#555] max-w-2xl mx-auto mb-10 leading-relaxed">
            At{" "}
            <span className="font-semibold text-[#C62828]">
              Safe Fast Packers & Movers
            </span>
            , we deliver trust, safety, and reliability. Explore our journey in
            pictures — from expert packing to seamless transportation. See why
            thousands of families and businesses rely on us.
          </p>

          {/* Gallery Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            id="gallery"
          >
            {images.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className={`relative rounded-xl overflow-hidden shadow-lg cursor-pointer group ${
                  index % 6 === 0 || index % 6 === 1 ? "lg:col-span-2" : ""
                }`}
                onClick={() => setSelectedIndex(index)}
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
                />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-[#1C1C1C]/90 to-transparent p-4">
                  <h3 className="text-white font-semibold text-sm sm:text-base">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Modal with Slider */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            className="fixed inset-0 z-50 bg-[#1C1C1C]/95 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-5 right-5 text-white p-2 bg-gradient-to-r from-[#C62828] to-[#3CB371] rounded-full hover:scale-105 transition"
            >
              <X size={26} />
            </button>

            {/* Image + Title */}
            <div className="relative max-w-5xl w-full">
              <motion.img
                key={selectedIndex}
                src={images[selectedIndex].src}
                alt={images[selectedIndex].title}
                className="w-full max-h-[80vh] object-contain rounded-xl shadow-2xl border-4 border-white/10"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
              />
              <p className="text-center text-[#D9D9D9] mt-4 text-lg font-medium">
                {images[selectedIndex].title}
              </p>

              {/* Prev / Next */}
              <button
                onClick={handlePrev}
                className="absolute top-1/2 -left-12 transform -translate-y-1/2 text-white bg-gradient-to-r from-[#C62828] to-[#3CB371] p-3 rounded-full shadow-lg hover:scale-110 transition"
              >
                <ChevronLeft size={28} />
              </button>
              <button
                onClick={handleNext}
                className="absolute top-1/2 -right-12 transform -translate-y-1/2 text-white bg-gradient-to-r from-[#3CB371] to-[#C62828] p-3 rounded-full shadow-lg hover:scale-110 transition"
              >
                <ChevronRight size={28} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
