import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./Pages/Home";
import ScrollToTop from "./Components/ScrollToTop";
import FloatingButtons from "./Components/FloatingButtons";
import Footer from "./Components/Footer";
import ModernNavbar from "./Components/ModernNavbar";
import About from "./Pages/About";
import Services from "./Pages/Services";
import ServiceDetail from "./Pages/ServiceDetail";
import GalleryPage from "./Pages/Gallery";
import ContactPage from "./Pages/Contact";
import CertificatePage from "./Pages/CertificatePage";
import EnquiryForm from "./Components/EnquiryForm";
// import Locations from "./Pages/Locations";
// import LocationPage from "./Pages/LocationPage";

function App() {
  const [showEnquiry, setShowEnquiry] = useState(false);

  // Show popup after 3 seconds on every refresh
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowEnquiry(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <ScrollToTop />
      <ModernNavbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:serviceSlug" element={<ServiceDetail />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/certificates" element={<CertificatePage />} />
        {/* <Route path="/locations" element={<Locations />} /> */}
        {/* <Route path="/locations/:locationId" element={<LocationPage />} /> */}
      </Routes>

      <Footer />
      <FloatingButtons />

      {/* Enquiry Form Popup */}
      <EnquiryForm isOpen={showEnquiry} onClose={() => setShowEnquiry(false)} />
    </>
  );
}

export default App;
