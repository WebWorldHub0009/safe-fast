// src/components/WhyChooseUs.jsx
import React from "react";
import why1 from "../assets/images/services/s6.jpg";
import why2 from "../assets/images/l3.jpg";
import { motion } from "framer-motion";
import { FaTruck } from "react-icons/fa";

export default function WhyChooseUs() {
  return (
    <section className="w-full  text-gray-900 py-20 px-6 md:px-16 font-[Poppins] relative overflow-hidden">
      
      {/* Background SVG Shapes */}
      <svg
        className="absolute top-0 left-0 w-full h-full -z-10"
        viewBox="0 0 1440 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,200 C480,300 960,100 1440,200 L1440,600 L0,600 Z"
          fill="#FFE58A"
          opacity="0.1"
        />
        <path
          d="M0,300 C480,400 960,200 1440,300 L1440,600 L0,600 Z"
          fill="#FFB74D"
          opacity="0.08"
        />
      </svg>

      {/* Title */}
      <h2 className="relative text-center text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-12 z-10">
        WHY CHOOSE{" "}
        <span className="text-yellow-500 drop-shadow-lg">SAFE FAST PACKERS & MOVERS</span>?
      </h2>

      {/* Top Row */}
      <div className="grid md:grid-cols-2 gap-12 items-center mb-8 relative z-10">
        <div className="relative group overflow-hidden rounded-2xl shadow-2xl">
          <img
            src={why1}
            alt="Safe Packers and Movers"
            className="w-full h-[300px] md:h-[300px] object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-100/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>

        <div className="text-gray-800 leading-relaxed space-y-4">
          <p className="text-lg md:text-xl">
            At <span className="text-yellow-500 font-semibold">Safe Fast Packers & Movers</span>, we don’t just move belongings — we move trust, care, and memories.  
            With a strong focus on <span className="text-red-600 font-semibold">safety</span>, <span className="text-gray-900 font-semibold">reliability</span>, and <span className="text-yellow-500 font-semibold">timely delivery</span>, our team ensures every relocation is seamless and stress-free.
          </p>
          <p className="text-lg md:text-xl">
            Whether it’s home, office, or vehicle, our trained professionals handle every item with utmost care and precision, ensuring your journey to a new beginning is smooth and worry-free.
          </p>
        </div>
      </div>

      {/* Animated Truck SVG */}
      <div className="flex justify-center my-6 relative z-10">
        <svg
          width="80%"
          height="50"
          viewBox="0 0 1000 50"
          className="overflow-visible"
        >
          <motion.line
            x1="0"
            y1="25"
            x2="1000"
            y2="25"
            stroke="#FFD700"
            strokeWidth="4"
            strokeDasharray="20 10"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2 }}
          />
          <motion.g
            initial={{ x: -50 }}
            animate={{ x: 1000 }}
            transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
          >
            <FaTruck className="text-yellow-500" size={30} />
          </motion.g>
        </svg>
      </div>

      {/* Bottom Row */}
      <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="text-gray-800 leading-relaxed space-y-4">
          <p className="text-lg md:text-xl">
            Choosing <span className="text-yellow-500 font-semibold">Safe Fast Packers & Movers</span> means partnering with a team that values your trust.  
            With years of expertise and a strong network across India, we provide end-to-end relocation solutions — from packaging and loading to safe transport and unpacking.
          </p>
          <p className="text-lg md:text-xl">
            Our commitment is to deliver <span className="text-red-600 font-semibold">excellence</span> and <span className="text-gray-900 font-bold">peace of mind</span> in every move, making your relocation experience smooth, secure, and professional.
          </p>
        </div>

        <div className="relative group overflow-hidden rounded-2xl shadow-2xl">
          <img
            src={why2}
            alt="Professional Moving Services"
            className="w-full h-[300px] md:h-[300px] object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-red-100/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
      </div>
    </section>
  );
}
