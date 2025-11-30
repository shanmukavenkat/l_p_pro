"use client";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { Globe2 } from "lucide-react";

export default function AREESSTimeline() {
  const data = [
    {
      title: "About Us",
      content: (
        <p className="text-slate-700 leading-relaxed">
          ARESS publishes scholarly work deepening understanding of economic systems and social development.
          It provides a platform for evidence-based research informing policy and progress, supporting interdisciplinary
          studies across economics, governance, and social sciences.
        </p>
      ),
    },
    {
      title: "Vision",
      content: (
        <p className="text-slate-700 leading-relaxed">
          To emerge as a leading platform empowering research in economics and social sciences,
          advancing evidence-based policy, development, and societal well-being.
        </p>
      ),
    },
    {
      title: "Mission",
      content: (
        <ul className="list-disc pl-5 text-slate-700">
          <li>Foster interdisciplinary research addressing economic and social challenges.</li>
          <li>Encourage publications contributing to policy and societal progress.</li>
          <li>Support equitable, human-centric research.</li>
          <li>Promote global dialogue on socio-economic systems and trends.</li>
        </ul>
      ),
    },
    {
      title: "Objectives",
      content: (
        <ul className="list-disc pl-5 text-slate-700">
          <li>Publish research in economics, sociology, and policy.</li>
          <li>Encourage comparative, empirical research supporting decision-making.</li>
          <li>Promote studies contributing to inclusive growth and social innovation.</li>
          <li>Support young researchers addressing inequality and governance.</li>
          <li>Facilitate global collaboration among social scientists.</li>
        </ul>
      ),
    },
    {
      title: "Aims & Scope",
      content: (
        <div className="text-slate-700 leading-relaxed">
          <ul className="list-disc pl-5">
            <li>Micro, Macro & Development Economics</li>
            <li>Public Policy, Governance & Sociology</li>
            <li>Education, Health & Social Development</li>
            <li>Environmental Economics & Sustainable Growth</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Editorial Message",
      content: (
        <p className="text-slate-700 leading-relaxed">
          The ARESS section supports interdisciplinary, evidence-based research
          advancing socio-economic understanding and policy-making for sustainable development.
        </p>
      ),
    },
  ];

  return (
    <Timeline
      data={data}
      title="Advanced Research in Economics & Social Sciences (ARESS)"
      description="Empowering Evidence-Based Societal Research"
      icon={<Globe2 className="w-12 h-12 text-emerald-600" />}
    />
  );
}
