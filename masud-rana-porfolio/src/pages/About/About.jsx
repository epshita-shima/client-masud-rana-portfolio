import { motion } from "framer-motion";
import { div } from "framer-motion/client";

const About = () => {
  return (
    <div className="container mx-auto">
      <div className=" flex flex-col lg:flex-row items-center justify-center bg-white  py-12">
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
          <h2 className="text-4xl font-bold text-black mb-4">Intro</h2>
          <p className="text-lg text-gray-600 text-justify">
            Hi, I'm <span className="text-[#CB4154] font-semibold">Masud Rana</span>, With a keen eye for design and a passion for data, I blend creativity with precision. As a <strong>Graphic Designer and Data Specialist</strong> , I craft visually compelling designs while transforming complex data into clear, actionable insights. Whether it’s branding, data visualization, or strategic analytics, I merge aesthetics with intelligence to create meaningful and impactful solutions.
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
      <div>
        <h3 className="text-[#CB4154] text-2xl font-normal tracking-widest">About Masud Rana</h3>
        <div class="grid grid-cols-12 gap-4">
          <div class="col-span-8">
            <p className="text-2xl text-black mb-8">Global Growth Advisor | Strategic Investor | Leadership Mentor</p>
            <p className="text-lg text-gray-600 text-justify">I bring a unique perspective to business advisory, combining international expertise with deep investment insight and leadership development experience. As UK Ambassador for Tech Nordic Advocates, I play a key role in fostering technology collaboration between the UK and Nordic-Baltic regions, actively connecting innovators, investors, and business leaders across borders.</p>
            <h3 className="text-black text-2xl mt-4 mb-4">Career Highlights:</h3>
            <div className="text-gray-600 text-lg">
              <li>Founder of an international business operating across 21 countries</li>
              <li>Advisory Board Member for high-growth companies and scale-ups</li>
              <li>UK Ambassador for Tech Nordic Advocates, bridging international tech ecosystems</li>
              <li>Former City lawyer specialising in IP, commercial and branding law, recognised by Chambers</li>
              <li>Active angel investor and tech startup mentor</li>
              <li>Female Business Owner of the Year recipient</li>
              <li>Successful Dragons' Den participant and regular awards judge</li>
              <li>Cranfield School of Management BGP alumna</li>
            </div>

            <p className="text-lg text-gray-600 text-justify mt-4">
              My journey from corporate law to entrepreneurship and global advisory has given me unique insights into scaling businesses internationally. I've built and scaled my own international business, advised global corporations including a $148 billion turnover brand, and now help ambitious companies prepare for international growth and investment. Through my role with Tech Nordic Advocates, I actively support technology companies in their cross-border expansion and development.
            </p>

            <p className="text-lg text-gray-600 text-justify mt-4">
              As an advisory board member, I provide strategic guidance to companies navigating critical growth phases, drawing on my diverse experience across international markets, technology, and investment. My tech mentoring work focuses on helping innovative companies scale successfully, particularly those expanding across borders or seeking investment.
            </p>

            <p className="text-lg text-justify text-gray-600 mt-4">
              As a speaker and consultant, I share practical wisdom on global expansion, investment readiness, and strategic leadership. My approach combines international business acumen with actionable insights, helping leaders and organizations navigate growth and capture global opportunities. This is enhanced by my active involvement in both traditional business and technology ecosystems, allowing me to bridge sectors and markets effectively.
            </p>
          </div>
          <div class="col-span-4 ml-8">
            <div className="bg-[#FBF1F2] h-44 w-64 flex items-center justify-center">
              <button className="btn bg-[#CB4154] text-white p-4  w-42 border-none h-auto tracking-wider mt-8">
                SHEDULE A STRATEGIC CONSULTATION
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
