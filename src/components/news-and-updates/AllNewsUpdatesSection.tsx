import { sanityFetch } from "@/sanity/lib/live";
import { NEWSANDUPDATETYPE_QUERY } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";

import Link from "next/link";
import * as motion from "motion/react-client";

export default async function AllNewsUpdatesSection() {
  const { data } = await sanityFetch({
    query: NEWSANDUPDATETYPE_QUERY,
  });
  return (
    <section className="bg-black pt-32 pb-20">
      <div className=" mx-auto text-slate-300 px-8">
        <div className="text-center space-y-4">
          <h1 className="text-3xl md:text-5xl font-bold">News and Updates</h1>
          <p className="text-lg leading-8">
            Stay up to date on what new developments are happing at the Nakuru
            Athletic Club
          </p>
        </div>
        {/* <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-20 py-10"> */}
        <div className="flex flex-wrap justify-evenly items-center gap-x-8 gap-y-20 py-20">
          {data.map((newsAndUpdate, index) => (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              key={index}
              // className="flex flex-col  justify-between w-full md:w-[16rem] lg:w-[18rem] rounded-lg h-[38rem] border border-black "
              className="flex flex-col md:flex-row  justify-between items-center w-full sm:w-[18rem] lg:w-[40rem] rounded-lg min-h-[20rem] lg:h-[18rem]  border border-black "
            >
              {newsAndUpdate.newsUpdateFeatureImage ? (
                <motion.div
                  initial={{ x: 200, z: -20, opacity: 0 }}
                  animate={{ x: 0, z: 0, opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  className="min-h-[20rem] "
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
                    // className="object-cover h-64 rounded-t-md"
                    className="object-contain w-full md:w-24 lg:w-[30rem] h-56 md:h-[20rem] rounded-t-md -mb-10 md:rounded-l-md -mr-2"
                  />
                </motion.div>
              ) : null}
              {/* <div className="px-4 py-4 flex flex-col gap-4 justify-between h-full bg-zinc-700 rounded-b-lg"> */}
              <div className="px-4 py-3 flex flex-col gap-4 justify-evenly h-full bg-zinc-800 rounded-lg">
                <p className="text-lg font-semibold text-blue-500">
                  {newsAndUpdate.newsUpdateTitle}
                </p>
                <p>{newsAndUpdate.newsUpdateExcerpt}</p>
                <Link
                  href={`/news-and-updates/${newsAndUpdate.newsUpdateSlug?.current}`}
                  aria-label={`Read More Link to /news-and-updates/${newsAndUpdate.newsUpdateSlug?.current}`}
                >
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  className="w-full md:w-48 md:mr-auto px-2 py-1  bg-transparent text-white  hover:bg-blue-200 hover:text-black rounded-lg border"
                >
                    Read More
                </motion.button>
                  </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
