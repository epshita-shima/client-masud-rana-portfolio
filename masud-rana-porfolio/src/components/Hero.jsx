import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="hero container bg-white text-black  lg:p-8 mx-auto">
      <div className="grid grid-cols-1 py-6 lg:grid-cols-2 items-center gap-10 ml-4">
        
        {/* Animated Image */}
        <motion.div 
          className="order-1 lg:order-2 flex w-full lg:justify-end justify-center "
          initial={{ opacity: 0, x: 100 }} // Starts off-screen
          animate={{ opacity: 1, x: 0 }} // Moves into place
          transition={{ duration: 1, ease: "easeOut" }} // Smooth animation
        >
          <img
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
            className="w-48 h-48 md:w-56 md:h-56  lg:w-96 max-w-sm rounded-[50%] shadow-2xl lg:h-96"
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
            className="text-5xl font-bold"
            initial={{ scale: 0.9 }} 
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            Box Office News!
          </motion.h1>

          <motion.p 
            className="py-6 px-4 lg:px-0"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 1, delay: 0.6 }}
          >
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
            quasi. In deleniti eaque aut repudiandae et a id nisi.
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
            quasi. In deleniti eaque aut repudiandae et a id nisi.
          </motion.p>

          <motion.button 
            className="btn bg-[#CB4154] border border-[#CB4154]"
            whileHover={{ scale: 1.1 }} // Scale up on hover
            whileTap={{ scale: 0.9 }} // Scale down on click
            transition={{ type: "spring", stiffness: 300 }}
          >
            Get Started
          </motion.button>
        </motion.div>

      </div>
    </div>
  );
};

export default Hero;
