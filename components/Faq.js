"use client";

import { useState } from "react";
import { ChevronUp, ChevronDown, X, Plus } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const FAQHub = () => {
  const [openQuestion, setOpenQuestion] = useState(1);

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  const faqQuestions = [
    {
      id: 1,
      question: "What is Course Site?",
      answer: "",
      isOpen: false,
    },
    {
      id: 2,
      question: "Do you have refund policy?",
      answer:
        "Our Purchases happen through Whop. Whop has its own refund policy, which you can find on their website. We recommend reviewing their policy before making a purchase.",
      isOpen: true,
    },
    {
      id: 3,
      question: "Is the community supportive?",
      answer: "",
      isOpen: false,
    },
    {
      id: 4,
      question: "Are there live classes or just recorded content?",
      answer: "",
      isOpen: false,
    },
  ];

  return (
    <div className="flex flex-col md:flex-row w-full max-w-7xl text-black mx-auto p-4 gap-8 mt-6">
      {/* Left Side */}
      <div className="w-full md:w-1/2">
        <div className="text-black font-medium w-[110px] text-sm flex items-center gap-4 bg-purple-50 border-2 border-gray-200  rounded-full mb-4">
          <span className="h-6 w-6 bg-purple-300 rounded-full flex items-center justify-center">
            <span className="text-purple-600">?</span>
          </span>
          Faq Hub
        </div>
        <h1 className=" text-3xl md:text-5xl font-semibold mb-8">
          Frequently Asked Questions!
        </h1>

        <div
          className="bg-white p-6 rounded-4xl w-[380px] md:w-[400px]"
          style={{
            boxShadow:
              "0 15px 30px rgba(0,0,0,0.1), -20px 0 30px rgba(0,0,0,0.05)",
            border: "1px solid rgba(255,255,255,0.2)",
          }}
        >
          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Still Have Questions?</h2>
            <p className="mb-4">
              <span className="font-semibold">
                <Link href="/contact" className="underline">
                  Contact Us
                </Link>
              </span>
              , We are happy to help you
            </p>

            <div className="flex -space-x-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-red-200 border-2 border-white overflow-hidden relative">
                <Image
                  src="/images/rahib.jpg"
                  alt="User 1"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="w-10 h-10 rounded-full bg-blue-200 border-2 border-white overflow-hidden">
                <Image
                  src="/images/user1.jpg" // update this to your image path
                  alt="User 1"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="w-10 h-10 rounded-full bg-green-200 border-2 border-white overflow-hidden">
                <Image
                  src="/images/user1.jpg" // update this to your image path
                  alt="User 1"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>

            <button className="bg-gray-900 text-white px-6 py-2 rounded-full font-medium">
              Start Learning Now
            </button>
          </div>
        </div>
      </div>

      {/* Right Side - Accordion */}
      <div className="w-full md:w-2/3 space-y-4">
        {faqQuestions.map((faq) => (
          <div
            key={faq.id}
            className="bg-white rounded-lg shadow-sm overflow-hidden"
          >
            <div
              className="flex justify-between items-center p-4 cursor-pointer"
              onClick={() => toggleQuestion(faq.id)}
            >
              <h3 className="font-medium">{faq.question}</h3>
              <button className="text-gray-500">
                {openQuestion === faq.id && faq.answer ? (
                  faq.id === 2 ? (
                    <X size={18} />
                  ) : (
                    <ChevronUp size={18} />
                  )
                ) : (
                  <Plus size={18} />
                )}
              </button>
            </div>

            {openQuestion === faq.id && faq.answer && (
              <div className="p-4 pt-0 text-gray-600 border-t border-gray-100">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
