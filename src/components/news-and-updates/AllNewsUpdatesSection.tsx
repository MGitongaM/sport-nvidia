import { sanityFetch } from "@/sanity/lib/live";
import { NEWSANDUPDATETYPE_QUERY } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

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
        <div className="flex flex-wrap justify-evenly items-center gap-x-10 gap-y-20 py-10">
          {data.map((newsAndUpdate, index) => (
            <div
              key={index}
              // className="flex flex-col  justify-between w-full md:w-[16rem] lg:w-[18rem] rounded-lg h-[38rem] border border-black "
              className="flex flex-col md:flex-row  justify-between w-full md:w-[18rem] lg:w-[32rem] rounded-lg min-h-[20rem] lg:h-[18rem] border border-black "
            >
              {newsAndUpdate.newsUpdateFeatureImage ? (
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
                  className="object-contain w-full md:w-24 lg:w-48 rounded-t-md md:rounded-l-md"
                />
              ) : null}
              {/* <div className="px-4 py-4 flex flex-col gap-4 justify-between h-full bg-zinc-700 rounded-b-lg"> */}
              <div className="px-4 py-4 flex flex-col gap-4 justify-between h-full bg-zinc-700 rounded-b-lg">
                <p className="text-lg font-semibold">
                  {newsAndUpdate.newsUpdateTitle}
                </p>
                <p>{newsAndUpdate.newsUpdateExcerpt}</p>
                <Button
                  asChild
                  className="w-full md;w-48 mx-auto my-4 bg-white hover:bg-blue-200 text-black"
                >
                  <Link
                    href={`/news-and-updates/${newsAndUpdate.newsUpdateSlug?.current}`}
                  >
                    View Details
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
