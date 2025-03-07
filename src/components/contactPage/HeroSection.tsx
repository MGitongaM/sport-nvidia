export default function HeroSection() {
  return (
    <section className="bg-black py-20">
      <div className="text-slate-300 px-8">
        <div className="container mx-auto flex flex-wrap md:flex-nowrap gap-8 justify-between">
          <div className="w-full md:w-[36vw] space-y-12">
            <h3 className="text-3xl font-bold">Get in Touch with Us </h3>
            <p className="">
              We&apos;d love to hear from you! Whether you have inquiries about
              membership, facilities, upcoming events, or general questions, the
              Nakuru Athletic Club team is here to assist you.
            </p>
          </div>
          <div className=" h-[50vh] w-[90vw] md:w-[50vw] bg-zinc-800 rounded-lg"></div>
        </div>
      </div>
    </section>
  );
}
