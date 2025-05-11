"use client";
import React from "react";
import Image from "next/image";
import contents from "../Contents";
import { UserRound } from "lucide-react";
import Now from "./ui/Now";

export default function CommunityCard() {
  const {
    badgeIcon,
    badgeText,
    title,
    description,
    learnHeading,
    learnDesc,
    designNote,
    buttons,
    image,
  } = contents.CommunityCard;

  return (
    <div className="relative bg-gradient-to-r from-white via-[#f6e7ff] to-white pt-16 rounded-b-[4rem] shadow-[0_60px_80px_-20px_rgba(150,100,250,0.3)]">
      <div className=" max-w-7xl mx-auto flex  lg:flex-row md:flex-col sm:flex-col flex-col px-6 ">
        <div className="z-10 flex flex-col items-center text-center md:items-center md:text-center sm:items-center sm:text-center lg:items-start lg:text-start ">
          <div className="text-black font-medium w-32 items-center text-sm flex gap-1 bg-purple-50 border-2 border-gray-200 rounded-full mb-4">
          <span className="h-6 w-6 bg-purple-300 rounded-full flex items-center justify-center">
            <span className="text-purple-600">
      <svg xmlns="http://www.w3.org/2000/svg" fill="#976dff" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
</svg>


            </span>
          </span>
          {badgeText}
        </div>
          <h2 className="md:text-4xl text-3xl font-poppins text-black mb-4">{title}</h2>

          <p className="text-gray-700 max-w-lg">{description}</p>
          {/* CTA BUTTON */}
          <div className="mb-12">
            <Now />
          </div>
        </div>

        {/* Image Section */}
        <div className="relative w-full">
          {/* Earth image with rounded bottom */}
          <div className="rounded-b-[4rem] overflow-hidden">
            <Image
              src={image}
              alt="Creative community illustration"
              width={800}
              height={100}
              className="w-full object-contain"
              priority
            />
          </div>

          {/* Comment bubbles container - using flex for better positioning */}
          <div className="absolute w-full h-full bottom-[150px] flex  justify-center  transform translate-y-1/2 z-10">
            <div className="flex flex-col md:gap-12 gap-5 ">
              {/* First comment bubble */}
              <div
                style={{
                  transform: "perspective(180px) rotateY(-5deg) rotateX(-4deg)",
                }}
                className="relative w-[140px] md:w-[230px] bg-gradient-to-b from-gray-100 to-white p-2 rounded-xl shadow-md border-3 border-white mt-6 md:mt-0 ml-22 md:ml-0"
              >
                <p className="text-xs md:text-sm text-gray-700">
                  This one is slightly better, it has more contrast
                </p>
                <div className="flex justify-center items-center absolute -bottom-16 -left-9 w-14 h-14 rounded-full bg-gradient-to-b from-gray-100 to-white border-3 border-white shadow-xl">
                  <UserRound size={20} color="#949494" />
                </div>
              </div>

              {/* Second comment bubble */}
              <div
                style={{
                  transform: "perspective(180px) rotateY(-3deg) rotateX(-6deg)",
                }}
                className="relative w-[140px] md:w-[180px] bg-gradient-to-b from-gray-100 to-white p-2 rounded-xl shadow-md border-3 border-white ml-35 md:ml-12"
              >
                <p className="text-xs md:text-sm text-gray-700">
                  Do you think this design is better?
                </p>
                <div className="flex justify-center items-center absolute -bottom-16 -left-9 w-14 h-14 rounded-full bg-gradient-to-b from-gray-100 to-white border-3 border-white shadow-xl">
                  <UserRound size={20} color="#949494" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent  rounded-b-[4rem] shadow-[0_60px_80px_-20px_rgba(0,0,0,0.1)]"></div>
      </div>
    </div>
  );
}
