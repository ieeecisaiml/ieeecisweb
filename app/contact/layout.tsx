import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us — IEEE CIS Summer School hosted by Department of CSE (AI & ML), PCCOE',
  description:
    'Get in touch with the IEEE CIS Summer School hosted by Department of CSE (AI & ML), PCCOE organising team. Reach out for registration queries, sponsorship, speaker invitations, or general information.',
  alternates: { canonical: 'https://ieeecissummerschool2026.vercel.app/contact' },
  openGraph: {
    title: 'Contact Us — IEEE CIS Summer School hosted by Department of CSE (AI & ML), PCCOE',
    description: 'Contact the IEEE CIS Summer School hosted by Department of CSE (AI & ML), PCCOE team for queries about registration, accommodation, or program details.',
    url: 'https://ieeecissummerschool2026.vercel.app/contact',
  },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
