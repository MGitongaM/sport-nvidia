import React from "react";
import { Button } from "../ui/button";

export default function NewsUpdateSection() {
  return (
    <>
      <section className="min-h-[80vh] my-20">
        <div className="text-center max-w-lg mx-auto">
          <h2 className="text-2xl">Golf News & Insights</h2>
          <p className="">
            Stay updated with the latest in golf, including tournament results,
            player interviews, and expert tips
          </p>
        </div>
        <div className="flex gap-4 justify-center">
          {["A", "B", "C", "D"].map((course, index) => (
            <div key={index} className="w-64 min-h-72 border px-4 py-6">
              <p className="text-lg">Lorem, ipsum dolor.</p>
              <p className="c">{course}</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
                officia! Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Et, inventore? Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Et, inventore? Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Et, inventore?
              </p>
              <Button>Read More</Button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
