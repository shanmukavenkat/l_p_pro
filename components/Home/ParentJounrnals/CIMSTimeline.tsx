"use client";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { Briefcase } from "lucide-react";

export default function CIMSTimeline() {
  const data = [
    {
      title: "About Us",
      content: (
        <p className="text-slate-700 leading-relaxed">
          CIMS is dedicated to strengthening modern management knowledge through high-quality research.
          It focuses on strategic, analytical, and innovative approaches that support organizational growth.
          The section encourages studies connecting theory with real-world managerial practice, promoting
          sustainability, ethics, and leadership development.
        </p>
      ),
    },
    {
      title: "Vision",
      content: (
        <p className="text-slate-700 leading-relaxed">
          To become a leading global platform that advances modern management knowledge, innovative business practices,
          and leadership excellence for a rapidly evolving world.
        </p>
      ),
    },
    {
      title: "Mission",
      content: (
        <ul className="list-disc pl-5 text-slate-700">
          <li>Promote research enhancing strategic thinking and innovation.</li>
          <li>Bridge academia and industry through impactful studies.</li>
          <li>Support knowledge creation in analytics and sustainable business models.</li>
          <li>Nurture future leaders through evidence-based research dissemination.</li>
        </ul>
      ),
    },
    {
      title: "Objectives",
      content: (
        <ul className="list-disc pl-5 text-slate-700">
          <li>Publish high-impact studies in finance, operations, and management.</li>
          <li>Encourage research addressing current industry challenges.</li>
          <li>Facilitate global knowledge exchange through collaborations.</li>
          <li>Promote responsible and ethical management practices.</li>
          <li>Develop research that contributes to managerial innovation.</li>
        </ul>
      ),
    },
    {
      title: "Aims & Scope",
      content: (
        <div className="text-slate-700 leading-relaxed">
          <ul className="list-disc pl-5">
            <li>Strategic Management & Organizational Leadership</li>
            <li>Operations, Supply Chain & Logistics</li>
            <li>Analytics & Data-Driven Decision Making</li>
            <li>Innovation, Entrepreneurship & Governance</li>
            <li>Corporate Sustainability & Financial Management</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Editorial Message",
      content: (
        <p className="text-slate-700 leading-relaxed">
          The CIMS section strengthens management scholarship through rigorous, practical, and forward-looking research.
          We focus on studies that enhance performance, address challenges, and promote sustainable and ethical leadership.
        </p>
      ),
    },
  ];

  return (
    <Timeline
      data={data}
      title="Center for Innovative Management Studies (CIMS)"
      description="Bridging Innovation and Management Excellence"
      icon={<Briefcase className="w-12 h-12 text-amber-600" />}
    />
  );
}
