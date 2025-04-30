import BoostYourSkills from "@/components/BoostYourSkills";
import { Hero } from "@/components/Hero";
import { FAQHub } from "@/components/Faq";
import PremiumCourses from "@/components/PremiumCourses";
import BenefitsSection from "@/components/BenefitsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import { CourseTopics } from "@/components/CourseTopics";

export default function Home() {
  return (
    <div className="bg-[#fffefe]">
      <Hero />
      <BoostYourSkills/>
      <BenefitsSection/>
      <TestimonialsSection/>
      <FAQHub />
      <CourseTopics />
      <PremiumCourses/>
    </div>
  );
}
