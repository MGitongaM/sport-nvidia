import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { sanityFetch } from "@/sanity/lib/live";
import { SINGLE_GOLFCOURSE_QUERY } from "@/sanity/lib/queries";
import { QuoteIcon } from "lucide-react";

export default async function page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { data } = await sanityFetch({
    query: SINGLE_GOLFCOURSE_QUERY,
    params: params,
  });
  return (
    <>
      <section className="bg-zinc-800 text-slate-300">
        <div className="container mx-auto px-4 ">
          {data?.golfCourseFeatureImage ? (
            <Image
              src={urlFor(data.golfCourseFeatureImage)
                .width(1200)
                .height(900)
                .quality(80)
                .auto("format")
                .url()}
              height={900}
              width={800}
              alt={data.golfCourseTitle || "Hero Section Image"}
              className="object-cover h-screen md:h-[70vh]  w-[90vw] mx-auto rounded-lg pt-8 relative"
            />
          ) : null}
          <div className=" absolute top-64 md:left-40 w-72 md:w-[34vw] space-y-6 bg-white/40 backdrop-blur-lg px-4 py-10 rounded-lg mx-4">
            <p>welcome to</p>
            <h1 className="text-3xl md:text-5xl font-bold text-blue-800">
              {data?.golfCourseTitle}
            </h1>
            <p className="text-lg text-black">{data?.golfCourseExcerpt}</p>
          </div>

          <div className="my-20">
            <div className="grid place-content-center max-w-2xl mx-auto text-center space-y-8">
              <p>Golf Club</p>
              <h2 className="text-3xl">{data?.golfCourseEstablishedHeading}</h2>
              <p>{data?.golfCourseEstablishedSubText}</p>
            </div>
          </div>
          <div className="c">
            <div className="flex flex-wrap lg:flex-nowrap items-center justify-center gap-4 mt-12">
              {data?.golfCourseShowCaseImage1 ? (
                <Image
                  src={urlFor(data.golfCourseShowCaseImage1)
                    .width(1200)
                    .height(900)
                    .quality(80)
                    .auto("format")
                    .url()}
                  height={900}
                  width={800}
                  alt={data.golfCourseTitle || "Hero Section Image"}
                  className="object-cover h-96 w-full rounded-lg -mb-12 md:-mb-0 lg:-mr-12"
                />
              ) : (
                <div className="rounded-lg bg-green-400 h-72 w-full"></div>
              )}
              <div className="rounded-full  bg-blue-800 h-40 w-40   grid place-content-center text-center border-4 border-blue-200 z-20 p-8">
                <p className="w-40">Part of the AF Golf Brand</p>
              </div>
              {data?.golfCourseShowCaseImage2 ? (
                <Image
                  src={urlFor(data.golfCourseShowCaseImage2)
                    .width(1200)
                    .height(900)
                    .quality(80)
                    .auto("format")
                    .url()}
                  height={900}
                  width={800}
                  alt={data.golfCourseTitle || "Hero Section Image"}
                  className="object-cover h-96 w-full rounded-lg -mt-12 md:-mt-0 lg:-ml-12 z-10"
                />
              ) : (
                <div className="rounded-lg bg-green-400 h-72 w-full"></div>
              )}
            </div>
          </div>

          {/* stats sections */}
          <div className="my-48 relative">
            <div className="flex gap-12 justify-center my-20">
              <div>
                <p>
                  <span className="text-2xl">
                    {data?.golfCourseEstablishedStats1}
                  </span>{" "}
                  <span className="font-semibold text-sm">Golf Holes</span>
                </p>
              </div>
              <div>
                <p>
                  <span className="text-2xl">
                    {data?.golfCourseEstablishedStats2}
                  </span>{" "}
                  <span className="font-semibold text-sm">
                    m2 of Golf Space
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* aramenties section  */}
          <div className="my-40">
            <div className="max-w-xl mx-auto text-center space-y-8 mb-12">
              <p>Aramenties to Except</p>
              <h2 className="text-3xl capitalize">
                let us make your golf trip experience one to remember
              </h2>
            </div>
            <div className="">
              <Tabs className="w-full md:w-[800px] mx-auto space-y-4">
                <TabsList
                  defaultValue="1"
                  className="w-full flex flex-wrap md:flex-nowrap justify-evenly bg-green-500"
                >
                  <TabsTrigger value="1">Amarment</TabsTrigger>
                  <TabsTrigger value="2">Amarment</TabsTrigger>
                  <TabsTrigger value="3">Amarment</TabsTrigger>
                </TabsList>
                <TabsContent value="1" className="">
                  <div className=" rounded-lg min-h-40 bg-green-800"></div>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet
                  eius, minima laborum non rem deserunt consequuntur vero fuga
                  adipisci incidunt. Dolorum, eaque magnam. Inventore aliquam
                  eum tenetur atque similique modi exercitationem ut impedit
                  omnis perspiciatis nam delectus animi recusandae quis nemo
                  debitis adipisci, tempore aspernatur dignissimos voluptas
                  voluptates officiis? Corporis?
                </TabsContent>
                <TabsContent value="2">
                  <div className=" rounded-lg min-h-40 bg-green-800"></div>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet
                  eius, minima laborum non rem deserunt consequuntur vero fuga
                  adipisci incidunt. Dolorum, eaque magnam. Inventore aliquam
                  eum tenetur atque similique modi exercitationem ut impedit
                  omnis perspiciatis nam delectus animi recusandae quis nemo
                  debitis adipisci, tempore aspernatur dignissimos voluptas
                  voluptates officiis? Corporis?
                </TabsContent>
                <TabsContent value="3">
                  <div className=" rounded-lg min-h-40 bg-green-800"></div>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet
                  eius, minima laborum non rem deserunt consequuntur vero fuga
                  adipisci incidunt. Dolorum, eaque magnam. Inventore aliquam
                  eum tenetur atque similique modi exercitationem ut impedit
                  omnis perspiciatis nam delectus animi recusandae quis nemo
                  debitis adipisci, tempore aspernatur dignissimos voluptas
                  voluptates officiis? Corporis?
                </TabsContent>
              </Tabs>
            </div>
          </div>

          {/* testimonal section */}
          <div className="c">
            <div className="flex flex-wrap md:flex-nowrap gap-8 mt-20">
              <div className="max-w-lg">
                <p>Testmoniols</p>
                <h2 className="text-3xl uppercase">
                  PEOPLE SHARE THEIR EXPERIENCES AT{" "}
                  <span className="text-teal-700 font-semibold">
                    {data?.golfCourseTitle}
                  </span>
                </h2>
              </div>
              {/* <div className="c"> */}
              <ScrollArea className="w-full lg:w-[60vw] min-h-[70vh] overflow-y-visiblehidden py-4">
                <div className="flex w-max gap-12 justify-center">
                  {[1, 2, 3, 4].map((_, index) => (
                    <div
                      key={index}
                      // className="flex flex-col  justify-between w-[22rem] rounded-t-sm rounded-b-2xl border min-h-72 border-green-300"
                      className="flex flex-col  justify-between w-[22rem]  min-h-72 "
                    >
                      <div className="c"></div>
                      <div className="px-4 py-4 flex flex-col gap-4 justify-between h-full bg-green-50 text-black rounded-lg">
                        <QuoteIcon className="rotate-180" />
                        <p className="text-lg ">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Ab nemo rerum maiores officiis incidunt eos
                          provident fugit consequuntur sed quia.
                        </p>
                        <QuoteIcon className="" />
                        <div className="rounded-full size-32 bg-blue-200"></div>
                        <p className="font-semibold">sub text</p>
                      </div>
                    </div>
                  ))}
                </div>
                <ScrollBar orientation="horizontal" />
              </ScrollArea>
              {/* </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
