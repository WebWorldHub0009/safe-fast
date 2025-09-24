// src/components/VisionMissionGoal.jsx
import React from "react";
import { BookOpen, Target, Award } from "lucide-react";
import visionBg from "../assets/images/vision.jpg"; // replace with your background image

export default function VisionMissionGoal() {
  return (
    <section className="relative w-full flex flex-col md:flex-row min-h-[100vh] bg-[#F9F9F9] font-[Poppins]">
      {/* Left Side - Background Image */}
      <div
        className="w-full md:w-1/2 h-[40vh] md:h-auto bg-cover bg-center"
        style={{ backgroundImage: `url(${visionBg})` }}
      ></div>

      {/* Right Side - Dark Diagonal Section */}
      <div className="relative w-full md:w-1/2 flex items-center bg-[#1C1C1C] overflow-hidden">
        {/* Diagonal Shape (only desktop) */}
        <div className="absolute inset-0 hidden md:block bg-[#1C1C1C] transform -skew-x-[18deg] origin-top-left shadow-xl"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col gap-16 px-6 sm:px-8 md:px-12 lg:px-16 py-16 md:py-0">
          {/* Vision */}
          <div className="flex items-start gap-6 relative">
            {/* Diamond Icon */}
            <div className="absolute top-1/2 -translate-y-1/2">
              <div className="w-12 h-12 bg-[#FFD700] rotate-45 flex items-center justify-center shadow-lg">
                <BookOpen className="w-6 h-6 text-[#1C1C1C] -rotate-45" />
              </div>
            </div>
            <div className="ml-16 md:ml-20 py-10">
              <h3 className="text-2xl font-bold text-white">Our Vision</h3>
              <p className="text-gray-300 text-base md:text-lg max-w-md leading-relaxed">
                At <span className="text-[#FFD700] font-semibold">Safe Fast Packers & Movers</span>, 
                our vision is to redefine relocation by combining safety, efficiency, and innovation. 
                We aim to make every move <strong>hassle-free</strong> and <strong>stress-free</strong> 
                for families, corporates, and businesses. 
              </p>
              <p className="text-gray-400 text-sm mt-3 max-w-md leading-relaxed">
                By adopting advanced packing solutions and eco-friendly practices, 
                we strive to be recognized as a <em>trusted moving partner nationwide</em>.
              </p>
            </div>
          </div>

          {/* Mission */}
          <div className="flex items-start gap-6 relative">
            <div className="absolute top-1/2 -translate-y-1/2">
              <div className="w-12 h-12 bg-[#FFD700] rotate-45 flex items-center justify-center shadow-lg">
                <Target className="w-6 h-6 text-[#1C1C1C] -rotate-45" />
              </div>
            </div>
            <div className="ml-16 md:ml-20">
              <h3 className="text-2xl font-bold text-white">Our Mission</h3>
              <p className="text-gray-300 text-base md:text-lg max-w-md leading-relaxed">
                Our mission is to deliver <strong>world-class packing and moving services</strong> 
                through a team of trained professionals, modern vehicles, and quality packing materials. 
                Customer satisfaction, safety of belongings, and timely execution are at the heart of 
                everything we do.
              </p>
              <ul className="list-disc list-inside text-gray-400 text-sm mt-3 space-y-1">
                <li>Ensure damage-free and timely delivery</li>
                <li>Maintain transparency with clients</li>
                <li>Adopt eco-friendly relocation practices</li>
              </ul>
            </div>
          </div>

          {/* Goal */}
          <div className="flex items-start gap-6 relative">
            <div className="absolute top-1/2 -translate-y-1/2">
              <div className="w-12 h-12 bg-[#FFD700] rotate-45 flex items-center justify-center shadow-lg">
                <Award className="w-6 h-6 text-[#1C1C1C] -rotate-45" />
              </div>
            </div>
            <div className="ml-16 md:ml-20 mb-4">
              <h3 className="text-2xl font-bold text-white">Our Goal</h3>
              <p className="text-gray-300 text-base md:text-lg max-w-md leading-relaxed">
                Our ultimate goal is to become the <span className="text-[#FFD700] font-semibold">
                most trusted relocation brand in India</span>. We aspire to 
                achieve this by ensuring quality-driven services, maintaining long-term client relationships, 
                and expanding our network across every city in India.
              </p>
              <p className="text-gray-400 text-sm mt-3 max-w-md leading-relaxed">
                We believe in moving beyond just transporting goods — we move 
                <strong>emotions, trust, and memories</strong>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
