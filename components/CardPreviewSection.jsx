const previewCards = [
  {
    subject: "Biology",
    concept: "Photosystem II splits water; freed electrons charge ATP formation in light reactions.",
    meta: "12 cards | 6 min",
    tag: "Focus run",
    progress: 70,
  },
  {
    subject: "International Law",
    concept: "Customary law forms when state practice pairs with opinio juris.",
    meta: "8 cards | 4 min",
    tag: "Rapid",
    progress: 45,
  },
  {
    subject: "Modern History",
    concept: "Marshall Plan invested $13B to rebuild Western Europe and counter Soviet pull.",
    meta: "16 cards | 9 min",
    tag: "Deep dive",
    progress: 85,
  },
  {
    subject: "Anatomy",
    concept: "The limbic system governs emotional processing and memory consolidation.",
    meta: "10 cards | 5 min",
    tag: "Spotlight",
    progress: 60,
  },
];

export default function CardPreviewSection() {
  return (
    <section
      id="preview"
      className="space-y-8 rounded-[28px] border border-white/10 bg-gradient-to-br from-[#0a0f1c] via-[#05070d] to-black px-6 py-10 sm:px-8"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-amber-300/80">Card lane</p>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
            Stream your knowledge reels
          </h2>
          <p className="mt-3 text-base text-slate-400 max-w-2xl">
            Swipe through stacked subjects with lean text, timer cues, and progress pulses. Tap a
            card to dive deeper or start a new run.
          </p>
        </div>
      </div>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#0a0f1c] to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#05070d] to-transparent pointer-events-none" />
        <div className="flex gap-5 overflow-x-auto scroll-smooth pb-4 pt-2">
          {previewCards.map((card) => (
            <article
              key={card.subject}
              className="min-w-[240px] max-w-[260px] flex-shrink-0 rounded-3xl border border-white/10 bg-gradient-to-br from-[#11182c] to-[#080b14] p-5 shadow-[0_25px_45px_rgba(0,0,0,0.45)] transition hover:-translate-y-1 hover:border-amber-300/40"
            >
              <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wide text-amber-200">
                <span>{card.subject}</span>
                <span className="text-slate-300">{card.meta}</span>
              </div>
              <p className="mt-4 text-base text-white">{card.concept}</p>
              <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300">
                <span className="h-2 w-2 rounded-full bg-amber-400" />
                {card.tag}
              </div>
              <div className="mt-6">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span>Progress</span>
                  <span>{card.progress}%</span>
                </div>
                <div className="mt-2 h-1.5 w-full rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full bg-amber-400"
                    style={{ width: `${card.progress}%` }}
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
