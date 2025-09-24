// src/components/ServicesHero.jsx
import React from "react";
import {
  Truck,
  Users,
  Star,
  Clock,
  Package,
  MapPin,
  Headphones,
  User,
} from "lucide-react";

import logoImg from "../assets/sfpm.png"
import img1 from "../assets/images/one.avif";
import img2 from "../assets/images/two.avif";
import img3 from "../assets/images/four.jpg";
import img4 from "../assets/images/t1.jpg";
import { Link } from "react-router-dom";

const ServicesHero = () => {
  return (
    <section className="bg-white min-h-screen flex flex-col items-center justify-center px-6 md:px-16 py-10 text-black font-[Poppins]">
      <div className="max-w-7xl w-full" id="about">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-12">
          {/* Left Side (User Icon + Headline) */}
          <div className="max-w-xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#C62828]/10 text-[#C62828] shadow-lg">
                <User className="w-8 h-8" />
              </div>
              <p className="text-gray-700 text-lg">
                <span className="font-semibold text-[#C62828]">Safe Fast Packers & Movers</span> <br />
                <span className="text-sm text-gray-800">Trusted Relocation Partner</span>
              </p>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-[#1C1C1C] mb-6 tracking-tight">
              Moving Made Easy, <br /> With Care & Trust.
            </h1>
            <p className="text-gray-700 text-lg leading-relaxed">
              We provide <span className="font-semibold text-[#3CB371]">safe</span>,{" "}
              <span className="font-semibold text-[#C62828]">fast</span>, and{" "}
              <span className="font-semibold text-[#1C1C1C]">reliable</span> shifting solutions
              for homes, offices, and businesses. From packing to delivery, every step is stress-free.
            </p>
          </div>

          {/* Right Side (Logo + Info + CTA + Stats) */}
          <div className="max-w-md space-y-6 flex flex-col items-center md:items-start text-center md:text-left">
            {/* Logo */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 w-full">
              <img
                src={logoImg}
                alt="Company Logo"
                className="w-56 md:w-72 h-auto object-contain"
              />
            </div>

            {/* Paragraph */}
            <p className="text-gray-700 leading-relaxed">
              With years of expertise and thousands of satisfied customers,{" "}
              <span className="font-semibold text-[#C62828]">Safe Fast Packers & Movers</span> 
              stands for <span className="text-[#3CB371] font-semibold">reliability</span>,{" "}
              <span className="text-[#C62828] font-semibold">safety</span>, and{" "}
              customer satisfaction across India.
            </p>

            {/* CTA Button */}
            <Link to="/contact">
              <button className="cursor-pointer px-8 py-4 bg-[#C62828] text-white text-base rounded-full shadow-lg hover:bg-[#a92121] transition font-semibold">
                GET A FREE QUOTE
              </button>
            </Link>

            {/* Mini Stats Row */}
            <div className="grid grid-cols-3 gap-6 mt-8 w-full">
              <div className="flex flex-col items-center">
                <Truck className="w-6 h-6 text-[#C62828] mb-2" />
                <h3 className="text-lg font-bold text-[#1C1C1C]">5000+</h3>
                <p className="text-xs text-gray-800">Moves</p>
              </div>
              <div className="flex flex-col items-center">
                <Users className="w-6 h-6 text-[#3CB371] mb-2" />
                <h3 className="text-lg font-bold text-[#1C1C1C]">3000+</h3>
                <p className="text-xs text-gray-800">Happy Clients</p>
              </div>
              <div className="flex flex-col items-center">
                <Star className="w-6 h-6 text-yellow-500 mb-2" />
                <h3 className="text-lg font-bold text-[#1C1C1C]">4.9★</h3>
                <p className="text-xs text-gray-800">Ratings</p>
              </div>
            </div>
          </div>
        </div>

        {/* Grid Section with Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 auto-rows-[600px]">
          {/* Column 1 */}
          <div className="flex flex-col gap-6">
            <div className="relative rounded-2xl overflow-hidden shadow-xl h-[420px] group">
              <img
                src={img1}
                alt="Safe Packing"
                className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
              />
            </div>
            <div className="rounded-2xl bg-gradient-to-br from-[#C62828]/5 to-white shadow-md flex flex-col items-center justify-center text-center p-6 h-[200px]">
              <Clock className="w-10 h-10 text-[#C62828] mb-3" />
              <h3 className="text-3xl font-bold text-[#C62828]">10+</h3>
              <p className="text-gray-700 mt-2 font-medium">Years of Experience</p>
              <p className="text-xs text-gray-800">A decade of trusted relocation services across India.</p>
            </div>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-6">
            <div className="rounded-2xl bg-gradient-to-br from-[#3CB371]/5 to-white shadow-md flex flex-col items-center justify-center text-center p-6 h-[200px]">
              <Package className="w-10 h-10 text-[#3CB371] mb-3" />
              <h3 className="text-3xl font-bold text-[#3CB371]">5000+</h3>
              <p className="text-gray-700 mt-2 font-medium">Successful Shifts</p>
              <p className="text-xs text-gray-800">Safe packing & reliable transport for every move.</p>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-xl h-[420px] group">
              <img
                src={img2}
                alt="Loading & Transport"
                className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
              />
            </div>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-6">
            <div className="relative rounded-2xl overflow-hidden shadow-xl h-[420px] group">
              <img
                src={img3}
                alt="Delivery Service"
                className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
              />
            </div>
            <div className="rounded-2xl bg-gradient-to-br from-[#D9D9D9]/40 to-white shadow-md flex flex-col items-center justify-center text-center p-6 h-[200px]">
              <MapPin className="w-10 h-10 text-[#1C1C1C] mb-3" />
              <h3 className="text-3xl font-bold text-[#1C1C1C]">120+</h3>
              <p className="text-gray-700 mt-2 font-medium">Cities Covered</p>
              <p className="text-xs text-gray-800">Relocation services across urban & rural India.</p>
            </div>
          </div>

          {/* Column 4 */}
          <div className="flex flex-col gap-6">
            <div className="rounded-2xl bg-gradient-to-br from-[#C62828]/5 to-white shadow-md flex flex-col items-center justify-center text-center p-6 h-[200px]">
              <Headphones className="w-10 h-10 text-[#C62828] mb-3" />
              <h3 className="text-3xl font-bold text-[#C62828]">24/7</h3>
              <p className="text-gray-700 mt-2 font-medium">Customer Support</p>
              <p className="text-xs text-gray-500">Always here to assist you with smooth moving solutions.</p>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-xl h-[420px] group">
              <img
                src={img4}
                alt="Customer Support"
                className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;
