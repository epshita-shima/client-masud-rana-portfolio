import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Client = () => {
  const clientImages = [
    "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
    "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
    "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
    "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
    "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
    "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
    "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
    "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
    "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
  ];

  // Slick carousel settings
  const settings = {
    infinite: true, // Infinite scrolling
    speed: 500, // Transition speed
    slidesToShow: 5, // Number of slides visible at once
    slidesToScroll: 1, // Slides moved per scroll
    autoplay: true, // Auto-play slides
    autoplaySpeed: 2000, // Delay between transitions
    arrows: false, // Hides next/prev arrows
    dots: false, // Hides navigation dots
    responsive: [
      {
        breakpoint: 1024, // Large screens
        settings: { slidesToShow: 4 },
      },
      {
        breakpoint: 768, // Tablets
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 640, // Mobile
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint:576 , // Mobile
        settings: { slidesToShow: 2 },
      },
    ],
  };

  return (
    <section className="container mx-auto py-10">
      {/* Title */}
      <h2 className="text-4xl font-bold text-center text-black mb-8 tracking-wide">
        My Clients
      </h2>

      {/* Clients Carousel */}
      <div className="max-w-5xl mx-auto">
        <Slider {...settings}>
          {clientImages.map((img, index) => (
            <div key={index} className="flex justify-center">
              <div className="w-36 h-36">
                <img src={img} alt={`Client ${index + 1}`} className="rounded-full shadow-lg" />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Client;
