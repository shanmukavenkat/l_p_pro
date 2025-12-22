"use client";

import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState, useCallback } from "react";

type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string; // kept for compatibility, not used
};

export const AnimatedTestimonials = ({
  testimonials,
  autoplay = true,
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
}) => {
  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [expanded, setExpanded] = useState(false);

  if (!testimonials || testimonials.length === 0) return null;

  const handleNext = useCallback(() => {
    setActive((prev) => (prev + 1) % testimonials.length);
    setExpanded(false);
  }, [testimonials.length]);

  const handlePrev = useCallback(() => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setExpanded(false);
  }, [testimonials.length]);

  // ✅ Autoplay with hover pause
  useEffect(() => {
    if (!autoplay || isPaused) return;
    const interval = setInterval(handleNext, 3000);
    return () => clearInterval(interval);
  }, [autoplay, handleNext, isPaused]);

  const current = testimonials[active];
  const MAX_WORDS = 45;
  const words = current?.quote?.split(" ") || [];
  const isLong = words.length > MAX_WORDS;
  const visibleWords = expanded ? words : words.slice(0, MAX_WORDS);

  const textContainerBase =
    "mt-6 text-black leading-relaxed text-base md:text-lg";
  const textContainerClass = expanded
    ? `${textContainerBase} max-h-60 md:max-h-72 overflow-y-auto modern-scroll pr-2`
    : textContainerBase;

  return (
    <>
      <div
        className="mx-auto py-20 font-sans antialiased md:max-w-4xl px-6"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* HEADER */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black">
            Leader Spotlight
          </h2>
          <p className="mt-3 text-base md:text-lg text-gray-700">
            Meet the visionaries leading Lurnexa Publications
          </p>
        </div>

        {/* TEXT ONLY LAYOUT */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <div className="border border-orange-100 rounded-3xl shadow-lg p-6 md:p-10">
              <h3 className="text-2xl md:text-3xl font-bold text-black mb-1">
                {current.name}
              </h3>
              <p className="text-sm md:text-base text-gray-700">
                {current.designation}
              </p>

              <motion.p
                className={textContainerClass}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
              >
                {visibleWords.map((word, index) => (
                  <motion.span
                    key={index}
                    initial={{ filter: "blur(8px)", opacity: 0, y: 5 }}
                    animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.25,
                      ease: "easeOut",
                      delay: 0.015 * index,
                    }}
                    className="inline-block"
                  >
                    {word}&nbsp;
                  </motion.span>
                ))}

                {isLong && !expanded && (
                  <button
                    type="button"
                    onClick={() => setExpanded(true)}
                    className="ml-1 inline-flex items-center text-blue-600 font-semibold"
                  >
                    Read More…
                  </button>
                )}

                {isLong && expanded && (
                  <button
                    type="button"
                    onClick={() => setExpanded(false)}
                    className="mt-4 block text-sm text-blue-600 font-semibold"
                  >
                    Show Less
                  </button>
                )}
              </motion.p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Modern scrollbar styles */}
      <style>{`
        .modern-scroll {
          scrollbar-width: thin;
          scrollbar-color: #94a3b8 #e5e7eb;
        }

        .modern-scroll::-webkit-scrollbar {
          width: 6px;
        }

        .modern-scroll::-webkit-scrollbar-track {
          background: #e5e7eb;
          border-radius: 9999px;
        }

        .modern-scroll::-webkit-scrollbar-thumb {
          background: #94a3b8;
          border-radius: 9999px;
        }

        .modern-scroll::-webkit-scrollbar-thumb:hover {
          background: #64748b;
        }
      `}</style>
    </>
  );
};
