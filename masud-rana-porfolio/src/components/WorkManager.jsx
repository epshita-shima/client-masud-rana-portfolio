import React, { useState } from 'react';
import { motion } from 'framer-motion';

const WorkManager = () => {
  const [works, setWorks] = useState([
    {
      id: 1,
      title: 'Aesthetic Stitch Logo',
      category: 'logo',
      price: 1000,
      image: 'https://images.unsplash.com/photo-1634942537034-2531766767d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      status: 'published'
    }
  ]);

  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    category: 'logo',
    price: '',
    image: '',
    description: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newWork = {
      id: Date.now(),
      ...formData,
      price: parseInt(formData.price),
      status: 'published'
    };
    setWorks([...works, newWork]);
    setFormData({ title: '', category: 'logo', price: '', image: '', description: '' });
    setShowForm(false);
  };

  const deleteWork = (id) => {
    setWorks(works.filter(work => work.id !== id));
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Work Upload</h2>
        <button
          onClick={() => setShowForm(true)}
          className="bg-[#940000] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#7a0000] transition-colors"
        >
          + Upload New Work
        </button>
      </div>

      {/* Work Upload Form */}
      {showForm && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-gray-50 rounded-2xl p-6 mb-6 border border-gray-200"
        >
          <h3 className="text-xl font-bold text-gray-800 mb-4">Upload New Work</h3>
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
                  placeholder="Enter work title"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({...formData, category: e.target.value})}
                  className="w-full px-4 py-3 text-gray-800 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#940000] focus:border-transparent"
                >
                  <option value="logo">Logo Design</option>
                  <option value="banner">Banner Design</option>
                  <option value="card">Business Card</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Price (৳)</label>
                <input
                  type="number"
                  required
                  value={formData.price}
                  onChange={(e) => setFormData({...formData, price: e.target.value})}
                  className="w-full px-4 py-3 text-gray-800 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#940000] focus:border-transparent"
                  placeholder="1000"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Image URL</label>
                <input
                  type="url"
                  required
                  value={formData.image}
                  onChange={(e) => setFormData({...formData, image: e.target.value})}
                  className="w-full px-4 py-3 text-gray-800 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#940000] focus:border-transparent"
                  placeholder="https://example.com/image.jpg"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({...formData, description: e.target.value})}
                rows="4"
                className="w-full px-4 py-3 text-gray-800 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#940000] focus:border-transparent"
                placeholder="Brief description of the work"
              />
            </div>

            <div className="flex gap-4">
              <button
                type="submit"
                className="bg-[#940000] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#7a0000] transition-colors"
              >
                Upload Work
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

      {/* Works Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {works.map((work) => (
          <motion.div
            key={work.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
          >
            <img
              src={work.image}
              alt={work.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-gray-800 mb-2">{work.title}</h3>
              <div className="flex items-center justify-between text-sm text-gray-600">
                <span className="bg-gray-100 px-2 py-1 rounded-full capitalize">
                  {work.category}
                </span>
                <span className="font-semibold text-[#940000]">৳{work.price}</span>
              </div>
              <div className="flex gap-2 mt-4">
                <button className="flex-1 px-3 py-2 bg-blue-500 text-white rounded-lg text-sm hover:bg-blue-600 transition-colors">
                  Edit
                </button>
                <button
                  onClick={() => deleteWork(work.id)}
                  className="flex-1 px-3 py-2 bg-red-500 text-white rounded-lg text-sm hover:bg-red-600 transition-colors"
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

export default WorkManager;