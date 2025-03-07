import CommunityMembershipSection from "@/components/AboutUsPage/CommunityMembershipSection";
import HeroSection from "@/components/AboutUsPage/HeroSection";
import SportsSection from "@/components/AboutUsPage/SportsSection";
import VisionMissionSection from "@/components/AboutUsPage/VisionMissionSection";


export default function AboutPage() {
  return (
    <main>
        <HeroSection/>
        <VisionMissionSection/>
        <SportsSection/>
        <CommunityMembershipSection/>
    </main>
  )
}
