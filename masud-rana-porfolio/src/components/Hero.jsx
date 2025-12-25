import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Profile from "../assets/image/profile_pic/masudrana_profile.jpg";
import Slider_1 from "../assets/image/profile_pic/slider_1.jpg";
import Slider_2 from "../assets/image/profile_pic/slider_2.jpg";

const Hero = () => {
  const backgroundImages = [Slider_1, Slider_2];
  const [currentBgIndex, setCurrentBgIndex] = useState(0);

  // Auto slide background
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 8000); // Increased to 8 seconds

    return () => clearInterval(interval);
  }, []);

  // Simple fade variants
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="hero h-screen w-full text-black mx-auto relative overflow-hidden">
      
      {/* Background Slider - Simple fade */}
      <div className="absolute inset-0 z-0 w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentBgIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${backgroundImages[currentBgIndex]})`
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Large Profile Image - Simple fade only */}
      <div className="hidden md:block absolute right-8 lg:right-16 top-1/2 transform -translate-y-1/2 z-20">
        <motion.img
          src={Profile}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-56 h-56 lg:w-64 lg:h-64 rounded-full border-4 border-[#940000] shadow-lg bg-white"
          alt="Masud Rana"
          loading="lazy"
        />
      </div>

      {/* Text Content */}
      <div className="relative z-10 flex items-center justify-center lg:justify-start h-full w-full px-4 lg:px-16">
        <motion.div 
          className="text-center lg:text-left space-y-4 w-full max-w-2xl lg:max-w-3xl lg:ml-8"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Hello Text */}
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
            variants={fadeInUp}
          >
            Hello, I'm{" "}
            <span className="text-[#940000] bg-white/90 px-3 py-1 rounded-lg">
              Masud Rana
            </span>
          </motion.h1>

          {/* Professional Title */}
          <motion.div variants={fadeInUp}>
            <h2 className="text-xl md:text-2xl lg:text-3xl text-white font-semibold">
              Professional Graphic Designer
            </h2>
            <div className="w-24 h-1 bg-white rounded-full my-3 mx-auto lg:mx-0"></div>
          </motion.div>

          {/* Description */}
          <motion.p 
            className="text-white text-lg leading-relaxed bg-black/30 rounded-xl p-4"
            variants={fadeIn}
          >
            I am a passionate and professional graphic designer specializing in logo design. 
            With a creative journey that began in <span className="text-[#940000] font-bold bg-white/90 px-2 py-1 rounded">2020</span>, 
            I've spent nearly a decade helping businesses and brands bring their identities 
            to life through clean, meaningful, and impactful visual design.
          </motion.p>

          {/* Experience Badge */}
          <motion.div 
            className="flex justify-center lg:justify-start"
            variants={fadeIn}
          >
            <div className="inline-flex items-center gap-3 bg-[#940000] text-white px-6 py-3 rounded-full shadow-lg">
              <span>🎨</span>
              <span className="font-semibold">5+ Years Experience</span>
            </div>
          </motion.div>

          {/* Mobile Profile Image */}
          <div className="md:hidden flex justify-center mt-6">
            <img
              src={Profile}
              className="w-40 h-40 rounded-full border-4 border-[#940000] shadow-lg"
              alt="Masud Rana"
              loading="lazy"
            />
          </div>

          {/* Background Slider Indicators */}
          <div className="flex justify-center lg:justify-start gap-2 mt-6">
            {backgroundImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentBgIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentBgIndex 
                    ? 'bg-[#940000] scale-125' 
                    : 'bg-white/60 hover:bg-white/80'
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator - CSS animation only */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="text-white/80 text-sm flex flex-col items-center gap-2">
          <span>Scroll Down</span>
          <svg 
            className="w-5 h-5 animate-bounce" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3" 
            />
          </svg>
        </div>
      </div>


    </div>
  );
};

export default Hero;