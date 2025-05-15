"use client";
import { Check, X } from "lucide-react";
import { useState } from "react";
import { FadeInOnScroll } from "./FadeInOnScroll";

// For demonstration purposes, I'm including the data here
// In your actual implementation, you'd import it from @/Contents
const contents = {
  PremiumCoursesData: {
    heading: "Join Our Premium Courses",
    subheading: "Trusted by 70k+ students",
    rating: 4.8,
    reviews: 5467,
    plans: [
      {
        id: "starter",
        name: "Career Foundation Course",
        price: "5,000",
        isPopular: false,
        duration: "7 days",
        features: [
          { name: "Basic programming", included: true },
          { name: "Career guidance", included: true },
          { name: "Introduction to web development", included: true },
          { name: "Portfolio building", included: true },
        ],
      },
      {
        id: "pro",
        name: "Full Stack Developer Course",
        price: "80,000",
        isPopular: true,
        duration: "7 months",
        features: [
          { name: "HTML, CSS, JavaScript", included: true },
          { name: "React", included: true },
          { name: "Node.js, Express.js", included: true },
          { name: "MongoDB, SQL", included: true },
          { name: "Project Deployment, Full-stack architecture.", included: true },
        ],
      },
      {
        id: "business",
        name: "Aspiring Engineers Program",
        price: "200,000",
        isPopular: false,
        duration: "1.5 years (start earning in 6 months)",
        features: [
          { name: "Career Foundation Course", included: true },
          { name: "Front-End Developer Course", included: true },
          { name: "Back-End Developer Course", included: true },
          { name: "Freelance Master Course", included: true },
          { name: "Entrepreneur Course", included: true },
        ],
      },
    ],
  },
};

export default function PremiumCourses() {
  const [selectedPlan, setSelectedPlan] = useState("pro");
  const { heading, subheading, rating, reviews, plans } = contents.PremiumCoursesData;

  return (
    <div
      id="join"
      className="py-16 bg-gradient-to-r from-white via-[#f6e7ff] to-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex lg:flex-row flex-col md:text-start text-center items-center justify-between mb-10 lg:gap-0 gap-6">
          <h2 className="md:text-4xl text-3xl font-poppins text-black md:mb-4 mb-0">
            {heading}
          </h2>
          <div className="text-right">
            <div className="sm:text-xl text-lg text-black text-center">
              {subheading}
            </div>
            <div className="flex items-center justify-center text-black mt-2">
              <span className="ml-2">{rating}/5</span>
              <span className="mx-2">•</span>
              <span>{reviews.toLocaleString()} Reviews</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              style={{ 
                border: plan.id === "pro" ? "3px solid #9333ea" : "3px solid white",
                transform: plan.id === "pro" ? "scale(1.03)" : "scale(1)",
                zIndex: plan.id === "pro" ? "10" : "1"
              }}
              key={plan.id}
              className="relative bg-gradient-to-b from-[#f9f6fb] to-[#fefcff] rounded-3xl lg:px-0 md:px-0 sm:px-6 px-6 shadow-md transition-all duration-300 hover:shadow-lg"
            >
              {plan.isPopular && (
                <div className="absolute top-1 md:-left-8 -left-6 z-10 rotate-[-20deg]">
                  <div className="bg-gradient-to-br from-purple-300 to-purple-700 text-white px-4 py-1 rounded-full shadow-md text-md">
                    Popular Plan
                  </div>
                </div>
              )}

              <div>
                <div className="py-7 md:px-6">
                  <h3 className={`text-lg sm:text-xl md:text-md p-3 mb-2 text-center font-semibold ${plan.id === "pro" ? "text-purple-700" : "text-black"}`}>
                    {plan.name}
                  </h3>

                  <div
                    className={`flex flex-col justify-center items-center rounded-2xl p-6 mb-6 ${plan.id === "pro" ? "bg-purple-50" : "bg-gray-50"}`}
                    style={{
                      boxShadow: "inset 1px 1px 2px 1px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    <div className="flex text-center items-baseline">
                      <span className={`md:text-2xl text-lg font-semibold ${plan.id === "pro" ? "text-purple-800" : "text-black"}`}>
                        ₹{plan.price}
                      </span>
                    </div>
                    <span className="text-gray-800 md:text-md text-sm mt-1">
                      {plan.duration}
                    </span>
                  </div>

                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        {feature.included ? (
                          <Check className={`h-5 w-5 mr-3 ${plan.id === "pro" ? "text-purple-700" : "text-gray-800"}`} />
                        ) : (
                          <X className="h-5 w-5 text-gray-400 mr-3" />
                        )}
                        <span
                          className={`text-sm ${
                            feature.included ? (plan.id === "pro" ? "text-purple-800" : "text-gray-800") : "text-gray-400"
                          }`}
                        >
                          {feature.name}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Add margin-top to first and last card button */}
                  <div className={`${index === 0 ? 'mt-20' : index === plans.length - 1 ? 'mt-12' : ''}`}>
                    <button
                      className={`relative overflow-hidden w-full h-[45px] py-1 px-4 rounded-full text-md transition-colors cursor-pointer group ${
                        plan.id === "pro"
                          ? "bg-gradient-to-br from-purple-500 to-purple-900 text-white"
                          : "bg-white text-black border border-black hover:bg-gray-50"
                      }`}
                      onClick={() => setSelectedPlan(plan.id)}
                    >
                      <span className="absolute inset-0 flex items-center justify-center transition-transform duration-500 group-hover:-translate-y-full">
                        Get Started
                      </span>
                      <span className="absolute inset-0 flex items-center justify-center translate-y-full transition-transform duration-500 group-hover:translate-y-0">
                        Get Started
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}