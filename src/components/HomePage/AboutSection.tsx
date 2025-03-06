import { urlFor } from "@/sanity/lib/image"
import { sanityFetch } from "@/sanity/lib/live"
import { BANNER_QUERY } from "@/sanity/lib/queries"
import Image from "next/image"


export default async function AboutSection() {
    const {data:banner}= await sanityFetch({
        query:BANNER_QUERY
    })
  return (
    <section className="min-h-[80vh] space-y-8 px-8 py-20 text-slate-300  bg-black">
            <h2 className="text-5xl font-bold text-center">{banner?.[1].bannerTitle }</h2>
            <div className="max-w-7xl mx-auto flex flex-wrap md:flex-nowrap items-center justify-between h-full ">
                <div className="w-[50vw] grow">
                    {banner?.[1].bannerImage?(<Image
                        src={urlFor(banner?.[1].bannerImage)
                            .width(800)
                            .height(800)
                            .quality(80)
                            .auto("format")
                            .url()}
                            height={800}
                            width={800}
                            alt={banner?.[1].bannerTitle || ""}
                            className="object-cover h-full w-full"
                    />):null}
                </div>
                <div className="w-full md:w-[50vw] bg-zinc-900 rounded-lg px-8 py-12">
                    <p className="text-lg">{banner?.[1].bannerText}</p>
                </div>
            </div>
    </section>
  )
}
