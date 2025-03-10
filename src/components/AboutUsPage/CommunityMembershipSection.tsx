import { sanityFetch } from "@/sanity/lib/live";
import { Button } from "../ui/button";
import { ABOUTCOMMUNITYMEMBERSHIPCONTENT_QUERY } from "@/sanity/lib/queries";
import Link from "next/link";

export default async function CommunityMembershipSection() {
  const { data: communityMemmbership } = await sanityFetch({
    query: ABOUTCOMMUNITYMEMBERSHIPCONTENT_QUERY,
  });
  return (
    <section className="bg-black pb-40">
      <div className="container mx-auto px-8 py-20 bg-zinc-800 rounded-lg text-slate-300">
        <div className="flex flex-wrap md:flex-nowrap justify-evenly  gap-8">
          <div className="w-full md:w-[42vw] lg:w-[36vw] h-full md:min-h-[30rem] bg-zinc-900 rounded-lg px-6 py-12">
            <div className="c"></div>
            <p className="text-2xl font-semibold py-12">
              {communityMemmbership?.[0].communityTitle}
            </p>
            <p className="text-lg leading-8">{communityMemmbership?.[0].communityText}</p>
          </div>
          <div className="w-full md:w-[42vw] lg:w-[36vw] h-full md:min-h-[30rem] bg-zinc-900 rounded-lg px-6 py-12">
            <div className="c"></div>
            <p className="text-2xl font-semibold py-12">
              {communityMemmbership?.[0].membershipTitle}{" "}
            </p>
            <p className="text-lg leading-8">
              {communityMemmbership?.[0].membershipText}
            </p>
          </div>
        </div>
        <div className="grid place-content-center py-10">
          <Button asChild className="bg-white w-64 mx-auto hover:bg-blue-200 text-black font-semibold">
            <Link href="/contact">
            Get In Touch
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
