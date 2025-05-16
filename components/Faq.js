"use client";

import { useState } from "react";
import { ChevronUp, ChevronDown, X, Plus } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Now from "./ui/Now";
import Ajnas from "../public/Images/ajnas.jpg";
import Ziyad from "../public/Images/ziyad.jpg";
import Rahib from "../public/Images/rahib.jpg";
import { FadeInOnScroll } from "./FadeInOnScroll";

export const FAQHub = () => {
  const [openQuestion, setOpenQuestion] = useState(1);

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  const faqQuestions = [
    {
      id: 1,
      question: "What is SDEC?",
      answer:
        "SDEC is an innovative platform designed to empower learners and professionals with the skills and knowledge they need to excel in today's fast-paced world.",
      isOpen: false,
    },
    {
      id: 2,
      question: "How long will I have access to the courses?",
      answer:
        "Once you enroll, you’ll have lifetime access to the course materials, including future updates, so you can learn at your own pace.",
      isOpen: true,
    },
    {
      id: 3,
      question: "Is the community supportive?",
      answer:
        "Absolutely! We believe in creating a positive and encouraging environment where everyone can learn and grow together.",
      isOpen: false,
    },
    {
      id: 4,
      question: "Are there live classes or just recorded content?",
      answer:
        "We offer a mix of both. You can access a library of recorded content and attend live classes or Q&A sessions hosted by expert instructors.",
      isOpen: false,
    },
  ];

  return (
    <div className="py-16 bg-gradient-to-r  from-white via-[#f6e7ff] to-white">
      <div className="flex flex-col md:flex-row max-w-7xl text-black mx-auto px-6 gap-8 ">
        {/* Left Side */}
        <div className="w-full md:w-1/2">
          <div className="text-black font-medium w-[110px] text-sm flex items-center gap-3 bg-purple-50 border-2 border-gray-200  rounded-full mb-4">
            <span className="h-6 w-6 bg-purple-300 rounded-full flex items-center justify-center">
              <span className="text-purple-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#976dff"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
                  />
                </svg>
              </span>
            </span>
            Faq Hub
          </div>
          <FadeInOnScroll direction="up" delay={0.1}>
            <h2 className=" md:text-4xl text-3xl  mb-8">
              Frequently Asked Questions!
            </h2>
          </FadeInOnScroll>

          <FadeInOnScroll direction="up" delay={0.2}>
            <div
              className="bg-gradient-to-t from-[#faf0ff] to-[#ffffff] p-6  rounded-4xl"
              style={{
                boxShadow:
                  "0 15px 30px rgba(0,0,0,0.1), -20px 0 30px rgba(0,0,0,0.05)",
                border: "3px solid white",
              }}
            >
              <div className="bg-gradient-to-t from-[#faf0ff] to-[#ffffff] p-6  rounded-4xl">
                <FadeInOnScroll direction="up" delay={0.3}>
                  <h2 className="text-2xl font-bold mb-4">
                    Still Have Questions?
                  </h2>
                </FadeInOnScroll>
                <FadeInOnScroll direction="up" delay={0.4}>
                  <p className="mb-4">
                    <span className="font-semibold">
                      <Link href="/contact" className="underline">
                        Contact Us
                      </Link>
                    </span>
                    , We are happy to help you
                  </p>
                </FadeInOnScroll>

                <FadeInOnScroll direction="up" delay={0.5}>
                  <div className="flex -space-x-2 mb-4">
                    <div className="w-10 h-10 rounded-full bg-red-200 border-2 border-white overflow-hidden relative">
                      <Image
                        src={Rahib}
                        alt="rahib"
                        width={1000}
                        height={0}
                        className="object-cover rounded-full"
                      />
                    </div>
                    <div className="rounded-full w-10 h-10 bg-blue-200 border-2 border-white overflow-hidden relative">
                      <Image
                        src={Ajnas}
                        alt="ajnas"
                        width={1000}
                        height={10}
                        className="object-cover"
                      />
                    </div>
                    <div className="w-10 h-10 rounded-full bg-green-200 border-2 border-white overflow-hidden relative">
                      <Image
                        src={Ziyad}
                        alt="ziyad"
                        width={1000}
                        height={1000}
                        className="object-cover"
                      />
                    </div>
                  </div>
                </FadeInOnScroll>
                {/* CTA BUTTON */}
                <FadeInOnScroll direction="up" delay={0.6}>
                  <Now />
                </FadeInOnScroll>
              </div>
            </div>
          </FadeInOnScroll>
        </div>

        {/* Right Side - Accordion */}
        <div className="w-full md:w-2/3 space-y-4 flex flex-col justify-center">
          {faqQuestions.map((faq) => (
            <div key={faq.id} className="mb-4 flex">
              <FadeInOnScroll direction="up" delay={0.2}>
                <button
                  style={{ border: "3px solid white" }}
                  onClick={() => toggleQuestion(faq.id)}
                  className="w-full flex flex-col bg-[#f4f8ff] rounded-xl shadow-xl text-left py-6 px-6 transition-all duration-300"
                >
                  <div className="flex justify-between items-center">
                    <span className="text-md font-medium text-gray-700">
                      {faq.question}
                    </span>
                    <div
                      className={`text-black transition-transform duration-500 ${
                        openQuestion === faq.id ? "rotate-180" : "rotate-0"
                      }`}
                    >
                      {openQuestion === faq.id ? (
                        <X size={20} />
                      ) : (
                        <Plus size={20} />
                      )}
                    </div>
                  </div>

                  {/* Animated Answer Section */}
                  <div
                    className={`overflow-hidden transition-all duration-500 ${
                      openQuestion === faq.id
                        ? "max-h-40 opacity-100 mt-3"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-gray-600 text-sm">{faq.answer}</p>
                  </div>
                </button>
              </FadeInOnScroll>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
