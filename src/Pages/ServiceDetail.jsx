// src/pages/ServiceDetail.jsx
import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import servicesData from "../data/servicesData";
import {
  FaCheckCircle,
  FaArrowLeft,
  FaPhoneAlt,
  FaTruckMoving,
  FaMapMarkedAlt,
  FaUsers,
} from "react-icons/fa";

export default function ServiceDetail() {
  const { serviceSlug } = useParams();
  const navigate = useNavigate();

  const service = servicesData.find((s) => s.path.endsWith(serviceSlug));

  if (!service) {
    return (
      <div className="text-center py-20 text-[#FFD700] text-xl">
        Service not found.
      </div>
    );
  }

  const { name, image, icon: Icon, description, features } = service;

  return (
    <section className="min-h-screen w-full bg-gradient-to-b from-[#1C1C1C] to-black py-16 px-6">
      <div className="max-w-7xl mx-auto space-y-12 text-white">
        {/* === Breadcrumb & Header === */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-sm text-gray-400">
            <Link to="/" className="hover:text-[#FFD700]">Home</Link> /{" "}
            <Link to="/services" className="hover:text-[#00C2CB]">Services</Link> /{" "}
            <span className="text-[#FFD700] font-semibold">{name}</span>
          </p>
          <h1 className="text-3xl md:text-4xl font-extrabold mt-3">
            <span className="text-[#FFD700]">SafeFast</span>{" "}
            <span className="text-[#00C2CB]">{name}</span>
          </h1>
          <p className="text-gray-300 mt-4 max-w-3xl mx-auto leading-relaxed">
            At{" "}
            <span className="text-[#FFD700] font-semibold">
              Safe Fast Packers & Movers
            </span>
            , we redefine <strong>{name}</strong> with{" "}
            <span className="text-[#FFD700] font-semibold">safety</span>,{" "}
            <span className="text-[#00C2CB] font-semibold">speed</span>, and{" "}
            <span className="text-white font-semibold">peace of mind</span>.  
            Experience premium relocation solutions designed for families, professionals, and businesses across India.
          </p>

          {/* Gradient Divider */}
          <div className="w-40 h-1 mx-auto mt-6 bg-gradient-to-r from-[#FFD700] via-[#00C2CB] to-[#FFD700] rounded-full"></div>
        </motion.div>

        {/* === Content Row === */}
        <div className="flex flex-col lg:flex-row gap-10 items-center">
          {/* === IMAGE SIDE === */}
          <motion.div
            initial={{ x: -60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
              <img
                src={image}
                alt={name}
                className="w-full h-[400px] object-cover group-hover:scale-105 transition duration-500"
              />
              <Icon className="absolute bottom-4 right-4 text-[#FFD700] text-6xl opacity-20 group-hover:opacity-40" />
            </div>
          </motion.div>

          {/* === TEXT SIDE === */}
          <motion.div
            initial={{ x: 60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <div className="bg-[#1C1C1C] shadow-2xl rounded-2xl p-8 border border-gray-700">
              <div className="flex items-center gap-4 mb-4">
                <Icon className="text-[#FFD700] text-3xl" />
                <h2 className="text-2xl font-bold text-white">{name}</h2>
              </div>

              <p className="text-gray-300 leading-relaxed mb-6">{description}</p>

              {/* === Features List === */}
              <h3 className="text-lg font-semibold text-[#FFD700] mb-3">
                Why Choose This Service?
              </h3>
              <ul className="space-y-3 mb-6">
                {features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-200">
                    <FaCheckCircle className="text-[#00C2CB] mt-1" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* === Action Buttons === */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center gap-2 text-sm text-black font-semibold bg-gradient-to-r from-[#FFD700] to-[#00C2CB] px-6 py-2 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all"
                >
                  <FaArrowLeft />
                  Back to Services
                </Link>

                <button
                  onClick={() => navigate("/contact")}
                  className="inline-flex items-center justify-center gap-2 text-sm text-black font-semibold bg-gradient-to-r from-[#00C2CB] to-[#FFD700] px-6 py-2 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all"
                >
                  <FaPhoneAlt />
                  Get Free Quote
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* === Stats Info Section === */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center"
        >
          <div className="bg-[#1C1C1C] shadow-lg rounded-xl py-6 px-4 border border-gray-700">
            <FaTruckMoving className="text-[#FFD700] text-3xl mb-2 mx-auto" />
            <h4 className="font-bold text-lg text-white">
              10,000+ Moves Completed
            </h4>
            <p className="text-gray-400 text-sm mt-1">
              Trusted nationwide for safe & professional relocations.
            </p>
          </div>

          <div className="bg-[#1C1C1C] shadow-lg rounded-xl py-6 px-4 border border-gray-700">
            <FaMapMarkedAlt className="text-[#00C2CB] text-3xl mb-2 mx-auto" />
            <h4 className="font-bold text-lg text-white">PAN India Coverage</h4>
            <p className="text-gray-400 text-sm mt-1">
              Serving 150+ cities with a robust logistics network.
            </p>
          </div>

          <div className="bg-[#1C1C1C] shadow-lg rounded-xl py-6 px-4 border border-gray-700">
            <FaUsers className="text-[#FFD700] text-3xl mb-2 mx-auto" />
            <h4 className="font-bold text-lg text-white">
              98% Client Satisfaction
            </h4>
            <p className="text-gray-400 text-sm mt-1">
              Ensuring stress-free, reliable, and premium experiences.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
