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

import waterMark from "../assets/image/logo_design/watermark_icon.jpg";

const allWorks = [
  { id: 1, name: "Beauty Fashion Logo", price: 1000, image: logo1, category: "beauty" },
  {
    id: 2,
    name: "Fashion Logo",
    price: 1000,
    image: logo2,
    category: "fashion",
  },
  { id: 3, name: "Fashion Logo", price: 1000, image: logo9, category: "tech" },
  {
    id: 4,
    name: "Fashion Logo",
    price: 1000,
    image: logo3,
    category: "fashion",
  },
  {
    id: 5,
    name: "Fashion Logo",
    price: 1000,
    image: logo4,
    category: "beauty",
  },
  {
    id: 6,
    name: "Fashion Logo",
    price: 1000,
    image: logo5,
    category: "finance",
  },
  {
    id: 7,
    name: "Fashion Logo",
    price: 1000,
    image: logo6,
    category: "lifestyle",
  },
  { id: 8, name: "CloudTech", price: 1000, image: logo7, category: "tech" },
  {
    id: 9,
    name: "Fashion Logo",
    price: 1000,
    image: logo8,
    category: "sports",
  },

  // Minimalist logos
  {
    id: 10,
    name: "Minimalist Logo",
    price: 1000,
    image: logoImage1,
    category: "minimalist",
  },
  {
    id: 11,
    name: "Minimalist Logo",
    price: 1000,
    image: logoImage2,
    category: "minimalist",
  },
  {
    id: 12,
    name: "Minimalist Logo",
    price: 1000,
    image: logoImage3,
    category: "minimalist",
  },
  {
    id: 13,
    name: "Minimalist Logo",
    price: 1000,
    image: logoImage4,
    category: "minimalist",
  },
  {
    id: 14,
    name: "Minimalist Logo",
    price: 1000,
    image: logoImage5,
    category: "minimalist",
  },
  {
    id: 15,
    name: "Minimalist Logo",
    price: 1000,
    image: logoImage6,
    category: "minimalist",
  },

  // Real Estate
  {
    id: 16,
    name: "Real Estate",
    price: 1000,
    image: logoImage7,
    category: "real-estate",
  },
  {
    id: 17,
    name: "Real Estate",
    price: 1000,
    image: logoImage9,
    category: "real-estate",
  },

  // Tech
  {
    id: 18,
    name: "Tech Logo",
    price: 1000,
    image: logoImage8,
    category: "tech",
  },
  {
    id: 19,
    name: "Tech Logo",
    price: 1000,
    image: logoImage10,
    category: "tech",
  },
  {
    id: 20,
    name: "Tech Logo",
    price: 1000,
    image: logoImage11,
    category: "tech",
  },
];

const WorkGalary = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [showCartNotification, setShowCartNotification] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Get cart items from Redux store
  const cartItems = useSelector((state) => state.cart.items);
  const cartTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

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

  // Add to cart function using Redux
  const handleAddToCart = (work, e) => {
    e.stopPropagation();
    dispatch(addToCart(work));
    setShowCartNotification(true);
    setTimeout(() => setShowCartNotification(false), 2000);
  };

  // Checkout handler
  const handleCheckout = () => {
    if (cartItems.length === 0) {
      alert("Your cart is empty!");
      return;
    }
    navigate("/checkout");
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
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
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            Item added to cart successfully!
          </motion.div>
        )}
      </AnimatePresence>

      <div className="container mx-auto px-4 py-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-gray-800 inline-block border-b-4 border-[#940000] pb-3"
          >
            Logo Design Portfolio
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-600 mt-4 text-lg"
          >
            Professional Logo Designs for Your Brand
          </motion.p>
        </div>

        {/* Gallery Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6 pb-12">
          {allWorks.map((work) => (
            <motion.div
              key={work.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-3 shadow-2xl rounded-lg overflow-hidden bg-white flex flex-col"
            >
              {/* Image Container - Small and Centered */}
              <div
                className="h-48 sm:h-52 md:h-56 bg-gray-50 rounded-t-lg cursor-pointer relative flex items-center justify-center"
                onClick={() => setSelectedImage(work)}
                onContextMenu={handleContextMenu}
                onDragStart={handleDragStart}
              >
                {/* Centered Image with proper aspect ratio */}
                <div className="relative w-full h-full flex items-center justify-center">
                  <div
                    className="w-3/4 h-3/4 bg-contain bg-center bg-no-repeat"
                    style={{
                      backgroundImage: `url(${work.image})`,
                      backgroundSize: "contain",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                  />

                  {/* Corner Watermark */}
                  <div className="absolute bottom-3 right-3 pointer-events-none">
                    <div className="text-white/40 text-sm font-semibold px-2 py-1 rounded backdrop-blur-sm flex items-center gap-1">
                      <img
                        src={waterMark}
                        alt="watermark"
                        className="w-4 h-4"
                      />
                    </div>
                  </div>

                  {/* Price Tag */}
                  <div className="absolute top-3 left-3 bg-[#940000] text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                    ৳{work.price}
                  </div>
                </div>
              </div>

              {/* Content Section - Takes remaining space */}
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2 flex-grow">
                  {work.title}
                </h3>
                <div className="flex justify-between items-center mt-auto">
                  <span className="text-gray-600 text-sm">{work.name}</span>
                  <motion.button
                    onClick={(e) => handleAddToCart(work, e)}
                    className="bg-[#940000] text-white px-4 py-2 rounded-lg font-medium hover:bg-[#7a0000] transition-colors text-sm"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Add to Cart
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Cart Summary */}
        {cartItems.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="fixed bottom-6 right-6 bg-white shadow-2xl rounded-2xl p-6 border border-[#940000] z-40 min-w-80"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-gray-800">Shopping Cart</h3>
              <span className="bg-[#940000] text-white text-sm px-2 py-1 rounded-full">
                {cartItems.length} {cartItems.length === 1 ? "item" : "items"}
              </span>
            </div>
            <div className="space-y-2 mb-4 max-h-32 overflow-y-auto">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center text-sm"
                >
                  <span className="text-gray-600 truncate flex-1 mr-2">
                    {item.title}
                  </span>
                  <span className="text-[#940000] font-semibold">
                    ৳{item.price} x {item.quantity}
                  </span>
                </div>
              ))}
            </div>
            <div className="border-t pt-4">
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg font-bold text-gray-800">Total:</span>
                <span className="text-2xl font-bold text-[#940000]">
                  ৳{cartTotal}
                </span>
              </div>
              <motion.button
                onClick={handleCheckout}
                className="w-full bg-[#940000] text-white py-3 rounded-xl font-semibold hover:bg-[#7a0000] transition-colors shadow-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Proceed to Checkout
              </motion.button>
            </div>
          </motion.div>
        )}

        {/* Protected Image Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="fixed inset-0 bg-black bg-opacity-95 flex items-center justify-center z-50 p-4"
              onContextMenu={handleContextMenu}
            >
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                className="relative max-w-4xl w-full max-h-[90vh] flex items-center justify-center"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Protected Image Display */}
                <div
                  className="w-full h-[80vh] bg-contain bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${selectedImage.image})` }}
                  onContextMenu={handleContextMenu}
                  onDragStart={handleDragStart}
                />

                {/* Diagonal Watermark Overlay */}
                {/* <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                  <div className="text-white/10 text-6xl font-bold rotate-45 transform select-none tracking-wider">
                    Masud Rana
                  </div>
                </div> */}

                {/* Corner Watermark on Modal */}
                <div className="absolute bottom-4 right-4 pointer-events-none">
                  <div className="text-white/30 text-xl font-semibold px-4 py-2 rounded backdrop-blur-sm flex items-center gap-2">
                    <img src={waterMark} alt="watermark" className="w-6 h-6" />
                    <span>Masud Rana</span>
                  </div>
                </div>

                {/* Image Info */}
                <div className="absolute bottom-4 left-4 bg-black/50 text-white px-4 py-2 rounded-lg backdrop-blur-sm">
                  <h3 className="text-lg font-medium">{selectedImage.title}</h3>
                  <p className="text-sm text-white/70">
                    ৳{selectedImage.price}
                  </p>
                </div>

                <button
                  className="absolute -top-12 right-0 bg-white/10 text-white px-4 py-2 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-colors border border-white/20"
                  onClick={() => setSelectedImage(null)}
                >
                  ✕ Close
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Global Protection Styles */}
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

        img {
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
          -webkit-user-drag: none;
          -khtml-user-drag: none;
          -moz-user-drag: none;
          -o-user-drag: none;
          user-drag: none;
          pointer-events: none;
        }

        div[style*="background-image"] {
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
      `}</style>
    </div>
  );
};

export default WorkGalary;
