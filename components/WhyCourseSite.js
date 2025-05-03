import { Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import Rasha from "../public/Images/Rasha.jpg";
export const WhyCourseSite = () => {
  return (
    <div className="py-16 bg-gradient-to-r from-white via-[#f6e7ff] to-white px-4">
      <div className="max-w-7xl mx-auto flex flex-col">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="text-black inline-flex  w-[110px] text-sm  items-center gap-2 bg-purple-50 border-2 border-gray-200  rounded-full mb-5">
            <span className="h-6 w-6 bg-purple-300 rounded-full flex items-center justify-center">
              <span className="text-purple-600">i</span>
            </span>
            About me
          </div>

          <h2 className="text-4xl  text-black mb-4 relative">But Why SDEC ?</h2>

          <p className="text-black max-w-2xl mx-auto">
            Explore the incredible advantages of enrolling in our courses and
            enhancing your skills for the ultimate career success.
          </p>
        </div>

        {/* Main Grid Content */}
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col">
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-12">
              {/* Left Column */}
              <div className="space-y-8 flex flex-col justify-center items-center">
                {/* Certificate Section */}
                <div className="px-4">
                  <div className="flex flex-col  gap-3 mb-3">
                    <div
                      className="flex text-gray-400  w-12 rounded-md bg-white justify-center"
                      style={{
                        boxShadow:
                          "0 15px 30px rgba(0,0,0,0.1), -20px 0 30px rgba(0,0,0,0.05)",
                        border: "1px solid rgba(255,255,255,0.2)",
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-8 h-8"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                        />
                      </svg>
                    </div>
                    <h3 className="text-2xl  text-black">
                      Certificate of Completion
                    </h3>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Receive a recognized credential that significantly boosts
                    your resume.
                  </p>
                </div>

                {/* Networking Section */}
                <div className="px-4">
                  <div className="flex flex-col  gap-3 mb-3">
                    <div
                      className="flex text-gray-400  w-12 rounded-md bg-white justify-center"
                      style={{
                        boxShadow:
                          "0 15px 30px rgba(0,0,0,0.1), -20px 0 30px rgba(0,0,0,0.05)",
                        border: "1px solid rgba(255,255,255,0.2)",
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-8 h-8"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
                        />
                      </svg>
                    </div>
                    <h3 className="text-2xl  text-black">
                      Networking Opportunities
                    </h3>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Connect with peers and valuable industry professionals for
                    growth.
                  </p>
                </div>
              </div>

              {/* Middle Column - Profile Card */}
              <div
                className="bg-gradient-to-b from-[#f5edfb] to-[#ffffff] rounded-3xl p-6 w-full max-w-md mx-auto md:mx-0 h-auto md:h-[575px]"
                style={{
                  boxShadow:
                    "0 15px 30px rgba(0,0,0,0.1), -20px 0 30px rgba(0,0,0,0.05)",
                  border: "3px solid white",
                }}
              >
                <div className="mb-6">
                  <div
                    className="relative w-full h-[222px] rounded-3xl overflow-hidden mb-7"
                    style={{
                      boxShadow:
                        "0 15px 30px rgba(0,0,0,0.1), -20px 0 30px rgba(0,0,0,0.05)",
                      border: "1px solid rgba(255,255,255,0.2)",
                    }}
                  >
                    <Image
                      src={Rasha}
                      alt="rasha"
                      fill
                      className="object-cover object-center"
                    />
                  </div>

                  <h3 className=" text-black font-semibold mb-1">
                    I started my journey:
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    in web-design and development in 2010 at the age of 24. I
                    transitioned into a full-time instructor and mentor in 2018.
                  </p>

                  <h3 className="font-semibold text-black mb-1">
                    Through hands-on:
                  </h3>
                  <p className="text-gray-600 text-sm mb-6">
                    project-based courses, I simplify challenging topics and
                    make them accessible to everyone.
                  </p>
                </div>

                {/* Social Media Icons */}
                <div className="flex items-center justify-between">
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded bg-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-300 transition-colors">
                      <Linkedin size={16} />
                    </div>
                    <div className="w-8 h-8 rounded bg-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-300 transition-colors">
                      <Twitter size={16} />
                    </div>
                    <div className="w-8 h-8 rounded bg-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-300 transition-colors">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M9 18V5l12-2v13" />
                        <circle cx="6" cy="18" r="3" />
                        <circle cx="18" cy="16" r="3" />
                      </svg>
                    </div>
                  </div>

                  {/* Signature */}
                  {/* <div className="text-right">
                <Image
                  src={null}
                  alt="Signature"
                  className="h-10 inline-block opacity-70"
                />
              </div> */}
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-8 flex flex-col justify-center items-center">
                {/* Curriculum Section */}
                <div className="px-4">
                  <div className="flex flex-col  gap-3 mb-3">
                    <div
                      className="flex text-gray-400  w-12 rounded-md bg-white justify-center"
                      style={{
                        boxShadow:
                          "0 15px 30px rgba(0,0,0,0.1), -20px 0 30px rgba(0,0,0,0.05)",
                        border: "1px solid rgba(255,255,255,0.2)",
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-8 h-8"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
                        />
                      </svg>
                    </div>
                    <h3 className="text-2xl text-black">
                      Comprehensive Curriculum
                    </h3>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Master essential topics and practical skills effectively and
                    thoroughly.
                  </p>
                </div>

                {/* Expert Guidance Section */}
                <div className="px-4">
                  <div className="flex flex-col  gap-3 mb-3">
                    <div
                      className="flex text-gray-400  w-12 rounded-md bg-white justify-center"
                      style={{
                        boxShadow:
                          "0 15px 30px rgba(0,0,0,0.1), -20px 0 30px rgba(0,0,0,0.05)",
                        border: "1px solid rgba(255,255,255,0.2)",
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-8 h-8"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                        />
                      </svg>
                    </div>
                    <h3 className="text-2xl text-black">Expert Guidance</h3>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Learn from experienced instructors for personalized and
                    effective support.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
