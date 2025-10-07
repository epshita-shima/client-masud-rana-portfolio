import React from "react";
import { motion } from "framer-motion";
import manusranalogo from "../assets/image/masudranabd_logo.png";
const Header = () => {
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Work", href: "/work" },
    { name: "Blog", href: "/blog" },
    { name: "Article", href: "/article" },
    { name: "Support", href: "/support" },
  ];
  return (
    <header className="bg-white shadow-sm p-2 sticky top-0 z-50">
      <div className="navbar container mx-auto">
        <div className="lg:navbar-start md:navbar-start w-full flex justify-between sm:flex sm:justify-between">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="dropdown "
          >
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost text-black lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <motion.ul
              tabIndex={0}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              class="menu menu-sm dropdown-content bg-white rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {navLinks.map((link, index) => (
                <li key={index} className="text-black">
                  <a href={link.href}>{link.name}</a>
                </li>
              ))}
            </motion.ul>
          </motion.div>
          <motion.a
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="  text-black text-xl  hover:text-white"
          >
            <img
              src={manusranalogo} 
              alt="Logo"
              className="w-10 h-10 object-contain" 
            />
          </motion.a>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="navbar-end hidden lg:flex"
        >
          <ul className="menu menu-horizontal px-1">
            {navLinks.map((link, index) => (
              <motion.li
                key={index}
                className="text-[#2C2C2C] hover:text-[#940000] text-[16px]"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <a href={link.href}>{link.name}</a>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </header>
  );
};

export default Header;
