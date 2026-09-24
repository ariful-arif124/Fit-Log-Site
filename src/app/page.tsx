import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main>
      <Hero />

      <section
        id="library"
        className="mx-auto max-w-7xl px-4 py-16 md:px-6"
      >

        <h2 className="mt-2 text-4xl font-black uppercase text-white md:text-5xl">
          The Library
        </h2>

        <p className="mt-3 text-zinc-400">
          Twelve lifts covering every major muscle group.
        </p>
      </section>
    </main>
  );
}