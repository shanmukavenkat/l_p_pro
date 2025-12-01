"use client";

import Link from "next/link";
import NavigationPage from "@/components/Home/nav/page";

import FooterSection from "@/components/Home/FooterSection";
import { title } from "process";

export default function PublicationsPage() {
  const journals = [
    {
      title: "Global Journal for Progressive Innovation & Research",
      acronym: "GJPIR",
      path: "/journals/gjpir",
      color: "bg-sky-600",
    },
    {
      title: "Advances in Computer & Information Engineering Technology",
      acronym: "ACIET",
      path: "/journals/aciet",
      color: "bg-purple-600",
    },
    {
      title: "Center for Innovative Management Studies",
      acronym: "CIMS",
      path: "/journals/cims",
      color: "bg-yellow-500",
    },
    {
      title: "Advanced Research in Economics & Social Sciences",
      acronym: "ARESS",
      path: "/journals/aress",
      color: "bg-emerald-600",
    },
    {
      title: "Institute of Advanced Electrical & Electronics Studies",
      acronym: "IAEES",
      path: "/journals/iaees",
      color: "bg-indigo-600",
    },
  ];

  return (
    <>
     <NavigationPage />
      <main className="min-h-screen bg-white py-16 px-6">
       
        <h1 className="text-3xl font-bold text-center text-slate-800 mb-12">
          Our Research Journals
        </h1>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {journals.map((journal) => (
            <div
              key={journal.acronym}
              className="border border-gray-300 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition bg-white"
            >
              {/* Header */}
              <div
                className={`h-48 ${journal.color} flex items-center justify-center text-white text-2xl font-bold`}
              >
                {journal.acronym}
              </div>

              {/* Content */}
              <div className="p-6 text-center">
                <h3 className="font-semibold text-lg mb-4 text-slate-900">
                  {journal.title}
                </h3>

                <Link
                  href={journal.path}
                  
                  className="text-sky-700 hover:text-sky-900 underline underline-offset-2 transition"
                >
                  View Journal →
                </Link>
                

              </div>
            </div>
          ))}
        </div>
      </main>
      <FooterSection />
    </>
  );
}
