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

export default function Home() {
  return (
    <div className="bg-[#fffefe]">
      <Hero />
      <BoostYourSkills />
      <FeaturedCourses />
      <BenefitsSection />
      <TestimonialsSection />
      <PremiumCourses />
      <FAQHub />
      <CourseTopics />
      <CommunityCard />
      <WhyCourseSite />
      <FAQHub />
      <CourseTopics />
    </div>
  );
}
