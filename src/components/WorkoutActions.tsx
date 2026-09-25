"use client";

import { useFitLog } from "@/context/FitLogContext";
import { Workout } from "@/types/workout";
import { toast } from "react-toastify";

interface WorkoutActionsProps {
  workout: Workout;
}

export default function WorkoutActions({
  workout,
}: WorkoutActionsProps) {
  const {
    addToPlan,
    saveWorkout,
    isInPlan,
    isSaved,
  } = useFitLog();

  const handleAddToPlan = () => {
    if (isInPlan(workout.id)) {
      toast.info("Already in today's plan");
      return;
    }

    const added = addToPlan(workout);

    if (added) {
      toast.success("Added to today's plan");
    } else {
      toast.error("Today's plan is full");
    }
  };

  const handleSave = () => {
    if (isSaved(workout.id)) {
      toast.info("Already saved");
      return;
    }

    const saved = saveWorkout(workout);

    if (saved) {
      toast.success("Saved for later");
    }
  };

  return (
    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
      
      <button
        onClick={handleAddToPlan}
        className="rounded-md bg-[#ccff00] px-6 py-3 text-sm font-black uppercase text-black transition hover:bg-white"
      >
        Add to Today's Plan
      </button>

      <button
        onClick={handleSave}
        className="rounded-md border border-zinc-700 px-6 py-3 text-sm font-black uppercase text-white transition hover:border-[#ccff00] hover:text-[#ccff00]"
      >
        Save for Later
      </button>

    </div>
  );
}