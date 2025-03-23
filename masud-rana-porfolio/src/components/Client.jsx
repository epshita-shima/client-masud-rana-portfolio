import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Star } from "lucide-react";
import { motion } from "framer-motion";
import client1 from "../assets/image/client-1.jpg";
import client2 from "../assets/image/client-2.jpg";

const Client = () => {
  const clientFeedbacks = [
    {
      img: `${client1}`,
      country: "United Kingdom",
      rating: 4.8,
      feedback: "Exceptional service and attention to detail. Highly recommend! Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae deleniti rem atque facilis magnam adipisci autem non quasi ducimus quam ab unde, molestias culpa consequuntur debitis eligendi impedit minus totam.",
    },
    {
      img: `${client2}`,
      country: "United States",
      rating: 4.9,
      feedback: "A truly outstanding experience from start to finish! Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae deleniti rem atque facilis magnam adipisci autem non quasi ducimus quam ab unde, molestias culpa consequuntur debitis eligendi impedit minus totam.",
    },
    {
      img: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
      country: "Canada",
      rating: 4.7,
      feedback: "Professional and reliable. Would definitely work with them again. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae deleniti rem atque facilis magnam adipisci autem non quasi ducimus quam ab unde, molestias culpa consequuntur debitis eligendi impedit minus totam.",
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
    <section className="container mx-auto py-12 px-6 lg:max-w-7xl h-screen">
      {/* Title with Animation */}
      <motion.h2
        className="text-4xl font-bold text-center text-black mb-10 tracking-wide"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
       Client Experiences
      </motion.h2>

      {/* Clients Carousel */}
      <div className="max-w-4xl mx-auto">
        <Slider {...settings}>
          {clientFeedbacks.map((client, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white rounded-lg shadow-xl text-center"
              // whileHover={{ scale: 1.05 }}
              // initial={{ opacity: 0, y: 30 }}
              // animate={{ opacity: 1, y: 0 }}
              // transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {/* Client Image */}
              <div className="flex justify-center">
                <img
                  src={client.img}
                  alt={`Client ${index + 1}`}
                  className="w-32 h-32 md:w-28 md:h-28 rounded-full shadow-md border-2 border-blue-200 transform transition duration-300 hover:scale-110"
                />
              </div>

              {/* Country Name */}
              <h3 className="text-xl text-black font-semibold mt-4">{client.country}</h3>

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
