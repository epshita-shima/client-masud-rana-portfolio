import { useState, useEffect } from "react";
import Profile from "../assets/image/profile_pic/masudrana_profile.jpg";
import Slider_1 from "../assets/image/profile_pic/slider_1.jpg";
import Slider_2 from "../assets/image/profile_pic/slider_2.jpg";

const Hero = () => {
  const backgroundImages = [Slider_1, Slider_2];
  const [currentBgIndex, setCurrentBgIndex] = useState(0);

  // Auto slide background
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 1000); // Increased to 8 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero h-screen w-full text-black mx-auto relative overflow-hidden">
      
      {/* Background Slider */}
      <div className="absolute inset-0 z-0 w-full">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat transition-opacity duration-800 ${
              index === currentBgIndex ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `url(${image})`
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
          </div>
        ))}
      </div>

      {/* Large Profile Image */}
      <div className="hidden md:block absolute right-8 lg:right-16 top-1/2 transform -translate-y-1/2 z-20">
        <img
          src={Profile}
          className="w-56 h-56 lg:w-64 lg:h-64 rounded-full border-4 border-[#940000] shadow-lg bg-white"
          alt="Masud Rana"
          loading="lazy"
        />
      </div>

      {/* Text Content */}
      <div className="relative z-10 flex items-center justify-center lg:justify-start h-full w-full px-4 lg:px-16">
        <div className="text-center lg:text-left space-y-4 w-full max-w-2xl lg:max-w-3xl lg:ml-8">
          {/* Hello Text */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Hello, I'm{" "}
            <span className="text-[#940000] bg-white/90 px-3 py-1 rounded-lg">
              Masud Rana
            </span>
          </h1>

          {/* Professional Title */}
          <div>
            <h2 className="text-xl md:text-2xl lg:text-3xl text-white font-semibold">
              Professional Graphic Designer
            </h2>
            <div className="w-24 h-1 bg-white rounded-full my-3 mx-auto lg:mx-0"></div>
          </div>

          {/* Description */}
          <p className="text-white text-lg leading-relaxed bg-black/30 rounded-xl p-4">
            I am a passionate and professional graphic designer specializing in logo design. 
            With a creative journey that began in <span className="text-[#940000] font-bold bg-white/90 px-2 py-1 rounded">2020</span>, 
            I've spent nearly a decade helping businesses and brands bring their identities 
            to life through clean, meaningful, and impactful visual design.
          </p>

          {/* Experience Badge */}
          <div className="flex justify-center lg:justify-start">
            <div className="inline-flex items-center gap-3 bg-[#940000] text-white px-6 py-3 rounded-full shadow-lg">
              <span>🎨</span>
              <span className="font-semibold">5+ Years Experience</span>
            </div>
          </div>

          {/* Mobile Profile Image */}
          <div className="md:hidden flex justify-center mt-6">
            <img
              src={Profile}
              className="w-40 h-40 rounded-full border-4 border-[#940000] shadow-lg"
              alt="Masud Rana"
              loading="lazy"
            />
          </div>

          {/* Background Slider Indicators */}
          <div className="flex justify-center lg:justify-start gap-2 mt-6">
            {backgroundImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentBgIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentBgIndex 
                    ? 'bg-[#940000] scale-125' 
                    : 'bg-white/60 hover:bg-white/80'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="text-white/80 text-sm flex flex-col items-center gap-2">
          <span>Scroll Down</span>
          <svg 
            className="w-5 h-5" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3" 
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Hero;