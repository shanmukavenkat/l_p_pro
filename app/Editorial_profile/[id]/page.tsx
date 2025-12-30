"use client";

import React, { useState, useEffect } from 'react';
import NavigationPage from '@/components/Home/nav/page';
import FooterSection from '@/components/Home/FooterSection';
import { notFound } from 'next/navigation';
import { User, Mail, Award, BookOpen } from 'lucide-react';

export default function ProfileDetail({ params }: { params: any }) {
  const resolvedParams = React.use(params) as { id: string };
  const id = resolvedParams.id;

  const [member, setMember] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  
  // Logic to handle different image extensions
  const [imgExtensionIndex, setImgExtensionIndex] = useState(0);
  const extensions = ['jpg', 'png', 'jpeg'];
  const [useFallback, setUseFallback] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://api.lurnexa.in/user-dashboard", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id: id }),
        });
        const result = await response.json();
        if (result.data && result.data.length > 0) {
          setMember(result.data[0]);
        }
      } catch (error) {
        console.error("Fetch Error:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [id]);

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
    </div>
  );
  
  if (!member) return notFound();

  // Constructing the URL dynamically (Notice: No spaces at the end)
  const s3ImageUrl = `https://lurnexa.s3.ap-south-1.amazonaws.com/editorial_board_photos/${member.Id || id}.${extensions[imgExtensionIndex]}`;
  const fallbackImage = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=6366f1&color=fff&size=300`;

  const handleImageError = () => {
    if (imgExtensionIndex < extensions.length - 1) {
      // Try next extension: jpg -> png -> jpeg
      setImgExtensionIndex(prev => prev + 1);
    } else {
      // If all extensions fail, use the UI Avatar
      setUseFallback(true);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <NavigationPage />
      
      {/* Hero Background Section */}
      <div className="relative w-full h-[400px] bg-[#0f172a] overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000" 
          className="w-full h-full object-cover opacity-30"
          alt="Professional Background"
        />
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-slate-900/50 to-slate-50" />
      </div>



      <main className="grow -mt-52 px-4 pb-20 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white/90 backdrop-blur-md rounded-[3rem] shadow-2xl shadow-slate-200/60 border border-white overflow-visible">
            <div className="p-8 md:p-14">
              
              {/* Profile Image & Header */}
              <div className="flex flex-col md:flex-row items-center md:items-end gap-8 -mt-24 md:-mt-32 mb-10">
                <div className="relative group">
                  <div className="absolute inset-0 bg-indigo-500 rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
                  <img 
                    src={useFallback ? fallbackImage : s3ImageUrl}
                    onError={handleImageError}
                    className="relative w-40 h-40 md:w-52 md:h-52 object-cover rounded-full border-8 border-white shadow-xl bg-white transition-transform duration-300 group-hover:scale-[1.02]"
                    alt={member.name}
                  />
                  <div className="absolute bottom-6 right-3 bg-green-500 w-5 h-5 rounded-full border-4 border-white shadow-sm animate-pulse"></div>
                </div>

                <div className="flex-1 text-center md:text-left pb-2">
                 
                <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 truncate">
                  {member.name}
                </h1>

                  <p className="text-xl text-slate-500 font-medium mt-1">
                    {member.designation || "Editorial Board"}
                  </p>
                  <div className="flex items-center justify-center md:justify-start gap-2 mt-4">
                    <span className="px-4 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs font-bold uppercase tracking-widest">
                      {member.role || "Board Member"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Grid Content */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 pt-8 ">
                <div className="space-y-6 ">
                  <div className="bg-blue-200/40 p-6 rounded-[2rem] border border-slate-100 ">
                    <h3 className="text-slate-900 font-bold mb-5 flex items-center gap-2">
                       <User size={18} className="text-indigo-500" /> Identity Details
                    </h3>
                    <div className="space-y-5 ">
                      <div className="flex flex-col ">
                        <span className="text-[10px] text-slate-400 font-black uppercase tracking-widest">Official Email</span>
                        <div className="flex items-center gap-2 mt-1">
                          <Mail size={16} className="text-slate-400" />
                          <span className="text-slate-700 font-semibold break-all text-sm">{member.email}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-indigo-600 to-blue-700 p-8 rounded-[2rem] text-white shadow-xl shadow-indigo-200">
                    <Award size={40} className="mb-4 text-indigo-200" />
                    <h4 className="font-bold text-xl leading-tight">Editorial Excellence</h4>
                    <p className="text-indigo-100/80 text-sm mt-3 leading-relaxed">
                      Top-tier contributor specializing in academic governance and peer review.
                    </p>
                  </div>
                </div>

                <div className="lg:col-span-2">
                  <h3 className="text-2xl font-extrabold text-slate-900 mb-6 flex items-center gap-2">
                    <div className="h-1 w-10 bg-indigo-600 rounded-full"></div> Professional Bio
                  </h3>
                  <div className="prose prose-slate max-w-none">
                    <p className="text-slate-600 text-lg leading-relaxed mb-10">
                      {member.description || "This profile is currently under active update by the user. The information shown may change as updates are in progress."}
                    </p>
                  </div>

                  <h4 className="text-slate-900 font-bold mb-6 flex items-center gap-2">
                    <BookOpen size={20} className="text-indigo-500" /> Core Expertise
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {member.area_of_expertise ? (
                      (typeof member.area_of_expertise === 'string' 
                        ? member.area_of_expertise.split(',') 
                        : member.area_of_expertise
                      ).map((skill: string, i: number) => (
                        <span key={i} className="px-6 py-2 bg-white border border-slate-200 text-slate-600 rounded-xl text-sm font-semibold shadow-sm hover:border-indigo-300 transition-colors">
                          {skill.trim()}
                        </span>
                      ))
                    ) : (
                      <span className="text-slate-400 italic">No expertise listed yet.</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>




      <FooterSection />
    </div>
  );
}