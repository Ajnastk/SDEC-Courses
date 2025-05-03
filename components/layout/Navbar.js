"use client"
import { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import Link from "next/link";
import { usePathname, useRouter } from 'next/navigation';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const navRef = useRef(null);

  const pathname = usePathname();
  const router = useRouter();
  const isHomePage = pathname === '/' || pathname === '/#';

  // Move navLinks into useMemo to prevent recreation on every render
  const navLinks = useMemo(() => [
    { name: "Courses", type: "link", id: "courses", path: "/courses", delay: "delay-200" },
    { name: "Reviews", type:  "link", id: "reviews", path: "/reviews", delay: "delay-300" },
    { name: "Contact", type:  "link", id: "contact", path: "/contact", delay: "delay-400" },
    { name: "Join Now", type: isHomePage ? "scroll" : "link", id: "join", path: "/#join", delay: "delay-500" }
  ], [isHomePage]); // Only recompute when isHomePage changes

  // Handle scroll behavior - only applies hide/show behavior on medium screens and up
  const handleScroll = useCallback(() => {
    // Skip scroll handling when mobile menu is open
    if (mobileMenuOpen) return;
    
    const currentScrollY = window.scrollY;
    const isMobileView = window.innerWidth < 768; // Standard md breakpoint in Tailwind
    
    // On mobile, always keep the navbar visible
    if (isMobileView) {
      setIsNavVisible(true);
      setLastScrollY(currentScrollY);
      return;
    }
    
    // For larger screens, apply the hide/show behavior
    const isScrollingDown = currentScrollY > lastScrollY;
    
    // Only hide navbar after scrolling past a threshold (e.g., 100px)
    if (currentScrollY < 100) {
      setIsNavVisible(true);
    } else {
      // Show on scroll up, hide on scroll down
      if (isScrollingDown !== isScrollingUp) {
        setIsScrollingUp(!isScrollingDown);
      }
      
      // Small threshold to prevent navbar flickering on small scroll movements
      if (Math.abs(currentScrollY - lastScrollY) > 10) {
        setIsNavVisible(!isScrollingDown);
      }
    }
    
    setLastScrollY(currentScrollY);
  }, [lastScrollY, isScrollingUp, mobileMenuOpen]);

  // Debounce scroll event listener and also watch for resize events
  useEffect(() => {
    let scrollTimer;
    
    const debouncedHandleScroll = () => {
      if (scrollTimer) {
        clearTimeout(scrollTimer);
      }
      scrollTimer = setTimeout(handleScroll, 10);
    };
    
    window.addEventListener('scroll', debouncedHandleScroll);
    window.addEventListener('resize', debouncedHandleScroll); // Handle viewport size changes
    
    return () => {
      window.removeEventListener('scroll', debouncedHandleScroll);
      window.removeEventListener('resize', debouncedHandleScroll);
      clearTimeout(scrollTimer);
    };
  }, [handleScroll]);

  // When mobile menu is open, always show navbar but DON'T prevent scrolling
  useEffect(() => {
    if (mobileMenuOpen) {
      setIsNavVisible(true);
      // We're removing this line to allow scrolling even when menu is open
      // document.body.style.overflow = 'hidden';
    } 
    // Also remove the else case to avoid changing overflow on close
    
    return () => {
      // Clean up but don't change overflow here
    };
  }, [mobileMenuOpen]);

  const toggleMobileMenu = useCallback(() => {
    setMobileMenuOpen(prev => !prev);
  }, []);

  // Handle link click
  const handleLinkClick = useCallback((linkId) => {
    setActiveLink(linkId);
    setMobileMenuOpen(false);
  }, []);

  // Improved scroll to section function
  const scrollToSection = useCallback((id) => {
    // Close mobile menu first if it's open
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
    
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
  }, [isHomePage, mobileMenuOpen, router]);

  // Handle "Join Now" click specially
  const handleJoinNowClick = useCallback((e) => {
    e.preventDefault();
    
    // Set active link
    handleLinkClick("join");
    
    // Scroll to the join/pricing section
    scrollToSection("join");
  }, [handleLinkClick, scrollToSection]);

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
    navLinks.forEach((link) => {
      if (link.type === "scroll") {
        const section = document.getElementById(link.id);
        if (section) observer.observe(section);
      }
    });

    return () => observer.disconnect();
  }, [isHomePage, navLinks]); // Now navLinks is memoized and won't cause unnecessary re-renders

  return (
    <div className="relative">
      {/* Desktop Navbar with scroll-aware behavior */}
      <nav 
        ref={navRef}
        className={`fixed top-0 left-0 right-0 flex Lg:justify-around md:bg-white/0 md:backdrop-blur-lg bg-white sm:justify-between md:justify-between justify-between px-8 py-5 z-30 transition-transform duration-300 ease-in-out ${
          isNavVisible || mobileMenuOpen ? 'translate-y-0' : 'md:-translate-y-full'
        }`}
      >
        <Link href="/" className="flex items-center text-2xl text-black font-light">
          <div className="mr-2 text-green-800">
            <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.5 12.5L12 16.5L4.5 12.5M19.5 8.5L12 12.5L4.5 8.5L12 4.5L19.5 8.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          SDEC
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-black">
          {navLinks.slice(0, 3).map((item) => {
            const isActive = item.type === "scroll" 
              ? activeLink === item.id 
              : pathname === item.path;
              
            return (
              item.type === "scroll" ? (
                <Link
                  key={item.name}
                  href={`#${item.id}`} 
                  onClick={(e) => { 
                    e.preventDefault();
                    scrollToSection(item.id);
                    handleLinkClick(item.id);
                  }}
                  className={`text-lg rounded-[10px] px-6 py-2 transition-colors duration-700 hover:bg-purple-100 ${
                    isActive ? 'font-medium' : ''
                  }`}
                >
                  {item.name}
                </Link>
              ) : (
                <Link 
                  key={item.name}
                  href={item.path}
                  onClick={() => handleLinkClick(item.id)}
                  className={`text-lg rounded-[10px] px-6 py-2 transition-colors duration-700 hover:bg-purple-100 ${
                    isActive ? 'font-medium' : ''
                  }`}
                >
                  {item.name}
                </Link>
              )
            );
          })}
        </div>
        
        {/* Join Now button for desktop - Modified for smooth scrolling */}
        {navLinks.slice(-1).map((item) => (
          <Link
            key={item.name}
            href={`#${item.id}`} 
            className="hidden md:block text-lg text-black rounded-[10px] px-6 py-2 transition-colors duration-700 hover:bg-purple-100"
            onClick={handleJoinNowClick}
          >
            {item.name}
          </Link>
        ))}
        
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
      
      {/* Spacer to prevent content from being hidden under fixed navbar */}
    
      
      {/* Mobile Menu - Container that slides down */}
      <div 
        className={`fixed top-18 left-0 right-0 bg-[#fffefe] shadow-lg z-20 transform transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="p-4">
          <div className="flex flex-col text-black">
            {navLinks.map((item, index) => (
              item.type === "scroll" ? (
                <Link
                  key={index}
                  href={`#${item.id}`}
                  className={`py-4 text-lg transform transition-all duration-500 ${item.delay} ${
                    mobileMenuOpen
                      ? 'translate-y-0 opacity-100'
                      : '-translate-y-8 opacity-0'
                  }`}
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
                  className={`py-4 border-b-[0.2px] border-b-gray-400 text-lg transform transition-all duration-500 ${item.delay} ${
                    mobileMenuOpen
                      ? 'translate-y-0 opacity-100'
                      : '-translate-y-8 opacity-0'
                  }`}
                  onClick={() => handleLinkClick(item.id)}
                >
                  {item.name}
                </Link>
              )
            ))}
          </div>
        </div>
      </div>
      
      {/* Backdrop overlay when menu is open */}
      <div 
        className={`fixed inset-0 bg-black z-10 transition-opacity duration-300 ${
          mobileMenuOpen ? 'opacity-30' : 'opacity-0 pointer-events-none'
        }`}
        onClick={toggleMobileMenu}
      />
    </div>
  );
}