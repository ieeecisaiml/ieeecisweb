import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Register — IEEE CIS Summer School hosted by Department of CSE (AI & ML), PCCOE',
  description:
    'Register for the IEEE CIS Summer School hosted by Department of CSE (AI & ML), PCCOE on Fine-Tuning LLMs & Inference Optimization. June 22–27, 2026 at PCCoE Pune.',
  alternates: { canonical: 'https://ieeecissummerschool2026.vercel.app/register' },
  openGraph: {
    title: 'Register Now — IEEE CIS Summer School hosted by Department of CSE (AI & ML), PCCOE',
    description: 'Secure your spot at the IEEE CIS Summer School hosted by Department of CSE (AI & ML), PCCOE. Fine-tune LLMs, earn a certificate, and network with AI experts.',
    url: 'https://ieeecissummerschool2026.vercel.app/register',
  },
}

export default function RegisterLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
