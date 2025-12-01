"use client";

import React from "react";
import PublicationCard from "@/components/PublicationCard";
import StaggeredMenu from "@/components/StaggeredMenu";
import NavigationPage from "@/components/Home/nav/page";
import FooterSection from "@/components/Home/FooterSection";

export default function PublicationsPage() {
  const publications = [
    {
      title: "Global Journal for Progressive Innovation & Research (GJPIR)",
      description:
        "Explore the diverse research and innovative studies published under GJPIR.",
      color: "bg-sky-600",
      path: "/publications/gjpir",
      image:"Gjpir.png"
    },
    {
      title: "Advances in Computer & Information Engineering Technology (ACIET)",
      description:
        "Dive into advanced studies and innovations in computing and information technologies.",
      color: "bg-purple-600",
      path: "/publications/aciet",
      image:"Aciet.png"
    },
    {
      title: "Center for Innovative Management Studies (CIMS)",
      description:
        "Discover pioneering research in management, leadership, and innovation strategies.",
      color: "bg-yellow-500",
      path: "/publications/cims",
      image:"Cimms.png"
    },
    {
      title: "Advanced Research in Economics & Social Sciences (ARESS)",
      description:
        "Engage with impactful research and insights in economics and social sciences.",
      color: "bg-emerald-600",
      path: "/publications/aress",
      image:"Aress.png"
    },
    {
      title: "Institute of Advanced Electrical & Electronics Studies (IAEES)",
      description:
        "Explore advancements and applied research in electrical and electronics engineering.",
      color: "bg-indigo-600",
      path: "/publications/iaees",
      image:"iaees.png"
    },
  ];

  return (
    <>
    <NavigationPage/>
     <section className="py-24 px-6  border-b border-gray-300">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-6 leading-tight">Our Journals</h1>
        <p className="text-lg text-gray-800 leading-relaxed">
          Discover our family of peer-reviewed open-access journals in techno-management and social sciences.
        </p>
      </div>
    </section>
  <PublicationCard data={publications} />
<FooterSection />
</>
);
}
