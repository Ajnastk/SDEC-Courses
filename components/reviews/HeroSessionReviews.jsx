"use client";
import { Star, House, ChevronRight } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import pen from "../../public/Images/pen.png";

export default function HeroSessionReviews() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="bg-gradient-to-l from-white via-[#f7eafe] to-white pt-[150px]">
      <div className="max-w-7xl mx-auto px-4 text-center">
      {/* Navigation */}
      <div className="flex items-center justify-center mb-6 text-gray-600">
        <Link href="/" className="hover:text-gray-900">
          <House color="#454545" size={20} strokeWidth={1.25} />
        </Link>
        <span className="mx-2">
          <ChevronRight color="#454545" strokeWidth={1.25} />
        </span>
        <span className="text-gray-600 font-medium">Reviews</span>
      </div>

      {/* Heading */}
      <div className="flex flex-col items-center">
        <h1 className="lg:text-5xl text-3xl text-center lg:font-medium font-semibold lg:w-[65%] md:w-[80%] mb-6 text-gray-900">
          Stories from Our Amazing Students
        </h1>

        {/* Subheading */}
        <p className="text-md text-gray-700 mb-8 max-w-3xl mx-auto">
          Explore the incredible advantages of enrolling in our courses,
          enhancing your skills, and unlocking new opportunities for growth
        </p>

        {/* Rating Badge */}
        <div className="inline-flex items-center bg-purple-100 px-6 py-3 rounded-full text-gray-800">
          <div className="mr-2 text-purple-500">
            <Star className="w-6 h-6 fill-purple-500" />
          </div>
          <span className="font-medium">rated 4/5 by over 70k+ students</span>
        </div>

        {/* Pen Icon (Top Right) */}
        <div className="absolute top-40 right-8 xl:right-32 lg:right-20 hidden lg:block">
          <div
            style={{
              transform:
                "perspective(180px) rotateY(15deg) rotateX(10deg) translateX(-10px)",
              boxShadow:
                "0 15px 30px rgba(0,0,0,0.1), -20px 0 30px rgba(0,0,0,0.02)",
            }}
            className="bg-white p-4 rounded-3xl  transform transition-transform duration-300 hover:scale-110 cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <Image width={80} height={60} priority alt="pen" src={pen} />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
