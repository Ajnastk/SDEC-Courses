"use client";
import { motion } from "framer-motion";
import { HeroBackground } from "./HeroBackground";
import Now from "./ui/Now";
import Link from "next/link";
import Image from "next/image";
export const Hero = () => {
  const HeadLineWords = ["Become", "a", "Software", "Engineer!"];
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
          <p className="text-sm text-gray-800">Want to Earn ₹1 Lakh/Month?</p>
        </div>

        {/* Animated headline */}
        <h1 className="lg:text-6xl md:text-5xl sm:text-4xl text-3xl font-semibold mb-6 leading-tight">
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
          <p className="text-md md:text-lg">
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
            transition={{ delay: 1.8 }}
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
            {/* <div className="absolute top-4 right-4 bg-[#0195f7] text-white rounded-full w-6 h-6 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
                />
              </svg>
            </div> */}
            {/* Icon Circle */}
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white/20 mb-4 mx-auto">
              <div className="w-10 h-10  text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
                  />
                </svg>
              </div>
            </div>

            {/* Title & Text */}
            <h3 className="text-xl font-semibold text-center text-black mb-2">
              Earn & Grow
            </h3>
            <p className="text-sm text-center text-black">
              Work on projects and start earning.
            </p>
          </div>

          {/* Card 2 */}
          <div className="relative bg-white/10 backdrop-blur-md rounded-3xl p-6 shadow-lg transition hover:scale-105 duration-300 text-white">
            {/* <div className="absolute top-4 right-4 bg-[#0195f7] text-white rounded-full w-6 h-6 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
                />
              </svg>
            </div> */}
            {/* Icon Circle */}
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white/20 mb-4 mx-auto">
              <div className="w-10 h-10  text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
                  />
                </svg>
              </div>
            </div>
            {/* Title & Text */}
            <h3 className="text-xl font-semibold text-center text-black mb-2">
              Expert Mentorship
            </h3>
            <p className="text-sm text-center text-black">
              Guidance from industry leaders, always.
            </p>
          </div>

          {/* Card 3 */}
          <div className="relative bg-white/10 backdrop-blur-md rounded-3xl p-6 shadow-lg transition hover:scale-105 duration-300 text-white">
            {/* <div className="absolute top-4 right-4 bg-[#0195f7] text-white rounded-full w-6 h-6 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
                />
              </svg>
            </div> */}
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white/20 mb-4 mx-auto">
              <div className="w-10 h-10  text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                  />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-center text-black mb-2">
              Get Certified
            </h3>
            <p className="text-sm text-center text-black">
              Official certificates to boost your career.
            </p>
          </div>
        </motion.div>
      </main>
    </div>
  );
};
