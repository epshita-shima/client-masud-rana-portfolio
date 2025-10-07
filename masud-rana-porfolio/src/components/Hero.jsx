import { motion } from "framer-motion";
import Profile from "../assets/image/profile_pic/masudrana_profile.jpg"
const Hero = () => {
  return (
    <div className="hero h-screen container text-black  lg:p-8 mx-auto ">
      <div className="grid grid-cols-1 py-6 lg:grid-cols-2 items-center gap-10 ml-4">
        
        {/* Animated Image */}
        <motion.div 
          className="order-1 lg:order-2 flex w-full lg:justify-end justify-center "
          initial={{ opacity: 0, x: 100 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 1, ease: "easeOut" }} 
        >
          <img
            src={Profile}
            className="w-64 h-64 md:w-64 md:h-64  lg:w-[600px] max-w-sm rounded-[50%] border border-2 border-[#940000] shadow-2xl lg:h-[400px]"
          />
        </motion.div>

        {/* Animated Text */}
        <motion.div 
          className="order-2 lg:order-1 text-center lg:text-left"
          initial={{ opacity: 0, y: -50 }} // Starts above
          animate={{ opacity: 1, y: 0 }} // Moves into place
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }} // Delayed smooth animation
        >
          <motion.h1 
            className="text-3xl text-[#2C2C2C]  font-bold"
            initial={{ scale: 0.9 }} 
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
          Hello, I am Masud Rana
          </motion.h1>

          <motion.p 
            className="py-6 px-4 text-lg text-[#2C2C2C] lg:px-0"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 1, delay: 0.6 }}
          >
           I am a passionate and professional graphic designer specializing in logo design. With a creative journey that began in 2015, I’ve spent nearly a decade helping businesses and brands bring their identities to life through clean, meaningful, and impactful visual design.
          </motion.p>

          {/* <motion.button 
            className="btn bg-[#940000] border border-[#940000] rounded-full text-white"
            whileHover={{ scale: 1.1 }} // Scale up on hover
            whileTap={{ scale: 0.9 }} // Scale down on click
            transition={{ type: "spring", stiffness: 300 }}
          >
            Get Started
          </motion.button> */}
        </motion.div>

      </div>
    </div>
  );
};

export default Hero;
