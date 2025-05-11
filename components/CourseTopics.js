export const CourseTopics = () => {
  const topics = [
    "Web Development",
    "JavaScript",
    "TypeScript",
    "Web Design",
    "CSS",
    "Tailwind",
    "Bootstrap",
    "UI/UX Design",
    "Figma",
    "Angular",
    "React",
    "Vue.js",
    "Next.js",
    "Node.js",
    "Express.js",
    "Git",
    "GitHub",
    "REST APIs",
    "GraphQL",
    "MongoDB",
    "MySQL",
    "PostgreSQL",
    "Prisma",
    "Firebase",
    "Docker",
    "CI/CD",
    "Jest",
    "Cypress",
    "Web Accessibility (a11y)",
    "Progressive Web Apps (PWA)",
    "JAMstack",
    "Headless CMS",
    "SEO Optimization",
    "Vite",
    "Webpack",
    "Microservices",
  ];

  return (
    <div className="py-16 bg-gradient-to-r from-white via-[#f6e7ff] to-white  relative ">
      <div className="max-w-7xl mx-auto text-center px-6">
        {/* Top star icon with "Featured Topics" */}
        <div className="flex items-center justify-center gap-2  mb-4">
          <div className="text-black font-medium inline-flex  w-[155px] text-sm  items-center gap-1.5 bg-purple-50 border-2 border-gray-200  rounded-full">
            <span className="h-6 w-6 bg-purple-300 rounded-full flex items-center justify-center">
              <span className="text-purple-600"><svg xmlns="http://www.w3.org/2000/svg" fill="#976dff" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
</svg>

</span>
            </span>
          Featured Topics
          </div>
        </div>

        {/* Large heading */}
        <h2 className="md:text-4xl text-3xl text-gray-900 mb-4">
          Courses Topics
        </h2>

        {/* Description text */}
        <p className="text-black mb-12 max-w-2xl mx-auto">
          Explore the key topics covered in our courses, designed to equip you
          with the skills needed for real-world success.
        </p>

        {/* Topic buttons - arranged in 2 rows */}
        <div className="flex flex-wrap justify-center gap-5">
          {topics.map((topic, index) => (
            <div
              key={index}
              className="bg-gradient-to-b from-[#fbf4ff] to-[#ffffff] rounded-[20px] py-4 px-4 shadow-sm flex items-center gap-2"
              style={{
                boxShadow:
                  "0 15px 30px rgba(0,0,0,0.1), -20px 0 30px rgba(0,0,0,0.05)",
                border: "3px solid white",
              }}
            >
              <span className="text-purple-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  fill="#444444"
                >
                  <path d="M12,2 L12,22 M2,12 L22,12 M4.93,4.93 L19.07,19.07 M4.93,19.07 L19.07,4.93" />
                  <path
                    d="M12,2 L12,22 M2,12 L22,12 M4.93,4.93 L19.07,19.07 M4.93,19.07 L19.07,4.93"
                    fill="none"
                    stroke="#ebe0ff"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              <span className="font-medium text-gray-800">{topic}</span>
            </div>
          ))}
        </div>

        {/* Decorative elements */}
        <div className="absolute left-1/6 top-1/4 opacity-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-20 h-20 text-purple-500"
          >
            <path
              fillRule="evenodd"
              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="absolute right-1/6 top-1/4 opacity-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-20 h-20 text-purple-500"
          >
            <path
              fillRule="evenodd"
              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};
