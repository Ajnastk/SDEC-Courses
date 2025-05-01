"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Now from "./Now";
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
      quote:
        "The courses are top-notch, providing in-depth knowledge that's easy to apply. Each lesson is structured to ensure you fully grasp the material.",
      name: "Brendan Wilson",
      role: "Aspiring Web Designer",
      image: "/api/placeholder/48/48",
    },
    {
      id: 2,
      quote:
        "The courses are excellent, delivering practical insights with ease. Each module is designed to help you fully understand and apply the knowledge.",
      name: "Rock Lee",
      role: "Web Designer",
      image: "/api/placeholder/48/48",
    },
    {
      id: 3,
      quote:
        "These courses are exceptional, offering detailed content that's easy to implement. Every lesson is carefully crafted to deepen your understanding.",
      name: "Sakura",
      role: "Web Developer",
      image: "/api/placeholder/48/48",
    },
  ];

  return (
    <div className="bg-gradient-to-r from-white via-[#f6e7ff] to-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-black font-medium w-32 items-center text-sm flex gap-2 bg-purple-50 border-2 border-gray-200 rounded-full mb-4">
          <span className="h-6 w-6 bg-purple-300 rounded-full flex items-center justify-center">
            <span className="text-purple-600"></span>
          </span>
          Testimonials
        </div>
        <h2 className="text-4xl font-poppins text-black mb-4">
          Our Students feedback
        </h2>

        <p className="text-gray-700 mb-8 max-w-lg">
          Explore the incredible advantages of enrolling in our courses and
          enhancing your skills.
        </p>
        {/* CTA Button */}
        <button className="relative overflow-hidden w-52 group py-2 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition cursor-pointer mb-12">
        <Now/>
        </button>
      

        {/* Grid that changes from 3 columns to 2 columns based on screen size */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-20">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-6 rounded-3xl h-72 flex flex-col justify-between backdrop-blur-sm transition-transform relative"
              style={{
                boxShadow:
                  "0 15px 30px rgba(0,0,0,0.1), -20px 0 30px rgba(0,0,0,0.05)",
                border: "1px solid rgba(255,255,255,0.2)",
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
              <p className="text-gray-700 italic mt-6">
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
      </div>
    </div>
  );
}
