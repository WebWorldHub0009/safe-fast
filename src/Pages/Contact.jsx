// src/pages/ContactPage.jsx
import React from "react";
import { motion } from "framer-motion";
import {
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaUser,
  FaFileInvoice,
} from "react-icons/fa";

import bgContact from "../assets/images/contact.jpg"; // ✅ replace with Safe Fast background
import MapSection from "../Components/MapSection";
import ContactHero from "../Components/ContactHero";

const ContactPage = () => {
  return (
    <>
      <ContactHero />
      <section className="w-full min-h-screen flex flex-col lg:flex-row font-[Poppins] bg-gradient-to-b from-white to-gray-50 text-gray-800">
        {/* Left Section */}
        <motion.div
          initial={{ x: -60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 px-6 sm:px-12 lg:px-20 py-16 flex flex-col justify-between"
        >
          <div className="flex flex-col justify-between h-full">
            <div>
              <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-6 uppercase">
                <span className="text-[#3CB371]">Let’s</span>{" "}
                <span className="text-[#FFD700]">Get in Touch</span>
              </h1>
              <p className="text-base sm:text-lg font-medium text-gray-700 mb-10">
                Reach out to{" "}
                <span className="text-[#3CB371] font-semibold">
                  Safe Fast Packers & Movers
                </span>{" "}
                for safe, reliable and timely relocation services. We’re here to
                answer all your queries.
              </p>

              <div className="space-y-6 text-sm sm:text-base">
                <div>
                  <h4 className="font-bold text-gray-900 flex items-center gap-2">
                    <FaPhoneAlt className="text-[#3CB371]" /> Phone
                  </h4>
                  <p>+91 9627200705</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 flex items-center gap-2">
                    <FaEnvelope className="text-[#FFD700]" /> Email
                  </h4>
                  <p>Info@safefastpackersandmovers.in</p>
                  <p>safefastpackersandmovers880@gmail.com</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 flex items-center gap-2">
                    <FaFileInvoice className="text-[#3CB371]" /> GSTIN/UIN
                  </h4>
                  <p>09GNYPK9921H2ZZ</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 flex items-center gap-2">
                    <FaMapMarkerAlt className="text-[#FFD700]" /> Address
                  </h4>
                  <p>
                    Plot No. 15 Under Ground Floor Panch Vihar Colony,
                    Gali No. 5, Behind Engineers Colony,
                    Quarsi, Aligarh, Uttar Pradesh – 202001, India
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 flex items-center gap-2">
                    <FaUser className="text-[#3CB371]" /> Owner
                  </h4>
                  <p>Akash Kumar Tomar</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-10 flex gap-4 text-lg text-gray-600">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#3CB371] transition"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#FFD700] transition"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#3CB371] transition"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#FFD700] transition"
              >
                <FaYoutube />
              </a>
              <a
                href="https://g.co/kgs/r2fkBAb"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#3CB371] transition"
              >
                <FaMapMarkerAlt />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Section - Form */}
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 relative flex items-center justify-center"
        >
          {/* Background & Overlay */}
          <div
            id="contact-form"
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${bgContact})` }}
          ></div>
          <div className="absolute inset-0 bg-[#1C1C1C]/80"></div>

          {/* Contact Form */}
          <form
            action="https://formsubmit.co/Info@safefastpackersandmovers.in"
            method="POST"
            className="relative z-10 w-full px-6 sm:px-12 lg:px-20 py-16 text-white"
          >
            <h3 className="text-xl font-semibold mb-6 border-b-2 border-[#FFD700] pb-1 inline-block uppercase">
              Contact Form
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                className="bg-transparent border-b border-gray-300 p-2 focus:outline-none text-white placeholder-gray-400"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="bg-transparent border-b border-gray-300 p-2 focus:outline-none text-white placeholder-gray-400"
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone"
                required
                className="bg-transparent border-b border-gray-300 p-2 focus:outline-none text-white placeholder-gray-400"
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="bg-transparent border-b border-gray-300 p-2 focus:outline-none text-white placeholder-gray-400"
              />
              <textarea
                name="message"
                placeholder="Tell us about your move"
                required
                className="col-span-1 sm:col-span-2 bg-transparent border-b border-gray-300 p-2 focus:outline-none resize-none h-24 text-white placeholder-gray-400"
              ></textarea>
              <button
                type="submit"
                className="cursor-pointer col-span-1 sm:col-span-2 bg-gradient-to-r from-[#3CB371] to-[#FFD700] text-[#1C1C1C] font-bold py-3 mt-4 hover:scale-105 hover:shadow-xl transition-all duration-300 rounded-full"
              >
                Send Message
              </button>
            </div>

            {/* Hidden Inputs */}
            <input type="hidden" name="_captcha" value="false" />
            <input
              type="hidden"
              name="_next"
              value="https://safefastpackersandmovers.in/"
            />
          </form>
        </motion.div>
      </section>

      {/* Map Section */}
      <MapSection />
    </>
  );
};

export default ContactPage;
