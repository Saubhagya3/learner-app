import Link from "next/link";

const sampleCards = [
  {
    subject: "Neuroscience",
    detail:
      "Short-term consolidation is strongest when cards stay under 90 seconds and repeat rhythmically.",
    time: "Card 4 | 4 min left",
    offset: 0,
    rotation: -4,
  },
  {
    subject: "Civil Law",
    detail:
      "Consideration must be provided by both parties; promissory estoppel saves equitable promises.",
    time: "Card 7 | 6 min left",
    offset: 18,
    rotation: 2,
  },
  {
    subject: "Biochemistry",
    detail:
      "ATP synthase pulls energy from proton gradients; three H+ generate one ATP when load increases.",
    time: "Card 10 | 2 min left",
    offset: 36,
    rotation: -1,
  },
];

const heroStats = [
  { label: "Cards per sprint", value: "12", detail: "Adjust between 8 and 40 cards." },
  { label: "Average sprint", value: "7 min", detail: "Pick a window that fits your day." },
  { label: "Retention boost", value: "2x", detail: "Spaced prompts return before memory fades." },
];

export default function HeroSection() {
  return (
    <section
      className="relative isolate overflow-hidden rounded-[30px] border border-white/5 bg-[#0b0f1b] px-6 py-16 sm:px-10 lg:px-16 min-h-[90vh]"
      style={{
        backgroundImage:
          "radial-gradient(circle at 20% -10%, rgba(255,196,77,0.2), transparent 45%), radial-gradient(circle at 80% 10%, rgba(72,149,239,0.25), transparent 50%)",
      }}
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60" />
      <div className="relative z-10 grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-amber-300/80">
            AI Memorisation Studio
          </p>
          <h1 className="mt-6 text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-[3.5rem]">
            Precision learning for every exam sprint.
          </h1>
          <p className="mt-6 text-lg text-slate-300">
            Memorise AI distills any subject into cinematic card runs. Choose your topic, card count,
            and session time, then stream laser-focused prompts that stick.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="#get-started"
              className="rounded-full bg-amber-400 px-7 py-3 text-center text-base font-semibold text-slate-950 shadow-lg shadow-amber-400/30 transition hover:-translate-y-0.5 hover:bg-amber-300"
              prefetch={false}
            >
              Start memorising
            </Link>
            <Link
              href="#how-it-works"
              className="rounded-full border border-white/20 px-7 py-3 text-center text-base font-semibold text-white transition hover:border-amber-300 hover:text-amber-200"
              prefetch={false}
            >
              See how it works
            </Link>
          </div>
          <div className="mt-12 grid gap-6 text-sm text-slate-300 sm:grid-cols-3">
            {heroStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-inner shadow-black/40"
              >
                <p className="text-3xl font-semibold text-white">{stat.value}</p>
                <p className="mt-2 text-xs uppercase tracking-wide text-amber-200">{stat.label}</p>
                <p className="mt-2 text-slate-400">{stat.detail}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative flex justify-center">
          <div className="absolute -inset-10 -z-10 rounded-[40px] bg-gradient-to-r from-amber-400/15 via-transparent to-blue-400/20 blur-[80px]" />
          <div className="relative flex flex-col items-center">
            {sampleCards.map((card) => (
              <article
                key={card.subject}
                className="w-full max-w-sm rounded-3xl border border-white/10 bg-gradient-to-br from-[#10172a] via-[#0b0f1b] to-black p-6 shadow-[0_20px_60px_rgba(0,0,0,0.45)] transition hover:scale-[1.02]"
                style={{ transform: `translateY(${card.offset}px) rotate(${card.rotation}deg)` }}
              >
                <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wide text-amber-200">
                  <span>{card.subject}</span>
                  <span>{card.time}</span>
                </div>
                <p className="mt-4 text-base text-slate-100">{card.detail}</p>
                <div className="mt-6 flex items-center justify-between text-xs text-slate-400">
                  <span>Focus stream</span>
                  <div className="flex gap-1">
                    {[0, 1, 2, 3, 4].map((bar) => (
                      <span
                        key={`${card.subject}-${bar}`}
                        className={`h-1.5 w-6 rounded-full ${
                          bar < 3 ? "bg-amber-300" : "bg-white/15"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
