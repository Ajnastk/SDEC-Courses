"use client";
import { Check, X } from "lucide-react";
import { useState } from "react";
import contents from "@/Contents"; // adjust this import path based on your file structure

export default function PremiumCourses() {
  const [selectedPlan, setSelectedPlan] = useState("pro");
  const { heading, subheading, rating, reviews, plans } =
    contents.PremimuCoursesData;

  return (
    <div
      id="join"
      className="py-16 bg-gradient-to-r  from-white via-[#f6e7ff] to-white "
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex lg:flex-row flex-col items-center justify-between mb-10  lg:gap-0 gap-6">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-semibold sm:font-normal text-black">
            {heading}
          </h1>
          <div className="text-right">
            <div className="sm:text-xl text-lg text-black text-center">
              {subheading}
            </div>
            <div className="flex items-center text-black mt-2">
              <span className="ml-2">{rating}/5</span>
              <span className="mx-2">•</span>
              <span>{reviews.toLocaleString()} Reviews</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              style={{ border: "3px solid white" }}
              key={plan.id}
              className="relative bg-purple-50 rounded-3xl lg:px-0 md:px-0 sm:px-6 px-6 shadow-md "
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
                  <h3 className="text-lg sm:text-xl md:text-md p-3 text-black mb-2 text-center">
                    {plan.name}
                  </h3>

                  <div
                    className="bg-gray-50 flex flex-col justify-center items-center rounded-2xl p-6 mb-6"
                    style={{
                      boxShadow: "inset 1px 1px 2px 1px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    <div className="flex text-center items-baseline">
                      <span className="md:text-2xl text-lg font-semibold text-black">
                        ${plan.price}
                      </span>
                      <span className="text-gray-900 ml-2">/mo</span>
                    </div>
                    <div className="text-gray-800 md:text-md text-sm mt-1">
                      Billed annually
                    </div>
                  </div>

                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, index) => (
                      <div key={index} className="flex items-center">
                        {feature.included ? (
                          <Check className="h-5 w-5 text-gray-800 mr-3" />
                        ) : (
                          <X className="h-5 w-5 text-gray-400 mr-3" />
                        )}
                        <span
                          className={`text-sm ${
                            feature.included ? "text-gray-800" : "text-gray-400"
                          }`}
                        >
                          {feature.name}
                        </span>
                      </div>
                    ))}
                  </div>

                  <button
                    className={`relative overflow-hidden w-full h-[45px] py-1 px-4 rounded-full text-md transition-colors cursor-pointer group ${
                      plan.id === "pro"
                        ? "bg-gradient-to-br from-gray-500 to-black text-white"
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
          ))}
        </div>
      </div>
    </div>
  );
}
