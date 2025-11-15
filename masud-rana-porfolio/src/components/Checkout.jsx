import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Checkout = ({ cartItems = [], onOrderComplete }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zipCode: '',
    paymentMethod: 'bkash'
  });
  
  const [isProcessing, setIsProcessing] = useState(false);

  // Calculate totals
  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const serviceCharge = 50;
  const total = subtotal + serviceCharge;

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      if (onOrderComplete) {
        onOrderComplete();
      }
      navigate('/order-success');
    }, 3000);
  };

  const handleBackToGallery = () => {
    navigate(-1); // Go back to previous page
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Checkout</h1>
          <p className="text-gray-600">Complete your purchase securely</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Left Column - Order Summary */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl shadow-lg p-6 h-fit"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Order Summary</h2>
            
            {/* Cart Items */}
            <div className="space-y-4 mb-6">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800">{item.title}</h3>
                    <p className="text-gray-600 text-sm">Logo Design</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-[#940000]">৳{item.price}</p>
                    <p className="text-gray-600 text-sm">Qty: {item.quantity}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Price Breakdown */}
            <div className="space-y-3 border-t pt-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-semibold">৳{subtotal}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Service Charge</span>
                <span className="font-semibold">৳{serviceCharge}</span>
              </div>
              <div className="flex justify-between text-lg font-bold border-t pt-3">
                <span>Total</span>
                <span className="text-[#940000]">৳{total}</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Checkout Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-2xl shadow-lg p-6"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Shipping & Payment</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Personal Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#940000] focus:border-transparent"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#940000] focus:border-transparent"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#940000] focus:border-transparent"
                      placeholder="01XXXXXXXXX"
                    />
                  </div>
                </div>
              </div>

              {/* Shipping Address */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Send Message</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                    Any speacial requirement!
                    </label>
                    <textarea
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      required
                      rows="3"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#940000] focus:border-transparent"
                      placeholder="Enter your complete address"
                    />
                  </div>
                
                </div>
              </div>

              {/* Payment Method */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Payment Method</h3>
                <div className="space-y-3">
                  {[
                    { id: 'bkash', name: 'bKash', icon: '📱' },
                    { id: 'nagad', name: 'Nagad', icon: '💳' },
                    { id: 'rocket', name: 'Rocket', icon: '🚀' },
                    { id: 'card', name: 'Credit/Debit Card', icon: '💳' }
                  ].map((method) => (
                    <label key={method.id} className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value={method.id}
                        checked={formData.paymentMethod === method.id}
                        onChange={handleInputChange}
                        className="text-[#940000] focus:ring-[#940000]"
                      />
                      <span className="ml-3 text-lg">{method.icon}</span>
                      <span className="ml-2 font-medium">{method.name}</span>
                    </label>
                  ))}
                </div>

                {/* Payment Instructions */}
                {formData.paymentMethod === 'bkash' && (
                  <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <p className="text-sm text-yellow-800">
                      <strong>bKash Payment Instructions:</strong><br />
                      1. Go to bKash menu<br />
                      2. Select "Send Money"<br />
                      3. Enter this number: <strong>01XXXXXXXXX</strong><br />
                      4. Enter amount: <strong>৳{total}</strong><br />
                      5. Enter reference: <strong>LogoDesign</strong>
                    </p>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 pt-6">
                <motion.button
                  type="button"
                  onClick={handleBackToGallery}
                  className="flex-1 px-6 py-4 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Back to Gallery
                </motion.button>
                
                <motion.button
                  type="submit"
                  disabled={isProcessing}
                  className="flex-1 bg-[#940000] text-white px-6 py-4 rounded-lg font-semibold hover:bg-[#7a0000] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: isProcessing ? 1 : 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isProcessing ? (
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Processing...
                    </div>
                  ) : (
                    `Pay ৳${total}`
                  )}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;