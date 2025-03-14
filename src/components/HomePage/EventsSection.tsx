import React from "react";

import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import Image from "next/image";
import { sanityFetch } from "@/sanity/lib/live";
import { TOURNAMENT_QUERY } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import { Button } from "../ui/button";
// import TournamentPerson from "../../../public/images/tournament-person.png"
import Link from "next/link";

export default async function TourmentsSection() {
  const { data } = await sanityFetch({
    query: TOURNAMENT_QUERY,
  });
  return (
    
    <>
      <section className="min-h-[80vh] bg-black py-20" id="tournaments">
        {/* <div className="flex gap-4 justify-center"> */}
        <div className="flex flex-wrap md:flex-nowrap gap-2 justify-center px-4 md:px-0">
          <div className="text-start w-full lg:max-w-md mx-auto space-y-4 pl-0 md:pl-4">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-400">Upcoming Events</h2>
            <p className="text-slate-300">
              Mark your calendars for our upcoming tournaments and events.
              Compete, connect, and enjoy the thrill of the game
            </p>
            {/* <Image
              src={TournamentPerson}
              height={400}
              width={400}
              alt=""
              className="object-cover  hidden md:block"
            /> */}
          </div>
          <ScrollArea className="w-full lg:w-[60vw] min-h-[70vh] py-4">
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
                  <div className="px-4 py-4 flex flex-col gap-4 justify-between h-full bg-slate-400 rounded-b-lg">
                    <p className="text-lg font-semibold">
                      {tournament.tournamentTitle}
                    </p>
                    <p>{tournament.tournamentExcerpt}</p>
                    <Button asChild className="w-48 my-4 bg-white hover:bg-blue-200 text-black">
                      <Link href={`/events/${tournament.tournamentSlug?.current}`}>
                      View Tournament
                      </Link>
                      </Button>
                  </div>
                </div>
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>
      </section>
    </>
  );
}
