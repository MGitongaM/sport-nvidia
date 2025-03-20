import { sanityFetch } from "@/sanity/lib/live";
import { CONTACTCONTENT_QUERY } from "@/sanity/lib/queries";
import ContactForm from "./ContactForm";
import * as motion from "motion/react-client";

export default async function ContactSection() {
  const { data: contact } = await sanityFetch({
    query: CONTACTCONTENT_QUERY,
  });

  return (
    // <section className="bg-black pt-32 pb-20">
    <section className="bg-gradient-to-b from-65% from-black to-blue-500 pt-32 pb-20">
      <div className="text-slate-300 px-8">
        <div className="container mx-auto flex flex-wrap md:flex-nowrap gap-8 justify-between">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-[36vw] space-y-12"
          >
            <h3 className="text-3xl lg:text-5xl font-bold">
              {contact?.[0].contactSectionTitle}{" "}
            </h3>
            <p className="text-lg leading-8">
              {contact?.[0].contactSectionText}
            </p>
          </motion.div>
          <motion.div
            initial={{ y: 200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className=" min-h-[50vh] w-[90vw] md:w-[50vw] bg-zinc-800 rounded-lg"
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
