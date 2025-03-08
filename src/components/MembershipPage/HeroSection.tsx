import { sanityFetch } from "@/sanity/lib/live";

import { MEMBERSHIPHEROCONTENT_QUERY } from "@/sanity/lib/queries";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

export default async function HeroSection() {
  const { data: heroContent } = await sanityFetch({
    query: MEMBERSHIPHEROCONTENT_QUERY,
  });
  return (
    <section className="bg-black pt-20">
      <div className="min-h-[60vh] container mx-auto px-8  text-slate-300">
        <div className=" flex justify-center items-center gap-8">
          <div className=" ">
            {heroContent?.[0].heroSectionImage ? (
              <Image
                src={urlFor(heroContent?.[0].heroSectionImage)
                  .width(400)
                  .height(400)
                  .quality(80)
                  .auto("format")
                  .url()}
                height={400}
                width={400}
                alt={"Hero Image"}
                className="object-contain h-32 w-full"
              />
            ) : null}
          </div>
          <div className="w-7/12">
            <h1 className="text-3xl md:text-5xl font-bold text-center">
              {heroContent?.[0].heroSectionTitle}
            </h1>
            <p className="text-3xl md:text-5xl font-bold text-center">
              {heroContent?.[0].heroSectionSubTitle}
            </p>
          </div>
          <div className="">
            {heroContent?.[0].heroSectionImage ? (
              <Image
                src={urlFor(heroContent?.[0].heroSectionImage)
                  .width(400)
                  .height(400)
                  .quality(80)
                  .auto("format")
                  .url()}
                height={400}
                width={400}
                alt={"Hero Image"}
                className="object-contain h-32 w-full"
              />
            ) : null}
          </div>
        </div>
        <div className="max-w-3xl mx-auto text-balance bg-zinc-800 px-6 py-12 rounded-lg mt-16">
          <p className="">
            {heroContent?.[0].heroSectionText}
          </p>
        </div>
      </div>
    </section>
  );
}
