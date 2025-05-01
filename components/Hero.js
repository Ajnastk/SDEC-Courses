"use client";
import { motion } from "framer-motion";
import { HeroBackground } from "./HeroBackground";
import Now from "./Now";

export const Hero = () => {
  const headlineWords = [
    "Web",
    "Dev",
    "&",
    "Design",
    "made",
    "Simple,",
    "Better.",
  ];
  const subheadlineWords = [
    "Practical",
    "project-based",
    "courses",
    "that",
    "are",
    "easy",
    "to",
    "understand,",
    "straight",
    "to",
    "the",
    "point,",
    "and",
    "distractions",
    "while",
    "ensuring",
    "comprehensive",
    "learning.",
  ];
  return (
    <div className="relative min-h-screen  overflow-hidden text-black">
      {/* Background with floating color orbs */}
      <HeroBackground />
      
      <main className="relative container max-w-5xl mx-auto px-4 py-20 text-center z-10">
                {/* Trusted badge */}
        <div className="inline-flex items-center bg-white/30 backdrop-blur-sm rounded-full px-4 py-2 mb-10">
          <span className="w-2 h-2 bg-black rounded-full mr-2"></span>
          <p className="text-sm text-gray-800">
            Trusted by 20,000+ Happy Learners
          </p>
        </div>

        {/* Animated headline */}
        <h1 className="md:text-7xl text-5xl font-bold mb-6 leading-tight">
          {headlineWords.map((word, index) => (
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

        {/* Animated subheadline */}
        <div className="max-w-2xl mx-auto mb-10">
          <p className="text-md">
            {subheadlineWords.map((word, index) => (
              <motion.span
                key={index}
                className="inline-block mr-1"
                initial={{ opacity: 0, filter: "blur(8px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                transition={{
                  duration: 0.1,
                  delay: headlineWords.length * 0.1 + index * 0.1,
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
            className="px-6  bg-white/30  py-5 backdrop-blur-sm text-gray-800 rounded-full font-medium hover:bg-white/40 transition cursor-pointer"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2.8 }}
          >
            View All Courses
          </motion.button>

          <motion.button
            className="relative overflow-hidden group px-3 md:py-1 py-2 bg-white/60 backdrop-blur-sm rounded-full font-medium hover:bg-white/70 transition cursor-pointer border-4 border-orange-100"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 3 }}
          >
            <span className="block relative md:h-11 w-46">
            <Now className="text-gray-800" />
            </span>
          </motion.button>
        </div>

        {/* Updated Feature Cards – Matching Glass Style */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.2, duration: 0.6 }}
        >
          {/* Card 1 */}
          <div className="relative bg-white/10 backdrop-blur-md rounded-3xl p-6 shadow-lg transition hover:scale-105 duration-300 text-white">
            {/* Badge */}
            <div className="absolute top-4 right-4 bg-black text-white rounded-4xl w-[24px] p-1 text-xs">
              ✔
            </div>

            {/* Icon Circle */}
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white/20 mb-4 mx-auto">
              <div className="w-8 h-8 bg-orange-400 rounded-lg"></div>
            </div>

            {/* Title & Text */}
            <h3 className="text-xl font-semibold text-center mb-2">
              Design Tools
            </h3>
            <p className="text-sm text-center text-white/80">
              Master Figma and modern design systems.
            </p>
          </div>

          {/* Card 2 */}
          <div className="relative bg-white/10 backdrop-blur-md rounded-3xl p-6 shadow-lg transition hover:scale-105 duration-300 text-white">
            <div className="absolute top-4 right-4 bg-black w-[24px] text-white rounded-full p-1 text-xs">
              ✔
            </div>
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white/20 mb-4 mx-auto">
              <div className="w-0 h-0 border-y-8 border-y-transparent border-l-8 border-l-white ml-1"></div>
            </div>
            <h3 className="text-xl font-semibold text-center mb-2">
              Video Lessons
            </h3>
            <p className="text-sm text-center text-white/80">
              Learn with visual and easy-to-follow videos.
            </p>
          </div>

          {/* Card 3 */}
          <div className="relative bg-white/10 backdrop-blur-md rounded-3xl p-6 shadow-lg transition hover:scale-105 duration-300 text-white">
            <div className="absolute top-4 right-4 bg-black text-white rounded-full w-[24px] p-1 text-xs">
              ✔
            </div>
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white/20 mb-4 mx-auto">
              <div className="w-10 h-10 bg-pink-400 rounded-full"></div>
            </div>
            <h3 className="text-xl font-semibold text-center mb-2">
              Certified
            </h3>
            <p className="text-sm text-center text-white/80">
              Earn official certifications after course completion.
            </p>
          </div>
        </motion.div>
      </main>
    </div>
  );
};
