"use client"
import { useCallback } from 'react';
import Link from "next/link";
import { usePathname, useRouter } from 'next/navigation';

export default function Now({
  buttonText = "Start Learning Now",
  className = "",
  width = "w-[200px]",
  initialOpacity = 1, // Can be set to 0 for fade-in animations
  initialScale = 1,   // Can be set to 0.9 for scale animations
  animationDelay = 0  // Delay in seconds for the animation to start
}) {
  const pathname = usePathname();
  const router = useRouter();
  const isHomePage = pathname === '/' || pathname === '/#';

  // Handle button click to scroll to pricing section
  const handleClick = useCallback((e) => {
    e.preventDefault();
    
    // If we're not on the home page, navigate to home page first with the hash
    if (!isHomePage) {
      router.push('/#join');
      return;
    }
    
    // If we're already on the home page, scroll smoothly
    const section = document.getElementById('join');
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

  // Apply animation styles via inline styles for opacity and scale transitions
  const animationStyles = {
    opacity: initialOpacity,
    transform: `scale(${initialScale})`,
    transition: `opacity 0.5s ease-in-out ${animationDelay}s, transform 0.5s ease-in-out ${animationDelay}s`
  };

  // If initialOpacity or initialScale is not 1, we need to animate to 1
  if (initialOpacity !== 1 || initialScale !== 1) {
    // Apply animation using useEffect
    if (typeof window !== 'undefined') {
      setTimeout(() => {
        const button = document.getElementById('animated-join-button');
        if (button) {
          button.style.opacity = '1';
          button.style.transform = 'scale(1)';
        }
      }, animationDelay * 1000);
    }
  }

  return (
    <div className={`relative overflow-hidden ${width} group bg-gradient-to-br from-[#7f7e80] to-black group py-0 bg-gray-900 text-white my-4 rounded-full font-medium hover:bg-gray-800 transition cursor-pointer ${className}`}>
    <Link
      href="/#join"
      onClick={handleClick}
      id="animated-join-button"
      style={initialOpacity !== 1 || initialScale !== 1 ? animationStyles : {}}
    >
      {/* <span className="block relative h-10 ">
        <span className="absolute inset-0 flex items-center justify-center transition-all duration-300 transform group-hover:translate-y-full">
          {buttonText}
        </span>
        <span className="absolute inset-0 flex items-center justify-center transition-all duration-300 transform -translate-y-full group-hover:translate-y-0">
          {buttonText}
        </span>
      </span> */}
       <button
          className={`relative overflow-hidden w-[200px] h-[45px] py-1 px-4 rounded-full text-md transition-colors cursor-pointer group `}
        >
          <span className="absolute text-center font-semibold md:text-start inset-0 flex items-center justify-center transition-transform duration-500 group-hover:-translate-y-full">
            {buttonText}
          </span>
          <span className="absolute text-center font-semibold md:text-start inset-0 flex items-center justify-center translate-y-full transition-transform duration-500 group-hover:translate-y-0">
            {buttonText}
          </span>
        </button>
    </Link>
    </div>
  );
}