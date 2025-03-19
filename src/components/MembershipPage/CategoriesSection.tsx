// import Image from "next/image";
// import { urlFor } from "@/sanity/lib/image";
import { sanityFetch } from "@/sanity/lib/live";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import { MEMBERSHIPCATEGORIESCONTENT_QUERY } from "@/sanity/lib/queries";
import { PortableText } from "next-sanity";
import { components } from "@/sanity/portableTextComponents";
import * as motion from "motion/react-client";
import { Shield } from "lucide-react";

export default async function CategoriesSection() {
  const { data } = await sanityFetch({
    query: MEMBERSHIPCATEGORIESCONTENT_QUERY,
  });
  return (
    // <section className="bg-black py-20">
    <section className="bg-blue-500 py-20">
      <div className="flex flex-wrap md:flex-nowrap gap-2 justify-center px-4 md:px-0">
        <motion.div
          initial={{ x: -500, z: -10 }}
          whileInView={{ x: 0, z: 0 }}
          transition={{ duration: 0.8 }}
          className="text-start w-full lg:max-w-md mx-auto space-y-4 pl-0 md:pl-4 text-slate-300"
        >
          <h2 className="text-3xl md:text-5xl font-bold  ">
            Membership Categories
          </h2>
          <p className="text-lg leading-8">
            We offer a variety of membership options tailored to suit different
            needs and preferences:
          </p>
        </motion.div>
        <ScrollArea className="w-full lg:w-[60vw] min-h-[42vh] py-4">
          <div className="flex gap-12 justify-center">
            {data?.map((category, index) => (
              <div
                key={index}
                className="flex flex-col  justify-between w-[26rem] rounded-lg min-h-72 border border-black "
              >
                {/* {tournament.tournamentFeatureImage ? (
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
                  ) : null} */}
                <div className="px-8 py-12 flex flex-col gap-4 justify-between h-full bg-zinc-900  text-slate-300 rounded-b-lg">
                  <p className="text-lg font-semibold flex items-center gap-2">
                    <Shield className="text-blue-500" />
                    {category.membershipCategoriesTitle}
                  </p>
                  {category?.membershipCategoriestDetails !== undefined &&
                  category?.membershipCategoriestDetails !== null ? (
                    <div className="prose  max-w-5xl prose-p:text-slate-300 prose-h1:text-slate-200 prose-h2:text-slate-200 prose-h3:text-slate-200 prose-h4:text-slate-200 prose-h5:text-slate-200 prose-h6:text-slate-200 prose-text-slate-300 prose-strong:text-slate-300 prose-ul:text-slate-300">
                      <PortableText
                        value={category?.membershipCategoriestDetails}
                        components={components}
                      />
                    </div>
                  ) : null}
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
