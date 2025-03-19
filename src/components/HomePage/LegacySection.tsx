import { urlFor } from "@/sanity/lib/image";
import { sanityFetch } from "@/sanity/lib/live";
import { HOMELEGACYCONTENT_QUERY } from "@/sanity/lib/queries";
import Image from "next/image";
import * as motion from "motion/react-client";

export default async function LegacySection() {
  const { data: legacy } = await sanityFetch({
    query: HOMELEGACYCONTENT_QUERY,
  });

  return (
    // <section className="min-h-[80vh]  px-8 py-20 text-slate-300  bg-black">
    <section className="min-h-[80vh]  px-8 py-20 text-slate-300  bg-gradient-to-b from-green-500 to-black">
      <div className="container leading-8 mx-auto space-y-8 bg-zinc-900 rounded-lg px-8 py-12">
        <h2 className="text-3xl lg:text-5xl font-bold text-center pb-8">
          {legacy?.[0].legacySectionTitle}{" "}
        </h2>
        <div className=" flex gap-8 flex-wrap md:flex-nowrap items-center justify-between h-full pb-10 ">
          <div className="w-[50vw] grow">
            {legacy?.[0].legacySectionContent?.[0].legacySectionImage ? (
              <motion.div
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.4 }}
              >
                <Image
                  src={urlFor(
                    legacy?.[0].legacySectionContent?.[0].legacySectionImage
                  )
                    .width(800)
                    .height(450)
                    .quality(80)
                    .auto("format")
                    .url()}
                  height={450}
                  width={800}
                  alt={"Nakuru Rugby Image"}
                  // className="object-contain min-h-[60vh] w-full rounded-lg"
                  className="object-contain min-h-[20rem] w-full rounded-lg"
                />
              </motion.div>
            ) : null}
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="w-full md:w-[50vw] space-y-8"
          >
            <p className="text-2xl lg:text-3xl font-semibold">
              {
                legacy?.[0].legacySectionContent?.[0].legacySectionHeadingText
              }{" "}
            </p>
            <p className="text-lg">
              {legacy?.[0].legacySectionContent?.[0].LegacySectionText}
            </p>
          </motion.div>
        </div>
        <div className=" flex gap-8 md:flex-row-reverse flex-wrap md:flex-nowrap items-center justify-between h-full ">
          <div className="w-[50vw] grow">
            {legacy?.[0].legacySectionContent?.[1].legacySectionImage ? (
              <motion.div
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.4 }}
              >
                <Image
                  src={urlFor(
                    legacy?.[0].legacySectionContent?.[1].legacySectionImage
                  )
                    .width(800)
                    .height(450)
                    .quality(80)
                    .auto("format")
                    .url()}
                  height={450}
                  width={800}
                  alt={"Nakuru Rugby Image"}
                  // className="object-contain min-h-[60vh] w-full rounded-lg"
                  className="object-contain min-h-[20rem] w-full rounded-lg"
                />
              </motion.div>
            ) : null}
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="w-full md:w-[50vw] space-y-8"
          >
            <p className="text-2xl lg:text-3xl font-semibold">
              {legacy?.[0].legacySectionContent?.[1].legacySectionHeadingText}
            </p>
            <p className="text-lg">
              {legacy?.[0].legacySectionContent?.[1].LegacySectionText}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
