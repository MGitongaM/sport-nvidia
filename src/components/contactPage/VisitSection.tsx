export default function VisitSection() {
  return (
    <section className="bg-black py-20">
      <div className="text-slate-300 px-8">
        <div className="container mx-auto flex flex-wrap md:flex-nowrap gap-8 justify-between">
          <div className="w-full md:w-[36vw] space-y-12">
            <h3 className="text-3xl font-bold">Visit Us </h3>
            <p className="">
              Our doors are always open to members, guests, and sports
              enthusiasts. Feel free to visit us at our club to explore our
              facilities, watch a game, or engage in an exciting sports
              activity.
            </p>
            <div className="c">
              <p className="font-bold pb-4">Openning Hours</p>
              <li>Monday - Friday: 0900hrs-2000hrs</li>
              <li>Saturday - Sunday: 0900hrs-22000hrs</li>
            </div>
          </div>
          <div className=" h-[50vh] w-[90vw] md:w-[50vw] bg-zinc-800 rounded-lg"></div>
        </div>
      </div>
    </section>
  );
}
