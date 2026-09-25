"use client";

import Image from "next/image";
import Link from "next/link";
import { Workout } from "@/types/workout";
import { useFitLog } from "@/context/FitLogContext";
import { toast } from "react-toastify";

interface PlanCardProps {
    workout: Workout;
    type: "plan" | "saved";
}

export default function PlanCard({ workout, type }: PlanCardProps) {
    const {
        removeFromPlan,
        removeFromSaved,
        markAsDone,
    } = useFitLog();

    const handleRemove = () => {
        if (type === "plan") {
            removeFromPlan(workout.id);
            toast.success("Removed from today's plan");
        } else {
            removeFromSaved(workout.id);
            toast.success("Removed from saved");
        }
    };

    const handleDone = () => {
        markAsDone(workout.id);
        toast.success("Workout marked as done");
    };

    const handleViewDetails = () => {
        toast.info("Opening workout details");
    };

    return (
        <div className="group flex items-center gap-4 rounded-xl border border-zinc-800 bg-[#15171c] p-3 transition hover:border-zinc-700 sm:p-4">

            <div className="relative h-16 w-24 shrink-0 overflow-hidden rounded-lg sm:h-20 sm:w-32">
                <Image
                    src={workout.image}
                    alt={workout.name}
                    fill
                    className="object-cover"
                />
            </div>

            <div className="min-w-0 flex-1">
                <h3 className="truncate text-sm font-black uppercase text-white sm:text-base">
                    {workout.name}
                </h3>

                <p className="mt-1 truncate text-xs text-zinc-500">
                    {workout.equipment}
                </p>

                <div className="mt-2 flex flex-wrap items-center gap-3 text-[10px] text-zinc-400 sm:text-xs">
                    <span>◷ {workout.duration} min</span>
                    <span>🔥 {workout.caloriesBurned} kcal</span>
                    <span>★ {workout.rating}</span>
                </div>
            </div>

            <div className="flex shrink-0 items-center gap-2">

                <Link
                    href={`/workouts/${workout.id}`}
                    onClick={handleViewDetails}
                    className="hidden rounded-full border border-zinc-700 px-4 py-2 text-[10px] font-bold uppercase text-zinc-300 transition hover:border-[#ccff00] hover:text-[#ccff00] sm:block"
                >
                    View Details
                </Link>

                {type === "plan" && (
                    <button
                        onClick={handleDone}
                        className="rounded-full bg-[#ccff00] px-4 py-2 text-[10px] font-black uppercase text-black transition hover:bg-white"
                    >
                        ✓ Mark as Done
                    </button>
                )}

                <button
                    onClick={handleRemove}
                    aria-label={`Remove ${workout.name}`}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-700 text-sm font-bold text-zinc-500 transition-all duration-200 hover:border-red-500 hover:bg-red-500/15 hover:text-red-400 hover:shadow-[0_0_12px_rgba(239,68,68,0.25)]"
                >
                    ×
                </button>

            </div>
        </div>
    );
}