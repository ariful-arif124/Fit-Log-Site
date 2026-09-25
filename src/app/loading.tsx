export default function Loading() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center bg-[#0b0c0f]">
      <div className="text-center">
        <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-zinc-800 border-t-[#ccff00]" />

        <p className="mt-4 text-xs font-bold uppercase tracking-widest text-zinc-500">
          Loading workouts...
        </p>
      </div>
    </main>
  );
}