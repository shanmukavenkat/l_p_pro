"use client";

import React from "react";
import NavigationPage from "@/components/Home/nav/page";
import FooterSection from "@/components/Home/FooterSection";
import Link from "next/link";

export default function ExploreJournalsPage() {
  const journals = [
    {
        Id: 1,
      title: "Global Journal for Progressive Innovation & Research (GJPIR)",
      description:
        "Explore the diverse research and innovative studies published under GJPIR.",
      color: "bg-sky-600",
      path: "/publications/gjpir",
      image:"Gjpir.png"
    },
    {
      Id: 2,
      title: "Advances in Computer & Information Engineering Technology (ACIET)",
      description:
        "Dive into advanced studies and innovations in computing and information technologies.",
      color: "bg-purple-600",
      path: "/publications/aciet",
      image:"Aciet.png"
    },
    {
      Id: 3,
      title: "Center for Innovative Management Studies (CIMS)",
      description:
        "Discover pioneering research in management, leadership, and innovation strategies.",
      color: "bg-yellow-500",
      path: "/publications/cims",
      image:"Cimms.png"
    },
    {
      Id: 4,
      title: "Advanced Research in Economics & Social Sciences (ARESS)",
      description:
        "Engage with impactful research and insights in economics and social sciences.",
      color: "bg-emerald-600",
      path: "/publications/aress",
      image:"Aress.png"
    },
    {
      Id: 5,
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
      <NavigationPage />
      <section className="py-20 px-6 bg-neutral-50 border-b border-gray-300">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-8 text-gray-900">
            Our Journals
          </h1>
          <p className="text-lg text-gray-700 mb-12">
            Explore our peer-reviewed open-access journals in techno-management
            and social sciences.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            {journals.map((journal) => (
                
              <Link key={journal.Id} href={journal.path}>
                 <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {journal.title}
                    </h3>
                <div className="cursor-pointer bg-white shadow-md rounded-xl  hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <img
                    src={journal.image}
                    alt={journal.title}
                    className="w-full h-60 object-cover"
                  />
                  <div className="p-4">
                   
                   
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12">
            <Link href="/publications">
              <button className="bg-gray-200 text-gray-800 px-6 py-2 rounded-md hover:bg-gray-300 transition">
                ← Back to Publications
              </button>
            </Link>
          </div>
        </div>
      </section>
      <FooterSection />
    </>
  );
}
