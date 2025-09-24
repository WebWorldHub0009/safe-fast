// src/components/AboutHero.jsx
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import aboutBg from "../assets/images/aboutbg.avif"; // background image

export default function AboutHero() {
  const ref = useRef(null);

  // Track scroll progress relative to this section
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Create parallax effect for background
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section
      ref={ref}
      className="relative w-full h-[95vh] flex items-center overflow-hidden font-[Poppins]"
    >
      {/* Background with Parallax */}
      <motion.div style={{ y }} className="absolute inset-0 bg-center bg-cover">
        <img
          src={aboutBg}
          alt="About Background"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#1C1C1C]/80"></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-5xl px-6 sm:px-16 text-left"
      >
        {/* Gradient Accent Line + Heading */}
        <div className="flex items-center mb-8">
          <div className="h-20 w-1 bg-gradient-to-b from-[#C62828] to-[#3CB371] mr-5 rounded-full"></div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-wide text-white drop-shadow-lg leading-snug">
            About <span className="text-[#FFD700]">Fast Safe</span>{" "}
            <span className="text-[#3CB371]">Packers & Movers</span>
          </h1>
        </div>

        {/* Subtitle */}
        <p className="mt-4 text-lg sm:text-xl text-[#D9D9D9] max-w-3xl leading-relaxed">
          Delivering <span className="text-[#C62828] font-semibold">trust</span>,{" "}
          <span className="text-[#3CB371] font-semibold">safety</span>, and{" "}
          <span className="text-white font-semibold">care</span> with every move. 
          Learn about our journey and why thousands of families and businesses 
          across India choose us for their relocation needs.
        </p>

        {/* Button */}
        <motion.a
          href="#about"
          whileHover={{
            scale: 1.07,
            boxShadow: "0px 0px 20px rgba(60,179,113,0.6)",
          }}
          whileTap={{ scale: 0.95 }}
          className="inline-block mt-10 px-10 py-4 rounded-full bg-gradient-to-r from-[#C62828] to-[#3CB371] text-white font-semibold shadow-lg hover:shadow-xl transition"
        >
          Learn More
        </motion.a>

        {/* Floating Stats Box */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-14 flex flex-row gap-10 bg-white/10 backdrop-blur-xl text-white p-8 rounded-2xl shadow-2xl w-fit border border-[#FFD700]/40"
        >
          <div className="text-center sm:text-left">
            <h3 className="text-4xl font-bold text-[#FFD700]">10+</h3>
            <p className="text-sm text-[#D9D9D9]">Years Experience</p>
          </div>
          <div className="text-center sm:text-left">
            <h3 className="text-4xl font-bold text-[#3CB371]">5000+</h3>
            <p className="text-sm text-[#D9D9D9]">Moves Completed</p>
          </div>
          <div className="text-center sm:text-left">
            <h3 className="text-4xl font-bold text-[#C62828]">100%</h3>
            <p className="text-sm text-[#D9D9D9]">Client Satisfaction</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
