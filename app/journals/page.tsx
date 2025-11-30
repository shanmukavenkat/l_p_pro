"use client";

import { useRouter } from "next/navigation";

interface JournalCardProps {
  title: string;
  description: string;
  acronym: string;
  highlightColor: string;
  basePath: string;
}

export default function JournalGrid() {
  const journals = [
    {
      title: "Global Journal for Progressive Innovation & Research",
      acronym: "GJPIR",
      description:
        "A multidisciplinary platform integrating research across technology, management, economics, social sciences, and engineering to promote innovation and sustainable advancement.",
      highlightColor: "bg-sky-600",
      basepath: "gjpir",
    },
    {
      title: "Advanced Computational Intelligence & Emerging Technologies",
      acronym: "ACIET",
      description:
        "Dedicated to advancing artificial intelligence, machine learning, and digital transformation through interdisciplinary, high-impact computational research.",
      highlightColor: "bg-blue-600",
      basepath: "aciet",
    },
    {
      title: "Center for Innovative Management Studies",
      acronym: "CIMS",
      description:
        "Fostering strategic, analytical, and evidence-based management research that bridges academia and industry with sustainable, ethical leadership.",
      highlightColor: "bg-yellow-500",
      basepath: "cims",
    },
    {
      title: "Advanced Research in Economics & Social Sciences",
      acronym: "ARESS",
      description:
        "Empowering research in economics, public policy, and social development to address real-world challenges and promote equitable growth.",
      highlightColor: "bg-emerald-600",
      basepath: "aress",
    },
    {
      title: "Institute of Advanced Electrical & Electronics Studies",
      acronym: "IAEES",
      description:
        "Advancing research and innovation in electrical, electronics, and communication engineering to power the next generation of intelligent, sustainable technologies.",
      highlightColor: "bg-indigo-600",
      basepath: "iaees",
    },
  ];

  return (
    <section className="py-20 px-6 bg-white border-b border-gray-300">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-center text-slate-800 mb-12">
          Our Research Journals
        </h2>

        {/* Journals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {journals.map((journal) => (
            <JournalCard
              key={journal.acronym}
              title={journal.title}
              description={journal.description}
              acronym={journal.acronym}
              highlightColor={journal.highlightColor}
              basePath={`/journals/${journal.basepath}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function JournalCard({
  title,
  description,
  acronym,
  highlightColor,
  basePath,
}: JournalCardProps) {
  const router = useRouter(); // ✅ use the router instance

  const handleViewJournal = () => {
    router.push(basePath); // ✅ navigate programmatically
  };

  return (
    <div className="border border-gray-300 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition duration-300 bg-white flex flex-col">
      {/* Journal Header */}
      <div
        className={`w-full h-56 ${highlightColor} flex items-center justify-center text-white font-extrabold text-3xl tracking-wide`}
      >
        {acronym}
      </div>

      {/* Journal Details */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-semibold text-lg mb-2 text-slate-900 leading-tight">
          {title}
        </h3>
        <p className="text-sm text-gray-700 mb-6 leading-relaxed flex-1">
          {description}
        </p>

        {/* Action Links */}
        <div className="flex flex-wrap gap-4 text-sm">
          <button
            onClick={handleViewJournal}
            className="text-sky-700 hover:text-sky-900 underline underline-offset-2 transition"
          >
            View Journal
          </button>
        </div>
      </div>
    </div>
  );
}
