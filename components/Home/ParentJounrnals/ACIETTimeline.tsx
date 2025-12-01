"use client";
import React from "react";
import { FileDown, Send, Cpu } from "lucide-react";
import Link from "next/link";
import { Timeline } from "@/components/ui/timeline";

export function ACIETTimeline() {
  const data = [
    {
      title: "About Us",
      content: (
        <div>
          <p className="text-slate-700 leading-relaxed">
            <span className="bg-yellow-200">The ACIET section </span>
            focuses on advancing research in artificial intelligence, machine
            learning, and next-generation computing. We publish innovative
            studies that address real-world technological challenges through
            intelligent systems. Our aim is to promote interdisciplinary
            research that integrates AI with emerging digital technologies. The
            section brings together global scholars, researchers, and industry
            professionals striving to contribute to the future of smart,
            automated, and data-driven innovation.
          </p>
        </div>
      ),
    },

    {
      title: "Vision",
      content: (
        <div>
          <p className="text-slate-700 leading-relaxed">
            <span className="bg-yellow-200">Vision</span> To be a global
            catalyst advancing intelligent technologies by fostering innovation,
            computational excellence, and interdisciplinary breakthroughs that
            redefine the future of digital transformation.
          </p>
        </div>
      ),
    },

    {
      title: "Mission",
      content: (
        <div>
          <ul>
            <li>
              <span className="bg-yellow-200">Mission</span> To publish
              high-quality, peer-reviewed research that expands the frontiers of
              AI, ML, data science, and emerging digital technologies.
            </li>
            <li>
              To encourage interdisciplinary collaboration among academia,
              research institutions, and industry.
            </li>
            <li>
              To enable scholars to explore futuristic solutions addressing
              real-world challenges.
            </li>
            <li>
              To promote ethical, responsible, and impactful applications of
              computational intelligence.
            </li>
          </ul>
        </div>
      ),
    },

    {
      title: "Objectives",
      content: (
        <div>
          <ul>
            <li>
              <span className="bg-yellow-200">Objectives</span> Facilitate
              global dissemination of research in AI, neural networks,
              computational modeling, and emerging tech.
            </li>
            <li>
              Provide a scientific platform for breakthrough innovations in
              automation, robotics, cybersecurity, and IoT.
            </li>
            <li>
              Support young researchers and innovators through inclusive and
              transparent publication processes.
            </li>
            <li>
              Promote standards of excellence, originality, and scientific rigor
              in all published works.
            </li>
            <li>
              Build a global research network that supports future-driven
              technological progress.
            </li>
          </ul>
        </div>
      ),
    },

    {
      title: "Aims",
      content: (
        <div>
          <p className="text-slate-700 leading-relaxed">
            <span className="bg-yellow-200">The aim of ACIET</span> is to
            advance research and innovation in computational intelligence by
            encouraging contributions that combine scientific rigor with
            real-world relevance. We seek to provide a trusted platform for
            sharing high-impact discoveries that shape the evolution of smart
            technologies.
          </p>
        </div>
      ),
    },

    {
      title: "Scope",
      content: (
        <div>
          <ul>
            <span className="bg-yellow-200">Scope</span>
            <li>Artificial Intelligence, Machine Learning, Deep Learning</li>
            <li>Data Science, Big Data, and Predictive Analytics</li>
            <li>Robotics, Automation, and Intelligent Systems</li>
            <li>Cybersecurity, IoT, and Smart Computing</li>
            <li>Computational Modeling and Neural Networks</li>
          </ul>
        </div>
      ),
    },

    {
      title: "Editorial Message",
      content: (
        <div>
          <p className="text-slate-700 leading-relaxed">
            <span className="bg-yellow-200">The ACIET section</span> is
            dedicated to advancing research in artificial intelligence and
            cutting-edge computational technologies. As the world moves toward
            intelligent automation, our focus is to publish work that offers new
            methods, models, and solutions addressing real-world challenges. We
            welcome contributions that push the boundaries of AI, strengthen
            interdisciplinary collaboration, and support the global
            transformation toward smarter technologies.
          </p>

          <p className="mt-4 text-slate-700 leading-relaxed">
            Our goal is to ensure that every published study adds meaningful
            value to the scientific community and contributes to the future of
            intelligent systems.
          </p>
        </div>
      ),
    },

    {
      title: "Editorial Board",
      content: (
        <div>
          Details of the editorial board members will be updated soon....
        </div>
      ),
    },

    {
      title: "Submission Guidelines",
      content: (
        <div>
          <ul className="list-disc text-slate-700 text-sm">
            <li>
              Manuscripts should be original and not under review in any other
              journal.
            </li>
            <li>
              All submissions must follow standard formatting (Times New Roman,
              12 pt, double-spaced).
            </li>
            <li>
              Each paper should include an abstract, keywords, introduction,
              results, and conclusion.
            </li>
            <li>
              References must follow APA style. Ensure accuracy and completeness.
            </li>
            <li>Papers can be submitted through the online submission portal.</li>
          </ul>

          <div className="flex gap-2 mt-1 mb-3">
            <Link
              href="https://example.com/submit-aciet"
              className="flex items-center gap-4 px-5 py-3 bg-sky-600 hover:bg-sky-700 text-white text-sm rounded-lg transition"
            >
              <Send size={18} />
              Submit Paper
            </Link>

            <button
              className="flex items-center gap-4 px-5 py-3 bg-slate-200 hover:bg-slate-300 text-slate-800 text-sm rounded-lg transition"
              onClick={() => alert("PDF Download coming soon!")}
            >
              <FileDown size={18} />
              Download PDF
            </button>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="relative w-full overflow-clip">
      <Timeline
        data={data}
        title="Advanced Computational Intelligence & Emerging Technologies (ACIET)"
        description="“Pioneering Intelligence, Shaping the Future”"
        icon={<Cpu className="w-12 h-12 text-sky-600" />}
      />
    </div>
  );
}

export { Timeline };
