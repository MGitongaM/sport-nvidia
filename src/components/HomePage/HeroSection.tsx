import { sanityFetch } from "@/sanity/lib/live";
import { Button } from "../ui/button";
import { BANNER_QUERY } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";

export default async function HeroSection() {
  const { data: banner } = await sanityFetch({
    query: BANNER_QUERY,
  });
  return (
    <>
      <section className="min-h-[80vh] ">
        <div className="relative flex flex-col min-h-[80vh]  items-start justify-center px-4 ">
          <div className="container mx-auto -mt-28">
            <div className="max-w-lg space-y-6 bg-white/0 backdrop-blur-lg px-4 py-10 rounded-lg">
              <h1 className="text-3xl md:text-5xl font-bold text-blue-300">
                {banner?.[0].bannerTitle}
              </h1>
              <p className="text-xl font-semibold text-slate-300">
                {/* Nakuru Athletic Club (N.A.C.) is a members-only sports , social
                club conveniently with recreational facilities. */}
                Nakuru Athletic Club (N.A.C.) is  where sports enthusiasts
                and families come together to enjoy a wide range of activities.
              </p>
              <Button className="bg-white hover:bg-blue-200 text-black">
                Join Us Today
              </Button>
            </div>
          </div>
        </div>
        {banner?.[0].bannerImage ? (
          <Image
            src={urlFor(banner?.[0].bannerImage)
              .width(1200)
              .height(900)
              .quality(80)
              .auto("format")
              .url()}
            height={900}
            width={800}
            alt={banner?.[0].bannerText || ""}
            className="object-cover h-full w-full absolute top-16 -z-10"
          />
        ) : null}
      </section>
    </>
  );
}
