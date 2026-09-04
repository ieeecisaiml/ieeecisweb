import Link from 'next/link'
import { Mail, MapPin } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-white border-t border-[#d8d8d8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div>
            <h3 className="font-semibold text-[#080808] text-base mb-1">IEEE CIS Summer School</h3>
            <p className="text-xs font-medium text-[#5a5a5a] mb-3">
              hosted by Department of CSE (AI &amp; ML), PCCOE
            </p>
            <p className="text-sm text-[#5a5a5a] leading-relaxed">
              Advancing knowledge and skills in computational intelligence through intensive hands-on learning and mentorship.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-[#080808] text-sm mb-4">Quick Links</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/program" className="text-[#5a5a5a] hover:text-[#080808] transition-colors">
                  Program
                </Link>
              </li>
              <li>
                <Link href="/speakers" className="text-[#5a5a5a] hover:text-[#080808] transition-colors">
                  Plenary Presenters
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-[#5a5a5a] hover:text-[#080808] transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/register" className="text-[#5a5a5a] hover:text-[#080808] transition-colors">
                  Register
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-[#5a5a5a] hover:text-[#080808] transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-[#080808] text-sm mb-4">Resources</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/about" className="text-[#5a5a5a] hover:text-[#080808] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/venue" className="text-[#5a5a5a] hover:text-[#080808] transition-colors">
                  Venue &amp; Travel
                </Link>
              </li>
              <li>
                <a href="https://ieee-cis.org" target="_blank" rel="noopener noreferrer" className="text-[#5a5a5a] hover:text-[#080808] transition-colors">
                  IEEE CIS Society
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-[#080808] text-sm mb-4">Contact</h4>
            <div className="space-y-3 text-sm text-[#5a5a5a]">
              <div className="flex items-start gap-2">
                <Mail size={16} className="mt-0.5 flex-shrink-0 text-[#080808]" />
                <a href="mailto:cissummerschool@pccoepune.org" className="hover:text-[#080808] transition-colors break-all">
                  cissummerschool@pccoepune.org
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 flex-shrink-0 text-[#080808]" />
                <span>PCCoE, Sector 26, Pradhikaran, Nigdi, Pune – 411044, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-[#d8d8d8] pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-[#898989]">
            <p>&copy; {currentYear} IEEE Computational Intelligence Society. All rights reserved.</p>
            <div className="flex gap-4">
              <Link href="/privacy" className="hover:text-[#080808] transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-[#080808] transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
