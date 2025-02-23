import { sanityFetch } from "@/sanity/lib/live";
import { Button } from "../ui/button";
import { BANNER_QUERY } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";

export default async function HeroSection(
//   {
//   params,
// }: {
//   params: Promise<{ slug: string }>;
// }
) {
  const { data: banner } = await sanityFetch({
    query: BANNER_QUERY,
    // params: await params,
  });
  return (
    <>
      <section className="min-h-[90vh] ">
        <div className="relative flex flex-col min-h-[90vh]  items-start justify-center px-4 ">
          <div className="container mx-auto -mt-36">
            <div className="max-w-lg space-y-6 bg-white/40 backdrop-blur-lg px-4 py-10 rounded-lg">
              <h1 className="text-3xl md:text-5xl font-bold text-green-900">{banner?.[0].bannerTitle}</h1>
              <p className="text-lg">
                Join a community of passionate golfers dedicated to mastering the
                art of golf
              </p>
              <Button className="bg-white hover:bg-green-200 text-black">Join Us Today</Button>

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
            className="object-cover h-[80vh] w-full absolute top-0 -z-10"
          />
        ) : null}
      </section>
    </>
  );
}
