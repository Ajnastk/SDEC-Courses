"use client";

import { useState, useEffect, useRef } from "react";
import contents from "@/Contents";
import React from "react";
import Image from "next/image";

export default function BoostYourSkills() {
  const data = contents.BoostyourSkillsData;
  const [windowWidth, setWindowWidth] = useState(0);
  const sliderRef = useRef(null);
  const wrapperRef = useRef(null);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const slider = sliderRef.current;
    const wrapper = wrapperRef.current;

    if (!slider || !wrapper) return;

    const cloneCount = 2;
    const totalWidth = slider.scrollWidth / cloneCount;
    let position = 0;
    const speed = 0.4;
    let requestId;

    const animate = () => {
      position -= speed;
      if (position <= -totalWidth) position = 0;
      slider.style.transform = `translateX(${position}px)`;
      requestId = requestAnimationFrame(animate);
    };

    const handleHover = () => cancelAnimationFrame(requestId);
    const handleHoverEnd = () => (requestId = requestAnimationFrame(animate));

    requestId = requestAnimationFrame(animate);
    wrapper.addEventListener("mouseenter", handleHover);
    wrapper.addEventListener("mouseleave", handleHoverEnd);

    return () => {
      cancelAnimationFrame(requestId);
      wrapper.removeEventListener("mouseenter", handleHover);
      wrapper.removeEventListener("mouseleave", handleHoverEnd);
    };
  }, []);

  const isLargeScreen = windowWidth >= 1024;
  const companies = [
    { name: "Techlify", icon: "💻" },
    { name: "Blockly", icon: "🧱" },
    { name: "Camera", icon: "📷" },
    { name: "Cloudly", icon: "☁️" },
    { name: "Startup", icon: "🚀" },
  ];

  return (
    <div className="py-16 bg-gradient-to-r  from-white via-[#f6e7ff] to-white ">
      <div className="max-w-7xl mx-auto px-4">
      {/* Decorative Elements */}
      {/* <div className="absolute top-16 left-16 opacity-10">
        <div className="text-purple-300 text-8xl">✳</div>
      </div>
      <div className="absolute bottom-16 right-16 opacity-10">
        <div className="text-purple-300 text-8xl">✳</div>
      </div> */}

      <div className="text-center mb-12">
        <div className="flex items-center justify-center mb-2">
          <div className="bg-purple-50 border-2 border-gray-200 px-0 py-0 rounded-full flex items-center">
            <div className="text-black font-medium w-[110px] text-sm flex items-center gap-2">
              <span className="h-6 w-6 bg-purple-300 rounded-full flex items-center justify-center">
                <span className="text-purple-600">{}</span>
              </span>
              We Offer
            </div>
          </div>
        </div>

        <h2 className="text-4xl text-black mb-4">{data.title}</h2>
        <p className="text-black max-w-xl mx-auto">{data.description}</p>
      </div>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-15">
        {data.cards.map((card, index) => {
          return (
            <div
              key={index}
              className="px-9 text-center py-16 transition-transform relative rounded-3xl flex flex-col justify-center items-center gap-5"
              style={{
                border: "3px solid white",
                boxShadow:
                  "0 15px 30px rgba(0,0,0,0.1), -20px 0 30px rgba(0,0,0,0.05)",
                ...(isLargeScreen && {
                  transform:
                    index === 0
                      ? "perspective(180px) rotateY(3deg) translateX(20px)"
                      : index === 2
                      ? "perspective(180px) rotateY(-3deg) translateX(-20px)"
                      : "none",
                }),
              }}
            >
              <div
                className="md:w-[120px] md:h-[120px] h-[90px] w-[90px] flex justify-center items-center rounded-2xl p-4 bg-white"
                style={{
                  boxShadow:
                    "0 5px 30px rgba(0,0,0,0.1), -20px 0px 30px rgba(0,0,0,0.02)",
                  border: "1px solid rgba(255,255,255,0.2)",
                }}
              >
                <div
                  className={`md:w-20 md:h-20 w-14 h-14 rounded-xl flex items-center justify-center`}
                >
                  <Image
                    width={70}
                    height={50}
                    alt="icon"
                    priority
                    src={card.icon}
                    className="text-white"
                  />
                </div>
              </div>
              <h3 className="text-5xl font-extrabold text-black mb-1">
                {card.value}
              </h3>
              <p className="text-gray-600 text-xs tracking-widest uppercase">
                {card.label}
              </p>
            </div>
          );
        })}
      </div>

      {/* Infinite Scrolling Companies */}
      <div className="mt-10 w-[90%] md:ml-[50px] sm:ml-[30px] ml-[10px] lg:ml-[70px] flex flex-col items-center justify-center">
        <div className="flex flex-row items-center gap-20 justify-center w-full mb-[-20px]">
          <div className="hidden md:block flex-1 max-w-[310px] border-t border-gray-400"></div>
          <div className="text-center mx-4">
            <h3 className="text-gray-500 mt-5 text-sm font-light mb-6">
              Adopted by renowned enterprises such as
            </h3>
          </div>
          <div className="hidden md:block flex-1 max-w-[310px] border-t border-gray-400"></div>
        </div>

        <div className="relative overflow-hidden w-full py-8" ref={wrapperRef}>
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#fcfbff] to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#fcfbff] to-transparent z-10"></div>

          <div className="flex" ref={sliderRef}>
            {[...Array(4)].map((_, cloneIndex) => (
              <React.Fragment key={`clone-${cloneIndex}`}>
                {companies.map((company, index) => (
                  <div
                    key={`${company.name}-${index}-${cloneIndex}`}
                    className="flex items-center gap-3 min-w-max px-8 mx-4"
                  >
                    <span className="text-2xl">{company.icon}</span>
                    <span className="text-gray-600 font-medium text-lg whitespace-nowrap">
                      {company.name}
                    </span>
                  </div>
                ))}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
