import { urlFor } from "@/sanity/lib/image";
import { sanityFetch } from "@/sanity/lib/live";
import { HOMEABOUTCONTENT_QUERY } from "@/sanity/lib/queries";
import { components } from "@/sanity/portableTextComponents";
import { PortableText } from "next-sanity";
import Image from "next/image";
import * as motion from "motion/react-client";

export default async function AboutSection() {
  const { data: aboutContent } = await sanityFetch({
    query: HOMEABOUTCONTENT_QUERY,
  });
  return (
    // <section className="min-h-[80vh] space-y-8 px-8 py-20 text-slate-300  bg-black">
    <section className="min-h-[80vh] space-y-8 px-8 py-20 text-slate-300  bg-gradient-to-b from-black to-blue-500">
      <h2 className="text-3xl lg:text-5xl font-bold text-center pt-10">
        {aboutContent?.[0].aboutSectionTitle}
      </h2>
      <div className="max-w-7xl mx-auto flex flex-wrap md:flex-nowrap gap-8 items-center justify-between h-full py-10 ">
        <div className="w-[50vw] grow">
          {aboutContent?.[0].aboutSectionImage ? (
            <motion.div
              // initial={{ x: -500, z: -10 }}
              initial={{ y: 200, z: -10 }}
              // whileInView={{ x: 0, z: 0 }}
              whileInView={{ y: 0, z: 0, }}
              viewport={{once:true}}
              transition={{ duration: 0.8, }}
            >
              <Image
                src={urlFor(aboutContent?.[0].aboutSectionImage)
                  .width(800)
                  .height(800)
                  .quality(80)
                  .auto("format")
                  .url()}
                height={800}
                width={800}
                alt={"Nakuru Rugby Team"}
                className="object-cover h-[28rem] w-full rounded-lg"
              />
            </motion.div>
          ) : null}
        </div>
        <motion.div
          initial={{ x: 500 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full md:w-[50vw] bg-zinc-900 rounded-lg px-8 py-12"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{once:true}}
            transition={{ duration: 0.8 }}
            className="prose prose-lg prose-p:text-slate-300 prose-h1:text-slate-200 prose-h2:text-slate-200 prose-h3:text-slate-200 prose-h4:text-slate-200 prose-h5:text-slate-200 prose-h6:text-slate-200 prose-text-slate-300 prose-strong:text-slate-300 prose-ul:text-slate-300"
          >
            {aboutContent?.[0].aboutSectionText !== undefined &&
            aboutContent?.[0].aboutSectionText !== null ? (
              <PortableText
                value={aboutContent?.[0].aboutSectionText}
                components={components}
              />
            ) : null}
          </motion.div>
          {/* <p className="text-lg">{aboutContent?.[0].aboutSectionText}</p> */}
        </motion.div>
      </div>
    </section>
  );
}
