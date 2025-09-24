// src/components/FAQ.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaTruckMoving,
  FaMapMarkedAlt,
  FaBoxOpen,
  FaPhoneAlt,
} from "react-icons/fa";

const faqCategories = {
  "Moving Basics": {
    icon: <FaTruckMoving className="text-[#FFD700] text-xl" />,
    faqs: [
      {
        question: "What types of moves do you handle?",
        answer:
          "We provide local, domestic, and office relocation services, including household shifting, commercial moves, vehicle transport, and secure warehousing.",
      },
      {
        question: "Are my belongings safe during the move?",
        answer:
          "Absolutely. We use premium packing materials, GPS-enabled vehicles, and experienced staff to ensure your valuables are transported securely.",
      },
      {
        question: "Do you handle fragile or luxury items?",
        answer:
          "Yes, we specialize in careful handling of fragile items, antiques, and luxury goods with extra safety packaging.",
      },
    ],
  },
  "Services & Coverage": {
    icon: <FaMapMarkedAlt className="text-[#FFD700] text-xl" />,
    faqs: [
      {
        question: "Which areas do you serve?",
        answer:
          "We operate across all major cities in India, offering both local and long-distance moving solutions.",
      },
      {
        question: "Do you provide storage facilities?",
        answer:
          "Yes, we offer short-term and long-term warehousing facilities that are fully secure and monitored.",
      },
      {
        question: "Do you move vehicles too?",
        answer:
          "We provide specialized car and bike transportation services with enclosed and open carriers.",
      },
    ],
  },
  "Process & Pricing": {
    icon: <FaBoxOpen className="text-[#FFD700] text-xl" />,
    faqs: [
      {
        question: "How does your moving process work?",
        answer:
          "We start with a pre-move survey, provide a detailed quote, pack items with care, load, transport, and deliver safely. We also assist in unpacking if requested.",
      },
      {
        question: "How are the charges calculated?",
        answer:
          "Pricing depends on the distance, volume of goods, type of service, and additional facilities like storage or insurance. We provide transparent quotes.",
      },
      {
        question: "Is insurance available?",
        answer:
          "Yes, we provide transit insurance options to safeguard your goods against unexpected events.",
      },
    ],
  },
  "Support & Booking": {
    icon: <FaPhoneAlt className="text-[#FFD700] text-xl" />,
    faqs: [
      {
        question: "How can I book your services?",
        answer:
          "You can book online via our website, call us directly, or visit our office. Our team will assist you instantly.",
      },
      {
        question: "Do you provide 24/7 support?",
        answer:
          "Yes, our support team is available 24/7 to help you with queries, updates, and emergency moves.",
      },
      {
        question: "How early should I book my move?",
        answer:
          "We recommend booking at least 3–7 days in advance, but we also accommodate last-minute and emergency relocations.",
      },
    ],
  },
};

const FAQ = () => {
  const [activeTab, setActiveTab] = useState("Moving Basics");
  const [openIndex, setOpenIndex] = useState(null);

  const handleTabChange = (tab) => {
    setOpenIndex(null);
    setActiveTab(tab);
  };

  return (
    <section className="relative w-full py-10 px-4 md:px-10 font-[Poppins] overflow-hidden bg-white text-black">
      {/* SVG blobs for premium background */}
      <svg
        className="absolute -top-40 -left-40 w-[600px] h-[600px] opacity-20 text-[#FFD700]"
        viewBox="0 0 600 600"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="300" cy="300" r="300" fill="currentColor" />
      </svg>
      <svg
        className="absolute -bottom-40 -right-40 w-[500px] h-[500px] opacity-20 text-[#FFD700]"
        viewBox="0 0 600 600"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="300" cy="300" r="300" fill="currentColor" />
      </svg>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto rounded-3xl p-6 md:p-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl text-[#FFD700] font-extrabold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-800 max-w-2xl mx-auto text-sm md:text-base">
            Get answers about{" "}
            <span className="text-[#FFD700] font-semibold">
              Safe Fast Packers & Movers
            </span>{" "}
            services, process, and support.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Tabs */}
          <div className="md:w-1/3 flex flex-col gap-4">
            {Object.entries(faqCategories).map(([category, data], idx) => (
              <motion.button
                key={idx}
                onClick={() => handleTabChange(category)}
                whileTap={{ scale: 0.97 }}
                className={`text-left w-full px-5 py-4 rounded-xl flex items-center gap-3 font-semibold text-sm md:text-base transition-all duration-300 shadow-sm ${
                  activeTab === category
                    ? "bg-[#FFD700] text-gray-800 shadow-lg"
                    : "bg-white/10 text-gray-800 hover:bg-white/20"
                }`}
              >
                {data.icon}
                <span>{category}</span>
              </motion.button>
            ))}
          </div>

          {/* Accordion */}
          <div className="md:w-2/3 flex flex-col gap-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                {faqCategories[activeTab].faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="border-b border-white/20 py-4"
                  >
                    <button
                      className="w-full flex justify-between items-center text-left font-medium text-lg md:text-xl hover:text-yellow-500 transition-colors"
                      onClick={() =>
                        setOpenIndex(index === openIndex ? null : index)
                      }
                    >
                      {faq.question}
                      <span className="text-[#FFD700] text-2xl font-bold">
                        {openIndex === index ? "−" : "+"}
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {openIndex === index && (
                        <motion.p
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="text-gray-800 mt-3 text-sm md:text-base leading-relaxed overflow-hidden"
                        >
                          {faq.answer}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
