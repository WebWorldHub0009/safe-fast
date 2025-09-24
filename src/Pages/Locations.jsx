// src/Pages/Locations.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { FiArrowRight, FiMapPin } from "react-icons/fi";
import { MdLocationOn } from "react-icons/md";
import { MapPin } from "lucide-react"; // ✅ Added for heading design

// ✅ Import all images (same placeholder for now)
// States
import andhra from "../assets/images/locations/vishakhapattanam.jpg";
import arunachal from "../assets/images/locations/l2.jpg";
import assam from "../assets/images/locations/l3.jpg";
import bihar from "../assets/images/locations/l4.jpg";
import chhattisgarh from "../assets/images/locations/l5.jpg";
import goa from "../assets/images/locations/l6.jpg";
import gujarat from "../assets/images/locations/l7.jpg";
import haryana from "../assets/images/locations/l8.jpg";
import himachal from "../assets/images/locations/l9.jpg";
import jharkhand from "../assets/images/locations/l10.jpg";
import karnataka from "../assets/images/locations/l11.jpg";
import kerala from "../assets/images/locations/l12.jpg";
import madhya from "../assets/images/locations/l13.jpg";
import maharashtra from "../assets/images/locations/l14.jpg";
import manipur from "../assets/images/locations/l15.jpg";
import meghalaya from "../assets/images/locations/l16.jpg";
import mizoram from "../assets/images/locations/l17.jpg";
import nagaland from "../assets/images/locations/l18.jpg";
import odisha from "../assets/images/locations/l19.jpg";
import punjab from "../assets/images/locations/l20.jpg";
import rajasthan from "../assets/images/locations/l21.jpg";
import sikkim from "../assets/images/locations/l22.jpg";
import tamilnadu from "../assets/images/locations/l23.jpg";
import telangana from "../assets/images/locations/l24.jpg";
import tripura from "../assets/images/locations/l25.jpg";
import up from "../assets/images/locations/l26.jpg";
import uttarakhand from "../assets/images/locations/l27.jpg";
import wb from "../assets/images/locations/l28.jpg";

// UTs
import andaman from "../assets/images/locations/l29.jpg";
import chandigarh from "../assets/images/locations/l30.jpg";
import dnhdd from "../assets/images/locations/l31.jpg";
import delhi from "../assets/images/locations/l32.jpg";
import jnk from "../assets/images/locations/l33.jpg";
import ladakh from "../assets/images/locations/l34.jpg";
import lakshadweep from "../assets/images/locations/l35.jpg";
import puducherry from "../assets/images/locations/l36.jpg";
import LocationsHero from "../Components/LocationHero";


// ✅ Data
const locationsData = [
  { id: 1, title: "Andhra Pradesh", short_description: "Avadh Packers & Movers offers safe and affordable relocation services across Andhra Pradesh, including Visakhapatnam, Vijayawada, and Guntur.", image: andhra, path: "/locations/andhra-pradesh" },
  { id: 2, title: "Arunachal Pradesh", short_description: "We provide reliable household, office, and vehicle shifting services in Arunachal Pradesh, covering Itanagar, Tawang, and Pasighat.", image: arunachal, path: "/locations/arunachal-pradesh" },
  { id: 3, title: "Assam", short_description: "Professional packers and movers services in Assam, covering Guwahati, Silchar, and Dibrugarh for both households and businesses.", image: assam, path: "/locations/assam" },
  { id: 4, title: "Bihar", short_description: "Avadh Packers & Movers provides safe relocations in Bihar, covering Patna, Gaya, Muzaffarpur, and other major cities.", image: bihar, path: "/locations/bihar" },
  { id: 5, title: "Chhattisgarh", short_description: "We provide efficient relocation services across Raipur, Bilaspur, and other parts of Chhattisgarh.", image: chhattisgarh, path: "/locations/chhattisgarh" },
  { id: 6, title: "Goa", short_description: "Reliable household and office relocation services in Goa, covering Panaji, Margao, and Vasco da Gama.", image: goa, path: "/locations/goa" },
  { id: 7, title: "Gujarat", short_description: "Avadh Packers & Movers provides professional moving services across Gujarat including Ahmedabad, Surat, and Vadodara.", image: gujarat, path: "/locations/gujarat" },
  { id: 8, title: "Haryana", short_description: "We offer affordable relocation services in Haryana, including Gurgaon, Faridabad, and Panipat.", image: haryana, path: "/locations/haryana" },
  { id: 9, title: "Himachal Pradesh", short_description: "Smooth and safe relocation services in Himachal Pradesh, covering Shimla, Manali, and Dharamshala.", image: himachal, path: "/locations/himachal-pradesh" },
  { id: 10, title: "Jharkhand", short_description: "Packers and movers services across Jharkhand, covering Ranchi, Jamshedpur, and Dhanbad.", image: jharkhand, path: "/locations/jharkhand" },
  { id: 11, title: "Karnataka", short_description: "Top relocation services in Karnataka, covering Bengaluru, Mysuru, and Mangaluru.", image: karnataka, path: "/locations/karnataka" },
  { id: 12, title: "Kerala", short_description: "Avadh Packers & Movers provides efficient relocation services across Kerala, including Kochi, Thiruvananthapuram, and Kozhikode.", image: kerala, path: "/locations/kerala" },
  { id: 13, title: "Madhya Pradesh", short_description: "Professional movers in Madhya Pradesh, covering Bhopal, Indore, and Gwalior.", image: madhya, path: "/locations/madhya-pradesh" },
  { id: 14, title: "Maharashtra", short_description: "Safe relocation services in Maharashtra, covering Mumbai, Pune, and Nagpur.", image: maharashtra, path: "/locations/maharashtra" },
  { id: 15, title: "Manipur", short_description: "We provide relocation services across Manipur, covering Imphal and nearby towns.", image: manipur, path: "/locations/manipur" },
  { id: 16, title: "Meghalaya", short_description: "Reliable packers and movers services in Meghalaya, covering Shillong and nearby towns.", image: meghalaya, path: "/locations/meghalaya" },
  { id: 17, title: "Mizoram", short_description: "Efficient household and office relocation services in Mizoram, covering Aizawl and other cities.", image: mizoram, path: "/locations/mizoram" },
  { id: 18, title: "Nagaland", short_description: "Professional relocation services in Nagaland, covering Kohima, Dimapur, and Mokokchung.", image: nagaland, path: "/locations/nagaland" },
  { id: 19, title: "Odisha", short_description: "Avadh Packers & Movers offers relocation services across Odisha, including Bhubaneswar, Cuttack, and Puri.", image: odisha, path: "/locations/odisha" },
  { id: 20, title: "Punjab", short_description: "Reliable relocation services in Punjab, covering Amritsar, Ludhiana, and Chandigarh region.", image: punjab, path: "/locations/punjab" },
  { id: 21, title: "Rajasthan", short_description: "We offer safe and affordable relocation services across Rajasthan, including Jaipur, Udaipur, and Jodhpur.", image: rajasthan, path: "/locations/rajasthan" },
  { id: 22, title: "Sikkim", short_description: "Efficient packers and movers services in Sikkim, covering Gangtok and nearby towns.", image: sikkim, path: "/locations/sikkim" },
  { id: 23, title: "Tamil Nadu", short_description: "Avadh Packers & Movers provides relocation services across Tamil Nadu, including Chennai, Coimbatore, and Madurai.", image: tamilnadu, path: "/locations/tamil-nadu" },
  { id: 24, title: "Telangana", short_description: "Safe relocation services in Telangana, covering Hyderabad, Warangal, and Karimnagar.", image: telangana, path: "/locations/telangana" },
  { id: 25, title: "Tripura", short_description: "Professional relocation services in Tripura, covering Agartala and nearby regions.", image: tripura, path: "/locations/tripura" },
  { id: 26, title: "Uttar Pradesh", short_description: "Reliable relocation services across Uttar Pradesh, covering Lucknow, Noida, Kanpur, and Ghaziabad.", image: up, path: "/locations/uttar-pradesh" },
  { id: 27, title: "Uttarakhand", short_description: "We provide relocation services across Uttarakhand, covering Dehradun, Haridwar, and Nainital.", image: uttarakhand, path: "/locations/uttarakhand" },
  { id: 28, title: "West Bengal", short_description: "Efficient relocation services across West Bengal, covering Kolkata, Siliguri, and Durgapur.", image: wb, path: "/locations/west-bengal" },
  // UTs
  { id: 29, title: "Andaman and Nicobar Islands", short_description: "Specialized inter-island and mainland relocation services across Andaman and Nicobar Islands.", image: andaman, path: "/locations/andaman-nicobar" },
  { id: 30, title: "Chandigarh", short_description: "Professional relocation services across Chandigarh and Tricity region.", image: chandigarh, path: "/locations/chandigarh" },
  { id: 31, title: "Dadra and Nagar Haveli and Daman and Diu", short_description: "Reliable relocation services across Silvassa, Daman, and Diu.", image: dnhdd, path: "/locations/dadra-nagar-haveli-diu" },
  { id: 32, title: "Delhi", short_description: "Top relocation services in Delhi NCR, covering homes, offices, and vehicles.", image: delhi, path: "/locations/delhi" },
  { id: 33, title: "Jammu and Kashmir", short_description: "Safe relocation services across Jammu, Srinagar, and other parts of J&K.", image: jnk, path: "/locations/jammu-kashmir" },
  { id: 34, title: "Ladakh", short_description: "Professional relocation services across Leh, Kargil, and other parts of Ladakh.", image: ladakh, path: "/locations/ladakh" },
  { id: 35, title: "Lakshadweep", short_description: "Inter-island and mainland relocation services across Lakshadweep.", image: lakshadweep, path: "/locations/lakshadweep" },
  { id: 36, title: "Puducherry", short_description: "Reliable relocation services across Puducherry, Karaikal, Mahe, and Yanam.", image: puducherry, path: "/locations/puducherry" },
];

export default function Locations() {
  const [visibleCount, setVisibleCount] = useState(9);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 9);
  };

  return (
    <>
    <LocationsHero/>
    <section className="w-full min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        
        {/* ✅ Enhanced Heading */}
        <div className="w-full text-center mb-16 px-4">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-[2px] w-16 bg-gradient-to-r from-gray-300 to-gray-500 rounded-full"></div>
            <span className="p-3 bg-gradient-to-br from-blue-600 to-emerald-700 text-white rounded-full shadow-lg">
              <MapPin size={24} />
            </span>
            <div className="h-[2px] w-16 bg-gradient-to-r from-gray-500 to-gray-300 rounded-full"></div>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Discover Our Presence Across India
          </h2>
          <p className="mt-4 text-lg md:text-xl italic text-gray-600 max-w-2xl mx-auto">
            "Wherever you are, excellence is never far away."
          </p>
        </div>

        {/* ✅ Locations Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          <AnimatePresence>
            {locationsData.slice(0, visibleCount).map((location) => (
              <motion.div
                key={location.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative bg-white/70 backdrop-blur-md border border-gray-200 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col group"
              >
                {/* Image */}
                <div className="relative w-full h-48 overflow-hidden">
                  <img
                    src={location.image}
                    alt={location.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-white/90 rounded-full p-2 shadow-md">
                    <MdLocationOn className="w-6 h-6 text-red-600" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center justify-center gap-2">
                    <FiMapPin className="text-red-600 w-5 h-5" />
                    {location.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
                    {location.short_description}
                  </p>
                  <div className="mt-auto">
                    <Link
                      to={location.path}
                      className="inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-red-500 to-red-700 text-white font-semibold rounded-lg hover:from-red-600 hover:to-red-800 transition-colors shadow-md"
                    >
                      Read More <FiArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* ✅ Load More Button */}
        {visibleCount < locationsData.length && (
          <div className="flex justify-center mt-12">
            <motion.button
              onClick={handleLoadMore}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="cursor-pointer px-8 py-3 bg-gradient-to-r from-red-500 to-red-700 text-white font-semibold rounded-lg shadow-md hover:from-red-600 hover:to-red-800 transition-all"
            >
              Load More
            </motion.button>
          </div>
        )}
      </div>
    </section>
    </>
  );
}
