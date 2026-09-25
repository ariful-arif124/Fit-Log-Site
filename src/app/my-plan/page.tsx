"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import PlanCard from "@/components/PlanCard";
import SortDropdown from "@/components/SortDropdown";
import { useFitLog } from "@/context/FitLogContext";

type Tab = "plan" | "saved";

export default function MyPlanPage() {
  const { plan, saved } = useFitLog();

  const [activeTab, setActiveTab] = useState<Tab>("plan");
  const [sortBy, setSortBy] = useState("duration");

  const totalMinutes = plan.reduce(
    (total, workout) => total + workout.duration,
    0
  );

  const totalCalories = plan.reduce(
    (total, workout) => total + workout.caloriesBurned,
    0
  );

  const currentItems = activeTab === "plan" ? plan : saved;

  const sortedItems = useMemo(() => {
    return [...currentItems].sort((a, b) => {
      if (sortBy === "calories") {
        return b.caloriesBurned - a.caloriesBurned;
      }

      if (sortBy === "rating") {
        return b.rating - a.rating;
      }

      return a.duration - b.duration;
    });
  }, [currentItems, sortBy]);

  return (
    <main className="min-h-[calc(100vh-73px)] bg-[#0b0c0f]">
      <div className="mx-auto max-w-7xl px-4 py-10 md:px-6 md:py-12">

        <div>
          <h1 className="text-3xl font-black uppercase tracking-tight text-white md:text-4xl">
            My Plan
          </h1>

          <p className="mt-2 text-xs text-zinc-500">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>

        <div className="mt-7 grid grid-cols-3 rounded-xl border border-zinc-800 bg-[#15171c]">
          <div className="border-r border-zinc-800 p-4 sm:p-5">
            <p className="text-[10px] text-zinc-500">
              Exercises
            </p>

            <p className="mt-1 text-2xl font-black text-[#ccff00] sm:text-3xl">
              {plan.length}
            </p>
          </div>

          <div className="border-r border-zinc-800 p-4 sm:p-5">
            <p className="text-[10px] text-zinc-500">
              Minutes
            </p>

            <p className="mt-1 text-2xl font-black text-white sm:text-3xl">
              {totalMinutes}
            </p>
          </div>

          <div className="p-4 sm:p-5">
            <p className="text-[10px] text-zinc-500">
              Calories
            </p>

            <p className="mt-1 text-2xl font-black text-white sm:text-3xl">
              {totalCalories}
            </p>
          </div>
        </div>

        <div className="mt-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">

          <div className="flex w-fit rounded-lg border border-zinc-800 bg-[#15171c] p-1">
            <button
              onClick={() => setActiveTab("plan")}
              className={`rounded-md px-4 py-2 text-[10px] font-bold transition ${
                activeTab === "plan"
                  ? "bg-[#252830] text-white"
                  : "text-zinc-500 hover:text-white"
              }`}
            >
              Today's Plan
            </button>

            <button
              onClick={() => setActiveTab("saved")}
              className={`rounded-md px-4 py-2 text-[10px] font-bold transition ${
                activeTab === "saved"
                  ? "bg-[#252830] text-white"
                  : "text-zinc-500 hover:text-white"
              }`}
            >
              Saved
            </button>
          </div>

          <SortDropdown
            value={sortBy}
            onChange={setSortBy}
          />
        </div>

        <div className="mt-5 space-y-3">
          {sortedItems.length > 0 ? (
            sortedItems.map((workout) => (
              <PlanCard
                key={workout.id}
                workout={workout}
                type={activeTab}
              />
            ))
          ) : (
            <div className="flex min-h-[300px] flex-col items-center justify-center rounded-xl border border-dashed border-zinc-800 bg-[#0f1115] px-6 text-center">

              <h2 className="text-sm font-black uppercase text-white">
                Nothing Here Yet
              </h2>

              <p className="mt-2 max-w-sm text-[11px] text-zinc-500">
                Browse the library and add a lift to get moving.
              </p>

              <Link
                href="/#library"
                className="mt-5 rounded-full bg-[#ccff00] px-6 py-2.5 text-[10px] font-black uppercase text-black transition hover:bg-white"
              >
                Go to Workouts
              </Link>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}