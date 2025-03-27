import { sanityFetch } from "@/sanity/lib/live";
import { HOMESPONSORCONTENT_QUERY } from "@/sanity/lib/queries";

import * as motion from "motion/react-client";
import SponsorsCarousel from "./SponsorsCarousel";

export default async function SponsorSection() {
  const { data: sponsor } = await sanityFetch({
    query: HOMESPONSORCONTENT_QUERY,
  });
  return (
    <section className="min-h-[80vh] space-y-8 px-8 py-20 text-slate-300  bg-gradient-to-b from-black via-green-500 to-black t0">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.3 }}
        className="w-full lg:w-[50vw] text-center mx-auto space-y-8 px-8 md:px-40 lg:px-8"
      >
        <h2 className="text-3xl lg:text-5xl font-bold text-center">
          {sponsor?.[0].sponsorSectionTitle}
        </h2>
        <p className="text-lg leading-8">{sponsor?.[0].sponsorSectionText}</p>
      </motion.div>
      <div className="max-w-7xl mx-auto ">
        <SponsorsCarousel sponsor={sponsor} />
      </div>
    </section>
  );
}
