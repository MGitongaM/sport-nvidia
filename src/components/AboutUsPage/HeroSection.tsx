import { sanityFetch } from "@/sanity/lib/live";

import { ABOUTHEROCONTENT_QUERY } from "@/sanity/lib/queries";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

export default async function HeroSection() {
  const { data: heroContent } = await sanityFetch({
    query: ABOUTHEROCONTENT_QUERY,
  });
  return (
    <section className="bg-black">
      <div className="min-h-[60vh] container mx-auto px-8  text-slate-300 pt-32">
        <h1 className="text-3xl md:text-5xl font-bold text-center">
          {heroContent?.[0].heroSectionTitle}
        </h1>
        <div className="flex flex-col items-center justify-between gap-8">
          <div className="w-[30vw]">
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
                className="object-contain h-48 mt-10 w-full"
              />
            ) : null}
          </div>
          <div className="w-[85vw] md:w-[60vw] space-y-20">
            <p className="text-xl leading-8">{heroContent?.[0].heroSectionText}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
