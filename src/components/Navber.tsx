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
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6">

        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/logo.png"
            alt="FitLog Logo"
            width={42}
            height={42}
            className="object-contain"
          />

          <span className="text-xl font-bold tracking-wide text-white">
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
            className="rounded-full bg-[#ccff00] px-3 py-1.5 text-xs font-bold uppercase text-black transition hover:bg-white"
          >
            Plan <span className="ml-1">{plan.length}</span>
          </Link>

          <Link
            href="/my-plan"
            className="rounded-full border border-zinc-600 px-3 py-1.5 text-xs font-bold uppercase text-white transition hover:border-[#ccff00] hover:text-[#ccff00]"
          >
            Saved <span className="ml-1">{saved.length}</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;