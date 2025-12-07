"use client";
import React from "react";
import NavigationPage from "@/components/Home/nav/page";
import FooterSection from "@/components/Home/FooterSection";
import Link from "next/link";
import Image from "next/image";
export default function ARESSPage() {
  return (
    <>
      <NavigationPage />
      <section className="py-20 px-6 bg-linear-to-b from-neutral-50 to-white border-b border-gray-300">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-2">
            Advanced Research in Economics & Social Sciences (ARESS)
          </h1>
          <p className="text-center text-lg text-gray-600 italic mb-12">
            “Empowering Socio-Economic Transformation”
          </p>

          <div className="flex flex-col lg:flex-row gap-10 items-start">
            {/* Left Image */}
            <div className="flex-[0.6] flex justify-center">
              <Image
                src="/Aress.png"
                alt="ARESS Cover"
                width={240}
                height={320}
                className="object-cover rounded-lg shadow-md border border-gray-200"
              />
            </div>

            {/* Right Content */}
            <div className="flex-[1.5] bg-white p-6 md:p-8 rounded-xl shadow-inner border border-gray-200 max-h-[550px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100 space-y-6">
              <Section title="About Us">
                ARESS focuses on promoting high-quality research in economics and social sciences addressing global socio-economic development and evidence-based policymaking.
              </Section>

              <Section title="Vision">
                To emerge as a leading platform empowering high-quality research advancing policy, development, and societal well-being.
              </Section>

              <ListSection title="Mission" items={[
                "Foster interdisciplinary research addressing socio-economic challenges.",
                "Support research contributing to policy and governance.",
                "Promote equitable, human-centric transformation.",
              ]}/>

              <ListSection title="Objectives" items={[
                "Publish studies in economics, policy, and behavioural sciences.",
                "Encourage empirical research supporting social innovation.",
                "Support collaboration among economists, social scientists, and policymakers.",
              ]}/>

              <ListSection title="Aims" items={[
                "Publish research advancing economic and social development.",
                "Support policy-relevant, data-driven studies.",
              ]}/>

              <Section title="Scope">
                Microeconomics, Macroeconomics, Development Studies, Policy, Sociology, Psychology, Education, Health, Sustainability.
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
