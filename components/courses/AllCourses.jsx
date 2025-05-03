"use client"
import { useState, useEffect } from "react";
import { House, ChevronRight, ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import ImgCourse from "../../public/Images/courses.jpeg"

export default function AllCourses() {
  const [filter, setFilter] = useState("All");
  const [visibleCourses, setVisibleCourses] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [cardsToShow, setCardsToShow] = useState(9);
  
  const courses = [
    {
      id: 1,
      title: "JavaScript Full Mastery 2024",
      description:
        "Master JavaScript with our updated course. Learn core concepts, ES6+, and advanced techniques to build modern web applications.",
      price: 99,
      image: ImgCourse,
      level: "Intermediate",
      featured: true,
    },
    {
      id: 2,
      title: "How To Become Web Developer In 2024",
      description:
        "Become a web developer in 2024 with our step-by-step course. Master HTML, CSS, JavaScript, and modern frameworks.",
      price: 59,
      image: ImgCourse,
      level: "Intermediate",
      featured: false,
    },
    {
      id: 3,
      title: "Node JS & React JS Full Mastery",
      description:
        "Master Node.js and React.js with this all-in-one course. Learn to build fast, scalable server-side applications and interactive UIs.",
      price: 79,
      image: ImgCourse,
      level: "Advanced",
      featured: true,
    },
    {
      id: 4,
      title: "Python for Data Science & ML",
      description:
        "Learn Python programming for data science and machine learning. Master pandas, numpy, matplotlib, and scikit-learn.",
      price: 89,
      image: ImgCourse,
      level: "Intermediate",
      featured: true,
    },
    {
      id: 5,
      title: "UI/UX Design Masterclass",
      description:
        "Comprehensive UI/UX design course covering user research, wireframing, prototyping, and design systems using Figma.",
      price: 69,
      image: ImgCourse,
      level: "Beginner",
      featured: true,
    },
    {
      id: 6,
      title: "Flutter Mobile App Development",
      description:
        "Build beautiful, native mobile apps for iOS and Android from a single codebase using Flutter and Dart.",
      price: 79,
      image: ImgCourse,
      level: "Intermediate",
      featured: false,
    },
    {
      id: 7,
      title: "AWS Cloud Certification",
      description:
        "Prepare for AWS certification exams with this comprehensive course covering all major AWS services and cloud architecture.",
      price: 109,
      image: ImgCourse,
      level: "Advanced",
      featured: true,
    },
    {
      id: 8,
      title: "GraphQL API Development",
      description:
        "Master GraphQL API development with Node.js. Learn to build efficient, flexible APIs that clients love.",
      price: 69,
      image: ImgCourse,
      level: "Intermediate",
      featured: false,
    },
    {
      id: 9,
      title: "Next.js Full Stack Development",
      description:
        "Build modern web applications with Next.js. Master server-side rendering, static generation, and API routes.",
      price: 89,
      image: ImgCourse,
      level: "Advanced",
      featured: true,
    },
    {
      id: 10,
      title: "Blockchain & Web3 Development",
      description:
        "Enter the world of blockchain and Web3 development. Learn to build decentralized applications with Ethereum and Solidity.",
      price: 99,
      image: ImgCourse,
      level: "Advanced",
      featured: true,
    },
    {
      id: 11,
      title: "DevOps Engineering Fundamentals",
      description:
        "Learn essential DevOps practices, tools, and methodologies. Master CI/CD pipelines, Docker, Kubernetes, and more.",
      price: 89,
      image: ImgCourse,
      level: "Intermediate",
      featured: false,
    },
    {
      id: 12,
      title: "TypeScript for Modern Development",
      description:
        "Master TypeScript for modern web development. Learn type systems, interfaces, generics, and integration with popular frameworks.",
      price: 69,
      image: ImgCourse,
      level: "Intermediate",
      featured: true,
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
    window.addEventListener('resize', handleResize);
    
    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Update visible courses whenever filter or cardsToShow changes
  useEffect(() => {
    const filtered = filter === "All" 
      ? courses 
      : courses.filter(course => course.featured);
    
    setVisibleCourses(filtered.slice(0, cardsToShow));
  }, [filter, cardsToShow]);

  const loadMoreCourses = () => {
    const filtered = filter === "All" 
      ? courses 
      : courses.filter(course => course.featured);
    
    // Show all remaining courses
    setVisibleCourses(filtered);
  };

  // Check if we need to show the load more button
  const filteredCourses = filter === "All" 
    ? courses 
    : courses.filter(course => course.featured);
  
  const hasMoreToLoad = visibleCourses.length < filteredCourses.length;

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
          <span className="text-gray-600 font-medium">All courses</span>
        </div>

        {/* Heading */}
        
        <div className="flex flex-col items-center">
          <h1 className="lg:text-5xl text-3xl text-center lg:font-medium font-semibold lg:w-[65%] md:w-[80%] mb-6 text-gray-900">
            All Online Courses
          </h1>

          {/* Subheading */}
          <p className="text-md text-gray-700 mb-16 max-w-3xl mx-auto">
            Find what fascinates you as you explore these online courses.
          </p>
        </div>

        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl  text-black">All Courses</h1>
          
          <div className="relative">
            <button 
              className="px-4 py-2 rounded-lg shadow-2xl text-lg bg-white flex items-center  text-black gap-2"
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
        </div>
   
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-12">
          {visibleCourses.map((course) => (
            <div key={course.id} className="bg-white rounded-[22px] shadow-lg overflow-hidden p-6 transition-transform duration-300 ease-in-out transform-gpu hover:translate-x-[0px] hover:[transform:perspective(160px)_rotateY(-3deg)_rotateX(0deg)_rotate(-0deg)]">
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
                  <span className="text-xl text-right text-black">${course.price}</span>
                </div>
                <h3 className="text-xl text-black mb-2 truncate">{course.title}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">{course.description}</p>
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
        </div>

        {/* Load More button */}
        {hasMoreToLoad && (
          <div className="flex justify-center pb-12">
            <button 
              onClick={loadMoreCourses}
              className="px-8 py-3 border border-black rounded-full text-gray-700 hover:bg-black hover:text-white transition shadow"
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </div>
  );
}