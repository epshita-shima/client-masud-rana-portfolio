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

  return (
    <section className="container mx-auto pt-12 px-4 h-screen">
      {/* Title Section */}
      <motion.div
        className="text-center mb-8"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-serif font-bold text-[#222]">Contact Me</h2>
        <p className="text-gray-600 mt-2">I’d love to hear from you — let’s connect!</p>
      </motion.div>

      {/* Contact Form Container */}
      <div className="flex justify-center">
        <motion.div
          className="w-full bg-white p-8 rounded-2xl shadow-xl border border-gray-100"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Formik
            initialValues={{ name: "", email: "", message: "" }}
            validationSchema={validationSchema}
            onSubmit={sendEmail}
          >
            {({ isSubmitting }) => (
              <Form className="w-full space-y-5">
              <div className="flex flex-col sm:flex-row gap-6 items-stretch">
                {/* Left Column */}
                <div className="w-full sm:w-1/2 h-full flex flex-col justify-between gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                      Name
                    </label>
                    <Field
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Enter your name"
                      className="mt-1 p-3 w-full border rounded-xl focus:ring-2 focus:ring-[#0CC0DF] outline-none text-black"
                    />
                    <ErrorMessage name="name" component="div" className="text-red-500 text-sm mt-1" />
                  </div>
            
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <Field
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Enter your email"
                      className="mt-1 p-3 w-full border rounded-xl focus:ring-2 focus:ring-[#0CC0DF] outline-none text-black"
                    />
                    <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
                  </div>
            
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                      Phone
                    </label>
                    <Field
                      type="tel"
                      name="phone"
                      id="phone"
                      placeholder="Enter your phone"
                      className="mt-1 p-3 w-full border rounded-xl focus:ring-2 focus:ring-[#0CC0DF] outline-none text-black"
                    />
                    <ErrorMessage name="phone" component="div" className="text-red-500 text-sm mt-1" />
                  </div>
                </div>
            
                {/* Right Column */}
                <div className="w-full sm:w-1/2 h-full flex flex-col justify-between">
                  <div className="flex-grow flex flex-col justify-between h-full">
                    <div className="flex-grow">
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                        Message
                      </label>
                      <Field
                        as="textarea"
                        name="message"
                        id="message"
                        rows="9"
                        placeholder="Type your message"
                        className="mt-1 p-3 w-full border rounded-xl focus:ring-2 focus:ring-[#0CC0DF] outline-none text-black resize-none h-full"
                      />
                      <ErrorMessage name="message" component="div" className="text-red-500 text-sm mt-1" />
                    </div>
                  </div>
                </div>
              </div>
            
              {/* Submit Button */}
              <div className="text-center">
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-[40%] bg-[#CB4154] hover:bg-[#CB4154] text-white font-semibold p-3 rounded-xl transition duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </motion.button>
              </div>
            </Form>
            
            
            )}
          </Formik>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;