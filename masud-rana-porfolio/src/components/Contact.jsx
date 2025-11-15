import React, { useRef } from "react";
// import emailjs from "@emailjs/browser";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import swal from "sweetalert";
import { motion } from "framer-motion";

const Contact = () => {
  const form = useRef();
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone: Yup.string().matches(/^[0-9+\-\s()]+$/, "Invalid phone number"),
    service: Yup.string().required("Please select a service"),
    budget: Yup.string().required("Please select your budget"),
    message: Yup.string().required("Message is required"),
  });

  const sendEmail = (values, { setSubmitting, resetForm }) => {
    // emailjs
    //   .sendForm(
    //     'service_whifq85',
    //     'template_xzhn5sk',
    //     form.current,
    //     'jxrJJXO1pe8kitiEN',
    //   )
    //   .then(
    //     () => {
    //       swal({
    //         title: "Thanks",
    //         text: "I will contact with you ASAP.",
    //         icon: "success",
    //         button: "OK",
    //       });
    //       setSubmitting(false);
    //       resetForm();
    //     },
    //     (error) => {
    //       console.log("FAILED...", error);
    //       setSubmitting(false);
    //     }
    //   );
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
    Twitter: "https://x.com/MasudRana0161",
    Facebook: "https://www.facebook.com/profile.php?id=61580500531550",
    Fiverr: "https://www.fiverr.com/s/2KlPZLL",
    LinkedIn: "http://linkedin.com/in/masud-rana-a6821512a",
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
            Ready to bring your vision to life? Get in touch and let's discuss
            your project
          </motion.p>
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
                    <p className="text-sm text-gray-600">Phone</p>
                    <p className="font-semibold text-gray-800">
                      +880 1XXX-XXXXXX
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
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Email</p>
                    <p className="font-semibold text-gray-800">
                      contact@masudrana.com
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
                  <div>
                    <p className="text-sm text-gray-600">Location</p>
                    <p className="font-semibold text-gray-800">
                      Dhaka, Bangladesh
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-600 mb-4">
                  Follow me on social media
                </p>
                <div className="flex gap-3">
                  {["Twitter", "Facebook", "Fiverr", "LinkedIn"].map(
                    (social) => (
                      <motion.a
                        key={social}
                        href={socialLinks[social]}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-[#940000] hover:text-white transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        title={`Follow on ${social}`}
                      >
                        <span className="text-sm font-semibold">
                          {social[0]}
                        </span>
                      </motion.a>
                    )
                  )}
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-gradient-to-r from-[#940000] to-[#7a0000] rounded-2xl p-6 text-white shadow-xl">
              <h4 className="text-lg font-semibold mb-4">Why Work With Me?</h4>
              <div className="space-y-3">
                {[
                  "✓ 5+ Years Experience",
                  "✓ 50+ Projects Completed",
                  "✓ Quick Turnaround",
                  "✓ Unlimited Revisions",
                  "✓ 24/7 Support",
                ].map((item, index) => (
                  <motion.p
                    key={index}
                    className="text-sm opacity-90"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                  >
                    {item}
                  </motion.p>
                ))}
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
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                Start Your Project
              </h3>
              <p className="text-gray-600 mb-6">
                Fill out the form and I'll get back to you within 24 hours
              </p>

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
                {({ isSubmitting, values }) => (
                  <Form className="space-y-6">
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
                          placeholder="Enter your phone number"
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
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Project Details *
                      </label>
                      <Field
                        as="textarea"
                        name="message"
                        id="message"
                        rows="6"
                        placeholder="Tell me about your project, goals, timeline, and any specific requirements..."
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
                      className="w-full bg-gradient-to-r from-[#940000] to-[#7a0000] text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                      whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {isSubmitting ? (
                        <div className="flex items-center justify-center gap-2">
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          Sending Message...
                        </div>
                      ) : (
                        "Send Message & Start Project"
                      )}
                    </motion.button>
                  </Form>
                )}
              </Formik>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
