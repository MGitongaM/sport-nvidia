import { sanityFetch } from "@/sanity/lib/live";
import { TOURNAMENT_QUERY } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";

import Link from "next/link";
import Image from "next/image";
import * as motion from "motion/react-client";

export default async function AllEventsSection() {
  const { data } = await sanityFetch({
    query: TOURNAMENT_QUERY,
  });
  return (
    // <section className="bg-black pt-32 pb-20">
    <section className="bg-gradient-to-b from-5% from-blue-500 via-black to-black pt-32 pb-20">
      <div className=" mx-auto text-slate-300 px-8">
        <div className="text-center space-y-4">
          <h1 className="text-3xl md:text-5xl font-bold">Tournament Events</h1>
          <p className="text-lg leading-8">
            Be in the loop on the upcoming games and derbies when it comes to
            nakuru rugby football team
          </p>
        </div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.3,
                duration: 0.8,
              },
            },
          }}
          className="flex flex-wrap justify-center items-center gap-x-10 gap-y-20 py-10"
        >
          {data.map((tournament, index) => (
            <motion.div
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
              }}
              key={index}
              className="flex flex-col  justify-between w-[22rem] rounded-lg h-[46rem] border border-black "
            >
              {tournament.tournamentFeatureImage ? (
                <Image
                  src={urlFor(tournament.tournamentFeatureImage)
                    .width(800)
                    .height(800)
                    .quality(80)
                    .auto("format")
                    .url()}
                  height={800}
                  width={800}
                  alt={tournament.tournamentTitle || ""}
                  className="object-cover rounded-t-md"
                />
              ) : null}
              <div className="px-4 py-4 flex flex-col gap-4 justify-between h-full bg-zinc-800 text-slate-300 rounded-b-lg">
                <p className="text-lg font-semibold">
                  {tournament.tournamentTitle}
                </p>
                <p>{tournament.tournamentExcerpt}</p>

                <Link href={`/events/${tournament.tournamentSlug?.current}`}>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    className="w-full md:w-48 md:mr-auto px-2 py-1  bg-transparent text-black  bg-white hover:bg-blue-200 hover:text-black rounded-lg border"
                  >
                    View Tournament
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
