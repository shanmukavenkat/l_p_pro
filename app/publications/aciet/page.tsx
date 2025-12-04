"use client";
import React from "react";
import NavigationPage from "@/components/Home/nav/page";
import FooterSection from "@/components/Home/FooterSection";
import Link from "next/link";
import Image from "next/image";
export default function ACIETPage() {
  return (
    <>
      <NavigationPage />
      <section className="py-20 px-6 bg-linear-to-b from-neutral-50 to-white border-b border-gray-300">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-2">
            Advanced Computational Intelligence & Emerging Technologies (ACIET)
          </h1>
          <p className="text-center text-lg text-gray-600 italic mb-12">
            “Pioneering Intelligence, Shaping the Future”
          </p>

          <div className="flex flex-col lg:flex-row gap-10 items-start">
            <div className="flex-[0.6] flex justify-center">
              <Image src="/Aciet.png" alt="Journal cover for Advanced Computational Intelligence & Emerging Technologies, ACIET. The cover features an abstract design with interconnected lines and glowing nodes set against a dark background, conveying themes of advanced technology and digital networks."
          width={300}
          height={400}
          className="object-cover rounded-lg shadow-xl border"
          priority
          />
            </div>

            <div className="flex-[1.5] bg-white p-6 md:p-8 rounded-xl shadow-inner border max-h-[550px] overflow-y-auto space-y-6 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
              <Section title="About Us">
                The ACIET section focuses on advancing research in Artificial Intelligence, Machine Learning, and next-generation computational systems integrating digital and intelligent technologies.
              </Section>
              <Section title="Vision">
                To be a global catalyst advancing intelligent technologies fostering innovation, computational excellence, and digital transformation.
              </Section>
              <ListSection title="Mission" items={[
                "Publish high-quality research expanding AI, ML, and data science.",
                "Encourage interdisciplinary collaboration among academia and industry.",
                "Enable scholars to explore futuristic, real-world solutions.",
              ]}/>
              <ListSection title="Objectives" items={[
                "Facilitate global dissemination of AI and computational research.",
                "Support innovation in automation, robotics, IoT, and cybersecurity.",
                "Promote ethical, responsible applications of computational intelligence.",
              ]}/>
              <ListSection title="Aims" items={[
                "Publish research advancing AI, ML, and intelligent systems.",
                "Support interdisciplinary innovation solving real-world problems.",
              ]}/>
              <Section title="Scope">
                AI, ML, Deep Learning, Data Science, Computer Vision, NLP, IoT, Cloud, Edge, Cybersecurity, Quantum Computing.
              </Section>
              <Section title="Editorial Message">
                ACIET is dedicated to research that advances AI and intelligent technologies driving the future of automation and digital systems.
              </Section>
            </div>
          </div>
        </div>
            <Buttons/>
      </section>
      <FooterSection />
    </>
  );
}
const Section = ({ title, children }: any) => (
  <div><h2 className="text-2xl font-semibold text-gray-900 mb-2">{title}</h2><p className="text-gray-700 leading-relaxed">{children}</p></div>
);
const ListSection = ({ title, items }: any) => (
  <div><h2 className="text-2xl font-semibold text-gray-900 mb-2">{title}</h2><ul className="list-decimal list-inside text-gray-700 leading-relaxed space-y-1">{items.map((i: string, idx: number) => <li key={idx}>{i}</li>)}</ul></div>
);
const Buttons = () => (
  <div className="flex flex-wrap pl-20 justify-center gap-4 pt-6">
    <button className="bg-gray-900 text-white px-6 py-2 rounded-md hover:bg-gray-700">Editorial Board</button>
    <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-500">Journal Submission</button>
    <Link href="/publications/explore">
      <button className="bg-gray-200 text-gray-800 px-6 py-2 rounded-md hover:bg-gray-300">← Back to Journals</button>
    </Link>
  </div>
);
