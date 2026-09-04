import type { Metadata } from 'next'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { ScheduleSwitcher } from '@/components/sections/ScheduleSwitcher'
import { Arrow } from '@/components/ui/arrow'
import { CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Program Schedule — IEEE CIS Summer School hosted by Department of CSE (AI & ML), PCCOE',
  description:
    'Explore the 6-day program of the IEEE CIS Summer School hosted by Department of CSE (AI & ML), PCCOE. From LLM fundamentals and LoRA/QLoRA fine-tuning to GPTQ quantization, vLLM serving, and capstone project deployment.',
  alternates: { canonical: 'https://ieeecissummerschool2026.vercel.app/program' },
  openGraph: {
    title: 'Program Schedule — IEEE CIS Summer School hosted by Department of CSE (AI & ML), PCCOE',
    description: '6-day curriculum covering LLM fine-tuning, quantization, deployment pipelines, and hands-on capstone projects. June 22–27, 2026.',
    url: 'https://ieeecissummerschool2026.vercel.app/program',
  },
}

export default function ProgramPage() {
  return (
    <div className="min-h-screen bg-white text-[#5a5a5a] flex flex-col font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-[4px] bg-[#f5f5f5] text-[#080808] text-xs font-medium uppercase tracking-[1.5px] mb-6 border border-[#d8d8d8]">
            Program Overview
          </div>
          <h1 className="text-4xl sm:text-5xl font-semibold text-[#080808] mb-4 tracking-[-0.8px]">Program Schedule &amp; Modules</h1>
          <p className="text-lg sm:text-xl text-[#5a5a5a] leading-relaxed">
            A comprehensive six-day curriculum designed to take you from LLM fundamentals to production-grade deployment
          </p>
        </div>
      </section>

      {/* Program Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-[8px] p-8 border border-[#d8d8d8] mb-16 shadow-sm">
            <h2 className="text-2xl font-semibold text-[#080808] mb-4">Program Highlights</h2>
            <ul className="space-y-3 text-[#5a5a5a]">
              <li className="flex gap-3 group">
                <Arrow variant="bullet" className="text-[#080808] mt-1" size={16} />
                <span>
                  <strong className="text-[#080808]">40+ hours</strong> of intensive instruction combining theory and GPU practice
                </span>
              </li>
              <li className="flex gap-3 group">
                <Arrow variant="bullet" className="text-[#080808] mt-1" size={16} />
                <span>
                  <strong className="text-[#080808]">6 expert plenary speakers</strong> presenting cutting-edge research in LLMs and CI
                </span>
              </li>
              <li className="flex gap-3 group">
                <Arrow variant="bullet" className="text-[#080808] mt-1" size={16} />
                <span>
                  <strong className="text-[#080808]">Hands-on labs</strong> with PyTorch, HuggingFace, PEFT, TRL, and vLLM
                </span>
              </li>
              <li className="flex gap-3 group">
                <Arrow variant="bullet" className="text-[#080808] mt-1" size={16} />
                <span>
                  <strong className="text-[#080808]">Capstone projects</strong> with direct mentorship from industry instructors
                </span>
              </li>
              <li className="flex gap-3 group">
                <Arrow variant="bullet" className="text-[#080808] mt-1" size={16} />
                <span>
                  <strong className="text-[#080808]">Networking opportunities</strong> with peers, faculty, and industry leaders
                </span>
              </li>
              <li className="flex gap-3 group">
                <Arrow variant="bullet" className="text-[#080808] mt-1" size={16} />
                <span>
                  <strong className="text-[#080808]">Official IEEE CIS certificate</strong> upon successful completion
                </span>
              </li>
            </ul>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white rounded-[8px] p-6 border border-[#d8d8d8] shadow-sm">
              <h3 className="text-xl font-semibold text-[#080808] mb-4">Daily Structure</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="font-semibold text-[#080808]">09:00 - 10:45</p>
                  <p className="text-[#5a5a5a]">Plenary presentation or keynote lecture</p>
                </div>
                <div>
                  <p className="font-semibold text-[#080808]">10:45 - 11:00</p>
                  <p className="text-[#5a5a5a]">Coffee break & networking</p>
                </div>
                <div>
                  <p className="font-semibold text-[#080808]">11:00 - 13:00</p>
                  <p className="text-[#5a5a5a]">Hands-on GPU lab session</p>
                </div>
                <div>
                  <p className="font-semibold text-[#080808]">13:00 - 14:00</p>
                  <p className="text-[#5a5a5a]">Lunch break</p>
                </div>
                <div>
                  <p className="font-semibold text-[#080808]">14:00 - 16:00</p>
                  <p className="text-[#5a5a5a]">Practical workshop / lab deep dive</p>
                </div>
                <div>
                  <p className="font-semibold text-[#080808]">16:00 - 17:30</p>
                  <p className="text-[#5a5a5a]">Interactive discussion, Q&A, and clinic</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-[8px] p-6 border border-[#d8d8d8] shadow-sm">
              <h3 className="text-xl font-semibold text-[#080808] mb-4">What&apos;s Included</h3>
              <ul className="space-y-2.5 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#080808] flex-shrink-0" />
                  <span className="text-[#5a5a5a]">Complete notebooks, slides, and code repositories</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#080808] flex-shrink-0" />
                  <span className="text-[#5a5a5a]">Daily lunch and refreshments</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#080808] flex-shrink-0" />
                  <span className="text-[#5a5a5a]">GPU cloud compute access for training and inference</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#080808] flex-shrink-0" />
                  <span className="text-[#5a5a5a]">Networking events and banquet dinner</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#080808] flex-shrink-0" />
                  <span className="text-[#5a5a5a]">Direct instructor mentorship during labs</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#080808] flex-shrink-0" />
                  <span className="text-[#5a5a5a]">Official IEEE CIS Certificate of Completion</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Schedule */}
      <ScheduleSwitcher />

      {/* Learning Outcomes */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#fafafa] border-y border-[#d8d8d8]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold text-[#080808] mb-8 text-center">Learning Outcomes</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              'Understand transformer architectures, attention mechanisms, and scaling laws',
              'Master parameter-efficient fine-tuning (LoRA, QLoRA) on custom datasets',
              'Implement preference alignment with Direct Preference Optimization (DPO)',
              'Apply post-training quantization (GPTQ, AWQ, GGUF) without quality loss',
              'Deploy high-throughput inference engines with continuous batching via vLLM',
              'Design end-to-end production RAG pipelines and evaluate generation quality',
            ].map((outcome, idx) => (
              <div key={idx} className="bg-white rounded-[8px] p-6 border border-[#d8d8d8] hover:border-[#080808] hover:shadow-layered transition-all">
                <h3 className="font-semibold text-[#080808] mb-2 text-base">Outcome {idx + 1}</h3>
                <p className="text-[#5a5a5a] text-sm leading-relaxed">{outcome}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prerequisites */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold text-[#080808] mb-8">Prerequisites</h2>

          <div className="bg-white rounded-[8px] p-8 border border-[#d8d8d8] shadow-sm">
            <h3 className="text-xl font-semibold text-[#080808] mb-4">Required Knowledge</h3>
            <ul className="space-y-2 mb-8 text-[#5a5a5a]">
              <li className="flex gap-2">
                <span className="text-[#080808] font-bold">•</span>
                <span>Proficiency in Python programming and NumPy / Pandas</span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#080808] font-bold">•</span>
                <span>Basic understanding of deep learning and PyTorch tensors</span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#080808] font-bold">•</span>
                <span>Familiarity with neural network training (loss, backpropagation)</span>
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-[#080808] mb-4">Technical Requirements</h3>
            <ul className="space-y-2 text-[#5a5a5a]">
              <li className="flex gap-2">
                <span className="text-[#080808] font-bold">•</span>
                <span>Laptop with modern browser and high-speed Wi-Fi capability</span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#080808] font-bold">•</span>
                <span>Google Colab / Kaggle account or modern terminal access</span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#080808] font-bold">•</span>
                <span>All lab code and GPU runtimes will be provided</span>
              </li>
            </ul>

            <div className="mt-8 p-4 bg-[#fafafa] border border-[#d8d8d8] rounded-[4px]">
              <p className="text-sm text-[#5a5a5a]">
                <strong className="text-[#080808]">Note:</strong> Refresher notebooks and environment setup guides will be shared with all registered participants prior to the school start date.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
