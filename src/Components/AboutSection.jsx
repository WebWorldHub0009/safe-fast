// src/components/AboutSection.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaTruckMoving, FaBoxes, FaSmile } from "react-icons/fa";
import aboutImg from "../assets/images/m2.jpg";
import { Link } from "react-router-dom";

export default function AboutSection() {
  return (
    <section className="w-full py-20 px-6 md:px-12 lg:px-20 bg-white font-[Poppins]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900">
            About <span className="text-yellow-500">Safe Fast Packers & Movers</span>
          </h2>

          <p className="mt-6 text-gray-700 text-lg leading-relaxed">
            At <span className="font-semibold text-gray-900">Safe Fast Packers & Movers</span>, we specialize in <span className="font-semibold text-yellow-500">safe, fast, and stress-free relocations</span>. From household shifting to office relocation and vehicle transport, our dedicated team ensures <span className="font-semibold text-gray-900">speed, safety, and reliability</span> every step of the way.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex gap-4 flex-wrap">
            <Link to="/quote">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-yellow-500 cursor-pointer text-gray-900 px-6 py-3 rounded-full font-semibold shadow-md hover:bg-yellow-400 transition"
              >
                Get a Free Quote
              </motion.button>
            </Link>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border cursor-pointer border-yellow-500 text-yellow-500 px-6 py-3 rounded-full font-semibold shadow-md hover:bg-yellow-500 hover:text-gray-900 transition"
              >
                Contact Us
              </motion.button>
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <motion.div whileHover={{ scale: 1.05 }} className="bg-gray-50 rounded-xl p-6 text-center shadow">
              <FaTruckMoving className="text-yellow-500 text-3xl mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-gray-900">10+ Yrs</h3>
              <p className="text-gray-600 text-sm mt-2">Industry Experience</p>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} className="bg-gray-50 rounded-xl p-6 text-center shadow">
              <FaBoxes className="text-yellow-400 text-3xl mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-gray-900">5000+</h3>
              <p className="text-gray-600 text-sm mt-2">Successful Moves</p>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} className="bg-gray-50 rounded-xl p-6 text-center shadow">
              <FaSmile className="text-yellow-500 text-3xl mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-gray-900">10K+</h3>
              <p className="text-gray-600 text-sm mt-2">Happy Customers</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative w-full h-[280px] md:h-[500px] rounded-3xl overflow-hidden shadow-lg"
        >
          <motion.img
            src={aboutImg}
            alt="About Safe Fast Packers & Movers"
            className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

          <div className="absolute bottom-6 right-6">
            <Link to="/about">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="bg-yellow-500 cursor-pointer text-gray-900 px-5 py-2 rounded-full shadow font-medium hover:bg-yellow-400 transition"
              >
                Learn More
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
