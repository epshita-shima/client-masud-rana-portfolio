import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import logoImage from "../../assets/image/logo_design/watermark_icon.jpg";

const About = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  // Logo click handler
  const handleLogoClick = () => {
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate("/");
    }
  };

  const stats = [
    { number: "5+", label: "Years Experience" },
    { number: "100+", label: "Projects Completed" },
    { number: "4+", label: "Countries Served" },
    { number: "98%", label: "Client Satisfaction" }
  ];

  const skills = [
    "Logo Design",
    "Brand Identity",
    "Typography",
    "Vector Illustration",
    "Color Theory",
    "Creative Strategy"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white relative">
      
      {/* Fixed Logo Button */}
      <motion.button
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        onClick={handleLogoClick}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#940000] rounded-full shadow-2xl border-2 border-white flex items-center justify-center hover:shadow-xl transition-all duration-300 group"
        whileHover={{ scale: 1.1, backgroundColor: "#7a0000" }}
        whileTap={{ scale: 0.9 }}
      >
       <div className="text-white font-bold text-lg">
                 <img src={logoImage} alt="Logo" className="w-8 h-8 rounded-full" />
               </div>
        
        <div className="absolute right-16 bottom-1/2 transform translate-y-1/2 bg-black text-white text-xs px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-lg">
          {location.pathname === "/" ? "Scroll to Top" : "← Back to Home"}
        </div>

        <div className="absolute inset-0 rounded-full bg-[#940000] animate-ping opacity-20"></div>
      </motion.button>

      {/* Hero Section */}
      <section className="container mx-auto py-16 px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Image Section */}
          <motion.div
            className="lg:w-2/5 flex justify-center"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <motion.img
                src="https://th.bing.com/th/id/OIP.xrZIEhpJrAdGTbuBh8JHOQHaJy?rs=1&pid=ImgDetMain"
                alt="Masud Rana"
                className="w-80 h-80 rounded-2xl shadow-2xl object-cover border-4 border-white"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div
                className="absolute -bottom-4 -right-4 bg-[#940000] text-white px-6 py-3 rounded-xl shadow-lg"
                initial={{ scale: 0, rotate: -10 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.5, type: "spring" }}
              >
                <div className="text-center">
                  <div className="text-2xl font-bold">9+ Years</div>
                  <div className="text-sm">Experience</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Text Section */}
          <motion.div
            className="lg:w-3/5"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
                Hi, I'm <span className="text-[#940000]">Masud Rana</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                A passionate <strong>Graphic Designer</strong> specializing in creating 
                meaningful brand identities through strategic logo design. 
                Transforming visions into visual stories since <strong>2015</strong>.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="text-center p-4 bg-white rounded-xl shadow-lg border border-gray-100"
                >
                  <div className="text-2xl lg:text-3xl font-bold text-[#940000] mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#940000] text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:bg-[#7a0000] transition-colors flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
                Start Your Project
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-[#940000] text-[#940000] px-8 py-4 rounded-xl font-semibold hover:bg-[#940000] hover:text-white transition-colors flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Resume
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              My Design Philosophy
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Building brands that stand the test of time through strategic design and meaningful storytelling
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg border border-gray-100"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-[#940000] rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800">My Vision</h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                To build a globally respected design identity that blends creative excellence, 
                strategic thinking, and cultural understanding to create logos that transcend trends and time.
              </p>
              <p className="text-gray-600 leading-relaxed">
                I envision a world where every business has access to powerful visual branding — 
                logos that tell stories, build trust, and position them for growth and success.
              </p>
            </motion.div>

            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg border border-gray-100"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-[#940000] rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800">My Mission</h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                To transform ideas into iconic visual identities that stand the test of time, 
                creating powerful brand symbols that tell stories and inspire action.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Through every project, I strive to deliver work that is not only visually outstanding 
                but also strategically meaningful — helping brands stand out and leave a lasting mark.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills & Expertise */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Skills & Expertise</h2>
            <p className="text-xl text-gray-600">Specialized in creating impactful brand identities</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-center group hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-[#940000] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white text-2xl">✨</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{skill}</h3>
                <p className="text-gray-600 text-sm">
                  Crafting meaningful designs that resonate with your audience
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#940000] to-[#7a0000]">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Bring Your Vision to Life?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let's collaborate to create a brand identity that truly represents your business and connects with your audience.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-[#940000] px-8 py-4 rounded-xl font-bold text-lg shadow-2xl hover:bg-gray-100 transition-colors"
            >
              Schedule a Free Consultation
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;