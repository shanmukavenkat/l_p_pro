"use client";

import { useTheme } from "next-themes";
import { LineShadowText } from "@/components/ui/line-shadow-text";
import { TypingAnimation } from "@/components/ui/typing-animation";

export default function HeroSection() {
  const { resolvedTheme } = useTheme();
 

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-white" // ✅ ensures white background always
    >
      {/* Glow */}
     

      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-10 px-6 pt-28 pb-20 md:flex-row md:items-start md:justify-between md:pt-32">
        {/* Left */}
        <div className="max-w-xl text-center md:text-left">
          <h1 className="text-balance text-7xl font-semibold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-black">
            <LineShadowText>
                 LURNEXA
            </LineShadowText>
           
            <br />
            <span className="relative inline-block text-5xl italic bg-linear-to-r from-blue-500 via-sky-400 to-cyan-300 bg-clip-text text-transparent ">
              
                PUBLICATIONS
              
            </span>
          </h1>

          <TypingAnimation className="mt-6 text-balance text-base leading-relaxed text-black  md:text-lg">
            A techno-management hub of knowledge and innovation, bridging technology, research,
            management, and publishing to create real-world impact.
          </TypingAnimation>

          <div className="mt-8 flex flex-wrap justify-center gap-4 md:justify-start">
            <button className="rounded-full bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition hover:bg-blue-700 hover:shadow-blue-500/50">
              Explore Journals
            </button>
            <button className="rounded-full border border-slate-300 px-6 py-2.5 text-sm font-semibold text-slate-800 shadow-sm transition hover:border-blue-500 hover:text-blue-600   dark:hover:border-sky-400 dark:hover:text-sky-300">
              Submit Your Paper
            </button>
          </div>
        </div>

        {/* Right */}
        <div className="mt-6 w-full max-w-md md:mt-0">
          <div className="relative rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-xl shadow-sky-100/80 backdrop-blur dark:border-slate-700 dark:bg-slate-900/70 dark:shadow-sky-900/40">
           
            <div className="relative flex flex-col items-center gap-4">
              <div className="flex h-28 w-28 items-center justify-center rounded-2xl bg-linear-to-br from-blue-600 via-sky-500 to-cyan-400 text-4xl shadow-lg shadow-sky-400/50">
                📘
              </div>
              <p className="text-center text-sm text-slate-600 dark:text-slate-300">
                AI-enabled publishing workflows, plagiarism checks, reviewer dashboards, and
                digital-first academic experiences.
              </p>
              <div className="mt-2 flex w-full items-center justify-between rounded-2xl border border-dashed border-white/30 px-4 py-3 text-xs text-white">
                <span>Realtime review tracking</span>
                <span className="rounded-full bg-emerald-100 px-3 py-1 text-[11px] font-semibold text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300">
                  Live · Secure
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
