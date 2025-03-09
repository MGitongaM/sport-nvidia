import { sanityFetch } from "@/sanity/lib/live";
import { MEMBERSHIPBENEFITCONTENT_QUERY } from "@/sanity/lib/queries";
import { components } from "@/sanity/portableTextComponents";
import { PortableText } from "next-sanity";

export default async function BenefitsSection() {
  const { data: benefit } = await sanityFetch({
    query: MEMBERSHIPBENEFITCONTENT_QUERY,
  });
  return (
    <section className="bg-black pb-20">
      <div className="container mx-auto px-8 text-slate-300">
        <h3 className="text-3xl font-bold text-center">
          {benefit?.[0].benefitSectionTitle}
        </h3>
        <div className="py-20 flex flex-wrap  justify-center items-center gap-8">
          {benefit?.[0].benefitContent?.map((benefitItem, index) => (
            <div
              key={index}
              className="rounded-lg px-6 py-9 bg-zinc-800 space-y-6 w-full md:w-[30rem] lg:w-[24rem] min-h-[18rem] flex flex-col items-start"
            >
              <p className="text-xl font-bold text-center w-full">
                {benefitItem.benefitHeading}
              </p>
              <div className="w-full  border border-slate-300"></div>
              {benefitItem?.benefitText !== undefined ? (
                <div className="prose prose-p:text-slate-300 prose-h1:text-slate-200 prose-h2:text-slate-200 prose-h3:text-slate-200 prose-h4:text-slate-200 prose-h5:text-slate-200 prose-h6:text-slate-200 prose-text-slate-300 prose-strong:text-slate-300 prose-ul:text-slate-300">
                  <PortableText
                    value={benefitItem?.benefitText}
                    components={components}
                  />
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
