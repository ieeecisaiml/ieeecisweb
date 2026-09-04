import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { HeroSection } from '@/components/sections/HeroSection'
import { StatsSection } from '@/components/sections/StatsSection'
import { HighlightGrid } from '@/components/sections/HighlightGrid'
import { ScheduleSwitcher } from '@/components/sections/ScheduleSwitcher'
import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { CheckCircle2 } from 'lucide-react'
import { Arrow } from '@/components/ui/arrow'
import Image from 'next/image'
import { SpotlightTicker } from '@/components/sections/SpotlightTicker'
import { ImageSlider } from '@/components/sections/ImageSlider'
import { LoaderScreen } from '@/components/sections/LoaderScreen'

export default function Home() {
  const outcomes = [
    'Fine-tune open-source LLMs (LLaMA, Mistral, Phi) using LoRA/QLoRA',
    'Apply quantization (GPTQ, AWQ) to reduce model size and latency',
    'Set up and benchmark LLM serving with vLLM and TGI',
    'Build end-to-end fine-tuning and deployment pipelines',
    'Develop production-grade capstone projects with real applications',
    'Network with industry leaders and earn IEEE CIS certificate',
  ]

  return (
    <div className="min-h-screen bg-white text-[#363636] flex flex-col">
      <LoaderScreen />
      <Navbar />
      <SpotlightTicker />
      <ImageSlider />

      {/* Hero Section */}
      <HeroSection />

      {/* Stats Section */}
      <StatsSection />

      {/* Why Attend Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-t border-[#d8d8d8]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="eyebrow block mb-3">Why Attend</span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#080808] tracking-tight mb-4">
              Designed for Builders, Researchers, and AI Engineers
            </h2>
            <p className="text-base sm:text-lg text-[#5a5a5a] max-w-2xl mx-auto font-normal">
              A 6-day intensive residential program at Pimpri Chinchwad College of Engineering. Learn from world-class researchers and industry experts in fine-tuning LLMs and inference optimization.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-10">
            {outcomes.map((outcome, idx) => (
              <div key={idx} className="flex gap-3 p-4 rounded-[8px] bg-[#f9f9f9] border border-[#d8d8d8]">
                <CheckCircle2 className="w-5 h-5 text-[#080808] flex-shrink-0 mt-0.5" />
                <span className="text-[#363636] text-sm leading-relaxed">{outcome}</span>
              </div>
            ))}
          </div>

          <div className="bg-[#f5f5f5] border border-[#d8d8d8] rounded-[8px] p-8 text-center">
            <p className="text-lg text-[#080808] mb-2 font-semibold">
              June 22–27, 2026 • Pune, India
            </p>
            <p className="text-sm text-[#5a5a5a] mb-6 max-w-xl mx-auto">
              Limited to 80 participants. Supported by IEEE CIS and hosted at PCCoE with state-of-the-art GPU-enabled facilities.
            </p>
            <Link
              href="/register"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#080808] text-white font-medium text-sm rounded-[4px] hover:bg-[#222222] transition-colors"
            >
              Register Now <Arrow size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Highlights Grid */}
      <HighlightGrid />

      {/* Schedule Section */}
      <ScheduleSwitcher />

      {/* Plenary Presenters Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#f9f9f9] border-y border-[#d8d8d8]">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <span className="eyebrow block mb-3">Distinguished Faculty &amp; Experts</span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#080808] tracking-tight mb-4">Plenary Presenters</h2>
            <p className="text-lg font-medium text-[#080808] max-w-2xl mx-auto mb-3">
              Renowned professors and industry experts will be presenting.
            </p>
            <p className="text-sm text-[#5a5a5a] max-w-2xl mx-auto leading-relaxed">
              Our comprehensive six-day curriculum features talks, tutorials, and hands-on clinics led by preeminent researchers and practitioners from top academic institutes and global tech pioneers.
            </p>
          </div>

          {/* Featured Institutions Chips Grid */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10 max-w-3xl mx-auto">
            {[
              'IIT Bombay',
              'ISI Kolkata',
              'IISER Pune',
              'VNIT Nagpur',
              'NVIDIA (California)',
              'UBS (Switzerland)',
              'TCS Research',
              'Dassault Systèmes',
              'Neilsoft',
              'Microsoft Research Collaborations',
            ].map((institution, idx) => (
              <span
                key={idx}
                className="px-3.5 py-1.5 bg-white border border-[#d8d8d8] rounded-[4px] text-xs font-medium text-[#080808]"
              >
                {institution}
              </span>
            ))}
          </div>

          <div>
            <Link
              href="/speakers"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#080808] text-white font-medium text-sm rounded-[4px] hover:bg-[#222222] transition-colors"
            >
              Learn More About Plenary Sessions <Arrow size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#080808] text-white border-t border-[#080808]">
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-xs font-medium uppercase tracking-[1.5px] text-[#ababab] block mb-3">Join the Cohort</span>
          <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4 tracking-tight">Ready to Transform Your Skills?</h2>
          <p className="text-base text-[#ababab] mb-8 font-normal">
            Join 500+ participants who have advanced their careers through the PCCOE Summer School.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <Link
              href="/register"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-[#080808] font-medium text-sm rounded-[4px] hover:bg-[#f5f5f5] transition-colors"
            >
              Register Now <Arrow size={16} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-transparent text-white font-medium text-sm rounded-[4px] hover:bg-white/10 transition-colors border border-white/30"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
