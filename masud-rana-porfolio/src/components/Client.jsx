import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Star } from "lucide-react";
import { motion } from "framer-motion";
const Client = () => {
  const clientFeedbacks = [
    {
      img: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
      country: "United Kingdom",
      rating: 4.8,
      feedback: "Exceptional service and attention to detail. Highly recommend!",
    },
    {
      img: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
      country: "United States",
      rating: 4.9,
      feedback: "A truly outstanding experience from start to finish!",
    },
    {
      img: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
      country: "Canada",
      rating: 4.7,
      feedback: "Professional and reliable. Would definitely work with them again.",
    },
  ];

  // Slick carousel settings
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    dots: true,
  };

  return (
    <section className="container mx-auto py-12 px-6 lg:max-w-7xl">
      {/* Title with Animation */}
      <motion.h2
        className="text-4xl font-bold text-center text-black mb-10 tracking-wide"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        What My Clients Say
      </motion.h2>

      {/* Clients Carousel */}
      <div className="max-w-4xl mx-auto">
        <Slider {...settings}>
          {clientFeedbacks.map((client, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white rounded-lg shadow-xl text-center"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {/* Client Image */}
              <div className="flex justify-center">
                <img
                  src={client.img}
                  alt={`Client ${index + 1}`}
                  className="w-24 h-24 md:w-28 md:h-28 rounded-full shadow-md"
                />
              </div>

              {/* Country Name */}
              <h3 className="text-xl font-semibold mt-4">{client.country}</h3>

              {/* Ratings */}
              <div className="flex justify-center gap-1 mt-2 text-yellow-500">
                {Array.from({ length: Math.floor(client.rating) }, (_, i) => (
                  <Star key={i} fill="currentColor" size={20} />
                ))}
              </div>

              {/* Feedback */}
              <p className="text-gray-600 mt-4 text-lg">{client.feedback}</p>
            </motion.div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Client;
