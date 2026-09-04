import type { Metadata } from 'next'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Arrow } from '@/components/ui/arrow'
import Link from 'next/link'
import { BookOpen, Cpu, Award, Building2, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Plenary Presenters — IEEE CIS Summer School hosted by Department of CSE (AI & ML), PCCOE',
  description:
    'Renowned professors and industry experts will be presenting at the IEEE CIS Summer School hosted by Department of CSE (AI & ML), PCCOE. June 22–27, 2026.',
  alternates: { canonical: 'https://ieeecissummerschool2026.vercel.app/speakers' },
  openGraph: {
    title: 'Plenary Presenters — IEEE CIS Summer School hosted by Department of CSE (AI & ML), PCCOE',
    description:
      'Renowned professors and industry experts from premier institutions and industry leaders will be presenting at the IEEE CIS Summer School on LLM Fine-Tuning & Inference Optimization.',
    url: 'https://ieeecissummerschool2026.vercel.app/speakers',
  },
}

export default function SpeakersPage() {
  const institutions = [
    { name: 'IIT Bombay', type: 'Premier Institute', focus: 'CS & Geospatial AI' },
    { name: 'ISI Kolkata', type: 'Research Institute', focus: 'Computational Intelligence' },
    { name: 'IISER Pune', type: 'National Institute', focus: 'Data Science & Alignment' },
    { name: 'VNIT Nagpur', type: 'National Institute', focus: 'Vision & Architectures' },
    { name: 'NVIDIA (California)', type: 'Global Tech Leader', focus: 'AI Infrastructure & Pipelines' },
    { name: 'UBS (Switzerland)', type: 'Global Enterprise', focus: 'Enterprise Privacy & Security' },
    { name: 'TCS Research', type: 'Industrial Research', focus: 'Foundational NLP & Models' },
    { name: 'Dassault Systèmes', type: 'Enterprise Software', focus: 'Quantization & Production' },
    { name: 'Neilsoft', type: 'Engineering Solutions', focus: 'Industrial AI at Scale' },
    { name: 'Microsoft Research Collab.', type: 'Research & Innovation', focus: 'Systems & Inference' },
    { name: 'Hewlett Packard Enterprise', type: 'Cloud & Infrastructure', focus: 'Inference Infrastructure' },
    { name: 'Symbiosis CMIA', type: 'Medical AI Institute', focus: 'Clinical Decision Systems' },
  ]

  const sessionFormats = [
    {
      title: 'Plenary Keynotes',
      description: 'Visionary talks covering foundational landscapes, state-of-the-art architectures, and open challenges in generative AI.',
      icon: Award,
    },
    {
      title: 'Technical Lectures',
      description: 'In-depth mathematical and algorithmic deep dives into PEFT, quantization, RLHF/DPO, and high-throughput serving systems.',
      icon: BookOpen,
    },
    {
      title: 'Hands-on Clinics',
      description: 'Interactive small-group debugging and practical coding sessions guided directly by experienced educators and researchers.',
      icon: Cpu,
    },
    {
      title: 'Industry Panels & Capstone',
      description: 'Expert evaluation of participant capstone projects and interactive forums on deploying AI models in enterprise settings.',
      icon: Building2,
    },
  ]

  return (
    <div className="min-h-screen bg-white text-[#5a5a5a] flex flex-col font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-[4px] bg-[#f5f5f5] text-[#080808] text-xs font-medium uppercase tracking-[1.5px] mb-6 border border-[#d8d8d8]">
            Distinguished Faculty &amp; Experts
          </div>
          <h1 className="text-4xl sm:text-5xl font-semibold text-[#080808] mb-6 leading-tight tracking-[-0.8px]">
            Plenary Presenters
          </h1>
          <p className="text-lg sm:text-xl text-[#5a5a5a] max-w-2xl mx-auto leading-relaxed">
            Renowned professors and industry experts will be presenting throughout the six-day intensive curriculum.
          </p>
        </div>
      </section>

      {/* Unified Plenary Presenters Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#fafafa] border-y border-[#d8d8d8]">
        <div className="max-w-5xl mx-auto">
          {/* Main Statement Banner */}
          <div className="bg-white rounded-[8px] p-8 sm:p-12 border border-[#d8d8d8] shadow-sm mb-16 text-center">
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#080808] mb-4">
              World-Class Faculty &amp; Industry Practitioners
            </h2>
            <p className="text-lg text-[#080808] font-medium mb-6 max-w-3xl mx-auto">
              Renowned professors and industry experts will be presenting.
            </p>
            <p className="text-[#5a5a5a] text-base max-w-3xl mx-auto leading-relaxed mb-8">
              The IEEE CIS Summer School features sessions led by IEEE Fellows, senior corporate directors, department heads, and pioneering researchers from leading universities and multinational enterprises. Participants will benefit from both rigorous theoretical foundations and direct production insights for fine-tuning and inference optimization.
            </p>

            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-[#d8d8d8] text-left">
              <div className="flex items-center gap-2.5">
                <CheckCircle className="w-5 h-5 text-[#080808] flex-shrink-0" />
                <span className="text-sm font-medium text-[#080808]">20+ Distinguished Presenters</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle className="w-5 h-5 text-[#080808] flex-shrink-0" />
                <span className="text-sm font-medium text-[#080808]">Top-Tier IITs &amp; Universities</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle className="w-5 h-5 text-[#080808] flex-shrink-0" />
                <span className="text-sm font-medium text-[#080808]">Global Tech Enterprises</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle className="w-5 h-5 text-[#080808] flex-shrink-0" />
                <span className="text-sm font-medium text-[#080808]">1-on-1 Mentor Clinics</span>
              </div>
            </div>
          </div>

          {/* Participating Institutions & Organizations */}
          <div className="mb-16">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-semibold text-[#080808] mb-3">
                Represented Institutions &amp; Industry Leaders
              </h2>
              <p className="text-[#5a5a5a] max-w-2xl mx-auto">
                Presenters bring perspectives from premier research laboratories, leading academic institutions, and global technology organizations.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {institutions.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white p-5 rounded-[8px] border border-[#d8d8d8] hover:border-[#080808] hover:shadow-layered transition-all duration-200"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium uppercase tracking-[1.5px] text-[#080808] bg-[#f5f5f5] px-2.5 py-1 rounded-[4px] border border-[#d8d8d8]">
                      {item.type}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-[#080808] mb-1">{item.name}</h3>
                  <p className="text-xs text-[#5a5a5a]">{item.focus}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Session Formats */}
          <div>
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-semibold text-[#080808] mb-3">
                How Presenters Engage with Participants
              </h2>
              <p className="text-[#5a5a5a] max-w-2xl mx-auto">
                The six-day program is designed for active, direct interaction rather than passive listening.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {sessionFormats.map((format, idx) => {
                const Icon = format.icon
                return (
                  <div key={idx} className="bg-white p-6 rounded-[8px] border border-[#d8d8d8] flex gap-4 hover:border-[#080808] hover:shadow-layered transition-all">
                    <div className="w-12 h-12 rounded-[4px] bg-[#f5f5f5] text-[#080808] flex items-center justify-center flex-shrink-0 border border-[#d8d8d8]">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#080808] text-base mb-1">{format.title}</h3>
                      <p className="text-sm text-[#5a5a5a] leading-relaxed">{format.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#080808] text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4 tracking-[-0.8px]">Join the Summer School Cohort</h2>
          <p className="text-lg text-[#888888] mb-8 leading-relaxed">
            Limited to 60 in-person participants and 100+ online attendees. Secure your seat today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/register"
              className="group inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-[#080808] font-medium text-sm rounded-[4px] hover:bg-[#eaeaea] transition-all shadow-sm"
            >
              Register Now <Arrow size={16} />
            </Link>
            <Link
              href="/program"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-transparent text-white font-medium text-sm rounded-[4px] hover:bg-white/10 transition-all border border-white/30"
            >
              View Full Schedule
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
