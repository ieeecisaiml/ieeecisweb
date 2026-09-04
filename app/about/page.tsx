import type { Metadata } from 'next'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Card } from '@/components/ui/card'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'About — IEEE CIS Summer School hosted by Department of CSE (AI & ML), PCCOE',
  description:
    'Discover the IEEE CIS Summer School hosted by Department of CSE (AI & ML), PCCOE — an intensive IEEE CIS program designed for students, researchers, and professionals seeking to master Fine-Tuning LLMs and Inference Optimization at PCCoE Pune.',
  alternates: { canonical: 'https://ieeecissummerschool2026.vercel.app/about' },
  openGraph: {
    title: 'About — IEEE CIS Summer School hosted by Department of CSE (AI & ML), PCCOE',
    description: 'Learn why the IEEE CIS Summer School hosted by Department of CSE (AI & ML), PCCOE is the premier AI residential program in India. World-class instructors, hands-on labs, IEEE CIS certificate.',
    url: 'https://ieeecissummerschool2026.vercel.app/about',
  },
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-[#5a5a5a] flex flex-col font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-[4px] bg-[#f5f5f5] text-[#080808] text-xs font-medium uppercase tracking-[1.5px] mb-6 border border-[#d8d8d8]">
            About the Program
          </div>
          <h1 className="text-4xl sm:text-5xl font-semibold text-[#080808] mb-4 tracking-[-0.8px]">About the Summer School</h1>
          <p className="text-lg sm:text-xl text-[#5a5a5a] leading-relaxed">
            Intensive learning experience in computational intelligence and LLMs from leading researchers worldwide
          </p>
        </div>
      </section>

      {/* Partner Logos */}
      <section className="py-8 bg-[#fafafa] border-y border-[#d8d8d8]">
        <div className="max-w-4xl mx-auto text-center px-4">
          <p className="text-xs font-medium uppercase tracking-[1.5px] text-[#888888] mb-4">
            Organized &amp; Supported By
          </p>
          <div className="flex flex-row flex-nowrap items-center justify-start lg:justify-center gap-6 md:gap-10 bg-white py-6 px-8 rounded-[8px] border border-[#d8d8d8] max-w-4xl mx-auto overflow-x-auto no-scrollbar shadow-sm">
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
                className="object-contain rounded-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold text-[#080808] mb-6">Our Mission</h2>
          <div className="space-y-4 text-[#5a5a5a] leading-relaxed">
            <p>
              The IEEE Computational Intelligence Society Summer School is a flagship educational initiative designed to
              advance knowledge and skills in computational intelligence. Our mission is to provide a transformative learning
              experience that bridges the gap between theoretical foundations and practical applications.
            </p>
            <p>
              We bring together leading researchers, industry practitioners, and emerging talent to explore the frontiers of
              fine-tuning large language models, inference optimization, neural networks, and model compression. Through intensive
              hands-on training, mentorship, and collaborative learning, we empower participants to advance their careers and
              contribute to state-of-the-art AI development.
            </p>
          </div>
        </div>
      </section>

      {/* Who Should Attend */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#fafafa] border-y border-[#d8d8d8]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold text-[#080808] mb-8">Who Should Attend?</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Students',
                description: 'Graduate and advanced undergraduate students looking to build deep expertise in LLM fine-tuning and AI research.',
              },
              {
                title: 'Researchers',
                description: 'Academic researchers seeking to deepen knowledge, publish papers, and collaborate with leading AI scientists.',
              },
              {
                title: 'Professionals',
                description: 'Industry engineers, ML engineers, and data scientists looking to master scalable model deployment and inference acceleration.',
              },
            ].map((item, idx) => (
              <Card key={idx} className="p-6 border border-[#d8d8d8] bg-white rounded-[8px] hover:border-[#080808] hover:shadow-layered transition-all">
                <h3 className="text-xl font-semibold text-[#080808] mb-3">{item.title}</h3>
                <p className="text-[#5a5a5a] text-sm leading-relaxed">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why PCCOE */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold text-[#080808] mb-8">Why PCCoE Summer School?</h2>

          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                title: 'World-Class Instructors',
                description:
                  'Learn from leading researchers and industry experts with decades of combined experience in computational intelligence and machine learning.',
              },
              {
                title: 'Comprehensive Curriculum',
                description:
                  'Cover core foundations to cutting-edge techniques: LoRA/QLoRA, SFT, DPO/RLHF, Quantization, Distillation, and high-throughput vLLM serving.',
              },
              {
                title: 'Hands-on GPU Labs',
                description:
                  'Participate in intensive practical labs using industry-standard tools like Python, PyTorch, HuggingFace, and vLLM on high-performance compute.',
              },
              {
                title: 'Networking Opportunities',
                description:
                  'Connect with passionate peers, build lasting research relationships, and expand your network within the global IEEE community.',
              },
              {
                title: 'IEEE CIS Recognized Certificate',
                description:
                  'Earn an official certificate of completion from the IEEE Computational Intelligence Society, validating your specialized training.',
              },
              {
                title: 'Career Advancement',
                description:
                  'Develop production-grade engineering skills that open doors to high-impact roles in research labs and AI engineering teams.',
              },
            ].map((item, idx) => (
              <div key={idx} className="border border-[#d8d8d8] rounded-[8px] bg-white p-6 border-l-4 border-l-[#080808] hover:shadow-layered transition-all">
                <h3 className="font-semibold text-[#080808] mb-2 text-lg">{item.title}</h3>
                <p className="text-[#5a5a5a] text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#fafafa] border-y border-[#d8d8d8]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold text-[#080808] mb-8">Program History</h2>

          <div className="bg-white rounded-[8px] p-8 border border-[#d8d8d8] shadow-sm">
            <p className="text-[#5a5a5a] mb-4 leading-relaxed">
              The IEEE CIS Summer School is held annually, establishing itself as a premier educational event
              in computational intelligence. Over the years, the program has trained hundreds of researchers and practitioners who have gone on to impactful positions in academia and industry.
            </p>
            <p className="text-[#5a5a5a] leading-relaxed">
              Our 2026 edition hosted at PCCoE Pune focuses specifically on the breakthrough developments in Large Language Models, Fine-Tuning methodologies, and Inference Optimization, uniting theory and real-world system implementations.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-[#080808] mb-12 text-center">By the Numbers</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: '6', label: 'Intensive Days' },
              { number: '60', label: 'Selected Seats' },
              { number: '10+', label: 'Expert Instructors' },
              { number: '20+', label: 'Lab Hours' },
            ].map((stat, idx) => (
              <div key={idx} className="text-center p-6 rounded-[8px] bg-[#fafafa] border border-[#d8d8d8]">
                <div className="text-4xl font-semibold text-[#080808] mb-2">{stat.number}</div>
                <p className="text-[#5a5a5a] text-sm font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
