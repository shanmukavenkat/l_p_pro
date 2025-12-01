"use client";

import NavigationPage from "@/components/Home/nav/page";
import FooterSection from "@/components/Home/FooterSection";
import ACIETTimeline from "@/components/Home/ParentJounrnals/AREESSTimeline";

export default function Page() {
  return (
    <main className="min-h-screen bg-white ">
      <NavigationPage/>
      <ACIETTimeline />
      <FooterSection/>
    </main>
  );
}
