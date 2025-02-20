import FeaturedSection from "@/components/HomePage/FeaturedSection";
import HeroSection from "@/components/HomePage/HeroSection";
import NewsUpdateSection from "@/components/HomePage/NewsUpdateSection";
import TourmentsSection from "@/components/HomePage/TourmentsSection";


export default function Home() {
  return (
    <>
    <main className="">
      <HeroSection />
      <FeaturedSection/>
      <TourmentsSection/>
      <NewsUpdateSection/>
    </main>
    </>
  );
}
