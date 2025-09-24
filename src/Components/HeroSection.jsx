// src/components/HeroSection.jsx
import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import heroBgDesktop from "../assets/images/l2.jpg";
import heroBgMobile from "../assets/images/m1.jpg";
import sfpm from "../assets/sfpm.png";

export default function HeroSection() {
  return (
    <section
      className="relative w-full h-[85vh] flex items-center justify-center bg-fixed bg-center bg-cover font-[Poppins]"
    >
      {/* Background Images */}
      <div className="absolute inset-0">
        {/* Mobile background */}
        <img
          src={heroBgMobile}
          alt="Mobile Hero"
          className="w-full h-full object-cover block md:hidden"
        />
        {/* Desktop background */}
        <img
          src={heroBgDesktop}
          alt="Desktop Hero"
          className="w-full h-full object-cover hidden md:block"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-[#00000070]"></div>

      {/* ✅ SFPM Logo */}
      <motion.img
        src={sfpm}
        alt="SFPM Logo"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="hidden md:flex absolute top-[10%] left-[2%] transform -translate-y-1/2 w-24 sm:w-28 md:w-32 drop-shadow-lg"
      />

      {/* Content */}
      <div className="relative z-10 w-full h-full flex flex-col justify-end px-6 md:px-12 pb-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end w-full gap-8">
          {/* Left Side → Tags + Heading */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="text-left"
          >
            {/* Tags */}
            <div className="flex gap-3 mb-4">
              {["Safe", "Fast", "Reliable"].map((tag, i) => (
                <span
                  key={i}
                  className="px-4 py-1 text-sm font-medium rounded-full 
                             bg-white/10 text-[#FFD700] border border-[#FFD700] 
                             backdrop-blur-md"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Typing Heading */}
            <h1 className="text-3xl sm:text-4xl font-[poppins] md:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#FFD700] leading-tight drop-shadow-lg">
              <Typewriter
                words={[
                  "Safe Fast Packers & Movers – We Move With Care.",
                  "Trusted Relocation for Homes & Offices.",
                  "Fast & Secure Vehicle Shifting Across India.",
                  "Your Goods, Our Responsibility.",
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={60}
                deleteSpeed={40}
                delaySpeed={2500}
              />
            </h1>
          </motion.div>

          {/* Right Side → Subheading */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.3 }}
            className="max-w-md text-right"
          >
            <p className="text-sm sm:text-base md:text-lg text-gray-200 leading-relaxed tracking-wide">
              Experience{" "}
              <span className="font-semibold text-[#FFC107]">
                hassle-free relocation
              </span>{" "}
              with our professional team, modern solutions, and a promise of{" "}
              <span className="font-semibold text-[#FFD700]">
                safety & speed
              </span>.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
