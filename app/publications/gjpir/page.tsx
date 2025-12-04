"use client";
import React from "react";
import NavigationPage from "@/components/Home/nav/page";
import FooterSection from "@/components/Home/FooterSection";
import Link from "next/link";

export default function GJPIRPage() {
  return (
    <>
      <NavigationPage />
      <section className="py-20 px-6 bg-gradient-to-b from-neutral-50 to-white border-b border-gray-300">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-2">
            Global Journal for Progressive Innovation & Research (GJPIR)
          </h1>
          <p className="text-center text-lg text-gray-600 italic mb-12">
            “Integrating Knowledge, Inspiring Progress”
          </p>

          <div className="flex flex-col lg:flex-row gap-10 items-start">
            <div className="flex-[0.6] flex justify-center">
              <img
                src="/Gjpir.png"
                alt="GJPIR Cover"
                className="w-[240px] h-[320px] object-cover rounded-lg shadow-md border"
              />
            </div>

            <div className="flex-[1.5] bg-white p-6 md:p-8 rounded-xl shadow-inner border max-h-[550px] overflow-y-auto space-y-6 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
              <Section title="About Us">
                The Global Journal for Progressive Innovation & Research (GJPIR) unites researchers from technology, management, economics, social sciences, and engineering through its four divisions: ACIET, CIMS, ARESS, and IAEES. It promotes interdisciplinary excellence and sustainable innovation through peer-reviewed research.
              </Section>

              <Section title="Vision">
                To evolve as a dependable and respected multidisciplinary research journal contributing to innovation and sustainable advancement across diverse fields.
              </Section>

              <ListSection title="Mission" items={[
                "Publish quality research reflecting originality and integrity.",
                "Encourage collaboration among multiple disciplines.",
                "Address emerging global concerns through evidence-based studies.",
                "Maintain transparent peer-review and ethical publication standards.",
              ]}/>

              <ListSection title="Objectives" items={[
                "Foster interdisciplinary collaboration.",
                "Encourage innovation linking theory with practice.",
                "Promote ethical, socially relevant research.",
                "Strengthen academic and industrial connections globally.",
              ]}/>

              <ListSection title="Aims" items={[
                "Unite impactful research that drives innovation and societal progress.",
                "Encourage studies connecting diverse disciplines with real-world application.",
                "Publish evidence-based, forward-looking studies.",
              ]}/>

              <Section title="Scope">
                Technology, Management, Economics, Social Sciences, Electrical and Electronics Engineering.
              </Section>

              <Section title="Editorial Message">
                GJPIR provides a trusted academic space for innovative, interdisciplinary research fostering scientific and societal progress.
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

function Section({ title, children }: any) {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-900 mb-2">{title}</h2>
      <p className="text-gray-700 leading-relaxed">{children}</p>
    </div>
  );
}
function ListSection({ title, items }: any) {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-900 mb-2">{title}</h2>
      <ul className="list-decimal list-inside text-gray-700 leading-relaxed space-y-1">
        {items.map((i: string, idx: number) => <li key={idx}>{i}</li>)}
      </ul>
    </div>
  );
}
function Buttons() {
  return (
    <div className="flex flex-wrap pl-20 justify-center gap-4 pt-6">
      <button className="bg-gray-900 text-white px-6 py-2 rounded-md hover:bg-gray-700">Editorial Board</button>
      <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-500">Journal Submission</button>
      <Link href="/publications/explore">
        <button className="bg-gray-200 text-gray-800 px-6 py-2 rounded-md hover:bg-gray-300">← Back to Journals</button>
      </Link>
    </div>
  );
}
