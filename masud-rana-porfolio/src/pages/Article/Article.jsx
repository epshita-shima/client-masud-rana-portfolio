import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom'; // useNavigate যোগ করুন
import Profile from "../../assets/image/profile_pic/Masud_Rana.jpg";
import logoImage from "../../assets/image/logo_design/watermark_icon.jpg"; // লোগো ইমেজ ইম্পোর্ট করুন

const Article = () => {
  const navigate = useNavigate(); // useNavigate হুক ব্যবহার করুন

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

  // Logo click handler - Home এ navigate করে
  const handleLogoClick = () => {
    navigate("/");
  };

  // Social share functions
  const shareOnTwitter = () => {
    const text = `Check out this amazing article: "${articleData.title}" by ${articleData.author}`;
    const url = window.location.href;
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
  };

  const shareOnLinkedIn = () => {
    const url = window.location.href;
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank');
  };

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    alert('Link copied to clipboard!');
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

      <div className="min-h-screen bg-gray-50 py-8 relative">
        {/* Bottom Fixed Logo Button */}
        <motion.button
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          onClick={handleLogoClick}
          className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#940000] rounded-full shadow-2xl border-2 border-white flex items-center justify-center hover:shadow-xl transition-all duration-300 group"
          whileHover={{ scale: 1.1, backgroundColor: "#7a0000" }}
          whileTap={{ scale: 0.9 }}
        >
          {/* লোগো ইমেজ */}
          <div className="text-white font-bold text-lg">
            <img src={logoImage} alt="Logo" className="w-8 h-8 rounded-full" />
          </div>

          {/* Tooltip */}
          <div className="absolute right-16 bottom-1/2 transform translate-y-1/2 bg-black text-white text-xs px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-lg">
            ← Back to Home
          </div>

          {/* Pulse Animation */}
          <div className="absolute inset-0 rounded-full bg-[#940000] animate-ping opacity-20"></div>
        </motion.button>

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
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6">
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="inline-block bg-[#940000] text-white px-4 py-2 rounded-full text-sm font-medium mb-4 shadow-lg"
              >
                {articleData.category}
              </motion.span>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight drop-shadow-lg"
              >
                {articleData.title}
              </motion.h1>
            </div>
          </div>

          {/* Article Meta */}
          <div className="px-6 md:px-8 py-6 border-b border-gray-200 bg-white/95 backdrop-blur-sm">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex items-center gap-4">
                <img 
                  src={Profile} 
                  alt={articleData.author}
                  className="w-12 h-12 rounded-full border-2 border-[#940000] shadow-md"
                />
                <div>
                  <p className="font-semibold text-gray-800">{articleData.author}</p>
                  <p className="text-sm text-gray-600">Professional Graphic Designer • 9+ Years Experience</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-sm text-gray-600">
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {new Date(articleData.publishDate).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {articleData.readTime}
                </span>
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
                className="text-xl text-gray-700 leading-relaxed mb-8 font-medium bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent"
              >
                {articleData.excerpt}
              </motion.p>

              {/* Main Content Sections */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mb-12"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                  <span className="w-3 h-3 bg-[#940000] rounded-full"></span>
                  Why Visual Hierarchy Matters in Design
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                  Visual hierarchy is the cornerstone of effective design. It's not just about arranging elements 
                  aesthetically; it's about guiding the viewer's eye through a deliberate journey that communicates 
                  your message with clarity and impact.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6 text-lg">
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
                className="my-12"
              >
                <img 
                  src={articleData.contentImages[0]} 
                  alt="Design process and visual hierarchy examples"
                  className="w-full rounded-2xl shadow-xl border border-gray-200"
                />
                <figcaption className="text-center text-sm text-gray-600 mt-4 italic">
                  Example of strategic design implementation showing proper visual hierarchy and brand consistency
                </figcaption>
              </motion.figure>

              {/* Design Principles Section */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="mb-12"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 flex items-center gap-2">
                  <span className="w-3 h-3 bg-[#940000] rounded-full"></span>
                  Key Design Principles I Live By
                </h2>
                
                <div className="grid md:grid-cols-2 gap-6 my-8">
                  {[
                    {
                      title: "Purpose-Driven Design",
                      description: "Every design element must serve a clear purpose. No element should be included just for decoration.",
                      icon: "🎯"
                    },
                    {
                      title: "Strategic Typography",
                      description: "Font choices should reflect brand personality while ensuring optimal readability and hierarchy.",
                      icon: "🔤"
                    },
                    {
                      title: "Intentional Color Usage",
                      description: "Colors should evoke specific emotions and guide user attention strategically.",
                      icon: "🎨"
                    },
                    {
                      title: "Consistent Brand Voice",
                      description: "Maintaining consistency across all touchpoints builds trust and recognition.",
                      icon: "🔄"
                    }
                  ].map((principle, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.9 + index * 0.1 }}
                      className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-2xl">{principle.icon}</span>
                        <h3 className="font-bold text-gray-800 text-lg">{principle.title}</h3>
                      </div>
                      <p className="text-gray-600">{principle.description}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.section>

              {/* Conclusion */}
              <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="bg-gradient-to-r from-[#940000] to-[#7a0000] text-white p-8 rounded-2xl my-12 shadow-xl"
              >
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <span className="text-2xl">💡</span>
                  Final Thoughts
                </h2>
                <p className="leading-relaxed text-lg">
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
              className="flex flex-wrap gap-3 mt-8 pt-8 border-t border-gray-200"
            >
              <span className="text-gray-600 font-medium">Tags:</span>
              {articleData.tags.map((tag, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-[#940000] hover:text-white transition-all duration-300 cursor-pointer transform hover:scale-105"
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
              className="flex flex-wrap gap-3 mt-8 pt-6 border-t border-gray-200"
            >
              <span className="text-gray-600 font-medium mr-2">Share this article:</span>
              <button 
                onClick={shareOnTwitter}
                className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-300 transform hover:scale-105"
              >
                <span className="text-lg">🐦</span>
                Twitter
              </button>
              <button 
                onClick={shareOnLinkedIn}
                className="flex items-center gap-2 px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-all duration-300 transform hover:scale-105"
              >
                <span className="text-lg">💼</span>
                LinkedIn
              </button>
              <button 
                onClick={copyLink}
                className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-all duration-300 transform hover:scale-105"
              >
                <span className="text-lg">📋</span>
                Copy Link
              </button>
            </motion.div>
          </div>

          {/* Author Bio */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
            className="px-6 md:px-8 py-8 bg-gradient-to-br from-gray-50 to-white border-t border-gray-200"
          >
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="flex-shrink-0">
                <img 
                  src={Profile} 
                  alt={articleData.author}
                  className="w-24 h-24 rounded-full border-4 border-white shadow-xl"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">About {articleData.author}</h3>
                <p className="text-gray-600 mb-4 text-lg leading-relaxed">
                  Professional Graphic Designer with 9+ years of experience specializing in logo design, 
                  brand identity, and visual storytelling. Passionate about creating designs that not only 
                  look beautiful but also serve strategic business purposes and drive measurable results.
                </p>
                <div className="flex gap-4">
                  <button className="bg-[#940000] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#7a0000] transition-all duration-300 transform hover:scale-105">
                    View Portfolio
                  </button>
                  <button className="border-2 border-[#940000] text-[#940000] px-6 py-2 rounded-lg font-semibold hover:bg-[#940000] hover:text-white transition-all duration-300 transform hover:scale-105">
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