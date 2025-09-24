// src/components/TestimonialSlider.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaQuoteLeft } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const testimonials = [
  { name: "Rohit Malhotra", title: "Software Engineer, Noida", text: "Safe Fast Packers And Movers handled my home shifting smoothly. Professional, on time, and stress-free service!" },
  { name: "Simran Kaur", title: "Entrepreneur, Chandigarh", text: "They moved my office setup flawlessly. Every item was packed with care and delivered without a scratch." },
  { name: "Aditya Sharma", title: "Doctor, Gurgaon", text: "I had to relocate urgently, and they made it hassle-free. The team is polite, skilled, and reliable." },
  { name: "Neha Gupta", title: "Marketing Manager, Delhi", text: "Highly impressed with their punctuality and service quality. My family’s relocation was completely stress-free." },
  { name: "Karan Mehta", title: "Hotel Owner, Jaipur", text: "Their packing quality is excellent. From fragile items to heavy furniture, everything was moved with care." },
  { name: "Pooja Nair", title: "Teacher, Lucknow", text: "We shifted our house with them, and it was a wonderful experience. Affordable, professional, and secure." },
  { name: "Rahul Verma", title: "Businessman, Mumbai", text: "The best moving experience I’ve ever had. They took care of everything and kept me updated throughout." },
  { name: "Anjali Singh", title: "Bank Manager, Pune", text: "From packing to delivery, the service was top-class. Definitely recommending Safe Fast Packers And Movers!" },
  { name: "Deepak Yadav", title: "Army Officer, Delhi Cantt", text: "As someone who relocates frequently, I can say they are the most professional movers I’ve used." },
  { name: "Meera Joshi", title: "Fashion Designer, Ahmedabad", text: "I loved their attention to detail. They handled my wardrobe and delicate items like they were their own." },
  { name: "Arjun Patel", title: "Student, Bangalore", text: "Shifting my hostel room was quick and easy with them. Great support team and reasonable pricing." },
];

export default function TestimonialSlider() {
  return (
    <section className="relative w-full py-24 bg-gradient-to-b from-[#1C1C1C] via-[#0F172A] to-[#1C1C1C] px-4 md:px-10 font-[Poppins] overflow-hidden">
      {/* ✨ Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#003366]/10 via-transparent to-[#FFD700]/10"></div>
        <div className="absolute top-10 right-20 w-72 h-72 bg-[#003366]/30 blur-3xl rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 left-20 w-80 h-80 bg-[#FFD700]/20 blur-2xl rounded-full animate-pulse"></div>
      </div>

      {/* 🚛 Moving Truck SVG */}
      <div className="absolute top-6 left-0 w-full h-24 overflow-hidden z-0">
        <div className="animate-truck inline-block">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="140"
            height="70"
            viewBox="0 0 640 512"
            className="text-[#FFD700] fill-[#FFD700] drop-shadow-xl"
          >
            <path d="M624 352h-16V275.9c0-16.9-6.7-33.1-18.7-45.2l-83.9-83.9C493.3 134.7 477.1 128 460.1 128H416V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48v320c0 26.5 21.5 48 48 48h17.7c13.2 37.1 48.4 64 90.3 64s77.2-26.9 90.3-64h142.6c13.2 37.1 48.4 64 90.3 64s77.2-26.9 90.3-64H624c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zM464 176l80 80v16H416v-96h48zM156 464c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm320 0c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48z" />
          </svg>
        </div>
      </div>

      {/* Heading */}
      <div className="relative max-w-7xl mx-auto text-center mb-14 z-10">
        <h2 className="text-3xl md:text-5xl font-extrabold text-white drop-shadow-lg">
          What Our Clients <span className="text-[#FFD700]">Say About Us</span>
        </h2>
        <p className="italic text-white mt-4 text-base md:text-lg max-w-2xl mx-auto">
          “Trusted by families, corporates, and professionals across India for premium relocation services.”
        </p>
      </div>

      {/* Swiper Slider */}
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4500, disableOnInteraction: false }}
        spaceBetween={40}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="max-w-7xl mx-auto relative z-10"
      >
        {testimonials.map((item, idx) => (
          <SwiperSlide key={idx}>
            <div
              className="rounded-2xl p-8 h-full 
              bg-white/10 backdrop-blur-lg border border-[#FFD700]/20
              text-white shadow-xl hover:shadow-2xl hover:scale-[1.03]
              transition-all duration-500 ease-in-out"
            >
              <FaQuoteLeft className="text-3xl mb-4 text-[#FFD700]" />
              <p className="mb-6 italic text-white leading-relaxed">
                "{item.text}"
              </p>
              <div>
                <p className="font-semibold text-lg text-[#FFD700]">
                  {item.name}
                </p>
                <p className="text-sm text-white">{item.title}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Truck Animation CSS */}
      <style>
        {`
          @keyframes truckAnimation {
            0% { transform: translateX(-180px); }
            40% { transform: translateX(45vw); }
            60% { transform: translateX(45vw); }
            100% { transform: translateX(110vw); }
          }
          .animate-truck {
            animation: truckAnimation 18s ease-in-out infinite;
          }
        `}
      </style>
    </section>
  );
}
