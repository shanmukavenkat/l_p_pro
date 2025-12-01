"use client";

import NavigationPage from "@/components/Home/nav/page";
import FooterSection from "@/components/Home/FooterSection";
import GJPIRTimeline from "@/components/Home/ParentJounrnals/GJPIRTimeline";

export default function Page() {
  return (
    <main className="min-h-screen bg-white ">
     
       <NavigationPage />
           <GJPIRTimeline />
            <FooterSection/>
    </main>
  );
}