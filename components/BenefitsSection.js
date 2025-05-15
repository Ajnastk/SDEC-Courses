// BenefitsSection.jsx
import React from "react";
import { FadeInOnScroll } from "./FadeInOnScroll";

const BenefitsSection = () => {
  const benefits = [
    {
      icon:<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-8">
  <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
</svg>

,

      title: "Built by Professionals",
      description:
        "Get the best Experience knowing that our Courses are built by Professionals.",
    },
    {
      icon:<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-8">
  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
</svg>
,
      title: "Completion Certificate",
      description:
        "Receive a Completion Award from our Team to enhance your motivation",
    },
    {
      icon:<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-8">
  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
</svg>
,
      title: "Instant Chat Help",
      description:
        "Have questions? Reach out for a quick chat—here for you 24/7",
    },
    {
      icon:<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-8">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
</svg>
,
      title: "Lifetime Membership",
      description:
        "With Just One Payment, you'll get Permanent Access to the Course.",
    },
    {
      icon:<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-8">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z" />
</svg>
,
      title: "Access to Community",
      description:
        "Join Our Private Community to Connect with Like-Minded Individuals and Grow Together.",
    },
    {
      icon:<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-8">
  <path strokeLinecap="round" strokeLinejoin="round" d="m9 13.5 3 3m0 0 3-3m-3 3v-6m1.06-4.19-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
</svg>
,
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
      {/* <div className="absolute left-1/6 top-1/6 opacity-5">
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
      </div> */}

      <div className="container max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-2">
            <div className="bg-purple-50 border-2 border-gray-200 px-0 py-0 rounded-full flex items-center">
              <div className="text-black font-medium w-[110px] text-sm flex items-center gap-3">
                <span className="h-6 w-6 bg-purple-300 rounded-full flex items-center justify-center">
                  <span className="text-purple-600">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#976dff" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
</svg>

                  </span>
                </span>
                Benefits
              </div>
            </div>
          </div>
          <FadeInOnScroll direction="up" delay={0.1}>
          <h2 className="md:text-4xl text-3xl text-black mb-4">Key Benefits of Courses</h2>
          </FadeInOnScroll>
           <FadeInOnScroll direction="up" delay={0.2}>
          <p className="text-black max-w-xl mx-auto">
            Explore the incredible advantages of enrolling in our courses and
            enhancing your skills for the ultimate career success.
          </p>
          </FadeInOnScroll>
        </div>

        {/* Benefits Grid */}
          <FadeInOnScroll direction="up" delay={0.3}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              style={{ border: "3px solid white" }}
              key={index}
              className="bg-gradient-to-b from-[#f9f6fb] to-[#ffffff] rounded-[30px] shadow-lg p-8 relative"
            >
               <FadeInOnScroll direction="up" delay={0.4}>
              <div className="w-10 h-10  text-gray-400 p-[3px] rounded-md bg-white mb-6"
              style={{
                        boxShadow:
                          "0 15px 30px rgba(0,0,0,0.1), -20px 0 30px rgba(0,0,0,0.05)",
                        border: "1px solid rgba(255,255,255,0.2)",
                      }}
              >{benefit.icon}</div>
              <h3 className="text-xl font-poppins font-semibold text-black mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600">{benefit.description}</p>
                </FadeInOnScroll>
            </div>
           
          ))}
        </div>
        </FadeInOnScroll>
       
      </div>
    </div>
  );
};

export default BenefitsSection;
