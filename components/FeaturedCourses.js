import Image from "next/image";
import Link from "next/link";
import ImgCourse from "../public/Images/courses.jpeg";
export default function FeaturedCourses() {
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
        id: 7,
        title: "Aspiring Engineers Program ",
        description:
          "Access to all the above courses and more, with in-depth mentorship and personalized guidance.",
        price: "200,000",
        image: ImgCourse,
        level: "Advanced",
        featured: true,
      },,
  ];

  return (
    <div className="py-16 bg-gradient-to-r  from-white via-[#f6e7ff] to-white ">
      <div className="max-w-7xl mx-auto px-6">
        {/* Decorative elements */}

        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-2">
            <div className="bg-purple-50 border-2 border-gray-200 px-0 py-0 rounded-full flex items-center">
              <div className="text-black font-medium w-[130px] text-sm flex items-center gap-2">
                <span className="h-6 w-6 bg-purple-300 rounded-full flex items-center justify-center">
                  <span className="text-purple-600"></span>
                </span>
                Our Courses
              </div>
            </div>
          </div>
          <h2 className="md:text-4xl text-3xl text-black mb-4">Featured Courses</h2>
          <p className="text-black max-w-xl mx-auto">
            From critical skills to technical topics, we support your
            professional development with courses that help you grow and
            succeed.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 ">
          {courses.map((course) => (
            <div
              style={{ border: "3px solid white" }}
              key={course.id}
              className="bg-gradient-to-b from-[#f6f2f8] to-[#ffffff] rounded-[22px] shadow-lg overflow-hidden p-6 transition-transform duration-300 ease-in-out transform-gpu hover:translate-x-[0px] hover:[transform:perspective(160px)_rotateY(-3deg)_rotateX(0deg)_rotate(-0deg)]"
            >
              <div className="relative w-full h-50">
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
                <h3 className="text-xl text-black mb-2 truncate">
                  {course.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {course.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">
                    Featured
                  </span>
                  <span className="text-gray-600 text-sm">{course.level}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View Courses button */}
        <div className="flex justify-center">
          <Link href="/courses">
            <button className="px-8 py-3 border border-black rounded-full text-gray-700  hover:bg-black hover:text-white transition shadow">
              View Courses
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
