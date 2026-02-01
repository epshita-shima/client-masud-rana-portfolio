import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import logoImage from "../assets/image/logo_design/watermark_icon.jpg";
import blog1 from "../assets/image/profile_pic/blog_1.jpg";
import blog2 from "../assets/image/profile_pic/Creative Clothing Brand Logo Ideas, Professional Fashion Logo Design.jpg";
import nameIcon from "../assets/image/logo_design/watermark_icon.jpg"
const BlogDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    // ব্লগ ডেটা (আপনার মূল কোড থেকে কপি করা)
    const blogData = [
      {
        id: 1,
        title: "Complete Guide to Logo Design: Principles, Process & Professional Tips",
        author: "Masud Rana",
        date: "2025-04-05",
        category: "Logo Design",
        excerpt: "Learn everything about logo design—from principles and types of logos to the complete design process. A detailed guide for building a strong brand identity.",
        thumbnail: blog1,
        content: `
        <div class="prose max-w-none">
          <h2>What Is Logo Design? (Definition & Meaning for Branding)</h2>
          <p>Logo design is the process of creating a unique symbol, wordmark, or combination mark that represents a brand's identity, values, and personality. A well-designed logo communicates who you are, what you do, and how you want to be perceived—often in just a single glance.</p>
          
          <h2>Why Logo Design Is So Important for Your Brand</h2>
          <p>A professional logo is a foundational element of branding. Here's why logo design matters:</p>
          <ul>
            <li><strong>Creates a Strong First Impression:</strong> Your logo is often the first thing people notice about your brand.</li>
            <li><strong>Builds Brand Recognition:</strong> Consistent use helps customers recognize and remember your brand.</li>
            <li><strong>Communicates Brand Values:</strong> Colors, shapes, and typography convey emotions and messages.</li>
            <li><strong>Sets You Apart from Competitors:</strong> A distinctive logo helps your brand stand out.</li>
          </ul>
          
          <h2>Core Principles of Effective Logo Design</h2>
          <ul>
            <li><strong>Simplicity:</strong> Simple logos are easier to recognize and more versatile.</li>
            <li><strong>Memorability:</strong> A strong logo leaves a lasting impression.</li>
            <li><strong>Versatility:</strong> Should look great on everything—from business cards to billboards.</li>
            <li><strong>Relevance:</strong> Design should match your industry and audience.</li>
            <li><strong>Timelessness:</strong> Should remain effective for years with minimal updates.</li>
          </ul>
          
          <h2>Types of Logos</h2>
          <ul>
            <li><strong>Wordmark Logos:</strong> Text alone (e.g., Google, Coca-Cola)</li>
            <li><strong>Lettermark Logos:</strong> Initial-based (e.g., IBM, HBO)</li>
            <li><strong>Icon or Symbol Logos:</strong> Graphic symbols (e.g., Apple, Twitter)</li>
            <li><strong>Combination Marks:</strong> Text and symbol (e.g., Adidas, Burger King)</li>
            <li><strong>Emblem Logos:</strong> Text inside a symbol (e.g., Starbucks)</li>
          </ul>
          
          <h2>The Logo Design Process Step by Step</h2>
          <ol>
            <li>Brand Research</li>
            <li>Concept Development</li>
            <li>Color Selection</li>
            <li>Typography Choice</li>
            <li>Digital Design & Refinement</li>
            <li>Feedback & Revisions</li>
            <li>Final Delivery</li>
          </ol>
          
          <h2>Common Mistakes to Avoid</h2>
          <ul>
            <li>Using too many colors or fonts</li>
            <li>Copying competitors' designs</li>
            <li>Designing without research</li>
            <li>Following trends blindly</li>
            <li>Ignoring scalability and readability</li>
          </ul>
          
          <h2>Modern Logo Design Trends</h2>
          <ul>
            <li>Minimalist and flat designs</li>
            <li>Responsive and adaptive logos</li>
            <li>Hand-drawn or custom typography</li>
            <li>Negative space usage</li>
            <li>Monochrome and neutral palettes</li>
          </ul>
          
          <h2>Logo Design and Brand Identity</h2>
          <p>A logo is not the brand itself, but it is a crucial part of brand identity. A strong logo works in harmony with brand colors, typography, imagery, and tone of voice.</p>
          
          <h2>Frequently Asked Questions (FAQ)</h2>
          <div class="space-y-4">
            <div>
              <h3>What makes a logo design effective?</h3>
              <p>An effective logo design is simple, memorable, scalable, and relevant to the brand's values and target audience.</p>
            </div>
            <div>
              <h3>How much does professional logo design cost?</h3>
              <p>Logo design costs vary depending on experience, research, and revisions.</p>
            </div>
            <div>
              <h3>Why is logo design important for SEO and branding?</h3>
              <p>While logos don't directly impact SEO rankings, strong logo design improves brand recognition, trust, and user engagement.</p>
            </div>
          </div>
          
          <blockquote>
            A great logo doesn't just look good—it works hard for your brand, every single day.
          </blockquote>
        </div>
      `,
        readTime: "10 min read",
        tags: [
          { name: "Logo Design", slug: "logo-design", url: "/" },
          { name: "Professional Logo Design", slug: "professional-logo-design", url: "/" },
          { name: "Logo Design Process", slug: "logo-design-process", url: "/" },
          { name: "Types of Logos", slug: "types-of-logos", url: "/" },
          { name: "Brand Identity Design", slug: "brand-identity-design", url: "/" },
          { name: "Custom Logo Design", slug: "custom-logo-design", url: "/" },
          { name: "Logo Design Tips", slug: "logo-design-tips", url: "/" },
        ],
      },
      {
        id: 2,
        title: "Creative Clothing Brand Logo Ideas to Build a Strong Fashion Identity",
        author: "Masud Rana",
        date: "2025-04-10",
        category: "Logo Design",
        excerpt: "Discover creative clothing brand logo ideas and learn how professional fashion logo design helps build a strong and memorable brand identity.",
        thumbnail: blog2,
        content: `
          <div class="prose max-w-none">
            <h2>Creative Clothing Brand Logo Ideas to Build a Strong Fashion Identity</h2>
            <p>In today's competitive fashion industry, a <strong><a href="/>clothing brand logo</a></strong> plays a crucial role in brand recognition and customer trust. A strong <strong><a href="services">fashion logo design</a></strong> not only represents your brand visually but also communicates your style, values, and quality at first glance.</p>
            <p>If you're launching a new brand or rebranding an existing one, choosing the right <strong><a href="/">clothing brand logo ideas</a></strong> is essential for long-term success.</p>
            
            <h2>Popular Clothing Brand Logo Ideas & Styles</h2>
            <h3>1. Minimal Wordmark Logos</h3>
            <p>Minimal wordmark logos focus on typography and spacing, creating a clean and professional look. These <strong><a href="/work">clothing logo designs</a></strong> are timeless and versatile across tags, labels, and social media.</p>
            <p><strong>Best for:</strong> Luxury fashion brands, minimalist apparel labels</p>
            
            <h3>2. Monogram & Letter Logos</h3>
            <p>Monogram logos use initials or letters to create a strong <strong><a href="/">apparel brand logo</a></strong>. They work perfectly for embroidery, labels, and premium packaging.</p>
            <p><strong>Best for:</strong> High-end and personal fashion brands</p>
            
            <h3>3. Symbol-Based Logos</h3>
            <p>Symbol-based <strong><a href="/work>fashion logo ideas</a></strong> use icons to represent brand identity. Abstract or meaningful symbols help customers recognize your brand instantly.</p>
            <p><strong>Best for:</strong> Casual wear, lifestyle clothing brands</p>
            
            <h3>4. Signature or Handwritten Logos</h3>
            <p>Handwritten logos bring authenticity and creativity. These <strong>custom clothing logos</strong> add personality and emotional connection.</p>
            <p><strong>Best for:</strong> Boutique and creative clothing brands</p>
            
            <h3>5. Vintage & Badge Logos</h3>
            <p>Vintage badge logos highlight tradition and craftsmanship. This <strong>logo design for clothing brands</strong> style reflects heritage and durability.</p>
            <p><strong>Best for:</strong> Denim, classic, and heritage fashion labels</p>
            
            <h3>6. Bold Streetwear Logos</h3>
            <p><strong>Streetwear logo design</strong> uses strong typography and modern symbols to create impact and confidence.</p>
            <p><strong>Best for:</strong> Urban and youth-focused fashion brands</p>
            
            <h2>How to Choose the Right Clothing Brand Logo</h2>
            <ul>
              <li>Target audience</li>
              <li>Brand tone (luxury, streetwear, casual, minimal)</li>
              <li>Logo usability across clothing tags, labels, and online platforms</li>
              <li>Long-term branding goals</li>
            </ul>
            <p>A professional <strong><a href="services">clothing brand logo design</a></strong> ensures consistency and scalability across all platforms.</p>
            
            <h2>Why Professional Fashion Logo Design Matters</h2>
            <p>A professionally designed <strong><a href="services">clothing brand logo</a></strong> enhances brand credibility and visual appeal. It ensures originality, balance, and adaptability—essential qualities in the fashion industry.</p>
            <p>Investing in <strong><a href="/">professional logo design</a></strong> helps your clothing brand stand out, attract customers, and build long-term brand value.</p>
            
            <p>Your fashion brand logo is the foundation of your clothing brand's identity. Choosing the right logo idea—minimal, bold, symbolic, or vintage—can define how customers perceive your brand.</p>
            
            <blockquote>
              For a unique and impactful clothing logo, professional design is not an option—it's a necessity.
            </blockquote>
            
            <p>Looking for a unique identity? Explore our <a href="/" target="_self">professional logo design services</a> to create a strong and professional fashion brand.</p>
          </div>
        `,
        readTime: "8 min read",
        tags: [
          { name: "Clothing Brand Logo", slug: "clothing-brand-logo", url: "/" },
          { name: "Clothing Brand Logo Ideas", slug: "clothing-brand-logo-ideas", url: "services" },
          { name: "Fashion Logo Design", slug: "fashion-logo-design", url: "work" },
          { name: "Apparel Brand Logo", slug: "apparel-brand-logo", url: "/tags/apparel-brand-logo" },
          { name: "Fashion Brand Identity", slug: "fashion-brand-identity", url: "services" },
          { name: "Professional Logo Design", slug: "professional-logo-design", url: "/tags/professional-logo-design" },
          { name: "Get a Custom Clothing Brand Logo", slug: "get a custom clothing brand logo", url: "/" },
        ],
      },
    ];

    // URL থেকে id অনুযায়ী ব্লগ বাছাই করুন
    const selectedBlog = blogData.find(b => b.id.toString() === id);
    if (selectedBlog) {
      setBlog(selectedBlog);
    } else {
      navigate("/blog"); // ব্লগ না পাওয়া গেলে ব্লগ পেজে রিডাইরেক্ট করুন
    }
  }, [id, navigate]);

  const handleLogoClick = () => {
    navigate("/");
  };

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#940000] mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading blog post...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 relative">
      <style>
        {`
          .prose ul {
            list-style-type: disc;
            padding-left: 1.5rem;
            margin: 1rem 0;
          }
          
          .prose ol {
            list-style-type: decimal;
            padding-left: 1.5rem;
            margin: 1rem 0;
          }
          
          .prose li {
            margin-bottom: 0.5rem;
          }
          
          .prose h2 {
            font-size: 1.5rem;
            font-weight: 700;
            margin-top: 2rem;
            margin-bottom: 1rem;
            color: #111827;
          }
          
          .prose h3 {
            font-size: 1.25rem;
            font-weight: 600;
            margin-top: 1.5rem;
            margin-bottom: 0.75rem;
            color: #111827;
          }
          
          .prose blockquote {
            border-left: 4px solid #940000;
            padding-left: 1rem;
            font-style: italic;
            margin: 1.5rem 0;
            background-color: #f9fafb;
            padding: 1rem;
            border-radius: 0.5rem;
          }

          .prose .space-y-4 > * + * {
            margin-top: 1rem;
          }
        `}
      </style>

      <Helmet>
        <title>{blog.title}</title>
        <meta name="description" content={blog.excerpt} />
        <meta name="keywords" content={blog.tags.map(tag => tag.name).join(", ")} />
        <meta name="author" content={blog.author} />
      </Helmet>

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
        <div className="text-white font-bold text-lg">
          <img src={logoImage} alt="Logo" className="w-8 h-8 rounded-full" />
        </div>
        <div className="absolute right-16 bottom-1/2 transform translate-y-1/2 bg-black text-white text-xs px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-lg">
          ← Back to Home
        </div>
        <div className="absolute inset-0 rounded-full bg-[#940000] animate-ping opacity-20"></div>
      </motion.button>

      <div className="container mx-auto px-4 max-w-4xl">
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate("/blog")}
          className="mb-6 flex items-center gap-2 text-[#940000] hover:text-[#7a0000] transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Blog
        </motion.button>

        {/* Blog Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <div className="mb-4">
            <span className="bg-[#940000] text-white px-3 py-1 rounded-full text-sm font-medium">
              {blog.category}
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {blog.title}
          </h1>
          <p className="text-xl text-gray-600">{blog.excerpt}</p>
        </motion.div>

        {/* Blog Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-8 rounded-2xl overflow-hidden shadow-lg"
        >
          <img
            src={blog.thumbnail}
            alt={blog.title}
            className="w-full h-[100%] "
          />
        </motion.div>

        {/* Blog Meta Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-gray-200"
        >
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#940000] rounded-full flex items-center justify-center">
                {/* <span className="text-white font-bold">MR</span> */}
                <img src={nameIcon}></img>
              </div>
              <div>
                <p className="font-semibold text-gray-800">{blog.author}</p>
                <p className="text-sm text-gray-500">Professional Graphic Designer</p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span>{new Date(blog.date).toLocaleDateString()}</span>
            <span>•</span>
            <span>{blog.readTime}</span>
          </div>
        </motion.div>

        {/* Blog Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="prose max-w-none bg-white text-gray-700 rounded-2xl p-6 md:p-8 shadow-lg mb-8"
        >
          <div dangerouslySetInnerHTML={{ __html: blog.content }} />
        </motion.div>

        {/* Tags Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-8"
        >
          <h3 className="text-xl font-bold text-gray-800 mb-4">Tags:</h3>
          <div className="flex flex-wrap gap-2">
            {blog.tags.map((tag) => (
              <a
                key={tag.slug}
                href={tag.url}
                className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full text-sm transition-colors"
              >
                #{tag.name}
              </a>
            ))}
          </div>
        </motion.div>

        {/* Navigation Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex justify-between border-t border-gray-200 pt-8"
        >
          <button
            onClick={() => navigate("/blog")}
            className="px-6 py-3 bg-[#940000] text-white rounded-full hover:bg-[#7a0000] transition-colors"
          >
            View All Blogs
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default BlogDetails;