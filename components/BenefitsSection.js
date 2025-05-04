// BenefitsSection.jsx
import React from "react";

const BenefitsSection = () => {
  const benefits = [
    {
      title: "Built by Professionals",
      description:
        "Get the best Experience knowing that our Courses are built by Professionals.",
    },
    {
      title: "Completion Certificate",
      description:
        "Receive a Completion Award from our Team to enhance your motivation",
    },
    {
      title: "Instant Chat Help",
      description:
        "Have questions? Reach out for a quick chat—here for you 24/7",
    },
    {
      title: "Lifetime Membership",
      description:
        "With Just One Payment, you'll get Permanent Access to the Course.",
    },
    {
      title: "Access to Community",
      description:
        "Join Our Private Community to Connect with Like-Minded Individuals and Grow Together.",
    },
    {
      title: "Download for Offline Use",
      description:
        "Our courses can be downloaded, so you can watch them anytime, anywhere.",
    },
  ];

  return (
    <div
      id="benefits"
      className="py-16 bg-gradient-to-r from-white via-[#f6e7ff] to-white relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute left-1/6 top-1/6 opacity-5">
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
      <div className="absolute right-1/6 top-1/6 opacity-5">
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

      <div className="container max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-2">
            <div className="bg-purple-50 border-2 border-gray-200 px-0 py-0 rounded-full flex items-center">
              <div className="text-black font-medium w-[110px] text-sm flex items-center gap-4">
                <span className="h-6 w-6 bg-purple-300 rounded-full flex items-center justify-center">
                  <span className="text-purple-600"></span>
                </span>
                Benefits
              </div>
            </div>
          </div>

          <h2 className="md:text-4xl text-3xl text-black mb-4">Key Benefits of Courses</h2>
          <p className="text-black max-w-xl mx-auto">
            Explore the incredible advantages of enrolling in our courses and
            enhancing your skills for the ultimate career success.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              style={{ border: "3px solid white" }}
              key={index}
              className="bg-gradient-to-b from-[#f9f6fb] to-[#ffffff] rounded-[30px] shadow-lg p-8 relative"
            >
              <div className="w-10 h-10 rounded-md bg-gray-100 mb-6"></div>
              <h3 className="text-xl font-poppins font-semibold text-black mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BenefitsSection;
