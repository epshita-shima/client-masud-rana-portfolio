import { motion } from "framer-motion";
import { div } from "framer-motion/client";

const About = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto pb-12">
        <div className=" flex flex-col lg:flex-row items-center justify-center  py-12">
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
              className="w-96 h-96 rounded-full shadow-lg border-4 border-[#940000]"
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
            <p className="text-lg text-[#2C2C2C] text-justify">
              Hi, I'm{" "}
              <span className="text-[#940000] font-semibold">Masud Rana</span>
              ,a passionate and professional <strong>
                graphic designer{" "}
              </strong>{" "}
              specializing in <strong>logo design</strong>. With a creative
              journey that began in <strong>2015</strong>, I’ve spent nearly a
              decade helping businesses and brands bring their identities to
              life through clean, meaningful, and impactful visual design.
            </p>
            <p className="text-lg text-[#2C2C2C] text-justify">
              I’ve worked with a diverse range of{" "}
              <strong>international and local</strong> clients through top
              freelancing platforms like <strong>Fiverr</strong> and{" "}
              <strong>Freelancer.com</strong>, successfully completing numerous
              projects across industries. My clients value my commitment to
              quality, creativity, and timely delivery — and I take pride in
              building strong, long-term relationships based on trust and
              satisfaction.
            </p>
            <p className="text-lg text-[#2C2C2C] text-justify">
              Design isn't just my profession — it's my passion. I believe that
              a logo is more than just a visual mark; it’s the{" "}
              <strong>face of a brand</strong>. My goal is to craft logos that
              are not only visually striking but also meaningful, memorable, and
              aligned with the brand’s identity.
            </p>
            <p className="text-lg text-[#2C2C2C] text-justify">
              Whether you're a startup looking for a bold identity or an
              established business in need of a brand refresh, I’m here to help
              turn your vision into reality.
            </p>
            <p className="text-lg text-[#2C2C2C] text-justify">
              Whether you're a startup looking for a bold identity or an
              established business in need of a brand refresh, I’m here to help
              turn your vision into reality.
            </p>
            <p className="text-lg text-[#2C2C2C] text-justify">
              Let’s create something amazing together.
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
                className="btn bg-[#940000] border-[#940000] text-white"
              >
                Hire Me
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="btn btn-outline text-[#940000] hover:bg-[#940000] hover:text-white hover:border-0"
              >
                Download Resume
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        <div className="px-4 md:px-12 lg:px-20">
          {/* Section Title */}
          <h3 className="text-[#940000] text-2xl font-semibold tracking-widest animate__animated animate__fadeInUp">
            About Masud Rana
          </h3>

          {/* Responsive Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mt-6">
            {/* Left Content */}
            <div className="md:col-span-8 animate__animated animate__fadeInLeft">
              <p className="text-2xl text-black mb-6">
                Driven by Vision | Focused on Impact | Committed to Excellence
              </p>
              <p className="text-lg text-[#2C2C2C] text-justify">
                Since beginning my design journey in 2015, I’ve always believed
                that design is more than just visual aesthetics — it’s a
                powerful language of connection, emotion, and identity. As a
                logo designer, I see every project not just as a task, but as an
                opportunity to <strong>bring a brand’s soul to life</strong>{" "}
                through a mark that speaks louder than words.
              </p>

              <p className="text-lg text-[#2C2C2C] text-justify">
                My vision is to build a globally respected design identity — one
                that blends{" "}
                <strong>creative excellence, strategic thinking</strong>, and{" "}
                <strong>deep cultural understanding</strong> to create logos
                that transcend trends and time. I aim to be recognized not only
                as a skilled designer but as a visionary who helps shape the
                future of branding through purposeful and meaningful design.
              </p>
              <p className="text-lg text-[#2C2C2C] text-justify">
                I envision a world where every business, regardless of size or
                location, has access to powerful visual branding — a logo that
                tells their story, builds trust with their audience, and
                positions them for growth and success. I want to contribute to
                that world by delivering designs that don’t just look good but{" "}
                <strong>
                  inspire confidence, evoke emotion, and drive connection
                </strong>
                .
              </p>
              <p className="text-lg text-[#2C2C2C] text-justify">
                Over the years, I’ve worked with clients from various industries
                and across continents, and each collaboration has strengthened
                my belief that great design is universal — it breaks barriers,
                unites cultures, and speaks directly to the human spirit. My
                vision is to continue evolving, learning, and pushing the
                boundaries of creativity, while staying rooted in the core
                values that define my work: authenticity, clarity, and impact.
              </p>
              <p className="text-lg text-[#2C2C2C] text-justify">
                Ultimately, my vision is to leave a legacy — not just of beautiful logos, but of <strong>brands transformed, dreams visualized,</strong> and <strong>stories remembered</strong> through the power of design.
              </p>
              {/* Career Highlights */}
              <p className="text-2xl text-black mb-6 mt-6">
               Mission | Building Identities | Inspiring Impact
              </p>
              <p className="text-lg text-[#2C2C2C] text-justify">
                My mission as a logo designer is rooted in a deep commitment to <strong>transforming ideas into iconic visual identities</strong> that stand the test of time. Since 2015, I have dedicated myself to not just creating designs — but building <strong>powerful brand symbols</strong> that tell stories, build trust, and inspire action.
              </p>
              <p className="text-lg text-[#2C2C2C] text-justify">
                I believe that every brand, whether a small startup or a global enterprise, deserves a logo that reflects its <strong>authentic personality, core values, and unique purpose</strong>. My mission is to deliver designs that go beyond the surface — visuals that carry meaning, evoke emotion, and communicate clearly across cultures, platforms, and generations.
              </p>
              <p className="text-lg text-[#2C2C2C] text-justify">
                With each project, I aim to provide:
              </p>
              <ul className="text-gray-600 text-lg list-disc pl-5">
                <li>
                 <strong>Creative Excellence:</strong> To craft visually striking logos that are both innovative and strategically aligned with the brand’s goals.
                </li>
                <li>
                  <strong>Client-Centric Collaboration:</strong> To truly listen, understand, and involve my clients throughout the design journey, turning their ideas into a visual language they can proudly own.
                </li>
                <li>
                 	<strong>Consistency & Professionalism:</strong> To maintain a high standard of reliability, clear communication, and timely delivery — earning the trust and satisfaction of every client I work with.
                </li>
                <li>
                  <strong>Global Perspective:</strong> To serve a diverse, international clientele with sensitivity to cultural nuance and an understanding of global design trends.
                </li>
                <li><strong>Continuous Growth:</strong>	 To evolve with the ever-changing world of design — staying inspired, mastering new tools and techniques, and pushing the limits of my creative boundaries.</li>
              <p className="text-lg text-[#2C2C2C] text-justify">
                At the heart of my mission is a belief: <strong>a great logo is the foundation of a great brand</strong>. It’s the first impression, the lasting memory, and the symbol that clients, customers, and communities associate with a business. My mission is to create that symbol — one logo at a time — with passion, precision, and purpose.
              </p>
              <p className="text-lg text-[#2C2C2C] text-justify">Through every project, I strive not just to meet expectations, but to exceed them. To deliver work that is not only visually outstanding but also strategically meaningful — work that helps brands <strong>stand out, grow with confidence, and leave a lasting mark</strong> in their industry.</p>
              </ul>


             
            </div>

            {/* Right Side: Button Section */}
            <div className="md:col-span-4 flex md:justify-center animate__animated animate__fadeInRight">
              <div className="bg-[#FBF1F2] h-44 w-full md:w-64 flex items-center justify-center rounded-lg shadow-md">
                <button
                  className="btn bg-[#940000] text-white p-4 w-52 md:w-42 border-none h-auto tracking-wider mt-8 
              hover:scale-105 transition-transform duration-300 ease-in-out"
                >
                  SHEDULE A STRATEGIC CONSULTATION
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
