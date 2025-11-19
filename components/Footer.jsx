export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[#03040a]/95">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-4 px-6 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
        <div>
          <p className="text-base font-semibold text-white">Memorise AI</p>
          <p className="mt-1 text-slate-400">&copy; {year} Memorise AI. All rights reserved.</p>
        </div>
        <div className="flex gap-6">
          <a href="#" className="transition hover:text-white">
            Privacy
          </a>
          <a href="#" className="transition hover:text-white">
            Terms
          </a>
        </div>
      </div>
    </footer>
  );
}
