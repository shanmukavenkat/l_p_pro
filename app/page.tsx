"use client";

import { useEffect, useState } from "react";
import HeroSection from "@/components/Home/HeroSection";
import VisionMission from "@/components/Home/VisionMission";
import CoreObjectives from "@/components/Home/CoreObjectives";
import WhoWeAre from "@/components/Home/WhoWeAre";
import FooterSection from "@/components/Home/FooterSection";
import StaggeredMenu from "@/components/StaggeredMenu";
import LeadershipSection from "@/components/Home/LeadershipSection";

const SECTION_IDS = ["hero", "vision", "objectives", "who-we-are", "leadership", "contact"];
const menuItems = [
    { label: "Home", ariaLabel: "Go to home page", link: "/" },
  { label: "About Us", ariaLabel: "Learn about us", link: "/" },
  { label: "Publications", ariaLabel: "View our publications", link: "/" },
  { label: "Text Books", ariaLabel: "Explore our text books", link: "/" },
  { label: "Case Center", ariaLabel: "Browse our case center", link: "/" },
  { label: "Join Editorial Board", ariaLabel: "Apply to join the editorial board", link: "/" },
  { label: "Contact", ariaLabel: "Get in touch with us", link: "/" },
  { label: "Login / Sign up", ariaLabel: "Access your account or sign up", link: "/" }
];



export default function Home() {
  const [activeSection, setActiveSection] = useState<string>("hero");

  // Smooth scroll when nav item clicked
  const handleNavClick = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // Track active section with IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0));

        if (visibleSections.length > 0) {
          const id = visibleSections[0].target.id;
          if (SECTION_IDS.includes(id) && id !== activeSection) {
            setActiveSection(id);
          }
        }
      },
      {
        threshold: 0.4,
        rootMargin: "-20% 0px -20% 0px",
      }
    );

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [activeSection]);

  return (
    <>
      <div className="min-h-screen  text-slate-900">
        
        <StaggeredMenu
          position="right"
          items={menuItems}
          displayItemNumbering = {false}
          menuButtonColor="#000"
          openMenuButtonColor="#000"
          changeMenuColorOnOpen={true}
          colors={['#B19EEF', '#5227FF']}
          logoUrl="/path-to-your-logo.svg"
          accentColor="#ff6b6b"
          isFixed={true}
          // keep it fixed
        />

        <HeroSection />
        <VisionMission />
        <CoreObjectives />
        <WhoWeAre />
        <LeadershipSection />
        <FooterSection />
      </div>
    </>
  );
}
