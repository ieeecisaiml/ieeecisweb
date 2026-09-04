'use client'

import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { faqs } from '@/data/registration'

export default function FAQPage() {
  const additionalFaqs = [
    {
      id: 'add-1',
      question: 'What is the language of instruction?',
      answer: 'The course is taught entirely in English. All slides, code notebooks, and plenary discussions are delivered in English.',
    },
    {
      id: 'add-2',
      question: 'Is accommodation included in the registration fee?',
      answer:
        'Free hostel guest house accommodation is available on campus for offline attendees on a first-come, first-served basis.',
    },
    {
      id: 'add-3',
      question: 'What happens if I need to withdraw after the program starts?',
      answer:
        'If unforeseen circumstances force you to withdraw, please reach out to the organizing team to discuss options on a case-by-case basis.',
    },
    {
      id: 'add-4',
      question: 'Will I receive an IEEE certificate?',
      answer:
        'Yes! Upon successful completion of the 6-day program, you will receive an official IEEE CIS Certificate of Completion, validating your specialized training.',
    },
    {
      id: 'add-5',
      question: 'Are GPU compute resources provided for the practical labs?',
      answer:
        'Yes, participants will have access to GPU cloud environments pre-configured with all necessary frameworks, datasets, and pretrained model weights.',
    },
    {
      id: 'add-6',
      question: 'What is the venue like? Will it be comfortable for learning?',
      answer:
        'The summer school is held at PCCoE Pune, featuring state-of-the-art air-conditioned computing laboratories, auditoriums, high-speed Wi-Fi, and collaborative workspaces.',
    },
  ]

  return (
    <div className="min-h-screen bg-white text-[#5a5a5a] flex flex-col font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-[4px] bg-[#f5f5f5] text-[#080808] text-xs font-medium uppercase tracking-[1.5px] mb-6 border border-[#d8d8d8]">
            Support &amp; FAQ
          </div>
          <h1 className="text-4xl sm:text-5xl font-semibold text-[#080808] mb-4 tracking-[-0.8px]">Frequently Asked Questions</h1>
          <p className="text-lg sm:text-xl text-[#5a5a5a] leading-relaxed">Find answers to common questions about the IEEE CIS Summer School</p>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Program FAQs */}
          <div className="mb-16">
            <h2 className="text-2xl font-semibold text-[#080808] mb-6">Program &amp; Curriculum</h2>
            <Accordion className="space-y-3">
              {faqs.slice(0, 4).map((faq) => (
                <AccordionItem key={faq.id} value={faq.id} className="border border-[#d8d8d8] bg-white rounded-[8px] px-6 py-1 hover:border-[#080808] transition-colors">
                  <AccordionTrigger className="font-semibold text-[#080808] hover:text-[#080808] transition-colors text-left text-base">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-[#5a5a5a] pt-2 leading-relaxed text-sm">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Registration & Pricing FAQs */}
          <div className="mb-16">
            <h2 className="text-2xl font-semibold text-[#080808] mb-6">Registration &amp; Eligibility</h2>
            <Accordion className="space-y-3">
              {faqs.slice(4, 8).map((faq) => (
                <AccordionItem key={faq.id} value={faq.id} className="border border-[#d8d8d8] bg-white rounded-[8px] px-6 py-1 hover:border-[#080808] transition-colors">
                  <AccordionTrigger className="font-semibold text-[#080808] hover:text-[#080808] transition-colors text-left text-base">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-[#5a5a5a] pt-2 leading-relaxed text-sm">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Additional FAQs */}
          <div>
            <h2 className="text-2xl font-semibold text-[#080808] mb-6">Logistics &amp; General Questions</h2>
            <Accordion className="space-y-3">
              {additionalFaqs.map((faq) => (
                <AccordionItem key={faq.id} value={faq.id} className="border border-[#d8d8d8] bg-white rounded-[8px] px-6 py-1 hover:border-[#080808] transition-colors">
                  <AccordionTrigger className="font-semibold text-[#080808] hover:text-[#080808] transition-colors text-left text-base">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-[#5a5a5a] pt-2 leading-relaxed text-sm">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#080808] text-white border-t border-[#d8d8d8]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4 tracking-[-0.8px]">Didn&apos;t Find Your Answer?</h2>
          <p className="text-lg text-[#888888] mb-8 leading-relaxed">
            Get in touch with our team — we&apos;re happy to help with any additional questions.
          </p>
          <a
            href="/contact"
            className="inline-block px-6 py-3 bg-white text-[#080808] font-medium text-sm rounded-[4px] hover:bg-[#eaeaea] transition-all shadow-sm"
          >
            Contact Us
          </a>
        </div>
      </section>

      <Footer />
    </div>
  )
}
