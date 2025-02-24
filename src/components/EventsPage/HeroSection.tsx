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
      <section className="h-screen ">
        <div className="relative w-full h-screen overflow-y-hidden">
          <div className="flex  justify-start items-center pt-64 px-8">
            <div className="max-w-xl space-y-6 bg-white/40 backdrop-blur-lg px-4 py-10 rounded-lg">
            <p className="text-green-900">Event</p>
              <h1 className="text-3xl md:text-5xl font-bold text-green-900">
                {eventData?.tournamentTitle}
              </h1>
              <p className="text-green-900 text-lg">{eventData?.tournamentExcerpt}</p>
            </div>
          </div>
          {eventData?.tournamentFeatureImage ? (
            <Image
              src={urlFor(eventData.tournamentFeatureImage)
                .width(1200)
                .height(900)
                .quality(80)
                .auto("format")
                .url()}
              height={900}
              width={800}
              alt={eventData.tournamentTitle || "events background image"}
              className="object-cover h-[80vh] w-full absolute top-0 -z-10"
            />
          ) : (
            <div className="absolute top-0  -z-10 bg-green-400 w-full h-[80vh]"></div>
          )}
        </div>
      </section>
    </>
  );
}
