import CommunityCard from "@/components/CommunityCard";
import { FAQHub } from "@/components/Faq";
import HeroSessionReviews from "@/components/HeroSessionReviews";
import StudentSuccessStories from "@/components/StudentSuccessStories";
import React from "react";

const page = () => {
  return (
    <div className="bg-white">
      <HeroSessionReviews />
      <StudentSuccessStories />
      <FAQHub />
      <CommunityCard />
    </div>
  );
};

export default page;
