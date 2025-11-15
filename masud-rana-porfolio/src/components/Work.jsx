import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import logo1 from "../assets/image/logo_design/aesthetic_stitch.jpg";
import logo2 from "../assets/image/logo_design/aurelian_spa.jpg";
import logo3 from "../assets/image/logo_design/grey_vouge.jpg";
import logo4 from "../assets/image/logo_design/lady_j.jpg";
import logo5 from "../assets/image/logo_design/mauvefin.jpg";
import logo6 from "../assets/image/logo_design/olive_june.jpg";
import logo7 from "../assets/image/logo_design/skydusk.jpg";
import logo8 from "../assets/image/logo_design/strivex.jpg";
import logo9 from "../assets/image/logo_design/time_machine.jpg";


const allWorks = [
  // Logo Designs
  { id: 1, category: "logo", img: logo1, price: 1000, title: "Aesthetic Stitch" },
  { id: 2, category: "logo", img: logo2, price: 1000, title: "Aurelian Spa" },
  { id: 3, category: "logo", img: logo9, price: 1000, title: "Time Machine" },
  { id: 4, category: "logo", img: logo3, price: 1000, title: "Grey Vogue" },
  { id: 5, category: "logo", img: logo4, price: 1000, title: "Lady J" },
  { id: 6, category: "logo", img: logo5, price: 1000, title: "Mauvefin" },
  { id: 7, category: "logo", img: logo6, price: 1000, title: "Olive June" },
  { id: 8, category: "logo", img: logo7, price: 1000, title: "Skydusk" },
  { id: 9, category: "logo", img: logo8, price: 1000, title: "Strivex" },
  
  // Banner Designs
  // { id: 10, category: "banner", img: banner1, price: 1500, title: "Business Banner" },
  // { id: 11, category: "banner", img: banner2, price: 1200, title: "Promotion Banner" },
  { id: 12, category: "banner", img: "https://images.unsplash.com/photo-1607082350899-7e105aa886ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", price: 1800, title: "Social Media Banner" },
  { id: 13, category: "banner", img: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", price: 2000, title: "Event Banner" },
  
  // Business Cards
  // { id: 14, category: "card", img: card1, price: 800, title: "Professional Card" },
  // { id: 15, category: "card", img: card2, price: 900, title: "Modern Card" },
  { id: 16, category: "card", img: "https://images.unsplash.com/photo-1544376664-80b17f09d399?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", price: 750, title: "Elegant Card" },
  { id: 17, category: "card", img: "https://images.unsplash.com/photo-1565689228866-1f6a9a516f33?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", price: 850, title: "Creative Card" },
];

const Work = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState(null);
  const [cart, setCart] = useState([]);
  const [showCartNotification, setShowCartNotification] = useState(false);
  
  const navigate = useNavigate();

  const filteredWorks = selectedCategory === "all"
    ? allWorks
    : allWorks.filter((item) => item.category === selectedCategory);

  // Add to cart function
  const addToCart = (work, e) => {
    e.stopPropagation();
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === work.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === work.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...work, quantity: 1 }];
      }
    });
    
    setShowCartNotification(true);
    setTimeout(() => setShowCartNotification(false), 2000);
  };

  // Cart total
  const cartTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

  // Checkout handler
  const handleCheckout = () => {
    if (cart.length === 0) {
      alert('Your cart is empty!');
      return;
    }
    navigate('/checkout', { state: { cartItems: cart } });
  };

  // Category counts
  const categoryCounts = {
    all: allWorks.length,
    logo: allWorks.filter(item => item.category === "logo").length,
    banner: allWorks.filter(item => item.category === "banner").length,
    card: allWorks.filter(item => item.category === "card").length,
  };

  return (
    <div className="min-h-screen bg-white">
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
            A curated collection of my design work
          </motion.p>
        </motion.div>

        {/* Category Buttons - Minimal */}
        <motion.div
          className="flex justify-center gap-2 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          {[
            { key: "all", label: "All" },
            { key: "logo", label: "Logos" },
            { key: "banner", label: "Banners" },
            { key: "card", label: "Cards" }
          ].map((cat) => (
            <button
              key={cat.key}
              onClick={() => setSelectedCategory(cat.key)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                selectedCategory === cat.key
                  ? "bg-[#940000] text-white border-[#940000]"
                  : "text-gray-600 border-gray-300 hover:border-gray-400"
              }`}
            >
              {cat.label}
              <span className="ml-2 text-xs opacity-70">
                ({categoryCounts[cat.key]})
              </span>
            </button>
          ))}
        </motion.div>

        {/* Works Grid - Clean Layout */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pb-12 "
          layout
        >
          <AnimatePresence>
            {filteredWorks.map((work) => (
              <motion.div
                key={work.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="group cursor-pointer shadow-2xl p-2"
              >
                {/* Image Container */}
                <div 
                  className="relative bg-gray-100 rounded-lg overflow-hidden mb-4 aspect-square border-b border-[#940000]"
                  onClick={() => setSelectedImage(work.img)}
                >
                  <img
                    src={work.img}
                    alt={work.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 "
                  />
                  
                  {/* Simple Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                    <motion.div
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ scale: 0.8 }}
                      whileHover={{ scale: 1 }}
                    >
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </motion.div>
                  </div>
                </div>

                {/* Content - Minimal */}
                <div className="space-y-2">
                  <div className="flex justify-between items-start">
                    <h3 className="text-lg font-medium text-gray-800">
                      {work.title}
                    </h3>
                    <span className="text-[#940000] font-semibold">
                      ৳{work.price}
                    </span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500 capitalize">
                      {work.category}
                    </span>
                    <motion.button
                      onClick={(e) => addToCart(work, e)}
                      className="text-sm bg-[#940000] text-white px-4 py-2 rounded hover:bg-gray-800 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Add to Cart
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredWorks.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-16"
          >
            <div className="text-gray-300 text-6xl mb-4">📁</div>
            <h3 className="text-xl font-medium text-gray-600 mb-2">No works found</h3>
            <p className="text-gray-500">Try selecting a different category</p>
          </motion.div>
        )}

        {/* Minimal Cart Summary */}
        {cart.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="fixed bottom-6 right-6 bg-white shadow-lg rounded-lg p-4 border border-gray-200 z-40 min-w-64"
          >
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-medium text-gray-800">Cart</h3>
              <span className="bg-[#940000] text-white text-xs px-2 py-1 rounded-full">
                {cart.length} items
              </span>
            </div>
            <div className="text-sm text-gray-600 mb-3">
              Total: <span className="font-semibold text-[#940000]">৳{cartTotal}</span>
            </div>
            <motion.button
              onClick={handleCheckout}
              className="w-full bg-[#940000] text-white py-2 rounded text-sm font-medium hover:bg-gray-800 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Checkout
            </motion.button>
          </motion.div>
        )}

        {/* Simple Image Modal */}
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage}
                alt="Preview"
                className="w-full h-auto max-h-[80vh] object-contain rounded"
              />
              
              <button
                className="absolute -top-12 right-0 bg-white text-gray-800 px-3 py-1 rounded text-sm hover:bg-gray-100 transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Work;