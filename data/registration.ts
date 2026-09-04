export interface RegistrationTier {
  id: string
  name: string
  currency: string
  targetAudience: string
  highlighted: boolean
  features: string[]
  prices: {
    online: {
      earlyBird: number
      standard: number
    }
    offline: {
      earlyBird: number
      standard: number
    }
  }
}

export interface Benefit {
  id: string
  icon: string
  title: string
  description: string
}

export const registrationTiers: RegistrationTier[] = [
  {
    id: 'ieee-cis-student',
    name: 'IEEE CIS Student Member',
    currency: 'INR',
    targetAudience: 'IEEE CIS Student Members',
    highlighted: false,
    prices: {
      online: { earlyBird: 0, standard: 0 },
      offline: { earlyBird: 0, standard: 0 }
    },
    features: [
      'All 6 days of lectures, labs, and clinics',
      'Digital access to all course materials',
      'Print copy of Digital Handbook',
      'Daily tea/coffee and lunch',
      'Welcome reception and closing ceremony',
      'IEEE CIS Certificate of Participation',
      'Free campus accommodation (first-come, first-served)',
      'Free shuttle service',
      'Access to discussion forums (6 months)',
    ],
  },
  {
    id: 'ieee-student',
    name: 'IEEE Student Member',
    currency: 'INR',
    targetAudience: 'IEEE Student Members',
    highlighted: false,
    prices: {
      online: { earlyBird: 500, standard: 600 },
      offline: { earlyBird: 700, standard: 800 }
    },
    features: [
      'All 6 days of lectures, labs, and clinics',
      'Digital access to all course materials',
      'Print copy of Digital Handbook',
      'Daily tea/coffee and lunch',
      'Welcome reception and closing ceremony',
      'IEEE CIS Certificate of Participation',
      'Free campus accommodation (first-come, first-served)',
      'Free shuttle service',
      'Access to discussion forums (6 months)',
    ],
  },
  {
    id: 'non-ieee-student',
    name: 'Non-IEEE Student',
    currency: 'INR',
    targetAudience: 'University students without IEEE membership',
    highlighted: false,
    prices: {
      online: { earlyBird: 700, standard: 800 },
      offline: { earlyBird: 900, standard: 1000 }
    },
    features: [
      'All 6 days of lectures, labs, and clinics',
      'Digital access to all course materials',
      'Print copy of Digital Handbook',
      'Daily tea/coffee and lunch',
      'Welcome reception and closing ceremony',
      'IEEE CIS Certificate of Participation',
      'Free campus accommodation (first-come, first-served)',
      'Free shuttle service',
      'Access to discussion forums (6 months)',
    ],
  },
  {
    id: 'ieee-cis-professional',
    name: 'IEEE CIS Professional Member',
    currency: 'INR',
    targetAudience: 'IEEE CIS Professional Members',
    highlighted: false,
    prices: {
      online: { earlyBird: 500, standard: 600 },
      offline: { earlyBird: 700, standard: 800 }
    },
    features: [
      'All 6 days of lectures, labs, and clinics',
      'Digital access to all course materials',
      'Print copy of Digital Handbook',
      'Daily tea/coffee and lunch',
      'Welcome reception and closing ceremony',
      'IEEE CIS Certificate of Participation',
      'Access to discussion forums (1 year)',
      'Session recordings archive',
      'Exclusive industry networking events',
    ],
  },
  {
    id: 'ieee-professional',
    name: 'IEEE Professional Member',
    currency: 'INR',
    targetAudience: 'IEEE Professional Members',
    highlighted: false,
    prices: {
      online: { earlyBird: 550, standard: 650 },
      offline: { earlyBird: 750, standard: 850 }
    },
    features: [
      'All 6 days of lectures, labs, and clinics',
      'Digital access to all course materials',
      'Print copy of Digital Handbook',
      'Daily tea/coffee and lunch',
      'Welcome reception and closing ceremony',
      'IEEE CIS Certificate of Participation',
      'Access to discussion forums (1 year)',
      'Session recordings archive',
      'Exclusive industry networking events',
    ],
  },
  {
    id: 'non-ieee-professional',
    name: 'Non-IEEE Professional',
    currency: 'INR',
    targetAudience: 'Industry professionals without IEEE membership',
    highlighted: true,
    prices: {
      online: { earlyBird: 900, standard: 1200 },
      offline: { earlyBird: 1500, standard: 2000 }
    },
    features: [
      'All 6 days of lectures, labs, and clinics',
      'Digital access to all course materials',
      'Print copy of Digital Handbook',
      'Daily tea/coffee and lunch',
      'Welcome reception and closing ceremony',
      'IEEE CIS Certificate of Participation',
      'Access to discussion forums (1 year)',
      'Session recordings archive',
      'Exclusive industry networking events',
      '1-on-1 mentoring sessions',
    ],
  },
  {
    id: 'international',
    name: 'International Participant',
    currency: 'USD',
    targetAudience: 'Participants from outside India',
    highlighted: false,
    prices: {
      online: { earlyBird: 15, standard: 20 },
      offline: { earlyBird: 50, standard: 55 }
    },
    features: [
      'All 6 days of lectures, labs, and clinics',
      'Digital access to all course materials',
      'Print copy of Digital Handbook',
      'Daily tea/coffee and lunch',
      'Welcome reception and closing ceremony',
      'IEEE CIS Certificate of Participation',
      'Access to discussion forums (1 year)',
      'Session recordings archive',
      'Exclusive industry networking events',
    ],
  },
]

export const registrationBenefits: Benefit[] = [
  {
    id: 'benefit-1',
    icon: 'users',
    title: 'Learn from Experts',
    description: 'Study under leading researchers and industry practitioners in computational intelligence.',
  },
  {
    id: 'benefit-2',
    icon: 'code',
    title: 'Hands-on Practice',
    description: 'Work on real-world problems with modern tools and frameworks in interactive labs.',
  },
  {
    id: 'benefit-3',
    icon: 'network',
    title: 'Network & Collaborate',
    description: 'Connect with peers, instructors, and professionals from around the world.',
  },
  {
    id: 'benefit-4',
    icon: 'award',
    title: 'Recognized Certificate',
    description: 'Receive an official PCCOE Summer School certificate upon completion.',
  },
  {
    id: 'benefit-5',
    icon: 'book-open',
    title: 'Career Development',
    description: 'Gain skills that advance your career in AI, ML, and computational intelligence.',
  },
  {
    id: 'benefit-6',
    icon: 'zap',
    title: 'Cutting-edge Content',
    description: 'Learn the latest developments and best practices in computational intelligence.',
  },
]

export const faqs = [
  {
    id: 'faq-1',
    question: 'What prerequisites do I need?',
    answer: 'Basic understanding of programming (Python) and mathematics (linear algebra, calculus) is recommended. No prior experience with LLM fine-tuning is required.',
  },
  {
    id: 'faq-2',
    question: 'Will the course be recorded?',
    answer: 'Yes! Plenary sessions will be live-streamed and recorded, and made available to all registered participants.',
  },
  {
    id: 'faq-3',
    question: 'Do I get a refund if I cannot attend?',
    answer: 'Cancellations made before June 15 receive a full refund. After June 15, we offer a 50% refund or credit toward next year\'s program.',
  },
  {
    id: 'faq-4',
    question: 'Can I attend only some days?',
    answer: 'The course is designed as a sequential 6-day program. To receive the certificate, full attendance is required.',
  },
  {
    id: 'faq-5',
    question: 'Is there accommodation provided?',
    answer: 'Free on-campus accommodation at the PCCoE hostel/guest house is provided for registered offline participants on a first-come, first-served basis.',
  },
  {
    id: 'faq-6',
    question: 'What software/tools do I need?',
    answer: 'We use Python with HuggingFace, PyTorch, bitsandbytes, and vLLM. All instructions for setting up the environment will be shared 2 weeks before the program.',
  },
  {
    id: 'faq-7',
    question: 'Can I network with instructors after the course?',
    answer: 'Yes! All participants will have access to the dedicated Slack and Discord channels for six months post-program to collaborate and seek guidance.',
  },
  {
    id: 'faq-8',
    question: 'Is there financial assistance available?',
    answer: 'Yes, there are student travel and accommodation grants available for participants travelling from outside Pune. Email the organizers with your details.',
  },
]
