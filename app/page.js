import BoostYourSkills from "@/components/BoostYourSkills";
import { Hero } from "@/components/Hero";
import { FAQHub } from "@/components/Faq";

import PremiumCourses from "@/components/PremiumCourses";

export default function Home() {
  return (
    <div className="bg-[#fffefe]">
      <Hero />
      <BoostYourSkills/>
      <FAQHub />
      <PremiumCourses/>

    </div>
  );
}
