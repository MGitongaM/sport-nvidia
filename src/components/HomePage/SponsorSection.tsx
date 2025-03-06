import { urlFor } from "@/sanity/lib/image";
import { sanityFetch } from "@/sanity/lib/live";
import { BANNER_QUERY } from "@/sanity/lib/queries";
import Image from "next/image";

export default async function SponsorSection() {
  const { data: banner } = await sanityFetch({
    query: BANNER_QUERY,
  });
  return (
    <section className="min-h-[80vh] space-y-8 px-8 py-20 text-slate-300  bg-black">
      <h2 className="text-5xl font-bold text-center">
        Our Sponsors & Partners{" "}
      </h2>
      <div className="w-full lg:w-[50vw] text-center mx-auto px-8 md:px-40 lg:px-8">
        <p className="text-lg">
          Our journey is powered by dedicated sponsors and partners who share
          our vision for rugby excellence. Through their support, we continue to
          build stronger teams, invest in better facilities, and expand the
          reach of our programs.
        </p>
      </div>
      <div className="max-w-7xl mx-auto flex flex-wrap md:flex-nowrap items-center justify-between h-full ">
        <div className="w-full grow">
          {banner?.[1].bannerImage ? (
            <Image
              src={urlFor(banner?.[1].bannerImage)
                .width(800)
                .height(800)
                .quality(80)
                .auto("format")
                .url()}
              height={800}
              width={800}
              alt={banner?.[1].bannerTitle || ""}
              className="object-cover size-64"
            />
          ) : null}
        </div>
      </div>
    </section>
  );
}
