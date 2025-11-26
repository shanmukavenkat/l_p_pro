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
  autoplay = false,
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
}) => {
  const [active, setActive] = useState(0);

  if (!testimonials || testimonials.length === 0) return null;

  // ✅ Stable handlers with useCallback
  const handleNext = useCallback(() => {
    setActive((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const handlePrev = useCallback(() => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, [testimonials.length]);

  // ✅ Clean, stable auto-rotation (no console warnings)
  useEffect(() => {
    if (!autoplay) return;
    const interval = setInterval(handleNext, 5000);
    return () => clearInterval(interval);
  }, [autoplay, handleNext]);

  const current = testimonials[active];

  return (
    <div className="mx-auto max-w-sm px-4 py-20 font-sans antialiased md:max-w-4xl md:px-8 lg:px-12">
      <div className="relative grid grid-cols-1 gap-20 md:grid-cols-2">
        {/* ==== LEFT IMAGE SECTION ==== */}
        <div>
          <div className="relative h-80 w-full overflow-hidden rounded-3xl ">
            <AnimatePresence mode="wait">
              <motion.div
                key={active} // ✅ Re-renders on next/prev
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
                  className="h-full w-full rounded-3xl object-cover object-center"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* ==== RIGHT TEXT SECTION ==== */}
        <div className="flex flex-col justify-between py-4 ">
          {current && (
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <h3 className="text-2xl font-bold text-black ">
                  {current.name}
                </h3>
                <p className="text-sm text-dark">
                  {current.designation}
                </p>

                <motion.p className="mt-8 text-lg text-black leading-relaxed">
                  {current.quote?.split(" ").map((word, index) => (
                    <motion.span
                      key={index}
                      initial={{ filter: "blur(10px)", opacity: 0, y: 5 }}
                      animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.2,
                        ease: "easeInOut",
                        delay: 0.02 * index,
                      }}
                      className="inline-block"
                    >
                      {word}&nbsp;
                    </motion.span>
                  ))}
                </motion.p>
              </motion.div>
            </AnimatePresence>
          )}

          {/* ==== CONTROLS ==== */}
         
        </div>
      </div>
    </div>
  );
};
