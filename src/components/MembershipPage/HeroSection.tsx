import { sanityFetch } from "@/sanity/lib/live";

import { MEMBERSHIPHEROCONTENT_QUERY } from "@/sanity/lib/queries";
// import Image from "next/image";
// import { urlFor } from "@/sanity/lib/image";
import * as motion from "motion/react-client";

export default async function HeroSection() {
  const { data: heroContent } = await sanityFetch({
    query: MEMBERSHIPHEROCONTENT_QUERY,
  });
  return (
    // <section className="bg-black pt-32 pb-20">
    <section className="bg-gradient-to-b from-45% from-black to-80% to-blue-500  pt-32 pb-20">
      <div className="min-h-[60vh] container mx-auto px-8  text-slate-300">
        <div className=" flex justify-center items-center gap-8">
          <div className=" ">
            {/* {heroContent?.[0].heroSectionImage ? (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
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
                  className="object-contain h-32 w-full"
                />
              </motion.div>
            ) : null} */}
          </div>
          <div className="w-10/12">
            <h1 className="text-3xl md:text-5xl font-bold text-center">
              {heroContent?.[0].heroSectionTitle}
            </h1>
            <p className="text-3xl md:text-5xl font-bold text-center">
              {heroContent?.[0].heroSectionSubTitle}
            </p>
          </div>
          <div className="">
            {/* {heroContent?.[0].heroSectionImage ? (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
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
                  className="object-contain h-32 w-full"
                />
              </motion.div>
            ) : null} */}
          </div>
        </div>
        <motion.div
          initial={{ y: -400, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-balance bg-zinc-800 px-6 py-12 rounded-lg mt-16"
        >
          <p className="text-lg leading-8">
            {heroContent?.[0].heroSectionText}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
