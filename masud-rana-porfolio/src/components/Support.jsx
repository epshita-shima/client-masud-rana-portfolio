import React from 'react'
import Contact from './Contact'
import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import logoImage from '../assets/image/logo_design/watermark_icon.jpg'
const Support = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Logo click handler
  const handleLogoClick = () => {
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate("/");
    }
  };

  return (
    <div className="relative">
      {/* Fixed Logo Button */}
      <motion.button
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        onClick={handleLogoClick}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#940000] rounded-full shadow-2xl border-2 border-white flex items-center justify-center hover:shadow-xl transition-all duration-300 group"
        whileHover={{ scale: 1.1, backgroundColor: "#7a0000" }}
        whileTap={{ scale: 0.9 }}
      >
        <div className="text-white font-bold text-lg">
                  <img src={logoImage} alt="Logo" className="w-8 h-8 rounded-full" />
                </div>
        
        <div className="absolute right-16 bottom-1/2 transform translate-y-1/2 bg-black text-white text-xs px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-lg">
          {location.pathname === "/" ? "Scroll to Top" : "← Back to Home"}
        </div>

        <div className="absolute inset-0 rounded-full bg-[#940000] animate-ping opacity-20"></div>
      </motion.button>

      <Contact></Contact>
    </div>
  )
}

export default Support