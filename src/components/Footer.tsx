import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-900 bg-[#0b0c0f]">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-6 sm:flex-row sm:items-center sm:justify-between md:px-6">
        
        <div className="flex items-center gap-2">
          <Image
            src="/images/logo.png"
            alt="FitLog"
            width={22}
            height={22}
            className="object-contain"
          />

          <span className="text-xs font-black tracking-wide text-white">
            FITLOG
          </span>
        </div>

        <p className="text-[10px] text-zinc-600">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>

      </div>
    </footer>
  );
}