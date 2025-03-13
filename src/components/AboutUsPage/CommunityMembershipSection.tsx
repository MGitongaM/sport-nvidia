import { sanityFetch } from "@/sanity/lib/live";
import { ABOUTCOMMUNITYMEMBERSHIPCONTENT_QUERY } from "@/sanity/lib/queries";
import Link from "next/link";
// import Image from "next/image";
// import { urlFor } from "@/sanity/lib/image";
import * as motion from "motion/react-client";
import { MessageSquarePlus, Webhook } from "lucide-react";

export default async function CommunityMembershipSection() {
  const { data: communityMemmbership } = await sanityFetch({
    query: ABOUTCOMMUNITYMEMBERSHIPCONTENT_QUERY,
  });
  return (
    <section className="bg-black pb-40">
      <div className="container mx-auto px-8 py-20 bg-zinc-950 rounded-lg text-slate-300">
        <div className="flex flex-wrap md:flex-nowrap justify-evenly  gap-8 relative">
          <motion.div
            initial={{ y: 200, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{once:true}}
            transition={{ duration: 0.8 }}
            // className="z-20 w-full md:w-[42vw] lg:w-[36vw] h-full md:min-h-[30rem] bg-zinc-900 rounded-lg px-6 py-12 shadow-lg shadow-cyan-500"
            className="z-20 w-full md:w-[42vw] lg:w-[36vw] h-full md:min-h-[30rem] bg-zinc-900 rounded-lg px-6 py-12 "
          >
            <div className="c"></div>
            <p className="flex items-center gap-2 text-2xl font-semibold py-12">
              {communityMemmbership?.[0].communityTitle}
              <Webhook className="text-blue-500"/>
            </p>
            <p className="text-lg leading-8">
              {communityMemmbership?.[0].communityText}
            </p>
          </motion.div>
          {/* <div className="absolute z-0 mt-16">
            {communityMemmbership?.[0].communityBackgroundImage ? (
              <Image
                src={urlFor(communityMemmbership?.[0].communityBackgroundImage)
                  .width(400)
                  .height(400)
                  .quality(80)
                  .auto("format")
                  .url()}
                height={400}
                width={400}
                alt={"Hero Image"}
                className="object-cover size-[56rem] md:size-[24rem] rounded-lg z-10 "
              />
            ) : null}
          </div> */}
          <motion.div
            initial={{ y: 200, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{once:true}}
            transition={{ duration: 0.8 }}
            // className="z-20 w-full md:w-[42vw] lg:w-[36vw] h-full md:min-h-[30rem] bg-zinc-900 rounded-lg px-6 py-12 shadow-lg shadow-cyan-500"
            className="z-20 w-full md:w-[42vw] lg:w-[36vw] h-full md:min-h-[30rem] bg-zinc-900 rounded-lg px-6 py-12 "
          >
            <div className="c"></div>
            <p className="flex items-center gap-2 text-2xl font-semibold py-12">
              {communityMemmbership?.[0].membershipTitle}{" "} 
              <MessageSquarePlus className="text-blue-500"/>
            </p>
            <p className="text-lg leading-8">
              {communityMemmbership?.[0].membershipText}
            </p>
          </motion.div>
        </div>
        <motion.div
          initial={{ y: 200, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{once:true}}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="grid place-content-center py-10"
        >
          
          <motion.button
              whileHover={{ scale: 1.1 }}
              className="px-4 py-2 bg-white w-64 hover:bg-blue-500 text-black font-semibold rounded-lg mt-10"
            >
              <Link href="/contact">Get In Touch</Link>
            </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
