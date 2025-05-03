"use client";
import React from "react";
import Image from "next/image";
import { Rocket } from "lucide-react";
import contents from "../Contents";
import { UserRound } from "lucide-react";
import Now from "./Now";


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
    <div className="relative pt-[80px] bg-gradient-to-l from-white via-[#f7eafe] to-white flex flex-col rounded-b-[4rem] shadow-[0_60px_80px_-20px_rgba(150,100,250,0.3)]">
      <div className=" relative w-full flex md:flex-row flex-col ">
        <div className="md:w-[50%] w-full md:pl-40 pl-2 z-10">
        <div className="text-black font-medium w-30   text-sm flex gap-2  bg-purple-50 border-2 border-gray-200 rounded-full mb-4">
                    <span className="h-5 w-5 bg-purple-300 rounded-full flex items-center justify-center">
                      <span className="text-purple-600"></span>
                    </span>
                    {badgeText}
                  </div>
                  <h2 className="text-4xl font-poppins text-black mb-4">
                  {title}
                  </h2>
          
                  <p className="text-gray-700 max-w-lg">
                  {description}
                  </p>
                  {/* CTA BUTTON */}
                  <div className="mb-12">
                  <Now/>
        </div>
        </div>

        {/* Image Section */}
        <div className="relative -top-[50px]">
          {/* Earth image with white fade overlay */}
          <div className="relative  rounded-xl overflow-hidden">
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
          <div className="absolute bottom-80 left-[380px] z-10">
            <div
              style={{
                transform:
                  "perspective(180px) rotateY(-5deg) rotateX(-4deg) translateX(20px)",
              }}
              className="relative w-[230px] bg-gradient-to-b top-[100px] from-gray-100 to-white p-4 rounded-xl shadow-md max-w-xs mb-3 border-3 border-white"
            >
              <p className="text-sm text-gray-700">
                This one is slightly better, it has more contrast
              </p>
              <div className="flex justify-center items-center absolute -bottom-16 -left-9 w-14 h-14 rounded-full bg-gradient-to-b from-gray-100 to-white border-3 border-white shadow-xl">
                <UserRound size={20} color="#949494" />
              </div>
            </div>

            <div
              style={{
                transform:
                  "perspective(180px) rotateY(-3deg) rotateX(-6deg) translateX(20px)",
              }}
              className="relative w-[180px] bg-gradient-to-b left-[30px] top-[150px] from-gray-100 to-white p-4 rounded-xl shadow-md max-w-xs ml-8 border-3 border-white"
            >
              <p className="text-sm text-gray-700">
                Do you think this design is better?
              </p>
              <div className="flex justify-center items-center absolute -bottom-16 -left-9 w-14 h-14 rounded-full bg-gradient-to-b from-gray-100 to-white border-3 border-white shadow-xl">
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