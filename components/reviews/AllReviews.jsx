"use client";
import { Star, House, ChevronRight } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import pen from "../../public/Images/pen.png";
import ajnas from "../../public/Images/ajnas.jpg";
import ziyad from "../../public/Images/ziyad.jpg";
import rahib from "../../public/Images/rahib.jpg";
import rasha from "../../public/Images/Rasha.jpg";


const testimonials = [
  {
    name: "Brendan Wilson",
    title: "Aspiring Web Designer",
    quote: "Engaging and insightful! I’ve learned so much more than expected.",
    image: ziyad,
  },
  {
    name: "Jane Hosl",
    title: "Web Designer",
    quote:
      "Absolutely worth it! The structure, depth, and hands-on approach make learning a breeze.",
    image: rasha,
  },
  {
    name: "Brendan Wilson",
    title: "Aspiring Web Designer",
    quote: "Engaging and insightful! I’ve learned so much more than expected.",
    image: rahib,
  },
  {
    name: "Jane Hosl",
    title: "Web Designer",
    quote:
      "Absolutely worth it! The structure, depth, and hands-on approach make learning a breeze.",
    image: ziyad,
  },
  {
    name: "Brendan Wilson",
    title: "Aspiring Web Designer",
    quote: "Engaging and insightful! I’ve learned so much more than expected.",
    image: rasha,
  },
  {
    name: "Jane Hosl",
    title: "Web Designer",
    quote:
      "Absolutely worth it! The structure, depth, and hands-on approach make learning a breeze.",
    image: ziyad,
  },
  {
    name: "Brendan Wilson",
    title: "Aspiring Web Designer",
    quote: "Engaging and insightful! I’ve learned so much more than expected.",
    image: rahib,
  },
  {
    name: "Jane Hosl",
    title: "Web Designer",
    quote:
      "Absolutely worth it! The structure, depth, and hands-on approach make learning a breeze.",
    image: ajnas,
  },
  {
    name: "Jane Hosl",
    title: "Web Designer",
    quote:
      "Absolutely worth it! The structure, depth, and hands-on approach make learning a breeze.",
    image: ziyad,
  },
];

export default function AllReviews() {
  const [isHovered, setIsHovered] = useState(false);
  const HeroHeading =[ "Stories","from","Our","Amazing","Students"]
const HeroSubheading =["Explore","the" ,"incredible", "advantages" ,"of" ,"enrolling" ,"in","our", "courses,",
  "enhancing", "your", "skills,", "and"," unlocking", "new"," opportunities"," for", "growth"]
  return (
    <div className="bg-gradient-to-l from-white via-[#f7eafe] to-white pb-16 pt-[150px]">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Navigation */}
        <motion.div className="flex items-center justify-center mb-6 text-gray-600"
          initial={{ opacity: 0, filter: "blur(8px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ delay: 0.4 }}
        >
          <Link href="/" className="hover:text-gray-900">
            <House color="#454545" size={20} strokeWidth={1.25} />
          </Link>
          <span className="mx-2">
            <ChevronRight color="#454545" strokeWidth={1.25} />
          </span>
          <span className="text-gray-600 font-medium">Reviews</span>
        </motion.div>

        {/* Heading */}
        <div className="flex flex-col items-center">
          <h1 className="lg:text-5xl md:text-4xl sm:text-4xl text-3xl text-center lg:font-medium font-semibold lg:w-[65%] md:w-[65%] sm:w-[70%] mb-6 text-gray-900">
          {HeroHeading.map((word, index) => (
                  <motion.span
                    key={index}
                    className="inline-block mr-2"
                    initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.1,
                      ease: "easeOut",
                    }}
                  >
                    {word}
                  </motion.span>
                ))}
          </h1>

          {/* Subheading */}
          <p className="text-md text-gray-700 mb-8 max-w-3xl mx-auto">
          {HeroSubheading.map((word, index) => (
                  <motion.span
                    key={index}
                    className="inline-block mr-1"
                    initial={{ opacity: 0, filter: "blur(8px)" }}
                    animate={{ opacity: 1, filter: "blur(0px)" }}
                    transition={{
                      duration: 0.1,
                      delay: HeroSubheading.length * 0 + index * 0.1,
                      ease: "easeIn",
                    }}
                  >
                    {word}
                  </motion.span>
                ))}
          </p>

          {/* Rating Badge */}
          <motion.div className="inline-flex items-center bg-purple-100  py-3 rounded-full text-gray-800"
            initial={{ opacity: 0, filter: "blur(8px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ delay: 0.4 }}
          >
            <div className="mr-2 text-purple-500">
              <Star className="w-6 h-6 fill-purple-500" />
            </div>
            <span className="font-medium">rated 4/5 by over 70k+ students</span>
          </motion.div>

          {/* Pen Icon (Top Right) */}
          <motion.div className="absolute top-40 right-8 xl:right-32 lg:right-20 hidden lg:block"
          initial={{ opacity: 0,  scale:0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
              duration: 0.4,
              scale: { type: "spring", visualDuration: 0.8, bounce: 0.5 },
          }}
          >
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
          </motion.div>

          <motion.div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2  grid-cols-1 pt-7 gap-8 max-w-7xl mx-auto"
      initial={{ opacity: 0, filter: "blur(8px)" }}
      animate={{ opacity: 1, filter: "blur(0px)" }}
      transition={{ delay: 0.4 }}
      >
        {testimonials.map((t, i) => (
          <div
            style={{ border: "3px solid white" }}
            key={i}
            className={`rounded-3xl shadow-2xl p-6 lg:max-w-[390px] bg-gradient-to-b from-[#fbf7fd] to-[#fefcff] ${
              i % 2 === 0 ? "lg:h-[230px] h-[300px]" : "h-[300px] lg:mt-[-70px]"
            }  ${i % 3 === 1 ? "lg:mt-[0px]" : ""}`}
          >
            <div className="flex justify-between mb-4">
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
              <div>
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
              </div>
            </div>
            <p
              className={`ext-sm overflow-hidden ${
                i % 2 === 0 ? "h-[40%]" : "h-[55%]"
              }  text-gray-700 italic mb-4`}
            >
              "{t.quote}"
            </p>
            <div className="flex items-center space-x-3">
              <div className="rounded-full p-0.5 bg-gray-200 bg-opacity-50">
                <Image
                  priority
                  width={1000}
                  height={1000}
                  src={t.image}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
              </div>
              <div>
                <p className=" text-black text-md font-semibold">{t.name}</p>
                <p className="text-xs text-gray-700">{t.title}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
        </div>
      </div>
    </div>
  );
}
