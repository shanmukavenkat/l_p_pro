"use client";

import React from "react";
import NavigationPage from "@/components/Home/nav/page";
import FooterSection from "@/components/Home/FooterSection";
import Link from "next/link";
export default function PublicationsPage() {
  return (
    <>
      <NavigationPage showLogoName={true}
      logoName="Lurnexa" />
          <section className="py-20 px-6 bg-linear-to-b from-neutral-50 to-white border-b border-gray-300 text-center">
             <div className="max-w-7xl mx-auto">
               <h1 className="text-2xl md:text-2xl font-bold text-center text-gray-900 mb-2">
                 Global Journal for Progressive Innovation & Research (GJPIR)
               </h1>
               <p className="text-center text-lg text-gray-600 italic mb-12">
                 “Integrating Knowledge, Inspiring Progress”
               </p>
     
               <div className="flex flex-col lg:flex-row gap-10 items-start">
                 <div className="flex-[0.6] flex justify-center">
                   <img
                     src="/Gjpir.png"
                     alt="GJPIR Cover"
                     className="w-[520px] h-[500px] object-cover rounded-lg shadow-md border"
                   />
                 </div>
     
                 <div className="flex-[1.5] bg-white p-6 md:p-8 rounded-xl shadow-inner border max-h-[550px] overflow-y-auto space-y-6 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100 text-start">
                   <Section title="About Us">
                     The Global Journal for Progressive Innovation & Research (GJPIR) unites researchers from technology, management, economics, social sciences, and engineering through its four divisions: ACIET, CIMS, ARESS, and IAEES. It promotes interdisciplinary excellence and sustainable innovation through peer-reviewed research.
                   </Section>
     
                   <Section title="Vision">
                     To evolve as a dependable and respected multidisciplinary research journal contributing to innovation and sustainable advancement across diverse fields.
                   </Section>
     
                   <ListSection title="Mission" items={[
                     "Publish quality research reflecting originality and integrity.",
                     "Encourage collaboration among multiple disciplines.",
                     "Address emerging global concerns through evidence-based studies.",
                     "Maintain transparent peer-review and ethical publication standards.",
                   ]}/>
     
                   <ListSection title="Objectives" items={[
                     "Foster interdisciplinary collaboration.",
                     "Encourage innovation linking theory with practice.",
                     "Promote ethical, socially relevant research.",
                     "Strengthen academic and industrial connections globally.",
                   ]}/>
     
                   <ListSection title="Aims" items={[
                     "Unite impactful research that drives innovation and societal progress.",
                     "Encourage studies connecting diverse disciplines with real-world application.",
                     "Publish evidence-based, forward-looking studies.",
                   ]}/>
     
                   <Section title="Scope">
                     Technology, Management, Economics, Social Sciences, Electrical and Electronics Engineering.
                   </Section>
     
                   <Section title="Editorial Message">
                     GJPIR provides a trusted academic space for innovative, interdisciplinary research fostering scientific and societal progress.
                   </Section>
     
                  
                 </div>
               </div>
              
             </div>
                <Link href="/publications/explore">
                <button className="mt-6 bg-blue-600   hover:bg-blue-500 text-white px-8 py-3 rounded-md font-semibold transition">
                  Explore Journals
                </button>
              </Link>
           </section>
          
           <FooterSection />
         </>
       );
     }
     
     function Section({ title, children }: any) {
       return (
         <div>
           <h2 className="text-2xl font-semibold text-gray-900 mb-2">{title}</h2>
           <p className="text-gray-700 leading-relaxed">{children}</p>
         </div>
       );
     }
 function ListSection({ title, items }: any) {
   return (
     <div>
       <h2 className="text-2xl font-semibold text-gray-900 mb-2">{title}</h2>
       <ul className="list-decimal list-inside text-gray-700 leading-relaxed space-y-1">
         {items.map((i: string, idx: number) => <li key={idx}>{i}</li>)}
       </ul>
     </div>
   );
 }


/* <div className="flex-1 text-start lg:text-left space-y-6">
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
            </div> */