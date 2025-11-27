import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Profile from "../assets/image/profile_pic/masudrana_profile.jpg";
import Slider_1 from "../assets/image/profile_pic/slider_1.jpg";
import Slider_2 from "../assets/image/profile_pic/slider_2.jpg";

const Hero = () => {
  // Background slider images
  const backgroundImages = [
    Slider_1,
    Slider_2,
  ];

  const [currentBgIndex, setCurrentBgIndex] = useState(0);

  // Auto slide background
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  // Text animation variants
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
        ease: "easeOut"
      }
    })
  };

  // Image animation variants
  const imageVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      rotate: -5 
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      rotate: 0,
      transition: {
        duration: 1.2,
        ease: "easeOut",
        type: "spring",
        stiffness: 100
      }
    }
  };

  // Floating animation for image
  const floatingAnimation = {
    y: [0, -20, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  // Background slider animation
  const bgSliderVariants = {
    enter: {
      opacity: 0,
      scale: 1.1
    },
    center: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.5,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      scale: 1,
      transition: {
        duration: 1.5,
        ease: "easeIn"
      }
    }
  };

return (
    <div className="hero h-screen w-full text-black mx-auto relative overflow-hidden">
      
      {/* Full Width Background Slider */}
      <div className="absolute inset-0 z-0 w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentBgIndex}
            variants={bgSliderVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${backgroundImages[currentBgIndex]})`
            }}
          >
            {/* Gradient overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent lg:bg-gradient-to-r lg:from-black/60 lg:via-black/40 lg:to-transparent"></div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Large Profile Image - Hidden on small devices, visible on medium and up */}
      <motion.div 
        className="hidden md:block absolute right-4 lg:right-12 top-1/2 transform -translate-y-1/2 z-20"
        variants={imageVariants}
        initial="hidden"
        animate="visible"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <motion.div
          animate={floatingAnimation}
          className="relative"
        >
          <motion.img
            src={Profile}
            className="w-48 h-48 md:w-56 md:h-56 lg:w-72 lg:h-72 xl:w-80 xl:h-80 rounded-full border-4 md:border-6 border-[#940000] shadow-2xl bg-white"
            whileHover={{ 
              boxShadow: "0 20px 50px rgba(148, 0, 0, 0.6)",
              borderWidth: "8px"
            }}
            transition={{ type: "spring", stiffness: 300 }}
          />
          
          {/* Glow Effect */}
          <motion.div 
            className="absolute inset-0 rounded-full bg-[#940000] blur-xl opacity-50 z-0"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.4, 0.6, 0.4]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      </motion.div>

      {/* Text Content - Responsive positioning */}
      <div className="relative z-10 flex items-center justify-center lg:justify-start h-full w-full px-4 sm:px-6 md:px-8 lg:px-20">
        <motion.div 
          className="text-center lg:text-left space-y-4 md:space-y-6 w-full max-w-2xl lg:max-w-4xl lg:ml-8 xl:ml-16"
          initial="hidden"
          animate="visible"
        >
          {/* Hello Text with typewriter effect */}
          <motion.div
            className="overflow-hidden"
          >
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 drop-shadow-2xl leading-tight"
              variants={textVariants}
              custom={0}
              initial="hidden"
              animate="visible"
            >
              Hello, I'm{" "}
              <motion.span 
                className="text-[#940000] relative bg-white/90 px-3 py-1 md:px-4 md:py-2 rounded-xl inline-block mt-2"
                initial={{ backgroundSize: "0% 100%" }}
                animate={{ backgroundSize: "100% 100%" }}
                transition={{ duration: 1.5, delay: 1 }}
                style={{
                  backgroundImage: "linear-gradient(transparent 60%, rgba(148, 0, 0, 0.3) 40%)",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "left bottom"
                }}
              >
                Masud Rana
              </motion.span>
            </motion.h1>
          </motion.div>

          {/* Professional Title */}
          <motion.div
            variants={textVariants}
            custom={1}
            initial="hidden"
            animate="visible"
          >
            <motion.h2 
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white font-semibold mb-3 md:mb-4 drop-shadow-2xl"
              whileInView={{ opacity: 1, x: 0 }}
            >
              Professional Graphic Designer
            </motion.h2>
            <div className="w-24 md:w-32 h-1 bg-white rounded-full mb-4 md:mb-6 mx-auto lg:mx-0"></div>
          </motion.div>

          {/* Description */}
          <motion.div
            variants={textVariants}
            custom={2}
            initial="hidden"
            animate="visible"
            className="w-full"
          >
            <motion.p 
              className="text-base sm:text-lg md:text-xl text-white leading-relaxed md:leading-loose drop-shadow-2xl bg-black/40 rounded-2xl p-4 md:p-6 backdrop-blur-sm border border-white/20 mx-auto lg:mx-0 max-w-4xl"
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              I am a passionate and professional graphic designer specializing in logo design. 
              With a creative journey that began in <span className="text-[#940000] font-bold bg-white/90 px-2 py-1 rounded">2020</span>, 
              I've spent nearly a decade helping businesses and brands bring their identities 
              to life through clean, meaningful, and impactful visual design.
            </motion.p>
          </motion.div>

          {/* Experience Badge */}
          <motion.div
            variants={textVariants}
            custom={3}
            initial="hidden"
            animate="visible"
            className="flex justify-center lg:justify-start"
          >
            <motion.div 
              className="inline-flex items-center gap-2 md:gap-3 bg-[#940000] text-white px-6 py-3 md:px-8 md:py-4 rounded-full shadow-2xl backdrop-blur-sm border border-white/20"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(148, 0, 0, 0.6)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.span 
                className="text-lg md:text-xl"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 5 }}
              >
                🎨
              </motion.span>
              <span className="text-sm md:text-base lg:text-lg font-semibold">5+ Years Experience</span>
            </motion.div>
          </motion.div>

          {/* Small Device Profile Image - Only visible on mobile */}
          <motion.div 
            className="md:hidden flex justify-center mt-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.5 }}
          >
            <motion.div className="relative">
              <motion.img
                src={Profile}
                className="w-32 h-32 rounded-full border-4 border-[#940000] shadow-2xl bg-white"
                animate={{
                  y: [0, -10, 0]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div 
                className="absolute inset-0 rounded-full bg-[#940000] blur-lg opacity-50 z-0"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          </motion.div>

          {/* Background Slider Indicators */}
          <motion.div
            variants={textVariants}
            custom={4}
            initial="hidden"
            animate="visible"
            className="flex justify-center lg:justify-start gap-2 md:gap-3 mt-6 md:mt-8"
          >
            {backgroundImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentBgIndex(index)}
                className={`w-3 h-3 md:w-4 md:h-4 rounded-full transition-all duration-300 ${
                  index === currentBgIndex 
                    ? 'bg-[#940000] scale-125 border-2 border-white' 
                    : 'bg-white/60 hover:bg-white/80 border border-white/40'
                }`}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-white/80 text-xs md:text-sm flex flex-col items-center gap-1 md:gap-2"
        >
          <span>Scroll Down</span>
          <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>

      {/* Social Media Links - Bottom Left */}
      <motion.div
        className="absolute bottom-6 left-4 md:left-8 z-10 hidden md:flex flex-col gap-3"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2.5 }}
      >
        {[
          { icon: "📘", label: "Facebook" },
          { icon: "📷", label: "Instagram" },
          { icon: "💼", label: "LinkedIn" }
        ].map((social, index) => (
          <motion.a
            key={social.label}
            href="#"
            className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white border border-white/30 hover:bg-[#940000] hover:border-[#940000] transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5 + index * 0.1 }}
          >
            <span className="text-lg">{social.icon}</span>
          </motion.a>
        ))}
      </motion.div>
    </div>
  );
};

export default Hero;