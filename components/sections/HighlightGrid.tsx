import { Card } from '@/components/ui/card'
import { Brain, Zap, Users, Book, Code, Award } from 'lucide-react'

interface Highlight {
  id: string
  icon: React.ReactNode
  title: string
  description: string
  dayAccentColor?: string
}

const highlights: Highlight[] = [
  {
    id: 'nn',
    icon: <Brain className="w-6 h-6" />,
    title: 'Neural Networks',
    description: 'Deep dive into artificial neural networks, architectures, and modern deep learning frameworks.',
  },
  {
    id: 'ea',
    icon: <Zap className="w-6 h-6" />,
    title: 'Evolutionary Algorithms',
    description: 'Master genetic algorithms, particle swarm optimization, and other bio-inspired techniques.',
  },
  {
    id: 'fuzzy',
    icon: <Users className="w-6 h-6" />,
    title: 'Fuzzy Logic',
    description: 'Learn fuzzy systems, inference engines, and control applications.',
  },
  {
    id: 'practical',
    icon: <Code className="w-6 h-6" />,
    title: 'Hands-on Labs',
    description: 'Build real systems using Python, TensorFlow, PyTorch, and scikit-learn.',
  },
  {
    id: 'networking',
    icon: <Users className="w-6 h-6" />,
    title: 'Expert Networking',
    description: 'Connect with leading researchers and industry professionals in the field.',
  },
  {
    id: 'career',
    icon: <Award className="w-6 h-6" />,
    title: 'Career Growth',
    description: 'Advance your skills and credentials with an IEEE CIS certificate.',
  },
]

export function HighlightGrid() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="eyebrow block mb-3">Core Modules</span>
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#080808] tracking-tight mb-4">What You&apos;ll Learn</h2>
          <p className="text-base sm:text-lg text-[#5a5a5a] max-w-2xl mx-auto font-normal">
            Comprehensive curriculum covering all major areas of computational intelligence with practical applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((highlight, idx) => (
            <Card
              key={highlight.id}
              className="p-8 transition-all duration-200 border border-[#d8d8d8] bg-white rounded-[8px] hover:border-[#080808]/40 hover:shadow-layered cursor-default"
              style={{ animation: `fadeInUp 0.6s ease-out ${0.05 * idx}s both` }}
            >
              <div className="w-12 h-12 rounded-[4px] bg-[#f5f5f5] flex items-center justify-center text-[#080808] mb-5 border border-[#d8d8d8]/60">
                {highlight.icon}
              </div>
              <h3 className="font-semibold text-[#080808] mb-2 text-lg">{highlight.title}</h3>
              <p className="text-sm text-[#5a5a5a] leading-relaxed">{highlight.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
