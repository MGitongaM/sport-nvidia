import React from "react";
import { Button } from "../ui/button";

export default function FeaturedSection() {
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
        <div className="flex gap-4 justify-center">
          {[1, 2, 4].map((course, index) => (
            <div key={index} className="w-64 h-72 border px-4 py-6">
              <p className="text-lg">Lorem, ipsum dolor.</p>
              <p className="c">{course}</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
                officia!
              </p>
              <Button>View Courses</Button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
