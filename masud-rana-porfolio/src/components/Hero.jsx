import { motion } from "framer-motion";
import Profile from "../assets/image/profile_pic/masudrana_profile.jpg"

const Hero = () => {
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
    y: [0, -10, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  // Background elements animation
  const bgElementVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="hero h-screen container text-black lg:p-8 mx-auto bg-offwhite-orange-shimmer relative overflow-hidden">
      
      {/* Animated Background Elements */}
      <motion.div 
        className="absolute top-10 left-10 w-20 h-20 border-2 border-[#940000] rounded-full opacity-10"
        variants={bgElementVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.5 }}
      />
      <motion.div 
        className="absolute bottom-20 right-20 w-16 h-16 border-2 border-[#940000] rounded-full opacity-10"
        variants={bgElementVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.7 }}
      />
      <motion.div 
        className="absolute top-1/2 right-1/4 w-12 h-12 border-2 border-[#940000] rounded-full opacity-10"
        variants={bgElementVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.9 }}
      />

      <div className="grid grid-cols-1 py-6 lg:grid-cols-2 items-center gap-10 ml-4 h-full">
        
        {/* Animated Image */}
        <motion.div 
          className="order-1 lg:order-2 flex w-full lg:justify-end justify-center relative"
          variants={imageVariants}
          initial="hidden"
          animate="visible"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {/* Floating Effect Container */}
          <motion.div
            animate={floatingAnimation}
          >
            <motion.img
              src={Profile}
              className="w-64 h-64 md:w-64 md:h-64 lg:w-[600px] max-w-sm rounded-[50%] border-4 border-[#940000] shadow-2xl lg:h-[400px] relative z-10"
              whileHover={{ 
                boxShadow: "0 20px 40px rgba(148, 0, 0, 0.3)",
                borderWidth: "6px"
              }}
              transition={{ type: "spring", stiffness: 300 }}
            />
            
            {/* Glow Effect */}
            <motion.div 
              className="absolute inset-0 rounded-[50%] bg-[#940000] blur-xl opacity-20 z-0"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.3, 0.2]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        </motion.div>

        {/* Animated Text Content */}
        <motion.div 
          className="order-2 lg:order-1 text-center lg:text-left space-y-6"
          initial="hidden"
          animate="visible"
        >
          {/* Hello Text with typewriter effect */}
          <motion.div
            className="overflow-hidden"
          >
            <motion.h1 
              className="text-4xl lg:text-6xl font-bold text-[#2C2C2C] mb-4"
              variants={textVariants}
              custom={0}
              initial="hidden"
              animate="visible"
            >
              Hello, I'm{" "}
              <motion.span 
                className="text-[#940000] relative"
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
              className="text-xl lg:text-2xl text-[#940000] font-semibold mb-2"
              whileInView={{ opacity: 1, x: 0 }}
            >
              Professional Graphic Designer
            </motion.h2>
            <div className="w-20 h-1 bg-[#940000] rounded-full mx-auto lg:mx-0"></div>
          </motion.div>

          {/* Description */}
          <motion.div
            variants={textVariants}
            custom={2}
            initial="hidden"
            animate="visible"
          >
            <motion.p 
              className="py-6 px-4 text-lg text-[#2C2C2C] lg:px-0 leading-relaxed"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              I am a passionate and professional graphic designer specializing in logo design. 
              With a creative journey that began in <span className="text-[#940000] font-semibold">2015</span>, 
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
              className="inline-flex items-center gap-2 bg-[#940000] text-white px-6 py-3 rounded-full shadow-lg"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(148, 0, 0, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.span 
                className="text-lg font-semibold"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 5 }}
              >
                🎨
              </motion.span>
              <span className="text-sm lg:text-base">9+ Years of Creative Experience</span>
            </motion.div>
          </motion.div>

          {/* CTA Button (Optional) */}
        
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;