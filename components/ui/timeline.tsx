"use client";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "motion/react";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { FileDown, Send, Cpu,  } from "lucide-react";



interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}
 

export const Timeline = ({ data, title, description, icon }: { data: TimelineEntry[]; title: string; description: string; icon: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 100%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-linear-to-br from-sky-100 via-blue-50 to-white font-sans md:px-10"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto mb-20 pt-16 px-4 sm:px-6 lg:px-8">
       
          <div className="flex justify-center">
            {icon}
          </div>
        <h1 className=" text-3xl sm:text-5xl font-bold text-slate-900 text-center mb-4">
          {title}
        </h1>
        <p className=" text-center  text-slate-700 leading-relaxed mb-12">
          {description}
        </p>
       
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pd-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pd-10 md:pd-40 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-blue dark:bg-gray-500 flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
              </div>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold  ">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 pt-2  md:pl-4 w-full text-dark">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold ">
                {item.title}
              </h3>
              {item.content}{" "}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-0% via-neutral-200 dark:via-neutral-700 to-transparent to-99%  mask-[linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-linear-to-t from-purple-500 via-blue-500 to-transparent from-0% via-20% rounded-full"
          />
        </div>
        
      </div>
       {/* ===== Submission Guidelines ===== */}
      
    </div>
    
  );
};
