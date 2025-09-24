// src/data/servicesData.js

import {
  FaTruckMoving,
  FaBoxOpen,
  FaDolly,
  FaMotorcycle,
  FaCarSide,
  FaDog,
  FaExchangeAlt,
  FaPeopleCarry,
  FaWarehouse,
} from "react-icons/fa";

import s1 from "../assets/images/services/s1.jpg";
import s2 from "../assets/images/services/s2.jpg";
import s3 from "../assets/images/services/s3.jpg";
import s4 from "../assets/images/services/s4.jpg";
import s5 from "../assets/images/services/s5.jpg";
import s6 from "../assets/images/services/s6.jpg";
import s7 from "../assets/images/services/s7.jpg";
import s8 from "../assets/images/services/s8.jpg";
import s9 from "../assets/images/services/s9.jpg";
import s10 from "../assets/images/services/s10.jpg";
import s11 from "../assets/images/services/s12.jpg";
import s12 from "../assets/images/services/s11.jpg";

const servicesData = [
  {
    id: 1,
    name: "Packers And Movers Service",
    path: "/services/packers-and-movers",
    icon: FaPeopleCarry,
    image: s1,
    description:
      "Our Packers and Movers service is designed to provide complete peace of mind during your relocation. From meticulous packing to safe transportation and careful unloading, we handle every step with unmatched professionalism. Whether local or long-distance, our expert team ensures a stress-free moving experience with zero compromise on safety and quality.",
    features: [
      "Premium packing with multi-layer protection for fragile items",
      "Trained professionals for careful handling of goods",
      "Door-to-door relocation with full responsibility",
      "On-time delivery with complete safety assurance",
      "Dedicated move coordinator for seamless communication",
    ],
  },
  {
    id: 2,
    name: "Movers And Packers Service",
    path: "/services/movers-and-packers",
    icon: FaTruckMoving,
    image: s2,
    description:
      "Our Movers and Packers service guarantees smooth shifting of homes, offices, and businesses. With advanced logistics, specialized vehicles, and a professional workforce, we deliver hassle-free moves tailored to your needs. Safe Fast Packers & Movers ensures efficiency, reliability, and customer satisfaction at every step.",
    features: [
      "End-to-end solutions for residential, corporate, and industrial moves",
      "GPS-enabled vehicles for real-time tracking",
      "Professional supervision from packing to final delivery",
      "Custom relocation plans to match budget and timeline",
      "Nationwide service coverage with a proven track record",
    ],
  },
  {
    id: 3,
    name: "Relocation Service",
    path: "/services/relocation",
    icon: FaExchangeAlt,
    image: s3,
    description:
      "Relocating to a new city or state? Our Relocation Services ensure a smooth and well-coordinated move for individuals, families, and businesses. From careful planning to timely delivery, we take responsibility for every detail, reducing your stress and giving you a seamless transition to your new destination.",
    features: [
      "Domestic, interstate, and long-distance relocation",
      "Detailed pre-move consultation and planning",
      "Efficient packing, loading, transportation, and setup",
      "Affordable, transparent pricing with no hidden costs",
      "Personalized support for every relocation requirement",
    ],
  },
  {
    id: 4,
    name: "Household Shifting Service",
    path: "/services/household-shifting",
    icon: FaBoxOpen,
    image: s4,
    description:
      "Our Household Shifting Service is crafted to make your family’s move smooth, fast, and worry-free. From delicate glassware to heavy furniture, we ensure every household item is packed securely and transported with utmost care. Safe Fast Packers & Movers delivers an organized and damage-free household relocation experience.",
    features: [
      "Expert handling of furniture, electronics, and fragile items",
      "Protective wrapping and labeling for easy unpacking",
      "Safe loading, unloading, and re-arranging at destination",
      "Timely updates and guaranteed on-time delivery",
      "Customized household shifting packages to suit needs",
    ],
  },
  {
    id: 5,
    name: "Shifting Service",
    path: "/services/shifting",
    icon: FaPeopleCarry,
    image: s5,
    description:
      "Our Shifting Service provides reliable solutions for local and nationwide moves. Whether you’re shifting a small apartment, a villa, or a corporate office, we ensure smooth coordination, careful packaging, and safe transport. Our process minimizes downtime and maximizes efficiency, ensuring you settle quickly in your new place.",
    features: [
      "Quick, systematic, and reliable shifting process",
      "Trained staff equipped with modern tools and techniques",
      "Live move tracking for complete transparency",
      "Flexible solutions for small or large-scale moves",
      "Affordable packages with premium service standards",
    ],
  },
  {
    id: 6,
    name: "Transport Service",
    path: "/services/transport",
    icon: FaTruckMoving,
    image: s6,
    description:
      "We provide secure and reliable transportation services for household goods, industrial shipments, and commercial consignments across India. Our fleet of well-maintained trucks and containers ensures safe delivery, while real-time tracking allows customers to monitor their goods every step of the way.",
    features: [
      "Pan-India transportation network for individuals and businesses",
      "GPS-enabled fleet for live updates and route optimization",
      "Customized transport solutions for bulk and delicate goods",
      "On-time delivery backed by professional logistics experts",
      "Competitive pricing with assured service reliability",
    ],
  },
  {
    id: 7,
    name: "Car Transport Service",
    path: "/services/car-transport",
    icon: FaCarSide,
    image: s7,
    description:
      "Our Car Transport Service ensures your vehicle is relocated safely using specialized carriers. From compact cars to luxury vehicles, we provide both covered and uncovered transport options. Every car is handled with care, inspected before dispatch, and delivered damage-free to your doorstep.",
    features: [
      "Door-to-door pickup and delivery across India",
      "Covered and uncovered carrier options available",
      "Insurance coverage for added peace of mind",
      "Regular updates on vehicle movement",
      "Safe and damage-free transportation guaranteed",
    ],
  },
  {
    id: 8,
    name: "Bike Transport Service",
    path: "/services/bike-transport",
    icon: FaMotorcycle,
    image: s8,
    description:
      "Our Bike Transport Service is the safest and fastest way to move your two-wheeler anywhere in India. With specialized packing, careful handling, and secure tie-down methods, we ensure your bike is delivered in perfect condition and within committed timelines.",
    features: [
      "Professional bike packaging with protective materials",
      "Affordable pricing with insurance options available",
      "Fast pickup and doorstep delivery",
      "Damage-proof handling and secured transport",
      "Nationwide coverage with reliable logistics network",
    ],
  },
  {
    id: 9,
    name: "Pet Transport Service",
    path: "/services/pet-transport",
    icon: FaDog,
    image: s9,
    description:
      "We know pets are family, and our Pet Transport Service is designed to give them a safe, comfortable, and stress-free relocation experience. With vet-approved carriers, climate control options, and constant care, we ensure your furry companions are transported with love and safety.",
    features: [
      "Comfortable and spacious pet carriers",
      "Vet-approved, safe travel process",
      "Temperature-controlled vehicles for sensitive pets",
      "Professional caretakers during long journeys",
      "Compliance with all pet relocation guidelines",
    ],
  },
  {
    id: 10,
    name: "Loading Unloading Service",
    path: "/services/loading-unloading",
    icon: FaDolly,
    image: s10,
    description:
      "Our Loading and Unloading Service ensures goods are handled with skill, precision, and safety. With the right equipment and trained manpower, we make sure every item is carefully loaded and unloaded without damage. From fragile items to heavy furniture, we guarantee safe handling at all stages.",
    features: [
      "Modern equipment for safe lifting and handling",
      "Skilled movers for heavy and fragile goods",
      "Organized stacking for maximum protection",
      "Damage-proof operations with strict supervision",
      "Fast, efficient, and reliable service delivery",
    ],
  },
  {
    id: 11,
    name: "Packing Unpacking Service",
    path: "/services/packing-unpacking",
    icon: FaBoxOpen,
    image: s11,
    description:
      "Our Packing and Unpacking Service takes the stress out of relocation by ensuring your goods are packed with the highest quality materials and unpacked with complete care. From fragile items to bulky furniture, we handle everything so you can settle in quickly without any hassle.",
    features: [
      "Eco-friendly, durable packing materials used",
      "Specialized packing for fragile and high-value goods",
      "Organized labeling for easy identification",
      "Quick and safe unpacking with item placement",
      "Complete customer assistance throughout the process",
    ],
  },
  {
    id: 12,
    name: "Packaging Unpackaging Service",
    path: "/services/packaging-unpackaging",
    icon: FaBoxOpen,
    image: s12,
    description:
      "If you need only packaging support, our Packaging and Unpackaging Service provides professional packing without full relocation. Ideal for shipping, storage, or partial moves, we ensure your items are packed securely and delivered unpacked with the same care.",
    features: [
      "Custom-sized boxes, crates, and wrapping solutions",
      "Labeling and sorting assistance for organized moving",
      "Specialized solutions for fragile or industrial goods",
      "Eco-friendly materials for sustainable packaging",
      "Flexible standalone service for all needs",
    ],
  },
];

export default servicesData;
