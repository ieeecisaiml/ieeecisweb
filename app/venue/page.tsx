import type { Metadata } from 'next'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Card } from '@/components/ui/card'
import { MapPin, Plane, Hotel, Utensils, Train } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Venue & Travel — IEEE CIS Summer School hosted by Department of CSE (AI & ML), PCCOE',
  description:
    'IEEE CIS Summer School is held at Department of CSE (AI & ML), Pimpri Chinchwad College of Engineering, Sector 26, Pradhikaran, Nigdi, Pune 411044, Maharashtra, India. Travel, accommodation, and local info.',
  alternates: { canonical: 'https://ieeecissummerschool2026.vercel.app/venue' },
  openGraph: {
    title: 'Venue & Travel — IEEE CIS Summer School hosted by Department of CSE (AI & ML), PCCOE',
    description: 'Located at PCCoE Pune — GPU-enabled labs, world-class facilities. Directions, accommodation, and Pune travel guide for participants.',
    url: 'https://ieeecissummerschool2026.vercel.app/venue',
  },
}

export default function VenuePage() {
  return (
    <div className="min-h-screen bg-white text-[#5a5a5a] flex flex-col font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-[4px] bg-[#f5f5f5] text-[#080808] text-xs font-medium uppercase tracking-[1.5px] mb-6 border border-[#d8d8d8]">
            Venue &amp; Location
          </div>
          <h1 className="text-4xl sm:text-5xl font-semibold text-[#080808] mb-4 tracking-[-0.8px]">Venue &amp; Travel Guide</h1>
          <p className="text-lg sm:text-xl text-[#5a5a5a] leading-relaxed">
            Join us at Pimpri Chinchwad College of Engineering in Pune, India
          </p>
        </div>
      </section>

      {/* Venue Location */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-start gap-4 mb-8">
            <div className="w-12 h-12 rounded-[4px] bg-[#f5f5f5] text-[#080808] flex items-center justify-center flex-shrink-0 border border-[#d8d8d8]">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold text-[#080808] mb-1">Pimpri Chinchwad College of Engineering</h2>
              <p className="text-base text-[#080808] font-medium mb-1">Dept. of CSE (AI &amp; ML)</p>
              <p className="text-[#5a5a5a] font-mono text-sm">Sector 26, Pradhikaran, Nigdi, Pune - 411044, Maharashtra, India</p>
            </div>
          </div>

          <div className="bg-white rounded-[8px] p-8 border border-[#d8d8d8] shadow-sm">
            <h3 className="text-xl font-semibold text-[#080808] mb-4">About the Venue</h3>
            <p className="text-[#5a5a5a] mb-4 leading-relaxed">
              Pimpri Chinchwad College of Engineering (PCCoE) is one of the premier engineering institutions in Pune, affiliated with Savitribai Phule Pune University. The campus features state-of-the-art computing laboratories with GPU-enabled workstations, modern classrooms, a fully equipped auditorium, reliable high-speed internet, and comfortable spaces for learning and networking.
            </p>
            <p className="text-[#5a5a5a] leading-relaxed">
              Located in the rapidly growing Pradhikaran area, the venue provides excellent infrastructure for an intensive 6-day residential program. PCCoE contributes in-kind support including all classroom spaces, computer laboratories, and AV equipment, ensuring the IEEE CIS grant is fully directed toward student support and educational excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Transportation */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#fafafa] border-y border-[#d8d8d8]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold text-[#080808] mb-8">Getting to Pune</h2>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="p-6 border border-[#d8d8d8] bg-white rounded-[8px] hover:border-[#080808] hover:shadow-layered transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-[4px] bg-[#f5f5f5] text-[#080808] flex items-center justify-center flex-shrink-0 border border-[#d8d8d8]">
                  <Plane className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-semibold text-[#080808]">Air Travel</h3>
              </div>
              <ul className="space-y-3 text-[#5a5a5a]">
                <li>
                  <strong className="text-[#080808]">Pune Airport (PNQ)</strong>
                  <p className="text-sm text-[#5a5a5a] mt-0.5">~25 km from venue, ~45-60 minutes by taxi (INR 400-600)</p>
                </li>
                <li>
                  <strong className="text-[#080808]">Mumbai Airport (BOM)</strong>
                  <p className="text-sm text-[#5a5a5a] mt-0.5">~200 km away, 3-4 hours by cab or expressway bus</p>
                </li>
              </ul>
            </Card>

            <Card className="p-6 border border-[#d8d8d8] bg-white rounded-[8px] hover:border-[#080808] hover:shadow-layered transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-[4px] bg-[#f5f5f5] text-[#080808] flex items-center justify-center flex-shrink-0 border border-[#d8d8d8]">
                  <Train className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-semibold text-[#080808]">Local Transport</h3>
              </div>
              <ul className="space-y-3 text-[#5a5a5a]">
                <li>
                  <strong className="text-[#080808]">Auto-rickshaw / Uber / Ola</strong>
                  <p className="text-sm text-[#5a5a5a] mt-0.5">Available throughout Pune and Nigdi for convenient travel</p>
                </li>
                <li>
                  <strong className="text-[#080808]">Local Train (EMU)</strong>
                  <p className="text-sm text-[#5a5a5a] mt-0.5">Chinchwad Station (~4 km away) or Akurdi Station (~2 km away)</p>
                </li>
              </ul>
            </Card>
          </div>

          <div className="bg-white rounded-[8px] p-6 border border-[#d8d8d8] shadow-sm">
            <h3 className="font-semibold text-[#080808] mb-3 text-lg">Getting from Pune Airport to PCCoE Venue</h3>
            <ol className="space-y-3 text-[#5a5a5a]">
              <li className="flex gap-3">
                <span className="font-semibold text-[#080808]">1.</span>
                <span>Exit the airport terminal and head to the prepaid taxi booth or booking zone.</span>
              </li>
              <li className="flex gap-3">
                <span className="font-semibold text-[#080808]">2.</span>
                <span>Book an Ola, Uber, or Prepaid Taxi to PCCoE Campus, Sector 26, Pradhikaran, Nigdi.</span>
              </li>
              <li className="flex gap-3">
                <span className="font-semibold text-[#080808]">3.</span>
                <span>The journey usually takes 45-60 minutes depending on traffic (~25 km, costing INR 400-600).</span>
              </li>
              <li className="flex gap-3">
                <span className="font-semibold text-[#080808]">4.</span>
                <span>PCCoE Campus is a well-known landmark in the Nigdi Pradhikaran area.</span>
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* Accommodation */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold text-[#080808] mb-8">Accommodation</h2>

          <div className="flex items-start gap-4 mb-8">
            <div className="w-12 h-12 rounded-[4px] bg-[#f5f5f5] text-[#080808] flex items-center justify-center flex-shrink-0 border border-[#d8d8d8]">
              <Hotel className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#080808] mb-2">Accommodation Options</h3>
              <p className="text-[#5a5a5a]">
                We provide free accommodation for participants on campus. Alternatively, there are budget-friendly hotels located close to the campus.
              </p>
            </div>
          </div>

          <div className="space-y-4 mb-8">
            {[
              {
                name: 'PCCoE Campus Hostel & Guest House',
                distance: 'On-campus (1-2 mins walk)',
                note: 'Free for registered offline participants (basic meals, Wi-Fi, and campus access included; first-come, first-served)',
              },
              {
                name: 'Sentosa Resorts and Water Park',
                distance: '10 mins drive (~5 km)',
                note: 'Premium resort option with modern amenities',
              },
              {
                name: 'Local Budget Hotels (Nigdi / Akurdi)',
                distance: '5-15 mins drive',
                note: 'Budget-friendly hotels near PCCoE at INR 1,500 - 3,000 per night',
              },
            ].map((hotel, idx) => (
              <Card key={idx} className="p-6 border border-[#d8d8d8] bg-white rounded-[8px] hover:border-[#080808] hover:shadow-layered transition-all">
                <h4 className="font-semibold text-[#080808] text-base mb-1">{hotel.name}</h4>
                <p className="text-sm text-[#5a5a5a] mb-2">{hotel.distance}</p>
                <p className="text-sm text-[#080808] font-medium">{hotel.note}</p>
              </Card>
            ))}
          </div>

          <div className="bg-white rounded-[8px] p-6 border border-[#d8d8d8]">
            <p className="text-[#5a5a5a]">
              <strong className="text-[#080808]">Note:</strong> Booking information and hostel request forms will be provided upon registration. We recommend registering early to secure the free hostel guest house rooms.
            </p>
          </div>
        </div>
      </section>

      {/* Dining */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#fafafa] border-y border-[#d8d8d8]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold text-[#080808] mb-8">Dining</h2>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="p-6 border border-[#d8d8d8] bg-white rounded-[8px] hover:border-[#080808] hover:shadow-layered transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-[4px] bg-[#f5f5f5] text-[#080808] flex items-center justify-center flex-shrink-0 border border-[#d8d8d8]">
                  <Utensils className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-semibold text-[#080808]">At the Venue</h3>
              </div>
              <p className="text-[#5a5a5a] mb-4 leading-relaxed">
                Daily tea/coffee breaks and lunch are provided on-campus as part of your registration. We offer options including local Maharashtrian, Indian, and vegetarian meals.
              </p>
              <p className="text-xs text-[#888888]">Please indicate dietary restrictions during registration.</p>
            </Card>

            <Card className="p-6 border border-[#d8d8d8] bg-white rounded-[8px] hover:border-[#080808] hover:shadow-layered transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-[4px] bg-[#f5f5f5] text-[#080808] flex items-center justify-center flex-shrink-0 border border-[#d8d8d8]">
                  <Utensils className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-semibold text-[#080808]">Around Campus</h3>
              </div>
              <p className="text-[#5a5a5a] leading-relaxed">
                The local Nigdi/Pradhikaran area around PCCoE has numerous dining options, including local Maharashtrian cuisine and global fast-food chains. Budget for INR 200-500 for a meal outside the venue.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Practical Tips */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold text-[#080808] mb-8">Practical Tips</h2>

          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                title: 'Currency & Payment',
                text: 'India uses the Indian Rupee (INR). ATMs are widely available. Cash, credit/debit cards, and UPI (Unified Payments Interface) mobile payments are widely used.',
              },
              {
                title: 'UPI Payments',
                text: 'UPI is highly popular and convenient in India for even small payments. You can set it up via apps like GPay, PhonePe, or Paytm if you have an active Indian banking link.',
              },
              {
                title: 'Weather & Packing',
                text: 'Late June brings pleasant weather to Pune, often with light monsoon showers (22-30°C). We recommend bringing a light jacket/umbrella.',
              },
              {
                title: 'Language',
                text: 'English, Hindi, and Marathi are widely spoken. English is the medium of instruction for all summer school sessions and is understood in local professional areas.',
              },
              {
                title: 'Internet & Connectivity',
                text: 'High-speed Wi-Fi is provided on the PCCoE campus. Pre-paid SIM cards (Jio, Airtel) can be purchased easily at the airport or in town.',
              },
              {
                title: 'Local Transport',
                text: 'Auto-rickshaws, Ola, and Uber are readily available for travel within Nigdi and Pune.',
              },
            ].map((tip, idx) => (
              <div key={idx} className="bg-white rounded-[8px] p-5 border border-[#d8d8d8] border-l-4 border-l-[#080808] hover:shadow-layered transition-all">
                <h4 className="font-semibold text-[#080808] mb-1 text-base">{tip.title}</h4>
                <p className="text-[#5a5a5a] text-xs leading-relaxed">{tip.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact for Logistics */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#080808] text-white border-t border-[#d8d8d8]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4 tracking-[-0.8px]">Questions About Travel?</h2>
          <p className="text-lg text-[#888888] mb-8 leading-relaxed">
            Our team is happy to help with accommodation planning, directions, or any logistical queries.
          </p>
          <a
            href="/contact"
            className="inline-block px-6 py-3 bg-white text-[#080808] font-medium text-sm rounded-[4px] hover:bg-[#eaeaea] transition-all shadow-sm"
          >
            Contact Our Team
          </a>
        </div>
      </section>

      <Footer />
    </div>
  )
}
