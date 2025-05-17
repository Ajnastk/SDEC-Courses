"use client";
import { useState, useCallback, useMemo, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import "../../app/globals.css";
import Shahi from "../../public/Images/shahi.png";
import Now from "../ui/Now";
import Logo from "../../public/Images/logo.png";
import { FadeInOnScroll } from "../FadeInOnScroll";

const Footer = () => {
  const [activeLink, setActiveLink] = useState("home");
  const pathname = usePathname();
  const router = useRouter();
  const isHomePage = pathname === "/" || pathname === "/#";

  // Define all footer links with their types and paths
  const footerLinks = useMemo(
    () => [
      {
        name: "Benefits",
        type: isHomePage ? "scroll" : "link",
        id: "benefits",
        path: "/#benefits",
      },
      { name: "Courses", type: "link", id: "courses", path: "/courses" },
      { name: "Contact", type: "link", id: "contact", path: "/contact" },
      { name: "Reviews", type: "link", id: "reviews", path: "/reviews" },
      {
        name: "Join Our news Letter",
        type: "link",
        id: "newsletter",
        path: "/#",
      },
    ],
    [isHomePage]
  );

  // Handle link click
  const handleLinkClick = useCallback((linkId) => {
    setActiveLink(linkId);
  }, []);

  // Improved scroll to section function
  const scrollToSection = useCallback(
    (id) => {
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
            block: "start",
          });
        }, 100);
      }
    },
    [isHomePage, router]
  );

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
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col items-center">
        {/* Logo */}
        <FadeInOnScroll direction="up" delay={0.1}>
          <div className="mb-8">
            <Link href="/">
              <div className="flex items-center">
                <Image
                  src={Logo}
                  alt="Logo"
                  width={88}
                  className="rounded-[8px] "
                />
                <span className="text-xl font-medium text-black"></span>
              </div>
            </Link>
          </div>
        </FadeInOnScroll>

        {/* Headline */}
        <FadeInOnScroll direction="up" delay={0.2}>
          <h2 className="md:text-4xl text-2xl font-poppins text-center text-black">
            Boost your Learning & Knowledge with
            <br />
            SDEC Now
          </h2>
        </FadeInOnScroll>

        {/* CTA Button */}
        <FadeInOnScroll direction="up" delay={0.3}>
          <div className="my-4">
            <Now />
          </div>
        </FadeInOnScroll>

        {/* Path Text with Avatar */}
        <FadeInOnScroll direction="up" delay={0.4}>
          <div className="flex items-center gap-4 lg:text-start md:text-start sm:text-start text-center">
            <p className="text-black">Your Path to Becoming a Web Wizard</p>
            <div className="rounded-full w-10 h-10 bg-blue-200 border-2  border-white object-cover overflow-hidden relative">
              <Image
                src={Shahi}
                alt="Avatar"
                width={1000}
                height={3}
                className="rounded-full "
              />
            </div>
          </div>
        </FadeInOnScroll>

        {/* Navigation Links - Enhanced with smooth scrolling */}
        <FadeInOnScroll direction="up" delay={0.5}>
          <nav className="flex flex-wrap justify-center gap-2 mt-6 mb-1  text-black">
            {footerLinks.map((item, index) =>
              item.type === "scroll" ? (
                <Link
                  key={index}
                  href={item.path}
                  className="rounded-[10px] px-6 py-2 transition-colors duration-700 hover:bg-purple-200"
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
                  className="rounded-[10px] px-6 py-2 transition-colors duration-700 hover:bg-purple-200"
                  onClick={() => handleLinkClick(item.id)}
                >
                  {item.name}
                </Link>
              )
            )}

            {/* Notify Me Button */}
            <button
              className="border border-black rounded-full  text-gray-700  py-2 px-4    hover:bg-black hover:text-white"
              onClick={() => handleLinkClick("notify")}
            >
              Notify Me
            </button>
          </nav>
        </FadeInOnScroll>
      </div>

      {/* Bottom Bar with Copyright*/}
      <div className="mt-8 pt-[20px] border-t border-gray-400 mx-[24px]">
        <div className="text-center pb-10">
          <FadeInOnScroll direction="up" delay={0.6}>
            <p className="text-gray-600">SDEC © 2025. Designed by SDEC</p>
          </FadeInOnScroll>
        </div>
      </div>
    </div>
  );
};

export default Footer;
