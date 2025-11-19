const features = [
  {
    title: "Intelligent sequencing",
    description:
      "Cards follow a spaced repetition-inspired track so insights reappear right before they fade.",
    icon: "🧠",
  },
  {
    title: "Custom sessions",
    description: "Dial in card count and sprint length to match any study block or commute.",
    icon: "🎯",
  },
  {
    title: "Subject-agnostic",
    description:
      "From med school to corporate law, Memorise AI translates material into concise prompts.",
    icon: "📚",
  },
  {
    title: "Fast learning loops",
    description: "Short sessions keep every spare minute productive without sacrificing depth.",
    icon: "⚡",
  },
];

export default function FeatureGrid() {
  return (
    <section id="features" className="space-y-10">
      <div className="text-center">
        <p className="text-xs uppercase tracking-[0.35em] text-amber-300/80">Why it works</p>
        <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
          Card-first learning with cinematic focus
        </h2>
        <p className="mt-3 text-base text-slate-400">
          Every sprint balances pace and depth so you retain massive sets in a fraction of the time.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {features.map((feature) => (
          <article
            key={feature.title}
            className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#0f1424] via-[#0a0d18] to-[#05060b] p-6 shadow-[0_25px_60px_rgba(0,0,0,0.35)] transition hover:-translate-y-1 hover:border-amber-300/40"
          >
            <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-2xl">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
            <p className="mt-3 text-sm text-slate-400">{feature.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
