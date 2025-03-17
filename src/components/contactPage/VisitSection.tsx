// import { sanityFetch } from "@/sanity/lib/live";
// import { CONTACTVISTCONTENT_QUERY } from "@/sanity/lib/queries";
// import { components } from "@/sanity/portableTextComponents";
// import { PortableText } from "next-sanity";
import * as motion from "motion/react-client";

export default async function VisitSection() {
  // const { data: visit } = await sanityFetch({
  //   query: CONTACTVISTCONTENT_QUERY,
  // });
  return (
    <section id="map" className="bg-black pb-20 pt-32">
      <div className="text-slate-300 px-8">
        <div className="container mx-auto flex flex-wrap md:flex-nowrap gap-8 justify-between">
          {/* <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1, }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full md:w-[36vw] space-y-12"
          >
            <h3 className="text-3xl lg:text-5xl font-bold">
              {visit?.[0].vistSectionTitle}{" "}
            </h3>
            <div className="">
              {visit?.[0].vistSectionText ? (
                <div className="prose prose-lg prose-p:text-slate-300 prose-h1:text-slate-200 prose-h2:text-slate-200 prose-h3:text-slate-200 prose-h4:text-slate-200 prose-h5:text-slate-200 prose-h6:text-slate-200 prose-text-slate-300 prose-strong:text-slate-300 prose-ul:text-slate-300">
                  <PortableText
                    value={visit[0].vistSectionText}
                    components={components}
                  />
                </div>
              ) : null}
            </div>
          </motion.div> */}
          <motion.div
            initial={{ y: 200, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay:0 }}
            className=" min-h-[50vh] w-[90vw] md:w-[100vw] bg-zinc-800 rounded-lg"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.766825347891!2d36.06298137577521!3d-0.29110123534979704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x18298dc186ede701%3A0x42d8dd651d754c1a!2sNakuru%20Athletics%20Club!5e0!3m2!1sen!2ske!4v1741426029782!5m2!1sen!2ske"
              width="100%"
              height="100%"
              allowFullScreen
              loading="lazy"
              className="rounded-lg min-h-[50vh]"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
