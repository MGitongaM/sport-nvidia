import { urlFor } from "@/sanity/lib/image";
import { sanityFetch } from "@/sanity/lib/live";
import { HOMESPONSORCONTENT_QUERY } from "@/sanity/lib/queries";
import Image from "next/image";

export default async function SponsorSection() {
  const { data: sponsor } = await sanityFetch({
    query: HOMESPONSORCONTENT_QUERY,
  });
  return (
    <section className="min-h-[80vh] space-y-8 px-8 py-20 text-slate-300  bg-black">
      <h2 className="text-3xl lg:text-5xl font-bold text-center">
        {sponsor?.[0].sponsorSectionTitle}
      </h2>
      <div className="w-full lg:w-[50vw] text-center mx-auto px-8 md:px-40 lg:px-8">
        <p className="text-lg leading-8">{sponsor?.[0].sponsorSectionText}</p>
      </div>
      <div className="max-w-7xl mx-auto ">
        <div className="flex items-center justify-center w-full ">
          {sponsor?.[0].sponsorSectionImages?.map((sponsorImg) => (
            <>
              <Image
                src={urlFor(sponsorImg)
                  .width(800)
                  .height(800)
                  .quality(80)
                  .auto("format")
                  .url()}
                height={800}
                width={800}
                alt={"Nakuru Rugby Team Sponsor Image"}
                className="object-cover size-32 rounded-full"
              />
            </>
          ))}
        </div>
      </div>
    </section>
  );
}
