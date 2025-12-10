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
               <h1 className="mt-3 text-2xl md:text-2xl font-bold text-center text-gray-900 mb-2">
                 Global Journal for Progressive Innovation & Research (GJPIR)
               </h1>
               <p className="text-center text-lg text-gray-600 italic mb-12">
                 “Integrating Knowledge, Inspiring Progress”
                  <br />
                  ISSN:
               </p>
     
               <div className="flex flex-col lg:flex-row gap-10 items-start">
                 <div className="flex-[0.6] flex justify-center">
                   <img
                     src="/Gjpir.png"
                     alt="GJPIR Cover"
                     className="w-[520px] h-[500px] object-contain rounded-lg shadow-md border bg-white p-2"
                   />
                 </div>
     
                 <div className="flex-[1.5] bg-white p-6 md:p-8 rounded-xl shadow-inner border max-h-[550px] overflow-y-auto space-y-6 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100 text-start">
                   <Section title="About Us">
                     The Global Journal for Progressive Innovation & Research (GJPIR) is established as a common platform for researchers working across technology, management, economics, social sciences, and engineering. The journal brings together four focused sections that collectively support a wide spectrum of academic inquiry.
We aim to publish work that carries clarity, relevance, and long-term value to the research community. Our approach encourages both disciplinary and cross-disciplinary studies, especially those that address current challenges and future possibilities.
GJPIR maintains a transparent review process and follows strong academic ethics to ensure the reliability of the research it publishes. We welcome contributions from scholars, professionals, and practitioners who seek to share knowledge that can benefit institutions, industries, and society.
Through this journal, we hope to strengthen research culture, promote meaningful dialogue, and support new ideas that contribute to advancement in various fields.
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
                      "To bring together research that contributes to innovation, scientific understanding, and societal progress",
                      " To encourage studies that connect multiple disciplines and offer practical insights.",
                      " To support work that is thoughtful, evidence-based, and useful for academic and professional communities.",
                      " To publish research aligned with emerging trends and long-term developmental needs."

                   ]}/>
     
                   <Section title="Scope">
                    
<b>Computational and Emerging Technologies : </b>

Artificial intelligence, machine learning, data-driven modelling, robotics, automation, cybersecurity, IoT, and upcoming digital technologies.
<br/>
<b>Management Studies : </b>

Strategic management, operations, supply chain systems, analytics, entrepreneurship, governance, sustainability, and financial systems.
<br/>
<b>Economics and Social Sciences : </b>

Economic theory and practice, development studies, policy, governance, behavioural sciences, social development, and environmental economics.
<br/>
<b>Electrical and Electronics Engineering : </b>

Power systems, renewable energy, smart grids, electronics, VLSI, embedded technologies, communication systems, automation, and intelligent hardware systems.
<br/>
The journal welcomes full-length research papers, review articles, case studies, conceptual studies, and analytical reports.
                   </Section>
     
  
                  
                 </div>
               </div>
              
             </div>
               <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 px-4">
          <Link href="/publications/explore" className="w-full sm:w-auto">
            <button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-md font-semibold transition">
              Explore Journals
            </button>
          </Link>

          <Link href="/EditorialBoard"  className="w-full sm:w-auto">
            <button className="w-full sm:w-auto bg-gray-900 text-white px-6 py-3 rounded-md hover:bg-gray-700 transition-all">
              Editorial Board
            </button>
          </Link>
        </div>
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

              
            </div> */