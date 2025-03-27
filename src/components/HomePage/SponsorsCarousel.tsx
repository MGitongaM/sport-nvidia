"use client";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import * as motion from "motion/react-client";
import Autoscroll from "embla-carousel-auto-scroll";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { HOMESPONSORCONTENT_QUERYResult } from "@/sanity/types";

export default function SponsorsCarousel({
  sponsor,
}: {
  sponsor: HOMESPONSORCONTENT_QUERYResult;
}) {
  return (
    <>
      <motion.div
        className="max-w-3xl mx-auto overflow-hidden px-8"
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
      >
        <Carousel
          opts={{ loop: true, align: "start", containScroll: "trimSnaps" }}
          plugins={[
            Autoscroll({
              direction: "forward",
              stopOnInteraction: false,
              playOnInit: true,
              speed: 1,
              startDelay: 0,
            }),
          ]}
        >
          {/* <CarouselContent className="flex justify-center items-center gap-4"> */}
          <CarouselContent className="-ml-4">
            {sponsor?.[0]?.sponsorSectionImages?.map((sponsorImg, index) =>
              sponsorImg?.sponsorImage ? (
                <CarouselItem
                  className="pl-4 md:basis-1/2 lg:basis-1/3"
                  key={index}
                >
                  <Image
                    src={urlFor(sponsorImg.sponsorImage)
                      .width(1200)
                      .height(800)
                      .quality(80)
                      .auto("format")
                      .url()}
                    height={800}
                    width={1200}
                    alt={"Nakuru Rugby Team Sponsor Image"}
                    className="object-contain  rounded-xl mx-4"
                  />
                  <p className="font-semibold text-center pt-4">
                    {sponsorImg.sponsorTitle}
                  </p>
                </CarouselItem>
              ) : null
            )}
          </CarouselContent>
          <CarouselPrevious className=" hidden" />
          <CarouselNext className="hidden" />
        </Carousel>
      </motion.div>
    </>
  );
}
