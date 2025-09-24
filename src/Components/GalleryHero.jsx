// src/components/GalleryHero.jsx
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaCameraRetro, FaSmileBeam, FaTruckMoving } from "react-icons/fa";
import galleryBg from "../assets/images/galleryhero.jpg"; // Replace with your gallery hero background image
import { Link } from "react-router-dom";

export default function GalleryHero() {
  const ref = useRef(null);

  // Track scroll progress for parallax effect
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section
      ref={ref}
      className="relative w-full h-[85vh] sm:h-[90vh] flex items-center justify-center overflow-hidden px-4 sm:px-6 font-[Poppins]"
    >
      {/* Background with Parallax */}
      <motion.div style={{ y }} className="absolute inset-0">
        <img
          src={galleryBg}
          alt="Gallery Background"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C]/90 via-[#1C1C1C]/70 to-[#1C1C1C]/60"></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="relative z-10 max-w-4xl text-center"
      >
        {/* Heading */}
        <h1
          className="font-extrabold leading-snug sm:leading-tight text-white drop-shadow-lg"
          style={{
            fontSize: "clamp(1.75rem, 4vw, 3.5rem)",
          }}
        >
          Explore Our{" "}
          <span className="text-[#C62828]">Moving</span>{" "}
          <span className="text-[#3CB371]">Moments</span>
        </h1>

        {/* Subtitle */}
        <p
          className="mt-3 sm:mt-5 text-[#D9D9D9] mx-auto leading-relaxed"
          style={{
            fontSize: "clamp(0.85rem, 2vw, 1.25rem)",
            maxWidth: "42rem",
          }}
        >
          Discover the real stories of{" "}
          <span className="text-[#C62828] font-semibold">trust</span>,{" "}
          <span className="text-[#3CB371] font-semibold">care</span>, and{" "}
          <span className="text-white font-semibold">commitment</span> through
          the lens of our work. Every picture captures a journey with{" "}
          <span className="font-bold text-[#C62828]">
            Safe Fast Packers & Movers
          </span>.
        </p>

        {/* Buttons */}
        <div className="mt-6 sm:mt-8 flex flex-wrap gap-3 sm:gap-6 justify-center">
          <motion.a
            href="#gallery"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-5 sm:px-7 py-2 sm:py-3 text-xs sm:text-sm md:text-base rounded-full bg-gradient-to-r from-[#C62828] to-[#3CB371] text-white font-semibold shadow-lg hover:shadow-xl transition"
          >
            View Full Gallery
          </motion.a>
          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="cursor-pointer px-5 sm:px-7 py-2 sm:py-3 text-xs sm:text-sm md:text-base rounded-full bg-white text-[#1C1C1C] font-semibold shadow-lg hover:bg-gray-100 transition"
            >
              Get Free Quote
            </motion.button>
          </Link>
        </div>

        {/* Floating Highlights - Hidden on small screens */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="hidden sm:grid mt-8 sm:mt-12 grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 text-white"
        >
          <div className="flex flex-col items-center bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl p-3 sm:p-5">
            <FaCameraRetro className="text-[#C62828] text-2xl sm:text-3xl mb-2" />
            <h3 className="font-bold text-base sm:text-lg">Real Moves</h3>
            <p className="text-[0.7rem] sm:text-sm text-[#D9D9D9] text-center mt-1">
              Genuine snapshots from our relocation journeys.
            </p>
          </div>

          <div className="flex flex-col items-center bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl p-3 sm:p-5">
            <FaSmileBeam className="text-[#3CB371] text-2xl sm:text-3xl mb-2" />
            <h3 className="font-bold text-base sm:text-lg">Happy Clients</h3>
            <p className="text-[0.7rem] sm:text-sm text-[#D9D9D9] text-center mt-1">
              Every smile tells a success story of trust.
            </p>
          </div>

          <div className="flex flex-col items-center bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl p-3 sm:p-5">
            <FaTruckMoving className="text-[#3CB371] text-2xl sm:text-3xl mb-2" />
            <h3 className="font-bold text-base sm:text-lg">Nationwide Reach</h3>
            <p className="text-[0.7rem] sm:text-sm text-[#D9D9D9] text-center mt-1">
              Serving families & businesses across India.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
