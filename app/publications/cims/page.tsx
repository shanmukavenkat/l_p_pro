"use client";
import React from "react";
import NavigationPage from "@/components/Home/nav/page";
import FooterSection from "@/components/Home/FooterSection";
import Link from "next/link";

export default function CIMSPage() {
  return (
    <>
      <NavigationPage />
      <section className="py-20 px-6 bg-linear-to-b from-neutral-50 to-white border-b border-gray-300">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-2">
            Center for Innovative Management Studies (CIMS)
          </h1>
          <p className="text-center text-lg text-gray-600 italic mb-12">
            “Bridging Innovation and Management Excellence”
          </p>

          <div className="flex flex-col lg:flex-row gap-10 items-start">
            <div className="flex-[0.6] flex justify-center">
              <img src="/Cimms.png" alt="CIMS Cover" className="w-[240px] h-[320px] object-cover rounded-lg shadow-md border"/>
            </div>

            <div className="flex-[1.5] bg-white p-6 md:p-8 rounded-xl shadow-inner border max-h-[550px] overflow-y-auto space-y-6 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
              <Section title="About Us">
                CIMS aims to advance management knowledge by promoting strategic, analytical, and innovative studies enhancing leadership and sustainability in business practices.
              </Section>
              <Section title="Vision">
                To become a leading global platform that advances modern management knowledge, innovative business practices, and leadership excellence.
              </Section>
              <ListSection title="Mission" items={[
                "Promote impactful, practice-oriented management studies.",
                "Bridge academia and industry through research collaboration.",
                "Support analytics-driven, sustainable business innovation.",
              ]}/>
              <ListSection title="Objectives" items={[
                "Publish research in strategy, operations, and management trends.",
                "Facilitate global collaboration among management experts.",
                "Promote responsible and ethical leadership research.",
              ]}/>
              <ListSection title="Aims" items={[
                "Strengthen modern management scholarship and innovation.",
                "Bridge theory with real-world managerial practice.",
              ]}/>
              <Section title="Scope">
                Strategic Management, Operations, Analytics, Entrepreneurship, Governance, Finance, FinTech, Sustainability.
              </Section>
             
             
            </div>
          </div>
           <Buttons/>
        </div>
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
