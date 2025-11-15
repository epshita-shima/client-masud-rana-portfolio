import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom"; // Add this import
import logo1 from "../assets/image/logo_design/aesthetic_stitch.jpg";
import logo2 from "../assets/image/logo_design/aurelian_spa.jpg";
import logo3 from "../assets/image/logo_design/grey_vouge.jpg";
import logo4 from "../assets/image/logo_design/lady_j.jpg";
import logo5 from "../assets/image/logo_design/mauvefin.jpg";
import logo6 from "../assets/image/logo_design/olive_june.jpg";
import logo7 from "../assets/image/logo_design/skydusk.jpg";
import logo8 from "../assets/image/logo_design/strivex.jpg";
import logo9 from "../assets/image/logo_design/time_machine.jpg";
import logo10 from "../assets/image/logo_design/logo10.png";
import waterMark from "../assets/image/logo_design/watermark_icon.jpg";

const allWorks = [
  {
    id: 1,
    category: "logo",
    img: logo1,
    price: 1000,
    title: "Aesthetic Stitch Logo",
  },
  {
    id: 2,
    category: "logo",
    img: logo2,
    price: 1000,
    title: "Aurelian Spa Logo",
  },
  {
    id: 3,
    category: "logo",
    img: logo9,
    price: 1000,
    title: "Time Machine Logo",
  },
  {
    id: 4,
    category: "logo",
    img: logo3,
    price: 1000,
    title: "Grey Vogue Logo",
  },
  { id: 5, category: "logo", img: logo4, price: 1000, title: "Lady J Logo" },
  { id: 6, category: "logo", img: logo5, price: 1000, title: "Mauvefin Logo" },
  {
    id: 7,
    category: "logo",
    img: logo6,
    price: 1000,
    title: "Olive June Logo",
  },
  { id: 8, category: "logo", img: logo7, price: 1000, title: "Skydusk Logo" },
  { id: 9, category: "logo", img: logo8, price: 1000, title: "Strivex Logo" },
];

// Watermark Component
const Watermark = ({ type = "diagonal" }) => {
  if (type === "diagonal") {
    return (
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="text-white/20 text-2xl font-bold rotate-45 transform select-none tracking-wider">
          Masud Rana
        </div>
      </div>
    );
  }

  if (type === "corner") {
    return (
      <div className="absolute bottom-3 right-3 pointer-events-none">
        <div className="text-white/40 text-sm font-semibold  px-2 py-1 rounded backdrop-blur-sm flex items-center gap-1">
          <img src={waterMark} alt="watermark" className="w-4 h-4" />
        </div>
      </div>
    );
  }

  return null;
};

const WorkGalary = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState(null);
  const [cart, setCart] = useState([]);
  const [showCartNotification, setShowCartNotification] = useState(false);

  const navigate = useNavigate(); // Add this line

  const filteredWorks =
    selectedCategory === "all"
      ? allWorks
      : allWorks.filter((item) => item.category === selectedCategory);

  // Add to cart function
  const addToCart = (work, e) => {
    e.stopPropagation();
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === work.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === work.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...work, quantity: 1 }];
      }
    });

    setShowCartNotification(true);
    setTimeout(() => setShowCartNotification(false), 2000);
  };

  // Cart total
  const cartTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // Checkout handler - Add this function
  const handleCheckout = () => {
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }
    // Navigate to checkout page with cart data
    navigate("/checkout", { state: { cartItems: cart } });
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
            My Creative Works
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

        {/* Category Buttons */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {["all", "logo", "banner", "card"].map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-3 rounded-full border-2 font-semibold transition-all duration-300 ${
                selectedCategory === cat
                  ? "bg-[#940000] text-white border-[#940000] shadow-lg"
                  : "border-gray-300 text-gray-600 hover:bg-gray-100 hover:border-gray-400"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {cat === "all"
                ? "All Works"
                : cat === "logo"
                ? "Logo Design"
                : cat === "banner"
                ? "Banner Design"
                : "Business Card"}
            </motion.button>
          ))}
        </div>

        {/* Gallery Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 pb-12">
          {filteredWorks.map((work) => (
            <div key={work.id} className="space-y-3 shadow-2xl">
              {/* Image */}
         <div 
        className="aspect-square bg-gray-50 rounded overflow-hidden cursor-pointer relative border border-gray-200"
        onClick={() => setSelectedImage(work.img)}
      >
        <img
          src={work.img}
          alt={work.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
        
        {/* Bottom Border Watermark */}
         {/* Watermark on Modal */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="text-white/25 text-5xl font-bold rotate-45 transform select-none tracking-wider">
                    Masud Rana
                  </div>
                </div>

                {/* Corner Watermark on Modal */}
                <div className="absolute bottom-4 right-4 pointer-events-none">
                  <div className="text-white/50 text-lg font-semibold  px-3 py-2 rounded backdrop-blur-sm flex items-center gap-2">
                    <img src={waterMark} alt="watermark" className="w-4 h-4" />
                  </div>
                </div>
      </div>


              {/* Content */}
              <div className="flex justify-between items-center p-2">
                <div className="min-w-0 flex-1">
                  <h3 className="text-sm text-gray-800 truncate font-medium">
                    {work.title}
                  </h3>
                  <p className="text-gray-600 text-sm">৳{work.price}</p>
                </div>

                <button
                  onClick={(e) => addToCart(work, e)}
                  className="text-xs text-gray-700 hover:text-gray-900 px-2 py-1 border border-gray-300 rounded hover:border-gray-400 transition-colors"
                >
                  Add
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Cart Summary - CHANGE THIS BUTTON */}
        {cart.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="fixed bottom-6 right-6 bg-white shadow-2xl rounded-2xl p-6 border border-[#940000] z-40 min-w-80"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-gray-800">Shopping Cart</h3>
              <span className="bg-[#940000] text-white text-sm px-2 py-1 rounded-full">
                {cart.length} {cart.length === 1 ? "item" : "items"}
              </span>
            </div>
            <div className="space-y-2 mb-4 max-h-32 overflow-y-auto">
              {cart.map((item) => (
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
              {/* CHANGE THIS BUTTON TO CALL handleCheckout */}
              <motion.button
                onClick={handleCheckout} // Changed to handleCheckout
                className="w-full bg-[#940000] text-white py-3 rounded-xl font-semibold hover:bg-[#7a0000] transition-colors shadow-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Proceed to Checkout
              </motion.button>
            </div>
          </motion.div>
        )}

        {/* Image Modal */}
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              className="relative max-w-4xl w-full max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative bg-white rounded-lg overflow-hidden">
                <img
                  src={selectedImage}
                  alt="Full Preview"
                  className="w-full h-auto max-h-[80vh] object-contain"
                />

                {/* Watermark on Modal */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="text-white/25 text-5xl font-bold rotate-45 transform select-none tracking-wider">
                    Masud Rana
                  </div>
                </div>

                {/* Corner Watermark on Modal */}
                <div className="absolute bottom-4 right-4 pointer-events-none">
                  <div className="text-white/50 text-lg font-semibold  px-3 py-2 rounded backdrop-blur-sm flex items-center gap-2">
                    <img src={waterMark} alt="watermark" className="w-6 h-6 " />
                  </div>
                </div>
              </div>

              <button
                className="absolute -top-12 right-0 bg-white rounded-full px-4 py-2 text-black font-bold hover:bg-gray-200 transition-colors shadow-lg"
                onClick={() => setSelectedImage(null)}
              >
                ✕ Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default WorkGalary;
