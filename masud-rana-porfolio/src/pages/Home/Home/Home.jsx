import React from 'react'
import Header from '../../../components/Header'
import Hero from '../../../components/Hero'
import Client from '../../../components/Client'
import Footer from '../../../components/Footer'
import Contact from '../../../components/Contact'
import Experience from '../../../components/Experience'
import Gallary from '../../../components/Gallary'
import WorkGalary from '../../../components/WorkGalary'
import './Home.css'
import { useNavigate } from 'react-router-dom'
import { motion } from "framer-motion";
import logoImage from '../../../assets/image/logo_design/watermark_icon.jpg'
const Home = () => {
  const navigate = useNavigate();

  // Logo click handler - যদি একই পেজে থাকতে চান তাহলে scroll to top করুন
  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // অথবা যদি অন্য কোনো পেজে navigate করতে চান
    // navigate("/");
  };
  return (
 <div className='bg-white relative'>

      {/* Bottom Fixed Logo Button */}
      <motion.button
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        onClick={handleLogoClick}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#940000] rounded-full shadow-2xl border-2 border-white flex items-center justify-center hover:shadow-xl transition-all duration-300 group"
        whileHover={{ scale: 1.1, backgroundColor: "#7a0000" }}
        whileTap={{ scale: 0.9 }}
      >
        {/* লোগো ইমেজ বা টেক্সট */}
        <div className="text-white font-bold text-lg">
                  <img src={logoImage} alt="Logo" className="w-8 h-8 rounded-full" />
                </div>
        {/* Tooltip */}
        <div className="absolute right-16 bottom-1/2 transform translate-y-1/2 bg-black text-white text-xs px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-lg">
          Scroll to Top
        </div>

        {/* Pulse Animation */}
        <div className="absolute inset-0 rounded-full bg-[#940000] animate-ping opacity-20"></div>
      </motion.button>

      <Hero></Hero>
      
      <WorkGalary></WorkGalary>
      <Experience></Experience>
      <Client></Client>
      <Contact></Contact>
    </div>
  )
}

export default Home