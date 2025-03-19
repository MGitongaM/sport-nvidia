import { sanityFetch } from "@/sanity/lib/live";

import { ABOUTHEROCONTENT_QUERY } from "@/sanity/lib/queries";
// import Image from "next/image";
// import { urlFor } from "@/sanity/lib/image";
import * as motion from "motion/react-client";

export default async function HeroSection() {
  const { data: heroContent } = await sanityFetch({
    query: ABOUTHEROCONTENT_QUERY,
  });
  return (
    <section className="bg-black">
      <div className="min-h-[70vh] container mx-auto px-8  text-slate-300 pt-32">
        <h1 className="text-3xl md:text-5xl font-bold text-center">
          {heroContent?.[0].heroSectionTitle}
        </h1>
        <div className="flex flex-col items-center justify-between gap-8 py-10">
          {/* <div className="w-[30vw]">
            {heroContent?.[0].heroSectionImage ? (
              <motion.div
                initial={{ y: -200, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
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
                  className="object-contain h-48 mt-10 w-full "
                />
              </motion.div>
            ) : null}
          </div> */}
          <motion.div
            initial={{ y: 200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="w-[85vw] md:w-[60vw] space-y-20"
          >
            <p className="text-xl leading-8">
              {heroContent?.[0].heroSectionText}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
