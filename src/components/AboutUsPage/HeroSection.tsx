import aboutImg from "../../../public/images/logo.png";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="bg-black">
      <div className="min-h-[60vh] container mx-auto px-8  text-slate-300">
        <h1 className="text-3xl md:text-5xl font-bold text-center">
          About Nakuru Athletic Club{" "}
        </h1>
        <div className="flex flex-col items-center justify-between gap-8">
          <div className="w-[30vw]">
            <Image
              src={aboutImg}
              height={400}
              width={400}
              alt="Nakuru atheltic Club Logo"
              className="object-contain h-64 w-full"
            />
          </div>
          <div className="w-[85vw] md:w-[60vw] space-y-20">
            <p className="text-xl">
              Nestled in the heart of Nakuru, the Nakuru Athletic Club (N.A.C)
              stands as a symbol of tradition, sportsmanship, and community
              spirit. Established in 1926, our club has been a cornerstone for
              sports excellence, fostering talent, and creating a vibrant hub
              for sports enthusiasts. With a rich history that spans decades,
              NAC has grown into a premier destination for athletes, members,
              and fans alike, dedicated to promoting the values of discipline,
              teamwork, and resilience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
