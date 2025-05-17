"use client";

import { useState } from "react";
import Link from "next/link";
import { MessageSquare, House, Phone, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FadeInOnScroll } from "../FadeInOnScroll";

export const ContactForm = () => {
  const contactHeadLine = ["Get", "in", "touch", "with", "us", "today!"];
  const contactContent = [
    "Whatever",
    "you",
    "need,",
    "whenever",
    "you",
    "need",
    "it,",
    "our",
    "team",
    "is",
    "here",
    "to",
    "help",
    "dedicated",
    "to",
    "supporting",
    "you",
    "every",
    "step",
    "of",
    "the",
    "way.",
  ];
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    newsletter: false,
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    }); 
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        // Success
        setFormStatus({
          submitted: true,
          success: true,
          message: "Thank you! Your message has been sent successfully.",
        });

        // Reset form
        setFormData({
          name: "",
          email: "",
          message: "",
          newsletter: false,
        });
      } else {
        // API returned an error
        setFormStatus({
          submitted: true,
          success: false,
          message: data.error || "Something went wrong. Please try again.",
        });
      }
    } catch (error) {
      // Network or other error
      setFormStatus({
        submitted: true,
        success: false,
        message: "Unable to send message. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const redirectToWhatsApp = () => {
    // The phone number should be in international format without any symbols
    const phoneNumber = "+916282551125"; // Replace with your actual WhatsApp 
    
    const email = formData.email;

    // Create a pre-filled message using the form data
const message = `Hello, my name is ${formData.name}. I'm from ${formData.place} and I hold a qualification in ${formData.qualification}. I'd like to inquire about joining the software development program. ${formData.message}`;
    // Encode the message for URL
    const encodedMessage = encodeURIComponent(message);

    // Create the WhatsApp URL
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="bg-gradient-to-r  from-white via-[#f6e7ff] to-white pb-16 pt-[150px] ">
      <div className="max-w-7xl mx-auto px-6">
        {/* Breadcrumb navigation */}
        <div className="w-full">
          <motion.nav
            className="flex mb-6 items-center"
            initial={{ opacity: 0, filter: "blur(8px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ delay: 0.4 }}
          >
            <Link href="/" className="hover:text-gray-900">
              <House color="#454545" size={20} strokeWidth={1.25} />
            </Link>
            <span className="mx-2">
              <ChevronRight color="#454545" strokeWidth={1.25} />
            </span>
            <span className="text-gray-600 font-medium">Contact Us</span>
          </motion.nav>

          <div className="flex flex-col lg:flex-row gap-12 justify-between">
            {/* Left side content */}
            <div className="lg:w-1/2">
              <h1 className="lg:text-5xl md:text-4xl sm:text-4xl text-3xl font-semibold text-black mb-6">
                {contactHeadLine.map((word, index) => (
                  <motion.span
                    key={index}
                    className="inline-block mr-2"
                    initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.1,
                      ease: "easeOut",
                    }}
                  >
                    {word}
                  </motion.span>
                ))}
              </h1>
              <p className="text-gray-700 mb-12 text-md font-medium">
                {contactContent.map((word, index) => (
                  <motion.span
                    key={index}
                    className="inline-block mr-1"
                    initial={{ opacity: 0, filter: "blur(8px)" }}
                    animate={{ opacity: 1, filter: "blur(0px)" }}
                    transition={{
                      duration: 0.1,
                      delay: contactHeadLine.length * 0.1 + index * 0.1,
                      ease: "easeIn",
                    }}
                  >
                    {word}
                  </motion.span>
                ))}
              </p>

              {/* Contact methods */}
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
                initial={{ opacity: 0, filter: "blur(8px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                transition={{ delay: 0.4 }}
              >
                {/* Message Us section */}
                <div>
                  <FadeInOnScroll direction="up" delay={0.1}>
                  <div
                    className="bg-white w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                    style={{
                      boxShadow:
                        "0 15px 30px rgba(0,0,0,0.1), -20px 0 30px rgba(0,0,0,0.05)",
                      border: "1px solid rgba(255,255,255,0.2)",
                    }}
                  >
                    <MessageSquare className="w-5 h-5 text-gray-500" />
                  </div>
                  </FadeInOnScroll>
                    <FadeInOnScroll direction="up" delay={0.2}>
                  <h3 className="text-2xl font-medium text-black mb-3">
                    Message Us
                  </h3>
                  </FadeInOnScroll>
                    <FadeInOnScroll direction="up" delay={0.3}>
                  <p className="text-gray-600 text-sm mb-4">
                    Use our online chat system to message us and get support.
                  </p>
                  </FadeInOnScroll>
                  <div className="h-px bg-gray-200 my-4 w-full"></div>
                    <FadeInOnScroll direction="up" delay={0.4}>
                  <Link
                    href="mailto:contact@sdec.info?subject=Hello&body=I%20want%20to%20contact%20you."
                    className="text-gray-900 underline"
                  >
                    contact@sdec.info
                  </Link>
                  </FadeInOnScroll>
                </div>

                {/* Call Us section */}
                <div>
                    <FadeInOnScroll direction="up" delay={0.1}>
                  <div
                    className="bg-white w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                    style={{
                      boxShadow:
                        "0 15px 30px rgba(0,0,0,0.1), -20px 0 30px rgba(0,0,0,0.05)",
                      border: "1px solid rgba(255,255,255,0.2)",
                    }}
                  >
                    <Phone className="w-5 h-5 text-gray-500" />
                  </div>
                  </FadeInOnScroll>
                    <FadeInOnScroll direction="up" delay={0.2}>
                  <h3 className="text-2xl font-medium text-gray-900 mb-3">
                    Call Us
                  </h3>
                  </FadeInOnScroll>
                    <FadeInOnScroll direction="up" delay={0.3}>
                  <p className="text-gray-600 text-sm mb-4">
                    Let’s chat — nothing better than talking to another human
                    being.
                  </p>
                  </FadeInOnScroll>
                  <div className="h-px bg-gray-200 my-4 w-full"></div>
                  <FadeInOnScroll direction="up" delay={0.4}>
                  <Link
                    href="tel:+917356190621"
                    className="text-gray-900 underline"
                  >
                    +91 7356190621
                  </Link>
                  </FadeInOnScroll>
                </div>
              </motion.div>
            </div>

            {/* Right side form */}
            <motion.div
              className="lg:w-1/2"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.4,
                scale: { type: "spring", visualDuration: 0.8, bounce: 0.2 },
              }}
            >
              <div
                className="bg-gradient-to-b from-[#faf0ff] to-[#ffffff] backdrop-blur-sm rounded-3xl shadow-lg p-6  mx-auto relative z-10"
                style={{
                  boxShadow:
                    "0 15px 30px rgba(0,0,0,0.1), -20px 0 30px rgba(0,0,0,0.05)",
                  border: "3px solid black",
                }}
              >
                {formStatus.submitted && (
                  <div
                    className={`mb-6 p-4 rounded-xl ${
                      formStatus.success
                        ? "bg-green-50 text-green-800"
                        : "bg-red-50 text-red-800"
                    }`}
                  >
                    {formStatus.message}
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        className="w-full px-4 py-2 bg-[#f0f4f9] rounded-2xl text-black placeholder-gray-400 outline-none"
                        onChange={handleChange}
                        value={formData.name}
                        required
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        className="w-full px-4 py-2 bg-[#f0f4f9] rounded-2xl  placeholder-gray-400  text-black outline-none"
                        onChange={handleChange}
                        value={formData.email}
                        required
                      />
                    </div>
                  </div>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <input
                        type="text"
                        name="place"
                        placeholder="Your Place"
                        className="w-full px-4 py-2 bg-[#f0f4f9] rounded-2xl text-black placeholder-gray-400 outline-none"
                        onChange={handleChange}
                        value={formData.place}
                        required
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        name="qualification"
                        placeholder="Your Qualification"
                        className="w-full px-4 py-2 bg-[#f0f4f9] rounded-2xl  placeholder-gray-400  text-black outline-none"
                        onChange={handleChange}
                        value={formData.qualification}
                        required
                      />
                    </div>
                  </div>
                  <div className="mb-5">
                    <textarea
                      name="message"
                      placeholder="How Can We Help?"
                      rows="8"
                      className="w-full px-5 py-3 min-h-[216] bg-[#f0f4f9] rounded-2xl text-black placeholder-gray-400 outline-none  resize-y"
                      onChange={handleChange}
                      value={formData.message}
                      required
                    ></textarea>
                  </div>
                  <div className="flex items-start mb-6">
                    <div className="flex items-center h-5">
                      <input
                        id="newsletter"
                        name="newsletter"
                        type="checkbox"
                        className="w-4 h-4 accent-green-500 border border-gray-300 rounded"
                        onChange={handleChange}
                        checked={formData.newsletter}
                      />
                    </div>
                    <label
                      htmlFor="newsletter"
                      className="ml-2 text-sm text-gray-600"
                    >
                      Subscribe to Newsletter
                    </label>
                  </div>
                  <div className="flex justify-center">
                    {/* <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-[48%] group bg-gradient-to-br from-[#7f7e80] to-black text-white font-medium py-3 px-4 rounded-xl cursor-pointer"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </button> */}
                    <button
                      onClick={redirectToWhatsApp}
                      type="button"
                      className="w-[68%] flex justify-center group bg-gradient-to-br from-[#323232] to-black text-white font-medium py-3 px-4 rounded-xl cursor-pointer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-2 hidden sm:block"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
              
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                      </svg>
                      Chat on Whatsapp
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};
