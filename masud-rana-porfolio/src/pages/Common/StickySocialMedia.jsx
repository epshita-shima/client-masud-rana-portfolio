import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";
import fiverLogo from "../../assets/image/logo_design/fiver_icon.png"
const StickySocialMedia = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="hidden  lg:flex  fixed ml-4 top-2/4 transform -translate-y-1/2 flex-col space-y-4 z-50"
    >
      <a
        href="http://linkedin.com/in/masud-rana-a6821512a"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center text-white bg-[#940000] transition-all duration-500 ease-in-out text-[14px] h-10 w-10  rounded-full transform hover:scale-110 hover:rotate-360 border-3 border-white"
      >
     <FontAwesomeIcon icon={faLinkedinIn} />
      </a>

      <a
        href="https://x.com/MasudRana0161"
        target="_blank" 
        rel="noopener noreferrer"
        className="flex items-center justify-center  text-white bg-[#940000] transition-all duration-500 ease-in-out text-[14px] h-10 w-10 rounded-full transform hover:scale-110 hover:rotate-360 border-3 border-white"
      >
       <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
      </a>
      <a
        href="https://www.facebook.com/profile.php?id=61580500531550"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center  text-white bg-[#940000] transition-all duration-500 ease-in-out text-[14px] h-10 w-10 rounded-full transform hover:scale-110 hover:rotate-360 border-3 border-white"
      >
       <FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon>
      </a>
      {/* <a
        href=" https://www.fiverr.com/s/2KlPZLL"
        target="_blank"
        rel="noopener noreferrer"
      
      >
<img src={fiverLogo} alt="" className="flex items-center justify-center  text-white bg-[#940000] transition-all duration-500 ease-in-out text-[14px] h-8 w-8 rounded-full transform hover:scale-110 hover:rotate-360 border-3 border-white"/>
      </a> */}
    </motion.div>
  );
};

export default StickySocialMedia;
