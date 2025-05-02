"use client"
import { useState, useCallback, useMemo, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import "../app/globals.css";
import Now from './Now';

const Footer = () => {
  const [activeLink, setActiveLink] = useState("home");
  const pathname = usePathname();
  const router = useRouter();
  const isHomePage = pathname === '/' || pathname === '/#';

  // Define all footer links with their types and paths
  const footerLinks = useMemo(() => [
    { name: "Benefits", type: isHomePage ? "scroll" : "link", id: "benefits", path: "/#benefits" },
    { name: "Courses", type: "link", id: "courses", path: "/courses" },
    { name: "Contact", type: "link", id: "contact", path: "/contact" },
    { name: "Reviews", type: "link", id: "reviews", path: "/reviews" },
    { name: "Join Our news Letter", type: "link", id: "newsletter", path: "/newsletter" }
  ], [isHomePage]);

  // Handle link click
  const handleLinkClick = useCallback((linkId) => {
    setActiveLink(linkId);
  }, []);

  // Improved scroll to section function
  const scrollToSection = useCallback((id) => {
    // If we're not on the home page, navigate to home page first with the hash
    if (!isHomePage) {
      router.push(`/#${id}`);
      return;
    }
    
    // If we're already on the home page, scroll smoothly
    const section = document.getElementById(id);
    if (section) {
      // Add a small delay to ensure DOM updates are complete
      setTimeout(() => {
        section.scrollIntoView({ 
          behavior: "smooth", 
          block: "start" 
        });
      }, 100);
    }
  }, [isHomePage, router]);

  // Set up intersection observer for scroll sections on homepage
  useEffect(() => {
    // Only set up intersection observer on homepage
    if (!isHomePage) return;
    
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const section = entry.target.id;
          const isTop = window.scrollY < 100;
          setActiveLink(isTop ? "home" : section);
        }
      });
    }, observerOptions);

    // Only observe on homepage
    footerLinks.forEach((link) => {
      if (link.type === "scroll") {
        const section = document.getElementById(link.id);
        if (section) observer.observe(section);
      }
    });

    return () => observer.disconnect();
  }, [isHomePage, footerLinks]);

  return (
    <div className="bg-gradient-to-r from-white via-[#f6e7ff] to-white pt-16">
      {/* Main Footer Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        {/* Logo */}
        <div className="mb-8">
          <Link href="/">
            <div className="flex items-center">
              <div className="mr-2 text-green-800">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.5 12.5L12 16.5L4.5 12.5M19.5 8.5L12 12.5L4.5 8.5L12 4.5L19.5 8.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="text-xl font-medium text-black">SDEC</span>
            </div>
          </Link>
        </div>
        
        {/* Headline */}
        <h2 className="text-4xl font-poppins text-center text-black">
          Boost your Learning & Knowledge with<br />
          CourseSite Now
        </h2>
        
        {/* CTA Button */}
        <div className='my-4'>
          <Now/>
        </div>
    
        {/* Path Text with Avatar */}
        <div className="flex items-center mb-12">
          <p className="mr-2 text-black">Your Path to Becoming a Web Wizard</p>
          <div className="overflow-hidden">
            <Image 
              src="/Images/rahib.jpg" 
              alt="Avatar" 
              width={32} 
              height={32}
              className="rounded-full"
            />
          </div>
        </div>
        
        {/* Navigation Links - Enhanced with smooth scrolling */}
        <nav className="flex flex-wrap justify-center gap-8 mb-1 text-black">
          {footerLinks.map((item, index) => (
            item.type === "scroll" ? (
              <Link
                key={index}
                href={item.path}
                className="hover:underline"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.id);
                  handleLinkClick(item.id);
                }}
              >
                {item.name}
              </Link>
            ) : (
              <Link
                key={index}
                href={item.path}
                className="hover:underline"
                onClick={() => handleLinkClick(item.id)}
              >
                {item.name}
              </Link>
            )
          ))}
          
          {/* Notify Me Button */}
          <Link 
            href="/notify" 
            className="border border-black rounded-full my-[-8px] text-gray-700 px-4 py-2 hover:bg-black hover:text-white"
            onClick={() => handleLinkClick("notify")}
          >
            Notify Me
          </Link>
        </nav>
      </div>
      
      {/* Bottom Bar with Copyright*/}
      <div className="mt-8 pt-[20px] border-t border-gray-400 mx-[24px]">
        <div className="text-center pb-10">
          <p className="text-gray-600">SDEC © 2025. Designed by SDEC</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;