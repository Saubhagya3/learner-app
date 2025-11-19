"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Preview", href: "#preview" },
  { label: "Get started", href: "#get-started" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/65 backdrop-blur-2xl">
      <div className="mx-auto flex w-full max-w-[1200px] items-center justify-between px-5 py-4 sm:px-8 lg:px-10">
        <Link
          href="/"
          className="text-lg font-semibold tracking-wide text-white"
          onClick={() => setOpen(false)}
        >
          Memorise AI
        </Link>
        <nav className="hidden items-center gap-7 text-sm font-semibold text-slate-300 lg:flex">
          {navLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400/70"
              prefetch={false}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="#get-started"
            className="rounded-full bg-amber-400 px-5 py-2 text-slate-950 shadow shadow-amber-400/40 transition hover:-translate-y-0.5 hover:bg-amber-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-200"
            prefetch={false}
          >
            Start for free
          </Link>
        </nav>
        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white transition hover:border-amber-400/70 hover:text-amber-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400/70 lg:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
        >
          <span className="relative block h-5 w-6">
            <span
              className={`absolute left-1/2 top-1 block h-0.5 w-5 -translate-x-1/2 transform bg-current transition ${
                open ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-1/2 top-1/2 block h-0.5 w-5 -translate-x-1/2 -translate-y-1/2 transform bg-current transition ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-1/2 bottom-1 block h-0.5 w-5 -translate-x-1/2 transform bg-current transition ${
                open ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>
      {open && (
        <div className="border-t border-white/10 bg-[#080910]/95 lg:hidden">
          <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-4 px-6 py-6 text-base font-medium text-slate-200">
            {navLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="rounded-2xl border border-transparent px-4 py-3 transition hover:border-white/15 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400/70"
                onClick={() => setOpen(false)}
                prefetch={false}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="#get-started"
              className="rounded-2xl border border-amber-300/50 bg-amber-400/90 px-4 py-3 text-center font-semibold text-slate-950 transition hover:bg-amber-300"
              onClick={() => setOpen(false)}
              prefetch={false}
            >
              Start for free
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
