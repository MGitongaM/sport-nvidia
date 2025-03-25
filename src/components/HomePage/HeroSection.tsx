import { sanityFetch } from "@/sanity/lib/live";
import { HOMEHEROCONTENT_QUERY } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import * as motion from "motion/react-client";

export default async function HeroSection() {
  const { data: heroContent } = await sanityFetch({
    query: HOMEHEROCONTENT_QUERY,
  });
  return (
    <>
      <section className="bg-black ">
        <div className="flex flex-wrap flex-col-reverse md:flex-row md:flex-nowrap  min-h-[95vh] lg:h-[95vh] pt-20">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-5/12 lg:w-[40rem] flex flex-col justify-center gap-8 h-auto bg-black pl-10 lg:pl-20 pr-4 py-8 text-slate-300"
          >
            <h1 className="text-3xl lg:text-5xl font-bold">
              {heroContent?.[0].heroSectionTitle}
            </h1>
            <p className="text-xl font-semibold">
              {heroContent?.[0].heroSectionText}
            </p>
            <motion.button
              whileHover={{ scale: 1.1 }}
              // className="px-4 py-2 bg-white w-64 hover:bg-blue-500 text-black font-semibold rounded-lg"
              className="px-4 py-2 bg-white w-64 hover:bg-blue-500 text-black font-semibold rounded-lg"
            >
              <Link href={`/#tournaments`}>View Upcoming Tournaments</Link>
            </motion.button>
          </motion.div>
          <motion.div
            initial={{ y: -200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className=" grow bg-black"
          >
            {heroContent?.[0].heroSectionImage ? (
              <Image
                src={urlFor(heroContent?.[0].heroSectionImage)
                  .width(800)
                  .height(800)
                  .quality(80)
                  .auto("format")
                  .url()}
                height={800}
                width={800}
                alt={"Hero Image"}
                className="object-cover object-top h-full  w-full "
              />
            ) : null}
          </motion.div>
        </div>
      </section>
    </>
  );
}
