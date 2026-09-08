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
          <div className="w-full pb-4 mb-4">
            <div className="flex flex-row items-stretch justify-between bg-white border border-[#d8d8d8] rounded-[12px] shadow-sm w-full max-w-6xl mx-auto divide-x divide-[#d8d8d8] overflow-hidden">
              {/* Logo 1 - IEEE CIS (17%) */}
              <div style={{ width: '17%' }} className="flex items-center justify-center p-3 sm:p-5">
                <div className="relative w-full h-14 sm:h-16">
                  <Image src="/logos/logo1.png" alt="IEEE CIS" fill className="object-contain" />
                </div>
              </div>
              
              {/* Logo 2 - IEEE CIS PCCOE SBC (24%) */}
              <div style={{ width: '24%' }} className="flex items-center justify-center p-3 sm:p-5">
                <div className="relative w-full h-20 sm:h-28">
                  <Image src="/logos/logo2.png" alt="IEEE CIS PCCOE" fill className="object-contain" />
                </div>
              </div>

              {/* Logo 3 - PCCOE (16%) */}
              <div style={{ width: '16%' }} className="flex items-center justify-center p-3 sm:p-5">
                <div className="relative w-full h-20 sm:h-28">
                  <Image src="/logos/logo3.png" alt="PCCOE Logo" fill className="object-contain" />
                </div>
              </div>

              {/* Logo 4 - IEEE Pune Section (26%) */}
              <div style={{ width: '26%' }} className="flex items-center justify-center p-3 sm:p-5">
                <div className="relative w-full h-14 sm:h-16">
                  <Image src="/logos/logo4.png" alt="IEEE Pune Section" fill className="object-contain" />
                </div>
              </div>

              {/* Logo 5 - IEEE YP Pune (17%) */}
              <div style={{ width: '17%' }} className="flex items-center justify-center p-3 sm:p-5">
                <div className="relative w-full h-14 sm:h-16">
                  <Image src="/logos/logo5.png" alt="IEEE YP Pune" fill className="object-contain" />
                </div>
              </div>
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

      <Footer />
    </div>
  )
}
