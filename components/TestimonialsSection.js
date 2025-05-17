"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Now from "./ui/Now";
import rasha from "../public/Images/Rasha.jpg";
import user from "../public/Images/user.png"
import Marshook from "./../public/Images/MarshookImage.jpg";
import Shareef from "./../public/Images/ShareefImage.jpg";
import { FadeInOnScroll } from "./FadeInOnScroll";

export default function TestimonialsSection() {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    // Initialize window width and set up listener
    setWindowWidth(window.innerWidth);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Clean up event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Check if screen is large enough for 3 column layout (typically lg breakpoint)
  const isLargeScreen = windowWidth >= 1024;

  const testimonials = [
    {
      id: 1,
      name: "Shareef",
      title: "MERN Stack Developer",
      quote:
        "Working on real-world projects pushed my skills beyond the classroom. It was a game-changer for my confidence and experience!",
      image: Shareef,
      linkedin: "https://www.linkedin.com/in/ziyad-mangalasseri-249a522ab/",
    },
    {
      id: 2,
      name: "Rasha Shafi",
      title: "MERN Stack Developer",
      quote:
        "The hands-on exposure to live projects helped me connect theory with practice. I now feel ready for real tech challenges!",
      image: rasha,
      linkedin: "https://www.linkedin.com/in/ziyad-mangalasseri-249a522ab/",
    },
    {
      id: 3,
      name: "Marshook Ali",
      title: "MERN Stack Developer",
      quote:
        "Contributing to actual projects gave me a huge learning boost. Every task felt like a step toward becoming a pro developer.",
      image: Marshook,
      linkedin: "https://www.linkedin.com/in/ziyad-mangalasseri-249a522ab/",
    },
  ];

  return (
    <div className="bg-gradient-to-r from-white via-[#f6e7ff] to-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-black font-medium w-32 items-center text-sm flex gap-1 bg-purple-50 border-2 border-gray-200 rounded-full mb-4">
          <span className="h-6 w-6 bg-purple-300 rounded-full flex items-center justify-center">
            <span className="text-purple-600">
              <svg xmlns="http://www.w3.org/2000/svg" fill="#976dff" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
</svg>

            </span>
          </span>
          Testimonials
        </div>
        <FadeInOnScroll direction="up" delay={0.1}>
        <h2 className="md:text-4xl text-3xl font-poppins text-black mb-4">
          Our Students feedback
        </h2>
        </FadeInOnScroll>

         <FadeInOnScroll direction="up" delay={0.2}>
        <p className="text-gray-700 max-w-lg">
          Explore the incredible advantages of enrolling in our courses and
          enhancing your skills.
        </p>
        </FadeInOnScroll>
        {/* CTA BUTTON */}
         <FadeInOnScroll direction="up" delay={0.3}>
        <div className="mb-12">
          <Now />
        </div>
        </FadeInOnScroll>

        {/* Grid that changes from 3 columns to 2 columns based on screen size */}
         <FadeInOnScroll direction="up" delay={0.4}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-15">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gradient-to-b from-[#f6effa] to-[#ffffff] lg:p-4 md:p-6 sm:p-6 p-6 rounded-3xl h-72 flex flex-col justify-between backdrop-blur-sm transition-transform relative"
              style={{
                boxShadow:
                  "0 15px 30px rgba(0,0,0,0.1), -20px 0 30px rgba(0,0,0,0.05)",
                border: "3px solid white",
                ...(isLargeScreen && {
                  transform:
                    testimonial.id === 1
                      ? "perspective(180px) rotateY(3deg) rotateX(0deg) rotate(-0deg) translateX(20px)"
                      : testimonial.id === 3
                      ? "perspective(180px) rotateY(-3deg) rotateX(0deg) rotate(-0deg) translateX(-20px)"
                      : "none",
                }),
              }}
            >
              <div className="flex justify-between ">
                {/* Star icon */}
                <div className="flex space-x-1 text-yellow-400">
                  {Array(5)
                    .fill()
                    .map((_, i) => (
                      <span key={i}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 256 256"
                          focusable="false"
                          className="w-4 h-4 inline-block fill-yellow-400"
                        >
                          <g>
                            <path d="M234.29,114.85l-45,38.83L203,211.75a16.4,16.4,0,0,1-24.5,17.82L128,198.49,77.47,229.57A16.4,16.4,0,0,1,53,211.75l13.76-58.07-45-38.83A16.46,16.46,0,0,1,31.08,86l59-4.76,22.76-55.08a16.36,16.36,0,0,1,30.27,0l22.75,55.08,59,4.76a16.46,16.46,0,0,1,9.37,28.86Z" />
                          </g>
                        </svg>
                      </span>
                    ))}
                </div>
                {/* Linkedin icon  */}
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href={testimonial.linkedin}
                  className="cursor-pointer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 256 256"
                    focusable="false"
                    className="w-8 h-8 fill-[#A0AABB]"
                  >
                    <g>
                      <path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24ZM96,176a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0ZM88,96a12,12,0,1,1,12-12A12,12,0,0,1,88,96Zm96,80a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140Z" />
                    </g>
                  </svg>
                </Link>
              </div>
              <p className="text-gray-700 italic mt-3 ">
                &quot;{testimonial.quote}&quot;
              </p>

              <div className="flex items-center gap-4">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-medium text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        </FadeInOnScroll>
      </div>
    </div>
  );
}
