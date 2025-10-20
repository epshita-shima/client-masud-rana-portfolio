import React, { useState } from "react";
import { motion } from "framer-motion";

import logo1 from "../assets/image/logo_design/aesthetic_stitch.jpg";
import logo2 from "../assets/image/logo_design/aurelian_spa.jpg";
import logo3 from "../assets/image/logo_design/grey_vouge.jpg";
import logo4 from "../assets/image/logo_design/lady_j.jpg";
import logo5 from "../assets/image/logo_design/mauvefin.jpg";
import logo6 from "../assets/image/logo_design/olive_june.jpg";
import logo7 from "../assets/image/logo_design/skydusk.jpg";
import logo8 from "../assets/image/logo_design/strivex.jpg";
import logo9 from "../assets/image/logo_design/time_machine.jpg";
import logo10 from "../assets/image/logo_design/logo10.png";

const allWorks = [
  { id: 1, category: "logo", img: logo1 },
  { id: 2, category: "logo", img: logo2 },
//   { id: 3, category: "banner", img: "/images/banner1.jpg" },
//   { id: 4, category: "banner", img: "/images/banner2.jpg" },
//   { id: 5, category: "card", img: "/images/card1.jpg" },
//   { id: 6, category: "card", img: "/images/card2.jpg" },
//   { id: 7, category: "logo", img: "/images/logo3.jpg" },
//   { id: 8, category: "banner", img: "/images/banner3.jpg" },
  { id: 3, category: "logo", img: logo9 },
  { id: 4, category: "logo", img: logo3 },
  { id: 5, category: "logo", img: logo4 },
  { id: 6, category: "logo", img: logo5 },
  { id: 7, category: "logo", img: logo6 },
  { id: 8, category: "logo", img: logo7 },
  { id: 9, category: "logo", img: logo8 },
];

const WorkGalary = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredWorks =
    selectedCategory === "all"
      ? allWorks
      : allWorks.filter((item) => item.category === selectedCategory);

  return (
    <div className=" ">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-6 pt-24 ">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-gray-800 inline-block border-b-4 border-[#940000] pb-2"
          >
            My Work
          </motion.h2>
        </div>

        {/* Category Buttons */}
        <div className="flex justify-center gap-4 mb-8 flex-wrap ">
          {["all", "logo", "banner", "card"].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full border ${
                selectedCategory === cat
                  ? "bg-[#940000] text-white border-[#940000]"
                  : "border-gray-400 text-gray-600 hover:bg-gray-200"
              } transition-all duration-300`}
            >
              {cat === "all"
                ? "All"
                : cat === "logo"
                ? "Logo Design"
                : cat === "banner"
                ? "Banner Design"
                : "Business Card"}
            </button>
          ))}
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pb-8">
          {filteredWorks.slice(0, 9).map((work, index) => (
            <motion.div
              key={work.id}
              className={`overflow-hidden rounded-lg shadow-lg cursor-pointer border border-[#940000] ${
                index % 3 === 0
                  ? "row-span-2"
                  : index % 4 === 0
                  ? "row-span-1"
                  : "row-span-3"
              }`}
              onClick={() => setSelectedImage(work.img)}
            >
              <img
                src={work.img}
                alt={`work-${work.id}`}
                className="w-full h-full object-cover rounded-lg "
              />
            </motion.div>
          ))}
        </div>
        {/* Show More Button */}
        {/* <div className="text-center mt-8">
          <button
            onClick={() => (window.location.href = "/work")}
            className="px-6 py-2 bg-[#940000] text-white rounded-full hover:bg-[#a83247] transition-all duration-300"
          >
            Show More Work
          </button>
        </div> */}

        {/* Modal */}
        {selectedImage && (
          <div
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          >
            <div className="relative">
              <img
                src={selectedImage}
                alt="Full Preview"
                className="max-w-full max-h-[80vh] rounded-lg shadow-lg"
              />
              <button
                className="absolute top-2 right-2 bg-white rounded-full px-3 py-1 text-black font-bold"
                onClick={() => setSelectedImage(null)}
              >
                ✕
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WorkGalary;
