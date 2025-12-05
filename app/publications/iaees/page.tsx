"use client";
import React from "react";
import NavigationPage from "@/components/Home/nav/page";
import FooterSection from "@/components/Home/FooterSection";
import Link from "next/link";

export default function IAEESPage() {
  return (
    <>
      <NavigationPage />
      <section className="py-20 px-6 bg-gradient-to-b from-neutral-50 to-white border-b border-gray-300">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-2">
            Institute of Advanced Electrical & Electronics Studies (IAEES)
          </h1>
          <p className="text-center text-lg text-gray-600 italic mb-12">
            “Empowering Innovation in Electrical and Electronic Frontiers”
          </p>

          <div className="flex flex-col lg:flex-row gap-10 items-start">
            {/* Left Image */}
            <div className="flex-[0.6] flex justify-center">
              <img
                src="/iaees.png"
                alt="IAEES Cover"
                className="w-[240px] h-[320px] object-cover rounded-lg shadow-md border border-gray-200"
              />
            </div>

            {/* Right Content */}
            <div className="flex-[1.5] bg-white p-6 md:p-8 rounded-xl shadow-inner border border-gray-200 max-h-[550px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100 space-y-6">
              <Section title="About Us">
                IAEES promotes innovation in electrical and electronics engineering focusing on power systems, automation, embedded technologies, and energy-efficient systems.
              </Section>

              <Section title="Vision">
                To be a globally recognized hub for pioneering research in EEE driving intelligent, sustainable, and high-performance solutions.
              </Section>

              <ListSection title="Mission" items={[
                "Publish research advancing power, electronics, and automation.",
                "Encourage innovation for energy-efficient and intelligent systems.",
                "Promote collaboration between researchers and industry experts.",
              ]}/>

              <ListSection title="Objectives" items={[
                "Support research in EEE, circuits, automation, and IoT.",
                "Promote standards of originality and technical rigor.",
                "Facilitate interdisciplinary integration with AI and robotics.",
              ]}/>

              <ListSection title="Aims" items={[
                "Advance intelligent and sustainable EEE innovations.",
                "Promote global collaboration in electrical and electronic research.",
              ]}/>

              <Section title="Scope">
                Power Systems, Renewable Energy, VLSI, Embedded Systems, Automation, IoT, Control Systems, Smart Grids, Semiconductors.
              </Section>

              <Section title="Editorial Message">
                IAEES drives research excellence in electrical and electronic innovation fostering smarter and sustainable engineering solutions.
              </Section>

             
            </div>
          </div>
           <Buttons />
        </div>
      </section>
      <FooterSection />
    </>
  );
}

const Section = ({ title, children }: any) => (
  <div>
    <h2 className="text-2xl font-semibold text-gray-900 mb-2">{title}</h2>
    <p className="text-gray-700 leading-relaxed">{children}</p>
  </div>
);
const ListSection = ({ title, items }: any) => (
  <div>
    <h2 className="text-2xl font-semibold text-gray-900 mb-2">{title}</h2>
    <ul className="list-decimal list-inside text-gray-700 leading-relaxed space-y-1">
      {items.map((i: string, idx: number) => (
        <li key={idx}>{i}</li>
      ))}
    </ul>
  </div>
);
const Buttons = () => (
  <div className="flex flex-wrap pl-20 justify-center gap-4 pt-6">
    <button className="bg-gray-900 text-white px-6 py-2 rounded-md hover:bg-gray-700 transition-all">
      Editorial Board
    </button>
    <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-500 transition-all">
      Journal Submission
    </button>
    <Link href="/publications/explore">
      <button className="bg-gray-200 text-gray-800 px-6 py-2 rounded-md hover:bg-gray-300 transition-all">
        ← Back to Journals
      </button>
    </Link>
  </div>
);
