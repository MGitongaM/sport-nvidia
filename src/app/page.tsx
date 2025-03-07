// import FeaturedSection from "@/components/HomePage/GolfCoursesSection";
import HeroSection from "@/components/HomePage/HeroSection";
// import NewsUpdateSection from "@/components/HomePage/NewsUpdateSection";
// import TourmentsSection from "@/components/HomePage/EventsSection";
import { sanityFetch } from "@/sanity/lib/live";
import {  HOMEHEROCONTENT_QUERY } from "@/sanity/lib/queries";
import type { Metadata } from "next";
import AboutSection from "@/components/HomePage/AboutSection";
import LegacySection from "@/components/HomePage/LegacySection";
import SponsorSection from "@/components/HomePage/SponsorSection";
import TournamentSection from "@/components/HomePage/TournamentSection";

export async function generateMetadata():Promise<Metadata>{
  const{data}=await sanityFetch({
    query:HOMEHEROCONTENT_QUERY
  })
  // const imageUrl=data?.[0]?.bannerImage?.asset?.url ?? ""
  const imageUrl=data?.[0]?.heroSectionImage?.asset?.url ?? ""
  return{
    title: "Nakuru Athletic Club",
    description: "Nakuru Athletic Club is a premier sports and social club with a rich history of excellence, camaraderie, and community engagement.",
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
