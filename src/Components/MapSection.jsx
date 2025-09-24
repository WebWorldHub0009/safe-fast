// src/components/MapSection.jsx
import React from "react";
import { FaMapMarkedAlt } from "react-icons/fa";

const MapSection = () => {
  return (
    <section className="relative px-4 py-16 bg-[#F9F9F9] overflow-hidden font-[Poppins]">
      {/* SVG Background */}
      <svg
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1500px] h-[800px] opacity-10"
        viewBox="0 0 1200 600"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="300" cy="200" r="200" fill="#3CB371" />
        <circle cx="900" cy="400" r="250" fill="#C62828" />
        <circle cx="600" cy="300" r="300" fill="#1C1C1C" />
      </svg>

      <div className="relative max-w-7xl mx-auto z-10">
        {/* Top Section - Heading */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 mx-auto bg-gradient-to-r from-[#C62828] to-[#3CB371] text-white rounded-full flex items-center justify-center text-3xl mb-4 shadow-xl">
            <FaMapMarkedAlt />
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1C1C1C] tracking-wide">
            OUR{" "}
            <span className="bg-gradient-to-r from-[#C62828] to-[#3CB371] bg-clip-text text-transparent">
              LOCATION
            </span>
          </h2>
          <p className="text-gray-600 mt-2 text-sm md:text-base italic">
            “Your Trusted Partner in Safe & Reliable Relocation”
          </p>
        </div>

        {/* Map + Info Card Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* Left Info Box */}
          <div className="lg:col-span-1 bg-white/80 backdrop-blur-lg border border-gray-200 shadow-2xl rounded-2xl p-8">
            <h3 className="text-xl font-bold mb-4 text-[#1C1C1C]">Visit Us At</h3>
            <p className="text-gray-700 leading-relaxed text-sm md:text-base">
              Plot No. 15 Under Ground Floor <br />
              Panch Vihar Colony, Gali No. 5 <br />
              Behind Engineers Colony, Quarsi <br />
              Aligarh, Uttar Pradesh 202001, India
            </p>
            <div className="mt-6">
              <a
                href="https://goo.gl/maps/Z6NyA7Q7HhVg4tYc6"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-[#C62828] to-[#3CB371] text-white font-semibold shadow-md hover:shadow-xl transition"
              >
                Open in Google Maps
              </a>
            </div>
          </div>

          {/* Right Map */}
          <div className="lg:col-span-2 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d112819.02299534166!2d78.02878836543645!3d27.9144154877344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3974bb2cd1883585%3A0x961a06316bc617c7!2sQuarsi%20Chauraha%2C%20Gali%2C%201%2C%20Ramghat%20Rd%2C%20Aligarh%2C%20Uttar%20Pradesh%20202001!3m2!1d27.9144133!2d78.1112157!5e0!3m2!1sen!2sin!4v1758650215817!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Safe Fast Packers & Movers Location"
              className="w-full h-[300px] sm:h-[400px] md:h-[500px]"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
