import React from "react";
import { Button } from "../ui/button";
import { sanityFetch } from "@/sanity/lib/live";
import { NEWSANDUPDATETYPE_QUERY } from "@/sanity/lib/queries";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

export default async function FeaturedSection() {
  const { data } = await sanityFetch({
    query: NEWSANDUPDATETYPE_QUERY,
  });
  return (
    <>
      <section className="min-h-[80vh] my-20">
        <div className="text-center max-w-lg mx-auto">
          <h2 className="text-2xl">Explore Our Golf Courses</h2>
          <p className="">
            From scenic fairways to challenging greens, discover our premier
            golf courses designed for every level of golfer. Play where
            champions train.
          </p>
        </div>
        <div className="flex gap-4 justify-center items-center"></div>
        <div className="flex gap-12 justify-center">
          {data.map((course, index) => (
            <div
              key={index}
              className="flex flex-col justify-between w-80 min-h-72 border px-4 py-6"
            >
              {course.newsUpdateFeatureImage ? (
                <Image
                  src={urlFor(course.newsUpdateFeatureImage)
                    .width(800)
                    .height(800)
                    .quality(80)
                    .auto("format")
                    .url()}
                  height={800}
                  width={800}
                  alt={course.newsUpdateTitle || ""}
                  className="object-cover"
                />
              ) : null}

              <p className="c">{course.newsUpdateTitle}</p>
              <p>{course.newsUpdateExcerpt}</p>
              <Button>View Details</Button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
