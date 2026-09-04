import Link from 'next/link'
import Image from 'next/image'
import { CalendarDays, MapPin, Users2 } from 'lucide-react'
import { Arrow } from '@/components/ui/arrow'

export function HeroSection() {
  return (
    <section className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 bg-white relative">
      <div className="max-w-4xl mx-auto text-center">
        {/* Uppercase Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[4px] bg-[#f5f5f5] border border-[#d8d8d8] mb-6 animate-fadeInDown">
          <span className="text-[12px] font-medium text-[#080808] uppercase tracking-[1.5px]">June 22–27, 2026</span>
          <span className="inline-block w-1.5 h-1.5 bg-[#080808] rounded-full"></span>
          <span className="text-[12px] font-medium text-[#5a5a5a] uppercase tracking-[1.5px]">Pune, India</span>
        </div>

        {/* Organizer Eyebrow */}
        <div className="mb-4 animate-fadeInUp" style={{ animationDelay: '0.05s' }}>
          <span className="block text-xs sm:text-sm font-medium uppercase tracking-[1.5px] text-[#5a5a5a]">
            IEEE CIS Summer School • Dept. of CSE (AI &amp; ML), PCCOE
          </span>
        </div>

        {/* Main Display Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-[68px] font-semibold text-[#080808] mb-6 leading-[1.1] tracking-[-0.8px] animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
          Master Fine-Tuning LLMs &amp; Inference Optimization
        </h1>

        {/* Subheading */}
        <p className="text-lg sm:text-xl text-[#363636] mb-8 leading-relaxed max-w-2xl mx-auto font-normal animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
          An intensive 6-day residential summer school hosted by Department of CSE (AI &amp; ML), PCCOE. Learn from leading researchers and industry experts how to build, optimize, and deploy large language models for real-world applications.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-3 mb-14 animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
          <Link
            href="/register"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#080808] text-white font-medium text-base rounded-[4px] hover:bg-[#222222] transition-colors"
          >
            Register Now <Arrow size={16} />
          </Link>
          <Link
            href="/program"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-[#080808] font-medium text-base rounded-[4px] hover:bg-[#f5f5f5] transition-colors border border-[#d8d8d8]"
          >
            View Program
          </Link>
        </div>

        {/* Partner Logos */}
        <div className="mb-14 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
          <p className="text-xs font-medium uppercase tracking-[1.5px] text-[#5a5a5a] mb-4">
            Organized &amp; Supported By
          </p>
          <div className="flex flex-row flex-nowrap items-center justify-start lg:justify-center gap-6 md:gap-10 bg-white border border-[#d8d8d8] py-6 px-8 rounded-[8px] max-w-4xl mx-auto overflow-x-auto no-scrollbar">
            {/* 1. IEEE CIS */}
            <div className="relative h-16 w-52 flex-shrink-0">
              <Image
                src="/ieeecis.png"
                alt="IEEE CIS Logo"
                fill
                sizes="(max-width: 768px) 208px, 208px"
                className="object-contain"
              />
            </div>
            {/* 2. ARC */}
            <div className="relative h-16 w-40 flex-shrink-0">
              <Image
                src="/arc-logo.svg"
                alt="ARC Logo"
                fill
                sizes="(max-width: 768px) 160px, 160px"
                className="object-contain"
              />
            </div>
            {/* 3. IEEE Pune Section */}
            <div className="relative h-16 w-32 flex-shrink-0">
              <Image
                src="/ieeepune.png"
                alt="IEEE Pune Section Logo"
                fill
                sizes="(max-width: 768px) 128px, 128px"
                className="object-contain"
              />
            </div>
            {/* 4. PCCoE */}
            <div className="relative h-16 w-32 flex-shrink-0">
              <Image
                src="/pccoe.jpeg"
                alt="PCCoE Logo"
                fill
                sizes="(max-width: 768px) 128px, 128px"
                className="object-contain rounded-[4px]"
              />
            </div>
          </div>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-[#d8d8d8]">
          <div className="flex flex-col items-center gap-2 py-5 px-4 rounded-[8px] bg-white border border-[#d8d8d8] hover:border-[#080808]/30 transition-colors">
            <div className="w-11 h-11 rounded-full bg-[#f5f5f5] text-[#080808] flex items-center justify-center mb-1">
              <CalendarDays className="w-5 h-5" />
            </div>
            <div className="font-semibold text-[#080808] text-sm">June 22–27, 2026</div>
            <div className="text-xs text-[#5a5a5a]">6-Day Intensive Program</div>
          </div>

          <div className="flex flex-col items-center gap-2 py-5 px-4 rounded-[8px] bg-white border border-[#d8d8d8] hover:border-[#080808]/30 transition-colors">
            <div className="w-11 h-11 rounded-full bg-[#f5f5f5] text-[#080808] flex items-center justify-center mb-1">
              <MapPin className="w-5 h-5" />
            </div>
            <div className="font-semibold text-[#080808] text-sm">PCCoE Campus</div>
            <div className="text-xs text-[#5a5a5a]">Nigdi, Pune, India</div>
          </div>

          <div className="flex flex-col items-center gap-2 py-5 px-4 rounded-[8px] bg-white border border-[#d8d8d8] hover:border-[#080808]/30 transition-colors">
            <div className="w-11 h-11 rounded-full bg-[#f5f5f5] text-[#080808] flex items-center justify-center mb-1">
              <Users2 className="w-5 h-5" />
            </div>
            <div className="font-semibold text-[#080808] text-sm">Plenary Presenters</div>
            <div className="text-xs text-[#5a5a5a]">Industry &amp; Academia Leaders</div>
          </div>
        </div>
      </div>
    </section>
  )
}
