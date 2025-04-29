"use client"
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { X } from 'lucide-react';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="flex justify-between items-center px-8 py-4 bg-emerald-200">
        <Link href="/" className="flex items-center text-2xl font-bold text-black">
          <div className="mr-2 text-green-800"> 
            <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.5 12.5L12 16.5L4.5 12.5M19.5 8.5L12 12.5L4.5 8.5L12 4.5L19.5 8.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          CourseSite
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-black">
          <Link href="/courses" className="text-lg">
            Courses
          </Link>
          <Link href="/reviews" className="text-lg">
            Reviews
          </Link>
          <Link href="/contact" className="text-lg">
            Contact
          </Link>
        </div>
        
        <Link href="/join" className="hidden md:block text-lg text-black">
          Join Now
        </Link>
        
        {/* Mobile Menu Button */}

        <button 
          className="block md:hidden" 
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 12H21M3 6H21M3 18H21" stroke="currentColor" color='black' strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </nav>
      
      {/* Mobile Menu Overlay */}
      {/* Mobile Sidebar Menu - Only shows on small screens (below md breakpoint) */}
      <div
        className={`lg:hidden fixed inset-0 bg-white shadow-xl z-50 flex flex-col w-full rounded-b-3xl sm:max-h-[610px] max-h-[590px] p-4 transition-transform duration-300 ease-in-out transform ${
          mobileMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {mobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-50 p-4">
          <div className="flex justify-between items-center mb-6">
            <Link href="/" className="flex items-center text-2xl font-bold text-black">
              <div className="mr-2">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.5 12.5L12 16.5L4.5 12.5M19.5 8.5L12 12.5L4.5 8.5L12 4.5L19.5 8.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              CourseSite
            </Link>
            <button 
            className='text-black'
              onClick={toggleMobileMenu}
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>
          
          <div className="flex flex-col text-black">
            <Link href="/courses" className="py-4 border-b border-gray-100 text-lg">
              Courses
            </Link>
            <Link href="/contact" className="py-4 border-b border-gray-100 text-lg">
              Contact
            </Link>
            <Link href="/reviews" className="py-4 border-b border-gray-100 text-lg">
              Reviews
            </Link>
            <Link href="/join" className="py-4 border-b border-gray-100 text-lg">
              Join Now
            </Link>
          </div>
        </div>
      )}
      </div>
      
    </>
  );
};

export default Navbar;
