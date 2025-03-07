import { Button } from "../ui/button";

export default function CommunityMembershipSection() {
  return (
    <section className="bg-black pb-40">
      <div className="container mx-auto px-8 py-20 bg-zinc-800 rounded-lg text-slate-300">
        <div className="flex flex-wrap md:flex-nowrap justify-evenly items-center gap-8">
          <div className="w-full md:w-[42vw] lg:w-[36vw] h-full md:h-[78vh] lg:h-[64vh] xl:h-[48vh] bg-zinc-900 rounded-lg px-6 py-12">
            <div className="c"></div>
            <p className="text-2xl font-semibold py-12">
              A Community Beyond Sports{" "}
            </p>
            <p className="text-lg">
              Beyond the field, NAC is a place where friendships are forged,
              families come together, and business professionals connect. Our
              club hosts a variety of social events, tournaments, and charity
              initiatives that reinforce our commitment to the broader
              community. Whether it&aposs a thrilling rugby match, a relaxing
              evening at the clubhouse, or a youth development program, NAC is
              more than just a sports club—it&aposs a way of life.
            </p>
          </div>
          <div className="w-full md:w-[42vw] lg:w-[36vw] h-full md:h-[78vh] lg:h-[64vh] xl:h-[48vh] bg-zinc-900 rounded-lg px-6 py-12">
            <div className="c"></div>
            <p className="text-2xl font-semibold py-12">Join Us </p>
            <p className="text-lg">
              Be part of a legacy that celebrates excellence and community.
              Whether you are an aspiring athlete, a seasoned sports enthusiast,
              or someone looking for a place to connect, the Nakuru Athletic
              Club welcomes you.
            </p>
          </div>
        </div>
        <div className="grid place-content-center py-10">

        <Button className="bg-white w-64 mx-auto hover:bg-blue-200 text-black font-semibold">Get In Touch</Button>
        </div>
      </div>
    </section>
  );
}
