"use client";

import NavigationPage from "@/components/Home/nav/page";
import FooterSection from "@/components/Home/FooterSection";
import IAEESTimeline from "@/components/Home/ParentJounrnals/IAEESTimeline";

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      <NavigationPage />
      <IAEESTimeline />
      <FooterSection/>
    </main>
  );
}
