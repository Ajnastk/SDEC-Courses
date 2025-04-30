"use client";
import { Check, X } from "lucide-react";
import { useState } from "react";
import contents from "@/Contents"; // adjust this import path based on your file structure

export default function PremiumCourses() {
  const [selectedPlan, setSelectedPlan] = useState("pro");
  const { heading, subheading, rating, reviews, plans } = contents.PremimuCoursesData;

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center py-16 px-0">
      <div className="max-w-7xl w-full">
        <div className="flex justify-between mb-10 px-8">
          <h1 className="text-5xl text-black">{heading}</h1>
          <div className="text-right">
            <div className="text-xl text-black">{subheading}</div>
            <div className="flex items-center text-black mt-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <span key={star} className="text-yellow-400 text-2xl">★</span>
              ))}
              <span className="ml-2">{rating}/5</span>
              <span className="mx-2">•</span>
              <span>{reviews.toLocaleString()} Reviews</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 px-5">
          {plans.map((plan) => (
            <div 
              key={plan.id}
              className="relative bg-white rounded-3xl md:w-[380px] md:h-[480px] shadow-md overflow-hidden"
            >
              {plan.isPopular && (
                <div className="absolute top-10 -right-8 rotate-45">
                  <div className="bg-purple-500 text-white px-10 py-1 font-medium">
                    Popular Plan
                  </div>
                </div>
              )}
              
              <div className="py-4 md:px-6">
                <h3 className="text-md p-3 text-black md:mb-4 text-center">{plan.name}</h3>
                
                <div className="bg-blue-50 md:flex flex-col justify-center items-center rounded-2xl p-6 mb-6">
                  <div className="flex textce items-baseline">
                    <span className="text-3xl text-black">${plan.price}</span>
                    <span className="text-gray-900 ml-2">/mo</span>
                  </div>
                  <div className="text-gray-800 mt-1">Billed annually</div>
                </div>
                
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      {feature.included ? (
                        <Check className="h-5 w-5 text-gray-800 mr-3" />
                      ) : (
                        <X className="h-5 w-5 text-gray-400 mr-3" />
                      )}
                      <span className={feature.included ? "text-gray-800" : "text-gray-400"}>
                        {feature.name}
                      </span>
                    </div>
                  ))}
                </div>
                
                <button
                  className={`w-full md:h-[40px] py-1 px-6 rounded-full text-lg font-medium transition-colors ${
                    plan.id === "pro"
                      ? "bg-black text-white hover:bg-gray-800"
                      : "bg-white text-black border border-gray-300 hover:bg-gray-50"
                  }`}
                  onClick={() => setSelectedPlan(plan.id)}
                >
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
