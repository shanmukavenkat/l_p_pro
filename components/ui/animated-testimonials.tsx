"use client";

import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState, useCallback } from "react";

type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string;
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
  const MAX_WORDS = 45; // how many words before "Read More"
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
        className="mx-auto py-20 font-sans antialiased md:max-w-5xl px-6"
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

        {/* MAIN LAYOUT */}
        <div className="relative grid grid-cols-1 gap-12 md:gap-20 md:grid-cols-2 items-center">
          {/* LEFT IMAGE */}
          <div className="relative group">
            <div className="relative h-80 md:h-96 w-full overflow-hidden rounded-3xl shadow-lg">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  exit={{ opacity: 0, scale: 0.9, rotate: 5 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="absolute inset-0"
                >
                  <img
                    src={current?.src || "/placeholder.jpg"}
                    alt={current?.name || "testimonial"}
                    width={500}
                    height={500}
                    draggable={false}
                    className="h-full w-full rounded-3xl object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* RIGHT TEXT CONTAINER */}
          <div className="flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                {/* Modern card container */}
                <div className=" border border-orange-100 rounded-3xl shadow-lg p-6 md:p-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-black mb-1">
                    {current.name}
                  </h3>
                  <p className="text-sm md:text-base text-gray-700">
                    {current.designation}
                  </p>

                  {/* Scrollable text area when expanded */}
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
                        className="ml-1 inline-flex items-center text-blue-600 font-semibold "
                      >
                        Read More…
                      </button>
                    )}

                    {isLong && expanded && (
                      <button
                        type="button"
                        onClick={() => setExpanded(false)}
                        className="mt-4 block text-sm text-blue-600 font-semibold "
                      >
                        Show Less
                      </button>
                    )}
                  </motion.p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Modern scrollbar styles (only for .modern-scroll) */}
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
