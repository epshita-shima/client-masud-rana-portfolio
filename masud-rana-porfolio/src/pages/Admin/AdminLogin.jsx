import React, { useState } from 'react';
import { motion } from 'framer-motion';
import logo from "../../assets/image/masudranabd_logo.png"

const AdminLogin = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  // Demo credentials
  const demoCredentials = {
    email: 'admin@masudrana.com',
    password: 'admin123'
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      if (formData.email === demoCredentials.email && formData.password === demoCredentials.password) {
        // Successful login
        localStorage.setItem('adminToken', 'demo-token-xyz-123');
        localStorage.setItem('adminLoggedIn', 'true');
        window.location.href = '/admin/dashboard';
      } else {
        // Failed login
        setError('Invalid email or password. Use demo credentials below.');
        setIsLoading(false);
      }
    }, 1500);
  };

  const fillDemoCredentials = () => {
    setFormData({
      email: demoCredentials.email,
      password: demoCredentials.password
    });
    setError('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <div className="w-20 h-20 rounded-xl flex items-center justify-center mx-auto mb-4">
            <img src={logo} alt="Masud Rana Logo" className="w-full h-full object-contain" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Admin Portal</h1>
          <p className="text-gray-600">Masud Rana Design Studio</p>
        </motion.div>

        {/* Login Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Error Message */}
            {error && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm"
              >
                {error}
              </motion.div>
            )}

            {/* Email Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full px-4 py-3 text-gray-700 bg-gray-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#940000] focus:border-[#940000] focus:bg-white transition-colors"
                placeholder="Enter admin email"
                required
              />
            </div>
            
            {/* Password Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
                className="w-full px-4 py-3 text-gray-700 bg-gray-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#940000] focus:border-[#940000] focus:bg-white transition-colors"
                placeholder="Enter password"
                required
              />
            </div>

            {/* Login Button */}
            <motion.button
              type="submit"
              disabled={isLoading}
              className="w-full bg-[#940000] text-white py-4 rounded-xl font-semibold hover:bg-[#7a0000] transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
              whileHover={!isLoading ? { scale: 1.02 } : {}}
              whileTap={!isLoading ? { scale: 0.98 } : {}}
            >
              {isLoading ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Authenticating...
                </div>
              ) : (
                'Enter Admin Dashboard'
              )}
            </motion.button>
          </form>

          {/* Demo Credentials */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200"
          >
            <h3 className="text-sm font-medium text-blue-800 mb-2">Demo Credentials:</h3>
            <div className="text-xs text-blue-700 space-y-1">
              <p>Email: <span className="font-mono bg-blue-100 px-2 py-1 rounded">{demoCredentials.email}</span></p>
              <p>Password: <span className="font-mono bg-blue-100 px-2 py-1 rounded">{demoCredentials.password}</span></p>
            </div>
            <button
              onClick={fillDemoCredentials}
              className="w-full mt-3 bg-blue-600 text-white py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
            >
              Auto-fill Demo Credentials
            </button>
          </motion.div>
        </motion.div>

        {/* Security Notice */}
     
      </div>
    </div>
  );
};

export default AdminLogin;