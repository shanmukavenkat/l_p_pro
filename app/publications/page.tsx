"use client";

import React from "react";
import NavigationPage from "@/components/Home/nav/page";
import FooterSection from "@/components/Home/FooterSection";
import Link from "next/link";
import Image from "next/image";
export default function PublicationsPage() {
  return (
    <>
      <NavigationPage />
      <section className="py-10  bg-neutral-50 border-b border-gray-300">
        <div className="max-w-6xl mx-auto">
          {/* Top Section */}
          <div className="flex flex-col lg:flex-row items-center gap-12 mb-1">
            {/* Left Image */}
            <div className="flex-1 flex justify-center">
              <Image
                src="/Logo.png"
                alt="Lurnexa Publications"
                width={400}
                height={300}
                className="w-full max-w-sm rounded-md shadow-md border object-cover"
              />
            </div>

            {/* Right Text */}
            <div className="flex-1 text-start lg:text-left space-y-6">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
                Lurnexa Publications
              </h1>
              <p className="text-lg text-gray-700 leading-relaxed">
                Lurnexa Publications is a leading techno-management hub of
                knowledge and innovation, bridging technology, research, and
                management disciplines. Our peer-reviewed journals aim to
                promote global academic collaboration and dissemination of
                impactful research.
              </p>

              <Link href="/publications/explore">
                <button className="mt-6 bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-md font-semibold transition">
                  Explore Journals
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <FooterSection />
    </>
  );
}
