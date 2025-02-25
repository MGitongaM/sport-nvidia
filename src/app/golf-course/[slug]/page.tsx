import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { sanityFetch } from "@/sanity/lib/live";
import { SINGLE_GOLFCOURSE_QUERY } from "@/sanity/lib/queries";
import { QuoteIcon } from "lucide-react";

export default async function page({params}:{params:Promise<{slug:string}>}) {
  const{data}=await sanityFetch({
    query:SINGLE_GOLFCOURSE_QUERY,
    params:params
  })
  return (
    <>
      <section className="container mx-auto px-4">
        <div className="relative flex flex-col min-h-[90vh]  items-start justify-center px-4">
          <div className="max-w-lg space-y-6 bg-white/40 backdrop-blur-lg px-4 py-10 rounded-lg">
            <p>welcome to</p>
            <h1 className="text-3xl md:text-5xl font-bold text-green-900">
              {data?.golfCourseTitle}
            </h1>
            <p className="text-lg">
              {data?.golfCourseExcerpt}
            </p>
          </div>
        </div>
        {
          data?.golfCourseFeatureImage?(<Image
                      src={urlFor(data.golfCourseFeatureImage)
                        .width(1200)
                        .height(900)
                        .quality(80)
                        .auto("format")
                        .url()}
                      height={900}
                      width={800}
                      alt={data.golfCourseTitle || "Hero Section Image"}
                      className="object-cover h-[80vh] w-[90vw] rounded-lg absolute top-0 -z-10"
                    />):null
        }

        <div className="c">
          <div className="grid place-content-center max-w-2xl mx-auto text-center space-y-8">
            <p>Golf Club</p>
            <h2 className="text-3xl">
              {data?.golfCourseEstablishedHeading}
            </h2>
            <p>
              {data?.golfCourseEstablishedSubText}
            </p>
          </div>
        </div>
        <div className="c">
          <div className="flex gap-4 mt-12">
            <div className="rounded-lg bg-green-400 h-72 w-full"></div>
            <div className="rounded-lg bg-green-300 h-72 w-full "></div>
          </div>
          <div className="rounded-full bg-green-500 size-48 mx-auto -mt-4 z-2000 relative grid place-content-center text-center">
            Apart of the AF Corsa Brand
          </div>
        </div>
        <div className="c">
          <div className="flex gap-12 justify-center my-20">
            <div>
              <p>
                <span className="text-2xl">{data?.golfCourseEstablishedStats2}</span> Golf Holes
              </p>
            </div>
            <div>
              <p>
                <span className="text-2xl">{data?.golfCourseEstablishedStats2}</span> Golf Space
              </p>
            </div>
          </div>
        </div>
        <div className="c">
          <div className="max-w-xl mx-auto text-center space-y-4">
            <p>Aramenties to Except</p>
            <h2 className="text-3xl">
              LET US MAKE YOUR GOLF TRIP EXPERIENCE ONE TO REMEMBER
            </h2>
          </div>
          <div className="">
            <Tabs className="w-[800px] mx-auto space-y-4">
              <TabsList
                defaultValue="1"
                className="w-full flex justify-evenly bg-green-500"
              >
                <TabsTrigger value="1">Amarment</TabsTrigger>
                <TabsTrigger value="2">Amarment</TabsTrigger>
                <TabsTrigger value="3">Amarment</TabsTrigger>
              </TabsList>
              <TabsContent value="1" className="">
                <div className=" rounded-lg min-h-40 bg-green-800"></div>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet
                eius, minima laborum non rem deserunt consequuntur vero fuga
                adipisci incidunt. Dolorum, eaque magnam. Inventore aliquam eum
                tenetur atque similique modi exercitationem ut impedit omnis
                perspiciatis nam delectus animi recusandae quis nemo debitis
                adipisci, tempore aspernatur dignissimos voluptas voluptates
                officiis? Corporis?
              </TabsContent>
              <TabsContent value="2">
                <div className=" rounded-lg min-h-40 bg-green-800"></div>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet
                eius, minima laborum non rem deserunt consequuntur vero fuga
                adipisci incidunt. Dolorum, eaque magnam. Inventore aliquam eum
                tenetur atque similique modi exercitationem ut impedit omnis
                perspiciatis nam delectus animi recusandae quis nemo debitis
                adipisci, tempore aspernatur dignissimos voluptas voluptates
                officiis? Corporis?
              </TabsContent>
              <TabsContent value="3">
                <div className=" rounded-lg min-h-40 bg-green-800"></div>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet
                eius, minima laborum non rem deserunt consequuntur vero fuga
                adipisci incidunt. Dolorum, eaque magnam. Inventore aliquam eum
                tenetur atque similique modi exercitationem ut impedit omnis
                perspiciatis nam delectus animi recusandae quis nemo debitis
                adipisci, tempore aspernatur dignissimos voluptas voluptates
                officiis? Corporis?
              </TabsContent>
            </Tabs>
          </div>
        </div>
        <div className="c">
          <div className="flex gap-8 mt-20">
            <div className="c">
              <p>Testmoniols</p>
              <h2 className="text-3xl">
                PEOPLE SHARE THEIR EXPERIENCES ABOUT GOLF COURSE
              </h2>
            </div>
            <div className="c">
              <ScrollArea className="w-full lg:w-[60vw] min-h-[70vh] overflow-y-visible py-4">
                <div className="flex w-max gap-12 justify-center">
                  {[1, 2, 3, 4].map((_, index) => (
                    <div
                      key={index}
                      className="flex flex-col  justify-between w-[22rem] rounded-t-sm rounded-b-2xl border min-h-72 border-green-300"
                    >
                      <div className="c"></div>
                      <div className="px-4 py-4 flex flex-col gap-4 justify-between h-full bg-green-50">
                        <QuoteIcon className="rotate-180" />
                        <p className="text-lg ">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Ab nemo rerum maiores officiis incidunt eos
                          provident fugit consequuntur sed quia.
                        </p>
                        <QuoteIcon className="" />
                        <div className="rounded-full size-32 bg-green-200"></div>
                        <p className="font-semibold">sub text</p>
                      </div>
                    </div>
                  ))}
                </div>
                <ScrollBar orientation="horizontal" />
              </ScrollArea>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
