// import FeaturedSection from "@/components/HomePage/GolfCoursesSection";
import HeroSection from "@/components/HomePage/HeroSection";
// import NewsUpdateSection from "@/components/HomePage/NewsUpdateSection";
// import TourmentsSection from "@/components/HomePage/EventsSection";
import { sanityFetch } from "@/sanity/lib/live";
import { BANNER_QUERY } from "@/sanity/lib/queries";
import type { Metadata } from "next";
import AboutSection from "@/components/HomePage/AboutSection";
import LegacySection from "@/components/HomePage/LegacySection";
import SponsorSection from "@/components/HomePage/SponsorSection";
import TournamentSection from "@/components/HomePage/TournamentSection";

export async function generateMetadata():Promise<Metadata>{
  const{data}=await sanityFetch({
    query:BANNER_QUERY
  })
  const imageUrl=data?.[0]?.bannerImage?.asset?.url ?? ""
  return{
    title: "Golf Site",
    description: "From scenic fairways to challenging greens, discover our premier golf courses designed for every level of golfer. Play where champions train. Golf Nvidia Has you covered",
    openGraph:{
      images:[
        {
          url:imageUrl,
          height:800,
          width:1200
        }
      ]
    }
  }
}

export default function Home() {
  return (
    <>
    <main className="">
      <HeroSection />
      <AboutSection/>
      <LegacySection/>
      <SponsorSection/>
      <TournamentSection/>
      {/* <FeaturedSection/>
      <TourmentsSection/>
      <NewsUpdateSection/> */}
    </main>
    </>
  );
}
