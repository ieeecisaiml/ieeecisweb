'use client'

import React from 'react'

export function SpotlightTicker() {
  const news = [
    'IEEE CIS Summer School hosted by Department of CSE (AI & ML), PCCOE registrations are now open. Secure your seat today!',
    'Hosted by Department of CSE (AI & ML), PCCOE, Pune — June 22–27, 2026.',
    '6 Days of intensive residential training with hands-on clinics on GPU-enabled labs.',
    'Supported by IEEE Computational Intelligence Society, ARC, and IEEE Pune Section.',
    'Earn a prestigious IEEE CIS Certificate of Participation and build industry-grade LLM projects.'
  ]

  return (
    <div className="w-full bg-[#f9f9f9] border-y border-[#d8d8d8] flex items-stretch h-10 overflow-hidden select-none text-sm font-medium z-40 relative mt-16">
      {/* Spotlight Badge */}
      <div className="bg-[#080808] text-white flex items-center px-4 font-semibold relative z-10 flex-shrink-0 tracking-[1.5px] text-[11px] uppercase">
        SPOTLIGHT
        <div className="absolute top-0 right-[-8px] w-0 h-0 border-t-[20px] border-t-transparent border-b-[20px] border-b-transparent border-l-[8px] border-l-[#080808]"></div>
      </div>

      {/* Marquee Content */}
      <div className="flex-grow flex items-center overflow-hidden relative pl-6">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-12 text-[#363636]">
          {/* Repeat news item array twice to ensure smooth seamless loop */}
          {[...news, ...news].map((item, index) => (
            <span key={index} className="flex items-center gap-3 text-xs sm:text-sm font-normal">
              <span className="inline-block w-1.5 h-1.5 bg-[#080808] rounded-full"></span>
              {item}
            </span>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  )
}
