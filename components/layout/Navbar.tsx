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
    { href: '/about', label: 'About' },
    { href: '/program', label: 'Program' },
    { href: '/speakers', label: 'Speakers' },
    { href: '/team', label: 'Our Team' },
    { href: '/venue', label: 'Venue' },
    { href: '/faq', label: 'FAQ' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-200 bg-white/95 backdrop-blur-md ${
        isScrolled
          ? 'border-b border-[#d8d8d8] shadow-xs'
          : 'border-b border-[#d8d8d8]/80'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 flex-shrink-0 rounded-[4px] overflow-hidden border border-[#d8d8d8] bg-white p-0.5 transition-transform group-hover:scale-105">
              <Image
                src="/pccoe.jpeg"
                alt="PCCoE Logo"
                fill
                sizes="40px"
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-sm sm:text-base font-semibold text-[#080808] leading-tight tracking-tight">
                IEEE CIS Summer School
              </span>
              <span className="text-[11px] font-normal text-[#5a5a5a] hidden sm:inline">
                hosted by Dept. of CSE (AI &amp; ML), PCCOE
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-1.5 text-sm font-medium text-[#363636] hover:text-[#080808] hover:bg-[#f5f5f5] rounded-[4px] transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/register"
              className="ml-3 px-4 py-2 bg-[#080808] text-white rounded-[4px] text-sm font-medium hover:bg-[#222222] transition-colors"
            >
              Register
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="md:hidden p-2 rounded-[4px] text-[#080808] hover:bg-[#f5f5f5] transition-colors border border-[#d8d8d8]"
            aria-label="Toggle Menu"
          >
            {isMobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileOpen && (
          <div className="md:hidden bg-white border-b border-[#d8d8d8] py-4 px-2 space-y-1">
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
