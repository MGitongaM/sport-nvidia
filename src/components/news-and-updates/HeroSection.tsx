import { sanityFetch } from "@/sanity/lib/live";
import { NEWSANDUPDATEHEROCONTENT_QUERY } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";

import * as motion from "motion/react-client";

export default async function HeroSection() {
    const { data: heroContent } = await sanityFetch({
        query: NEWSANDUPDATEHEROCONTENT_QUERY,
      });
  return (
    <>
     {/* <section className="bg-black "> */}
     <section className="bg-gradient-to-b from-black to-blue-500 ">
        <div className="flex flex-wrap flex-col-reverse md:flex-row md:flex-nowrap  min-h-[65vh] lg:h-[65vh] pt-20">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-5/12 lg:w-[40rem] flex flex-col justify-center gap-8 h-auto bg-black pl-10 lg:pl-20 pr-4 py-8 text-slate-300"
          >
            <h1 className="text-3xl lg:text-5xl font-bold">
              {heroContent?.[0].newsUpdateHeroSectionTitle}
              {/* What&apos;s Trending */}
            </h1>
            <p className="text-xl font-semibold">
            {heroContent?.[0].newsUpdateHeroSectionText}
            </p>
          </motion.div>
          <motion.div
            initial={{ y: -200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className=" grow bg-black"
          >
            {heroContent?.[0].newsUpdateHeroSectionImages?.map((img,index)=>
            img?.newsUpdateImage ?(<div key={index}>
                <Image
                    src={urlFor(img.newsUpdateImage)
                        .width(800)
                        .height(800)
                        .quality(80)
                        .auto("format")
                        .url()}
                      height={800}
                      width={800}
                      alt={"Nakuru Rugby Team Sponsor Image"}
                      className="object-cover w-full h-[60vh]"
            
                                    
                />
            </div>):null
            ) }
          </motion.div>
        </div>
      </section>
    </>
  )
}
