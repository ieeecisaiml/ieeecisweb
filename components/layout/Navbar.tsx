'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/team', label: 'Our Team' },
    { href: '/venue', label: 'Venue' },
    { href: '/travel-grant', label: 'Travel Grant' },
    { href: '/faq', label: 'FAQ' },
    { href: '/contact', label: 'Contact' },
    { href: '/code-of-conduct', label: 'Code of Conduct' },
  ]

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-200 bg-white/95 backdrop-blur-md ${
        isScrolled
          ? 'border-b border-[#d8d8d8] shadow-xs'
          : 'border-b border-[#d8d8d8]/80'
      }`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-6 xl:px-8 2xl:px-10">
        <div className="flex justify-between items-center h-18">
          <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
            <div className="flex flex-row items-stretch justify-start bg-white border border-[#e5e5e5] rounded-[6px] shadow-sm divide-x divide-[#e5e5e5] overflow-hidden w-[280px] sm:w-[360px] md:w-[480px] lg:w-[380px] xl:w-[420px] 2xl:w-[480px] h-[36px] sm:h-[42px] md:h-[48px] lg:h-[42px] xl:h-[46px] 2xl:h-[52px] transition-transform group-hover:scale-[1.02] flex-shrink-0">
              <div style={{ flex: 2.6 }} className="flex items-center justify-center p-1.5 sm:p-2">
                <div className="relative w-full h-full">
                  <Image src="/logos/logo1.png" alt="IEEE CIS" fill className="object-contain" />
                </div>
              </div>
              <div style={{ flex: 2.0 }} className="flex items-center justify-center p-1 sm:p-1.5">
                <div className="relative w-full h-full">
                  <Image src="/logos/logo2.png" alt="IEEE CIS PCCOE" fill className="object-contain" />
                </div>
              </div>
              <div style={{ flex: 3.4 }} className="flex items-center justify-center p-1.5 sm:p-2.5">
                <div className="relative w-full h-full">
                  <Image src="/logos/logo4.png" alt="IEEE Pune Section" fill className="object-contain" />
                </div>
              </div>
              <div style={{ flex: 2.0 }} className="flex items-center justify-center p-1 sm:p-1.5">
                <div className="relative w-full h-full">
                  <Image src="/logos/logo5.png" alt="IEEE YP Pune" fill className="object-contain" />
                </div>
              </div>
              <div style={{ flex: 1.3 }} className="flex items-center justify-center p-0.5 sm:p-1">
                <div className="relative w-full h-full">
                  <Image src="/logos/logo3.png" alt="PCCOE Logo" fill className="object-contain" />
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center hidden xl:flex flex-shrink-0">
              <span className="text-[14px] 2xl:text-[15px] font-semibold text-[#111111] leading-[1.2] tracking-tight">
                IEEE CIS School
              </span>
              <span className="text-[10px] 2xl:text-[11px] font-medium text-[#666666] leading-[1.2] mt-0.5">
                hosted by Dept. of CSE (AI & ML), PCCOE
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-0.5 2xl:gap-1 flex-shrink-0">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-1.5 2xl:px-2 py-1.5 text-[12px] 2xl:text-[13px] font-medium text-[#363636] hover:text-[#080808] hover:bg-[#f5f5f5] rounded-[4px] transition-colors whitespace-nowrap"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/register"
              className="ml-1.5 2xl:ml-2 px-2.5 2xl:px-3 py-1.5 2xl:py-2 bg-[#080808] text-white rounded-[4px] text-[12px] 2xl:text-[13px] font-medium hover:bg-[#222222] transition-colors whitespace-nowrap"
            >
              Register
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="lg:hidden p-2 rounded-[4px] text-[#080808] hover:bg-[#f5f5f5] transition-colors border border-[#d8d8d8] flex-shrink-0 ml-2"
            aria-label="Toggle Menu"
          >
            {isMobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileOpen && (
          <div className="lg:hidden bg-white border-b border-[#d8d8d8] py-4 px-2 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-3 py-2 text-sm font-medium text-[#363636] hover:text-[#080808] hover:bg-[#f5f5f5] rounded-[4px] transition-colors"
                onClick={() => setIsMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/register"
              className="block w-full px-4 py-2.5 bg-[#080808] text-white rounded-[4px] text-sm font-medium text-center hover:bg-[#222222] transition-colors mt-3"
              onClick={() => setIsMobileOpen(false)}
            >
              Register Now
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
