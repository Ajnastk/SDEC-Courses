"use client"

import { useState } from 'react';
import Link from 'next/link';
import { MessageSquare, Phone,ChevronRight} from 'lucide-react';
import { motion } from 'framer-motion';

export const ContactForm = () => {
    const contactHeadLine =[
        "Get",
        "in",
        "touch",
        "with",
        "us",
        "today!"
    ]
    const contactContent =[
        "Whatever", "you" ,"need,", "whenever",
        "you", "need", "it,", "our", "team",
        "is", "here","to", "help", "dedicated",
        "to","supporting","you","every","step","of","the","way."
    ]
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    newsletter: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // Reset form or display success message
  };

  return (
    <div className="bg-gray-50 min-h-screen py-10 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb navigation */}
        <nav className="flex items-center mb-12">
          <Link href="/" className="text-gray-600 hover:text-gray-900">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
            </svg>
          </Link>
          {/* <span className="mx-2 text-gray-400">{ChevronRight}</span> */}
          <ChevronRight className='text-black'/>
          <span className="text-black text-sm">Contact Us</span>
        </nav>

        <div className="flex flex-col lg:flex-row justify-between gap-12">
          {/* Left side content */}
          <div className="lg:w-1/2">
            <h1 className="text-4xl md:text-5xl font-semibold text-black mb-6">
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
            </p>

            {/* Contact methods */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Message Us section */}
              <div>
                <div className="bg-gray-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <MessageSquare className="w-6 h-6 text-gray-500" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Message Us</h3>
                <p className="text-gray-600 mb-4">
                  Use our online chat system to message us and get support.
                </p>
                <div className="h-px bg-gray-200 my-4 w-full"></div>
                <Link href="mailto:coursesite@support.com" className="text-gray-900 font-medium hover:underline">
                  coursesite@support.com
                </Link>
              </div>

              {/* Call Us section */}
              <div>
                <div className="bg-gray-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Phone className="w-6 h-6 text-gray-500" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Call us</h3>
                <p className="text-gray-600 mb-4">
                  Let's chat - nothing better than talking to another human being.
                </p>
                <div className="h-px bg-gray-200 my-4 w-full"></div>
                <Link href="tel:+1234567890" className="text-gray-900 font-medium hover:underline">
                  +1234567890
                </Link>
              </div>
            </div>
          </div>

          {/* Right side form */}
          <div className="lg:w-1/2">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-100 focus:border-green-300 outline-none transition"
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
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-100 focus:border-green-300 outline-none transition"
                      onChange={handleChange}
                      value={formData.email}
                      required
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <textarea
                    name="message"
                    placeholder="How Can We Help?"
                    rows="6"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-100 focus:border-green-300 outline-none transition resize-none"
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
                  <label htmlFor="newsletter" className="ml-2 text-sm text-gray-600">
                    Subscribe to Newsletter
                  </label>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gray-800 hover:bg-gray-700 text-white font-medium py-3 px-4 rounded-lg transition duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

