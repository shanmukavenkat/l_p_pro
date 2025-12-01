"use client";

import NavigationPage from "@/components/Home/nav/page";
import FooterSection from "@/components/Home/FooterSection";
import CIMSTimeline from "@/components/Home/ParentJounrnals/CIMSTimeline";

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      <NavigationPage/>
      <CIMSTimeline />
      <FooterSection/>
    </main>
  );
}
