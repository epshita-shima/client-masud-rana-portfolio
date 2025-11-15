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
      name: "Sarah Johnson",
      country: "United Kingdom",
      rating: 4.8,
      feedback:
        "Masud's logo design exceeded my expectations! He perfectly captured our brand identity and delivered multiple concepts to choose from. The attention to detail and professionalism was outstanding.",
      project: "Restaurant Brand Identity"
    },
    {
      img: client2,
      name: "Michael Chen",
      country: "United States",
      rating: 4.9,
      feedback:
        "Working with Masud was a game-changer for our startup. His creative approach to our logo design helped us stand out in a competitive market. Quick turnaround and excellent communication throughout!",
      project: "Tech Startup Logo"
    },
    {
      img: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
      name: "Emma Rodriguez",
      country: "Canada",
      rating: 4.7,
      feedback:
        "Professional, talented, and reliable. Masud transformed our vague ideas into a stunning visual identity. The logo he created perfectly represents our values and vision. Highly recommended!",
      project: "Fashion Brand Logo"
    },
    {
      img: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
      name: "David Wilson",
      country: "Australia",
      rating: 5.0,
      feedback:
        "Exceptional service from start to finish! Masud understood our brand instantly and delivered a logo that we absolutely love. The entire process was smooth and collaborative.",
      project: "Corporate Branding"
    }
  ];

  const settings = {
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    dots: true,
    fade: true,
    pauseOnHover: true,
  };

  // Star rating component
  const StarRating = ({ rating }) => {
    return (
      <div className="flex justify-center gap-1 mb-4">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            className={`w-5 h-5 ${
              star <= rating ? "text-yellow-400" : "text-gray-300"
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
        <span className="ml-2 text-sm text-gray-600 font-semibold">
          {rating}/5
        </span>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12">
      <div className="container mx-auto px-4">
        {/* Heading Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
          >
            Client <span className="text-[#940000]">Testimonials</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Discover what my clients say about their experience working with me on their branding projects
          </motion.p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 max-w-4xl mx-auto"
        >
          {[
            { number: "50+", label: "Projects Completed" },
            { number: "45+", label: "Happy Clients" },
            { number: "4.8", label: "Average Rating" },
            { number: "9+", label: "Years Experience" }
          ].map((stat, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
              <div className="text-3xl font-bold text-[#940000] mb-2">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Slider Section */}
        <div className="max-w-6xl mx-auto">
          <Slider {...settings}>
            {clientFeedbacks.map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="px-4"
              >
                <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100 transform hover:scale-[1.02] transition-transform duration-300">
                  {/* Client Info */}
                  <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
                    <div className="relative">
                      <img
                        src={client.img}
                        alt={client.name}
                        className="w-24 h-24 rounded-full shadow-xl border-4 border-white object-cover"
                      />
                      <div className="absolute -bottom-2 -right-2 bg-[#940000] text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    <div className="text-center md:text-left">
                      <h3 className="text-2xl font-bold text-gray-800">{client.name}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-600">{client.country}</span>
                      </div>
                      <div className="mt-2">
                        <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                          {client.project}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Rating */}
                  <StarRating rating={client.rating} />

                  {/* Feedback */}
                  <div className="relative">
                    <svg
                      className="absolute -top-6 -left-2 w-8 h-8 text-gray-200 opacity-50"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                    <p className="text-lg text-gray-700 leading-relaxed text-center md:text-left italic pl-8">
                      "{client.feedback}"
                    </p>
                    <svg
                      className="absolute -bottom-6 -right-2 w-8 h-8 text-gray-200 opacity-50 rotate-180"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </Slider>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-[#940000] to-[#7a0000] rounded-2xl p-8 md:p-12 text-white shadow-2xl max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Transform Your Brand?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Join dozens of satisfied clients who have elevated their brand with professional design
            </p>
            <motion.button
              className="bg-white text-[#940000] px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Project Today
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Client;