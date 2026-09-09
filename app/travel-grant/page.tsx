import type { Metadata } from 'next'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { PlaneTakeoff } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Travel Grant — IEEE CIS School 2026',
  description: 'Information regarding travel grants for the IEEE CIS School hosted by PCCOE.',
}

export default function TravelGrantPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#fafafa] font-sans">
      <Navbar />

      <main className="flex-grow flex items-center justify-center pt-32 pb-16 px-4">
        <div className="text-center max-w-md mx-auto">
          <div className="w-20 h-20 bg-[#f0f0f0] rounded-full flex items-center justify-center mx-auto mb-6 border border-[#d8d8d8] shadow-sm">
            <PlaneTakeoff size={32} className="text-[#080808]" />
          </div>
          <h1 className="text-3xl font-semibold text-[#080808] tracking-tight mb-4">
            Travel Grant
          </h1>
          <p className="text-[#5a5a5a] text-lg mb-8 leading-relaxed">
            Details regarding the Travel Grant application process, eligibility criteria, and deadlines will be announced soon. Please check back later.
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#f5f5f5] text-[#080808] text-sm font-medium rounded-[4px] border border-[#d8d8d8]">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
            Coming Soon
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
