// src/components/MoversStats.jsx
import React, { useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import {
  FaTruck,
  FaUsers,
  FaBuilding,
  FaBoxOpen,
  FaMapMarkedAlt,
  FaSmile,
  FaShieldAlt,
  FaClock,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import bgImage from "../assets/images/t3.jpg";

// ✅ Utility Hook for Animated Counter
function Counter({ from = 0, to, inView }) {
  const count = useMotionValue(from);

  const rounded = useTransform(count, (latest) => {
    if (to >= 1000000) return `${(latest / 1000000).toFixed(1)}M+`;
    if (to >= 1000) return `${Math.floor(latest / 1000)}K+`;
    return Math.floor(latest);
  });

  useEffect(() => {
    if (inView) {
      const controls = animate(count, parseInt(to), {
        duration: 2.5,
        ease: "easeOut",
      });
      return controls.stop;
    }
  }, [to, inView]);

  return <motion.span>{rounded}</motion.span>;
}

const stats = [
  { label: "Deliveries Completed", value: 250000, change: "+95%", icon: <FaTruck className="text-yellow-500 text-2xl" /> },
  { label: "Happy Customers", value: 120000, change: "+90%", icon: <FaSmile className="text-red-500 text-2xl" /> },
  { label: "Cities Covered", value: 500, change: "+60%", icon: <FaMapMarkedAlt className="text-yellow-500 text-2xl" /> },
  { label: "Corporate Clients", value: 8000, change: "+45%", icon: <FaBuilding className="text-red-500 text-2xl" /> },
  { label: "Years of Trust", value: 25, change: "+100%", icon: <FaShieldAlt className="text-yellow-500 text-2xl" /> },
  { label: "Parcels Packed", value: 750000, change: "+70%", icon: <FaBoxOpen className="text-red-500 text-2xl" /> },
  { label: "On-Time Delivery", value: 98, change: "98%", icon: <FaClock className="text-yellow-500 text-2xl" /> },
  { label: "Team Members", value: 5000, change: "+50%", icon: <FaUsers className="text-red-500 text-2xl" /> },
];

export default function MoversStats() {
  return (
    <section className="relative font-[Poppins] text-white py-12 px-4 sm:px-6 lg:px-20 overflow-hidden">
      {/* Background Layers */}
      <div
        className="absolute inset-0 bg-fixed bg-center bg-cover"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>
      <div className="absolute inset-0 bg-black/70"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[900px] h-[900px] rounded-full bg-black/10 blur-[220px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-12">
          Trusted by Thousands,{" "}
          <span className="text-yellow-500">Moving India Forward</span>
        </h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-10 sm:gap-12 lg:gap-16 text-center">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true, amount: 0.5 }}
              className="flex flex-col items-center bg-white/10 backdrop-blur-md p-6 rounded-3xl shadow-lg hover:scale-105 hover:bg-white/20 transition-all duration-500"
            >
              <div className="mb-3">{stat.icon}</div>
              <h3 className="text-2xl sm:text-3xl font-bold text-yellow-500">
                <Counter to={stat.value} inView={true} />
              </h3>
              <p className="text-white font-medium mt-1">{stat.label}</p>
              <span className="text-red-500 text-sm mt-1">{stat.change}</span>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-10"
        >
          <p className="text-gray-100 max-w-2xl mx-auto mb-3 font-light tracking-wide">
            Safe Fast Packers & Movers is committed to delivering safety, speed,
            and reliability with every move. Whether household or corporate, we
            make your relocation seamless and stress-free.
          </p>
          <Link to="/contact">
            <button className="cursor-pointer px-8 py-3 bg-yellow-500 hover:bg-yellow-400 text-black font-semibold rounded-lg shadow-lg transition">
              Get a Free Quote
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
