"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const leadershipMessages = [
  {
    name: "Narendra Kumar Kurakula",
    role: "Founder & Chairman",
    message:
      "Lurnexa Publications was founded to create knowledge that empowers, enlightens, and encourages inquiry. Every book and journal we publish is built on analytical insight and real-world relevance.",
    image: "/Founder.jpg", // 👉 Place in /public/images
  },
  {
    name: "Rushik Burla",
    role: "Chief Executive Officer",
    message:
      "Our vision is to turn research-oriented learning into impact. We are building platforms where authors feel valued, researchers supported, and learners truly inspired.",
    image: "/ceo.jpg", // 👉 Replace with your actual image
  },
];

export default function LeadershipSection() {
  const [activeLeader, setActiveLeader] = useState(0);

  // Auto carousel rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveLeader((prev) => (prev + 1) % leadershipMessages.length);
    }, 5000); // every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="leadership"
      className="py-20 relative overflow-hidden "
    >
      <div className="mx-auto max-w-5xl px-6 text-center">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl mb-4">
          Leadership Spotlight
        </h2>
        <p className="mb-12 text-sm text-dark">
          Meet the visionaries leading Lurnexa Publications
        </p>

        <div className="relative flex flex-col items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeLeader}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="flex flex-col md:flex-row items-center justify-center gap-8 rounded-3xl border border-slate-200 bg-white/80 p-8 shadow-lg backdrop-blur-lg dark:border-slate-700 dark:bg-slate-900/80"
            >
              {/* Leader Image */}
              <div className="flex-shrink-0">
                <img
                  src={leadershipMessages[activeLeader].image}
                  alt={leadershipMessages[activeLeader].name}
                  className="h-40 w-40 rounded-2xl object-cover shadow-lg shadow-blue-500/30 md:h-48 md:w-48"
                />
              </div>

              {/* Text Info */}
              <div className="text-left md:max-w-md">
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50">
                  {leadershipMessages[activeLeader].name}
                </h3>
                <p className="text-blue-700 dark:text-sky-400 text-sm">
                  {leadershipMessages[activeLeader].role}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  “{leadershipMessages[activeLeader].message}”
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Indicator Dots */}
          <div className="mt-6 flex justify-center gap-3">
            {leadershipMessages.map((_, i) => (
              <span
                key={i}
                className={`h-3 w-3 rounded-full transition-all duration-500 ${
                  activeLeader === i
                    ? "bg-blue-600 scale-110"
                    : "bg-slate-300 dark:bg-slate-600"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
