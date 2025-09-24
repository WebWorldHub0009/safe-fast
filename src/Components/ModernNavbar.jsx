// src/components/ModernNavbar.jsx
import React, { useState, useRef, useEffect } from "react";
import logo from "../assets/sfpm.png";
import {
  FaBars,
  FaTimes,
  FaFacebookF,
  FaInstagram,
  FaPinterest,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
  FaSkype,
  FaHome,
  FaImages,
  FaPhoneAlt,
  FaCertificate,
  FaTruckMoving,
  FaInfoCircle,
  FaEnvelope,
  FaIdBadge,
  FaFileInvoice,
  FaCodeBranch,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

// Updated nav items with icons
const navItems = [
  { name: "Home", path: "/", icon: <FaHome className="inline mr-1" /> },
  { name: "About Us", path: "/about", icon: <FaInfoCircle className="inline mr-1" /> },
  { name: "Services", path: "/services", icon: <FaTruckMoving className="inline mr-1" /> },
  // { name: "Branches", path: "/locations", icon: <FaCodeBranch className="inline mr-1" /> },
  { name: "Gallery", path: "/gallery", icon: <FaImages className="inline mr-1" /> },
  { name: "Contact Us", path: "/contact", icon: <FaPhoneAlt className="inline mr-1" /> },
];

// Updated company info
const COMPANY_INFO = {
  udyam: "UDYAM-UP-02-0027922",
  gst: "09GNYPK9921H2ZZ",
  email: "safefastpackersandmovers880@gmail.com",
  mobile: "+91 9627200705",
};

// Social links
const socialLinks = {
  facebook: "https://www.facebook.com",
  instagram: "https://www.instagram.com",
  pinterest: "https://www.pinterest.com",
  twitter: "https://www.twitter.com",
  youtube: "https://www.youtube.com",
  linkedin: "https://www.linkedin.com",
  skype: "https://www.skype.com",
};

const ModernNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const panelRef = useRef(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Close nav if clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (panelRef.current && !panelRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  const navLinkClasses = (path) =>
    `cursor-pointer transition flex items-center gap-1 font-[Poppins] hover:text-[#FFD700] ${
      pathname === path ? "text-[#FFD700] font-semibold" : "text-[#2C2C2C]"
    }`;

  return (
    <>
      {/* Top Header */}
      <div className="bg-[#2C2C2C] text-white text-xs md:text-sm py-2 px-4 md:px-12 font-[Poppins]">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Desktop Info */}
          <div className="hidden md:flex justify-between w-full">
            <div className="flex space-x-6">
              <p className="flex items-center gap-1">
                <FaIdBadge className="text-[#FFD700]" />
                <span className="font-semibold text-[#FFD700]">UDYAM:</span>{" "}
                {COMPANY_INFO.udyam}
              </p>
              <p className="flex items-center gap-1">
                <FaFileInvoice className="text-[#FFD700]" />
                <span className="font-semibold text-[#FFD700]">GSTIN:</span>{" "}
                {COMPANY_INFO.gst}
              </p>
            </div>
            <div className="flex space-x-6">
              <p className="flex items-center gap-1">
                <FaEnvelope className="text-[#FFD700]" />
                <span className="font-semibold text-[#FFD700]">Email:</span>{" "}
                {COMPANY_INFO.email}
              </p>
              <p className="flex items-center gap-1">
                <FaPhoneAlt className="text-[#FFD700]" />
                <span className="font-semibold text-[#FFD700]">Mobile:</span>{" "}
                {COMPANY_INFO.mobile}
              </p>
            </div>
          </div>

          {/* Mobile Info */}
          <div className="md:hidden text-center w-full flex justify-center">
            <p className="flex items-center justify-center gap-1">
              <FaEnvelope className="text-[#FFD700]" />
              <span className="font-semibold text-[#FFD700]">Email:</span>{" "}
              {COMPANY_INFO.email}
            </p>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="w-full px-4 md:px-12 py-2 bg-white shadow-md relative z-50 font-[Poppins]">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <Link to="/">
            <img
              src={logo}
              alt="SFPM Logo"
              className="h-10 md:h-16 object-contain drop-shadow-lg"
            />
          </Link>

          {/* Mobile Toggle */}
          <div className="md:hidden text-[#2C2C2C]">
            <FaBars onClick={toggleMenu} className="cursor-pointer text-xl" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <ul className="flex gap-6 text-sm font-medium uppercase">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className={navLinkClasses(item.path)}>
                    {item.icon}
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex gap-3 ml-6 text-[#2C2C2C]">
              {Object.entries(socialLinks).map(([k, url]) => (
                <a
                  key={k}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#FFD700] transition"
                >
                  {React.createElement(
                    {
                      facebook: FaFacebookF,
                      instagram: FaInstagram,
                      pinterest: FaPinterest,
                      twitter: FaTwitter,
                      youtube: FaYoutube,
                      linkedin: FaLinkedinIn,
                      skype: FaSkype,
                    }[k],
                    { size: 16 }
                  )}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Panel */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-50 flex"
            >
              {/* Panel */}
              <motion.div
                ref={panelRef}
                className="w-64 h-full bg-white shadow-lg px-6 py-4 flex flex-col font-[Poppins]"
              >
                <div className="flex justify-between items-center mb-3">
                  <img src={logo} alt="SFPM" className="h-7" />
                  <FaTimes
                    className="text-xl text-[#2C2C2C] cursor-pointer"
                    onClick={toggleMenu}
                  />
                </div>
                <hr className="mb-4 border-[#6E6E6E]" />

                <nav className="flex flex-col gap-3 text-[#2C2C2C] text-sm">
                  {navItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`flex items-center gap-2 ${
                        pathname === item.path
                          ? "font-semibold text-[#FFD700]"
                          : "hover:text-[#FFC107]"
                      }`}
                      onClick={toggleMenu}
                    >
                      {item.icon}
                      {item.name}
                    </Link>
                  ))}
                </nav>

                <div className="mt-auto pt-4 border-t border-[#6E6E6E] text-xs">
                  <p className="flex items-center gap-1 py-1">
                    <FaFileInvoice />{" "}
                    <strong className="text-[#FFD700]">GSTIN:</strong>{" "}
                    {COMPANY_INFO.gst}
                  </p>
                  <p className="flex gap-1">
                    {" "}
                    <FaPhoneAlt />{" "}
                    <span className="font-semibold text-[#FFD700]">Mobile:</span>{" "}
                    {COMPANY_INFO.mobile}
                  </p>
                  <div className="flex gap-3 mt-3 text-lg text-[#2C2C2C]">
                    {Object.entries(socialLinks).map(([k, url]) => (
                      <a
                        key={k}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#FFD700]"
                      >
                        {React.createElement(
                          {
                            facebook: FaFacebookF,
                            instagram: FaInstagram,
                            pinterest: FaPinterest,
                            twitter: FaTwitter,
                            youtube: FaYoutube,
                            linkedin: FaLinkedinIn,
                            skype: FaSkype,
                          }[k]
                        )}
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Overlay */}
              <div
                className="flex-1 backdrop-blur-sm"
                onClick={() => setIsMenuOpen(false)}
              ></div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default ModernNavbar;
