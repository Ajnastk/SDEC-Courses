"use client";
import React from "react";
import Image from "next/image";
import contents from "../Contents";
import { UserRound,Users } from "lucide-react";


export default function CommunityCard() {
  const {
    badgeIcon,
    badgeText,
    title,
    description,
    learnHeading,
    Flower,
    image,
  } = contents.CommunityCard;

  return (
    <div className="relative pt-[80px] bg-gradient-to-l from-white via-[#f7eafe] to-white flex flex-col rounded-b-[4rem] shadow-[0_60px_80px_-20px_rgba(150,100,250,0.3)]">
      <div className="md:flex justify-center gap-6 mr-40 mb-[120px] hidden">
        <div className="flex gap-4 ">
          <div className="flex justify-end p-1">
           <Image
           width={1}
           height={1}
           priority
           alt="flower icon"
           src={Flower}
           className="w-[13%]"
           />
          </div>
          <div className="p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <g transform="translate(12, 12) scale(0.55)">
                {/* 8-arm asterisk */}
                <rect x="-2.5" y="-20" width="4" height="40" fill="#444" />
                <rect x="-20" y="-2.5" width="40" height="4" fill="#444" />
                <rect
                  x="-2.5"
                  y="-2.5"
                  width="4"
                  height="37.28"
                  fill="#444"
                  transform="rotate(45) translate(0, -14.14)"
                />
                <rect
                  x="-2.5"
                  y="-21.78"
                  width="4"
                  height="28.28"
                  fill="#444"
                  transform="rotate(45)"
                />
                <rect
                  x="-2.5"
                  y="05.5"
                  width="4"
                  height="28.28"
                  fill="#444"
                  transform="rotate(135) translate(0, -14.14)"
                />
                <rect
                  x="-2.5"
                  y="-20.78"
                  width="4"
                  height="28.28"
                  fill="#444"
                  transform="rotate(135)"
                />
              </g>
            </svg>
          </div>
          <div className="p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <g transform="translate(12, 12) scale(0.55)">
                {/* Plus sign */}
                <rect x="-3" y="-20" width="5" height="40" fill="#444" />
                <rect x="-20" y="-3" width="40" height="5" fill="#444" />
              </g>
            </svg>
          </div>
        </div>
      </div>

      <div className="relative w-full flex lg:flex-row flex-col items-center md:gap-2 gap-[120px]">
        <div className="lg:w-[50%] w-[80%] xl:pl-40 md:pl-16 z-10 mb-[50px]">
          <div className="flex items-center lg:justify-start justify-center mb-2">
            <div className="border-2 px-0 py-0 rounded-full flex items-center">
              <div className="text-black font-medium w-[140px] h-[30px] text-sm flex items-center gap-4">
                <span className="h-6 w-6 bg-purple-300 rounded-full flex items-center justify-center">
                  <span className="text-purple-600">
                    {badgeIcon === "rocket" && <Users size={18} color="#8224f5" strokeWidth={1.75} />}
                  </span>
                </span>
                {badgeText}
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-6 flex flex-col items-center lg:items-start">
            <h1 className="text-2xl md:text-4xl font-semibold text-center lg:text-start text-gray-900">
              {title}
            </h1>

            <p className="text-md text-gray-700 text-center lg:text-start w-[80%] md:w-[80%]">{description}</p>

            <button
              className={`relative overflow-hidden w-[200px] h-[45px] py-1 px-4 rounded-full text-md transition-colors cursor-pointer group bg-gradient-to-br from-[#7f7e80] to-black text-white `}
            >
              <span className="absolute text-center md:text-start inset-0 flex items-center justify-center transition-transform duration-500 group-hover:-translate-y-full">
                {learnHeading}
              </span>
              <span className="absolute text-center md:text-start inset-0 flex items-center justify-center translate-y-full transition-transform duration-500 group-hover:translate-y-0">
                {learnHeading}
              </span>
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="relative -top-[50px]">
          {/* Earth image with white fade overlay */}
          <div className="relative lg:ml-0 md:ml-[50px] rounded-xl overflow-hidden">
            <Image
              src={image}
              alt="Creative community illustration"
              width={800}
              height={100}
              className="object-contain"
              priority
            />

            {/* White fade effect */}
          </div>

          {/* Comment bubbles */}
          <div className="absolute bottom-[200px] sm:bottom-80 left-[100px] sm:left-[300px] md:left-[400px] lg:left-[300px] xl:left-[380px] z-10">
            <div
              style={{
                transform:
                  "perspective(180px) rotateY(-5deg) rotateX(-4deg) translateX(20px)",
              }}
              className="relative max-w-[170px] h-[50px] md:h-auto md:w-[230px] bg-gradient-to-b top-[100px] from-gray-100 to-white p-2 md:p-4 rounded-xl shadow-md mb-3 border-3 border-white"
            >
              <p className="-md:text-md text-xs text-gray-700">
                This one is slightly better, it has more contrast
              </p>
              <div className="flex justify-center items-center absolute md:-bottom-16 -bottom-12 -left-9  md:w-14 md:h-14 w-10 h-10 rounded-full bg-gradient-to-b from-gray-100 to-white border-3 border-white shadow-xl">
                <UserRound size={20} color="#949494" />
              </div>
            </div>

            <div
              style={{
                transform:
                  "perspective(180px) rotateY(-3deg) rotateX(-6deg) translateX(20px)",
              }}
              className="relative md:w-[160px] w-[120px] h-[50px] md:h-auto bg-gradient-to-b left-[30px] top-[150px] from-gray-100 to-white p-2 md:p-4 rounded-xl shadow-md ml-8 border-3 border-white"
            >
              <p className="md:text-sm text-xs text-gray-700">
                Do you think this design is better?
              </p>
              <div className="flex justify-center items-center absolute md:-bottom-16 -bottom-12 -left-9 md:w-14 md:h-14 h-10 w-10 rounded-full bg-gradient-to-b from-gray-100 to-white border-3 border-white shadow-xl">
                <UserRound size={30} color="#949494" />
              </div>{" "}
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent  rounded-b-[4rem] shadow-[0_60px_80px_-20px_rgba(0,0,0,0.1)]"></div>
      </div>
    </div>
  );
}
