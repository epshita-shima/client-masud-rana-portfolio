import React, { useState } from 'react';
import { motion } from 'framer-motion';
import BlogManager from '../../components/BlogManager';
import ArticleManager from '../../components/ArticleManager';
import WorkManager from '../../components/WorkManager';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('blog');

  const tabs = [
    { id: 'blog', label: 'Blog Management', icon: '📝' },
    { id: 'article', label: 'Article Management', icon: '📄' },
    { id: 'work', label: 'Work Upload', icon: '🖼️' },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'blog':
        return <BlogManager />;
      case 'article':
        return <ArticleManager />;
      case 'work':
        return <WorkManager />;
      default:
        return <BlogManager />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#940000] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">MR</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-800">Admin Dashboard</h1>
                <p className="text-sm text-gray-600">Masud Rana Design Studio</p>
              </div>
            </div>
            <button
              onClick={() => {
                localStorage.removeItem('adminToken');
                window.location.href = '/admin/login';
              }}
              className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm"
            >
              Logout
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Navigation Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-sm p-2 mb-8 max-w-2xl mx-auto"
        >
          <div className="flex gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-[#940000] text-white shadow-lg'
                    : 'text-gray-600 hover:text-gray-800 hover:bg-gray-100'
                }`}
              >
                <span className="text-lg">{tab.icon}</span>
                <span className="hidden sm:block">{tab.label}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Content Area */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-2xl shadow-sm p-6"
        >
          {renderContent()}
        </motion.div>
      </div>
    </div>
  );
};

export default AdminDashboard;