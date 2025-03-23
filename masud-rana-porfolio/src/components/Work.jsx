import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Work = () => {
  const [showWorkTabs, setShowWorkTabs] = useState(false);
  const [activeTab, setActiveTab] = useState("");
  const [selectedGraphicsCategory, setSelectedGraphicsCategory] = useState("All");

  const graphicsCategories = ["All", "Logo Design", "Banner Design", "Poster Design", "Social Media Design", "Flyers & Brochures", "Business Card"];

  // Sample categorized gallery images
  const graphicsGallery = [
    { src: "https://img1.wsimg.com/isteam/stock/29GnJkb/:/rs=w:600,h:400", category: "Logo Design" },
    { src: "https://img1.wsimg.com/isteam/stock/yzxOwJx/:/rs=w:600,h:400", category: "Logo Design" },
    { src: "https://img1.wsimg.com/isteam/stock/9bNZy4A/:/rs=w:600,h:400", category: "Banner Design" },
    { src: "https://img1.wsimg.com/isteam/stock/NBq5Qj4/:/rs=w:600,h:400", category: "Poster Design" },
    { src: "https://img1.wsimg.com/isteam/stock/lz3xGwZ/:/rs=w:600,h:400", category: "Social Media Design" },
    { src: "https://img1.wsimg.com/isteam/stock/Az6Z9p9/:/rs=w:600,h:400", category: "Flyers & Brochures" },
    { src: "https://img1.wsimg.com/isteam/stock/D2nNRr5/:/rs=w:600,h:400", category: "Business Card" },
    { src: "https://img1.wsimg.com/isteam/stock/D2nNRr5/:/rs=w:600,h:400", category: "Business Card" },
    { src: "https://img1.wsimg.com/isteam/stock/D2nNRr5/:/rs=w:600,h:400", category: "Business Card" },
    { src: "https://img1.wsimg.com/isteam/stock/D2nNRr5/:/rs=w:600,h:400", category: "Business Card" },
    { src: "https://img1.wsimg.com/isteam/stock/D2nNRr5/:/rs=w:600,h:400", category: "Business Card" },
    { src: "https://img1.wsimg.com/isteam/stock/D2nNRr5/:/rs=w:600,h:400", category: "Business Card" },
  ];

  const [visibleImageCount, setVisibleImageCount] = useState(9);

  // Reset visible count when category changes
  useEffect(() => {
    setVisibleImageCount(9);
  }, [selectedGraphicsCategory]);
  
  const filteredImages =
    selectedGraphicsCategory === "All"
      ? graphicsGallery
      : graphicsGallery.filter((img) => img.category === selectedGraphicsCategory);
  
  const displayedImages = filteredImages.slice(0, visibleImageCount);
  return (
    <section className="bg-white py-8 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-[#CB4154] mb-6">My Work</h2>

        {!showWorkTabs && (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowWorkTabs(true)}
            className="bg-[#CB4154] text-white font-semibold px-6 py-3 rounded-full shadow-md hover:bg-[#a33645] transition"
          >
            View My Work
          </motion.button>
        )}

        {showWorkTabs && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-wrap justify-center gap-4 mt-6"
          >
            <button
              onClick={() => setActiveTab("graphics")}
              className={`px-6 py-2 rounded-full font-semibold border transition duration-300 ${
                activeTab === "graphics"
                  ? "bg-[#CB4154] text-white border-[#CB4154] scale-105"
                  : "bg-white text-black border-gray-300 hover:scale-105"
              }`}
            >
              Graphics Design
            </button>
            <button
              onClick={() => setActiveTab("data")}
              className={`px-6 py-2 rounded-full font-semibold border transition duration-300 ${
                activeTab === "data"
                  ? "bg-[#CB4154] text-white border-[#CB4154] scale-105"
                  : "bg-white text-black border-gray-300 hover:scale-105"
              }`}
            >
              Data Entry
            </button>
          </motion.div>
        )}

        <div className="mt-8 min-h-[350px]">
          <AnimatePresence mode="wait">
            {activeTab === "graphics" && (
              <motion.div
                key="graphics"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5 }}
                className="bg-gray-100 p-6 rounded-xl shadow-md grid grid-cols-1 md:grid-cols-4 gap-6 text-left"
              >
                {/* Category List */}
                <div className="md:col-span-1">
                  <h4 className="text-lg font-bold mb-3 text-[#CB4154]">Graphics Categories</h4>
                  <ul className="space-y-2">
                    {graphicsCategories.map((cat, index) => (
                      <li
                        key={index}
                        onClick={() => setSelectedGraphicsCategory(cat)}
                        className={`cursor-pointer border-b pb-1 transition hover:text-[#CB4154] ${
                          selectedGraphicsCategory === cat ? "text-[#CB4154] font-semibold" : "text-gray-700"
                        }`}
                      >
                        {cat}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Gallery Display */}
                <div className="md:col-span-3">
  <h3 className="text-xl font-semibold mb-3 text-[#CB4154]">
    {selectedGraphicsCategory} Work
  </h3>

  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
    {displayedImages.map((img, idx) => (
      <div key={idx} className="overflow-hidden rounded-lg shadow-md">
        <img
          src={img.src}
          alt={`Gallery ${idx + 1}`}
          className="w-full h-40 object-cover transition-transform duration-300 hover:scale-110"
        />
      </div>
    ))}
    {displayedImages.length === 0 && (
      <p className="col-span-full text-gray-600">No images in this category yet.</p>
    )}
  </div>

  {/* Show More Button */}
  {visibleImageCount < filteredImages.length && (
    <div className="mt-6 text-center">
      <button
        onClick={() => setVisibleImageCount((prev) => prev + 8)}
        className="px-6 py-2 bg-[#CB4154] text-white font-semibold rounded-full shadow hover:bg-[#a33645] transition"
      >
        Show More
      </button>
    </div>
  )}
</div>
              </motion.div>
            )}

            {activeTab === "data" && (
              <motion.div
                key="data"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5 }}
                className="bg-gray-100 p-6 rounded-xl shadow-md text-left"
              >
                <h3 className="text-xl font-semibold mb-3 text-[#CB4154]">Data Entry Work</h3>
                <p className="text-gray-700 mb-4">
                  Sample data entry tasks including spreadsheets, client databases and more.
                </p>
                <table className="w-full border border-gray-300 text-sm">
                  <thead>
                    <tr className="bg-[#CB4154] text-white">
                      <th className="border p-2">ID</th>
                      <th className="border p-2">Name</th>
                      <th className="border p-2">Email</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border p-2">1</td>
                      <td className="border p-2">Alice Johnson</td>
                      <td className="border p-2">alice@example.com</td>
                    </tr>
                    <tr>
                      <td className="border p-2">2</td>
                      <td className="border p-2">David Smith</td>
                      <td className="border p-2">david@example.com</td>
                    </tr>
                  </tbody>
                </table>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Work;
