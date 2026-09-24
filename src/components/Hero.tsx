import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="bg-black px-4 py-8 md:px-6 lg:py-10">
      <div className="mx-auto flex max-w-7xl items-center overflow-hidden rounded-xl border border-zinc-800 bg-[#15171c]">
        
        <div className="w-1/2 px-6 py-10 md:px-10 lg:px-14 lg:py-16">
          <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#ccff00] md:text-xs">
            Workout Library
          </p>

          <h1 className="max-w-xl text-4xl font-black uppercase leading-[0.95] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Train With Intent. Log Every Set.
          </h1>

          <p className="mt-5 max-w-lg text-xs leading-5 text-zinc-400 sm:text-sm md:leading-6">
            FitLog is a dark, no-nonsense gym companion: pick a lift,
            lock it into today's plan, and watch the week's work add up.
          </p>

          <Link
            href="#library"
            className="mt-6 inline-flex items-center gap-2 bg-[#ccff00] px-5 py-3 text-[10px] font-black uppercase tracking-wide text-black transition hover:bg-white sm:text-xs"
          >
            Browse Workouts
            <span className="text-base">→</span>
          </Link>
        </div>

        <div className="flex w-1/2 items-center justify-center px-4 py-6 md:px-8">
          <Image
            src="/images/banner.png"
            alt="FitLog workout illustration"
            width={500}
            height={500}
            priority
            className="h-auto w-full max-w-[300px] object-contain md:max-w-[380px] lg:max-w-[430px]"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;