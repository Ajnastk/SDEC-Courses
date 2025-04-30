// components/Footer.jsx
import Link from 'next/link';
import Image from 'next/image';
import "../app/globals.css"
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-white via-[#f6e7ff] to-white pt-20">
      {/* Main Footer Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        {/* Logo */}
        <div className="mb-8">
          <Link href="/">
            <div className="flex items-center">
              <div className="transform rotate-45 w-6 h-6 bg-white mr-2"></div>
              <span className="text-xl font-medium text-black">CourseSite</span>
            </div>
          </Link>
        </div>
        
        {/* Headline */}
        <h2 className="text-4xl  font-poppins text-center mb-8 text-black">
          Boost your Learning & Knowledge with<br />
          CourseSite Now
        </h2>
        
        {/* CTA Button */}
        <button  className="relative overflow-hidden w-[200px] group py-2 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition cursor-pointer mb-7"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 }} // Optional: adjust delay as needed
            >
              <span className="block relative h-10  w-full">
                <span className="absolute inset-0 flex items-center justify-center transition-all duration-300 transform group-hover:translate-y-full">
                  Start Learning Now
                </span>
                <span className="absolute inset-0 flex items-center justify-center transition-all duration-300 transform -translate-y-full group-hover:translate-y-0">
                  Start Learning Now
                </span>
              </span>
        </button>
        
        {/* Path Text with Avatar */}
        <div className="flex items-center mb-12">
          <p className="mr-2 text-black">Your Path to Becoming a Web Wizard</p>
          <div className="w-8 h-8 rounded-full overflow-hidden">
            <Image 
              src="/Images/rahib.jpg" 
              alt="Avatar" 
              width={32} 
              height={32}
              className="rounded-full"
            />
          </div>
        </div>
        
        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-8 mb-1 text-black">
          <Link href="/benefits" className="hover:underline">Benefits</Link>
          <Link href="/courses" className="hover:underline">Courses</Link>
          <Link href="/contact" className="hover:underline">Contact</Link>
          <Link href="/reviews" className="hover:underline">Reviews</Link>
          <Link href="/newsletter" className="hover:underline">Join Our news Letter</Link>
          <Link href="/notify" className="border border-black rounded-full my-[-8px] px-4 py-2 hover:bg-gray-100">
            Notify Me
          </Link>
        </nav>
      </div>
      
      {/* Bottom Bar with Copyright*/}
      <div className="mt-8 pt-[20px] border-t  border-gray-200">
        <div className="text-center pb-10">
          <p className="text-gray-600 ">CourseSite © 2025. Designed by FrameBase</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;