import { urlFor } from "@/sanity/lib/image";
import { sanityFetch } from "@/sanity/lib/live";
import { HOMEABOUTCONTENT_QUERY } from "@/sanity/lib/queries";
import { components } from "@/sanity/portableTextComponents";
import { PortableText } from "next-sanity";
import Image from "next/image";

export default async function AboutSection() {
  const { data: aboutContent } = await sanityFetch({
    query: HOMEABOUTCONTENT_QUERY,
  });
  return (
    <section className="min-h-[80vh] space-y-8 px-8 py-20 text-slate-300  bg-black">
      <h2 className="text-3xl lg:text-5xl font-bold text-center">
        {aboutContent?.[0].aboutSectionTitle}
      </h2>
      <div className="max-w-7xl mx-auto flex flex-wrap md:flex-nowrap items-center justify-between h-full ">
        <div className="w-[50vw] grow">
          {aboutContent?.[0].aboutSectionImage ? (
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
              className="object-cover h-full w-full"
            />
          ) : null}
        </div>
        <div className="w-full md:w-[50vw] bg-zinc-900 rounded-lg px-8 py-12">
          <div className="prose prose-lg prose-p:text-slate-300 prose-h1:text-slate-200 prose-h2:text-slate-200 prose-h3:text-slate-200 prose-h4:text-slate-200 prose-h5:text-slate-200 prose-h6:text-slate-200 prose-text-slate-300 prose-strong:text-slate-300 prose-ul:text-slate-300">
            {aboutContent?.[0].aboutSectionText !== undefined &&
            aboutContent?.[0].aboutSectionText !== null ? (
              <PortableText
                value={aboutContent?.[0].aboutSectionText}
                components={components}
              />
            ) : null}
          </div>
          {/* <p className="text-lg">{aboutContent?.[0].aboutSectionText}</p> */}
        </div>
      </div>
    </section>
  );
}
