// src/components/Footer.jsx
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaEnvelope,
  FaMapMarkerAlt,
  FaHome,
  FaPhoneAlt,
  FaTruckMoving,
  FaTwitter,
  FaLinkedinIn,
  FaPinterestP,
  FaCertificate,
  FaBoxOpen,
  FaPeopleCarry,
  FaExchangeAlt,
  FaCarSide,
  FaMotorcycle,
  FaDog,
  FaDolly,
  FaCodeBranch,
} from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import VisitorCounter from "./VisitorCounter";
import Translator from "./Translator";
import bgImg from "../assets/images/bg.jpg"; 

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

// Services Data
const servicesData = [
  { name: "Packers And Movers Service", path: "/services/packers-and-movers", icon: FaPeopleCarry },
  { name: "Movers And Packers Service", path: "/services/movers-and-packers", icon: FaTruckMoving },
  { name: "Relocation Service", path: "/services/relocation", icon: FaExchangeAlt },
  { name: "Household Shifting Service", path: "/services/household-shifting", icon: FaBoxOpen },
  { name: "Shifting Service", path: "/services/shifting", icon: FaPeopleCarry },
  { name: "Transport Service", path: "/services/transport", icon: FaTruckMoving },
  { name: "Car Transport Service", path: "/services/car-transport", icon: FaCarSide },
  { name: "Bike Transport Service", path: "/services/bike-transport", icon: FaMotorcycle },
  { name: "Pet Transport Service", path: "/services/pet-transport", icon: FaDog },
  { name: "Loading Unloading Service", path: "/services/loading-unloading", icon: FaDolly },
  { name: "Packing Unpacking Service", path: "/services/packing-unpacking", icon: FaBoxOpen },
  { name: "Packaging Unpackaging Service", path: "/services/packaging-unpackaging", icon: FaBoxOpen },
];

export default function Footer() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    controls.start(inView ? "visible" : "hidden");
  }, [inView, controls]);

  return (
    <motion.footer
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
      className="relative text-white pt-10 pb-10 px-6 md:px-16 overflow-hidden font-[Poppins]"
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Grid Content */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 text-sm">
        {/* About */}
        <div className="flex flex-col space-y-3">
          <h4 className="font-bold mb-2 text-3xl text-[#FFD700]">
            About Fast Safe Packers & Movers
          </h4>
          <p className="leading-relaxed text-gray-800 text-md">
            Fast Safe Packers & Movers is your trusted relocation partner across India. 
            We specialize in safe, reliable, and affordable shifting services for homes, 
            offices, and vehicles. With skilled staff, modern tools, and a commitment to 
            excellence, we make every move smooth, secure, and stress-free.
          </p>
          <div className="mt-4 space-y-1 text-gray-800 text-xs">
            <p>GSTIN/UIN : 09GNYPK9921H2ZZ</p>
            <p>UDYAM-UP-02-0027922</p>
            <p>ISO Certified Company</p>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-bold text-2xl mb-4 text-[#FFD700]">Quick Links</h4>
          <ul className="space-y-2 text-gray-800">
            {[
              ["Home", "/", <FaHome />],
              ["About Us", "/about", <FaCodeBranch />],
              ["Services", "/services", <FaTruckMoving />],
              ["Branches", "/locations", <FaMapMarkerAlt />],
              ["Gallery", "/gallery", <FaBoxOpen />],
              ["Certificates", "/certificates", <FaCertificate />],
              ["Contact Us", "/contact", <FaPhoneAlt />],
            ].map(([text, link, icon], i) => (
              <li key={i}>
                <Link
                  to={link}
                  className="flex items-center gap-2 hover:text-[#FFD700] transition duration-300"
                >
                  {icon} {text}
                </Link>
              </li>
            ))}
          </ul>

          <h4 className="mt-6 font-bold text-2xl text-[#FFD700]">Email</h4>
          <ul className="mt-2 space-y-2 text-gray-800">
            <li>
              <a
                href="mailto:Info@safefastpackersandmovers.in"
                className="flex items-center space-x-2 hover:text-[#FFD700] transition duration-300"
              >
                <FaEnvelope className="text-[#FFD700]" />
                <span>Info@safefastpackersandmovers.in</span>
              </a>
            </li>
            <li>
              <a
                href="mailto:safefastpackersandmovers880@gmail.com"
                className="flex items-center space-x-2 hover:text-[#FFD700] transition duration-300"
              >
                <FaEnvelope className="text-[#FFD700]" />
                <span>safefastpackersandmovers880@gmail.com</span>
              </a>
            </li>
          </ul>
        </div>

        {/* Our Services */}
        <div>
          <h4 className="font-bold text-2xl mb-4 text-[#FFD700]">Our Services</h4>
          <ul className="space-y-2 text-gray-800">
            {servicesData.map(({ name, path, icon: Icon }, i) => (
              <li key={i}>
                <Link
                  to={path}
                  className="hover:text-[#FFD700] transition duration-300 flex items-center gap-2"
                >
                  <Icon className="text-[#FFD700]" /> {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-bold text-2xl mb-4 text-[#FFD700]">Contact Info</h4>
          <address className="not-italic leading-relaxed mb-4 text-gray-800">
            <strong>Head Office:</strong> Fast Safe Packers & Movers,  
            Plot No. 15, Under Ground Floor, Panch Vihar Colony,  
            Gali No. 5, Behind Engineers Colony, Quarsi,  
            Aligarh, Uttar Pradesh 202001, India  
            <br />
            <strong>Owner:</strong> Akash Kumar Tomar
          </address>
          <p className="text-sm text-gray-800 mb-2">
            <FaPhoneAlt className="inline mr-2 text-[#FFD700]" /> +91 9627200705
          </p>
          <div className="mb-4 flex">
            <div>

            <Translator />
            </div>
          </div>
          <div className="mt-6 flex space-x-4">
            {[FaInstagram, FaFacebookF, FaYoutube, FaTwitter, FaLinkedinIn, FaPinterestP].map(
              (Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#FFD700] hover:text-white transition"
                >
                  <Icon size={20} />
                </a>
              )
            )}
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-10 text-center text-xs text-gray-800 border-t border-gray-700 pt-6 space-y-2">
        <VisitorCounter />
        <p>
          © {new Date().getFullYear()} Fast Safe Packers & Movers. All rights reserved.
        </p>
        <p>
          Designed by{" "}
          <a
            href="https://webworldhub.co.in"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold hover:text-[#FFD700] transition"
          >
            Web World Hub
          </a>
        </p>
      </div>
    </motion.footer>
  );
}
