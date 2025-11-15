import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import Profile from "../../assets/image/profile_pic/Masud_Rana.jpg";

const Article = () => {
  const articleData = {
    title: "Designing With Purpose: Creating Meaningful Visual Experiences",
    description: "Discover how purposeful design transforms brands and creates lasting impressions. Learn from professional graphic designer Masud Rana with 9+ years of experience.",
    excerpt: "As a graphics designer, it's not just about making things pretty—it's about communicating visually and creating meaningful experiences that resonate with audiences.",
    author: "Masud Rana",
    publishDate: "2025-05-20",
    readTime: "4 min read",
    category: "Graphic Design",
    tags: ["branding", "graphicdesign", "visualhierarchy", "logodesign"],
    coverImage: "https://i.pinimg.com/originals/ac/dc/67/acdc67a70b2ad423d9601d8adf6144b5.jpg",
    contentImages: [
      "https://img.freepik.com/free-vector/abstract-geometric-business-cover-collection_23-2148875712.jpg"
    ]
  };

  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>{articleData.title} | Masud Rana - Graphic Designer</title>
        <meta name="description" content={articleData.description} />
        <meta name="keywords" content={articleData.tags.join(', ')} />
        
        {/* Open Graph */}
        <meta property="og:title" content={articleData.title} />
        <meta property="og:description" content={articleData.description} />
        <meta property="og:image" content={articleData.coverImage} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={window.location.href} />
        <meta property="article:author" content={articleData.author} />
        <meta property="article:published_time" content={articleData.publishDate} />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={articleData.title} />
        <meta name="twitter:description" content={articleData.description} />
        <meta name="twitter:image" content={articleData.coverImage} />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": articleData.title,
            "description": articleData.description,
            "image": articleData.coverImage,
            "author": {
              "@type": "Person",
              "name": articleData.author,
              "jobTitle": "Professional Graphic Designer"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Masud Rana Design Studio",
              "logo": {
                "@type": "ImageObject",
                "url": "https://masudrana.com/logo.png"
              }
            },
            "datePublished": articleData.publishDate,
            "articleSection": "Graphic Design",
            "keywords": articleData.tags
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gray-50 py-8">
        <motion.article 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden"
        >
          {/* Cover Image */}
          <div className="relative h-80 md:h-96 overflow-hidden">
            <img 
              src={articleData.coverImage} 
              alt={articleData.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="absolute bottom-6 left-6 right-6">
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="inline-block bg-[#940000] text-white px-4 py-2 rounded-full text-sm font-medium mb-4"
              >
                {articleData.category}
              </motion.span>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight"
              >
                {articleData.title}
              </motion.h1>
            </div>
          </div>

          {/* Article Meta */}
          <div className="px-6 md:px-8 py-6 border-b border-gray-200">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex items-center gap-4">
                <img 
                  src={Profile} 
                  alt={articleData.author}
                  className="w-12 h-12 rounded-full border-2 border-[#940000]"
                />
                <div>
                  <p className="font-semibold text-gray-800">{articleData.author}</p>
                  <p className="text-sm text-gray-600">Professional Graphic Designer</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-sm text-gray-600">
                <span>{new Date(articleData.publishDate).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</span>
                <span>•</span>
                <span>{articleData.readTime}</span>
              </div>
            </div>
          </div>

          {/* Article Content */}
          <div className="px-6 md:px-8 py-8">
            <div className="prose prose-lg max-w-none">
              {/* Introduction */}
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-xl text-gray-700 leading-relaxed mb-6 font-medium"
              >
                {articleData.excerpt}
              </motion.p>

              {/* Main Content Sections */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mb-8"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Why Visual Hierarchy Matters in Design</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Visual hierarchy is the cornerstone of effective design. It's not just about arranging elements 
                  aesthetically; it's about guiding the viewer's eye through a deliberate journey that communicates 
                  your message with clarity and impact.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  In my 9+ years as a professional graphic designer, I've learned that great design tells a story. 
                  Each element—from typography choices to color schemes—plays a specific role in that narrative. 
                  When I approach a new project, whether it's a logo design or a complete brand identity, I always 
                  start by asking: "What story are we trying to tell, and how can visual hierarchy help tell it better?"
                </p>
              </motion.section>

              {/* Image Section */}
              <motion.figure
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 }}
                className="my-8"
              >
                <img 
                  src={articleData.contentImages[0]} 
                  alt="Design process and visual hierarchy examples"
                  className="w-full rounded-xl shadow-md"
                />
                <figcaption className="text-center text-sm text-gray-600 mt-2">
                  Example of strategic design implementation showing proper visual hierarchy
                </figcaption>
              </motion.figure>

              {/* Design Principles Section */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="mb-8"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Key Design Principles I Live By</h2>
                
                <div className="grid md:grid-cols-2 gap-6 my-6">
                  {[
                    {
                      title: "Purpose-Driven Design",
                      description: "Every design element must serve a clear purpose. No element should be included just for decoration."
                    },
                    {
                      title: "Strategic Typography",
                      description: "Font choices should reflect brand personality while ensuring optimal readability and hierarchy."
                    },
                    {
                      title: "Intentional Color Usage",
                      description: "Colors should evoke specific emotions and guide user attention strategically."
                    },
                    {
                      title: "Consistent Brand Voice",
                      description: "Maintaining consistency across all touchpoints builds trust and recognition."
                    }
                  ].map((principle, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.9 + index * 0.1 }}
                      className="bg-gray-50 p-4 rounded-lg border-l-4 border-[#940000]"
                    >
                      <h3 className="font-semibold text-gray-800 mb-2">{principle.title}</h3>
                      <p className="text-gray-600 text-sm">{principle.description}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.section>

              {/* Conclusion */}
              <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="bg-gradient-to-r from-[#940000] to-[#7a0000] text-white p-6 rounded-xl my-8"
              >
                <h2 className="text-2xl font-bold mb-4">Final Thoughts</h2>
                <p className="leading-relaxed">
                  Design is more than visual aesthetics—it's a powerful communication tool that, when used with purpose, 
                  can transform how people perceive and interact with your brand. As designers, we have the responsibility 
                  to create work that not only looks good but also serves a meaningful purpose and creates lasting impact.
                </p>
              </motion.section>
            </div>

            {/* Tags */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3 }}
              className="flex flex-wrap gap-2 mt-8 pt-6 border-t border-gray-200"
            >
              {articleData.tags.map((tag, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-[#940000] hover:text-white transition-colors cursor-pointer"
                >
                  #{tag}
                </span>
              ))}
            </motion.div>

            {/* Social Share */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4 }}
              className="flex gap-4 mt-6"
            >
              <button className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                <span>🐦</span>
                Share on Twitter
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors">
                <span>💼</span>
                Share on LinkedIn
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors">
                <span>📋</span>
                Copy Link
              </button>
            </motion.div>
          </div>

          {/* Author Bio */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
            className="px-6 md:px-8 py-8 bg-gray-50 border-t border-gray-200"
          >
            <div className="flex items-start gap-6">
              <img 
                src={Profile} 
                alt={articleData.author}
                className="w-20 h-20 rounded-full border-4 border-white shadow-lg"
              />
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">About {articleData.author}</h3>
                <p className="text-gray-600 mb-3">
                  Professional Graphic Designer with 9+ years of experience specializing in logo design, 
                  brand identity, and visual storytelling. Passionate about creating designs that not only 
                  look beautiful but also serve strategic business purposes.
                </p>
                <div className="flex gap-3">
                  <button className="text-[#940000] font-semibold hover:text-[#7a0000] transition-colors">
                    View Portfolio
                  </button>
                  <button className="text-[#940000] font-semibold hover:text-[#7a0000] transition-colors">
                    Contact Me
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.article>
      </div>
    </>
  );
};

export default Article;