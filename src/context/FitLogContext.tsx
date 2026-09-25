"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

import { Workout } from "@/types/workout";

interface FitLogContextType {
  plan: Workout[];
  saved: Workout[];

  addToPlan: (workout: Workout) => boolean;
  saveWorkout: (workout: Workout) => boolean;

  removeFromPlan: (id: number) => void;
  removeFromSaved: (id: number) => void;

  markAsDone: (id: number) => void;

  isInPlan: (id: number) => boolean;
  isSaved: (id: number) => boolean;
}

const FitLogContext = createContext<FitLogContextType | undefined>(
  undefined
);

export function FitLogProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [plan, setPlan] = useState<Workout[]>([]);
  const [saved, setSaved] = useState<Workout[]>([]);

  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const storedPlan = localStorage.getItem("fitlog-plan");
      const storedSaved = localStorage.getItem("fitlog-saved");

      if (storedPlan) {
        setPlan(JSON.parse(storedPlan));
      }

      if (storedSaved) {
        setSaved(JSON.parse(storedSaved));
      }
    } catch (error) {
      console.error("Failed to load FitLog data:", error);
    } finally {
      setHydrated(true);
    }
  }, []);

  useEffect(() => {
    if (!hydrated) return;

    localStorage.setItem(
      "fitlog-plan",
      JSON.stringify(plan)
    );
  }, [plan, hydrated]);

  useEffect(() => {
    if (!hydrated) return;

    localStorage.setItem(
      "fitlog-saved",
      JSON.stringify(saved)
    );
  }, [saved, hydrated]);

  const addToPlan = (workout: Workout): boolean => {
    if (plan.length >= 5) {
      return false;
    }

    if (plan.some((item) => item.id === workout.id)) {
      return false;
    }

    setPlan((current) => [...current, workout]);

    return true;
  };

  const saveWorkout = (workout: Workout): boolean => {
    if (saved.some((item) => item.id === workout.id)) {
      return false;
    }

    setSaved((current) => [...current, workout]);

    return true;
  };

  const removeFromPlan = (id: number) => {
    setPlan((current) =>
      current.filter((workout) => workout.id !== id)
    );
  };

  const removeFromSaved = (id: number) => {
    setSaved((current) =>
      current.filter((workout) => workout.id !== id)
    );
  };

  const markAsDone = (id: number) => {
    setPlan((current) =>
      current.filter((workout) => workout.id !== id)
    );
  };

  const isInPlan = (id: number): boolean => {
    return plan.some((workout) => workout.id === id);
  };

  const isSaved = (id: number): boolean => {
    return saved.some((workout) => workout.id === id);
  };

  return (
    <FitLogContext.Provider
      value={{
        plan,
        saved,
        addToPlan,
        saveWorkout,
        removeFromPlan,
        removeFromSaved,
        markAsDone,
        isInPlan,
        isSaved,
      }}
    >
      {children}
    </FitLogContext.Provider>
  );
}

export function useFitLog() {
  const context = useContext(FitLogContext);

  if (!context) {
    throw new Error(
      "useFitLog must be used inside FitLogProvider"
    );
  }

  return context;
}