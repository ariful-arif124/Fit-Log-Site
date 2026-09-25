import Image from "next/image";
import { notFound } from "next/navigation";
import { getWorkoutById } from "@/lib/api";
import WorkoutActions from "@/components/WorkoutActions";

interface WorkoutDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function WorkoutDetailsPage({
  params,
}: WorkoutDetailsPageProps) {
  const { id } = await params;

  const workout = await getWorkoutById(id);

  if (!workout) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-7xl px-4 py-10 md:px-6 md:py-16">
      <div className="grid overflow-hidden rounded-2xl border border-zinc-800 bg-[#0f1115] md:grid-cols-2">
        <div className="relative min-h-[400px] md:min-h-[650px]">
          <Image
            src={workout.image}
            alt={workout.name}
            fill
            priority
            className="object-cover"
          />
        </div>

        <div className="flex flex-col justify-center p-6 md:p-10 lg:p-14">
          {workout.muscleGroups.map((muscle) => (
            <span
              key={muscle}
              className="rounded-full bg-[#ccff00] px-3 py-1 text-xs font-bold uppercase tracking-wide text-black"
            >
              {muscle}
            </span>
          ))}

          <h1 className="mt-5 text-4xl font-black uppercase leading-[0.95] text-white md:text-5xl lg:text-6xl">
            {workout.name}
          </h1>

          <p className="mt-6 text-sm leading-7 text-zinc-400 md:text-base">
            {workout.description}
          </p>

          <div className="mt-8 grid grid-cols-2 gap-3">
            <div className="rounded-lg border border-zinc-800 bg-[#15171c] p-4">
              <p className="text-xs uppercase tracking-wide text-zinc-500">
                Duration
              </p>
              <p className="mt-1 font-bold text-white">
                {workout.duration} min
              </p>
            </div>

            <div className="rounded-lg border border-zinc-800 bg-[#15171c] p-4">
              <p className="text-xs uppercase tracking-wide text-zinc-500">
                Calories
              </p>
              <p className="mt-1 font-bold text-white">
                {workout.caloriesBurned} kcal
              </p>
            </div>

            <div className="rounded-lg border border-zinc-800 bg-[#15171c] p-4">
              <p className="text-xs uppercase tracking-wide text-zinc-500">
                Sets
              </p>
              <p className="mt-1 font-bold text-white">{workout.sets}</p>
            </div>

            <div className="rounded-lg border border-zinc-800 bg-[#15171c] p-4">
              <p className="text-xs uppercase tracking-wide text-zinc-500">
                Rating
              </p>
              <p className="mt-1 font-bold text-white">
                ★ {workout.rating}
              </p>
            </div>
          </div>

          <div className="mt-6">
            <p className="text-xs font-bold uppercase tracking-wider text-zinc-500">
              Equipment
            </p>
            <p className="mt-1 text-sm text-white">
              {workout.equipment}
            </p>
          </div>

          <div className="mt-4">
            <p className="text-xs font-bold uppercase tracking-wider text-zinc-500">
              Reps
            </p>
            <p className="mt-1 text-sm text-white">{workout.reps}</p>
          </div>

          <div className="mt-8">
            <h2 className="text-xl font-black uppercase text-white">
              Instructions
            </h2>

            <ol className="mt-4 space-y-3">
              {workout.instructions.map((instruction, index) => (
                <li
                  key={index}
                  className="flex gap-3 text-sm leading-6 text-zinc-400"
                >
                  <span className="font-bold text-[#ccff00]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span>{instruction}</span>
                </li>
              ))}
            </ol>
          </div>

          <WorkoutActions workout={workout} />
        </div>
      </div>
    </main>
  );
}
