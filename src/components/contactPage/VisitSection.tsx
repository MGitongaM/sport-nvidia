import { urlFor } from "@/sanity/lib/image";
import { sanityFetch } from "@/sanity/lib/live";
import { CONTACTVISTCONTENT_QUERY } from "@/sanity/lib/queries";
import { components } from "@/sanity/portableTextComponents";
import { PortableText } from "next-sanity";
import Image from "next/image";

export default async function VisitSection() {
  const { data: visit } = await sanityFetch({
    query: CONTACTVISTCONTENT_QUERY,
  });
  return (
    <section className="bg-black py-20">
      <div className="text-slate-300 px-8">
        <div className="container mx-auto flex flex-wrap md:flex-nowrap gap-8 justify-between">
          <div className="w-full md:w-[36vw] space-y-12">
            <h3 className="text-3xl font-bold">
              {visit?.[0].vistSectionTitle}{" "}
            </h3>
            <div className="c">
              {visit?.[0].vistSectionText ? (
                <div className="prose prose-p:text-slate-300 prose-h1:text-slate-200 prose-h2:text-slate-200 prose-h3:text-slate-200 prose-h4:text-slate-200 prose-h5:text-slate-200 prose-h6:text-slate-200 prose-text-slate-300 prose-strong:text-slate-300 prose-ul:text-slate-300">
                  <PortableText
                    value={visit[0].vistSectionText}
                    components={components}
                  />
                </div>
              ) : null}
            </div>
          </div>
          <div className=" h-[50vh] w-[90vw] md:w-[50vw] bg-zinc-800 rounded-lg">
            {visit?.[0].vistSectionImage ? (
              <Image
                src={urlFor(visit?.[0].vistSectionImage)
                  .width(800)
                  .height(900)
                  .quality(80)
                  .auto("format")
                  .url()}
                height={900}
                width={800}
                alt={"Hero Image"}
                className="object-cover h-full  w-full rounded-lg "
              />
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
