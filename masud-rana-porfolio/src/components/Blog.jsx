import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import logoImage from "../assets/image/logo_design/watermark_icon.jpg";
import blog1 from "../assets/image/profile_pic/blog_1.jpg";
import blog2 from "../assets/image/profile_pic/Creative Clothing Brand Logo Ideas, Professional Fashion Logo Design.jpg";
import nameIcon from "../assets/image/logo_design/watermark_icon.jpg"
const Blog = () => {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const data = [
      {
        id: 1,
        title: "Complete Guide to Logo Design: Principles, Process & Professional Tips",
        author: "Masud Rana",
        date: "2025-04-05",
        category: "Logo Design",
        excerpt: "Learn everything about logo design—from principles and types of logos to the complete design process. A detailed guide for building a strong brand identity.",
        thumbnail: blog1,
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
        readTime: "8 min read",
        tags: [
          { name: "Clothing Brand Logo", slug: "clothing-brand-logo", url: "/" },
          { name: "Clothing Brand Logo Ideas", slug: "clothing-brand-logo-ideas", url: "/services" },
          { name: "Fashion Logo Design", slug: "fashion-logo-design", url: "/work" },
          { name: "Apparel Brand Logo", slug: "apparel-brand-logo", url: "/tags/apparel-brand-logo" },
          { name: "Fashion Brand Identity", slug: "fashion-brand-identity", url: "/services" },
          { name: "Professional Logo Design", slug: "professional-logo-design", url: "/tags/professional-logo-design" },
          { name: "Get a Custom Clothing Brand Logo", slug: "get a custom clothing brand logo", url: "/" },
        ],
      },
    ];

    setBlogs(data);
    setFilteredBlogs(data);

    const uniqueCategories = ["All", ...new Set(data.map((blog) => blog.category))];
    setCategories(uniqueCategories);
  }, []);

  const popularPosts = [
    {
      id: 101,
      title: "Top 5 Logo Design Trends for 2025",
      date: "2025-03-28",
      thumbnail: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      views: "1.2K",
    },
    {
      id: 102,
      title: "How to Build a Strong Brand Identity",
      date: "2025-03-15",
      thumbnail: "https://images.unsplash.com/photo-1565688534245-05d6b5be184a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      views: "980",
    },
    {
      id: 103,
      title: "The Psychology of Shapes in Logo Design",
      date: "2025-03-05",
      thumbnail: "https://images.unsplash.com/photo-1634942537034-2531766767d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      views: "1.5K",
    },
  ];

  const recentPosts = [
    { id: 1, title: "Complete Guide to Logo Design: Principles, Process & Professional Tips" },
    { id: 2, title: "Creative Clothing Brand Logo Ideas to Build a Strong Fashion Identity" },
  ];

  const tags = [
    "Logo Design",
    "Branding",
    "Typography",
    "Color Theory",
    "Web Design",
    "Illustration",
    "Print Design",
    "UI/UX",
  ];

  const handleLogoClick = () => {
    navigate("/");
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    if (category === "All") {
      setFilteredBlogs(blogs);
    } else {
      setFilteredBlogs(blogs.filter((b) => b.category === category));
    }
  };

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = blogs.filter(
      (blog) =>
        blog.title.toLowerCase().includes(term) ||
        blog.excerpt.toLowerCase().includes(term) ||
        blog.tags.some((tag) => tag.name.toLowerCase().includes(term))
    );
    setFilteredBlogs(filtered);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 relative">
      <Helmet>
        <title>Design Blog - Professional Tips & Process</title>
        <meta
          name="description"
          content="Learn everything about logo design—from principles and types of logos to the complete logo design process. A detailed SEO-friendly guide for building a strong brand identity."
        />
        <meta
          name="keywords"
          content="logo design, professional logo design, logo design process, types of logos, brand identity design, custom logo design, logo design tips"
        />
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

      <div className="container mx-auto px-4">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Design <span className="text-[#940000]">Blog</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Insights, tips, and inspiration from my journey as a professional graphic designer
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-2xl mx-auto mb-8"
        >
          <div className="relative">
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={handleSearch}
              className="w-full px-6 py-4 bg-white border border-gray-300 rounded-2xl focus:ring-2 focus:ring-[#940000] focus:border-transparent shadow-sm"
            />
            <svg
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategorySelect(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-[#940000] text-white shadow-lg"
                  : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-300"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredBlogs.map((blog, index) => (
                <motion.div
                  key={blog.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={blog.thumbnail}
                      alt={blog.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-[#940000] text-white px-3 py-1 rounded-full text-sm font-medium">
                        {blog.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                      <span>{new Date(blog.date).toLocaleDateString()}</span>
                      <span>•</span>
                      <span>{blog.readTime}</span>
                    </div>

                    <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-[#940000] transition-colors line-clamp-2">
                      {blog.title}
                    </h3>

                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {blog.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-[#940000] rounded-full flex items-center justify-center">
                          {/* <span className="text-white text-sm font-bold">MR</span> */}
                          <img src={nameIcon} alt="" />
                        </div>
                        <span className="text-sm text-gray-600">{blog.author}</span>
                      </div>

                      <Link
                        to={`/blog/${blog.id}`}
                        className="text-[#940000] hover:text-[#7a0000] font-medium flex items-center gap-1 transition-colors"
                      >
                        Read More
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Empty State */}
            {filteredBlogs.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16"
              >
                <div className="text-6xl mb-4">📝</div>
                <h3 className="text-2xl font-bold text-gray-600 mb-2">
                  No articles found
                </h3>
                <p className="text-gray-500">
                  Try adjusting your search or filter criteria
                </p>
              </motion.div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* About Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                About the Blog
              </h3>
              <p className="text-gray-600 mb-4">
                Sharing design insights, tips, and experiences from my journey
                as a professional graphic designer since 2020.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#940000] rounded-full flex items-center justify-center">
                  {/* <span className="text-white font-bold">MR</span> */}
                  <img src={nameIcon} alt="" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Masud Rana</p>
                  <p className="text-sm text-gray-500">Graphic Designer</p>
                </div>
              </div>
            </motion.div>

            {/* Popular Posts */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Popular Posts
              </h3>
              <div className="space-y-4">
                {popularPosts.map((post) => (
                  <div key={post.id} className="flex gap-3 group cursor-pointer">
                    <img
                      src={post.thumbnail}
                      alt={post.title}
                      className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-800 group-hover:text-[#940000] transition-colors line-clamp-2">
                        {post.title}
                      </h4>
                      <p className="text-sm text-gray-500 mt-1">
                        {new Date(post.date).toLocaleDateString()} • {post.views} views
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Recent Posts */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Recent Posts
              </h3>
              <div className="space-y-3">
                {recentPosts.map((post) => (
                  <Link
                    key={post.id}
                    to={`/blog/${post.id}`}
                    className="block text-gray-600 hover:text-[#940000] cursor-pointer transition-colors border-b border-gray-100 pb-2 last:border-b-0 line-clamp-2"
                  >
                    {post.title}
                  </Link>
                ))}
              </div>
            </motion.div>

            {/* Tags */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2 mt-6">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-sm px-3 py-1 rounded bg-gray-100 hover:bg-gray-200 text-gray-700"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;