import Image from "next/image";

import { sanityFetch } from "@/sanity/lib/live";
import { SINGLE_NEWSANDUPDATETYPE_QUERY } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "next-sanity";
import { components } from "@/sanity/portableTextComponents";

export default async function page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { data } = await sanityFetch({
    query: SINGLE_NEWSANDUPDATETYPE_QUERY,
    params: await params,
  });
  return (
    <>
      <section className="bg-zinc-800">
        <div className="max-w-5xl mx-auto px-4">
          <div className="pt-4">
            {data?.newsUpdateFeatureImage ? (
              <Image
                src={urlFor(data.newsUpdateFeatureImage)
                  .width(1200)
                  .height(900)
                  .quality(80)
                  .auto("format")
                  .url()}
                height={900}
                width={800}
                alt={data.newsUpdateTitle || "news and events background image"}
                className="object-cover h-[50vh] w-full rounded-lg "
              />
            ) : (
              <div className=" bg-green-400 w-full h-[50vh]"></div>
            )}
          </div>
          <div className="space-y-12 py-20">
            <h1 className="text-3xl md:text-5xl font-bold text-lime-300">
              {data?.newsUpdateTitle}
            </h1>
            <div className="flex gap-4 text-slate-300">
              <p className="c">{data?.newsUpdateDate}</p>
              <p className="c">
                <span className="font-semibold">Author:</span>{" "}
                {data?.newsUpdateAuthor}
              </p>
            </div>
            <hr />
            <div className="space-y-6">
              
              {data?.newsUpdateDetails != null &&
              data?.newsUpdateDetails != undefined ? (
                  <div className="prose  max-w-5xl prose-p: ">
                      <PortableText value={data?.newsUpdateDetails}  components={components}/>
                  </div>
              ) : null}
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
