import { SINGLE_TOURNAMEN_QUERYResult } from "@/sanity/types";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "next-sanity";
import { components } from "@/sanity/portableTextComponents";

export default function ContentSection({
  eventData,
}: {
  eventData: SINGLE_TOURNAMEN_QUERYResult;
}) {
  return (
    <>
      <section className=" bg-black text-slate-300">
        <div className="container mx-auto min-h-screen py-20">
          <div className="flex flex-wrap-reverse lg:flex-nowrap  gap-4 justify-between items-start">
            <div className="w-full md:w-6/12 space-y-8 px-4">
              {/* <h2 className="text-4xl">{eventData?.tournamentTitle}</h2> */}
              {/* <p className="text-lg">{eventData?.tournamentExcerpt}</p> */}
              {eventData?.tournamentDetails != null &&
              eventData?.tournamentDetails ? (
                <div className="prose prose:lg  max-w-5xl prose-p:text-slate-300 prose-h1:text-slate-200 prose-h2:text-slate-200 prose-h3:text-slate-200 prose-h4:text-slate-200 prose-h5:text-slate-200 prose-h6:text-slate-200 prose-text-slate-300 prose-strong:text-slate-300 prose-ul:text-slate-300">
                  <PortableText
                    value={eventData?.tournamentDetails}
                    components={components}
                  />
                </div>
              ) : null}
              <div className="flex items-center gap-4">
                <div className="">
                  {eventData?.tournamentsHomeTeamImage ? (
                    <Image
                      src={urlFor(eventData?.tournamentsHomeTeamImage)
                        .width(1200)
                        .height(1200)
                        .quality(80)
                        .auto("format")
                        .url()}
                      height={1200}
                      width={1200}
                      alt={"home team logo image"}
                      className="object-cover  h-96 w-96  rounded-lg "
                    />
                  ) : null}
                </div>
                <p className="font-semibold">vs</p>
                <div className="lg:mt-40  ">
                  {eventData?.tournamentsRivalTeamImage ? (
                    <Image
                      src={urlFor(eventData?.tournamentsRivalTeamImage)
                        .width(1200)
                        .height(1200)
                        .quality(80)
                        .auto("format")
                        .url()}
                      height={1200}
                      width={1200}
                      alt={"rival team logo image"}
                      className="object-cover  h-96 w-96  rounded-lg"
                    />
                  ) : null}
                </div>
              </div>
            </div>
            <div className="w-full md:w-4/12 space-y-10 px-4">
              <div className=" rounded-lg border px-8 py-5">
                <p className="text-2xl">Event Details</p>
                <hr />
                <div className="my-8 space-y-4">
                  <p>
                    <span className="font-semibold">Start Date :</span>
                    {eventData?.tournamentsStartDate}
                  </p>
                  <p>
                    <span className="font-semibold">End Date :</span>
                    {eventData?.tournamentsEndDate}
                  </p>
                  <p>
                    <span className="font-semibold">Opening Hours :</span>
                    {eventData?.tournamentsOpeningHours}
                  </p>
                </div>
              </div>
              <div className=" rounded-lg border px-8 py-5">
                <p className="text-2xl">Event Venue</p>
                <hr />
                <div className="my-8 space-y-4">
                  <p>
                    <span className="font-semibold">Venue :</span>
                    {eventData?.tournamentsVenue}
                  </p>
                  <p>
                    <span className="font-semibold">Address :</span>
                    {eventData?.tournamentsAddress}
                  </p>
                  <p>
                    <span className="font-semibold">Email :</span>
                    {eventData?.tournamentsEmail}
                  </p>
                  <p>
                    <span className="font-semibold mr-1">Contact :</span>
                    {eventData?.tournamentsPhoneNumber}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
