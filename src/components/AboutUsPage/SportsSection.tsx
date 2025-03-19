import { sanityFetch } from "@/sanity/lib/live";
import { ABOUTSPORTSCONTENT_QUERY } from "@/sanity/lib/queries";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import * as motion from "motion/react-client";

export default async function SportsSection() {
  const { data: sports } = await sanityFetch({
    query: ABOUTSPORTSCONTENT_QUERY,
  });
  return (
    // <section className="bg-black text-slate-300 px-8 py-20 relative overflow-hidden">
    <section className="bg-gradient-to-b from-blue-500 via-black to-blue-500 ">
      <div className="text-slate-300 px-8 py-20 relative overflow-hidden">
        <div className="text-center space-y-4 ">
          <h3 className="text-3xl md:text-3xl font-bold text-center">
            {sports?.[0].sportsSectionTitle}
          </h3>
          <p className="text-xl leading-8">{sports?.[0].sportSectionText}</p>
        </div>
        {/* <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-16 relative z-20 pt-20"> */}
        <div className="flex flex-wrap justify-center  gap-x-8 gap-y-16 relative z-20 pt-20">
          {sports?.[0].sportsContent?.map((sport, index) => (
            <div
              key={index}
              // className="grid place-content-center min-h-[28rem] w-[80vw] md:w-[40vw] lg:w-[30vw] bg-zinc-900 rounded-lg px- py space-y-4 shadow-[0px_-15px_21px_-9px_#1186ed] shadow-cyan-100"
              // className="grid place-content-center min-h-[28rem] w-[80vw] md:w-[40vw] lg:w-[30vw] bg-zinc-900 rounded-lg px- py space-y-4 "
              className=" flex  flex-col min-h-[32rem] w-full md:w-96 xl:w-[24rem] bg-zinc-900 rounded-lg px- py space-y-4 "
            >
              <div className=" bg-zinc-700 rounded-lg  mx-auto">
                {sport?.sportImage ? (
                  <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                  >
                    <Image
                      src={urlFor(sport.sportImage)
                        .width(800)
                        .height(400)
                        .quality(80)
                        .auto("format")
                        .url()}
                      height={400}
                      width={800}
                      alt={"Hero Image"}
                      className="object-cover h-72 w-full rounded-t-lg"
                    />
                  </motion.div>
                ) : null}
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.2 }}
                viewport={{ once: true }}
                className=""
              >
                <div className="pb-10">
                  <p className="text-2xl py-4 font-semibold text-center">
                    {sport.sportHeading}
                  </p>
                  <p className="text- leading-8 px-1 text-center text-balance">
                    {sport.sportText}
                  </p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
        {/* <div className="absolute flex justify-center items-center w-full  h-full  lg:top-6 -mr-40 ">
          {sports?.[0].sportBackgroundImage ? (
            <Image
              src={urlFor(sports?.[0].sportBackgroundImage)
                .width(400)
                .height(400)
                .quality(80)
                .auto("format")
                .url()}
              height={400}
              width={400}
              alt={"Hero Image"}
              className="object-cover size-[40rem] md:size-[36rem] mr-[5rem] rounded-lg  z-10 "
            />
          ) : null}
        </div> */}
      </div>
    </section>
  );
}
