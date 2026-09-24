import Image from "next/image";
import Link from "next/link";
import { Workout } from "@/types/workout";

interface WorkoutCardProps {
    workout: Workout;
}

const WorkoutCard = ({ workout }: WorkoutCardProps) => {
    return (
        <Link
            href={`/workouts/${workout.id}`}
            className="group block overflow-hidden rounded-lg border border-zinc-800 bg-[#15171c] transition hover:border-[#ccff00]"
        >
            <div className="relative aspect-[4/3] overflow-hidden bg-zinc-900">
                <Image
                    src={workout.image}
                    alt={workout.name}
                    fill
                    className="object-cover transition duration-300 group-hover:scale-105"
                />
            </div>

            <div className="p-4">
                <div className="flex flex-wrap gap-2">
                    {workout.muscleGroups.map((muscle) => (
                        <span
                            key={muscle}
                            className="rounded-full bg-[#ccff00] px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-black">                            {muscle}
                        </span>
                    ))}
            </div>

            <h3 className="mt-3 text-lg font-black uppercase text-white">
                {workout.name}
            </h3>

            <p className="mt-1 text-sm text-zinc-500">
                {workout.equipment}
            </p>

            <div className="mt-4 flex items-center gap-4 border-t border-zinc-800 pt-3 text-xs text-zinc-400">
                <span>◷ {workout.duration} min</span>
                <span>🔥 {workout.caloriesBurned} kcal</span>
                <span>★ {workout.rating}</span>
            </div>
        </div>
        </Link >
    );
};

export default WorkoutCard;