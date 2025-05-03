"use client"

import { useState } from 'react';
import Link from 'next/link';
import { MessageSquare, House, Phone,ChevronRight} from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

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

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        // Success
        setFormStatus({
          submitted: true,
          success: true,
          message: 'Thank you! Your message has been sent successfully.'
        });
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          message: '',
          newsletter: false
        });
      } else {
        // API returned an error
        setFormStatus({
          submitted: true,
          success: false,
          message: data.error || 'Something went wrong. Please try again.'
        });
      }
    } catch (error) {
         // Network or other error
         setFormStatus({
          submitted: true,
          success: false,
          message: 'Unable to send message. Please try again later.'
        });
      } finally {
        setIsSubmitting(false);
      }
    }
  return (
    <div className="bg-gray-50 min-h-screen py-24 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb navigation */}
        <div className="w-full">
          <nav className="flex py-10 items-center">
          <Link href="/" className="hover:text-gray-900">
          <House color="#454545" size={20} strokeWidth={1.25} />
        </Link>
        <span className="mx-2">
          <ChevronRight color="#454545" strokeWidth={1.25} />
        </span>
        <span className="text-gray-600 font-medium">Contact Us</span>
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Message Us section */}
                <div>
                  <div className="bg-white w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                   style={{
                    boxShadow:
                      "0 15px 30px rgba(0,0,0,0.1), -20px 0 30px rgba(0,0,0,0.05)",
                    border: "1px solid rgba(255,255,255,0.2)",
                  }}>
                    <MessageSquare className="w-5 h-5 text-gray-500" />
                  </div>
                  <h3 className="text-2xl font-medium text-black mb-3">Message Us</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Use our online chat system to message us and get support.
                  </p>
                  <div className="h-px bg-gray-200 my-4 w-full"></div>
                  <Link href="mailto:coursesite@support.com" className="text-gray-900 underline">
                    coursesite@support.com
                  </Link>
                </div>
  
                {/* Call Us section */}
                <div>
                  <div className="bg-white w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                     style={{
                      boxShadow:
                        "0 15px 30px rgba(0,0,0,0.1), -20px 0 30px rgba(0,0,0,0.05)",
                      border: "1px solid rgba(255,255,255,0.2)",
                    }}>
                    <Phone className="w-5 h-5 text-gray-500" />
                  </div>
                  <h3 className="text-2xl font-medium text-gray-900 mb-3">Call Us</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Let&pos;s chat - nothing better than talking to another human being.
                  </p>
                  <div className="h-px bg-gray-200 my-4 w-full"></div>
                  <Link href="tel:+1234567890" className="text-gray-900 underline">
                    +1234567890
                  </Link>
                </div>
              </div>
            </div>
  
            {/* Right side form */}
            <div className="lg:w-1/2">
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-lg p-6  mx-auto relative z-10"
               style={{
                boxShadow:
                  "0 15px 30px rgba(0,0,0,0.1), -20px 0 30px rgba(0,0,0,0.05)",
                border: "1px solid rgba(255,255,255,0.2)",
              }}>
                 {formStatus.submitted && (
          <div className={`mb-6 p-4 rounded-xl ${formStatus.success ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
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
                  <div className="mb-5">
                    <textarea
                      name="message"
                      placeholder="How Can We Help?"
                      rows="8"
                      className="w-full px-5 py-3 bg-[#f0f4f9] rounded-2xl text-black placeholder-gray-400 outline-none  resize-none"
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
                    disabled={isSubmitting}
                    className="w-full group bg-gradient-to-br from-[#7f7e80] to-black text-white font-medium py-3 px-4 rounded-xl cursor-pointer"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};