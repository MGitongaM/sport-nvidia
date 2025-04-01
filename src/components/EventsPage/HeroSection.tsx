import { urlFor } from "@/sanity/lib/image";
import { SINGLE_TOURNAMEN_QUERYResult } from "@/sanity/types";
import Image from "next/image";
import * as motion from "motion/react-client";

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
            <motion.div
              initial={{ y: 200, z: -20, opacity: 0 }}
              animate={{ y: 0, z: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <Image
                src={urlFor(eventData.tournamentFeatureImage)
                  .width(1200)
                  .height(1200)
                  .quality(80)
                  .auto("format")
                  .url()}
                height={1200}
                width={1200}
                alt={eventData.tournamentTitle || "events background image"}
                // className="object-fill object-top h-screen md:h-[70vh]  w-[90vw] mx-auto top-4 rounded-lg pt-8 relative"
                className="object-cover object-top h-screen md:h-[70vh]  w-[90vw] mx-auto top-4 rounded-lg pt-8 relative"
              />
            </motion.div>
          ) : (
            <div className="bg-zinc-600 rounded-lg"></div>
          )}
          <div className=" absolute top-64 md:left-40 w-72 md:w-[34vw] space-y-6 bg-blue-500/40 backdrop-blur-lg px-4 py-10 rounded-lg mx-4">
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
