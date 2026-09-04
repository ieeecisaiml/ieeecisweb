'use client'

import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Card } from '@/components/ui/card'
import Image from 'next/image'
import { Mail, MapPin, Clock, CheckCircle2 } from 'lucide-react'
import { FormEvent, useState } from 'react'

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.8v8.37h2.8v-4.87c0-.26.05-.52.12-.7a1.16 1.16 0 0 1 1.07-.78c.76 0 1.33.58 1.33 1.62v4.73zm-11-8.37H4.7v8.37h2.8zm-1.4-2.8a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z" />
  </svg>
)

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formState)
    setIsSubmitted(true)
    setTimeout(() => {
      setFormState({ name: '', email: '', subject: '', message: '' })
      setIsSubmitted(false)
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen bg-white text-[#5a5a5a] flex flex-col font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-[4px] bg-[#f5f5f5] text-[#080808] text-xs font-medium uppercase tracking-[1.5px] mb-6 border border-[#d8d8d8]">
            Contact Us
          </div>
          <h1 className="text-4xl sm:text-5xl font-semibold text-[#080808] mb-4 tracking-[-0.8px]">Get in Touch</h1>
          <p className="text-lg sm:text-xl text-[#5a5a5a] leading-relaxed">
            Have questions? We&apos;d love to hear from you. Reach out to our team.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {/* Contact Cards */}
            <Card className="p-6 border border-[#d8d8d8] bg-white rounded-[8px] hover:border-[#080808] hover:shadow-layered transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-[4px] bg-[#f5f5f5] text-[#080808] flex items-center justify-center flex-shrink-0 border border-[#d8d8d8]">
                  <Mail className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold text-[#080808]">Email</h3>
              </div>
              <p className="text-[#5a5a5a] mb-4 text-sm">General inquiries, registration support, and collaborations</p>
              <a href="mailto:cissummerschool@pccoepune.org" className="text-[#080808] font-medium hover:underline text-base break-all">
                cissummerschool@pccoepune.org
              </a>
            </Card>

            <Card className="p-6 border border-[#d8d8d8] bg-white rounded-[8px] hover:border-[#080808] hover:shadow-layered transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-[4px] bg-[#f5f5f5] text-[#080808] flex items-center justify-center flex-shrink-0 border border-[#d8d8d8]">
                  <MapPin className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold text-[#080808]">Location</h3>
              </div>
              <p className="text-[#5a5a5a] text-sm leading-relaxed">
                Department of CSE (AI &amp; ML), PCCoE<br />
                Pimpri Chinchwad College of Engineering<br />
                Sector 26, Pradhikaran, Nigdi, Pune – 411044, Maharashtra, India
              </p>
            </Card>
          </div>

          {/* Contact Form & Hours */}
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-[8px] p-8 border border-[#d8d8d8] shadow-sm">
              <h2 className="text-2xl font-semibold text-[#080808] mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#080808] mb-1.5">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3.5 py-2.5 border border-[#d8d8d8] rounded-[4px] bg-white text-[#080808] placeholder-[#888888] focus:outline-none focus:border-[#080808] focus:ring-1 focus:ring-[#080808] text-sm"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#080808] mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3.5 py-2.5 border border-[#d8d8d8] rounded-[4px] bg-white text-[#080808] placeholder-[#888888] focus:outline-none focus:border-[#080808] focus:ring-1 focus:ring-[#080808] text-sm"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-[#080808] mb-1.5">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-3.5 py-2.5 border border-[#d8d8d8] rounded-[4px] bg-white text-[#080808] placeholder-[#888888] focus:outline-none focus:border-[#080808] focus:ring-1 focus:ring-[#080808] text-sm"
                    placeholder="How can we help?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#080808] mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-3.5 py-2.5 border border-[#d8d8d8] rounded-[4px] bg-white text-[#080808] placeholder-[#888888] focus:outline-none focus:border-[#080808] focus:ring-1 focus:ring-[#080808] resize-none text-sm"
                    placeholder="Your message..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-2.5 bg-[#080808] text-white font-medium rounded-[4px] hover:bg-[#222222] transition-all shadow-sm cursor-pointer text-sm"
                >
                  Send Message
                </button>

                {isSubmitted && (
                  <div className="p-4 bg-[#00d722]/15 border border-[#00d722]/40 rounded-[4px] text-[#080808] text-sm">
                    Thank you for your message! We&apos;ll get back to you shortly.
                  </div>
                )}
              </form>
            </div>

            {/* Contact Info & Hours */}
            <div>
              <h2 className="text-2xl font-semibold text-[#080808] mb-6">Contact Information</h2>

              <Card className="p-6 border border-[#d8d8d8] bg-white rounded-[8px] mb-6">
                <div className="flex items-start gap-3 mb-6">
                  <div className="w-10 h-10 rounded-[4px] bg-[#f5f5f5] text-[#080808] flex items-center justify-center flex-shrink-0 border border-[#d8d8d8]">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#080808] mb-3">Office Hours</h3>
                    <div className="space-y-2 text-[#5a5a5a] text-sm">
                      <p>
                        <strong className="text-[#080808]">Monday - Friday</strong>
                        <br />
                        9:00 AM - 6:00 PM (IST)
                      </p>
                      <p>
                        <strong className="text-[#080808]">Saturday &amp; Sunday</strong>
                        <br />
                        Closed (email us anytime)
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border border-[#d8d8d8] bg-white rounded-[8px]">
                <h3 className="font-semibold text-[#080808] mb-4">Support &amp; Assistance</h3>
                <ul className="space-y-3 text-[#5a5a5a] text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#080808] flex-shrink-0" />
                    <span>Email responses within 24 hours</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#080808] flex-shrink-0" />
                    <span>Dedicated participant onboarding support</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#080808] flex-shrink-0" />
                    <span>Hostel guest house accommodation assistance</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#080808] flex-shrink-0" />
                    <span>Travel grant &amp; logistics coordination</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-6 border border-[#d8d8d8] bg-white rounded-[8px] mt-6">
                <h3 className="font-semibold text-[#080808] mb-2">Special Requests?</h3>
                <p className="text-[#5a5a5a] text-sm leading-relaxed">
                  Have specific requirements or need faculty authorization? Use the contact form to let us know and we&apos;ll reach out promptly.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Development Team */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#fafafa] border-t border-[#d8d8d8]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-[#080808] mb-3 text-center">Development Team</h2>
          <p className="text-[#5a5a5a] text-center mb-12 max-w-2xl mx-auto text-sm sm:text-base">
            The student developers at Pimpri Chinchwad College of Engineering who built and designed this platform.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Vrushabh Hirap', role: 'Full-Stack Developer', link: 'https://www.linkedin.com/in/vrushabh-hirap/', image: '/vrushabh.jpeg' },
              { name: 'Chirag Ferwani', role: 'Full-Stack Developer', link: 'https://www.linkedin.com/in/chiragferwani', image: '/chiragferwani.png' },
              { name: 'Kshitij Jadhav', role: 'Frontend Developer', link: 'https://www.linkedin.com/in/kshitij-jadhav/', image: '/kshitij.png' },
            ].map((member, idx) => (
              <Card key={idx} className="p-6 border border-[#d8d8d8] bg-white rounded-[8px] flex flex-col items-center justify-between text-center hover:border-[#080808] hover:shadow-layered transition-all duration-200 max-w-sm mx-auto w-full">
                <div className="flex flex-col items-center w-full">
                  <div className="relative w-24 h-24 bg-[#f0f0f0] text-[#080808] rounded-full flex items-center justify-center font-semibold text-2xl mb-4 flex-shrink-0 overflow-hidden border border-[#d8d8d8] shadow-sm">
                    {member.image ? (
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        sizes="96px"
                        className="object-cover"
                      />
                    ) : (
                      <span className="text-[#080808] font-semibold">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    )}
                  </div>
                  <h3 className="font-semibold text-[#080808] text-base mb-1">{member.name}</h3>
                  <p className="text-xs font-medium text-[#5a5a5a] mb-3">{member.role}</p>
                </div>
                <a
                  href={member.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#5a5a5a] hover:text-[#080808] transition-colors p-2 hover:bg-[#f5f5f5] rounded-full"
                  aria-label={`${member.name} LinkedIn`}
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
