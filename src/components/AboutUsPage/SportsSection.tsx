import { sanityFetch } from "@/sanity/lib/live";
import { ABOUTSPORTSCONTENT_QUERY } from "@/sanity/lib/queries";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

export default async function SportsSection() {
  const { data: sports } = await sanityFetch({
    query: ABOUTSPORTSCONTENT_QUERY,
  });
  return (
    <section className="bg-black text-slate-300 px-8 py-20">
      <div className="text-center space-y-4 ">
        <h3 className="text-3xl md:text-3xl font-bold text-center">
          {sports?.[0].sportsSectionTitle}
        </h3>
        <p className="text-xl">{sports?.[0].sportSectionText}</p>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-8 py-10">
        {sports?.[0].sportsContent?.map((sport, index) => (
          <div
            key={index}
            className="grid place-content-center min-h-[40vh] w-[80vw] md:w-[40vw] lg:w-[30vw] bg-zinc-900 rounded-lg px-4 py-8 space-y-4"
          >
            <div className=" bg-zinc-700 rounded-lg size-32 mx-auto">
              {sport?.sportImage ? (
                <Image
                  src={urlFor(sport.sportImage)
                    .width(400)
                    .height(400)
                    .quality(80)
                    .auto("format")
                    .url()}
                  height={400}
                  width={400}
                  alt={"Hero Image"}
                  className="object-cover h-full w-full rounded-lg"
                />
              ) : null}
            </div>
            <p className="text-xl font-semibold text-center">
              {sport.sportHeading}
            </p>
            <p className="text-lg">{sport.sportText}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
