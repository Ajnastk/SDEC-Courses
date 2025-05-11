"use client";
import { motion } from "framer-motion";
import { HeroBackground } from "./HeroBackground";
import Now from "./ui/Now";
import Link from "next/link";
export const Hero = () => {
  const HeadLineWords = [
    "Become",
    "a",
    "Software",
    "Engineer!",
   
  ];
  const SubHeadLineWords = [
    "Unlock",
    "High-paying",
    "career",
    "Opportunities",
    "and",
    "secure",
    "your",
    "financial",
    "future.",
    "start",
    "your",
    "journey",
    "today.",
  ];
  return (
    <div className="relative min-h-screen  overflow-hidden text-black pt-20">
      {/* Background with floating color orbs */}
      <HeroBackground />

      <main className="relative container max-w-5xl mx-auto px-6 py-16 text-center z-10">
        {/* Trusted badge */}
        <div
          className="inline-flex items-center bg-white/30 backdrop-blur-sm rounded-full px-4 py-2 mb-10 text-gray/40 font-medium 
                 bg-gradient-to-b from-white/20 to-white/10 
                 shadow-inner shadow-white/40
                 hover:from-white/25 hover:to-white/15
                 active:from-white/15 active:to-white/5
                 transition-all duration-200 ease-in-out cursor-pointer"
        >
          <span className="w-2 h-2 bg-black rounded-full mr-2"></span>
          <p className="text-sm text-gray-800">
            Want to Earn ₹1 Lakh/Month?
          </p>
        </div>

        {/* Animated headline */}
        <h1 className="lg:text-6xl md:text-5xl sm:text-4xl text-3xl font-bold mb-6 leading-tight">
        {HeadLineWords.map((word, index) => (
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

        {/* Animated SubHeadLine */}
        <div className="max-w-2xl mx-auto mb-10">
          <p className="text-md">
            {SubHeadLineWords.map((word, index) => (
              <motion.span
                key={index}
                className="inline-block mr-1"
                initial={{ opacity: 0, filter: "blur(8px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                transition={{
                  duration: 0.1,
                  delay: HeadLineWords.length * 0 + index * 0.1,
                  ease: "easeIn",
                }}
              >
                {word}
              </motion.span>
            ))}
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.8}}
          >
            <Link
              href="./courses"
              className="px-6 py-3 rounded-full text-gray/40 font-medium 
                 bg-gradient-to-b from-white/20 to-white/10 
                 shadow-inner shadow-white/40
                 hover:from-white/25 hover:to-white/15
                 active:from-white/15 active:to-white/5
                 transition-all duration-200 ease-in-out cursor-pointer"
            >
              View All Courses
            </Link>
          </motion.button>

          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2 }}
          >
            <Now />
          </motion.button>
        </div>

        {/* Updated Feature Cards – Matching Glass Style */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2, duration: 0.6 }}
        >
          {/* Card 1 */}
          <div className="relative bg-white/10 backdrop-blur-md rounded-3xl p-6 shadow-lg transition hover:scale-105 duration-300 text-white">
            {/* Badge */}
            <div className="absolute top-4 right-4 bg-[#0195f7] text-white rounded-full w-6 h-6 flex items-center justify-center">
              <svg
                className="w-4 h-4"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13 5l-6 6-3-3"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* Icon Circle */}
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white/20 mb-4 mx-auto">
              <div className="w-8 h-8 bg-orange-400 rounded-lg"></div>
            </div>

            {/* Title & Text */}
            <h3 className="text-xl font-semibold text-center mb-2">
              Earn & Grow
            </h3>
            <p className="text-sm text-center text-white/80">
              Work on projects and start earning.
            </p>
          </div>

          {/* Card 2 */}
          <div className="relative bg-white/10 backdrop-blur-md rounded-3xl p-6 shadow-lg transition hover:scale-105 duration-300 text-white">
            <div className="absolute top-4 right-4 bg-[#0195f7] text-white rounded-full w-6 h-6 flex items-center justify-center">
              <svg
                className="w-4 h-4"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13 5l-6 6-3-3"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white/20 mb-4 mx-auto">
              <div className="w-0 h-0 border-y-8 border-y-transparent border-l-8 border-l-white ml-1"></div>
            </div>
            <h3 className="text-xl font-semibold text-center mb-2">
              Expert Mentorship
            </h3>
            <p className="text-sm text-center text-white/80">
            Guidance from industry leaders, always.
            </p>
          </div>

          {/* Card 3 */}
          <div className="relative bg-white/10 backdrop-blur-md rounded-3xl p-6 shadow-lg transition hover:scale-105 duration-300 text-white">
            <div className="absolute top-4 right-4 bg-[#0195f7] text-white rounded-full w-6 h-6 flex items-center justify-center">
              <svg
                className="w-4 h-4"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13 5l-6 6-3-3"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white/20 mb-4 mx-auto">
              <div className="w-10 h-10 bg-pink-400 rounded-full"></div>
            </div>
            <h3 className="text-xl font-semibold text-center mb-2">
            Get Certified
            </h3>
            <p className="text-sm text-center text-white/80">
            Official certificates to boost your career.
            </p>
          </div>
        </motion.div>
      </main>
    </div>
  );
};
