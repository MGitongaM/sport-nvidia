import BenefitsSection from "@/components/MembershipPage/BenefitsSection";
import CategoriesSection from "@/components/MembershipPage/CategoriesSection";
import HeroSection from "@/components/MembershipPage/HeroSection";
import JoinSection from "@/components/MembershipPage/JoinSection";

export default function MemberShipPage() {
  return (
    <main>
      <HeroSection />
      <BenefitsSection/>
      <CategoriesSection/>
      <JoinSection/>
    </main>
  );
}
