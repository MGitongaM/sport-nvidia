import { urlFor } from "@/sanity/lib/image";
import { SINGLE_TOURNAMEN_QUERYResult } from "@/sanity/types";
import Image from "next/image";

export default function HeroSection({
  eventData,
}: {
  eventData: SINGLE_TOURNAMEN_QUERYResult;
}) {
  return (
    <>
      <section className="min-h-[75vh] bg-black pt-32 ">
        <div className="container mx-auto px-4">
          {eventData?.tournamentFeatureImage ? (
            <Image
              src={urlFor(eventData.tournamentFeatureImage)
                .width(800)
                .height(900)
                .quality(80)
                .auto("format")
                .url()}
              height={900}
              width={800}
              alt={eventData.tournamentTitle || "events background image"}
              // className="object-fill object-top h-screen md:h-[70vh]  w-[90vw] mx-auto top-4 rounded-lg pt-8 relative"
              className="object-cover object-top h-screen md:h-[70vh]  w-[90vw] mx-auto top-4 rounded-lg pt-8 relative"
            />
          ) : (
            <div className="bg-zinc-600 rounded-lg"></div>
          )}
          <div className=" absolute top-64 md:left-40 w-72 md:w-[34vw] space-y-6 bg-white/40 backdrop-blur-lg px-4 py-10 rounded-lg mx-4">
            {/* <p>welcome to</p> */}
            <h1 className="text-3xl lg:text-5xl font-bold">
              {eventData?.tournamentTitle}
            </h1>
            {/* <p className="text-lg text-black">{eventData?.tournamentExcerpt}</p> */}
          </div>
        </div>
      </section>
    </>
  );
}
