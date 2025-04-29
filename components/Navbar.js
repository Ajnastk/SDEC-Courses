"use client"
import { useState } from 'react';

export default function StaggeredMenuDemo() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Menu items with staggered delay for animations
  const menuItems = [
    { name: "Courses", href: "#", delay: "delay-100" },
    { name: "Contact", href: "#", delay: "delay-200" },
    { name: "Reviews", href: "#", delay: "delay-300" },
    { name: "Join Now", href: "#", delay: "delay-400" }
  ];

  return (
    <div className="relative"> 
      {/* Desktop Navbar */}
      <nav className="flex Lg:justify-around sm:justify-between md:justify-between justify-between px-8 py-4 bg-[#fffefe] z-30 relative">
        <a href="#" className="flex items-center text-2xl text-black font-light">
          <div className="mr-2 text-green-800">
            <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.5 12.5L12 16.5L4.5 12.5M19.5 8.5L12 12.5L4.5 8.5L12 4.5L19.5 8.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          CourseSite
        </a>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-black">
          <a href="#" className="text-lg rounded-[10px] px-6 py-2 transition-colors duration-700 hover:bg-purple-100">Courses</a>
          <a href="#" className="text-lg rounded-[10px] px-6 py-2 transition-colors duration-700 hover:bg-purple-100">Reviews</a>
          <a href="#" className="text-lg rounded-[10px] px-6 py-2 transition-colors duration-700 hover:bg-purple-100">Contact</a>
        </div>
        
        <a href="#" className="hidden md:block text-lg text-black rounded-[10px] px-6 py-2 transition-colors duration-700 hover:bg-purple-100">Join Now</a>
        
        {/* Mobile Menu Button with Animation */}
        <button 
          className="block md:hidden relative z-50 focus:outline-none"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <div className="relative w-6 h-6">
            {/* Three line icon transforms to X */}
            <span 
              className={`absolute h-0.5 w-6 bg-black transform transition duration-300 ease-in-out ${
                mobileMenuOpen ? 'rotate-45 translate-y-2.5' : ''
              }`} 
              style={{top: '30%'}}
            />
            <span 
              className={`absolute h-0.5 w-6 bg-black transform transition duration-300 ease-in-out ${
                mobileMenuOpen ? 'opacity-0' : 'opacity-100'
              }`} 
              style={{top: '60%'}}
            />
            <span 
              className={`absolute h-0.5 w-6 bg-black transform transition duration-300 ease-in-out ${
                mobileMenuOpen ? '-rotate-45 -translate-y-2.5' : ''
              }`} 
              style={{top: '90%'}}
            />
          </div>
        </button>
      </nav>
      
      {/* Mobile Menu - Container that slides down */}
      <div 
        className={`absolute left-0 right-0 bg-[#fffefe] shadow-lg z-20 transform transition-all duration-300 ease-in-out overflow-hidden ${
          mobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
        
      >
        <div className="p-4">
          <div className="flex flex-col text-black">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className={`py-4 border-b-[0.2px] border-b-gray-400  text-lg transform transition-all duration-500 ${item.delay} ${
                  mobileMenuOpen
                    ? 'translate-y-0 opacity-100'
                    : '-translate-y-8 opacity-0'
                }`}
                onClick={(e) => {
                  e.preventDefault(); // Prevent navigation in demo
                }}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
      
      {/* Backdrop overlay when menu is open */}
      <div 
        className={`absolute inset-0 bg-black z-10 transition-opacity duration-300 ${
          mobileMenuOpen ? 'opacity-30' : 'opacity-0 pointer-events-none'
        }`}
        onClick={toggleMobileMenu}
      />
    </div>
  );
}

