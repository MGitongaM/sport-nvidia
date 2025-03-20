import { sanityFetch } from "@/sanity/lib/live";
import { NEWSANDUPDATETYPE_QUERY } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";

import Link from "next/link";
import * as motion from "motion/react-client";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";

export default async function AllNewsUpdatesSection1() {
  const { data } = await sanityFetch({
    query: NEWSANDUPDATETYPE_QUERY,
  });
  return (
    <section className="bg-gradient-to-b from-black via-blue-500 to-black pt-32 pb-20 min-h-screen">
      <div className=" mx-auto text-slate-300 px-8">
        <div className="text-center space-y-4">
          <h1 className="text-3xl md:text-5xl font-bold">News and Updates</h1>
          <p className="text-lg leading-8">
            Stay up to date on what new developments are happing at the Nakuru
            Athletic Club
          </p>
        </div>

        <ScrollArea className="min-h-[0vh]">
          <div className="flex  justify-evenly items-center gap-8 pt-20 pb-4">
            {data.map((newsAndUpdate, index) => (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
                key={index}
                className=" w-[17rem] sm:w-[20rem] md:w-96"
              >
                {newsAndUpdate.newsUpdateFeatureImage ? (
                  <motion.div
                  // initial={{ x: 200, z: -20, opacity: 0 }}
                  // animate={{ x: 0, z: 0, opacity: 1 }}
                  // transition={{ duration: 0.8 }}
                  //   className="min-h-[20rem] "
                  >
                    <Image
                      src={urlFor(newsAndUpdate.newsUpdateFeatureImage)
                        .width(800)
                        .height(800)
                        .quality(80)
                        .auto("format")
                        .url()}
                      height={800}
                      width={800}
                      alt={newsAndUpdate.newsUpdateTitle || ""}
                      className="object-cover h-72 w-full rounded-t-md"
                    />
                  </motion.div>
                ) : null}
                <div className="px-4 py-3 flex flex-col gap-1 justify-between h-72 pb-6 rounded-b-md bg-zinc-800 ">
                  <p className="text-lg font-semibold text-blue-300">
                    {newsAndUpdate.newsUpdateTitle}
                  </p>
                  <p className="text-sm">{newsAndUpdate.newsUpdateExcerpt}</p>
                  <Link
                    href={`/news-and-updates/${newsAndUpdate.newsUpdateSlug?.current}`}
                    aria-label={`Read More Link to /news-and-updates/${newsAndUpdate.newsUpdateSlug?.current}`}
                  >
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      className="w-48 md:mr-auto px-2 py-1  bg-transparent text-white  hover:bg-blue-200 hover:text-black rounded-lg border"
                    >
                      Read More
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </section>
  );
}
