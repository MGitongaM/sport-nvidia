import { sanityFetch } from "@/sanity/lib/live";
import { ABOUTMISSIONVISIONCONTENT_QUERY } from "@/sanity/lib/queries";

export default async function VisionMissionSection() {
  const { data: missionVision } = await sanityFetch({
    query: ABOUTMISSIONVISIONCONTENT_QUERY,
  });
  return (
    <section className="bg-black">
      <div className="container mx-auto px-8 py-20 text-slate-300">
        <div className="flex flex-wrap md:flex-nowrap justify-evenly items-center gap-8">
          <div className="w-full md:w-[36vw] h-full md:h-[72vh] lg:h-96 bg-zinc-900 rounded-lg px-6 py-12">
            <div className="c"></div>
            <p className="text-2xl font-semibold py-12">
              {missionVision?.[0].missionTitle}{" "}
            </p>
            <p className="text-lg">{missionVision?.[0].missionText}</p>
          </div>
          <div className="w-full md:w-[36vw] h-full md:h-[72vh] lg:h-96 bg-zinc-900 rounded-lg px-6 py-12">
            <div className="c"></div>
            <p className="text-2xl font-semibold py-12">
              {missionVision?.[0].visionTitle}{" "}
            </p>
            <p className="text-lg">{missionVision?.[0].visionText}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
