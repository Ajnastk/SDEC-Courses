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
    <div className="bg-gradient-to-l from-white via-[#f7eafe] to-white grid md:grid-cols-3 grid-cols-1 gap-6 max-w-7xl mx-auto pt-[80px]">
      {testimonials.map((t, i) => (
        <div
          key={i}
          className={`rounded-4xl shadow-lg p-6 bg-white ${
            i % 2 === 0 ? "h-[320px]" : "h-[380px]"
          }`}
        >
          <div className="flex justify-between mb-4">
            <div className="flex space-x-1 text-yellow-400">
              {Array(5)
                .fill()
                .map((_, i) => (
                  <span key={i}>★</span>
                ))}
            </div>
            <div>
              <img src="/linkedin.svg" alt="LinkedIn" className="w-5 h-5" />
            </div>
          </div>
          <p className="text-sm text-gray-700 italic mb-4">"{t.quote}"</p>
          <div className="flex items-center space-x-3">
            <img
              src={t.image}
              alt={t.name}
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <p className="font-semibold text-sm">{t.name}</p>
              <p className="text-xs text-gray-500">{t.title}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
