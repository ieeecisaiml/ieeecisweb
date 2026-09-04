import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  display: 'swap',
})

const BASE_URL = 'https://ieeecissummerschool2026.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  // Primary SEO
  title: {
    default: 'IEEE CIS Summer School hosted by Department of CSE (AI & ML), PCCOE',
    template: '%s | IEEE CIS Summer School hosted by Department of CSE (AI & ML), PCCOE',
  },
  description:
    'IEEE CIS Summer School hosted by Department of CSE (AI & ML), PCCOE — an intensive 6-day IEEE CIS residential program on Fine-Tuning Large Language Models & Inference Optimization. June 22–27, 2026, Pimpri Chinchwad College of Engineering, Pune, India.',
  keywords: [
    'IEEE CIS Summer School',
    'IEEE CIS Summer School hosted by Department of CSE (AI & ML), PCCOE',
    'Ieeecissummerschool',
    'ieeecissummerschool2026',
    'PCCOE Summer School',
    'Fine-Tuning LLMs',
    'Large Language Models',
    'Inference Optimization',
    'LLM Training',
    'LoRA QLoRA',
    'GPTQ AWQ quantization',
    'vLLM TGI deployment',
    'AI Summer School India',
    'IEEE Computational Intelligence Society',
    'Pimpri Chinchwad College of Engineering',
    'PCCoE Pune',
    'AI Workshop Pune 2026',
  ],
  authors: [{ name: 'Department of CSE (AI & ML), PCCOE', url: BASE_URL }],
  creator: 'Department of CSE (AI & ML), PCCOE',
  publisher: 'Pimpri Chinchwad College of Engineering',
  category: 'Education, Technology, AI',

  // Canonical & alternate
  alternates: {
    canonical: BASE_URL,
  },

  // Open Graph (Facebook, LinkedIn, WhatsApp previews)
  openGraph: {
    type: 'website',
    url: BASE_URL,
    siteName: 'IEEE CIS Summer School hosted by Department of CSE (AI & ML), PCCOE',
    title: 'IEEE CIS Summer School hosted by Department of CSE (AI & ML), PCCOE',
    description:
      'Intensive 6-day IEEE CIS residential program. Learn to fine-tune LLMs (LLaMA, Mistral), apply GPTQ/AWQ quantization, and deploy at scale with vLLM. June 22–27, 2026 at PCCoE, Pune.',
    images: [
      {
        url: '/images/pccoecampus.jpeg',
        width: 1400,
        height: 450,
        alt: 'IEEE CIS Summer School — PCCoE Campus Pune',
        type: 'image/jpeg',
      },
    ],
    locale: 'en_IN',
  },

  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    site: '@pccoe_pune',
    creator: '@pccoe_pune',
    title: 'IEEE CIS Summer School hosted by Department of CSE (AI & ML), PCCOE',
    description:
      'Intensive 6-day IEEE CIS residential AI school at PCCoE Pune. Fine-tune LLaMA, Mistral, Phi. LoRA, QLoRA, GPTQ, vLLM. June 22–27, 2026.',
    images: ['/images/pccoecampus.jpeg'],
  },

  // Icons — all slots use the official PCCoE icon
  icons: {
    icon: [
      { url: '/pccoeicon.png', sizes: '32x32',  type: 'image/png' },
      { url: '/pccoeicon.png', sizes: '192x192', type: 'image/png' },
      { url: '/pccoeicon.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [{ url: '/pccoeicon.png', sizes: '180x180', type: 'image/png' }],
    shortcut: '/pccoeicon.png',
  },

  // Manifest & theme
  manifest: '/manifest.json',

  // Robots directive
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },

  // Verification (add values once verified)
  // verification: {
  //   google: 'YOUR_GOOGLE_SEARCH_CONSOLE_TOKEN',
  // },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#ffffff' },
  ],
  width: 'device-width',
  initialScale: 1,
}

// JSON-LD Structured Data
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Event',
      '@id': `${BASE_URL}/#event`,
      name: 'IEEE CIS Summer School hosted by Department of CSE (AI & ML), PCCOE',
      description:
        'An intensive 6-day residential IEEE CIS Summer School on Fine-Tuning Large Language Models and Inference Optimization hosted by Department of CSE (AI & ML), PCCOE.',
      startDate: '2026-06-22',
      endDate: '2026-06-27',
      eventStatus: 'https://schema.org/EventScheduled',
      eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
      url: BASE_URL,
      image: `${BASE_URL}/images/pccoecampus.jpeg`,
      organizer: {
        '@type': 'EducationalOrganization',
        name: 'Department of CSE (AI & ML), PCCOE',
        url: 'https://www.pccoepune.com',
      },
      location: {
        '@type': 'Place',
        name: 'Pimpri Chinchwad College of Engineering',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Survey No. 4, Nigdi Pradhikaran',
          addressLocality: 'Pune',
          addressRegion: 'Maharashtra',
          postalCode: '411044',
          addressCountry: 'IN',
        },
      },
      offers: {
        '@type': 'Offer',
        url: `${BASE_URL}/register`,
        availability: 'https://schema.org/InStock',
        priceCurrency: 'INR',
        validFrom: '2026-01-01',
      },
    },
    {
      '@type': 'EducationalOrganization',
      '@id': `${BASE_URL}/#organization`,
      name: 'Department of CSE (AI & ML), PCCOE',
      url: 'https://www.pccoepune.com',
      logo: `${BASE_URL}/pccoeicon.png`,
      sameAs: [
        'https://www.facebook.com/pages/PCCOE/725095680876531',
        'https://www.linkedin.com/company/pccoe-pune',
        'https://twitter.com/pccoe_pune',
        'https://www.instagram.com/pccoepune/',
        'https://www.youtube.com/channel/UCQiPDETOiteTLmAvvPk1WjA',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${BASE_URL}/#website`,
      url: BASE_URL,
      name: 'Ieeecissummerschool',
      description: 'Official website of the IEEE CIS Summer School hosted by Department of CSE (AI & ML), PCCOE',
      publisher: { '@id': `${BASE_URL}/#organization` },
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} bg-[#ffffff] text-[#080808]`}>
      <head>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://vercel-analytics.com" />
      </head>
      <body className="font-sans antialiased text-[#363636] bg-[#ffffff] selection:bg-[#080808] selection:text-[#ffffff]">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
