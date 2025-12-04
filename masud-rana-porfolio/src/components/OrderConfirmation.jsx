import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import { CheckCircle, Download, Printer, Home, ShoppingBag } from "lucide-react";

const OrderConfirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [emailStatus, setEmailStatus] = useState(true);

  useEffect(() => {
    // Check if order data is passed from checkout
    if (location.state?.order) {
      setOrder(location.state.order);
      setEmailStatus(location.state.emailSent || false);
      setLoading(false);
      
      // Save order to localStorage if not already saved
      const existingOrders = JSON.parse(localStorage.getItem('orders') || '[]');
      const orderExists = existingOrders.some(o => o.orderId === location.state.order.orderId);
      
      if (!orderExists) {
        existingOrders.push(location.state.order);
        localStorage.setItem('orders', JSON.stringify(existingOrders));
      }
      
      // Clear cart from localStorage (if exists)
      localStorage.removeItem('cart');
      
    } else {
      // Try to get last order from localStorage
      const orders = JSON.parse(localStorage.getItem('orders') || '[]');
      if (orders.length > 0) {
        setOrder(orders[orders.length - 1]);
      }
      setLoading(false);
    }
  }, [location]);

  // Format date
  const formatDate = (dateString) => {
    const options = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    };
    return new Date(dateString).toLocaleDateString('en-BD', options);
  };

  // Print order details
  const handlePrint = () => {
    window.print();
  };

  // Download order as PDF (simple version)
  const handleDownload = () => {
    const orderDetails = `
      Order Confirmation
      =================
      
      Order ID: ${order?.orderId}
      Order Date: ${formatDate(order?.orderDate)}
      
      Customer Information:
      --------------------
      Name: ${order?.name}
      Email: ${order?.email}
      Phone: ${order?.phone}
      Address: ${order?.address}
      
      Payment Method: ${order?.paymentMethod}
      Transaction ID: ${order?.transactionId || 'N/A'}
      
      Order Items:
      ------------
      ${order?.items?.map(item => 
        `${item.name} x ${item.quantity} - ৳${item.price * item.quantity}`
      ).join('\n')}
      
      Total Amount: ৳${order?.totalAmount}
      
      Thank you for your order!
    `;

    const blob = new Blob([orderDetails], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `order_${order?.orderId}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  // Send email again
  const handleResendEmail = async () => {
    try {
      // Implement email resend logic here
      alert('Confirmation email has been resent!');
    } catch (error) {
      alert('Failed to resend email. Please try again.');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#940000] mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading order details...</p>
        </div>
      </div>
    );
  }

  if (!order) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">No Order Found</h2>
          <p className="text-gray-600 mb-6">It seems there's no recent order to display.</p>
          <button 
            onClick={() => navigate('/')}
            className="bg-[#940000] text-white px-6 py-3 rounded-lg hover:bg-[#7a0000] transition-colors"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          {/* Success Header */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-12 h-12 text-green-600" />
            </div>
            
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              Order Confirmed!
            </h1>
            
            <p className="text-gray-600 mb-2">
              Thank you for your purchase, <span className="font-semibold">{order.name}</span>!
            </p>
            
            <p className="text-gray-600 mb-6">
              Your order <span className="font-semibold text-[#940000]">{order.orderId}</span> has been received.
            </p>
            
            {/* Email Status */}
            {emailStatus ? (
              <div className="inline-flex items-center bg-green-50 text-green-700 px-4 py-2 rounded-lg mb-6">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Confirmation email sent to {order.email}
              </div>
            ) : (
              <div className="inline-flex items-center bg-yellow-50 text-yellow-700 px-4 py-2 rounded-lg mb-6">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.162 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
                Email could not be sent
                <button 
                  onClick={handleResendEmail}
                  className="ml-3 text-sm underline hover:text-[#940000]"
                >
                  Resend
                </button>
              </div>
            )}
            
            {/* Action Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <button
                onClick={handlePrint}
                className="flex items-center gap-2 bg-gray-100 text-gray-800 px-5 py-3 rounded-lg hover:bg-gray-200 transition-colors"
              >
                <Printer className="w-5 h-5" />
                Print Receipt
              </button>
              
              <button
                onClick={handleDownload}
                className="flex items-center gap-2 bg-gray-100 text-gray-800 px-5 py-3 rounded-lg hover:bg-gray-200 transition-colors"
              >
                <Download className="w-5 h-5" />
                Download
              </button>
              
              {/* <button
                onClick={() => navigate('/checkout')}
                className="flex items-center gap-2 bg-gray-100 text-gray-800 px-5 py-3 rounded-lg hover:bg-gray-200 transition-colors"
              >
                <ShoppingBag className="w-5 h-5" />
                View All Orders
              </button> */}
            </div>
          </div>

          {/* Order Details */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Order Summary */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-semibold mb-6 pb-3 border-b">Order Details</h2>
              
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Order ID:</span>
                  <span className="font-semibold">{order.orderId}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Order Date:</span>
                  <span>{formatDate(order.orderDate)}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Payment Method:</span>
                  <span className="font-semibold capitalize">{order.paymentMethod}</span>
                </div>
                
                {order.transactionId && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">Transaction ID:</span>
                    <span className="font-mono text-sm">{order.transactionId}</span>
                  </div>
                )}
                
                <div className="pt-4 border-t">
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total Amount:</span>
                    <span className="text-[#940000]">৳{order.totalAmount}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Shipping Information */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-semibold mb-6 pb-3 border-b">Shipping Information</h2>
              
              <div className="space-y-3">
                <div>
                  <p className="text-gray-600 text-sm">Full Name</p>
                  <p className="font-semibold">{order.name}</p>
                </div>
                
                <div>
                  <p className="text-gray-600 text-sm">Email Address</p>
                  <p className="font-semibold">{order.email}</p>
                </div>
                
                <div>
                  <p className="text-gray-600 text-sm">Phone Number</p>
                  <p className="font-semibold">{order.phone}</p>
                </div>
                
                <div>
                  <p className="text-gray-600 text-sm">Shipping Address</p>
                  <p className="font-semibold whitespace-pre-line">{order.address}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Order Items */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <h2 className="text-xl font-semibold mb-6 pb-3 border-b">Order Items</h2>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4 text-gray-600 font-semibold">Product</th>
                    <th className="text-left py-3 px-4 text-gray-600 font-semibold">Price</th>
                    <th className="text-left py-3 px-4 text-gray-600 font-semibold">Quantity</th>
                    <th className="text-left py-3 px-4 text-gray-600 font-semibold">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {order.items?.map((item, index) => (
                    <tr key={index} className="border-b hover:bg-gray-50">
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-4">
                          <img 
                            src={item.image} 
                            alt={item.name} 
                            className="w-12 h-12 object-cover rounded"
                          />
                          <div>
                            <p className="font-semibold">{item.name}</p>
                            {item.size && <p className="text-sm text-gray-500">Size: {item.size}</p>}
                            {item.color && <p className="text-sm text-gray-500">Color: {item.color}</p>}
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-4">৳{item.price}</td>
                      <td className="py-4 px-4">{item.quantity}</td>
                      <td className="py-4 px-4 font-semibold">৳{item.price * item.quantity}</td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr className="bg-gray-50">
                    <td colSpan="3" className="py-4 px-4 text-right font-semibold">
                      Grand Total:
                    </td>
                    <td className="py-4 px-4 font-bold text-lg text-[#940000]">
                      ৳{order.totalAmount}
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>

          {/* Next Steps */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-6 pb-3 border-b">What's Next?</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 font-bold text-lg">1</span>
                </div>
                <h3 className="font-semibold mb-2">Order Processing</h3>
                <p className="text-sm text-gray-600">
                  We'll verify your order and payment details within 24 hours.
                </p>
              </div>
              
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 font-bold text-lg">2</span>
                </div>
                <h3 className="font-semibold mb-2">Production</h3>
                <p className="text-sm text-gray-600">
                  Your custom designs will be prepared by our expert team.
                </p>
              </div>
              
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 font-bold text-lg">3</span>
                </div>
                <h3 className="font-semibold mb-2">Delivery</h3>
                <p className="text-sm text-gray-600">
                  You'll receive updates about shipping and delivery timelines.
                </p>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t text-center">
              <p className="text-gray-600 mb-4">
                Need help? <a href="mailto:support@yourcompany.com" className="text-[#940000] hover:underline">Contact our support team</a>
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <button
                  onClick={() => navigate('/')}
                  className="flex items-center gap-2 bg-[#940000] text-white px-6 py-3 rounded-lg hover:bg-[#7a0000] transition-colors"
                >
                  <Home className="w-5 h-5" />
                  Back to Home
                </button>
                
                <button
                  onClick={() => navigate('/services')}
                  className="flex items-center gap-2 bg-gray-100 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  <ShoppingBag className="w-5 h-5" />
                  Continue Shopping
                </button>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="mt-8 text-center text-sm text-gray-500">
            <p>For any queries, call us at: <span className="font-semibold">+880 1234 567890</span></p>
            <p>Email: <a href="mailto:support@yourcompany.com" className="text-[#940000] hover:underline">support@yourcompany.com</a></p>
            <p className="mt-2">Office Hours: 9:00 AM - 6:00 PM (Saturday - Thursday)</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default OrderConfirmation;