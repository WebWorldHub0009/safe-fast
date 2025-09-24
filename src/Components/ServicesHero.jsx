// src/components/ServicesHero.jsx
import React from "react";
import { FaTruckMoving, FaShieldAlt, FaGlobeAsia } from "react-icons/fa";
import servicesBg from "../assets/images/serviceshero.jpg"; // replace with your background image
import { Link } from "react-router-dom";

export default function ServicesHero() {
  return (
    <section
      className="relative w-full h-[80vh] sm:h-[80vh] flex items-center justify-center text-center overflow-hidden px-4 md:px-8 font-[Poppins]"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={servicesBg}
          alt="Services Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1C1C1C]/90 via-[#1C1C1C]/70 to-[#1C1C1C]/80"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl flex flex-col items-center justify-center">
        {/* Heading */}
        <h1 className="text-2xl sm:text-4xl md:text-6xl font-extrabold leading-snug sm:leading-tight text-white drop-shadow-lg mb-4">
          Our <span className="text-[#FFD700]">Premium</span>{" "}
          <span className="text-[#3CB371]">Relocation Services</span>
        </h1>

        {/* Subtitle */}
        <p className="text-sm sm:text-base md:text-lg text-gray-200 max-w-2xl leading-relaxed mb-6 sm:mb-8">
          At <span className="text-[#FFD700] font-semibold">Safe Fast Packers & Movers</span>, 
          we specialize in providing hassle-free, secure, and on-time moving 
          solutions. Explore our wide range of services tailored to your needs.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <a
            href="#services"
            className="px-6 sm:px-8 py-3 text-sm sm:text-base rounded-full bg-gradient-to-r from-[#FFD700] to-[#3CB371] text-[#1C1C1C] font-semibold shadow-lg hover:shadow-xl transition"
          >
            View Services
          </a>
          <Link to="/contact">
            <button className="px-6 sm:px-8 py-3 text-sm sm:text-base rounded-full bg-white text-[#1C1C1C] font-semibold shadow-lg hover:bg-gray-100 transition">
              Contact Us
            </button>
          </Link>
        </div>

        {/* Highlights */}
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-6 bg-white/10 backdrop-blur-lg text-white p-6 rounded-2xl shadow-xl w-full sm:w-auto">
          <div className="flex items-center gap-3 min-w-[200px]">
            <FaTruckMoving className="text-[#FFD700] text-3xl" />
            <div className="text-left">
              <h3 className="text-lg font-bold">Safe Relocation</h3>
              <p className="text-sm">Handled with extra care</p>
            </div>
          </div>
          <div className="flex items-center gap-3 min-w-[200px]">
            <FaShieldAlt className="text-[#3CB371] text-3xl" />
            <div className="text-left">
              <h3 className="text-lg font-bold">Trusted Service</h3>
              <p className="text-sm">100% customer satisfaction</p>
            </div>
          </div>
          <div className="flex items-center gap-3 min-w-[200px]">
            <FaGlobeAsia className="text-white text-3xl" />
            <div className="text-left">
              <h3 className="text-lg font-bold">PAN India Network</h3>
              <p className="text-sm">Seamless nationwide moves</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
