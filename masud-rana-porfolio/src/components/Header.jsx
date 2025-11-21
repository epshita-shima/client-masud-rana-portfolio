import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import manusranalogo from "../assets/image/masudranabd_logo.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Get cart items from Redux store
  const cartItems = useSelector((state) => state.cart.items);
  const cartItemsCount = cartItems.reduce((count, item) => count + item.quantity, 0);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Work", href: "/work" },
    { name: "Blog", href: "/blog" },
    { name: "Article", href: "/article" },
    { name: "Support", href: "/support" },
  ];

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Mobile menu animation variants
  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const navItemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  const handleCartClick = () => {
    if (cartItems.length > 0) {
      navigate('/checkout');
    } else {
      navigate('/services');
    }
  };

  return (
    <motion.header
      className={`bg-white sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "shadow-lg bg-white/95 backdrop-blur-md" 
          : "shadow-sm bg-white"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4">
        <div className="navbar py-3">
          {/* Logo Section */}
          <motion.div
            className="navbar-start flex-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.a
              href="/"
              className="flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.img
                src={manusranalogo}
                alt="Masud Rana Logo"
                className="w-16 h-16 object-contain"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              />
            </motion.a>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div
            className="navbar-center hidden lg:flex"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <ul className="menu menu-horizontal gap-2">
              {navLinks.map((link, index) => (
                <motion.li
                  key={index}
                  custom={index}
                  initial="hidden"
                  animate="visible"
                  variants={navItemVariants}
                  whileHover={{ 
                    scale: 1.05,
                    y: -2
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a
                    href={link.href}
                    className="text-[#2C2C2C] hover:text-[#940000] font-medium px-4 py-2 rounded-lg transition-colors duration-300 relative group"
                  >
                    {link.name}
                    <motion.span
                      className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#940000] group-hover:w-full transition-all duration-300"
                      initial={{ width: 0 }}
                      whileHover={{ width: "100%" }}
                    />
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* CTA Button - Cart */}
          <motion.div
            className="navbar-end hidden lg:flex"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.button
              className="bg-[#940000] text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3 group relative overflow-hidden"
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "#7a0000",
                boxShadow: "0 10px 25px rgba(148, 0, 0, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              onClick={handleCartClick}
            >
              <motion.div className="relative">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5.5M7 13l2.5 5.5m0 0L17 21" />
                </svg>
                
                {cartItemsCount > 0 && (
                  <motion.span 
                    className="absolute -top-2 -right-2 bg-yellow-400 text-[#940000] text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold border border-white"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 500 }}
                    whileHover={{ scale: 1.3, rotate: 360 }}
                  >
                    {cartItemsCount}
                  </motion.span>
                )}
              </motion.div>
              
              <motion.span
                initial={{ x: 0 }}
                whileHover={{ x: 3 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                {cartItemsCount > 0 ? `Cart (${cartItemsCount})` : 'View Cart'}
              </motion.span>
              
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                whileHover={{ translateX: "200%" }}
              />
            </motion.button>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.div
            className="navbar-end lg:hidden flex items-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {/* Mobile Cart Icon */}
            <motion.div 
              className="relative cursor-pointer"
              whileHover={{ scale: 1.1 }}
              onClick={handleCartClick}
            >
              <svg className="w-6 h-6 text-[#940000]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5.5M7 13l2.5 5.5m0 0L17 21" />
              </svg>
              {cartItemsCount > 0 && (
                <motion.span 
                  className="absolute -top-2 -right-2 bg-[#940000] text-white text-xs w-4 h-4 rounded-full flex items-center justify-center font-bold border border-white"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 500 }}
                >
                  {cartItemsCount}
                </motion.span>
              )}
            </motion.div>

            <motion.button
              className="btn btn-ghost p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.div
                animate={isMobileMenuOpen ? "open" : "closed"}
                className="flex flex-col gap-1"
              >
                <motion.span
                  className="w-6 h-0.5 bg-[#2C2C2C] block"
                  variants={{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: 45, y: 6 }
                  }}
                />
                <motion.span
                  className="w-6 h-0.5 bg-[#2C2C2C] block"
                  variants={{
                    closed: { opacity: 1 },
                    open: { opacity: 0 }
                  }}
                />
                <motion.span
                  className="w-6 h-0.5 bg-[#2C2C2C] block"
                  variants={{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: -45, y: -6 }
                  }}
                />
              </motion.div>
            </motion.button>
          </motion.div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="lg:hidden bg-white/95 backdrop-blur-md rounded-lg mt-2 overflow-hidden shadow-xl"
            >
              <ul className="menu p-4 space-y-2">
                {navLinks.map((link, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 10 }}
                  >
                    <a
                      href={link.href}
                      className="text-[#2C2C2C] hover:text-[#940000] font-medium py-3 px-4 rounded-lg transition-colors duration-300 block"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                    </a>
                  </motion.li>
                ))}
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navLinks.length * 0.1 }}
                  className="pt-2 border-t border-gray-200"
                >
                  <motion.button
                    className="bg-[#940000] text-white w-full py-3 rounded-full font-semibold flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      handleCartClick();
                    }}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5.5M7 13l2.5 5.5m0 0L17 21" />
                    </svg>
                    {cartItemsCount > 0 ? `View Cart (${cartItemsCount})` : 'View Cart'}
                  </motion.button>
                </motion.li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;