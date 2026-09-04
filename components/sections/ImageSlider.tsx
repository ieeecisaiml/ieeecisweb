'use client'

import React, { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface Slide {
  image: string
  title: string
  subtitle: string
  description: string
  tag: string
  caption: string
}

// Local inline SVG icons for robustness
const FacebookIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
)

const LinkedinIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0h.003z" />
  </svg>
)

const TwitterIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)

const InstagramIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
)

const YoutubeIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.518 0-9.388.508a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.87.508 9.388.508 9.388.508s7.518 0 9.388-.508a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
)

export function ImageSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides: Slide[] = [
    {
      image: '/images/pccoecampus.jpeg',
      tag: 'WELCOME TO PCCOE',
      title: 'PCCoE Campus, Pune',
      subtitle: 'Hosting IEEE CIS Summer School',
      description: 'Department of CSE (AI & ML), PCCOE is proud to host the 6-day residential summer school on Fine-Tuning LLMs & Inference Optimization.',
      caption: 'PIMPRI CHINCHWAD COLLEGE OF ENGINEERING CAMPUS',
    },
    {
      image: '/images/survey.jpeg',
      tag: 'ACADEMIC EXCELLENCE',
      title: 'Outlook ICARE Rankings',
      subtitle: 'Ranked 37th in India',
      description: 'Consistently recognized among the top private engineering colleges for academic standards, infrastructure, and placements.',
      caption: 'OUTLOOK RANKINGS OF PCCOE',
    },
    {
      image: '/images/iccubea.jpeg',
      tag: 'RESEARCH & INNOVATION',
      title: 'ICCUBEA Flagship Conference',
      subtitle: 'Driving Computing & Automation Research',
      description: 'PCCoE organizes the flagship IEEE International Conference on Computing, Communication, Control and Automation.',
      caption: 'IEEE INTERNATIONAL CONFERENCE (ICCUBEA) AT PCCOE',
    },
    {
      image: '/images/newstat.jpeg',
      tag: 'PLACEMENT RECORDS',
      title: 'Outstanding Placement & Stats',
      subtitle: 'Empowering Students for Global Careers',
      description: 'Exceptional track record of placement in top-tier multinational companies and global technology leaders.',
      caption: 'PCCoE PLACEMENT & ACADEMIC STATISTICS',
    },
  ]

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }, [slides.length])

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  // Autoplay functionality
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide()
    }, 6000)
    return () => clearInterval(timer)
  }, [nextSlide])

  return (
    <div className="relative w-full group overflow-hidden border-b border-border bg-slate-950">
      {/* Main Slider Container */}
      <div className="relative w-full aspect-[28/9] overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
          >
            {/* Background Image */}
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              priority={index === 0}
              className="object-cover object-center"
              sizes="100vw"
            />


          </div>
        ))}

        {/* Side Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-1.5 rounded-full bg-black/40 hover:bg-black/60 text-white/80 hover:text-white transition-all duration-200 md:opacity-0 group-hover:opacity-100 border border-white/10"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-14 top-1/2 -translate-y-1/2 z-30 p-1.5 rounded-full bg-black/40 hover:bg-black/60 text-white/80 hover:text-white transition-all duration-200 md:opacity-0 group-hover:opacity-100 border border-white/10"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
        </button>

        {/* Social Media Floating Icons on Right Edge */}
        <div className="absolute right-2 top-1/2 -translate-y-1/2 z-30 flex flex-col gap-2.5">
          <a
            href="https://www.facebook.com/pages/PCCOE/725095680876531"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-full bg-[#1877f2] hover:scale-110 transition-transform flex items-center justify-center text-white shadow-md"
            title="Facebook"
          >
            <FacebookIcon />
          </a>
          <a
            href="https://www.linkedin.com/company/pccoe-pune?trk=biz-companies-cym"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-full bg-[#0a66c2] hover:scale-110 transition-transform flex items-center justify-center text-white shadow-md"
            title="LinkedIn"
          >
            <LinkedinIcon />
          </a>
          <a
            href="https://twitter.com/pccoe_pune"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-full bg-[#000000] hover:scale-110 transition-transform flex items-center justify-center text-white shadow-md border border-white/10"
            title="Twitter / X"
          >
            <TwitterIcon />
          </a>
          <a
            href="https://www.instagram.com/pccoepune/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] hover:scale-110 transition-transform flex items-center justify-center text-white shadow-md"
            title="Instagram"
          >
            <InstagramIcon />
          </a>
          <a
            href="https://www.youtube.com/channel/UCQiPDETOiteTLmAvvPk1WjA"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-full bg-[#ff0000] hover:scale-110 transition-transform flex items-center justify-center text-white shadow-md"
            title="YouTube"
          >
            <YoutubeIcon />
          </a>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ${index === currentSlide ? 'w-8 bg-primary' : 'w-2.5 bg-white/50'
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Caption Bar */}
      <div className="w-full bg-[#080808] text-white py-3 px-4 text-center font-medium tracking-[1.5px] text-xs uppercase select-none border-t border-[#d8d8d8]">
        {slides[currentSlide].caption}
      </div>
    </div>
  )
}
