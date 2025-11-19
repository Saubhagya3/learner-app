const steps = [
  {
    title: "Choose your subject or exam",
    description: "Select any topic-Memorise AI adapts instantly, from anatomy to case law.",
  },
  {
    title: "Set session length and card count",
    description: "Define how many cards and minutes you want; the system shapes the sprint.",
  },
  {
    title: "Memorise with focused cards",
    description: "Glide through short, high-impact prompts orchestrated for recall and depth.",
  },
  {
    title: "Review and refine weak spots",
    description: "Surface cards you flagged and reinforce them until every concept feels automatic.",
  },
];

export default function StepsSection() {
  return (
    <section id="how-it-works" className="space-y-10">
      <div className="text-center">
        <p className="text-xs uppercase tracking-[0.35em] text-amber-300/80">How it works</p>
        <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
          Four moves to total recall
        </h2>
      </div>
      <div className="rounded-[26px] border border-white/10 bg-[#0a0f1d]/80 p-6 shadow-inner shadow-black/40">
        <div className="grid gap-8 md:grid-cols-4">
          {steps.map((step, index) => (
            <article
              key={step.title}
              className="relative flex flex-col rounded-3xl border border-white/5 bg-black/40 p-6 shadow-[0_15px_35px_rgba(0,0,0,0.4)]"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-amber-400/20 text-base font-semibold text-amber-200">
                {index + 1}
              </div>
              <h3 className="text-lg font-semibold text-white">{step.title}</h3>
              <p className="mt-3 text-sm text-slate-400">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

