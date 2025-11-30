"use client";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { BookOpen } from "lucide-react";

export default function GJPIRTimeline() {
  const data = [
    {
      title: "About Us",
      content: (
        <div className="text-slate-700 leading-relaxed space-y-3">
          <p>
            The <span className="bg-yellow-100 font-semibold">Global Journal for Progressive Innovation & Research (GJPIR)</span> is
            established as a unified platform for researchers working across technology, management,
            economics, social sciences, and engineering.
          </p>
          <p>
            The journal integrates four specialized sections—ACIET, CIMS, ARESS, and IAEES—each dedicated to
            a distinct domain of research, yet collectively supporting a wide spectrum of academic inquiry.
          </p>
          <p>
            We aim to publish work that carries clarity, relevance, and long-term value to the research
            community. GJPIR encourages disciplinary and cross-disciplinary studies that address both current
            challenges and future possibilities.
          </p>
          <p>
            Through transparent review processes and strong academic ethics, GJPIR ensures the reliability and
            integrity of every published contribution. Our goal is to strengthen research culture, promote
            dialogue, and support knowledge that impacts institutions, industries, and society.
          </p>
        </div>
      ),
    },

    {
      title: "Vision",
      content: (
        <p className="text-slate-700 leading-relaxed">
          To evolve as a dependable and respected multidisciplinary research journal that contributes to
          innovation, knowledge building, and sustainable advancement across diverse fields of study.
        </p>
      ),
    },

    {
      title: "Mission",
      content: (
        <ul className="list-disc pl-5 text-slate-700">
          <li>To publish quality research that reflects originality, relevance, and academic integrity.</li>
          <li>To encourage collaboration and knowledge exchange among different disciplines.</li>
          <li>To support research addressing practical issues and emerging global concerns.</li>
          <li>To uphold an unbiased and transparent review system for all submissions.</li>
          <li>To provide a platform that promotes responsible and impactful scholarship.</li>
        </ul>
      ),
    },

    {
      title: "Objectives",
      content: (
        <ul className="list-disc pl-5 text-slate-700">
          <li>Create a global space for collaboration across diverse academic domains.</li>
          <li>Support ideas that bring clarity to theory and value to practice.</li>
          <li>Promote interdisciplinary studies linking technology, management, and social sciences.</li>
          <li>Encourage ethical, inclusive, and socially relevant research.</li>
          <li>Strengthen academic and professional connections worldwide through quality publications.</li>
        </ul>
      ),
    },

    {
      title: "Aim & Scope",
      content: (
        <div className="text-slate-700 leading-relaxed space-y-3">
          <p>
            <span className="bg-yellow-100 font-semibold">Aims</span>
          </p>
          <ul className="list-disc pl-5">
            <li>To promote innovation, scientific understanding, and societal progress.</li>
            <li>To connect multiple disciplines through practical and evidence-based insights.</li>
            <li>To publish research aligned with emerging trends and long-term developmental needs.</li>
            <li>To support thoughtful, well-structured, and academically valuable contributions.</li>
          </ul>

          <p className="mt-4">
            <span className="bg-yellow-100 font-semibold">Scope</span>
          </p>
          <ul className="list-disc pl-5">
            <li>
              <strong>Computational & Emerging Technologies:</strong> AI, ML, data-driven modeling, robotics,
              automation, cybersecurity, IoT, and digital innovation.
            </li>
            <li>
              <strong>Management Studies:</strong> Strategic management, operations, analytics, entrepreneurship,
              governance, sustainability, and financial systems.
            </li>
            <li>
              <strong>Economics & Social Sciences:</strong> Economic theory, policy, governance, behavioral sciences,
              and sustainable development.
            </li>
            <li>
              <strong>Electrical & Electronics Engineering:</strong> Power systems, renewable energy, embedded
              systems, VLSI, automation, and intelligent hardware systems.
            </li>
          </ul>
        </div>
      ),
    },

    {
      title: "Editorial Message",
      content: (
        <div className="text-slate-700 leading-relaxed space-y-3">
          <p>
            The <span className="bg-yellow-100 font-semibold">Global Journal for Progressive Innovation & Research (GJPIR)</span> was
            created to provide a reliable academic space for sharing and preserving meaningful research.
          </p>
          <p>
            Each section—ACIET, CIMS, ARESS, and IAEES—represents a vital domain, yet collectively reflects
            a broader goal: to support research that contributes to technological growth, organizational
            improvement, economic stability, and social development.
          </p>
          <p>
            We believe responsible research shapes future progress. Our editorial process ensures fairness,
            quality, and integrity, allowing authors to present their work with confidence.
          </p>
          <p>
            We welcome contributions that are thoughtful, well-structured, and academically sound, aiming to
            make GJPIR a valuable resource for scholars, educators, professionals, and institutions committed
            to impactful knowledge.
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="relative w-full overflow-clip">
      <Timeline
        data={data}
        title="Global Journal for Progressive Innovation & Research (GJPIR)"
        description="Connecting Knowledge, Fostering Innovation, and Inspiring Global Impact"
        icon={<BookOpen className="w-12 h-12 text-indigo-600" />}
      />
    </div>
  );
}
