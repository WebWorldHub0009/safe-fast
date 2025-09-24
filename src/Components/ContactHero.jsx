// src/components/ContactHero.jsx
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import contactBg from "../assets/images/contact-bg.jpg"; // ✅ replace with real image

export default function ContactHero() {
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
      className="relative w-full h-[90vh] flex items-center overflow-hidden font-[Poppins]"
    >
      {/* Background Image with Parallax */}
      <motion.div style={{ y }} className="absolute inset-0">
        <img
          src={contactBg}
          alt="Contact Background"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 flex flex-col lg:flex-row items-center justify-between w-full">
        
        {/* Left Side - Heading */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="text-left max-w-2xl mb-10 lg:mb-0"
        >
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white leading-tight drop-shadow-lg">
            Get in{" "}
            <span className="text-[#3CB371]">Touch</span> with{" "}
            <span className="text-[#FFD700]">Us</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-200 leading-relaxed">
            At{" "}
            <span className="text-[#3CB371] font-semibold">
              Safe Fast Packers & Movers
            </span>
            , we’re here to assist you with your relocation needs. Reach out for{" "}
            <span className="text-[#FFD700] font-semibold">quick quotes</span>,{" "}
            reliable guidance, and hassle-free moving solutions.
          </p>

          {/* CTA Button */}
          <motion.a
            href="#contact-form"
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 inline-block px-10 py-4 rounded-full bg-gradient-to-r from-[#3CB371] to-[#FFD700] text-[#1C1C1C] font-bold shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            Contact Us Now
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
