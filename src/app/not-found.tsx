import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center bg-[#0b0c0f] px-4">
      <div className="text-center">
        <p className="text-6xl font-black text-[#ccff00]">
          404
        </p>

        <h1 className="mt-4 text-2xl font-black uppercase text-white">
          Workout Not Found
        </h1>

        <p className="mt-2 text-sm text-zinc-500">
          The workout you are looking for does not exist.
        </p>

        <Link
          href="/"
          className="mt-6 inline-block rounded-full bg-[#ccff00] px-6 py-3 text-xs font-black uppercase text-black transition hover:bg-white"
        >
          Back to Workouts
        </Link>
      </div>
    </main>
  );
}