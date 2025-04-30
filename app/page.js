import BoostYourSkills from "@/components/BoostYourSkills";
import { Hero } from "@/components/Hero";
import PremiumCourses from "@/components/PremiumCourses";

export default function Home() {
  return (
    <div className="bg-[#fffefe]">
      <Hero />
      <BoostYourSkills/>
      <PremiumCourses/>
    </div>
  );
}
