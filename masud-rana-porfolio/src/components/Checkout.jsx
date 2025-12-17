import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { removeFromCart, updateQuantity, clearCart } from "../redux/cartSlice";
import emailjs from "@emailjs/browser";
import { removeFromCart, updateQuantity, clearCart } from "../redux/cartSlice";

const Checkout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    paymentMethod: "cash",
    transactionId: "",
  });

  const [loading, setLoading] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);
  const [orderDetails, setOrderDetails] = useState(null);

  // Get cart items from Redux store
  const cartItems = useSelector((state) => state.cart.items);
  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // EmailJS configuration
  const EMAILJS_CONFIG = {
    SERVICE_ID: "service_lej67ij", // EmailJS service ID
    TEMPLATE_ID: "template_0nzw8sf", // EmailJS template ID
    PUBLIC_KEY: "SMNywnq1D-NLZBFPL", // EmailJS public key
  };

  // Payment methods data
  const paymentMethods = [
    {
      id: "cash",
      name: "Cash on Delivery",
      description: "Pay when you receive the product",
    },
    {
      id: "bkash",
      name: "bKash",
      description: "Send money to our bKash number",
      number: "01680128589",
      instructions: [
        "Go to your bKash app",
        'Select "Send Money"',
        "Enter our bKash number",
        "Enter the exact amount",
        "Enter Reference: OrderID",
      ],
    },
    {
      id: "nagad",
      name: "Nagad",
      description: "Send money to our Nagad number",
      number: "01680128589",
      instructions: [
        "Go to your Nagad app",
        'Select "Send Money"',
        "Enter our Nagad number",
        "Enter the exact amount",
        "Enter Reference: OrderID",
      ],
    },
    {
      id: "bank",
      name: "Bank Transfer",
      description: "Transfer to our bank account",
      details: {
        bankName: "Dutch-Bangla Bank Limited",
        accountName: "MD MASUD RANA",
        accountNumber: "0200020330838",
        branch: "NALUA BAZAR BR 0039",
        // routingNumber: '০৯০২৭১০০০'
      },
      instructions: [
        "Transfer to the account details below",
        "Include your phone number as reference",
        "Keep the transaction receipt",
      ],
    },
  ];

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
  }, []);

  // Remove item from cart
  const handleRemoveFromCart = (itemId) => {
    dispatch(removeFromCart(itemId));
  };

  // Update item quantity
  const handleUpdateQuantity = (itemId, newQuantity) => {
    if (newQuantity < 1) return;
    dispatch(updateQuantity({ id: itemId, quantity: newQuantity }));
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handlePaymentMethodChange = (methodId) => {
    setFormData({
      ...formData,
      paymentMethod: methodId,
      transactionId: "",
    });
  };

  // Send email to customer
  const sendOrderConfirmationEmail = async (order) => {
    try {
      const emailParams = {
        to_name: order.name,
        to_email: order.email,
        order_id: order.orderId,
        order_date: new Date(order.orderDate).toLocaleDateString("bn-BD"),
        customer_name: order.name,
        customer_email: order.email,
        customer_phone: order.phone,
        customer_address: order.address,
        payment_method: paymentMethods.find((m) => m.id === order.paymentMethod)
          ?.name,
        transaction_id: order.transactionId || "N/A",
        total_amount: `৳${order.totalAmount}`,
        order_items: order.items
          .map(
            (item) =>
              `${item.name} x ${item.quantity} = ৳${item.price * item.quantity}`
          )
          .join("\n"),
        items_list: order.items
          .map(
            (item) => `
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #ddd;">${
              item.name
            }</td>
            <td style="padding: 8px; border-bottom: 1px solid #ddd;">${
              item.quantity
            }</td>
            <td style="padding: 8px; border-bottom: 1px solid #ddd;">৳${
              item.price
            }</td>
            <td style="padding: 8px; border-bottom: 1px solid #ddd;">৳${
              item.price * item.quantity
            }</td>
          </tr>
        `
          )
          .join(""),
      };

      const response = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        emailParams
      );

      console.log("Email sent successfully:", response);
      return true;
    } catch (error) {
      console.error("Failed to send email:", error);
      return false;
    }
  };

  // Send email to admin
  const sendAdminNotificationEmail = async (order) => {
    try {
      const adminEmailParams = {
        to_name: "Admin",
        to_email: "admin@yourdomain.com", // আপনার অ্যাডমিন ইমেল
        order_id: order.orderId,
        customer_name: order.name,
        customer_email: order.email,
        customer_phone: order.phone,
        customer_address: order.address,
        payment_method: paymentMethods.find((m) => m.id === order.paymentMethod)
          ?.name,
        transaction_id: order.transactionId || "N/A",
        total_amount: `৳${order.totalAmount}`,
        order_items: order.items
          .map((item) => `${item.name} x ${item.quantity} @ ৳${item.price}`)
          .join("\n"),
        order_summary: `
          Total Items: ${order.items.length}
          Total Quantity: ${order.items.reduce(
            (sum, item) => sum + item.quantity,
            0
          )}
          Total Amount: ৳${order.totalAmount}
        `,
      };

      // Admin notification template (আপনাকে EmailJS-এ আলাদা টেমপ্লেট তৈরি করতে হবে)
      const response = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        "YOUR_ADMIN_TEMPLATE_ID", // Admin notification template ID
        adminEmailParams
      );

      console.log("Admin notification sent:", response);
      return true;
    } catch (error) {
      console.error("Failed to send admin notification:", error);
      return false;
    }
  };

  const handlePlaceOrder = async (e) => {
    e.preventDefault();

    // Validate transaction ID for digital payments
    if (formData.paymentMethod !== "cash" && !formData.transactionId.trim()) {
      alert("Please enter your transaction ID");
      return;
    }

    setLoading(true);

    // Create order object
    const order = {
      ...formData,
      items: [...cartItems], // Copy cart items
      totalAmount,
      orderId: `ORD-${Date.now()}`,
      orderDate: new Date().toISOString(),
    };

    try {
      // Send confirmation email to customer
      const emailSent = await sendOrderConfirmationEmail(order);

      // Send notification to admin
      await sendAdminNotificationEmail(order);

      if (emailSent) {
        // Save order to localStorage (temporary solution - asal production এ backend এ সেভ করতে হবে)
        const existingOrders = JSON.parse(
          localStorage.getItem("orders") || "[]"
        );
        existingOrders.push(order);
        localStorage.setItem("orders", JSON.stringify(existingOrders));

        // Set order details for success page
        setOrderDetails(order);
        setOrderComplete(true);

        // Clear cart
        dispatch(clearCart());

        // Show success message
        setTimeout(() => {
          navigate("/order-confirmation", {
            state: {
              order,
              emailSent: true,
            },
          });
        }, 2000);
      } else {
        alert(
          "Order placed but email could not be sent. Please save your order details."
        );
        navigate("/order-confirmation", { state: { order, emailSent: false } });
      }
    } catch (error) {
      console.error("Order processing error:", error);
      alert("There was an error processing your order. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Order Success Component
  const OrderSuccess = () => (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-xl shadow-lg p-8 max-w-md text-center"
      >
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg
            className="w-8 h-8 text-green-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Order Placed Successfully!
        </h2>
        <p className="text-gray-600 mb-2">
          Order ID:{" "}
          <span className="font-semibold">{orderDetails?.orderId}</span>
        </p>
        <p className="text-gray-600 mb-6">
          Confirmation email has been sent to {orderDetails?.email}
        </p>
        <div className="space-y-3">
          <button
            onClick={() => navigate("/orders")}
            className="w-full bg-[#940000] text-white py-3 rounded-lg font-semibold hover:bg-[#7a0000] transition-colors"
          >
            View Order Details
          </button>
          <button
            onClick={() => navigate("/services")}
            className="w-full bg-gray-200 text-gray-800 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
          >
            Continue Shopping
          </button>
        </div>
      </motion.div>
    </div>
  );

  if (orderComplete) {
    return <OrderSuccess />;
  }

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Your cart is empty
          </h2>
          <button
            onClick={() => navigate("/services")}
            className="bg-[#940000] text-white px-6 py-3 rounded-lg hover:bg-[#7a0000] transition-colors"
          >
            Browse Designs
          </button>
        </div>
      </div>
    );
  }

  const selectedPaymentMethod = paymentMethods.find(
    (method) => method.id === formData.paymentMethod
  );

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-center text-gray-800 mb-8"
        >
          Checkout
        </motion.h1>

        <div className="grid lg:grid-cols -2 gap-8 max-w-6xl mx-auto">
          {/* Order Summary */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-xl shadow-lg p-6"
          >
            <h2 className="text-2xl font-semibold mb-6">Order Summary</h2>
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between border-b pb-4"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div>
                      <h3 className="font-semibold">{item.name}</h3>
                      <p className="text-gray-600">৳{item.price}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    {/* Quantity Controls */}
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() =>
                          handleUpdateQuantity(item.id, item.quantity - 1)
                        }
                        disabled={item.quantity <= 1}
                        className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        -
                      </button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <button
                        onClick={() =>
                          handleUpdateQuantity(item.id, item.quantity + 1)
                        }
                        className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors"
                      >
                        +
                      </button>
                    </div>

                    <p className="font-semibold text-[#940000] w-20 text-right">
                      ৳{item.price * item.quantity}
                    </p>

                    {/* Delete Button */}
                    <button
                      onClick={() => handleRemoveFromCart(item.id)}
                      className="w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center hover:bg-red-200 transition-colors"
                    >
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
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t">
              <div className="flex justify-between items-center text-xl font-bold">
                <span>Total:</span>
                <span className="text-[#940000]">৳{totalAmount}</span>
              </div>
            </div>
          </motion.div>

          {/* Checkout Form */}
          <motion.form
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            onSubmit={handlePlaceOrder}
            className="space-y-6"
          >
            {/* Shipping Information Card */}
            <div className="bg-white rounded-xl shadow-lg p-6 text-gray-800">
              <h2 className="text-2xl font-semibold mb-6">
                Shipping Information
              </h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#940000] focus:border-transparent"
                    required
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#940000] focus:border-transparent"
                    required
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Order confirmation will be sent to this email
                  </p>
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#940000] focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Shipping Address *
                  </label>
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    rows="3"
                    className="w-full px-4 py-3 border text-gray-800 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#940000] focus:border-transparent"
                    required
                    placeholder="House No, Road No, Area, City, Postal Code"
                  />
                </div>
              </div>
            </div>

            {/* Payment Method Card */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-semibold mb-6">Payment Method</h2>

              <div className="space-y-4">
                {paymentMethods.map((method) => (
                  <div key={method.id} className="flex items-start gap-4">
                    <input
                      type="radio"
                      id={method.id}
                      name="paymentMethod"
                      checked={formData.paymentMethod === method.id}
                      onChange={() => handlePaymentMethodChange(method.id)}
                      className="mt-1"
                    />
                    <label
                      htmlFor={method.id}
                      className="flex-1 cursor-pointer"
                    >
                      <div className="font-semibold text-gray-800">
                        {method.name}
                      </div>
                      <div className="text-sm text-gray-600 mt-1">
                        {method.description}
                      </div>

                      {formData.paymentMethod === method.id &&
                        method.id !== "cash" && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            className="mt-4 p-4 bg-gray-50 rounded-lg"
                          >
                            {(method.id === "bkash" ||
                              method.id === "nagad") && (
                              <>
                                <div className="font-semibold text-gray-800 mb-2">
                                  {method.name} Number:
                                  <span className="text-[#940000] ml-2 text-lg">
                                    {method.number}
                                  </span>
                                </div>
                                <div className="mb-3">
                                  <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Transaction ID *
                                  </label>
                                  <input
                                    type="text"
                                    name="transactionId"
                                    value={formData.transactionId}
                                    onChange={handleInputChange}
                                    placeholder="Enter your transaction ID"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#940000] focus:border-transparent"
                                    required={method.id !== "cash"}
                                  />
                                </div>
                              </>
                            )}

                            {method.id === "bank" && (
                              <>
                                <div className="mb-3">
                                  <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Transaction ID / Receipt Number *
                                  </label>
                                  <input
                                    type="text"
                                    name="transactionId"
                                    value={formData.transactionId}
                                    onChange={handleInputChange}
                                    placeholder="Enter bank transaction ID"
                                    className="w-full px-4 py-2 text-gray-800 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#940000] focus:border-transparent"
                                    required={method.id !== "cash"}
                                  />
                                </div>

                                {/* Bank Details Section - With Icons */}
                                <div className="mt-6 p-5 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-200 shadow-sm">
                                  <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 bg-[#940000]/10 rounded-lg flex items-center justify-center">
                                      <svg
                                        className="w-6 h-6 text-[#940000]"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                      >
                                        <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth={2}
                                          d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                                        />
                                      </svg>
                                    </div>
                                    <h4 className="font-bold text-gray-800 text-lg uppercase">
                                      Banck Account Details
                                    </h4>
                                  </div>

                                  <div className="space-y-3">
                                    {/* Bank Name */}
                                    <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-100">
                                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                                        <span className="text-blue-600 font-bold text-sm">
                                          B
                                        </span>
                                      </div>
                                      <div className="flex-1">
                                        <p className="text-xs text-gray-500 uppercase">
                                          bank name
                                        </p>
                                        <p className="font-semibold text-gray-800">
                                          Agrani Bank Limited
                                        </p>
                                      </div>
                                    </div>

                                    {/* Account Holder */}
                                    <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-100">
                                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                                        <svg
                                          className="w-4 h-4 text-green-600"
                                          fill="none"
                                          stroke="currentColor"
                                          viewBox="0 0 24 24"
                                        >
                                          <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                          />
                                        </svg>
                                      </div>
                                      <div className="flex-1">
                                        <p className="text-xs text-gray-500 uppercase">
                                          Account holder name
                                        </p>
                                        <p className="font-semibold text-gray-800">
                                          MD MASUD RANA
                                        </p>
                                      </div>
                                    </div>

                                    {/* Account Number */}
                                    <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-100">
                                      <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                                        <span className="text-purple-600 font-bold text-sm">
                                          #
                                        </span>
                                      </div>
                                      <div className="flex-1">
                                        <p className="text-xs text-gray-500 uppercase">
                                          Account number
                                        </p>
                                        <p className="font-semibold text-gray-800 font-mono">
                                          0200020330838
                                        </p>
                                      </div>
                                      <button
                                        type="button"
                                        onClick={() => {
                                          navigator.clipboard.writeText(
                                            "0200020330838"
                                          );
                                          alert("Account number copied!");
                                        }}
                                        className="text-[#940000] hover:text-[#7a0000] transition-colors"
                                      >
                                        <svg
                                          className="w-5 h-5"
                                          fill="none"
                                          stroke="currentColor"
                                          viewBox="0 0 24 24"
                                        >
                                          <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                                          />
                                        </svg>
                                      </button>
                                    </div>

                                    {/* Branch */}
                                    <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-100">
                                      <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                                        <svg
                                          className="w-4 h-4 text-yellow-600"
                                          fill="none"
                                          stroke="currentColor"
                                          viewBox="0 0 24 24"
                                        >
                                          <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                          />
                                          <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                          />
                                        </svg>
                                      </div>
                                      <div className="flex-1">
                                        <p className="text-xs text-gray-500 uppercase">
                                          branch
                                        </p>
                                        <p className="font-semibold text-gray-800">
                                          NALUA BAZAR BR 0039
                                        </p>
                                      </div>
                                    </div>
                                  </div>

                                  {/* Important Notes */}
                                  <div className="mt-5 pt-4 border-t border-gray-300">
                                    <div className="flex items-start gap-2">
                                      <svg
                                        className="w-5 h-5 text-[#940000] mt-0.5 flex-shrink-0"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                      >
                                        <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth={2}
                                          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                      </svg>
                                      <div>
                                        <h5 className="font-medium text-gray-700 mb-1">
                                          Payment Instructions:
                                        </h5>
                                        <ul className="space-y-1 text-sm text-gray-600">
                                          <li className="flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 bg-[#940000] rounded-full"></span>
                                            Send money to the above account
                                          </li>
                                          <li className="flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 bg-[#940000] rounded-full"></span>
                                            Enter transaction ID/receipt number
                                            above
                                          </li>
                                          <li className="flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 bg-[#940000] rounded-full"></span>
                                            Save the transaction screenshot
                                          </li>
                                          <li className="flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 bg-[#940000] rounded-full"></span>
                                            Write your phone number as reference
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </>
                            )}
                          </motion.div>
                        )}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Order Summary Card */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-semibold mb-4">Order Total</h2>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>৳{totalAmount}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span className="text-green-600">Free</span>
                </div>
                <div className="border-t pt-3 flex justify-between text-xl font-bold">
                  <span>Total</span>
                  <span className="text-[#940000]">৳{totalAmount}</span>
                </div>
              </div>

              <motion.button
                type="submit"
                disabled={loading}
                className="w-full bg-[#940000] text-white py-4 rounded-lg font-semibold text-lg mt-6 hover:bg-[#7a0000] transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                whileHover={!loading ? { scale: 1.02 } : {}}
                whileTap={!loading ? { scale: 0.98 } : {}}
              >
                {loading ? (
                  <div className="flex items-center justify-center">
                    <svg
                      className="animate-spin h-5 w-5 mr-3 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Processing Order...
                  </div>
                ) : (
                  `Place Order - ৳${totalAmount}`
                )}
              </motion.button>

              <p className="text-center text-gray-500 text-sm mt-4">
                By placing your order, you agree to our Terms & Conditions
              </p>
            </div>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
