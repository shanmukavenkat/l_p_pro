// app/Editorial_profile/[id]/page.tsx
import NavigationPage from '@/components/Home/nav/page';
import FooterSection from '@/components/Home/FooterSection';
import { notFound } from 'next/navigation';
import { User, Mail, Award, BookOpen,   } from 'lucide-react';

export default async function ProfileDetail({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const id = resolvedParams.id;

  try {
    const response = await fetch("https://api.lurnexa.in/user-dashboard", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: id }),
      cache: 'no-store'
    });

    if (!response.ok) return notFound();

    const result = await response.json();
    const member = result.data && result.data.length > 0 ? result.data[0] : null;

    if (!member) return notFound();

    return (
      <div className="min-h-screen bg-slate-50 flex flex-col">
        <NavigationPage />
        
        {/* Hero Background Section */}
        <div className="relative w-full h-[350px] bg-[#0f172a] overflow-hidden">
          {/* Abstract background image with human/professional vibe */}
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover opacity-40"
            alt="Professional Background"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-50" />
        </div>

        <main className="flex-grow -mt-40 px-4 pb-20 relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Main Profile Card */}
            <div className="bg-white/80 backdrop-blur-xl rounded-[2.5rem] shadow-2xl shadow-slate-200/60 border border-white overflow-hidden">
              
              <div className="p-8 md:p-14">
                {/* Header Info */}
                <div className="flex flex-col md:flex-row justify-between items-start gap-8">
                  <div className="flex-1">
                   
                    
                    <h1 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight">
                      {member.name}
                    </h1>
                    {/* <p className="text-xl text-slate-500 mt-2 flex items-center gap-2">
                      <Briefcase size={20} className="text-slate-400" />
                      {member.designation }
                    </p> */}
                     <div className="flex items-center gap-2 mb-4">
  <div className="relative p-2  rounded-lg flex items-center justify-center">
    
    {/* 🔵 Outer ping (blink animation) */}
    <span className="absolute inline-flex h-4 w-4 rounded-full bg-green-400 opacity-75 animate-ping"></span>

    {/* 🟢 Solid online dot */}
    <span className="relative inline-flex h-3 w-3 rounded-full bg-green-600"></span>
  </div>

  <span className="text-indigo-600 font-bold uppercase tracking-widest text-xs">
    {member.role || "Board Member"}
  </span>
</div>

                  </div>

            
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-16">
                  
                  {/* Left Column - Professional Icons/Stats */}
                  <div className="space-y-6">
                    <div className="bg-indigo-50 p-6 rounded-3xl border border-slate-100">
                      <h3 className="text-slate-900 font-bold mb-4 flex items-center gap-2">
                         <User size={18} className="text-indigo-500" /> Identity Details
                      </h3>
                      <div className="space-y-4 ">
                        <div className="flex flex-col">
                          <span className="text-xs text-slate-400 font-bold uppercase">Official Email</span>
                          <span className="text-slate-700 font-medium break-all">{member.email}</span>
                        </div>
                        {/* <div className="flex flex-col">
                          <span className="text-xs text-slate-400 font-bold uppercase">Affiliation</span>
                          <span className="text-slate-700 font-medium">Lurnexa Academic Board</span>
                        </div> */}
                      </div>
                    </div>

                    <div className="bg-indigo-600 p-6 rounded-3xl text-white shadow-xl shadow-indigo-100">
                      <Award size={32} className="mb-4 opacity-80" />
                      <h4 className="font-bold text-lg leading-tight">Elite Editorial Status</h4>
                      <p className="text-indigo-100 text-sm mt-2">Recognized for significant contributions to global research and academic excellence.</p>
                    </div>
                  </div>

                  {/* Right Column - Bio & Expertise */}
                  <div className="lg:col-span-2">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="h-[2px] w-12 bg-indigo-600"></div>
                      <h3 className="text-2xl font-bold text-slate-900">Professional Bio</h3>
                    </div>
                    
                    <div className="relative">
                      <p className="text-slate-600 text-lg leading-relaxed bg-slate-50/50 p-8 rounded-3xl border border-dashed border-slate-200">
                        {member.description || member.area_of_expertise || "This profile is currently under active update by the user. The information shown may change as updates are in progress."}
                      </p>
                    </div>

                    <div className="mt-10">
                      <h4 className="text-slate-900 font-bold mb-4 flex items-center gap-2">
                        <BookOpen size={20} className="text-indigo-500" /> Core Expertise
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {Array.isArray(member.area_of_expertise) &&
    member.area_of_expertise.map((skill: string, index: number) => (
      <span
        key={`${skill}-${index}`}
        className="px-5 py-2 bg-white border border-slate-200 text-slate-600 rounded-full text-sm font-semibold hover:border-indigo-300 hover:text-indigo-600 transition-colors"
      >
        {skill.trim()}
      </span>
    ))}
                      </div>
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
  } catch (error) {
    console.error("Critical Fetch Error:", error);
    return notFound();
  }
}