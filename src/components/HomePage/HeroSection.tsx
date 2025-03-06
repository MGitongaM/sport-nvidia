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
      <section className=" ">
        <div className="flex flex-wrap md:flex-nowrap  min-h-[80vh] lg:h-[80vh]">
          <div className="w-full md:w-[36rem] flex flex-col justify-center gap-8 h-auto bg-black pl-10 lg:pl-20 pr-4 py-8 text-slate-300">
            <h1 className="text-3xl md:text-5xl font-bold">
              {banner?.[0].bannerTitle}
            </h1>
            <p className="text-xl font-semibold">
              {banner?.[0].bannerText}
            </p>
            <Button className="bg-white w-44 hover:bg-blue-200 text-black font-semibold">
              Join Us Today
            </Button>
          </div>
          <div className=" grow bg-black">
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
                className="object-cover object-top h-full  w-full "
              />
            ) : null}
          </div>
        </div>
      </section>
    </>
  );
}
