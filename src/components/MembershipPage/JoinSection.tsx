import { sanityFetch } from "@/sanity/lib/live";
import { MEMBERSHIPJOINCONTENT_QUERY } from "@/sanity/lib/queries";
import { components } from "@/sanity/portableTextComponents";
import { PortableText } from "next-sanity";
import * as motion from "motion/react-client";

export default async function JoinSection() {
  const { data: join } = await sanityFetch({
    query: MEMBERSHIPJOINCONTENT_QUERY,
  });
  return (
    <section className="bg-black py-20">
      <div className="container mx-auto text-slate-300 px-8">
        <div className="flex justify-evenly items-center gap-8">
          <motion.div
          initial={{y:100,  opacity: 0, scale: 0 }}
          whileInView={{y:0, opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="bg-zinc-900 rounded-lg px-4 py-12">
            <div className="text-center space-y-4 py-10">
              <h2 className="text-3xl font-bold">
                {join?.[0].joinSectionTitle}{" "}
              </h2>
              <p className="text-lg leading-8">{join?.[0].joinSectionText}</p>
            </div>
            {join?.[0].joinDetails !== undefined &&
            join?.[0].joinDetails !== null ? (
              <div className="prose  max-w-5xl prose-p:text-slate-300 prose-h1:text-slate-200 prose-h2:text-slate-200 prose-h3:text-slate-200 prose-h4:text-slate-200 prose-h5:text-slate-200 prose-h6:text-slate-200 prose-text-slate-300 prose-strong:text-slate-300 prose-ul:text-slate-300 prose-li:text-slate-300">
                <PortableText
                  value={join?.[0].joinDetails}
                  components={components}
                />
              </div>
            ) : null}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
