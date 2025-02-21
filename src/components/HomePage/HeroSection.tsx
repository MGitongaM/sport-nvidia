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
      <section className="min-h-[80vh] ">
        <div className="relative flex flex-col h-[80vh]  items-start justify-center px-4 ">
          <div className="container mx-auto ">
            <div className="max-w-md space-y-6 bg-slate-500/10 backdrop-blur-md px-4 py-4 rounded-lg">
              <h1 className="text-4xl font-bold">{banner?.[0].bannerTitle}</h1>
              <p className="c">
                Join a community of passionate golfers dedicated to mastering the
                art of golf
              </p>
              <Button className="">Join Us Today</Button>

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
