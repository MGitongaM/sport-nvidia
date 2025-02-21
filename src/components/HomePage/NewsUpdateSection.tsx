import React from "react";
import { Button } from "../ui/button";
import { sanityFetch } from "@/sanity/lib/live";
import { NEWSANDUPDATETYPE_QUERY } from "@/sanity/lib/queries";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";

export default async function NewsUpdateSection() {
  const { data } = await sanityFetch({
    query: NEWSANDUPDATETYPE_QUERY,
  });
  return (
    <>
      <section className="min-h-[80vh] my-20">
        <div className="flex gap-2 justify-center">
          <div className="text-start max-w-lg mx-auto">
            <h2 className="text-2xl">Golf News & Insights</h2>
            <p className="">
              Stay updated with the latest in golf, including tournament
              results, player interviews, and expert tips
            </p>
          </div>
          <ScrollArea className=" w-[60vw] min-h-[70vh] overflow-y-visible py-4">
            <div className="flex w-max gap-12 justify-center">
              {data.map((newsAndUpdate, index) => (
                <div
                  key={index}
                  className="flex flex-col  justify-between w-[22rem] rounded-lg min-h-72 border "
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
                  <div className="px-4 py-4 flex flex-col gap-4 justify-between h-full bg-green-100">
                    <p className="text-lg font-semibold">
                      {newsAndUpdate.newsUpdateTitle}
                    </p>
                    <p>{newsAndUpdate.newsUpdateExcerpt}</p>
                    <Button className="w-48 my-4">View Details</Button>
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
