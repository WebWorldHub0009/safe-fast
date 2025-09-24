// src/components/QuoteForm.jsx
import React from "react";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaTruck,
  FaShieldAlt,
  FaClock,
  FaSmile,
  FaCheckCircle,
} from "react-icons/fa";

export default function QuoteForm() {
  return (
    <section className="relative bg-[#1C1C1C] text-white py-20 px-4 sm:px-6 lg:px-8 font-[Poppins] overflow-hidden">
      {/* Background Blob */}
      <svg
        className="absolute -top-32 -left-32 w-[600px] h-[600px] opacity-10 text-red-700"
        viewBox="0 0 600 600"
        fill="currentColor"
      >
        <circle cx="300" cy="300" r="300" />
      </svg>

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 shadow-2xl rounded-3xl overflow-hidden">
        {/* Left Column - Info */}
        <div className="bg-red-700 p-10 lg:p-16 flex flex-col justify-center rounded-l-3xl space-y-6">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-snug">
            Get Your Free Moving Quote
          </h2>
          <p className="text-gray-100 text-lg italic">
            “Safe, Reliable & On-Time Moving Solutions You Can Trust.”
          </p>

          <ul className="space-y-4 text-gray-100 text-sm md:text-base">
            <li className="flex items-center gap-3">
              <FaShieldAlt className="text-white text-xl" />
              <span>Trusted and Secured Relocation Services</span>
            </li>
            <li className="flex items-center gap-3">
              <FaClock className="text-white text-xl" />
              <span>On-Time Pickup & Delivery</span>
            </li>
            <li className="flex items-center gap-3">
              <FaSmile className="text-white text-xl" />
              <span>Professional & Friendly Team</span>
            </li>
            <li className="flex items-center gap-3">
              <FaCheckCircle className="text-white text-xl" />
              <span>Affordable Pricing with No Hidden Charges</span>
            </li>
          </ul>
        </div>

        {/* Right Column - Form */}
        <div className="bg-[#F9F9F9] p-8 lg:p-12 rounded-r-3xl">
          <form
            action="https://formsubmit.co/safefastpackersandmovers880@gmail.com"
            method="POST"
            className="space-y-6"
          >
            {/* Hidden Inputs */}
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <input
              type="hidden"
              name="_subject"
              value="New Quote Request - Safe Fast Packers & Movers"
            />
            <input
              type="hidden"
              name="_next"
              value="https://safefastpackersandmovers.in"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {/* Name */}
              <div className="flex items-center border rounded-xl px-3 bg-white focus-within:ring-2 focus-within:ring-red-700">
                <FaUser className="text-gray-500 mr-2" />
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  required
                  className="w-full p-3 bg-transparent text-gray-900 placeholder-gray-400 focus:outline-none"
                />
              </div>

              {/* Email */}
              <div className="flex items-center border rounded-xl px-3 bg-white focus-within:ring-2 focus-within:ring-red-700">
                <FaEnvelope className="text-gray-500 mr-2" />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required
                  className="w-full p-3 bg-transparent text-gray-900 placeholder-gray-400 focus:outline-none"
                />
              </div>

              {/* Phone */}
              <div className="flex items-center border rounded-xl px-3 bg-white focus-within:ring-2 focus-within:ring-red-700">
                <FaPhone className="text-gray-500 mr-2" />
                <input
                  type="text"
                  name="number"
                  placeholder="Phone Number"
                  required
                  className="w-full p-3 bg-transparent text-gray-900 placeholder-gray-400 focus:outline-none"
                />
              </div>

              {/* Date */}
              <div className="flex items-center border rounded-xl px-3 bg-white focus-within:ring-2 focus-within:ring-red-700">
                <FaCalendarAlt className="text-gray-500 mr-2" />
                <input
                  type="date"
                  name="date"
                  required
                  className="w-full p-3 bg-transparent text-gray-900 placeholder-gray-400 focus:outline-none"
                />
              </div>
            </div>

            {/* Moving From */}
            <div className="flex items-center border rounded-xl px-3 bg-white focus-within:ring-2 focus-within:ring-red-700">
              <FaMapMarkerAlt className="text-gray-500 mr-2" />
              <input
                type="text"
                name="movingFrom"
                placeholder="Moving From"
                required
                className="w-full p-3 bg-transparent text-gray-900 placeholder-gray-400 focus:outline-none"
              />
            </div>

            {/* Moving To */}
            <div className="flex items-center border rounded-xl px-3 bg-white focus-within:ring-2 focus-within:ring-red-700">
              <FaMapMarkerAlt className="text-gray-500 mr-2" />
              <input
                type="text"
                name="movingTo"
                placeholder="Moving To"
                required
                className="w-full p-3 bg-transparent text-gray-900 placeholder-gray-400 focus:outline-none"
              />
            </div>

            {/* Service */}
            <div className="flex items-center border rounded-xl px-3 bg-white focus-within:ring-2 focus-within:ring-red-700">
              <FaTruck className="text-gray-500 mr-2" />
              <select
                name="service"
                required
                className="w-full p-3 bg-transparent text-gray-900 placeholder-gray-400 focus:outline-none"
              >
                <option value="">Select Service</option>
                <option value="Relocation Services">Relocation Services</option>
                <option value="Packing Services">Packing Services</option>
                <option value="Moving Services">Moving Services</option>
                <option value="Transport Services">Transport Services</option>
                <option value="Cargo Services">Cargo Services</option>
                <option value="Commercial Moving">Commercial Moving</option>
              </select>
            </div>

            {/* Submit */}
            <div className="text-center">
              <button
                type="submit"
                className="w-full sm:w-auto px-8 sm:px-10 py-3 cursor-pointer bg-red-700 text-white font-semibold text-lg 
                           rounded-2xl shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300"
              >
                Submit Request
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
