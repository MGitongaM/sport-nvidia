import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import Image from "next/image";
import { sanityFetch } from "@/sanity/lib/live";
import { TOURNAMENT_QUERY } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
// import { Button } from "../ui/button";
import Link from "next/link";
import * as motion from "motion/react-client";


export default async function TournamentSection() {
  const { data } = await sanityFetch({
    query: TOURNAMENT_QUERY,
  });
  return (
    <section className="min-h-[80vh] bg-black py-20" id="tournaments">
      <div className="flex flex-wrap md:flex-nowrap gap-2 justify-center px-4 md:px-0">
        <motion.div
          initial={{ x: -500, z: -10 }}
          whileInView={{ x: 0, z: 0 }}
          viewport={{once:true}}
          transition={{ duration: 0.8 }}
          className="text-start w-full lg:max-w-md mx-auto space-y-4 pl-0 md:pl-4 text-slate-300"
        >
          <h2 className="text-3xl lg:text-5xl md:text-5xl font-bold  ">
            {/* Upcoming Tournaments */}
            Updates
          </h2>
          <p className="text-lg leading-8">
            Mark your calendars for our upcoming tournaments and events.
            Compete, connect, and enjoy the thrill of the game
          </p>
        </motion.div>
        <ScrollArea className="w-full lg:w-[60vw] min-h-[70vh] py-4 ">
          <div className="flex gap-12 justify-center">
            {data.map((tournament, index) => (
              <div
                key={index}
                className="flex flex-col  justify-between w-[22rem] rounded-lg min-h-72 border border-black "
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
                <div className="px-4 py-4 flex flex-col gap-4 justify-between h-full bg-zinc-900 text-slate-300 rounded-b-lg">
                  <p className="text-lg font-semibold">
                    {tournament.tournamentTitle}
                  </p>
                  <p>{tournament.tournamentExcerpt}</p>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    // className="px-4 py-2 bg-white w-48 hover:bg-blue-500 text-black rounded-lg"
                    className="px-4 py-2 bg-white w-48 hover:bg-blue-500 text-black rounded-lg font-medium"
                  >
                    <Link
                      href={`/events/${tournament.tournamentSlug?.current}`}
                    >
                      {/* View Tournament */}
                      Read More
                    </Link>
                  </motion.button>
                </div>
              </div>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </section>
  );
}
