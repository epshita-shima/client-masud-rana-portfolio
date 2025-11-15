import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

const ArticleManager = () => {
  const [articles, setArticles] = useState([
    {
      id: 1,
      title: 'Understanding Brand Identity',
      category: 'Branding',
      status: 'published',
      date: '2025-04-01'
    }
  ]);

  const [showForm, setShowForm] = useState(false);
 const [formData, setFormData] = useState({
    title: '',
    description: '',
    excerpt: '',
    author: 'Masud Rana',
    publishDate: new Date().toISOString().split('T')[0],
    readTime: '4 min read',
    category: 'Graphic Design',
    tags: [],
    coverImage: '',
    contentImages: [''],
    content: '',
    status: 'draft',
    metaDescription: '',
    featured: false
  });

  const [tagInput, setTagInput] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const categories = [
    'Graphic Design',
    'Web Design',
    'Branding',
    'UI/UX',
    'Marketing',
    'Typography',
    'Color Theory'
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleAddTag = () => {
    if (tagInput.trim() && !formData.tags.includes(tagInput.trim().toLowerCase())) {
      setFormData(prev => ({
        ...prev,
        tags: [...prev.tags, tagInput.trim().toLowerCase()]
      }));
      setTagInput('');
    }
  };

  const handleRemoveTag = (tagToRemove) => {
    setFormData(prev => ({
      ...prev,
      tags: prev.tags.filter(tag => tag !== tagToRemove)
    }));
  };

  const handleAddContentImage = () => {
    setFormData(prev => ({
      ...prev,
      contentImages: [...prev.contentImages, '']
    }));
  };

  const handleContentImageChange = (index, value) => {
    const newContentImages = [...formData.contentImages];
    newContentImages[index] = value;
    setFormData(prev => ({
      ...prev,
      contentImages: newContentImages
    }));
  };

  const handleRemoveContentImage = (index) => {
    setFormData(prev => ({
      ...prev,
      contentImages: prev.contentImages.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage('');

    try {
      // Filter out empty content images
      const filteredContentImages = formData.contentImages.filter(img => img.trim() !== '');
      
      const submissionData = {
        ...formData,
        contentImages: filteredContentImages
      };

      const response = await fetch('/api/articles', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData)
      });

      const result = await response.json();

      if (response.ok) {
        setMessage('Article created successfully!');
        // Reset form
        setFormData({
          title: '',
          description: '',
          excerpt: '',
          author: 'Masud Rana',
          publishDate: new Date().toISOString().split('T')[0],
          readTime: '4 min read',
          category: 'Graphic Design',
          tags: [],
          coverImage: '',
          contentImages: [''],
          content: '',
          status: 'draft',
          metaDescription: '',
          featured: false
        });
      } else {
        setMessage(result.message || 'Error creating article');
      }
    } catch (error) {
      setMessage('Network error: ' + error.message);
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <div>
              <Helmet>
        <title>Create New Article | Masud Rana</title>
      </Helmet>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Article Management</h2>
        <button
          onClick={() => setShowForm(true)}
          className="bg-[#940000] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#7a0000] transition-colors"
        >
          + Create New Article
        </button>
      </div>

      {/* Article Form */}
      {showForm && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-gray-50 rounded-2xl p-6 mb-6 border border-gray-200"
        >
          <h3 className="text-xl font-bold text-gray-800 mb-4">Create New Article</h3>
          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            {message && (
              <div className={`p-4 rounded-lg ${
                message.includes('successfully') 
                  ? 'bg-green-100 text-green-700 border border-green-300' 
                  : 'bg-red-100 text-red-700 border border-red-300'
              }`}>
                {message}
              </div>
            )}

            {/* Basic Information */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Article Title *
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border text-gray-800 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#940000] focus:border-transparent"
                  placeholder="Enter article title"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Category *
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 text-gray-800 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#940000] focus:border-transparent"
                >
                  {categories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Description & Excerpt */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Description *
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                rows="3"
                className="w-full px-4 py-3 text-gray-800 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#940000] focus:border-transparent"
                placeholder="Brief description for SEO and social media"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Excerpt *
              </label>
              <textarea
                name="excerpt"
                value={formData.excerpt}
                onChange={handleChange}
                required
                rows="2"
                className="w-full px-4 py-3 text-gray-800 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#940000] focus:border-transparent"
                placeholder="Short excerpt shown at the beginning of the article"
              />
            </div>

            {/* Meta Information */}
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Publish Date *
                </label>
                <input
                  type="date"
                  name="publishDate"
                  value={formData.publishDate}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 text-gray-800 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#940000] focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Read Time *
                </label>
                <input
                  type="text"
                  name="readTime"
                  value={formData.readTime}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 text-gray-800 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#940000] focus:border-transparent"
                  placeholder="e.g., 4 min read"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Status *
                </label>
                <select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 text-gray-800 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#940000] focus:border-transparent"
                >
                  <option value="draft">Draft</option>
                  <option value="published">Published</option>
                  <option value="archived">Archived</option>
                </select>
              </div>
            </div>

            {/* Tags */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tags
              </label>
              <div className="flex gap-2 mb-3">
                <input
                  type="text"
                  value={tagInput}
                  onChange={(e) => setTagInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddTag())}
                  className="flex-1 px-4 py-2 text-gray-800 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#940000] focus:border-transparent"
                  placeholder="Add a tag and press Enter"
                />
                <button
                  type="button"
                  onClick={handleAddTag}
                  className="px-4 py-2 bg-[#940000] text-white rounded-lg hover:bg-[#7a0000] transition-colors"
                >
                  Add
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {formData.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center gap-1 px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                  >
                    #{tag}
                    <button
                      type="button"
                      onClick={() => handleRemoveTag(tag)}
                      className="text-gray-500 hover:text-red-500"
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
            </div>

            {/* Images */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Cover Image URL *
                </label>
                <input
                  type="url"
                  name="coverImage"
                  value={formData.coverImage}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 text-gray-800 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#940000] focus:border-transparent"
                  placeholder="https://example.com/image.jpg"
                />
                {formData.coverImage && (
                  <div className="mt-2">
                    <img 
                      src={formData.coverImage} 
                      alt="Cover preview" 
                      className="h-32 object-cover rounded-lg border"
                    />
                  </div>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Content Images
                </label>
                {formData.contentImages.map((image, index) => (
                  <div key={index} className="flex gap-2 mb-2">
                    <input
                      type="url"
                      value={image}
                      onChange={(e) => handleContentImageChange(index, e.target.value)}
                      className="flex-1 px-4 py-2 text-gray-800 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#940000] focus:border-transparent"
                      placeholder="https://example.com/content-image.jpg"
                    />
                    {formData.contentImages.length > 1 && (
                      <button
                        type="button"
                        onClick={() => handleRemoveContentImage(index)}
                        className="px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                      >
                        Remove
                      </button>
                    )}
                  </div>
                ))}
                <button
                  type="button"
                  onClick={handleAddContentImage}
                  className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                >
                  Add Another Image
                </button>
              </div>
            </div>

            {/* Content */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Article Content *
              </label>
              <textarea
                name="content"
                value={formData.content}
                onChange={handleChange}
                required
                rows="12"
                className="w-full px-4 py-3 text-gray-800 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#940000] focus:border-transparent font-mono"
                placeholder="Write your article content here..."
              />
            </div>

            {/* Additional Options */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Meta Description
                </label>
                <textarea
                  name="metaDescription"
                  value={formData.metaDescription}
                  onChange={handleChange}
                  rows="3"
                  className="w-full px-4 py-3 text-gray-800 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#940000] focus:border-transparent"
                  placeholder="Optional: Custom meta description for SEO"
                />
              </div>

              <div className="flex items-center space-x-4">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="featured"
                    checked={formData.featured}
                    onChange={handleChange}
                    className="w-4 h-4 text-[#940000] focus:ring-[#940000] border-gray-300 rounded"
                  />
                  <span className="ml-2 text-sm font-medium text-gray-700">
                    Featured Article
                  </span>
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex gap-4 pt-6 border-t border-gray-200">
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 bg-[#940000] text-white py-4 px-6 rounded-lg font-semibold hover:bg-[#7a0000] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Creating Article...' : 'Create Article'}
              </button>
              <button
                type="button"
                onClick={() => setFormData(prev => ({ ...prev, status: 'draft' }))}
                className="px-6 py-4 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
              >
                Save as Draft
              </button>
            </div>
          </form>
        </motion.div>
      )}

      {/* Articles List */}
      <div className="space-y-4">
        {articles.map((article) => (
          <motion.div
            key={article.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gray-50 rounded-xl p-4 border border-gray-200"
          >
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <h3 className="font-semibold text-gray-800">{article.title}</h3>
                <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
                  <span className="bg-gray-200 px-2 py-1 rounded-full">{article.category}</span>
                  <span>{article.date}</span>
                  <span className={`px-2 py-1 rounded-full ${
                    article.status === 'published' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {article.status}
                  </span>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="px-3 py-1 bg-blue-500 text-white rounded-lg text-sm hover:bg-blue-600 transition-colors">
                  Edit
                </button>
                <button className="px-3 py-1 bg-red-500 text-white rounded-lg text-sm hover:bg-red-600 transition-colors">
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

export default ArticleManager;