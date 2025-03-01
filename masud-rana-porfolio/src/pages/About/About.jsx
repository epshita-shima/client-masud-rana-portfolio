import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center bg-white  py-12">
      {/* Image Section with Animation */}
      <motion.div
        className="lg:w-1/3 flex justify-center"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <img
          src="https://th.bing.com/th/id/OIP.xrZIEhpJrAdGTbuBh8JHOQHaJy?rs=1&pid=ImgDetMain" // Replace with your actual image path
          alt="Masud Rana"
          className="w-64 h-64 rounded-full shadow-lg border-4 border-black"
        />
      </motion.div>

      {/* Text Section with Animation */}
      <motion.div
        className="lg:w-2/3 text-center lg:text-left px-6"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <h2 className="text-4xl font-bold text-black mb-4">About Me</h2>
        <p className="text-lg text-gray-600">
          Hi, I'm <span className="text-[#CB4154] font-semibold">Masud Rana</span>, a
          passionate freelancer specializing in <strong>Data Entry, SEO, and Graphic Design</strong>.
          I help businesses enhance their online presence with efficient data solutions and creative visuals.
        </p>

        {/* Buttons with Hover Animation */}
        <motion.div
          className="mt-6 flex justify-center lg:justify-start gap-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="btn bg-[#CB4154] border-[#CB4154]"
          >
            Hire Me
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="btn btn-outline text-[#CB4154] hover:bg-[#CB4154] hover:text-white hover:border-0"
          >
            Download Resume
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
