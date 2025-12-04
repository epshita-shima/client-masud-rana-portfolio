import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import swal from "sweetalert";
import { motion } from "framer-motion";

const Contact = () => {
  const form = useRef();

  // EmailJS Configuration - CORRECTED
  const EMAILJS_CONFIG = {
    SERVICE_ID: "service_dwdjhsb", // EmailJS service ID
    CUSTOMER_TEMPLATE_ID: "template_0nzw8sf", // Contact Us template
    ADMIN_TEMPLATE_ID: "template_3tvekct", // Auto-Reply template
    PUBLIC_KEY: "SMNywnq1D-NLZBFPL", // EmailJS public key
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone: Yup.string().matches(/^[0-9+\-\s()]+$/, "Invalid phone number"),
    service: Yup.string().required("Please select a service"),
    budget: Yup.string().required("Please select your budget"),
    message: Yup.string().required("Message is required"),
  });

  const sendEmail = async (values, { setSubmitting, resetForm }) => {
    try {
      console.log("Sending email with values:", values);
      
      // 1. Send to customer (Auto-Reply - template_3tvekct)
        const customerResult = await emailjs.send(
      "service_dwdjhsb", // আপনার SERVICE_ID
      "template_3tvekct", // Auto-Reply Template ID
      {
        to_name: values.name,        // Template এর {{to_name}}
        to_email: values.email,      // Template এর {{to_email}} - এখানে খালি হবে না
        from_name: values.name,      // Template এর {{from_name}}
        from_email: values.email,    // Template এর {{from_email}}
        phone: values.phone || "Not provided",
        service: values.service,
        budget: values.budget,
        message: values.message,
        date: new Date().toLocaleDateString('en-BD'),
        time: new Date().toLocaleTimeString('en-BD'),
        reply_to: "masudrana.free24@gmail.com",
      },
      "SMNywnq1D-NLZBFPL" // আপনার PUBLIC_KEY
    );

      console.log("Auto-Reply sent to customer:", customerResult.text);

      // 2. Send to yourself (Contact Us - template_0nzw8sf)
     const adminResult = await emailjs.send(
      "service_dwdjhsb", // আপনার SERVICE_ID
      "template_0nzw8sf", // Contact Us Template ID
      {
        to_name: "Masud Rana",                   // Template এর {{to_name}}
        to_email: "masudrana.free24@gmail.com",  // Template এর {{to_email}} - এখানে খালি হবে না
        client_name: values.name,
        client_email: values.email,
        client_phone: values.phone || "Not provided",
        service_requested: values.service,
        budget_range: values.budget,
        project_details: values.message,
        date: new Date().toLocaleDateString('en-BD'),
        time: new Date().toLocaleTimeString('en-BD'),
        subject: `New Project Inquiry - ${values.service}`
      },
      "SMNywnq1D-NLZBFPL" // আপনার PUBLIC_KEY
    );
    

      console.log("Notification sent to admin:", adminResult.text);

      // Success message
      swal({
        title: "Message Sent Successfully! 🎉",
        text: "Thank you! I've received your message and will contact you within 24 hours. Check your email for confirmation.",
        icon: "success",
        buttons: {
          confirm: {
            text: "OK",
            value: true,
            visible: true,
            className: "bg-[#940000]"
          }
        }
      });

      setSubmitting(false);
      resetForm();

    } catch (error) {
      console.error("Email sending error:", error);
      
      let errorMessage = "Something went wrong. Please try again.";
      
      // Specific error messages
      if (error.status === 400) {
        errorMessage = "Invalid email parameters. Please check your information.";
      } else if (error.status === 401) {
        errorMessage = "Email service authentication failed.";
      } else if (error.status === 403) {
        errorMessage = "Email sending quota exceeded. Please try again later.";
      } else if (error.text) {
        errorMessage = `EmailJS Error: ${error.text}`;
      }
      
      swal({
        title: "Oops!",
        text: errorMessage,
        icon: "error",
        buttons: {
          confirm: {
            text: "Try Again",
            value: true,
            visible: true,
            className: "bg-red-500"
          },
          contact: {
            text: "Contact Directly",
            value: "contact",
            visible: true,
            className: "bg-gray-500"
          }
        }
      }).then((value) => {
        if (value === "contact") {
          window.location.href = "mailto:masudranafree24@gmail.com";
        }
        setSubmitting(false);
      });
    }
  };

  // Test email function (temporary)
  const sendTestEmail = () => {
    emailjs
      .send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.CUSTOMER_TEMPLATE_ID,
        {
          to_name: "Masud Rana",
          to_email: "masudranafree24@gmail.com",
          client_name: "Test User",
          client_email: "test@example.com",
          client_phone: "+880 1234567890",
          service_requested: "Logo Design",
          budget_range: "৳5,000 - ৳10,000",
          project_details: "This is a test message for EmailJS integration.",
          date: new Date().toLocaleDateString(),
          subject: "Test Project Inquiry"
        },
        EMAILJS_CONFIG.PUBLIC_KEY
      )
      .then((result) => {
        console.log("Test email successful:", result.text);
        swal({
          title: "Test Email Sent! ✅",
          text: "Check your EmailJS dashboard and email inbox.",
          icon: "success",
          button: "OK",
        });
      })
      .catch((error) => {
        console.error("Test email failed:", error);
        swal({
          title: "Test Failed",
          text: error.text || error.message,
          icon: "error",
          button: "OK",
        });
      });
  };

  const serviceOptions = [
    "Logo Design",
    "Brand Identity",
    "Business Cards",
    "Social Media Graphics",
    "Banner Design",
    "Packaging Design",
    "Other",
  ];

  const budgetOptions = [
    "৳1,000 - ৳3,000",
    "৳3,000 - ৳5,000",
    "৳5,000 - ৳10,000",
    "৳10,000 - ৳20,000",
    "৳20,000+",
    "Not Sure",
  ];

  const socialLinks = {
    Fiverr: "https://www.fiverr.com/s/2KlPZLL",
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Let's <span className="text-[#940000]">Create</span> Together
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Ready to bring your vision to life? Get in touch and let's discuss your project
          </motion.p>

          {/* EmailJS Status Indicator */}
          <motion.div
            className="mt-4 inline-flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
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
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="text-sm">
              Contact form is active - I'll respond within 24 hours
            </span>
          </motion.div>  
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Contact Card */}
            <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Get In Touch
              </h3>

              <div className="space-y-4">
                <div className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
                  <div className="w-12 h-12 bg-[#940000] rounded-full flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Phone / WhatsApp</p>
                    <p className="font-semibold text-gray-800">
                      +880 1680128589
                    </p>
                    <p className="text-xs text-gray-500 mt-1">24/7 Available</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
                  <div className="w-12 h-12 bg-[#940000] rounded-full flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Primary Email</p>
                    <p className="font-semibold text-gray-800">
                      masudranafree24@gmail.com
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      Fastest response
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
                  <div className="w-12 h-12 bg-[#940000] rounded-full flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Response Time</p>
                    <p className="font-semibold text-gray-800">
                      Within 24 Hours
                    </p>
                    <p className="text-xs text-gray-500 mt-1">Usually faster</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-600 mb-4">
                  Find me on marketplace
                </p>
                <div className="flex gap-3">
                  {["Fiverr"].map((social) => (
                    <motion.a
                      key={social}
                      href={socialLinks[social]}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-gradient-to-r from-[#940000] to-[#7a0000] text-white rounded-lg flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300 font-semibold"
                      whileHover={{
                        scale: 1.05,
                        y: -2,
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="text-sm">Hire on {social}</span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>

            {/* Response Time Guarantee */}
            <div className="bg-gradient-to-r from-[#940000] to-[#7a0000] rounded-2xl p-6 text-white shadow-xl">
              <h4 className="text-lg font-semibold mb-4">Response Guarantee</h4>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
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
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold">24-Hour Response</p>
                    <p className="text-sm opacity-90">
                      Guaranteed reply within 24 hours
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
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
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold">Free Consultation</p>
                    <p className="text-sm opacity-90">
                      30-minute free project discussion
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
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
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold">Project Updates</p>
                    <p className="text-sm opacity-90">
                      Regular progress updates
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 text-gray-800">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    Start Your Project
                  </h3>
                  <p className="text-gray-600">
                    Fill out the form and I'll get back to you within 24 hours
                  </p>
                </div>
                <div className="flex items-center gap-2 bg-green-50 text-green-700 px-3 py-1 rounded-full">
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
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-sm font-medium">Active</span>
                </div>
              </div>

              <Formik
                initialValues={{
                  name: "",
                  email: "",
                  phone: "",
                  service: "",
                  budget: "",
                  message: "",
                }}
                validationSchema={validationSchema}
                onSubmit={sendEmail}
              >
                {({ isSubmitting, values, handleSubmit }) => (
                  <Form className="space-y-6" onSubmit={handleSubmit}>
                    {/* Personal Information */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Full Name *
                        </label>
                        <Field
                          type="text"
                          name="name"
                          id="name"
                          placeholder="Enter your full name"
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#940000] focus:border-transparent transition-all duration-300"
                        />
                        <ErrorMessage
                          name="name"
                          component="div"
                          className="text-red-500 text-sm mt-1"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Email Address *
                        </label>
                        <Field
                          type="email"
                          name="email"
                          id="email"
                          placeholder="Enter your email"
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#940000] focus:border-transparent transition-all duration-300"
                        />
                        <ErrorMessage
                          name="email"
                          component="div"
                          className="text-red-500 text-sm mt-1"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Phone Number
                        </label>
                        <Field
                          type="tel"
                          name="phone"
                          id="phone"
                          placeholder="+880 1XXX-XXXXXX"
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#940000] focus:border-transparent transition-all duration-300"
                        />
                        <ErrorMessage
                          name="phone"
                          component="div"
                          className="text-red-500 text-sm mt-1"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="service"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Service Needed *
                        </label>
                        <Field
                          as="select"
                          name="service"
                          id="service"
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#940000] focus:border-transparent transition-all duration-300"
                        >
                          <option value="">Select a service</option>
                          {serviceOptions.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </Field>
                        <ErrorMessage
                          name="service"
                          component="div"
                          className="text-red-500 text-sm mt-1"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="budget"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Project Budget *
                      </label>
                      <Field
                        as="select"
                        name="budget"
                        id="budget"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#940000] focus:border-transparent transition-all duration-300"
                      >
                        <option value="">Select your budget</option>
                        {budgetOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </Field>
                      <ErrorMessage
                        name="budget"
                        component="div"
                        className="text-red-500 text-sm mt-1"
                      />
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <label
                          htmlFor="message"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Project Details *
                        </label>
                        <span className="text-xs text-gray-500">
                          Be specific for better estimation
                        </span>
                      </div>
                      <Field
                        as="textarea"
                        name="message"
                        id="message"
                        rows="6"
                        placeholder="Tell me about your project, goals, timeline, and any specific requirements... Include:
                        - Project purpose
                        - Target audience  
                        - Color preferences
                        - Any references or examples
                        - Deadline expectations"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#940000] focus:border-transparent transition-all duration-300 resize-none"
                      />
                      <ErrorMessage
                        name="message"
                        component="div"
                        className="text-red-500 text-sm mt-1"
                      />
                    </div>

                    {/* Submit Button */}
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-[#940000] to-[#7a0000] text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
                      whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="relative z-10">
                        {isSubmitting ? (
                          <div className="flex items-center justify-center gap-2">
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            Sending Message...
                          </div>
                        ) : (
                          "Send Message & Start Project"
                        )}
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-[#7a0000] to-[#940000] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </motion.button>

                    {/* Privacy Note */}
                    <p className="text-xs text-gray-500 text-center">
                      Your information is secure and will only be used to
                      contact you regarding your project. I never share your
                      details with third parties.
                    </p>
                  </Form>
                )}
              </Formik>
            </div>

            {/* Statistics */}
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                {
                  label: "Response Time",
                  value: "24h",
                  color: "bg-green-100 text-green-800",
                },
                {
                  label: "Projects Done",
                  value: "50+",
                  color: "bg-blue-100 text-blue-800",
                },
                {
                  label: "Client Satisfaction",
                  value: "100%",
                  color: "bg-purple-100 text-purple-800",
                },
                {
                  label: "Revision Rounds",
                  value: "Unlimited",
                  color: "bg-orange-100 text-orange-800",
                },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className={`${stat.color} p-4 rounded-xl text-center shadow-sm`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                >
                  <div className="text-2xl font-bold mb-1">{stat.value}</div>
                  <div className="text-sm font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;