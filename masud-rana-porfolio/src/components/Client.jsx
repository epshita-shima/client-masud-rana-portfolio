import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import client1 from "../assets/image/client-1.jpg";
import client2 from "../assets/image/client-2.jpg";

const Client = () => {
  const clientFeedbacks = [
    {
      img: client1,
      country: "United Kingdom",
      rating: 4.8,
      feedback:
        "Exceptional service and attention to detail. Highly recommend! Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae deleniti rem atque facilis magnam adipisci autem non quasi ducimus quam ab unde, molestias culpa consequuntur debitis eligendi impedit minus totam.",
    },
    {
      img: client2,
      country: "United States",
      rating: 4.9,
      feedback:
        "A truly outstanding experience from start to finish! Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae deleniti rem atque facilis magnam adipisci autem non quasi ducimus quam ab unde, molestias culpa consequuntur debitis eligendi impedit minus totam.",
    },
    {
      img: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
      country: "Canada",
      rating: 4.7,
      feedback:
        "Professional and reliable. Would definitely work with them again. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae deleniti rem atque facilis magnam adipisci autem non quasi ducimus quam ab unde, molestias culpa consequuntur debitis eligendi impedit minus totam.",
    },
  ];

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    dots: true,
  };

  return (
    <div className="py-24 px-4 mb-24">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center text-[#2C2C2C] mb-10"
        >
          Client Experiences
        </motion.h2>

        {/* Slider */}
        <div className="max-w-7xl mx-auto">
          <Slider {...settings}>
            {clientFeedbacks.map((client, index) => (
              <div
                key={index}
                className="p-6 bg-[#f9f9f9] rounded-xl shadow-md text-center"
              >
                <div className="flex justify-center">
                  <img
                    src={client.img}
                    alt={`Client ${index + 1}`}
                    className="w-32 h-32 md:w-36 md:h-36 rounded-full shadow-lg border-2 border-[#FFD700] object-cover"
                  />
                </div>
                <h3 className="text-xl text-black font-semibold mt-4">
                  {client.country}
                </h3>
                <p className="text-gray-700 mt-3 text-lg">{client.feedback}</p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Client;
