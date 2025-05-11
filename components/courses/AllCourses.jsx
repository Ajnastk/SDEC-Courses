"use client";
import { useState, useEffect } from "react";
import { House, ChevronRight, ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import ImgCourse from "../../public/Images/courses.jpeg";
import { motion } from "framer-motion";

export default function AllCourses() {
  const [filter, setFilter] = useState("All");
  const [visibleCourses, setVisibleCourses] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [cardsToShow, setCardsToShow] = useState(9);

  const CoursesHeadLine = ["All", "Online" ,"Courses"]
  const CourseSubHeadline = [ "Find" ,"what" ,"fascinates" ,"you" ,"as" ,"you", "explore" ,"these" ,"online", "courses."]

  const courses = [
    {
      id: 1,
      title: "Career Foundation Course",
      description:
        " Kickstart your journey in tech with the foundational skills needed for a successful career.",
      price: "5,000",
      image: ImgCourse,
      level: "Intermediate",
      featured: true,
    },
    {
      id: 2,
      title: "Front-End Developer Course ",
      description:
        "Purpose: Learn the key technologies used to build interactive and user-friendly websites.",
      price: "45,000",
      image: ImgCourse,
      level: "Intermediate",
      featured: false,
    },
    {
      id: 3,
      title: "Back-End Developer Course",
      description:
        " Master server-side development and databases to build dynamic web applications.",
      price: "50,000",
      image: ImgCourse,
      level: "Intermediate",
      featured: false,
    },
    {
      id: 4,
      title: "Full Stack Developer Course",
      description:
        "Become proficient in both front-end and back-end development to build end-to-end web applications.",
      price: "80,000",
      image: ImgCourse,
      level: "Intermediate",
      featured: true,
    },
    {
      id: 5,
      title: "Freelance Master Course",
      description:
        "Equip yourself with the skills needed to successfully work as a freelancer in the tech world.",
      price: "50,000",
      image: ImgCourse,
      level: "Intermediate",
      featured: true,
    },
    {
      id: 6,
      title: "Entrepreneur Course",
      description:
        "Learn how to build and scale your own tech startup.",
      price: "100,000",
      image: ImgCourse,
      level: "Intermediate",
      featured: true,
    },
    {
      id: 7,
      title: "Aspiring Engineers Program ",
      description:
        "Access to all the above courses and more, with in-depth mentorship and personalized guidance.",
      price: "200,000",
      image: ImgCourse,
      level: "Advanced",
      featured: true,
    },
    {
      id: 8,
      title: "Digital Marketing Mastery",
      description:
        " Gain comprehensive skills in digital marketing to help businesses grow online.",
      price: "38,000",
      image: ImgCourse,
      level: "Intermediate",
      featured: false,
    },
    
  ];

  // Determine how many cards to show initially based on screen size
  useEffect(() => {
    const handleResize = () => {
      // For small screens show 6 cards, for larger screens show 9
      if (window.innerWidth < 768) {
        setCardsToShow(6);
      } else {
        setCardsToShow(9);
      }
    };

    // Set initial value
    handleResize();

    // Add resize listener
    window.addEventListener("resize", handleResize);

    // Clean up
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Update visible courses whenever filter or cardsToShow changes
  useEffect(() => {
    const filtered =
      filter === "All" ? courses : courses.filter((course) => course.featured);

    setVisibleCourses(filtered.slice(0, cardsToShow));
  }, [filter, cardsToShow]);

  const loadMoreCourses = () => {
    const filtered =
      filter === "All" ? courses : courses.filter((course) => course.featured);

    // Show all remaining courses
    setVisibleCourses(filtered);
  };

  // Check if we need to show the load more button
  const filteredCourses =
    filter === "All" ? courses : courses.filter((course) => course.featured);

  const hasMoreToLoad = visibleCourses.length < filteredCourses.length;

  return (
    <div className="bg-gradient-to-l from-white via-[#f7eafe] to-white pt-[150px]">
      <div className="max-w-7xl mx-auto px-6 md:px-6 text-center">
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
          <span className="text-gray-600 font-medium">All courses</span>
        </motion.div>

        {/* Heading */}

        <div className="flex flex-col items-center">
          <h1 className="lg:text-5xl md:text-4xl sm:text-4xl text-3xl text-center lg:font-medium font-semibold lg:w-[65%] md:w-[80%] mb-6 text-gray-900">
          {CoursesHeadLine.map((word, index) => (
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
          {CourseSubHeadline.map((word, index) => (
                  <motion.span
                    key={index}
                    className="inline-block mr-2"
                    initial={{ opacity: 0, filter: "blur(8px)" }}
                    animate={{ opacity: 1, filter: "blur(0px)" }}
                    transition={{
                      duration: 0.1,
                      delay: CourseSubHeadline.length * 0.0 + index * 0.1,
                      ease: "easeIn",
                    }}
                  >
                    {word}
                  </motion.span>
                ))}
          </p>
        </div>

        {/* <motion.div 
        className="flex justify-between items-center mb-4 z-50"
         initial={{ opacity: 0, filter: "blur(8px)" }}
         animate={{ opacity: 1, filter: "blur(0px)" }}
         transition={{ delay: 0.4 }}
        >
          <h1 className="text-xl  text-black">All Courses</h1>

          <div className="relative">
            <button
              className="px-4 py-2 rounded-lg shadow-2xl text-lg bg-white flex items-center  text-black gap-2 z-30"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              {filter} <ChevronDown size={16} />
            </button>
            {showDropdown && (
              <div className="absolute right-0 top-full mt-1 bg-white shadow-2xl rounded-lg z-10">
                <button
                  className="block w-full text-left px-4 py-2 text-black hover:bg-gray-50"
                  onClick={() => {
                    setFilter("All");
                    setShowDropdown(false);
                  }}
                >
                  All
                </button>
                <button
                  className="block w-full text-left px-4 py-2 hover:bg-gray-50  text-black"
                  onClick={() => {
                    setFilter("Featured");
                    setShowDropdown(false);
                  }}
                >
                  Featured
                </button>
              </div>
            )}
          </div>
        </motion.div> */}
        <motion.div
         className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4 pb-12 z-0"
         initial={{ opacity: 0, filter: "blur(8px)" }}
      animate={{ opacity: 1, filter: "blur(0px)" }}
      transition={{ delay: 0.4 }}
        >
          {visibleCourses.map((course) => (
            <div
              style={{ border: "3px solid white" }}
              key={course.id}
              className="bg-gradient-to-b from-[#f9f1fe] to-[#ffffff] rounded-[22px] shadow-lg overflow-hidden p-6 transition-transform duration-300 ease-in-out transform-gpu hover:translate-x-[0px] hover:[transform:perspective(160px)_rotateY(-3deg)_rotateX(0deg)_rotate(-0deg)]"
            >
              <div className="relative w-full h-48">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover rounded-[22px]"
                />
              </div>
              <div>
                <div className="flex justify-end items-center py-3">
                  <span className="text-xl text-right text-black">
                    {course.price} ₹
                  </span>
                </div>
                <h1 className="text-xl text-black mb-2 truncate">
                  {course.title}
                </h1>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {course.description}
                </p>
                <div className="flex justify-between items-center">
                  {course.featured && (
                    <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">
                      Featured
                    </span>
                  )}
                  {!course.featured && <span></span>}
                  <span className="text-gray-600 text-sm">{course.level}</span>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Load More button */}
        {hasMoreToLoad && (
        <motion.div
          className="flex justify-center pb-12"
           initial={{ opacity: 0, y: 0 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.5, duration: 0.6 }}
         > 
            <button
              onClick={loadMoreCourses}
              className="px-8 py-3 border border-black rounded-full text-gray-700 hover:bg-black hover:text-white transition shadow"
            >
              Load More
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
