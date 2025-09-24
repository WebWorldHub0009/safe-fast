// src/components/MovingServices.jsx
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Import icons
import {
  FaPeopleCarry,
  FaTruckMoving,
  FaExchangeAlt,
  FaBoxOpen,
} from "react-icons/fa";

// Import service images
import s1 from "../assets/images/services/s1.jpg";
import s2 from "../assets/images/services/s2.jpg";
import s3 from "../assets/images/services/s3.jpg";
import s4 from "../assets/images/services/s4.jpg";
import s5 from "../assets/images/services/s5.jpg";
import s6 from "../assets/images/services/s6.jpg";

import bg from "../assets/images/bg.jpg";

// Services Data
const movingServices = [
  {
    id: 1,
    name: "Packers And Movers Service",
    path: "/services/packers-and-movers",
    icon: FaPeopleCarry,
    image: s1,
    description:
      "Professional packing and moving services ensuring secure transport of your belongings.",
  },
  {
    id: 2,
    name: "Movers And Packers Service",
    path: "/services/movers-and-packers",
    icon: FaTruckMoving,
    image: s2,
    description:
      "End-to-end relocation solutions for homes, offices, and vehicles, making your move smooth.",
  },
  {
    id: 3,
    name: "Relocation Service",
    path: "/services/relocation",
    icon: FaExchangeAlt,
    image: s3,
    description:
      "Complete relocation services, from packing to setup, for homes, offices, and industries.",
  },
  {
    id: 4,
    name: "Household Shifting Service",
    path: "/services/household-shifting",
    icon: FaBoxOpen,
    image: s4,
    description:
      "Careful handling of furniture, appliances, and fragile items for a safe household move.",
  },
  {
    id: 5,
    name: "Shifting Service",
    path: "/services/shifting",
    icon: FaPeopleCarry,
    image: s5,
    description:
      "Reliable and efficient local and long-distance shifting services for all types of moves.",
  },
  {
    id: 6,
    name: "Transport Service",
    path: "/services/transport",
    icon: FaTruckMoving,
    image: s6,
    description:
      "Trusted transportation services across India for personal and commercial consignments.",
  },
];

export default function MovingServices() {
  return (
    <section
      className="relative py-10 bg-fixed bg-cover bg-center font-[Poppins]"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="absolute inset-0 z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 text-center">
        {/* Section Header */}
        <h2 className="text-yellow-500 uppercase tracking-wider text-sm font-semibold">
          Reliable & Professional Relocation
        </h2>
        <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mt-3">
          Our <span className="text-[#FFD700]">Moving Services</span>
        </h3>
        <p className="text-gray-800 max-w-3xl mx-auto mt-4 mb-12 text-sm md:text-base">
          Safe Fast Packers & Movers provides end-to-end relocation solutions for homes, offices, and vehicles.  
          With professional packing, secure transport, and timely delivery, we make your move smooth and stress-free.
        </p>

        {/* Service Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {movingServices.map((service, idx) => (
            <Link key={service.id} to={service.path} className="group">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                className="bg-white rounded-3xl cursor-pointer shadow-2xl overflow-hidden hover:shadow-3xl hover:-translate-y-2 transition-all duration-300 group-hover:scale-105"
              >
                {/* Service Image */}
                <div className="relative">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-56 object-cover rounded-t-3xl transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-yellow-500 text-white p-3 rounded-full shadow-lg">
                    <service.icon size={20} />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 text-left">
                  <h4 className="text-lg md:text-xl font-bold text-[#1C1C1C] mb-2">
                    {service.name}
                  </h4>
                  <p className="text-gray-600 text-sm md:text-base">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <p className="mt-8 text-gray-800 text-sm md:text-base">
          Planning a move?{" "}
          <Link
            to="/contact"
            className="text-yellow-500 font-semibold underline hover:text-yellow-400 transition"
          >
            Get Your Free Quote
          </Link>
        </p>
      </div>
    </section>
  );
}
