export default function FooterSection() {
  return (
    <footer className="border-t border-slate-200 bg-white/80 py-6 text-xs text-slate-600 dark:border-slate-800 dark:bg-slate-950/80 dark:text-slate-400">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 sm:flex-row">
        <p>© {new Date().getFullYear()} Lurnexa Publications. All rights reserved.</p>
        <div className="flex gap-4">
          <button className="hover:text-blue-600 dark:hover:text-sky-300">Privacy</button>
          <button className="hover:text-blue-600 dark:hover:text-sky-300">Terms</button>
          <button className="hover:text-blue-600 dark:hover:text-sky-300">Contact</button>
        </div>
      </div>
    </footer>
  );
}
