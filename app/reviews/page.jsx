import CommunityCard from "@/components/CommunityCard";
import { FAQHub } from "@/components/Faq";
import AllReviews from "@/components/reviews/AllReviews";
import React from "react";

const Reviews = () => {
  return (
    <div className="bg-white">
      <AllReviews />
      <FAQHub />
      <CommunityCard />
    </div>
  );
};

export default Reviews;
