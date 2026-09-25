"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useFitLog } from "@/context/FitLogContext";

const Navbar = () => {
  const pathname = usePathname();
  const { plan, saved } = useFitLog();

  return (
    <nav className="sticky top-0 z-50 border-b border-zinc-800 bg-black">
      <div className="mx-auto max-w-7xl px-4 py-3 md:px-6">

        <div className="flex items-center justify-between">

          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/logo.png"
              alt="FitLog Logo"
              width={36}
              height={36}
              className="object-contain"
            />

            <span className="text-lg font-bold tracking-wide text-white">
              FITLOG
            </span>
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            <Link
              href="/"
              className={`text-sm font-semibold uppercase tracking-wide transition ${
                pathname === "/"
                  ? "text-[#ccff00]"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              Workout
            </Link>

            <Link
              href="/my-plan"
              className={`text-sm font-semibold uppercase tracking-wide transition ${
                pathname === "/my-plan"
                  ? "text-[#ccff00]"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              My Plan
            </Link>
          </div>

          <div className="flex items-center gap-2">
            <Link
              href="/my-plan"
              className="rounded-full bg-[#ccff00] px-3 py-1.5 text-[10px] font-bold uppercase text-black transition hover:bg-white sm:text-xs"
            >
              Plan <span className="ml-1">{plan.length}</span>
            </Link>

            <Link
              href="/my-plan"
              className="rounded-full border border-zinc-600 px-3 py-1.5 text-[10px] font-bold uppercase text-white transition hover:border-[#ccff00] hover:text-[#ccff00] sm:text-xs"
            >
              Saved <span className="ml-1">{saved.length}</span>
            </Link>
          </div>
        </div>

        <div className="mt-3 flex items-center justify-center gap-2 border-t border-zinc-900 pt-3 md:hidden">
          <Link
            href="/"
            className={`rounded-full px-5 py-1.5 text-[10px] font-bold uppercase transition ${
              pathname === "/"
                ? "bg-[#ccff00] text-black"
                : "text-zinc-500 hover:text-white"
            }`}
          >
            Workout
          </Link>

          <Link
            href="/my-plan"
            className={`rounded-full px-5 py-1.5 text-[10px] font-bold uppercase transition ${
              pathname === "/my-plan"
                ? "bg-[#ccff00] text-black"
                : "text-zinc-500 hover:text-white"
            }`}
          >
            My Plan
          </Link>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;