import React, { useState } from 'react';
import { motion } from 'framer-motion';

const BlogManager = () => {
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: 'The Art of Logo Design',
      category: 'Logo Design',
      status: 'published',
      date: '2025-04-01',
      views: 1245
    },
    {
      id: 2,
      title: 'Color Psychology in Design',
      category: 'Design Theory',
      status: 'draft',
      date: '2025-03-25',
      views: 0
    }
  ]);

  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    excerpt: '',
    content: '',
    thumbnail: '',
    tags: '',
    status: 'draft'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBlog = {
      id: Date.now(),
      ...formData,
      date: new Date().toISOString().split('T')[0],
      views: 0
    };
    setBlogs([...blogs, newBlog]);
    setFormData({
      title: '',
      category: '',
      excerpt: '',
      content: '',
      thumbnail: '',
      tags: '',
      status: 'draft'
    });
    setShowForm(false);
  };

  const deleteBlog = (id) => {
    setBlogs(blogs.filter(blog => blog.id !== id));
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Blog Management</h2>
        <button
          onClick={() => setShowForm(true)}
          className="bg-[#940000] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#7a0000] transition-colors"
        >
          + Create New Blog
        </button>
      </div>

      {/* Blog Form */}
      {showForm && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-gray-50 rounded-2xl p-6 mb-6 border border-gray-200"
        >
          <h3 className="text-xl font-bold text-gray-800 mb-4">Create New Blog Post</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
                <input
                  type="text"
                  required
                  value={formData.title}
                  onChange={(e) => setFormData({...formData, title: e.target.value})}
                  className="w-full px-4 py-3 text-gray-800 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#940000] focus:border-transparent"
                  placeholder="Enter blog title"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({...formData, category: e.target.value})}
                  className="w-full px-4 py-3 text-gray-800 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#940000] focus:border-transparent"
                >
                  <option value="">Select Category</option>
                  <option value="Logo Design">Logo Design</option>
                  <option value="Design Theory">Design Theory</option>
                  <option value="Typography">Typography</option>
                  <option value="Branding">Branding</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Excerpt</label>
              <textarea
                required
                value={formData.excerpt}
                onChange={(e) => setFormData({...formData, excerpt: e.target.value})}
                rows="3"
                className="w-full px-4 py-3 text-gray-800 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#940000] focus:border-transparent"
                placeholder="Brief description of the blog post"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Content</label>
              <textarea
                required
                value={formData.content}
                onChange={(e) => setFormData({...formData, content: e.target.value})}
                rows="6"
                className="w-full px-4 py-3 text-gray-800 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#940000] focus:border-transparent"
                placeholder="Full blog content"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Thumbnail URL</label>
                <input
                  type="url"
                  value={formData.thumbnail}
                  onChange={(e) => setFormData({...formData, thumbnail: e.target.value})}
                  className="w-full px-4 py-3 text-gray-800 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#940000] focus:border-transparent"
                  placeholder="https://example.com/image.jpg"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Tags</label>
                <input
                  type="text"
                  value={formData.tags}
                  onChange={(e) => setFormData({...formData, tags: e.target.value})}
                  className="w-full px-4 py-3 text-gray-800 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#940000] focus:border-transparent"
                  placeholder="design, logo, branding"
                />
              </div>
            </div>

            <div className="flex gap-4">
              <button
                type="submit"
                className="bg-[#940000] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#7a0000] transition-colors"
              >
                Publish Blog
              </button>
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="bg-gray-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-gray-600 transition-colors"
              >
                Cancel
              </button>
            </div>
          </form>
        </motion.div>
      )}

      {/* Blogs List */}
      <div className="space-y-4">
        {blogs.map((blog) => (
          <motion.div
            key={blog.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gray-50 rounded-xl p-4 border border-gray-200"
          >
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <h3 className="font-semibold text-gray-800">{blog.title}</h3>
                <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
                  <span className="bg-gray-200 px-2 py-1 rounded-full">{blog.category}</span>
                  <span>{blog.date}</span>
                  <span className={`px-2 py-1 rounded-full ${
                    blog.status === 'published' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {blog.status}
                  </span>
                  <span>Views: {blog.views}</span>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="px-3 py-1 bg-blue-500 text-white rounded-lg text-sm hover:bg-blue-600 transition-colors">
                  Edit
                </button>
                <button
                  onClick={() => deleteBlog(blog.id)}
                  className="px-3 py-1 bg-red-500 text-white rounded-lg text-sm hover:bg-red-600 transition-colors"
                >
                  Delete
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default BlogManager;