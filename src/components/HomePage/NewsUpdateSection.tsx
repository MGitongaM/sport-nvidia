import React from "react";
import { Button } from "../ui/button";
import { sanityFetch } from "@/sanity/lib/live";
import { NEWSANDUPDATETYPE_QUERY } from "@/sanity/lib/queries";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";
// import GolfClubs from "../../../public/images/golf-clubs.png"
import Link from "next/link";

export default async function NewsUpdateSection() {
  const { data } = await sanityFetch({
    query: NEWSANDUPDATETYPE_QUERY,
  });
  return (
    <>
      <section className="min-h-[80vh] bg-black py-20" id="news-&-updates">
        {/* <div className="flex gap-2 justify-center"> */}
        <div className="flex flex-wrap md:flex-nowrap gap-2 justify-center px-4 md:px-0">
          <div className="text-start w-full lg:max-w-md mx-auto space-y-4 pl-0 md:pl-4">
            <h2 className="text-3xl md:text-4xl font-bold text-lime-400">N.A.C News & Insights</h2>
            <p className="text-slate-300">
              Stay updated with the latest news, including tournament
              results, player interviews, and expert tips
            </p>
            {/* <Image
              src={GolfClubs}
              height={400}
              width={400}
              alt=""
              className="object-cover  hidden md:block"
            /> */}
          </div>
          <ScrollArea className=" w-full lg:w-[60vw] min-h-[70vh] overflow-y-visible py-4">
            <div className="flex w-max gap-12 justify-center">
              {data.map((newsAndUpdate, index) => (
                <div
                  key={index}
                  className="flex flex-col  justify-between w-[22rem] rounded-lg min-h-72 border border-black "
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
                      className="object-cover rounded-t-md"
                    />
                  ) : null}
                  <div className="px-4 py-4 flex flex-col gap-4 justify-between h-full bg-slate-400 rounded-b-lg">
                    <p className="text-lg font-semibold">
                      {newsAndUpdate.newsUpdateTitle}
                    </p>
                    <p>{newsAndUpdate.newsUpdateExcerpt}</p>
                    <Button asChild className="w-48 my-4 bg-white hover:bg-green-200 text-black">
                      <Link href={`/news-and-updates/${newsAndUpdate.newsUpdateSlug?.current}`}>
                      View Details
                      </Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>
      </section>
    </>
  );
}
