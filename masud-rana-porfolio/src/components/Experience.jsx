import React from "react";
import { motion } from "framer-motion";

const Experience = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
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

  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="mt-24">
      <div className="container mx-auto">
        <div className="w-full bg-[#940000] h-auto overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:justify-between">
            {/* Text Content - Now takes full width */}
            <motion.div 
              className="w-full pt-6 sm:pt-16 pl-4 sm:pl-8 pr-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={containerVariants}
            >
              {/* Experience Section */}
              <motion.div 
                className="mb-8"
                variants={itemVariants}
              >
                <motion.h2 
                  className="text-3xl font-bold text-white mb-4"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  Experience
                </motion.h2>
                <motion.p 
                  className="text-justify text-white text-lg leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  Since 2020, I've been on a creative journey that has allowed
                  me to transform visions into visual identities. With a
                  deep-rooted passion for design and a sharp eye for aesthetics,
                  I've specialized in crafting compelling logos that blend
                  storytelling, style, and strategy — all tailored to resonate
                  with modern brands.
                </motion.p>
              </motion.div>

              {/* Why Partner With Me Section */}
              <motion.div 
                className="mb-8"
                variants={itemVariants}
              >
                <motion.h2 
                  className="text-3xl font-bold text-white mb-4"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  Why Partner With Me
                </motion.h2>
                <motion.p 
                  className="text-justify text-lg mt-4 text-white leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  With nearly a decade of experience, I bring not just technical 
                  expertise but also strategic thinking to every project. I 
                  understand that a great logo is more than just pretty graphics 
                  — it's the foundation of your brand's identity and the first 
                  impression you make on your audience.
                </motion.p>
              </motion.div>

              {/* Fiverr and Freelancer Section */}
              <motion.div 
                className="mb-8"
                variants={itemVariants}
              >
                <motion.h2 
                  className="text-3xl font-bold text-white mb-4"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  Fiverr and Freelancer
                </motion.h2>
                <motion.p 
                  className="text-justify text-lg mt-4 text-white leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  Having worked with hundreds of clients on platforms like
                  Fiverr and Freelancer, I've had the privilege of collaborating
                  with entrepreneurs, influencers, and businesses from all over
                  the world. Each project brings a new story, and my goal is
                  always the same: to create a memorable, timeless, and
                  meaningful logo that becomes the face of a brand.
                </motion.p>
              </motion.div>

              {/* Monogram Logo Design Section */}
              <motion.div 
                className="mb-8"
                variants={itemVariants}
              >
                <motion.h2 
                  className="text-3xl font-bold text-white mb-4"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  Monogram Logo Design
                </motion.h2>
                <motion.p 
                  className="text-justify text-lg mt-4 text-white leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  viewport={{ once: true }}
                >
                  My specialty lies in monogram logo design, where I explore the
                  power of typography and symbolism to create designs that are
                  both distinctive and versatile. Whether it's a luxurious
                  lettermark for a beauty brand or a sharp urban-style monogram
                  for a streetwear startup — I bring precision, creativity, and
                  clarity to every design I deliver.
                </motion.p>
              </motion.div>

              {/* What Sets My Work Apart Section */}
              <motion.div 
                className="mb-8"
                variants={itemVariants}
              >
                <motion.h2 
                  className="text-3xl font-bold text-white mb-6"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  What Sets My Work Apart?
                </motion.h2>
                <motion.ul 
                  className="space-y-4 text-white text-lg text-justify"
                  variants={containerVariants}
                >
                  {[
                    {
                      title: "Deep Industry Focus:",
                      description: "Fashion. Luxury. Urban. Beauty. These aren't just words to me — they're industries I understand inside out. Every logo is informed by market trends, cultural cues, and aesthetic precision."
                    },
                    {
                      title: "Detail-Driven Design:",
                      description: "I believe a logo is more than just a symbol. It's an identity. My work is detail-rich, balanced, and purposefully designed for both digital and print use."
                    },
                    {
                      title: "Client-Centric Process:",
                      description: "From mood boards to final delivery, I maintain transparent and collaborative communication. My clients aren't just customers — they're creative partners."
                    },
                    {
                      title: "Global Reach, Personalized Touch:",
                      description: "Working with clients across continents has helped me develop a versatile design style. But no matter where you're from, I provide a tailored experience that puts your brand first."
                    }
                  ].map((item, index) => (
                    <motion.li 
                      key={index}
                      className="flex items-start gap-3 p-3 bg-white/10 rounded-lg backdrop-blur-sm"
                      variants={listItemVariants}
                      whileHover={{ 
                        scale: 1.02,
                        backgroundColor: "rgba(255,255,255,0.15)"
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.span 
                        className="text-white font-bold text-lg mt-1 flex-shrink-0"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        ✓
                      </motion.span>
                      <div>
                        <span className="font-bold text-white block mb-1">
                          {item.title}
                        </span>
                        <span className="text-white/90 leading-relaxed">
                          {item.description}
                        </span>
                      </div>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>

              {/* Stats Section */}
              <motion.div 
                className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={containerVariants}
              >
                {[
                  { number: "5+", label: "Years Experience" },
                  { number: "100+", label: "Projects" },
                  { number: "4+", label: "Countries" },
                  { number: "98%", label: "Satisfaction" }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    className="text-center p-4 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20"
                    variants={itemVariants}
                    whileHover={{ 
                      scale: 1.05,
                      backgroundColor: "rgba(255,255,255,0.15)"
                    }}
                  >
                    <motion.div 
                      className="text-2xl md:text-3xl font-bold text-white mb-1"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ 
                        duration: 0.5, 
                        delay: 1 + index * 0.1,
                        type: "spring",
                        stiffness: 100
                      }}
                      viewport={{ once: true }}
                    >
                      {stat.number}
                    </motion.div>
                    <div className="text-white/80 text-sm font-medium">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;