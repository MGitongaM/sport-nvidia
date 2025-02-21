import React from "react";
import { Button } from "../ui/button";
import { sanityFetch } from "@/sanity/lib/live";
import { GOLFCOURSE_QUERY } from "@/sanity/lib/queries";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";

export default async function FeaturedSection() {
  const { data } = await sanityFetch({
    query: GOLFCOURSE_QUERY,
  });
  return (
    <>
      <section className="min-h-[80vh] my-20">

        <div className="flex gap-2 justify-center">
          <div className="text-start max-w-md mx-auto space-y-4">
            <h2 className="text-2xl">Explore Our Golf Courses</h2>
            <p className="">
              From scenic fairways to challenging greens, discover our premier
              golf courses designed for every level of golfer. Play where
              champions train.
            </p>
          </div>
          <ScrollArea className=" w-[60vw] min-h-[70vh] overflow-y-visible py-4">
            <div className="flex w-max gap-12 justify-center">
              {data.map((course, index) => (
                <div
                  key={index}
                  className="flex flex-col  justify-between w-[22rem] rounded-lg min-h-72 border "
                >
                  {course.golfCourseFeatureImage ? (
                    <Image
                      src={urlFor(course.golfCourseFeatureImage)
                        .width(800)
                        .height(800)
                        .quality(80)
                        .auto("format")
                        .url()}
                      height={800}
                      width={800}
                      alt={course.golfCourseTitle || ""}
                      className="object-cover rounded-t-md"
                    />
                  ) : null}
                  <div className="px-4 py-4 flex flex-col gap-4 justify-between h-full bg-green-50">
                    <p className="text-lg font-semibold">{course.golfCourseTitle}</p>
                    <p>{course.golfCourseExcerpt}</p>
                    <Button className="w-48 my-4">View Course Details</Button>
                  </div>
                </div>
              ))}
            </div>
            <ScrollBar orientation='horizontal'/>
          </ScrollArea>
        </div>
      </section>
    </>
  );
}
