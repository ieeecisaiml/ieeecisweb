'use client'

import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { RegistrationForm } from '@/components/sections/RegistrationForm'

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-white text-[#5a5a5a] flex flex-col font-sans">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 bg-white border-b border-[#d8d8d8]">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-[4px] bg-[#f5f5f5] text-[#080808] text-xs font-medium uppercase tracking-[1.5px] mb-4 border border-[#d8d8d8]">
            IEEE CIS Summer School 2026
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#080808] mb-4 tracking-[-0.8px]">
            Registration Application
          </h1>
          <p className="text-lg text-[#5a5a5a] max-w-2xl mx-auto leading-relaxed">
            Complete the form below to apply for the 6-day intensive program on Fine-Tuning LLMs &amp; Inference Optimization. June 22–27, 2026 at PCCoE, Pune.
          </p>
        </div>
      </section>

      {/* Registration Form — inline on the page */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <RegistrationForm />
        </div>
      </section>

      {/* Help Banner */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-[#fafafa] border-t border-[#d8d8d8]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-lg font-semibold text-[#080808] mb-2">Need Help?</h2>
          <p className="text-[#5a5a5a] mb-4 text-sm">
            Contact the registration team if you have any questions.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
            <a href="mailto:cissummerschool@pccoepune.org" className="text-[#080808] hover:underline font-medium">
              cissummerschool@pccoepune.org
            </a>
            <span className="hidden sm:inline text-[#d8d8d8]">|</span>
            <a href="tel:+917620343611" className="text-[#080808] hover:underline font-medium">
              +91 76203 43611
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
