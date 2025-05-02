import ajnas from "../public/Images/ajnas.jpg";
import Image from "next/image";

const testimonials = [
  {
    name: "Brendan Wilson",
    title: "Aspiring Web Designer",
    quote: "Engaging and insightful! I’ve learned so much more than expected.",
    image: "/user1.jpg",
  },
  {
    name: "Jane Hosl",
    title: "Web Designer",
    quote:
      "Absolutely worth it! The structure, depth, and hands-on approach make learning a breeze.",
    image: ajnas,
  },
  {
    name: "Brendan Wilson",
    title: "Aspiring Web Designer",
    quote: "Engaging and insightful! I’ve learned so much more than expected.",
    image: "/user1.jpg",
  },
  {
    name: "Jane Hosl",
    title: "Web Designer",
    quote:
      "Absolutely worth it! The structure, depth, and hands-on approach make learning a breeze.",
    image: "/user2.jpg",
  },
  {
    name: "Brendan Wilson",
    title: "Aspiring Web Designer",
    quote: "Engaging and insightful! I’ve learned so much more than expected.",
    image: "/user1.jpg",
  },
  {
    name: "Jane Hosl",
    title: "Web Designer",
    quote:
      "Absolutely worth it! The structure, depth, and hands-on approach make learning a breeze.",
    image: "/user2.jpg",
  },
  {
    name: "Brendan Wilson",
    title: "Aspiring Web Designer",
    quote: "Engaging and insightful! I’ve learned so much more than expected.",
    image: "/user1.jpg",
  },
  {
    name: "Jane Hosl",
    title: "Web Designer",
    quote:
      "Absolutely worth it! The structure, depth, and hands-on approach make learning a breeze.",
    image: "/user2.jpg",
  },
  {
    name: "Jane Hosl",
    title: "Web Designer",
    quote:
      "Absolutely worth it! The structure, depth, and hands-on approach make learning a breeze.",
    image: "/user2.jpg",
  },
];

export default function StudentSuccessStories() {
  return (
    <div className="bg-gradient-to-l from-white via-[#f7eafe] to-white py-[80px]">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2  grid-cols-1 gap-8 max-w-7xl mx-auto px-4 ">
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
    </div>
    </div>
  );
}
