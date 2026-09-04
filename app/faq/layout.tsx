import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'FAQ — IEEE CIS Summer School hosted by Department of CSE (AI & ML), PCCOE',
  description:
    'Frequently asked questions about the IEEE CIS Summer School hosted by Department of CSE (AI & ML), PCCOE — eligibility, fees, accommodation, schedule, certificates, and registration details.',
  alternates: { canonical: 'https://ieeecissummerschool2026.vercel.app/faq' },
  openGraph: {
    title: 'FAQ — IEEE CIS Summer School hosted by Department of CSE (AI & ML), PCCOE',
    description: 'All your questions about the IEEE CIS Summer School hosted by Department of CSE (AI & ML), PCCOE answered — who can attend, what to bring, costs, and more.',
    url: 'https://ieeecissummerschool2026.vercel.app/faq',
  },
}

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
