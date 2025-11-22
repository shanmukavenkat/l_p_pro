import Lenis from '@studio-freight/lenis';
import { ReactLenis } from '@studio-freight/react-lenis';
import { useTransform, motion, useScroll, MotionValue } from 'motion/react';
import { useRef } from 'react';
import Image from 'next/image';

const projects = [
  {
    title: 'Mission 1',
    description:
      'Connect technologists, managers, and researchers on a dynamic publishing platform.',
    src: 'mission1.jpg',
    link: 'https://images.unsplash.com/photo-1522199710521-72d69614c702?w=900&auto=format&fit=crop&q=80',
    color: '#4f46e5',
  },
  {
    title: 'Mission 2',
    description:
      'Uphold academic integrity and technical accuracy through strong peer-review.',
    src: 'mission2.jpg',
    link: 'https://images.unsplash.com/photo-1551836022-4c4c79ecde51?w=900&auto=format&fit=crop&q=80',
    color: '#2563eb',
  },
  {
    title: 'Mission 3',
    description:
      'Promote multidisciplinary collaboration across technology, management, and innovation.',
    src: 'mission3.jpg',
    link: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=900&auto=format&fit=crop&q=80',
    color: '#0ea5e9',
  },
  {
    title: 'Mission 4',
    description:
      'Leverage digital tools and AI for faster, broader, and effective knowledge dissemination.',
    src: 'mission4.jpg',
    link: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=900&auto=format&fit=crop&q=80',
    color: '#06b6d4',
  },
];

export default function index(): JSX.Element {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  return (
    <ReactLenis root>
      <main className="bg-white" ref={container}>
        {/* Vision + Mission section */}
        <section className="w-full bg-slate-950 text-white flex flex-col md:flex-row items-start min-h-screen">
          <div className="mx-auto flex flex-col md:flex-row max-w-6xl gap-10 px-6 py-16 w-full">
            
            {/* Vision (Left on desktop, Top on mobile) */}
            <div className="relative md:w-1/2 w-full md:sticky md:top-0 md:h-screen flex items-center">
              <div className="pointer-events-none absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
              <div className="relative space-y-4 py-10 md:py-0">
                <h2 className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">
                  Our Vision
                </h2>
                <p className="2xl:text-4xl text-2xl font-semibold tracking-tight leading-[130%]">
                  To be a globally recognized techno-management hub of knowledge and
                  innovation, bridging the gap between technology, research, management,
                  and publishing while fostering academic excellence, leadership, and
                  real-world impact.
                </p>
              </div>
            </div>

            {/* Mission stack (scrollable right or below on mobile) */}
            <div className="md:w-1/2 w-full mt-10 md:mt-0">
              {projects.map((project, i) => {
                const targetScale = 1 - (projects.length - i) * 0.05;
                return (
                  <Card
                    key={`p_${i}`}
                    i={i}
                    url={project?.link}
                    src={project?.src}
                    title={project?.title}
                    color={project?.color}
                    description={project?.description}
                    progress={scrollYProgress}
                    range={[i * 0.25, 1]}
                    targetScale={targetScale}
                  />
                );
              })}
            </div>
          </div>
        </section>
      </main>
    </ReactLenis>
  );
}

interface CardProps {
  i: number;
  title: string;
  description: string;
  src: string;
  url: string;
  color: string;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}

export const Card: React.FC<CardProps> = ({
  i,
  title,
  description,
  url,
  color,
  progress,
  range,
  targetScale,
}) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start'],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="h-[80vh] md:h-screen flex items-center justify-center sticky top-0"
    >
      <motion.div
        style={{
          backgroundColor: color,
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className="flex flex-col relative -top-[25%] h-[400px] md:h-[450px] w-full rounded-md lg:p-10 sm:p-4 p-2 origin-top"
      >
        <h2 className="text-2xl text-center font-semibold">{title}</h2>
        <div className="flex flex-col md:flex-row h-full mt-5 gap-6 md:gap-10">
          <div className="md:w-[40%] w-full relative md:top-[10%]">
            <p className="text-sm">{description}</p>
            <span className="flex items-center gap-2 pt-2">
              <a href="#" target="_blank" className="underline cursor-pointer">
                Learn More
              </a>
              <svg
                width="22"
                height="12"
                viewBox="0 0 22 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.5303 6.53033C21.8232 6.23744 21.8232 5.76256 21.5303 5.46967L16.7574 0.696699C16.4645 0.403806 15.9896 0.403806 15.6967 0.696699C15.4038 0.989592 15.4038 1.46447 15.6967 1.75736L19.9393 6L15.6967 10.2426C15.4038 10.5355 15.4038 11.0104 15.6967 11.3033C15.9896 11.5962 16.4645 11.5962 16.7574 11.3033L21.5303 6.53033ZM0 6.75L21 6.75V5.25L0 5.25L0 6.75Z"
                  fill="black"
                />
              </svg>
            </span>
          </div>

          <div className="relative md:w-[60%] w-full h-[200px] md:h-full rounded-lg overflow-hidden">
            <motion.div className="w-full h-full" style={{ scale: imageScale }}>
              <Image src={url} fill className="object-cover" alt="" />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
