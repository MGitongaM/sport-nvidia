export default function SportsSection() {
  return (
    <section className="bg-black text-slate-300 px-8 py-20">
      <div className="text-center space-y-4 ">
        <h3 className="text-3xl md:text-3xl font-bold text-center">
          Our Sports
        </h3>
        <p className="text-xl">
          Nakuru Athletic Club is renowned for hosting a wide range of sports
          activities, including:
        </p>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-8 py-10">
        {[1, 2, 3, 4, 5].map((_, index) => (
          <div
            key={index}
            className="grid place-content-center min-h-[40vh] w-[80vw] md:w-[40vw] lg:w-[30vw] bg-zinc-900 rounded-lg px-4 py-8 space-y-4"
          >
            <div className=" bg-zinc-700 rounded-lg size-32 mx-auto"></div>
            <p className="text-xl font-semibold text-center">Rugby</p>
            <p className="text-lg">
              The club is home to Nakuru RFC, a prominent rugby union team in
              Kenya. It has hosted numerous high-profile rugby matches and
              events, such as the Great Rift 10-a-side rugby festival.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
