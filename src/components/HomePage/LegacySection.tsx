import { urlFor } from "@/sanity/lib/image";
import { sanityFetch } from "@/sanity/lib/live";
import { BANNER_QUERY } from "@/sanity/lib/queries";
import Image from "next/image";

export default async function LegacySection() {
  const { data: banner } = await sanityFetch({
    query: BANNER_QUERY,
  });
  
  return (
    <section className="min-h-[80vh] space-y-8 px-8 py-20 text-slate-300  bg-black">
      <div className="container mx-auto bg-zinc-900 rounded-lg px-8 py-12">
        <h2 className="text-5xl font-bold text-center">Our Rugby Legacy </h2>
        <div className=" flex flex-wrap md:flex-nowrap items-center justify-between h-full ">
          <div className="w-[50vw] grow">
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
                className="object-cover h-full w-full"
              />
            ) : null}
          </div>
          <div className="w-full md:w-[50vw] space-y-8">
            <p className="text-3xl font-semibold">A Tradition of Excellence </p>
            <p className="text-lg">
              Rugby at Nakuru Athletic Club is more than a game - it&apos;s a
              way of life. Our team has consistently demonstrated grit,
              determination, and a never-say-die attitude that has seen us
              dominate local and international competitions. From the Kenya Cup
              to thrilling sevens tournaments, we continue to raise the bar.
            </p>
          </div>
        </div>
        <div className=" flex md:flex-row-reverse flex-wrap md:flex-nowrap items-center justify-between h-full ">
          <div className="w-[50vw] grow">
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
                className="object-cover h-full w-full"
              />
            ) : null}
          </div>
          <div className="w-full md:w-[50vw] space-y-8">
            <p className="text-3xl font-semibold">
              Developing the Future of Rugby
            </p>
            <p className="text-lg">
              Our youth and development programs ensure the next generation of
              rugby stars rise from Nakuru. Through structured training,
              mentorship, and exposure to competitive play, we shape athletes
              into elite professionals who represent both club and country.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
