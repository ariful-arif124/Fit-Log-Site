import Hero from "@/components/Hero";
import WorkoutGrid from "@/components/WorkoutGrid";
import { getWorkouts } from "@/lib/api";

export default async function Home() {
  const workouts = await getWorkouts();

  return (
    <main>
      <Hero />

      <section
        id="library"
        className="mx-auto max-w-7xl px-4 py-16 md:px-6"
      >
        <div className="mb-8">

          <h2 className="mt-2 text-4xl font-black uppercase text-white md:text-5xl">
            The Library
          </h2>

          <p className="mt-3 text-sm text-zinc-400">
            Twelve lifts covering every major muscle group.
          </p>
        </div>

        <WorkoutGrid workouts={workouts} />
      </section>
    </main>
  );
}