import ContentSection from "@/components/EventsPage/ContentSection";
import HeroSection from "@/components/EventsPage/HeroSection";
import { sanityFetch } from "@/sanity/lib/live";
import { SINGLE_TOURNAMEN_QUERY } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";

export default async function page({
  params,
}: {
  params: Promise<{ tournamentSlug: string }>;
}) {

  const { data } = await sanityFetch({
    query: SINGLE_TOURNAMEN_QUERY,
    params: await params,
  });

  if (!data) {
    console.error("No data found for the given slug.");
    notFound();
  }
  return (
    <>
      <HeroSection eventData={data} />
      <ContentSection eventData={data}/>
    </>
  );
}
