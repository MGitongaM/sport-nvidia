import React from "react";

export default function HeroSection() {
  return (
    <>
      <section className="h-screen ">
        <div className="relative w-full h-screen overflow-y-hidden">
          <div className="flex  justify-center items-center pt-64">
            <h1>Events Hero Section</h1>
          </div>
          <div className="absolute top-0  -z-10 bg-green-400 w-full h-[80vh]"></div>
        </div>
      </section>
    </>
  );
}
