import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import logo1 from '../assets/image/logo_design/aesthetic_stitch.jpg'
import logo2 from '../assets/image/logo_design/aurelian_spa.jpg'
import logo3 from '../assets/image/logo_design/grey_vouge.jpg'
import logo4 from '../assets/image/logo_design/lady_j.jpg'
import logo5 from '../assets/image/logo_design/mauvefin.jpg'
import logo6 from '../assets/image/logo_design/olive_june.jpg'
import logo7 from '../assets/image/logo_design/skydusk.jpg'
import logo8 from '../assets/image/logo_design/strivex.jpg'
import logo9 from '../assets/image/logo_design/time_machine.jpg'
const Work = () => {
  // const [showWorkTabs, setShowWorkTabs] = useState(false);
  // const [activeTab, setActiveTab] = useState("");
  const [selectedGraphicsCategory, setSelectedGraphicsCategory] = useState("All");

  const graphicsCategories = ["All", "Logo Design", "Banner Design", "Poster Design", "Social Media Design", "Flyers & Brochures", "Business Card"];

  // // Sample categorized gallery images
  const graphicsGallery = [
    { src: `${logo1}`, category: "Logo Design" },
    { src: `${logo2}`, category: "Logo Design" },
    { src: `${logo3}`, category: "Logo Design" },
    { src: `${logo4}`, category: "Logo Design" },
    { src: `${logo5}`, category: "Logo Design" },
    { src: `${logo6}`, category: "Logo Design" },
    { src: `${logo7}`, category: "Logo Design" },
    { src: `${logo8}`, category: "Logo Design" },
    { src: `${logo9}`, category: "Logo Design" },
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

  // // Reset visible count when category changes
  useEffect(() => {
    setVisibleImageCount(9);
  }, [selectedGraphicsCategory]);

  const filteredImages =
    selectedGraphicsCategory === "All"
      ? graphicsGallery
      : graphicsGallery.filter((img) => img.category === selectedGraphicsCategory);

  const displayedImages = filteredImages.slice(0, visibleImageCount);
  // return (
  //   <section className="bg-white py-8 px-4">
  //     <div className="container mx-auto text-center">
  //       {/* <h2 className="text-3xl font-bold text-[#940000] mb-6">My Work</h2> */}

  //       {!showWorkTabs && (
  //         <motion.button
  //           whileHover={{ scale: 1.05 }}
  //           whileTap={{ scale: 0.95 }}
  //           onClick={() => setShowWorkTabs(true)}
  //           className="bg-white text-black font-semibold px-6 py-3 h-[10dvh,120px]  transition w-full inset-1"
  //           style={
  //             {
  //               boxShadow: "12px 12px 12px rgba(0,0,0,0.1) inset, -10px -10px 10px #940000 inset"
  //             }
  //           }
  //         >
  //           Click here to see my work
  //         </motion.button>
  //       )}

  //       {showWorkTabs && (
  //         <motion.div
  //           initial={{ opacity: 0, y: 20 }}
  //           animate={{ opacity: 1, y: 0 }}
  //           className="flex flex-wrap justify-center gap-4 mt-6"
  //         >
  //           <button
  //             onClick={() => setActiveTab("graphics")}
  //             className={`px-6 py-2 rounded-full font-semibold border transition duration-300 ${activeTab === "graphics"
  //                 ? "bg-[#940000] text-white border-[#940000] scale-105"
  //                 : "bg-white text-black border-gray-300 hover:scale-105"
  //               }`}
  //           >
  //             Graphics Design
  //           </button>
  //           <button
  //             onClick={() => setActiveTab("data")}
  //             className={`px-6 py-2 rounded-full font-semibold border transition duration-300 ${activeTab === "data"
  //                 ? "bg-[#940000] text-white border-[#940000] scale-105"
  //                 : "bg-white text-black border-gray-300 hover:scale-105"
  //               }`}
  //           >
  //             Data Entry
  //           </button>
  //         </motion.div>
  //       )}

  //       <div className="mt-8 min-h-[350px]">
  //         <AnimatePresence mode="wait">
  //           {activeTab === "graphics" && (
  //             <motion.div
  //               key="graphics"
  //               initial={{ opacity: 0, y: 30 }}
  //               animate={{ opacity: 1, y: 0 }}
  //               exit={{ opacity: 0, y: -30 }}
  //               transition={{ duration: 0.5 }}
  //               className="bg-gray-100 p-6 rounded-xl shadow-md grid grid-cols-1 md:grid-cols-4 gap-6 text-left"
  //             >
  //               {/* Category List */}
  //               <div className="md:col-span-1">
  //                 <h4 className="text-lg font-bold mb-3 text-[#940000]">Graphics Categories</h4>
  //                 <ul className="space-y-2">
  //                   {graphicsCategories.map((cat, index) => (
  //                     <li
  //                       key={index}
  //                       onClick={() => setSelectedGraphicsCategory(cat)}
  //                       className={`cursor-pointer border-b pb-1 transition hover:text-[#940000] ${selectedGraphicsCategory === cat ? "text-[#940000] font-semibold" : "text-gray-700"
  //                         }`}
  //                     >
  //                       {cat}
  //                     </li>
  //                   ))}
  //                 </ul>
  //               </div>

  //               {/* Gallery Display */}
  //               <div className="md:col-span-3">
  //                 <h3 className="text-xl font-semibold mb-3 text-[#940000]">
  //                   {selectedGraphicsCategory} Work
  //                 </h3>

  //                 <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
  //                   {displayedImages.map((img, idx) => (
  //                     <div key={idx} className="overflow-hidden rounded-lg shadow-md">
  //                       <img
  //                         src={img.src}
  //                         alt={`Gallery ${idx + 1}`}
  //                         className="w-full h-40 object-cover transition-transform duration-300 hover:scale-110"
  //                       />
  //                     </div>
  //                   ))}
  //                   {displayedImages.length === 0 && (
  //                     <p className="col-span-full text-gray-600">No images in this category yet.</p>
  //                   )}
  //                 </div>

  //                 {/* Show More Button */}
  //                 {visibleImageCount < filteredImages.length && (
  //                   <div className="mt-6 text-center">
  //                     <button
  //                       onClick={() => setVisibleImageCount((prev) => prev + 8)}
  //                       className="px-6 py-2 bg-[#940000] text-white font-semibold rounded-full shadow hover:bg-[#a33645] transition"
  //                     >
  //                       Show More
  //                     </button>
  //                   </div>
  //                 )}
  //               </div>
  //             </motion.div>
  //           )}

  //           {activeTab === "data" && (
  //             <motion.div
  //               key="data"
  //               initial={{ opacity: 0, y: 30 }}
  //               animate={{ opacity: 1, y: 0 }}
  //               exit={{ opacity: 0, y: -30 }}
  //               transition={{ duration: 0.5 }}
  //               className="bg-gray-100 p-6 rounded-xl shadow-md text-left"
  //             >
  //               <h3 className="text-xl font-semibold mb-3 text-[#940000]">Data Entry Work</h3>
  //               <p className="text-gray-700 mb-4">
  //                 Sample data entry tasks including spreadsheets, client databases and more.
  //               </p>
  //               <table className="w-full border border-gray-300 text-sm">
  //                 <thead>
  //                   <tr className="bg-[#940000] text-white text-center">
  //                     <th className="border p-2">ID</th>
  //                     <th className="border p-2">Name</th>
  //                     <th className="border p-2">Email</th>
  //                   </tr>
  //                 </thead>
  //                 <tbody>
  //                   <tr className="text-black text-center">
  //                     <td className="border p-2">1</td>
  //                     <td className="border p-2">Alice Johnson</td>
  //                     <td className="border p-2">alice@example.com</td>
  //                   </tr>
  //                   <tr className="text-black text-center">
  //                     <td className="border p-2">2</td>
  //                     <td className="border p-2">David Smith</td>
  //                     <td className="border p-2">david@example.com</td>
  //                   </tr>
  //                 </tbody>
  //               </table>
  //             </motion.div>
  //           )}
  //         </AnimatePresence>
  //       </div>
  //     </div>
  //   </section>
  // );

  const [openMainModal, setOpenMainModal] = useState(false);
  const [openGraphicsModal, setOpenGraphicsModal] = useState(false);
  const [openDataEntryModal, setOpenDataEntryModal] = useState(false);

  return (
    <div className="flex items-center justify-center bg-gray-100 py-24 min-h-screen">
  <button
    className="px-6 py-3 bg-[#940000] text-white font-semibold rounded-full shadow hover:bg-[#a33645] transition"
    onClick={() => setOpenMainModal(true)}
  >
    Click here to see my work
  </button>

      {openMainModal && (
        <dialog id="mainModal" className="modal modal-open">
          <div className="modal-box">
            <h3 className="font-bold text-lg text-center mb-4">Select Work Category</h3>
            <div className="flex justify-around">
              <button
              className="px-6 py-2 bg-[#940000] text-white font-semibold rounded-full shadow hover:bg-[#a33645] transition"
                onClick={() => {
                  setOpenGraphicsModal(true);
                  setOpenMainModal(false);
                }}
              >
                Graphics Design
              </button>
              <button
                className="btn btn-secondary rounded-full"
                onClick={() => {
                  setOpenDataEntryModal(true);
                  setOpenMainModal(false);
                }}
              >
                Data Entry
              </button>
            </div>
            <div className="modal-action">
              <button className="btn" onClick={() => setOpenMainModal(false)}>
                Close
              </button>
            </div>
          </div>
        </dialog>
      )}

      {openGraphicsModal && (
        <dialog id="graphicsModal" className="modal modal-open">
          <div className="modal-box w-[80%] h-[90%] max-w-none relative p-6 overflow-y-auto">

            <button
              className="btn btn-sm btn-circle btn-ghost absolute right-6 top-6 text-xl z-10"
              onClick={() => setOpenGraphicsModal(false)}
            >
              ✕
            </button>

            <h3 className="text-2xl font-bold text-center text-[#940000] mb-4">Graphics Sample Work</h3>

            <motion.div
              key="graphics"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-100 p-6 rounded-xl shadow-md grid grid-cols-1 md:grid-cols-4 gap-6 text-left"
            >
              {/* Sidebar Categories */}
              <div className="md:col-span-1">
                <h4 className="text-lg font-bold mb-3 text-[#940000]">Graphics Categories</h4>
                <ul className="space-y-2">
                  {graphicsCategories.map((cat, index) => (
                    <li
                      key={index}
                      onClick={() => setSelectedGraphicsCategory(cat)}
                      className={`cursor-pointer border-b pb-1 transition hover:text-[#940000] ${selectedGraphicsCategory === cat ? "text-[#940000] font-semibold" : "text-gray-700"}`}
                    >
                      {cat}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Gallery Display */}
              <div className="md:col-span-3">
                <h3 className="text-xl font-semibold mb-3 text-[#940000]">
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
                      className="px-6 py-2 bg-[#940000] text-white font-semibold rounded-full shadow hover:bg-[#a33645] transition"
                    >
                      Show More
                    </button>
                  </div>
                )}
              </div>
            </motion.div>

            <div className="modal-action mt-6">
              <button
                className="btn"
                onClick={() => setOpenGraphicsModal(false)}
              >
                Close
              </button>
            </div>
          </div>
        </dialog>

      )}

      {/* Data Entry Modal */}
      {openDataEntryModal && (
        <dialog id="dataEntryModal" className="modal modal-open">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Data Entry Projects</h3>
            <p className="py-4">
              ✅ Excel Reports, ✅ CRM Input, ✅ Survey Forms Entry
            </p>
            <div className="modal-action">
              <button
                className="btn"
                onClick={() => setOpenDataEntryModal(false)}
              >
                Close
              </button>
            </div>
          </div>
        </dialog>
      )}
    </div>
  );
};

export default Work;
