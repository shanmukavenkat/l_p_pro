"use client";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { Zap } from "lucide-react";

export default function IAEESTimeline() {
  const data = [
    {
      title: "About Us",
      content: (
        <p className="text-slate-700 leading-relaxed">
          IAEES promotes innovation in electrical and electronics engineering, focusing on power systems,
          automation, and intelligent technologies. The section connects researchers and engineers working
          toward sustainable and efficient solutions for global progress.
        </p>
      ),
    },
    {
      title: "Vision",
      content: (
        <p className="text-slate-700 leading-relaxed">
          To be a globally recognized hub for pioneering research in electrical and electronics engineering,
          driving intelligent, sustainable, and high-performance technologies.
        </p>
      ),
    },
    {
      title: "Mission",
      content: (
        <ul className="list-disc pl-5 text-slate-700">
          <li>Advance research in power systems, electronics, and automation.</li>
          <li>Promote innovation contributing to smarter, safer systems.</li>
          <li>Connect researchers, experts, and academicians globally.</li>
          <li>Encourage sustainable, energy-efficient practices addressing global challenges.</li>
          <li>Promote research in semiconductors, signal processing, and intelligent systems.</li>
        </ul>
      ),
    },
    {
      title: "Objectives",
      content: (
        <ul className="list-disc pl-5 text-slate-700">
          <li>Promote innovations in EEE technologies and automation.</li>
          <li>Support research in IoT, renewable energy, and embedded systems.</li>
          <li>Provide a platform for academic-industry collaboration.</li>
          <li>Encourage young engineers with real-world-focused research.</li>
          <li>Maintain international standards ensuring originality and rigor.</li>
          <li>Integrate electronics with AI, robotics, and communication systems.</li>
        </ul>
      ),
    },
    {
      title: "Aims & Scope",
      content: (
        <ul className="list-disc pl-5 text-slate-700">
          <li>Electrical Engineering, Power Systems & Power Electronics</li>
          <li>Renewable Energy, Smart Grids & Energy Systems</li>
          <li>Electronics, VLSI, Embedded & Digital Systems</li>
          <li>Communication Systems, Signal Processing & Networks</li>
          <li>Control Systems, Automation & Instrumentation</li>
          <li>Robotics, IoT Devices & Cyber-Physical Systems</li>
          <li>Semiconductor Devices & Sensor Technologies</li>
        </ul>
      ),
    },
    {
      title: "Editorial Message",
      content: (
        <p className="text-slate-700 leading-relaxed">
          The IAEES section fosters innovation and excellence in electrical and electronics engineering.
          It supports research integrating automation, IoT, and intelligent systems, addressing global
          technological needs for a smarter, sustainable future.
        </p>
      ),
    },
  ];

  return (
    <Timeline
      data={data}
      title="Institute of Advanced Electrical & Electronics Studies (IAEES)"
      description="Empowering Innovation in Electrical and Electronic Frontiers"
      icon={<Zap className="w-12 h-12 text-rose-600" />}
    />
  );
}
