import React from "react";

const Experience = () => {
  return (
    <div className="  p-2 mb-24">
      <div className="container mx-auto px-4">
        <div className="w-full bg-[#940000] h-auto">
          <div className="flex flex-col sm:flex-row sm:justify-between">
            {/* Image First on small screens */}
            <div className="w-full sm:w-[45%] order-1 sm:order-2">
              <img
                src="https://img1.wsimg.com/isteam/stock/6QqQeq5/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1534,m"
                alt="Experience"
                className="w-full h-auto sm:h-3/4 object-cover"
              />
            </div>

            {/* Text Content */}
            <div className="w-full sm:w-[50%] pt-6 sm:pt-16 pl-4 sm:pl-8 order-2 sm:order-1 pr-4">
              <div className="mb-4">
                <h2 className="text-3xl font-bold text-[#FFD700]">
                  Experience
                </h2>
                <p className="mt-4 text-justify text-white text-lg ">
                  Since 2015, I’ve been on a creative journey that has allowed
                  me to transform visions into visual identities. With a
                  deep-rooted passion for design and a sharp eye for aesthetics,
                  I’ve specialized in crafting compelling logos that blend
                  storytelling, style, and strategy — all tailored to resonate
                  with modern brands.
                </p>
              </div>

              <div className="mb-4">
                <h2 className="text-3xl font-bold text-[#FFD700]">
                  Why Partner With Me
                </h2>
                <p className="text-justify text-lg mt-4 text-white">
                  Since 2015, I’ve been on a creative journey that has allowed
                  me to transform visions into visual identities. With a
                  deep-rooted passion for design and a sharp eye for aesthetics,
                  I’ve specialized in crafting compelling logos that blend
                  storytelling, style, and strategy — all tailored to resonate
                  with modern brands.
                </p>
              </div>

              <div className="mb-4">
                <h2 className="text-3xl font-bold text-[#FFD700]">
                  Fiverr and Freelancer
                </h2>
                <p className="text-justify text-lg mt-4 text-white">
                  Having worked with hundreds of clients on platforms like
                  Fiverr and Freelancer, I’ve had the privilege of collaborating
                  with entrepreneurs, influencers, and businesses from all over
                  the world. Each project brings a new story, and my goal is
                  always the same: to create a memorable, timeless, and
                  meaningful logo that becomes the face of a brand.
                </p>
              </div>

              <div className="mb-4">
                <h2 className="text-3xl font-bold text-[#FFD700]">
                  Monogram logo design
                </h2>
                <p className="text-justify text-lg mt-4 text-white">
                  My specialty lies in monogram logo design, where I explore the
                  power of typography and symbolism to create designs that are
                  both distinctive and versatile. Whether it’s a luxurious
                  lettermark for a beauty brand or a sharp urban-style monogram
                  for a streetwear startup — I bring precision, creativity, and
                  clarity to every design I deliver.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-3xl font-bold text-[#FFD700] mb-4">
                  What Sets My Work Apart?
                </h2>
                <ul className="list-disc list-inside space-y-4 text-white text-lg text-justify">
                  <li>
                    <span className="font-bold text-[#FFD700]">
                      Deep Industry Focus:
                    </span>{" "}
                    Fashion. Luxury. Urban. Beauty. These aren't just words to
                    me — they’re industries I understand inside out. Every logo
                    is informed by market trends, cultural cues, and aesthetic
                    precision.
                  </li>
                  <li>
                    <span className="font-bold text-[#FFD700]">
                      Detail-Driven Design:
                    </span>{" "}
                    I believe a logo is more than just a symbol. It's an
                    identity. My work is detail-rich, balanced, and purposefully
                    designed for both digital and print use.
                  </li>
                  <li>
                    <span className="font-bold text-[#FFD700]">
                      Client-Centric Process:
                    </span>{" "}
                    From mood boards to final delivery, I maintain transparent
                    and collaborative communication. My clients aren't just
                    customers — they’re creative partners.
                  </li>
                  <li>
                    <span className="font-bold text-[#FFD700]">
                      Global Reach, Personalized Touch:
                    </span>{" "}
                    Working with clients across continents has helped me develop
                    a versatile design style. But no matter where you're from, I
                    provide a tailored experience that puts your brand first.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
