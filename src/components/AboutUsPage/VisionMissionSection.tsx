import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { sanityFetch } from "@/sanity/lib/live";
import { ABOUTMISSIONVISIONCONTENT_QUERY } from "@/sanity/lib/queries";
import * as motion from "motion/react-client";
import { Loader, Minimize } from "lucide-react";

export default async function VisionMissionSection() {
  const { data: missionVision } = await sanityFetch({
    query: ABOUTMISSIONVISIONCONTENT_QUERY,
  });
  return (
    <section className="bg-black">
      <div className="container mx-auto px-8 py-28 text-slate-300">
        <div className="flex flex-wrap md:flex-nowrap justify-evenly gap-8 relative ">
          <motion.div
            initial={{ y: 200, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ margin: "-10%" }}
            transition={{ duration: 0.8 }}
            className="z-20 w-full md:w-[38vw] h-full md:h-[72vh] lg:h-[56vh] bg-zinc-900 rounded-lg px-6 py-2 shadow-lg shadow-blue-500"
          >
            <div className="c"></div>
            <p className="flex items-center justify-center w-full gap-2 text-2xl font-semibold py-12">
              {missionVision?.[0].missionTitle}{" "}
              <span><Loader className="text-blue-500"/></span>
            </p>
            <p className="text-lg leading-8">
              {missionVision?.[0].missionText}
            </p>
          </motion.div>
          <div className="absolute z-0 top-10">
            {missionVision?.[0].aboutBackgroundImage ? (
              <Image
                src={urlFor(missionVision?.[0].aboutBackgroundImage)
                  .width(400)
                  .height(400)
                  .quality(80)
                  .auto("format")
                  .url()}
                height={400}
                width={400}
                alt={"Hero Image"}
                // className="object-cover h-[36rem] md:h-[36rem] mt-32 md:mt-10 w-full md:rotate-90"
                className="object-cover size-[56rem] md:size-[24rem] rounded-lg z-10 md:rotate-90"
              />
            ) : null}
          </div>
          <motion.div
            initial={{ y: 200, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ margin: "-10%" }}
            transition={{ duration: 0.8 }}
            className="z-20 w-full md:w-[38vw] h-full md:h-[72vh] lg:h-[56vh] bg-zinc-900 rounded-lg px-6 py-2 shadow-lg shadow-blue-500"
          >
            <div className="c"></div>
            <p className="flex items-center justify-center w-full gap-2 text-2xl font-semibold py-12">
              {missionVision?.[0].visionTitle}{" "}
              <span><Minimize className="text-blue-500"/></span>
            </p>
            <p className="text-lg leading-8">{missionVision?.[0].visionText}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
