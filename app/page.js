import BoostYourSkills from "@/components/BoostYourSkills";
import { Hero } from "@/components/Hero";
import { FAQHub } from "@/components/Faq";
import PremiumCourses from "@/components/PremiumCourses";
import BenefitsSection from "@/components/BenefitsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import { CourseTopics } from "@/components/CourseTopics";
import { WhyCourseSite } from "@/components/WhyCourseSite";
import CommunityCard from "@/components/CommunityCard";
import FeaturedCourses from "@/components/FeaturedCourses";
import Ceo from "@/components/Ceo";
export default function Home() {
  return (
    <div className="bg-[#fffefe]">
      {/* <Ceo/> */}
      <Hero />
      <BoostYourSkills />
      <FeaturedCourses />
      <TestimonialsSection />
      <BenefitsSection />
      <PremiumCourses />
      <WhyCourseSite />
      <FAQHub />
      <CourseTopics />
      <CommunityCard />
    </div>
  );
}
