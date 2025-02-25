import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { QuoteIcon } from "lucide-react";

export default function page() {
  return (
    <>
      <section className="container mx-auto px-4">
        <div className="relative "></div>
        <div className="max-w-lg space-y-6 bg-white/40 backdrop-blur-lg px-4 py-10 rounded-lg">
          <p>welcome to</p>
          <h1 className="text-3xl md:text-5xl font-bold text-green-900">
            Title Heading For Hero
          </h1>
          <p className="text-lg">
            Join a community of passionate golfers dedicated to mastering the
            art of golf
          </p>
        </div>

        <div className="c">
          <div className="grid place-content-center max-w-2xl mx-auto text-center space-y-8">
            <p>Golf Club</p>
            <h2 className="text-3xl">
              THE GOLF CLUB WAS ESTABLISHED IN PARIS, FRANCE, IN 1980
            </h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Blanditiis, a nam? Consequuntur soluta amet blanditiis nobis
              ullam, alias dolorem repudiandae quas. In blanditiis suscipit
              ipsam facere nam assumenda, nisi veritatis, repellat molestias,
              quam enim praesentium id cum. Nemo maxime, laborum veritatis, at
              rerum, magni dignissimos quae ratione sunt architecto quis?
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
                <span className="text-2xl">20+</span> Golf Holes
              </p>
            </div>
            <div>
              <p>
                <span className="text-2xl">200sqm2</span> Golf Space
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
