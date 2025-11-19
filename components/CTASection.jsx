import Link from "next/link";

export default function CTASection() {
  return (
    <section
      id="get-started"
      className="relative overflow-hidden rounded-[28px] border border-white/5 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 px-8 py-14 text-slate-950"
    >
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 translate-x-6 bg-white/30 blur-[120px]" />
      <div className="relative z-10 flex flex-col gap-6 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.35em] text-slate-900/60">Ready in minutes</p>
          <h2 className="mt-4 text-3xl font-semibold">Launch a focused memorisation sprint now</h2>
          <p className="mt-3 text-base text-slate-900/80">
            Start free, no card required. Load cards, set your timer, and stream a session that
            works inside any schedule.
          </p>
        </div>
        <Link
          href="#features"
          className="inline-flex w-full items-center justify-center rounded-full bg-black px-8 py-3 text-base font-semibold text-white shadow-xl shadow-black/30 transition hover:-translate-y-0.5 hover:bg-slate-900 sm:w-auto"
          prefetch={false}
        >
          Start your first session
        </Link>
      </div>
    </section>
  );
}
