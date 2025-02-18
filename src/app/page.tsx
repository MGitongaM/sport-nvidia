import FeaturedSection from "@/components/HomePage/FeaturedSection";
import HeroSection from "@/components/HomePage/HeroSection";
import NewsUpdateSection from "@/components/HomePage/NewsUpdateSection";
import TourmentsSection from "@/components/HomePage/TourmentsSection";


export default function Home() {
  return (
    <>
    <main className="container mx-auto px-4">
      <HeroSection/>
      <FeaturedSection/>
      <TourmentsSection/>
      <NewsUpdateSection/>
    </main>
    </>
  );
}
