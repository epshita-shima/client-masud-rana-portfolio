import React, { useRef } from "react";
// import emailjs from "@emailjs/browser";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import swal from "sweetalert";

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
   <div className="container mx-0">
     <div  className="mt-12 flex justify-between flex-wrap"
    style={{backgroundImage:"url('https://i.pinimg.com/736x/d6/27/56/d62756dac8380c68bf7e8bd8bcc8c5bd.jpg')"}}
    >

      <div className="w-full sm:w-[20%]">
        <h2 className=" font-serif font-bold sm:font-normal text-black mb-6 text-[20px] sm:text-[16px]">Contact Me</h2>
      </div>
      <div className="w-full sm:w-[80%] bg-white ">
        <div className="bg-white p-8 pt-4 sm:pt-8 rounded-lg shadow-lg w-full max-w-full sm:max-w-[85%] ">
          <Formik
            initialValues={{ name: "", email: "", message: "" }}
            validationSchema={validationSchema}
            onSubmit={sendEmail}
          >
            {({ isSubmitting }) => (
              <Form ref={form} >
                {/* Name Field */}
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block font-semibold text-gray-700"
                  >
                    Name
                  </label>
                  <Field
                    type="text"
                    name="name"
                    placeholder='Enter your name'
                    id="name"
                    className="mt-1 p-2 w-full text-black border rounded focus:outline-none focus:ring-2 focus:ring-[#0CC0DF] bg-white"
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                {/* Email Field */}
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block font-semibold text-gray-700"
                  >
                    Email
                  </label>
                  <Field
                    type="email"
                    name="email"
                    placeholder='Enter your email'
                    id="email"
                    className="mt-1 p-2 w-full text-black border rounded focus:outline-none focus:ring-2 focus:ring-[#0CC0DF] bg-white"
                  />
                  <ErrorMessage
                    name="email"
                   
                    component="div"
                    className="text-red-500 text-sm "
                  />
                </div>

                {/* Message Field (Textarea) */}
                <div className="mb-4">
                  <label
                    htmlFor="message"
                    className="block font-semibold text-gray-700"
                  >
                    Message
                  </label>
                  <Field
                    as="textarea"
                    name="message"
                    placeholder='Type your message'
                    id="message"
                    rows="3"
                    className="mt-1 p-2 w-full border text-black rounded focus:outline-none focus:ring-2 focus:ring-[#0CC0DF] bg-white"
                  />
                  <ErrorMessage
                    name="message"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                {/* Submit Button */}
                <div className="flex justify-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-[50%]   bg-[#0CC0DF]  text-white p-2 rounded hover:bg-[#0CC0DF] transition duration-200`}
                  >
                    {isSubmitting ? "Submitting..." : "Submit"}
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
   </div>
  );
};

export default Contact;