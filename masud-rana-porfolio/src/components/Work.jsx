import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";

import logo1 from "../assets/image/logo_design/leatest_logo/Beautycare_Logo_19.jpg";
import logo2 from "../assets/image/logo_design/leatest_logo/Fashion_Logo_12.jpg";
import logo3 from "../assets/image/logo_design/leatest_logo/Fashion_Logo_14.jpg";
import logo4 from "../assets/image/logo_design/leatest_logo/Fashion_Logo_15.jpg";
import logo5 from "../assets/image/logo_design/leatest_logo/Fashion_Logo_16.jpg";
import logo6 from "../assets/image/logo_design/leatest_logo/Fashion_Logo_17.jpg";
import logo7 from "../assets/image/logo_design/leatest_logo/Fashion_Logo_2.jpg";
import logo8 from "../assets/image/logo_design/leatest_logo/Fashion_Logo_7.jpg";
import logo9 from "../assets/image/logo_design/leatest_logo/Fashion_Logo_8.jpg";
import logoImage1 from "../assets/image/logo_design/leatest_logo/Minimalist_Logo_1.jpg"; 
import logoImage2 from "../assets/image/logo_design/leatest_logo/Minimalist_Logo_11.jpg"; 
import logoImage3 from "../assets/image/logo_design/leatest_logo/Minimalist_Logo_20.jpg"; 
import logoImage4 from "../assets/image/logo_design/leatest_logo/Minimalist_Logo_4.jpg"; 
import logoImage5 from "../assets/image/logo_design/leatest_logo/Minimalist_Logo_5.jpg";
import logoImage6 from "../assets/image/logo_design/leatest_logo/Minimalist_Logo_9.jpg"; 
import logoImage7 from "../assets/image/logo_design/leatest_logo/RealEstate_Logo_10.jpg";
import logoImage8 from "../assets/image/logo_design/leatest_logo/Tech_Logo_13.jpg"; 
import logoImage9 from "../assets/image/logo_design/leatest_logo/RealEstate_Logo_18.jpg"; 
import logoImage10 from "../assets/image/logo_design/leatest_logo/Tech_Logo_3.jpg"; 
import logoImage11 from "../assets/image/logo_design/leatest_logo/Tech_Logo_6.jpg"; 

import logoImage from "../assets/image/logo_design/watermark_icon.jpg";

const allLogos = [
  { id: 1, img: logo1, title: "Beautycare" },
  { id: 2, img: logo2, title: "Fashion Logo" },
  { id: 3, img: logo3, title: "Fashion Style" },
  { id: 4, img: logo4, title: "Fashion Elegance" },
  { id: 5, img: logo5, title: "Fashion Modern" },
  { id: 6, img: logo6, title: "Fashion Luxe" },
  { id: 7, img: logo7, title: "Fashion Classic" },
  { id: 8, img: logo8, title: "Fashion Chic" },
  { id: 9, img: logo9, title: "Fashion Trend" },
  { id: 10, img: logoImage1, title: "Minimalist Pure" },
  { id: 11, img: logoImage2, title: "Minimalist Simple" },
  { id: 12, img: logoImage3, title: "Minimalist Clean" },
  { id: 13, img: logoImage4, title: "Minimalist Bold" },
  { id: 14, img: logoImage5, title: "Minimalist Modern" },
  { id: 15, img: logoImage6, title: "Minimalist Essential" },
  { id: 16, img: logoImage7, title: "Real Estate Prime" },
  { id: 17, img: logoImage8, title: "Tech Innovate" },
  { id: 18, img: logoImage9, title: "Real Estate Sky" },
  { id: 19, img: logoImage10, title: "Tech Future" },
  { id: 20, img: logoImage11, title: "Tech Digital" }
];

const Work = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Prevent right-click context menu
  const handleContextMenu = (e) => {
    e.preventDefault();
    return false;
  };

  // Prevent drag and drop
  const handleDragStart = (e) => {
    e.preventDefault();
    return false;
  };

  // Logo click handler - Home এ navigate করে
  const handleLogoClick = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-white relative">
      {/* Bottom Fixed Logo Button - সব পেজে দেখা যাবে */}
      <motion.button
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        onClick={handleLogoClick}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#940000] rounded-full shadow-2xl border-2 border-white flex items-center justify-center hover:shadow-xl transition-all duration-300 group"
        whileHover={{ scale: 1.1, backgroundColor: "#7a0000" }}
        whileTap={{ scale: 0.9 }}
      >
        {/* লোগো ইমেজ */}
        <div className="text-white font-bold text-lg">
          <img src={logoImage} alt="Logo" className="w-8 h-8 rounded-full" />
        </div>

        {/* Tooltip */}
        <div className="absolute right-16 bottom-1/2 transform translate-y-1/2 bg-black text-white text-xs px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-lg">
          ← Back to Home
        </div>

        {/* Pulse Animation */}
        <div className="absolute inset-0 rounded-full bg-[#940000] animate-ping opacity-20"></div>
      </motion.button>

      <div className="container mx-auto px-4 py-12">
        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1
            className="text-4xl md:text-5xl font-light text-gray-800 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Portfolio
          </motion.h1>
          <motion.p
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            A curated collection of my logo design work
          </motion.p>
        </motion.div>

        {/* Logos Grid - Only Logos */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pb-12"
          layout
        >
          <AnimatePresence>
            {allLogos.map((logo) => (
              <motion.div
                key={logo.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="group cursor-pointer"
              >
                {/* Protected Image Container */}
                <div
                  className="relative bg-gray-100 rounded-lg overflow-hidden aspect-square border border-gray-200"
                  onClick={() => setSelectedImage(logo)}
                  onContextMenu={handleContextMenu}
                  onDragStart={handleDragStart}
                >
                  {/* Protected Image as Background */}
                  <div
                    className="w-full h-full bg-cover bg-center bg-no-repeat group-hover:scale-105 transition-transform duration-500"
                    style={{ backgroundImage: `url(${logo.img})` }}
                  />

                  {/* Overlay with View Icon */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                    <motion.div
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50 rounded-full p-3"
                      initial={{ scale: 0.8 }}
                      whileHover={{ scale: 1 }}
                    >
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                        />
                      </svg>
                    </motion.div>
                  </div>

                  {/* Watermark Protection */}
                  {/* <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-white/10 text-xl font-bold rotate-45 transform select-none">
                        PORTFOLIO
                      </div>
                    </div>
                  </div> */}
                </div>

                {/* Logo Title */}
                <div className="mt-3 text-center">
                  <h3 className="text-sm font-medium text-gray-800">
                    {logo.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Protected Image Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="fixed inset-0 bg-black/95 flex items-center justify-center z-50 p-4"
              onContextMenu={handleContextMenu}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative max-w-6xl w-full max-h-[90vh]"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Protected Image Display */}
                <div
                  className="w-full h-[80vh] bg-contain bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${selectedImage.img})` }}
                  onContextMenu={handleContextMenu}
                  onDragStart={handleDragStart}
                />

                {/* Watermark Overlay */}
                {/* <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                  <div className="text-white/5 text-6xl font-bold rotate-45 transform select-none">
                    PORTFOLIO
                  </div>
                </div> */}

                {/* Close Button */}
                <motion.button
                  className="absolute -top-12 right-0 bg-white/10 text-white px-4 py-2 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-colors border border-white/20"
                  onClick={() => setSelectedImage(null)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Close
                </motion.button>

                {/* Image Title */}
                <div className="absolute bottom-4 left-4 bg-black/50 text-white px-4 py-2 rounded-lg backdrop-blur-sm">
                  <h3 className="text-lg font-medium">{selectedImage.title}</h3>
                  <p className="text-sm text-white/70">Logo Design</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Global protection styles */}
      <style jsx global>{`
        .protected-image {
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
          -webkit-user-drag: none;
          -khtml-user-drag: none;
          -moz-user-drag: none;
          -o-user-drag: none;
          user-drag: none;
        }

        body.no-select {
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }
      `}</style>
    </div>
  );
};

export default Work;