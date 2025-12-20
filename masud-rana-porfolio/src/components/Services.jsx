import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/cartSlice";

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
// import logoImage from "../assets/image/logo_design/leatest_logo/Minimalist_Logo_4.jpg"; // লোগো ইমেজ ইম্পোর্ট করুন

const Services = () => {
  const [showCartNotification, setShowCartNotification] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Get cart items from Redux store
  const cartItems = useSelector((state) => state.cart.items);
  const cartItemsCount = cartItems.reduce((count, item) => count + item.quantity, 0);
  const cartTotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

  // Logo designs data
const logoDesigns = [
  { id: 1, name: "Beauty Fashion Logo", price: 1000, image: logo1, category: "beauty" },
  { id: 2, name: "Fashion Logo", price: 1000, image: logo2, category: "fashion" },
  { id: 3, name: "Tech Logo", price: 1000, image: logo9, category: "tech" },
  { id: 4, name: "Fashion Logo", price: 1000, image: logo3, category: "fashion" },
  { id: 5, name: "Fashion Logo", price: 1000, image: logo4, category: "beauty" },
  { id: 6, name: "Fashion Logo", price: 1000, image: logo5, category: "finance" },
  { id: 7, name: "Fashion Logo", price: 1000, image: logo6, category: "lifestyle" },
  { id: 8, name: "Tech Logo", price: 1000, image: logo7, category: "tech" },
  { id: 9, name: "Fashion Logo", price: 1000, image: logo8, category: "sports" },
  
  // Minimalist logos
  { id: 10, name: "Minimalist Logo", price: 1000, image: logoImage1, category: "minimalist" },
  { id: 11, name: "Minimalist Logo", price: 1000, image: logoImage2, category: "minimalist" },
  { id: 12, name: "Minimalist Logo", price: 1000, image: logoImage3, category: "minimalist" },
  { id: 13, name: "Minimalist Logo", price: 1000, image: logoImage4, category: "minimalist" },
  { id: 14, name: "Minimalist Logo", price: 1000, image: logoImage5, category: "minimalist" },
  { id: 15, name: "Minimalist Logo", price: 1000, image: logoImage6, category: "minimalist" },
  
  // Real Estate
  { id: 16, name: "Real Estate Logo", price: 1000, image: logoImage7, category: "real-estate" },
  { id: 17, name: "Real Estate Logo", price: 1000, image: logoImage9, category: "real-estate" },
  
  // Tech
  { id: 18, name: "Tech Logo", price: 1000, image: logoImage8, category: "tech" },
  { id: 19, name: "Tech Logo", price: 1000, image: logoImage10, category: "tech" },
  { id: 20, name: "Tech Logo", price: 1000, image: logoImage11, category: "tech" }
];

  // Add to cart function using Redux
  const handleAddToCart = (logo, e) => {
    e.stopPropagation();
    dispatch(addToCart(logo));
    setShowCartNotification(true);
    setTimeout(() => setShowCartNotification(false), 2000);
  };

  // Checkout handler
  const handleCheckout = () => {
    if (cartItems.length === 0) {
      alert('Your cart is empty!');
      return;
    }
    navigate('/checkout');
  };

  // Logo click handler - Home এ navigate করে
  const handleLogoClick = () => {
    navigate("/");
  };

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

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 relative">
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

      {/* Cart Notification */}
      <AnimatePresence>
        {showCartNotification && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="fixed top-20 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Item added to cart successfully!
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Banner Section */}
      <section className="relative h-96 bg-gradient-to-r from-[#940000] to-[#7a0000] overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <motion.div
            className="text-center text-white max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Premium Logo Designs
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl mb-8 opacity-90"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Transform your brand with professional, custom-designed logos
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <motion.button
                className="bg-white text-[#940000] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Browse Designs
              </motion.button>
              <motion.button
                className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-[#940000] transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Custom Order
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Animated Background Elements */}
        <motion.div
          className="absolute top-10 left-10 w-20 h-20 border-2 border-white/20 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-16 h-16 border-2 border-white/20 rounded-full"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.2, 0.4]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </section>

      {/* Logo Designs Gallery */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Available Logo Designs
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose from our premium collection of professionally designed logos. 
              Each design is unique and ready to represent your brand.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {logoDesigns.map((logo) => (
              <motion.div
                key={logo.id}
                variants={itemVariants}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
              >
                {/* Protected Image Container */}
                <div 
                  className="relative overflow-hidden cursor-pointer"
                  onClick={() => setSelectedImage(logo)}
                  onContextMenu={handleContextMenu}
                  onDragStart={handleDragStart}
                >
                  {/* Protected Image as Background */}
                  <div 
                    className="w-full h-64 bg-cover bg-center bg-no-repeat group-hover:scale-105 transition-transform duration-500"
                    style={{ backgroundImage: `url(${logo.image})` }}
                  />
                  
                  {/* Price Tag */}
                  <div className="absolute top-4 right-4 bg-[#940000] text-white px-3 py-1 rounded-full text-sm font-semibold">
                    ৳{logo.price}
                  </div>

                  {/* Watermark Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center">
                    <motion.div
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50 rounded-full p-3"
                      initial={{ scale: 0.8 }}
                      whileHover={{ scale: 1 }}
                    >
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </motion.div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {logo.name}
                  </h3>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                      {logo.category}
                    </span>
                  </div>
                  
                  <motion.button
                    onClick={(e) => handleAddToCart(logo, e)}
                    className="w-full bg-[#940000] text-white py-3 rounded-lg font-semibold hover:bg-[#7a0000] transition-colors flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    Add to Cart
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

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
              className="relative max-w-6xl w-full max-h-[90vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Protected Image Display */}
              <div 
                className="w-full h-[80vh] bg-contain bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${selectedImage.image})` }}
                onContextMenu={handleContextMenu}
                onDragStart={handleDragStart}
              />

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
                <h3 className="text-lg font-medium">{selectedImage.name}</h3>
                <p className="text-sm text-white/70 capitalize">{selectedImage.category}</p>
                <p className="text-sm text-white/70">৳{selectedImage.price}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Cart Summary */}
      {cartItems.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed bottom-24 right-6 bg-white shadow-2xl rounded-xl p-6 border border-gray-200 z-40 min-w-80"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Your Cart</h3>
            <span className="bg-[#940000] text-white text-sm px-3 py-1 rounded-full">
              {cartItemsCount} {cartItemsCount === 1 ? 'item' : 'items'}
            </span>
          </div>
          
          <div className="space-y-3 mb-4 max-h-60 overflow-y-auto">
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center justify-between py-2 border-b border-gray-100">
                <div className="flex items-center gap-3">
                  <div 
                    className="w-10 h-10 bg-cover bg-center bg-no-repeat rounded"
                    style={{ backgroundImage: `url(${item.image})` }}
                  />
                  <div>
                    <p className="font-medium text-gray-800 text-sm">{item.name}</p>
                    <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
                  </div>
                </div>
                <p className="font-semibold text-[#940000]">৳{item.price * item.quantity}</p>
              </div>
            ))}
          </div>
          
          <div className="flex items-center justify-between mb-4">
            <span className="text-gray-600 font-medium">Total:</span>
            <span className="text-xl font-bold text-[#940000]">৳{cartTotal}</span>
          </div>
          
          <motion.button
            onClick={handleCheckout}
            className="w-full bg-[#940000] text-white py-3 rounded-lg font-semibold hover:bg-[#7a0000] transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Proceed to Checkout
          </motion.button>
        </motion.div>
      )}

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
        
        body {
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }
      `}</style>
    </div>
  );
};

export default Services;