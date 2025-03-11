import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { sanityFetch } from "@/sanity/lib/live";
import { ABOUTMISSIONVISIONCONTENT_QUERY } from "@/sanity/lib/queries";

export default async function VisionMissionSection() {
  const { data: missionVision } = await sanityFetch({
    query: ABOUTMISSIONVISIONCONTENT_QUERY,
  });
  return (
    <section className="bg-black">
      <div className="container mx-auto px-8 py-28 text-slate-300">
        <div className="flex flex-wrap md:flex-nowrap justify-evenly gap-8 relative ">
          <div className="z-20 w-full md:w-[38vw] h-full md:h-[72vh] lg:h-[58vh] bg-zinc-900 rounded-lg px-6 py-12">
            <div className="c"></div>
            <p className="text-2xl font-semibold py-12">
              {missionVision?.[0].missionTitle}{" "}
            </p>
            <p className="text-lg leading-8">
              {missionVision?.[0].missionText}
            </p>
          </div>
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
          <div className="z-20 w-full md:w-[38vw] h-full md:h-[72vh] lg:h-[58vh] bg-zinc-900 rounded-lg px-6 py-12">
            <div className="c"></div>
            <p className="text-2xl font-semibold py-12">
              {missionVision?.[0].visionTitle}{" "}
            </p>
            <p className="text-lg leading-8">{missionVision?.[0].visionText}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
