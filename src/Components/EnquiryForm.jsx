// src/components/EnquiryForm.jsx
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaTruckMoving,
  FaClipboardList,
  FaClock,
} from "react-icons/fa";
import { X } from "lucide-react";

export default function EnquiryForm({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/60">
          {/* Form Container */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="relative w-[95%] sm:w-[90%] md:w-[80%] lg:w-[50%] 
                       h-auto max-h-[95vh] overflow-y-auto 
                       bg-gradient-to-br from-white via-[#fdfcf6] to-[#fff8e1]
                       shadow-2xl rounded-2xl border border-yellow-500/30"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="cursor-pointer absolute top-3 right-3 text-gray-600 hover:text-yellow-600"
            >
              <X size={26} />
            </button>

            <div className="p-5 sm:p-6 md:p-10">
              {/* Heading */}
              <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-xl sm:text-2xl md:text-3xl font-extrabold text-center mb-4 text-gray-900"
              >
                Get Your{" "}
                <span className="text-[#FFD700] drop-shadow-md">
                  Free Enquiry
                </span>
              </motion.h2>
              <p className="text-center text-gray-600 mb-6 text-sm sm:text-base max-w-2xl mx-auto">
                Share your moving details and{" "}
                <span className="font-semibold text-[#FFD700]">
                  Safe Fast Packers & Movers
                </span>{" "}
                will provide you with the most{" "}
                <span className="font-semibold text-gray-900">
                  secure, fast, and affordable
                </span>{" "}
                relocation plan tailored just for you.
              </p>

              {/* Form */}
              <form
                action="https://formsubmit.co/safefastpackersandmovers880@gmail.com"
                method="POST"
                className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6"
              >
                {/* Moving From */}
                <div className="flex items-center bg-gray-100 rounded-xl p-3 shadow-sm">
                  <FaMapMarkerAlt className="text-[#FFD700] text-lg mr-3" />
                  <input
                    type="text"
                    name="moving_from"
                    placeholder="Moving From *"
                    required
                    className="w-full bg-transparent outline-none text-gray-800 placeholder-gray-500 text-sm sm:text-base"
                  />
                </div>

                {/* Moving To */}
                <div className="flex items-center bg-gray-100 rounded-xl p-3 shadow-sm">
                  <FaMapMarkerAlt className="text-blue-500 text-lg mr-3" />
                  <input
                    type="text"
                    name="moving_to"
                    placeholder="Moving To *"
                    required
                    className="w-full bg-transparent outline-none text-gray-800 placeholder-gray-500 text-sm sm:text-base"
                  />
                </div>

                {/* Moving Type */}
                <div className="flex items-center bg-gray-100 rounded-xl p-3 shadow-sm">
                  <FaTruckMoving className="text-green-600 text-lg mr-3" />
                  <select
                    name="moving_type"
                    className="w-full bg-transparent outline-none text-gray-800 text-sm sm:text-base"
                    required
                  >
                    <option value="">Moving Type</option>
                    <option>Within City</option>
                    <option>Within State</option>
                    <option>Other State</option>
                    <option>International</option>
                  </select>
                </div>

                {/* Services */}
                <div className="flex items-center bg-gray-100 rounded-xl p-3 shadow-sm">
                  <FaClipboardList className="text-purple-600 text-lg mr-3" />
                  <select
                    name="services"
                    className="w-full bg-transparent outline-none text-gray-800 text-sm sm:text-base"
                    required
                  >
                    <option value="">Select Service</option>
                    <option>Household Shifting</option>
                    <option>Few Items Shifting</option>
                    <option>1BHK Shifting</option>
                    <option>2BHK Shifting</option>
                    <option>3BHK Shifting</option>
                    <option>4BHK Shifting</option>
                    <option>Bungalow / Villa Shifting</option>
                    <option>Two Wheeler Transport</option>
                    <option>Four Wheeler Transport</option>
                    <option>Office / Commercial Shifting</option>
                    <option>Other Services</option>
                    <option>Bill For Claim</option>
                  </select>
                </div>

                {/* Phone */}
                <div className="flex items-center bg-gray-100 rounded-xl p-3 shadow-sm">
                  <FaPhoneAlt className="text-[#FFD700] text-lg mr-3" />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone *"
                    required
                    className="w-full bg-transparent outline-none text-gray-800 placeholder-gray-500 text-sm sm:text-base"
                  />
                </div>

                {/* Moving Time */}
                <div className="flex items-center bg-gray-100 rounded-xl p-3 shadow-sm">
                  <FaClock className="text-indigo-600 text-lg mr-3" />
                  <select
                    name="moving_time"
                    className="w-full bg-transparent outline-none text-gray-800 text-sm sm:text-base"
                    required
                  >
                    <option value="">Preferred Moving Time</option>
                    <option>Urgently</option>
                    <option>Within a Week</option>
                    <option>Within 15 Days</option>
                    <option>Within a Month</option>
                    <option>Not Fixed</option>
                  </select>
                </div>

                {/* Hidden Config */}
                <input type="hidden" name="_captcha" value="false" />
                <input
                  type="hidden"
                  name="_next"
                  value="https://safefastpackersandmovers.in/"
                />

                {/* Submit Button */}
                <div className="md:col-span-2 flex justify-center">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    className="px-6 sm:px-8 py-2.5 sm:py-3 bg-gradient-to-r from-[#FFD700] to-black 
                               text-white font-semibold rounded-full shadow-lg 
                               hover:shadow-2xl transition duration-300 text-sm sm:text-base"
                  >
                    Submit Enquiry
                  </motion.button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
