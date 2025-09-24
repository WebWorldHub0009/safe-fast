// src/pages/LocationPage.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import { locationsData } from "../data/locationsData";
import { motion } from "framer-motion";
import {
  FaTruckMoving,
  FaBoxes,
  FaSmile,
  FaHome,
  FaWarehouse,
  FaCar,
} from "react-icons/fa";

const serviceIcons = [
  FaHome,
  FaWarehouse,
  FaTruckMoving,
  FaCar,
  FaBoxes,
  FaSmile,
];

const LocationPage = () => {
  const { locationId } = useParams();

  const location = locationsData.find(
    (loc) => loc.path.split("/locations/")[1] === locationId
  );

  if (!location) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F8F8F8]">
        <h1 className="text-3xl font-bold text-gray-700">
          Location not found!
        </h1>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-[#F8F8F8]">
      {/* Hero Section */}
      <section
        className="relative w-full h-96 md:h-[500px] flex items-end px-6 md:px-12 lg:px-20 pb-10"
        style={{
          backgroundImage: `url(${location.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative text-white max-w-3xl space-y-4">
          <h1 className="text-3xl md:text-5xl font-bold leading-snug drop-shadow-lg">
            Best Packers & Movers in{" "}
            {locationId.replace(/-/g, " ").toUpperCase()}
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold">
            Why Choose Avadh Packers & Movers?
          </h2>
          <p className="text-base md:text-lg leading-relaxed opacity-90">
            {location.shortDescription}
          </p>
        </div>
      </section>

      {/* Go Back Button */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-6">
        <Link to="/locations">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="cursor-pointer bg-gray-800 hover:bg-gray-900 text-white font-medium py-2 px-6 rounded-full shadow-md transition-transform duration-300"
          >
            ← Go Back
          </motion.button>
        </Link>
      </div>

      {/* Services Side by Side Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left - Services */}
        <div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-6">
            Why Choose Us in{" "}
            <span className="text-red-600">
              {locationId.replace(/-/g, " ")}
            </span>
            ?
          </h2>
          <ul className="space-y-4">
            {location.points.map((point, idx) => {
              const Icon = serviceIcons[idx % serviceIcons.length];
              return (
                <motion.li
                  key={idx}
                  whileHover={{ scale: 1.03, x: 5 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-start gap-4 bg-white p-4 rounded-xl shadow hover:shadow-lg"
                >
                  <Icon className="text-blue-600 text-2xl mt-1 flex-shrink-0" />
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {point}
                  </p>
                </motion.li>
              );
            })}
          </ul>
        </div>

        {/* Right - Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative w-full h-[300px] md:h-[550px] rounded-3xl overflow-hidden shadow-2xl group"
        >
          <motion.img
            src={location.image}
            alt={locationId}
            className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"></div>
        </motion.div>
      </section>

      {/* Static Info Section */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 py-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
        <motion.div
          whileHover={{ scale: 1.05, rotate: 2 }}
          className="bg-[#F3F4F6] rounded-2xl shadow p-6 text-center hover:shadow-lg transition"
        >
          <FaTruckMoving className="text-blue-600 text-3xl mx-auto mb-3 animate-pulse" />
          <h3 className="text-xl md:text-2xl font-bold text-[#121212]">
            10+ Yrs
          </h3>
          <p className="text-[#4B5563] text-sm mt-2">
            Industry <br /> Experience
          </p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05, rotate: -2 }}
          className="bg-[#F3F4F6] rounded-2xl shadow p-6 text-center hover:shadow-lg transition"
        >
          <FaBoxes className="text-red-600 text-3xl mx-auto mb-3 animate-bounce" />
          <h3 className="text-xl md:text-2xl font-bold text-[#121212]">
            5000+
          </h3>
          <p className="text-[#4B5563] text-sm mt-2">
            Successful <br /> Moves
          </p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-[#F3F4F6] rounded-2xl shadow p-6 text-center hover:shadow-lg transition"
        >
          <FaSmile className="text-blue-600 text-3xl mx-auto mb-3 animate-pulse" />
          <h3 className="text-xl md:text-2xl font-bold text-[#121212]">
            10K+
          </h3>
          <p className="text-[#4B5563] text-sm mt-2">
            Happy <br /> Customers
          </p>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto text-center px-6 md:px-12 py-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
          Hassle-Free Relocation Across{" "}
          {locationId.replace(/-/g, " ").toUpperCase()}
        </h2>
        <p className="text-gray-600 mb-8 text-lg md:text-xl">
          Avadh Packers & Movers ensures smooth, safe, and timely relocations
          for homes, offices, and vehicles. Our expert team guarantees
          satisfaction every step of the way.
        </p>
        <Link to="/contact">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="cursor-pointer bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-transform duration-300"
          >
            Get a Free Quote
          </motion.button>
        </Link>
      </section>
    </div>
  );
};

export default LocationPage;
