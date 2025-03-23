import React from 'react'

const Experience = () => {
    return (
        <div className="bg-white  p-2 mb-24">
        <div className="container mx-auto px-4">
          <div className='w-full bg-[#CB4154] h-auto'>
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
                <h2 className="text-3xl text-white">Experience</h2>
                <p className="mt-4 text-justify text-white text-lg text-">
                Drawing from over 25 years of industry experience, I bring deep expertise in international business growth, strategic investment, and leadership development. As the founder of Inspirational Solutions and UK Ambassador for Tech Nordic Advocates, I combine my legal background with hands-on business experience to help organisations scale globally while developing strong leadership foundations.
                </p>
              </div>
      
              <div className="mb-4">
                <h2 className="text-3xl text-white">Why Partner With Me</h2>
                <p className="text-justify text-lg mt-4 text-white">
                My advisory practice spans the complete business lifecycle - from ambitious startups to established global corporations. I combine strategic insight with practical implementation to deliver lasting results in three key areas:
                </p>
              </div>
      
              <div className="mb-4">
                <h2 className="text-3xl text-white">Global Growth</h2>
                <p className="text-justify text-lg mt-4 text-white">
                I guide businesses through international expansion and scaling, leveraging my experience of building and advising companies across multiple markets. My hands-on experience includes everything from startup exits to advising global corporations, with a particular focus on identifying and capitalizing on cross-border opportunities.
                </p>
              </div>
      
              <div className="mb-4">
                <h2 className="text-3xl text-white">Investment Advisory</h2>
                <p className="text-justify text-lg mt-4 text-white">
                As an active angel investor and strategic advisor, I help businesses optimise their investment readiness and enhance their growth potential. I work with companies to develop compelling investment propositions, secure the right funding partnerships, and create sustainable growth strategies.
                </p>
              </div>
      
              <div className="mb-8 ">
                <h2 className="text-3xl text-white">Strategic Leadership</h2>
                <p className="mt-4 text-lg text-justify text-white">
                I partner with leaders, teams, and boards to develop the capabilities needed for global success. My approach focuses on building inspirational leadership that drives growth and innovation while creating lasting positive impact throughout organisations.
                </p>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
      
      
    )
}

export default Experience