"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { MdEmail } from "react-icons/md";

interface ProfileCardProps {
  id: number | string;
  image: string;
  name: string;
  role: string;
  college: string;
  linkedinUrl?: string;
  Desgination: string;
  collegeUrl?: string;
  mail?: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  id,
  image,
  name,
  role,
  college,
  linkedinUrl,
  Desgination,
  collegeUrl,
  mail
}) => {
  // Prevent router errors by checking if the component is mounted
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="flex items-center justify-center p-4 font-sans bg-transparent">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600&family=Roboto+Slab:wght@700;800&display=swap');
          .texture-noise {
            background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E");
          }
        `}
      </style>

      <div className="relative w-full max-w-[350px] h-[580px] flex flex-col items-center shadow-xl rounded-lg overflow-hidden bg-transparent transition-transform duration-300 hover:scale-[1.02]">
        
        {/* --- OVERLAY LINK --- */}
        {/* Using the exact folder name from your directory: Editorial_profile */}
        {mounted && (
          <Link 
          href={`/Editorial_profile/${id}`}
            className="absolute inset-0 z-10"
            aria-label={`View ${name}'s details`}
          />
        )}

        {/* --- TOP HALF: DYNAMIC IMAGE --- */}
        <div className="w-full h-[80%] relative z-0 bg-gray-300">
          <img 
            src={image || ''} 
            alt={name} 
            className="w-full h-full object-cover object-top"
          />
        </div>

        {/* --- BOTTOM HALF: CONTENT CARD --- */}
        <div 
            className="absolute bottom-0 w-full h-[40%] bg-gray-50 z-20 texture-noise flex flex-col justify-between pointer-events-none"
            style={{
                clipPath: 'polygon(0 15%, 15% 0, 100% 0, 100% 100%, 0 100%)',
                backgroundColor: '#f9fafb' 
            }}
        >
          <div className="flex-1 flex flex-col items-center justify-center text-center p-4">
            
            <h1 className="text-[#D96C36] text-xl mb-1 tracking-tight" style={{ fontFamily: '"Roboto Slab", serif', fontWeight: 800 }}>
              {name}
            </h1>
            
            <p className="text-gray-400 text-xs tracking-wide font-medium uppercase mb-2" style={{ fontFamily: '"Montserrat", sans-serif' }}>
              {role}
            </p>
            <p className="text-gray-400 text-xs tracking-wide font-medium uppercase mb-2" style={{ fontFamily: '"Montserrat", sans-serif' }}>
              {Desgination}
            </p>
            <p
  className="text-gray-400 text-xs tracking-wide font-medium uppercase mb-2 flex items-center gap-2"
  style={{ fontFamily: '"Montserrat", sans-serif' }}
>
  <MdEmail className="text-blue-500 text-sm" />
  {mail}
</p>
            {/* Icons Container */}
            <div className="flex items-center gap-4 mb-2 pointer-events-auto relative z-30">
                {linkedinUrl && (
                  <a 
                    href={linkedinUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()} 
                    className="group p-2 rounded-full border border-gray-200 hover:border-[#D96C36] hover:bg-[#D96C36] transition-all duration-300"
                    aria-label="LinkedIn Profile"
                  >
                    <svg className="w-5 h-5 text-gray-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                )}
                
                {collegeUrl && (
                  <a 
                    href={collegeUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()} 
                    title={college}
                    className="group p-2 rounded-full border border-gray-200 hover:border-[#D96C36] hover:bg-[#D96C36] transition-all duration-300"
                  >
                    <svg className="w-5 h-5 text-gray-400 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                        <path d="M6 12v5c3 0 6 0 9 5 3-5 6-5 9-5v-5"/>
                    </svg>
                  </a>
                )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;