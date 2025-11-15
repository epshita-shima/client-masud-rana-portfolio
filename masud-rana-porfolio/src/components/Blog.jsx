import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const data = [
      {
        id: 1,
        title: 'The Art of Logo Design: Creating Memorable Brand Identities',
        author: 'Masud Rana',
        date: '2025-04-01',
        category: 'Logo Design',
        excerpt: 'Discover the principles behind creating logos that stand the test of time and effectively communicate brand values...',
        thumbnail: 'https://images.unsplash.com/photo-1634942537034-2531766767d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        content: 'Full content about logo design principles...',
        readTime: '5 min read',
        tags: ['Logo', 'Branding', 'Design']
      },
      {
        id: 2,
        title: 'Color Psychology in Graphic Design: Choosing the Right Palette',
        author: 'Masud Rana',
        date: '2025-03-25',
        category: 'Design Theory',
        excerpt: 'Learn how different colors evoke emotions and how to use color psychology to enhance your design projects...',
        thumbnail: 'https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        content: 'Full content about color psychology...',
        readTime: '7 min read',
        tags: ['Color', 'Psychology', 'Design']
      },
      {
        id: 3,
        title: 'Typography Essentials: Choosing Fonts That Speak Your Brand Voice',
        author: 'Masud Rana',
        date: '2025-03-18',
        category: 'Typography',
        excerpt: 'Explore the world of typography and learn how to select fonts that perfectly match your brand personality...',
        thumbnail: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        content: 'Full content about typography...',
        readTime: '6 min read',
        tags: ['Typography', 'Fonts', 'Branding']
      },
      {
        id: 4,
        title: 'From Sketch to Digital: My Design Process Explained',
        author: 'Masud Rana',
        date: '2025-03-10',
        category: 'Design Process',
        excerpt: 'Take a behind-the-scenes look at my complete design workflow from initial concept to final delivery...',
        thumbnail: 'https://images.unsplash.com/photo-1581276879432-15e50529f34b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        content: 'Full content about design process...',
        readTime: '8 min read',
        tags: ['Process', 'Workflow', 'Design']
      },
    ];

    setBlogs(data);
    setFilteredBlogs(data);
    
    // Extract unique categories
    const uniqueCategories = ["All", ...new Set(data.map(blog => blog.category))];
    setCategories(uniqueCategories);
  }, []);

  const popularPosts = [
    {
      id: 101,
      title: 'Top 5 Logo Design Trends for 2025',
      date: '2025-03-28',
      thumbnail: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      views: '1.2K'
    },
    {
      id: 102,
      title: 'How to Build a Strong Brand Identity',
      date: '2025-03-15',
      thumbnail: 'https://images.unsplash.com/photo-1565688534245-05d6b5be184a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      views: '980'
    },
    {
      id: 103,
      title: 'The Psychology of Shapes in Logo Design',
      date: '2025-03-05',
      thumbnail: 'https://images.unsplash.com/photo-1634942537034-2531766767d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      views: '1.5K'
    },
  ];

  const recentPosts = [
    { id: 201, title: 'Building Responsive Layouts in Modern Design' },
    { id: 202, title: 'Understanding Color Theory in Depth' },
    { id: 203, title: 'The Power of Minimalism in Brand Design' },
    { id: 204, title: 'Creating Effective Social Media Graphics' },
  ];

  const tags = ['Logo Design', 'Branding', 'Typography', 'Color Theory', 'Web Design', 'Illustration', 'Print Design', 'UI/UX'];

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
    const filtered = blogs.filter(blog => 
      blog.title.toLowerCase().includes(term) ||
      blog.excerpt.toLowerCase().includes(term) ||
      blog.tags.some(tag => tag.toLowerCase().includes(term))
    );
    setFilteredBlogs(filtered);
  };

  const openModal = (blog) => {
    setSelectedBlog(blog);
  };

  const closeModal = () => {
    setSelectedBlog(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
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
            <svg className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
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
              <AnimatePresence>
                {filteredBlogs.map((blog, index) => (
                  <motion.div
                    key={blog.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer"
                    onClick={() => openModal(blog)}
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
                            <span className="text-white text-sm font-bold">MR</span>
                          </div>
                          <span className="text-sm text-gray-600">{blog.author}</span>
                        </div>
                        
                        <button className="text-[#940000] hover:text-[#7a0000] font-medium flex items-center gap-1 transition-colors">
                          Read More
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Empty State */}
            {filteredBlogs.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16"
              >
                <div className="text-6xl mb-4">📝</div>
                <h3 className="text-2xl font-bold text-gray-600 mb-2">No articles found</h3>
                <p className="text-gray-500">Try adjusting your search or filter criteria</p>
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
              <h3 className="text-xl font-bold text-gray-800 mb-4">About the Blog</h3>
              <p className="text-gray-600 mb-4">
                Sharing design insights, tips, and experiences from my journey as a professional graphic designer since 2015.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#940000] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">MR</span>
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
              <h3 className="text-xl font-bold text-gray-800 mb-4">Popular Posts</h3>
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
              <h3 className="text-xl font-bold text-gray-800 mb-4">Recent Posts</h3>
              <div className="space-y-3">
                {recentPosts.map((post) => (
                  <p
                    key={post.id}
                    className="text-gray-600 hover:text-[#940000] cursor-pointer transition-colors border-b border-gray-100 pb-2 last:border-b-0"
                  >
                    {post.title}
                  </p>
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
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm hover:bg-[#940000] hover:text-white transition-colors cursor-pointer"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Blog Modal */}
      <AnimatePresence>
        {selectedBlog && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={selectedBlog.thumbnail}
                  alt={selectedBlog.title}
                  className="w-full h-64 object-cover"
                />
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="p-8 overflow-y-auto max-h-[calc(90vh-16rem)]">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <span>{new Date(selectedBlog.date).toLocaleDateString()}</span>
                  <span>•</span>
                  <span>{selectedBlog.readTime}</span>
                  <span>•</span>
                  <span className="bg-gray-100 px-2 py-1 rounded-full">{selectedBlog.category}</span>
                </div>
                
                <h2 className="text-3xl font-bold text-gray-800 mb-4">{selectedBlog.title}</h2>
                
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-[#940000] rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">MR</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">{selectedBlog.author}</p>
                    <p className="text-sm text-gray-500">Professional Graphic Designer</p>
                  </div>
                </div>
                
                <div className="prose max-w-none text-gray-700 leading-relaxed">
                  <p className="text-lg mb-6">
                    {selectedBlog.excerpt}
                  </p>
                  
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo laborum vitae aliquam natus optio placeat labore tempora temporibus harum, doloribus vero? Odit blanditiis beatae quidem id nostrum laborum ipsum quibusdam facilis, dolorem assumenda voluptas quas expedita ad qui illum. Voluptatibus illo necessitatibus adipisci officiis repellendus saepe illum mollitia expedita ipsum repudiandae vitae ipsa, a nemo assumenda deleniti, quo earum veniam nihil ad aliquam doloribus similique dolores maiores reprehenderit! Itaque excepturi distinctio deleniti perferendis incidunt molestias laborum nostrum adipisci saepe repellat iure ea maiores quaerat est vel sed blanditiis pariatur quam nesciunt, recusandae eligendi doloremque accusamus? Dolore sequi rem aliquam architecto?
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mt-8">
                    {selectedBlog.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Blog;