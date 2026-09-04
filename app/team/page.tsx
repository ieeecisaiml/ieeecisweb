import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Card } from '@/components/ui/card'
import { Mail, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Our Team — IEEE CIS Summer School hosted by Department of CSE (AI & ML), PCCOE',
  description:
    'Meet the dedicated faculty, student coordinators, and developer team organizing the IEEE CIS Summer School hosted by Department of CSE (AI & ML), PCCOE.',
  alternates: { canonical: 'https://ieeecissummerschool2026.vercel.app/team' },
  openGraph: {
    title: 'Our Team — IEEE CIS Summer School hosted by Department of CSE (AI & ML), PCCOE',
    description: 'Faculty leaders, coordinators, and engineering team behind the IEEE CIS Summer School 2026.',
    url: 'https://ieeecissummerschool2026.vercel.app/team',
  },
}

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.8v8.37h2.8v-4.87c0-.26.05-.52.12-.7a1.16 1.16 0 0 1 1.07-.78c.76 0 1.33.58 1.33 1.62v4.73zm-11-8.37H4.7v8.37h2.8zm-1.4-2.8a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z" />
  </svg>
)

export default function TeamPage() {
  const organizingFaculty = [
    {
      name: 'Prof. Pallavi Nikumbh',
      role: 'Lead Organizer & Chapter Advisor',
      department: 'Dept. of CSE (AI & ML), PCCoE',
      affiliation: 'IEEE CIS PCCOE SBC Advisor',
      email: 'cissummerschool@pccoepune.org',
      image: null,
    },
    {
      name: 'Dr. Anuradha Thakare',
      role: 'Program Chair & Co-Organizer',
      department: 'Head, Dept. of CSE (AI & ML)',
      affiliation: 'PCCoE Pune',
      email: 'cissummerschool@pccoepune.org',
      image: '/speakers/anuradhathakare.jpeg',
    },
    {
      name: 'Prof. Shailaja Pede',
      role: 'Co-Organizer',
      department: 'Dept. of CSE (AI & ML), PCCoE',
      affiliation: 'Academic Program Liaison',
      email: 'cissummerschool@pccoepune.org',
      image: null,
    },
    {
      name: 'Prof. Santwana Gudadhe',
      role: 'Co-Organizer',
      department: 'Dept. of CSE (AI & ML), PCCoE',
      affiliation: 'Academic Coordination',
      email: 'cissummerschool@pccoepune.org',
      image: null,
    },
    {
      name: 'Mr. Rakshit Jain',
      role: 'Collaborator & Program Advisor',
      department: 'Chair, IEEE YP Pune Section',
      affiliation: 'AI Systems Engineer, PTC',
      email: 'rakshit.jain@ieee.org',
      image: '/speakers/rakshitjain.jpeg',
    },
    {
      name: 'Dr. Amar Buchade',
      role: 'Collaborator & Section Chair',
      department: 'Chair, IEEE Pune Section',
      affiliation: 'IEEE Pune Section',
      email: null,
      image: null,
    },
  ]

  const studentCoordinators = [
    {
      name: 'Kshitij Jadhav',
      role: 'Student Coordinator',
      area: 'Technical Operations & Logistics',
      image: '/kshitij.png',
      link: 'https://www.linkedin.com/in/kshitij-jadhav/',
    },
    {
      name: 'Ruturaj Pandharkar',
      role: 'Student Coordinator',
      area: 'Participant Relations & Logistics',
      image: '/ruturaj.jpeg',
      link: 'https://www.linkedin.com/in/ruturaj-pandharkar/',
    },
    {
      name: 'Piyush Daspute',
      role: 'Student Coordinator',
      area: 'Registration & Operations',
      image: null,
      link: null,
    },
    {
      name: 'Trupti Sukale',
      role: 'Student Coordinator',
      area: 'Event Coordination & Outreach',
      image: null,
      link: null,
    },
  ]

  const devTeam = [
    { name: 'Vrushabh Hirap', role: 'Full-Stack Developer', link: 'https://www.linkedin.com/in/vrushabh-hirap/', image: '/vrushabh.jpeg' },
    { name: 'Chirag Ferwani', role: 'Full-Stack Developer', link: 'https://www.linkedin.com/in/chiragferwani', image: '/chiragferwani.png' },
    { name: 'Kshitij Jadhav', role: 'Frontend Developer', link: 'https://www.linkedin.com/in/kshitij-jadhav/', image: '/kshitij.png' },
  ]

  return (
    <div className="min-h-screen bg-white text-[#5a5a5a] flex flex-col font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-[4px] bg-[#f5f5f5] text-[#080808] text-xs font-medium uppercase tracking-[1.5px] mb-6 border border-[#d8d8d8]">
            People Behind the School
          </div>
          <h1 className="text-4xl sm:text-5xl font-semibold text-[#080808] mb-4 tracking-[-0.8px]">
            Our Organizing Team
          </h1>
          <p className="text-lg sm:text-xl text-[#5a5a5a] max-w-2xl mx-auto font-normal leading-relaxed">
            Faculty leads, student coordinators, and platform engineers working together to deliver an exceptional summer school experience.
          </p>
        </div>
      </section>

      {/* Organizing Committee (Faculty Leads) */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-y border-[#d8d8d8] bg-[#fafafa]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#080808] mb-3">
              Organizing Committee &amp; Faculty Leads
            </h2>
            <p className="text-[#5a5a5a] max-w-2xl mx-auto text-sm sm:text-base">
              Guiding the academic rigor, curriculum development, speaker engagements, and administrative operations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {organizingFaculty.map((member, idx) => (
              <Card
                key={idx}
                className="p-6 border border-[#d8d8d8] bg-white rounded-[8px] hover:border-[#080808] hover:shadow-layered transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="relative w-16 h-16 rounded-full bg-[#f0f0f0] text-[#080808] flex items-center justify-center font-semibold text-lg flex-shrink-0 overflow-hidden border border-[#d8d8d8] shadow-sm">
                      {member.image ? (
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          sizes="64px"
                          className="object-cover"
                        />
                      ) : (
                        <span className="text-[#080808] font-semibold">
                          {member.name.split(' ').map((n) => n[0]).join('')}
                        </span>
                      )}
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#080808] text-base leading-tight">
                        {member.name}
                      </h3>
                      <p className="text-xs font-medium text-[#5a5a5a] mt-1">
                        {member.role}
                      </p>
                    </div>
                  </div>
                  <div className="space-y-1 text-xs text-[#5a5a5a] pt-3 border-t border-[#d8d8d8]">
                    <p className="font-medium text-[#080808]">{member.department}</p>
                    <p className="text-[#5a5a5a]">{member.affiliation}</p>
                  </div>
                </div>

                {member.email && (
                  <div className="pt-4 mt-4 border-t border-[#d8d8d8] flex items-center gap-2 text-xs text-[#5a5a5a]">
                    <Mail size={14} className="text-[#080808] flex-shrink-0" />
                    <a
                      href={`mailto:${member.email}`}
                      className="hover:text-[#080808] transition-colors truncate"
                    >
                      {member.email}
                    </a>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Student Coordinators */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#080808] mb-3">
              Student Coordinators
            </h2>
            <p className="text-[#5a5a5a] max-w-2xl mx-auto text-sm sm:text-base">
              Dedicated student leads driving participant onboarding, technical setup, and day-to-day coordination.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {studentCoordinators.map((coordinator, idx) => (
              <Card
                key={idx}
                className="p-5 border border-[#d8d8d8] bg-white rounded-[8px] text-center flex flex-col items-center justify-between hover:border-[#080808] hover:shadow-layered transition-all duration-200"
              >
                <div className="flex flex-col items-center">
                  <div className="relative w-20 h-20 rounded-full bg-[#f0f0f0] text-[#080808] flex items-center justify-center font-semibold text-xl mb-4 overflow-hidden border border-[#d8d8d8] shadow-sm">
                    {coordinator.image ? (
                      <Image
                        src={coordinator.image}
                        alt={coordinator.name}
                        fill
                        sizes="80px"
                        className="object-cover"
                      />
                    ) : (
                      <span className="text-[#080808] font-semibold">
                        {coordinator.name.split(' ').map((n) => n[0]).join('')}
                      </span>
                    )}
                  </div>
                  <h3 className="font-semibold text-[#080808] text-sm mb-1">{coordinator.name}</h3>
                  <p className="text-xs font-medium text-[#080808] mb-1">{coordinator.role}</p>
                  <p className="text-[11px] text-[#5a5a5a]">{coordinator.area}</p>
                </div>

                {coordinator.link && (
                  <a
                    href={coordinator.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 text-[#5a5a5a] hover:text-[#080808] transition-colors p-1"
                    aria-label={`${coordinator.name} LinkedIn`}
                  >
                    <LinkedinIcon className="w-4 h-4" />
                  </a>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Platform & Development Team */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#fafafa] border-t border-[#d8d8d8]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-medium uppercase tracking-[1.5px] bg-[#f5f5f5] text-[#080808] px-3.5 py-1.5 rounded-[4px] border border-[#d8d8d8]">
              Web &amp; Platform Engineering
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#080808] mt-4 mb-3">
              Platform Development Team
            </h2>
            <p className="text-[#5a5a5a] max-w-2xl mx-auto text-sm sm:text-base">
              The student developers at Pimpri Chinchwad College of Engineering who engineered and designed this platform.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {devTeam.map((member, idx) => (
              <Card
                key={idx}
                className="p-6 border border-[#d8d8d8] bg-white rounded-[8px] flex flex-col items-center justify-between text-center hover:border-[#080808] hover:shadow-layered transition-all duration-200"
              >
                <div className="flex flex-col items-center w-full">
                  <div className="relative w-24 h-24 bg-[#f0f0f0] text-[#080808] rounded-full flex items-center justify-center font-semibold text-2xl mb-4 flex-shrink-0 overflow-hidden border border-[#d8d8d8] shadow-sm">
                    {member.image ? (
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        sizes="96px"
                        className="object-cover"
                      />
                    ) : (
                      <span className="text-[#080808] font-semibold">
                        {member.name.split(' ').map((n) => n[0]).join('')}
                      </span>
                    )}
                  </div>
                  <h3 className="font-semibold text-[#080808] text-base mb-1">{member.name}</h3>
                  <p className="text-xs font-medium text-[#5a5a5a] mb-3">{member.role}</p>
                </div>
                <a
                  href={member.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#5a5a5a] hover:text-[#080808] transition-colors p-2 hover:bg-[#f5f5f5] rounded-full"
                  aria-label={`${member.name} LinkedIn`}
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-[#d8d8d8] bg-[#080808] text-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4 tracking-[-0.8px]">Want to Connect with the Organizers?</h2>
          <p className="text-[#888888] mb-8 text-base leading-relaxed">
            Reach out with any questions regarding registration, sponsorships, or accommodations.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-[#080808] font-medium text-sm rounded-[4px] hover:bg-[#eaeaea] transition-all shadow-sm"
            >
              Contact Organizing Team <ArrowRight size={16} />
            </Link>
            <Link
              href="/register"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-transparent text-white font-medium text-sm rounded-[4px] hover:bg-white/10 transition-all border border-white/30"
            >
              Register for School
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
