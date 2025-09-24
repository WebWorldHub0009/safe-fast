// src/components/LocationsHero.jsx
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaMapMarkedAlt } from "react-icons/fa";
import locationsBg from "../assets/images/locationbg.jpg"; // ✅ background image
import indiaMap from "../assets/images/indiamap.png"; // ✅ PNG map image

export default function LocationsHero() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Parallax effect for background
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <section
      ref={ref}
      className="relative w-full h-[90vh] flex items-center overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <motion.div style={{ y }} className="absolute inset-0">
        <img
          src={locationsBg}
          alt="Locations Background"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 flex flex-col lg:flex-row items-center lg:items-center justify-between w-full">
        
        {/* Left Side - Heading */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mb-10 lg:mb-0 text-center lg:text-left"
        >
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white leading-tight drop-shadow-lg flex justify-center lg:justify-start items-center gap-3">
            <FaMapMarkedAlt className="text-red-500 drop-shadow-md" />
            Our <span className="text-blue-400">Branches</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-gray-200 leading-relaxed">
            <span className="text-red-400 font-semibold">Avadh Packers & Movers </span> 
            has a strong presence across{" "}
            <span className="text-blue-400 font-semibold">all states & union territories </span> 
            of India. Whether it’s metro cities, small towns, or remote regions, our 
            professional relocation services ensure a seamless moving experience 
            everywhere you need us.
          </p>

          <motion.a
            href="#locations-list"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 inline-block px-8 py-3 rounded-full bg-gradient-to-r from-red-600 to-blue-600 text-white font-semibold shadow-lg hover:shadow-xl transition"
          >
            Explore All Locations
          </motion.a>
        </motion.div>

        {/* Right Side - India Map Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="hidden md:flex items-center justify-center"
        >
          <img
            src={indiaMap}
            alt="India Map"
            className="w-[250px] sm:w-[300px] lg:w-[350px] xl:w-[420px] drop-shadow-2xl rounded-lg"
          />
        </motion.div>
      </div>
    </section>
  );
}
