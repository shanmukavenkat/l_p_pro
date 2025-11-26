"use client";

import {
  Globe2,
  BookOpen,
  Users,
  Cpu,
  Sparkles,
  Lightbulb,
  BarChart3,
} from "lucide-react";

const objectives = [
  {
    icon: Lightbulb,
    title: "Quality & Innovation in Publishing",
    desc: "Each publication embodies precision, managerial insight, and academic excellence through rigorous peer review.",
  },
  {
    icon: Globe2,
    title: "Global Accessibility",
    desc: "Make techno-management research available to scholars, institutions, and professionals worldwide.",
  },
  {
    icon: Users,
    title: "Collaborative Research & Networking",
    desc: "Foster partnerships with universities, industries, and researchers to drive innovation.",
  },
  {
    icon: BookOpen,
    title: "Knowledge Dissemination",
    desc: "Promote leading-edge research in management, entrepreneurship, and innovation through global platforms.",
  },
  {
    icon: Sparkles,
    title: "Support for Emerging Talent",
    desc: "Offer mentorship and affordable publishing opportunities for students and early-career researchers.",
  },
  {
    icon: Cpu,
    title: "Digital Excellence in Publishing",
    desc: "Utilize AI-driven tools and digital workflows for transparent and efficient publishing.",
  },
  {
    icon: BarChart3,
    title: "Sustainable Growth & Credibility",
    desc: "Build Lurnexa into a trusted global brand through innovation, quality, and leadership.",
  },
];

// layout to get 3 on top, 4 on bottom on md+ screens
const layoutClasses = [
  "md:col-span-2 md:row-span-1", // big card
  "md:col-span-1",
  "md:col-span-1",
  "md:col-span-3", // big card second row
  "md:col-span-1",
  "md:col-span-2",
  "md:col-span-2",
];

export default function CoreObjectives() {
  return (
    <section
      id="objectives"
      className="relative w-full py-16 sm:py-20  overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-start flex flex-col items-start justify-between gap-4 mb-10 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">
            Core Objectives
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300 ">
            The pillars that drive Lurnexa&apos;s techno-management publishing
            ecosystem.
          </p>
            <span className="rounded-full bg-blue-600/10 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-blue-700 dark:bg-sky-500/15 dark:text-sky-300">
            7 Key Focus Areas
          </span>
        </div>

        {/* Bento grid */}
        <div className="grid gap-6 md:grid-cols-4 auto-rows-[220px] sm:auto-rows-[240px] lg:auto-rows-[260px]">
          {objectives.map((obj, idx) => {
            const Icon = obj.icon;
            const layout = layoutClasses[idx] ?? "md:col-span-1";

            const isLarge = layout.includes("col-span-2");

            return (
              <div
                key={obj.title}
                className={`group relative rounded-3xl border border-slate-800 bg-slate-950/70
                  shadow-[0_0_0_1px_rgba(15,23,42,0.7)]
                  ${layout}
                  overflow-hidden transition-transform duration-300
                  hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(56,189,248,0.5)]`}
              >
                {/* glow bar */}
                <div className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-blue-500 via-sky-400 to-fuchsia-500 opacity-70 group-hover:opacity-100 transition-opacity duration-300" />

                {/* subtle background gradient */}
                <div className="absolute inset-0 bg-linear-to-br from-slate-900 via-slate-950 to-slate-900 opacity-90" />

                {/* content */}
                <div className="relative z-10 h-full w-full flex flex-col justify-between p-5 sm:p-6">
                  <div className="flex items-start justify-between gap-3">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900/80 shadow-lg shadow-sky-500/20">
                      <Icon className="w-5 h-5 text-sky-300" />
                    </div>
                    <span className="text-xs font-semibold text-sky-300/80">
                      {idx + 1}
                    </span>
                  </div>

                  <div className="mt-4">
                    <h3
                      className={`font-semibold text-white ${
                        isLarge ? "text-lg sm:text-xl" : "text-base sm:text-lg"
                      }`}
                    >
                      {obj.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-300">
                      {obj.desc}
                    </p>
                  </div>
                </div>

                {/* hover spotlight */}
                <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300">
                  <div className="absolute -bottom-16 left-1/2 h-32 w-32 -translate-x-1/2 rounded-full blur-3xl bg-sky-500/40" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* bottom fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950 via-slate-900/70 to-transparent" />
    </section>
  );
}
