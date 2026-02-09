"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import NavigationPage from "@/components/Home/nav/page";
import FooterSection from "@/components/Home/FooterSection";

import Upcoming from "@/components/Textbooks/Upcoming";
import EditorialDetails from "@/components/Textbooks/EditorialDetails";
import Manuscript from "@/components/Textbooks/Manuscript";

import { motion, AnimatePresence } from "framer-motion";

/* 🔥 Tab Config (Object Mapping) */
const TABS = [
  {
    key: "upcoming",
    label: "Upcoming",
    component: Upcoming,
    activeClass: "bg-slate-900 text-white",
  },
  {
    key: "editorial",
    label: "Editorial Details",
    component: EditorialDetails,
    activeClass: "bg-white border text-slate-900",
  },
  {
    key: "manuscript",
    label: "Manuscript",
    component: Manuscript,
    activeClass: "bg-indigo-600 text-white",
  },
];

export default function TextbooksPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const defaultTab = searchParams.get("tab") || "upcoming";
  const [activeTab, setActiveTab] = useState(defaultTab);

  /* 🌐 Sync URL */
  useEffect(() => {
    router.replace(`?tab=${activeTab}`);
  }, [activeTab]);

  const ActiveComponent =
    TABS.find((tab) => tab.key === activeTab)?.component || null;

  return (
    <>
      <NavigationPage />

      <div className="mt-20 max-w-7xl mx-auto px-6 py-8">
        {/* 🧠 Tabs */}
        <div className="flex justify-around mb-8">
          {TABS.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`
                px-6 py-3 rounded-xl font-semibold tracking-wide
                transition-all duration-300
                ${
                  activeTab === tab.key
                    ? tab.activeClass
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }
              `}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* 🎬 Animated Content */}
        <AnimatePresence mode="wait">
          {ActiveComponent && (
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <ActiveComponent />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <FooterSection />
    </>
  );
}
