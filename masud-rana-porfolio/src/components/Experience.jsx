
import React from "react";

const Experience = () => {
  return (
    <div className="mt-24">
      <div className="container mx-auto">
        <div className="w-full bg-[#940000] h-auto overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:justify-between">
            {/* Text Content - Now takes full width */}
            <div className="w-full pt-6 sm:pt-16 pl-4 sm:pl-8 pr-4">
              {/* Experience Section */}
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-white mb-4">
                  Experience
                </h2>
                <p className="text-justify text-white text-lg leading-relaxed">
                  Since 2020, I've been on a creative journey that has allowed
                  me to transform visions into visual identities. With a
                  deep-rooted passion for design and a sharp eye for aesthetics,
                  I've specialized in crafting compelling logos that blend
                  storytelling, style, and strategy — all tailored to resonate
                  with modern brands.
                </p>
              </div>

              {/* Why Partner With Me Section */}
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-white mb-4">
                  Why Partner With Me
                </h2>
                <p className="text-justify text-lg mt-4 text-white leading-relaxed">
                  With nearly a decade of experience, I bring not just technical 
                  expertise but also strategic thinking to every project. I 
                  understand that a great logo is more than just pretty graphics 
                  — it's the foundation of your brand's identity and the first 
                  impression you make on your audience.
                </p>
              </div>

              {/* Fiverr and Freelancer Section */}
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-white mb-4">
                  Fiverr and Freelancer
                </h2>
                <p className="text-justify text-lg mt-4 text-white leading-relaxed">
                  Having worked with hundreds of clients on platforms like
                  Fiverr and Freelancer, I've had the privilege of collaborating
                  with entrepreneurs, influencers, and businesses from all over
                  the world. Each project brings a new story, and my goal is
                  always the same: to create a memorable, timeless, and
                  meaningful logo that becomes the face of a brand.
                </p>
              </div>

              {/* Monogram Logo Design Section */}
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-white mb-4">
                  Monogram Logo Design
                </h2>
                <p className="text-justify text-lg mt-4 text-white leading-relaxed">
                  My specialty lies in monogram logo design, where I explore the
                  power of typography and symbolism to create designs that are
                  both distinctive and versatile. Whether it's a luxurious
                  lettermark for a beauty brand or a sharp urban-style monogram
                  for a streetwear startup — I bring precision, creativity, and
                  clarity to every design I deliver.
                </p>
              </div>

              {/* What Sets My Work Apart Section */}
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-white mb-6">
                  What Sets My Work Apart?
                </h2>
                <ul className="space-y-4 text-white text-lg text-justify">
                  {[
                    {
                      title: "Deep Industry Focus:",
                      description: "Fashion. Luxury. Urban. Beauty. These aren't just words to me — they're industries I understand inside out. Every logo is informed by market trends, cultural cues, and aesthetic precision."
                    },
                    {
                      title: "Detail-Driven Design:",
                      description: "I believe a logo is more than just a symbol. It's an identity. My work is detail-rich, balanced, and purposefully designed for both digital and print use."
                    },
                    {
                      title: "Client-Centric Process:",
                      description: "From mood boards to final delivery, I maintain transparent and collaborative communication. My clients aren't just customers — they're creative partners."
                    },
                    {
                      title: "Global Reach, Personalized Touch:",
                      description: "Working with clients across continents has helped me develop a versatile design style. But no matter where you're from, I provide a tailored experience that puts your brand first."
                    }
                  ].map((item, index) => (
                    <li 
                      key={index}
                      className="flex items-start gap-3 p-3 bg-white/10 rounded-lg backdrop-blur-sm"
                    >
                      <span className="text-white font-bold text-lg mt-1 flex-shrink-0">
                        ✓
                      </span>
                      <div>
                        <span className="font-bold text-white block mb-1">
                          {item.title}
                        </span>
                        <span className="text-white/90 leading-relaxed">
                          {item.description}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Stats Section */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {[
                  { number: "5+", label: "Years Experience" },
                  { number: "100+", label: "Projects" },
                  { number: "4+", label: "Countries" },
                  { number: "98%", label: "Satisfaction" }
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="text-center p-4 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20"
                  >
                    <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                      {stat.number}
                    </div>
                    <div className="text-white/80 text-sm font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;