// src/components/DocumentsHero.jsx
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import documentsBg from "../assets/images/docbg.jpg"; // ✅ Replace with your background

export default function DocumentsHero() {
  const ref = useRef(null);

  // Parallax Effect
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section
      ref={ref}
      className="relative w-full h-[90vh] sm:h-[95vh] flex items-center overflow-hidden px-10 font-[Poppins]"
    >
      {/* Background with Parallax */}
      <motion.div style={{ y }} className="absolute inset-0">
        <img
          src={documentsBg}
          alt="Documents Background"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-between w-full">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-xl text-center lg:text-left mb-10 lg:mb-0"
        >
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold leading-snug sm:leading-tight text-white drop-shadow-lg">
            Our <span className="text-[#FFD700]">Official</span>{" "}
            <span className="text-[#3CB371]">Documents</span>
          </h1>

          <p className="mt-4 sm:mt-6 text-gray-200 text-sm sm:text-lg md:text-xl leading-relaxed">
            At{" "}
            <span className="font-semibold text-[#FFD700]">
              Safe Fast Packers & Movers
            </span>
            , transparency and trust are at the core of everything we do.  
            Explore our{" "}
            <span className="text-[#3CB371] font-semibold">certificates</span> and{" "}
            <span className="text-white font-semibold">legal registrations</span>{" "}
            that prove our authenticity and compliance with industry standards.
          </p>

          {/* Buttons */}
          <div className="mt-6 sm:mt-8 flex flex-wrap gap-4 justify-center lg:justify-start">
            <motion.a
              href="#docs"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 sm:px-8 py-3 text-sm sm:text-base rounded-full 
                         bg-gradient-to-r from-[#FFD700] to-[#3CB371] 
                         text-[#1C1C1C] font-semibold shadow-lg 
                         hover:shadow-xl transition"
            >
              View Certificates
            </motion.a>

            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 sm:px-8 py-3 text-sm sm:text-base rounded-full 
                           bg-white text-[#1C1C1C] font-semibold shadow-lg 
                           hover:bg-gray-100 transition"
              >
                Contact Us
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
