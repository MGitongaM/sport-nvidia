import { sanityFetch } from "@/sanity/lib/live";
import { EVENTSHEROCONTENT_QUERY } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import * as motion from "motion/react-client";

export default async function HeroSection1() {
  const { data: heroContent } = await sanityFetch({
    query: EVENTSHEROCONTENT_QUERY,
  });
  return (
    <>
      <section className="bg-gradient-to-b from-black via-black to-blue-500 min-h-[45vh]  pt-20">
        {/* <div className="flex flex-wrap flex-col-reverse md:flex-row md:flex-nowrap  min-h-[65vh] lg:h-[65vh] pt-20"> */}
        <div className="flex flex-wrap flex-col md:flex-row md:flex-nowrap ">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-5/12 lg:w-[40rem] flex flex-col justify-center gap-8 h-auto bg-gradient-to-b from-black via-black to-blue-500  pl-10 lg:pl-20 pr-4 py-8 text-slate-300"
          >
            <h1 className="text-3xl lg:text-5xl font-bold">
              {heroContent?.[0].eventsHeroSectionTitle}
              {/* What&apos;s Trending */}
            </h1>
            <p className="text-xl font-semibold">
              {heroContent?.[0].eventsHeroSectionText}
            </p>
          </motion.div>
          <motion.div
            initial={{ y: -200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className=" grow bg-gradient-to-b from-black via-black to-blue-500 pt-2"
          >
            {heroContent?.[0].eventsHeroSectionImages?.map((img, index) =>
              img?.eventsImage ? (
                <div key={index}>
                  <Image
                    src={urlFor(img.eventsImage)
                      .width(1200)
                      .height(800)
                      .quality(80)
                      .auto("format")
                      .url()}
                    height={800}
                    width={1200}
                    alt={"Nakuru Rugby Team Sponsor Image"}
                    className="object-contain w-full md:h-[60vh]"
                  />
                </div>
              ) : null
            )}
          </motion.div>
        </div>
      </section>
    </>
  );
}
