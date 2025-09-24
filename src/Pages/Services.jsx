// src/pages/Services.jsx

import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import servicesData from "../data/servicesData";
import {
  FaCogs,
  FaArrowRight,
  FaGem,
  FaStar,
  FaRocket,
} from "react-icons/fa";
import ServicesHero from "../Components/ServicesHero";

const Services = () => {
  return (
    <>
      <ServicesHero />

      {/* === PAGE HEADER WITH DESIGN === */}
      <div className="relative bg-gradient-to-br from-white via-gray-100 to-[#f9f9f9] py-12 text-center overflow-hidden shadow-inner font-[Poppins]">
        {/* Background SVG Wave */}
        <svg
          className="absolute top-0 left-0 w-full h-full opacity-10"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#3CB371"
            fillOpacity="0.15"
            d="M0,32L80,48C160,64,320,96,480,112C640,128,800,128,960,144C1120,160,1280,192,1360,208L1440,224L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          ></path>
        </svg>

        {/* Decorative Icons */}
        <FaGem className="absolute bottom-4 left-6 sm:left-10 text-[#FFD700] text-4xl sm:text-6xl opacity-20 rotate-12" />
        <FaStar className="absolute top-6 right-6 sm:top-10 sm:right-10 text-[#3CB371] text-4xl sm:text-6xl opacity-20 rotate-12" />
        <FaRocket className="absolute top-14 left-6 sm:top-20 sm:left-20 text-[#FFD700] text-3xl sm:text-5xl opacity-20 rotate-45" />

        {/* Header Content */}
        <motion.h1
          id="servicegrid"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-[#1C1C1C] relative flex flex-wrap justify-center items-center gap-2 sm:gap-4 px-4"
        >
          <FaCogs className="text-[#3CB371] text-xl sm:text-2xl md:text-4xl" />
          Our <span className="text-[#FFD700]">Premium</span>{" "}
          <span className="text-[#3CB371]">Services</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-gray-700 mt-4 max-w-xl sm:max-w-2xl mx-auto px-4 text-sm sm:text-base md:text-lg relative"
        >
          Trusted across India, we deliver{" "}
          <span className="text-[#FFD700] font-semibold">safe</span>,{" "}
          <span className="text-[#3CB371] font-semibold">timely</span>, and{" "}
          <span className="text-[#1C1C1C] font-semibold">tailored</span> logistics & relocation
          services.
        </motion.p>

        {/* Decorative Divider */}
        <div className="w-24 sm:w-36 h-1 mx-auto mt-6 bg-gradient-to-r from-[#FFD700] via-[#3CB371] to-[#FFD700] rounded-full"></div>
      </div>

      {/* === SERVICES GRID === */}
      <div className="bg-[#f9f9f9] text-[#1C1C1C] font-[Poppins] pb-16 pt-10" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {servicesData.map((service) => {
            const IconComponent = service.icon;

            return (
              <motion.div
                key={service.id}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 group overflow-hidden border border-gray-200"
              >
                {/* Image */}
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-40 sm:h-52 md:h-60 object-cover transition-transform duration-300 group-hover:scale-105"
                />

                {/* Details */}
                <div className="p-4 sm:p-6 relative">
                  {/* Service Name */}
                  <h3 className="text-lg sm:text-xl font-semibold text-center mb-2 text-[#1C1C1C] group-hover:text-[#FFD700] transition-colors">
                    {service.name}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-xs sm:text-sm md:text-base text-center mb-4 line-clamp-3">
                    {service.description}
                  </p>

                  {/* Learn More Button */}
                  <div className="text-center">
                    <Link
                      to={service.path}
                      className="inline-flex items-center justify-center gap-2 mt-2 px-3 sm:px-5 py-1.5 sm:py-2 text-xs sm:text-sm bg-gradient-to-r from-[#FFD700] to-[#3CB371] text-[#1C1C1C] rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all duration-200"
                    >
                      Learn More <FaArrowRight className="text-xs sm:text-sm" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Services;
