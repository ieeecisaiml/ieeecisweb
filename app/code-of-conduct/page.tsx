'use client'

import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

export default function CodeOfConductPage() {
  return (
    <div className="min-h-screen bg-white text-[#5a5a5a] flex flex-col font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-[#fafafa] border-b border-[#e5e5e5]">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-[4px] bg-white text-[#080808] text-xs font-medium uppercase tracking-[1.5px] mb-6 border border-[#d8d8d8] shadow-sm">
            Policies &amp; Guidelines
          </div>
          <h1 className="text-4xl sm:text-5xl font-semibold text-[#080808] mb-4 tracking-[-0.8px]">Code of Conduct</h1>
          <p className="text-lg sm:text-xl text-[#5a5a5a] leading-relaxed max-w-2xl mx-auto">
            IEEE CIS School Participant Guidelines for a safe, inclusive, and professional environment.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto space-y-12">
          
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#080808] pb-2 border-b border-[#e5e5e5]">1. PURPOSE</h2>
            <p className="text-base leading-relaxed">The IEEE CIS School is intended to provide a safe, inclusive, professional, and intellectually stimulating environment for students, researchers, faculty members, speakers, volunteers, organizers, and other participants.</p>
            <p className="text-base leading-relaxed">The event aims to encourage learning, technical discussion, collaboration, networking, and the responsible exchange of ideas in accordance with IEEE&apos;s commitment to integrity, professionalism, respect, and responsible conduct.</p>
            <p className="text-base leading-relaxed">This Code of Conduct establishes the standards of behavior expected from everyone participating in or contributing to the School.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#080808] pb-2 border-b border-[#e5e5e5]">2. SCOPE</h2>
            <p className="text-base leading-relaxed">This Code of Conduct applies to all participants associated with the IEEE CIS School, including:</p>
            <ul className="list-disc pl-6 space-y-2 text-base text-[#5a5a5a]">
              <li>Students and delegates</li>
              <li>Speakers and invited experts</li>
              <li>Faculty members and mentors</li>
              <li>Organizing committee members</li>
              <li>Volunteers and student coordinators</li>
              <li>Sponsors and exhibitors</li>
              <li>Guests and visitors</li>
              <li>Technical and administrative staff</li>
              <li>Online/virtual participants, where applicable</li>
            </ul>
            <p className="text-base leading-relaxed mt-4">The guidelines apply during:</p>
            <ul className="list-disc pl-6 space-y-2 text-base text-[#5a5a5a]">
              <li>Technical sessions</li>
              <li>Workshops and tutorials</li>
              <li>Keynote and invited talks</li>
              <li>Hands-on sessions</li>
              <li>Networking sessions</li>
              <li>Social and cultural activities organized as part of the event</li>
              <li>Official transportation and event-related activities</li>
              <li>Online meetings, discussion forums, chats, and other official digital platforms</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#080808] pb-2 border-b border-[#e5e5e5]">3. IEEE PRINCIPLES</h2>
            <p className="text-base leading-relaxed">The School follows the principles established by IEEE for professional and ethical conduct. All participants are expected to:</p>
            <ul className="list-disc pl-6 space-y-2 text-base text-[#5a5a5a]">
              <li>Act with integrity and professionalism.</li>
              <li>Treat others with dignity and respect.</li>
              <li>Respect different opinions, backgrounds, experiences, and perspectives.</li>
              <li>Maintain an environment free from discrimination, harassment, bullying, and intimidation.</li>
              <li>Respect the privacy and personal information of others.</li>
              <li>Avoid actions that may harm another person&apos;s reputation, property, data, or professional standing.</li>
              <li>Contribute positively to the academic and professional environment of the event.</li>
            </ul>
            <p className="text-base leading-relaxed mt-4 italic">IEEE&apos;s official Code of Conduct emphasizes respect, fairness, protection of personal information, and avoidance of harassment, discrimination, bullying, malicious conduct, and abuse.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#080808] pb-2 border-b border-[#e5e5e5]">4. RESPECTFUL AND PROFESSIONAL BEHAVIOR</h2>
            <p className="text-base leading-relaxed">All participants are expected to behave professionally throughout the event. Participants should:</p>
            <ul className="list-disc pl-6 space-y-2 text-base text-[#5a5a5a]">
              <li>Communicate respectfully with speakers, organizers, volunteers, staff, and fellow participants.</li>
              <li>Listen attentively during technical sessions.</li>
              <li>Allow others to express their views without unnecessary interruption.</li>
              <li>Ask questions in a constructive and relevant manner.</li>
              <li>Respect differences of opinion during technical discussions.</li>
              <li>Follow reasonable instructions provided by organizers and event staff.</li>
              <li>Use professional language in verbal and written communication.</li>
              <li>Respect the facilities, equipment, and property of the host institution.</li>
            </ul>
            <p className="text-base leading-relaxed mt-4">Disagreement with another participant&apos;s technical opinion is acceptable; personal attacks, insults, intimidation, or degrading comments are not.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#080808] pb-2 border-b border-[#e5e5e5]">5. NON-DISCRIMINATION AND ANTI-HARASSMENT</h2>
            <p className="text-base leading-relaxed">The IEEE CIS School is committed to maintaining an inclusive and harassment-free environment. Discrimination, harassment, bullying, intimidation, or threatening behavior will not be tolerated. Unacceptable behavior includes, but is not limited to:</p>
            <ul className="list-disc pl-6 space-y-2 text-base text-[#5a5a5a]">
              <li>Verbal abuse or threats</li>
              <li>Personal insults or degrading comments</li>
              <li>Bullying or intimidation</li>
              <li>Unwelcome sexual attention or sexual harassment</li>
              <li>Stalking or unwanted physical contact</li>
              <li>Offensive or discriminatory remarks</li>
              <li>Harassing photography or recording</li>
              <li>Repeated unwanted communication</li>
              <li>Deliberate exclusion or intimidation</li>
              <li>Online harassment through event-related digital platforms</li>
            </ul>
            <p className="text-base leading-relaxed mt-4">No participant should be discriminated against on the basis of characteristics protected by applicable law or IEEE policy. IEEE&apos;s event guidance explicitly states that IEEE events should provide a safe, productive, and welcoming environment.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#080808] pb-2 border-b border-[#e5e5e5]">6. ACADEMIC AND TECHNICAL INTEGRITY</h2>
            <p className="text-base leading-relaxed">The School is primarily an academic and technical learning environment. Participants are expected to maintain high standards of academic and professional integrity. Participants must:</p>
            <ul className="list-disc pl-6 space-y-2 text-base text-[#5a5a5a]">
              <li>Give appropriate credit to the original creators of ideas, software, datasets, research, images, and other materials.</li>
              <li>Avoid plagiarism and unauthorized copying.</li>
              <li>Avoid misrepresenting another person&apos;s work as their own.</li>
              <li>Clearly distinguish personal work from collaborative work.</li>
              <li>Follow the instructions provided by speakers or instructors during hands-on sessions.</li>
              <li>Respect software licenses, intellectual-property rights, and applicable institutional policies.</li>
            </ul>
            <p className="text-base leading-relaxed mt-4">Use of AI tools, programming assistants, or other technologies during assignments, demonstrations, or activities should follow the rules specified by the respective instructor or organizer.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#080808] pb-2 border-b border-[#e5e5e5]">7. PARTICIPATION AND SESSION ETIQUETTE</h2>
            <p className="text-base leading-relaxed font-medium text-[#080808]">During technical sessions:</p>
            <ul className="list-disc pl-6 space-y-2 text-base text-[#5a5a5a]">
              <li>Arrive on time and keep mobile phones on silent mode.</li>
              <li>Avoid unnecessary conversations during presentations.</li>
              <li>Do not interrupt speakers except when appropriate.</li>
              <li>Follow the designated procedure for asking questions.</li>
              <li>Keep questions concise and relevant.</li>
              <li>Respect the allotted time for presentations and discussions.</li>
              <li>Do not leave sessions repeatedly without necessity.</li>
            </ul>
            <p className="text-base leading-relaxed font-medium text-[#080808] mt-4">During workshops and hands-on sessions:</p>
            <ul className="list-disc pl-6 space-y-2 text-base text-[#5a5a5a]">
              <li>Follow instructor and volunteer instructions.</li>
              <li>Do not intentionally disrupt demonstrations or activities.</li>
              <li>Do not interfere with another participant&apos;s system, code, files, or equipment.</li>
              <li>Report technical problems to the assigned volunteers or organizers.</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#080808] pb-2 border-b border-[#e5e5e5]">8. USE OF PHOTOGRAPHY, VIDEO, AND RECORDING</h2>
            <p className="text-base leading-relaxed">Participants should respect the privacy and preferences of other attendees. Unless explicitly permitted by the organizers:</p>
            <ul className="list-disc pl-6 space-y-2 text-base text-[#5a5a5a]">
              <li>Do not record private conversations.</li>
              <li>Do not photograph or record individuals in a manner that is intrusive, disruptive, or unwelcome.</li>
              <li>Do not record confidential discussions or unpublished research without permission.</li>
              <li>Do not distribute recordings containing identifiable participants without appropriate consent.</li>
            </ul>
            <p className="text-base leading-relaxed mt-4 italic">Official event photography or videography may be conducted by authorized members of the organizing team for documentation and promotional purposes, subject to applicable institutional and IEEE policies.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#080808] pb-2 border-b border-[#e5e5e5]">9. PRIVACY AND PERSONAL INFORMATION</h2>
            <p className="text-base leading-relaxed">Participants must respect the personal information of others. Do not:</p>
            <ul className="list-disc pl-6 space-y-2 text-base text-[#5a5a5a]">
              <li>Share another participant&apos;s phone number, email address, identification details, or other personal information without permission.</li>
              <li>Collect personal information for unauthorized purposes.</li>
              <li>Share private photographs, messages, or conversations without consent.</li>
              <li>Use event registration information for unauthorized promotional or commercial purposes.</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#080808] pb-2 border-b border-[#e5e5e5]">10. ONLINE AND DIGITAL CONDUCT</h2>
            <p className="text-base leading-relaxed">Where the School uses online platforms, social media groups, messaging applications, learning-management systems, or virtual meeting platforms, the same standards of conduct apply.</p>
            <ul className="list-disc pl-6 space-y-2 text-base text-[#5a5a5a]">
              <li>Use respectful language and avoid spam and unnecessary messages.</li>
              <li>Avoid harassment or targeted abuse.</li>
              <li>Avoid sharing offensive or discriminatory material.</li>
              <li>Avoid unauthorized access to another person&apos;s account or system.</li>
              <li>Respect intellectual property and confidentiality.</li>
              <li>Follow the rules of the platform being used.</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#080808] pb-2 border-b border-[#e5e5e5]">11. SAFETY AND SECURITY</h2>
            <p className="text-base leading-relaxed">The safety of participants is a shared responsibility. Participants should:</p>
            <ul className="list-disc pl-6 space-y-2 text-base text-[#5a5a5a]">
              <li>Follow instructions from event organizers, college authorities, security personnel, and venue staff.</li>
              <li>Familiarize themselves with emergency exits and designated assembly areas.</li>
              <li>Immediately report safety hazards to the organizing team.</li>
              <li>Not tamper with fire alarms, safety equipment, electrical installations, or emergency systems.</li>
              <li>Not enter restricted areas.</li>
              <li>Carry their event identification/access pass when required.</li>
              <li>Follow applicable college and venue safety regulations.</li>
            </ul>
            <p className="text-base leading-relaxed mt-4">In the event of an emergency, participants must follow the instructions of authorized personnel and move to the designated safe area.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#080808] pb-2 border-b border-[#e5e5e5]">12. ALCOHOL, DRUGS, AND PROHIBITED SUBSTANCES</h2>
            <p className="text-base leading-relaxed">The possession, use, distribution, or being under the influence of illegal drugs or other prohibited substances during the School or within the event premises is strictly prohibited.</p>
            <p className="text-base leading-relaxed">Alcohol consumption is prohibited at the event unless specifically permitted by the host institution and applicable law.</p>
            <p className="text-base leading-relaxed">Any participant whose behavior creates a safety risk or substantially disrupts the event may be removed from the activity or venue.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#080808] pb-2 border-b border-[#e5e5e5]">13. CAMPUS AND VENUE GUIDELINES</h2>
            <p className="text-base leading-relaxed">All participants must comply with the rules of the host institution and event venue. Participants should:</p>
            <ul className="list-disc pl-6 space-y-2 text-base text-[#5a5a5a]">
              <li>Maintain cleanliness.</li>
              <li>Use classrooms, laboratories, auditoriums, and other facilities responsibly.</li>
              <li>Avoid damaging college or venue property.</li>
              <li>Use equipment only for its intended purpose.</li>
              <li>Follow laboratory and equipment-specific safety instructions.</li>
              <li>Respect restricted-access areas.</li>
              <li>Dispose of waste in designated locations.</li>
              <li>Follow parking and transportation instructions where applicable.</li>
            </ul>
            <p className="text-base leading-relaxed mt-4">Any damage caused intentionally or through serious negligence may be referred to the appropriate institutional authority.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#080808] pb-2 border-b border-[#e5e5e5]">14. ORGANIZER AND VOLUNTEER RESPONSIBILITIES</h2>
            <p className="text-base leading-relaxed">The organizing committee is responsible for making reasonable efforts to maintain a safe, respectful, and productive environment. Organizers and volunteers should:</p>
            <ul className="list-disc pl-6 space-y-2 text-base text-[#5a5a5a]">
              <li>Treat all participants respectfully.</li>
              <li>Provide clear information and instructions.</li>
              <li>Assist participants with reasonable event-related queries.</li>
              <li>Respond appropriately to safety or conduct concerns.</li>
              <li>Maintain confidentiality when handling sensitive complaints.</li>
              <li>Escalate serious incidents to the appropriate authority.</li>
              <li>Avoid favoritism or discriminatory treatment.</li>
              <li>Ensure that event procedures are applied consistently.</li>
            </ul>
            <p className="text-base leading-relaxed mt-4 italic">Volunteers should not attempt to personally investigate serious allegations or confront an alleged offender beyond what is necessary to maintain immediate safety. Serious concerns should be escalated to the designated event authority.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#080808] pb-2 border-b border-[#e5e5e5]">15. REPORTING A CONCERN OR VIOLATION</h2>
            <p className="text-base leading-relaxed">Participants are encouraged to report conduct that violates this Code of Conduct. For immediate safety concerns, participants should contact College Security, Emergency Services, or the Venue Emergency Contact. Otherwise, concerns may be reported to the Event Organizing Committee, Faculty Coordinators, or any designated event organizer or volunteer, who will direct the concern to the appropriate authority.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#080808] pb-2 border-b border-[#e5e5e5]">16. HANDLING OF COMPLAINTS</h2>
            <p className="text-base leading-relaxed">Reports will be handled as seriously and discreetly as reasonably possible. Depending on the nature and severity of the incident, the organizing committee may:</p>
            <ul className="list-disc pl-6 space-y-2 text-base text-[#5a5a5a]">
              <li>Receive and document the concern.</li>
              <li>Ensure the immediate safety of the individuals involved.</li>
              <li>Refer the matter to the faculty coordinator, college authority, IEEE authority, security personnel, or other appropriate authority.</li>
              <li>Review relevant information and available evidence.</li>
              <li>Take appropriate corrective or disciplinary action.</li>
              <li>Refer serious matters to the appropriate institutional, legal, or IEEE authority.</li>
            </ul>
            <p className="text-base leading-relaxed mt-4">Retaliation against a person who raises a genuine concern or participates in a complaint process is not acceptable.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#080808] pb-2 border-b border-[#e5e5e5]">17. POSSIBLE ACTIONS FOR VIOLATIONS</h2>
            <p className="text-base leading-relaxed">Depending on the seriousness and circumstances of the violation, actions may include:</p>
            <ul className="list-disc pl-6 space-y-2 text-base text-[#5a5a5a]">
              <li>Verbal or formal warning</li>
              <li>Removal from a particular session or the event</li>
              <li>Restriction of access to event facilities</li>
              <li>Referral to college or IEEE authorities</li>
              <li>Cancellation of event participation</li>
              <li>Reporting to appropriate legal or security authorities where required</li>
            </ul>
            <p className="text-base leading-relaxed mt-4 italic">Serious violations may result in immediate removal from the event without a prior warning.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#080808] pb-2 border-b border-[#e5e5e5]">18. PARTICIPANT RESPONSIBILITIES</h2>
            <p className="text-base leading-relaxed">By registering for or participating in the IEEE CIS School, participants are expected to:</p>
            <ul className="list-disc pl-6 space-y-2 text-base text-[#5a5a5a]">
              <li>Read and follow this Code of Conduct.</li>
              <li>Follow reasonable instructions from organizers and venue authorities.</li>
              <li>Behave respectfully toward all participants.</li>
              <li>Protect event property and facilities.</li>
              <li>Maintain academic and professional integrity.</li>
              <li>Respect privacy and personal boundaries.</li>
              <li>Report serious safety or conduct concerns.</li>
              <li>Comply with applicable college, IEEE, and legal requirements.</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#080808] pb-2 border-b border-[#e5e5e5]">19. GUIDELINES FOR SPEAKERS AND TRAINERS</h2>
            <p className="text-base leading-relaxed">Speakers, trainers, mentors, and invited experts are requested to:</p>
            <ul className="list-disc pl-6 space-y-2 text-base text-[#5a5a5a]">
              <li>Begin and conclude sessions according to the assigned schedule.</li>
              <li>Maintain a professional and inclusive environment.</li>
              <li>Respect participants&apos; questions and viewpoints.</li>
              <li>Avoid discriminatory, harassing, or offensive content unrelated to the legitimate educational purpose of the session.</li>
              <li>Clearly identify third-party materials and intellectual property where appropriate.</li>
              <li>Inform organizers of any technical or logistical requirements in advance.</li>
              <li>Follow the event&apos;s photography, recording, and confidentiality requirements.</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#080808] pb-2 border-b border-[#e5e5e5]">20. GUIDELINES FOR ORGANIZERS AND VOLUNTEERS</h2>
            <p className="text-base leading-relaxed">Organizers and volunteers should:</p>
            <ul className="list-disc pl-6 space-y-2 text-base text-[#5a5a5a]">
              <li>Report to their assigned location on time.</li>
              <li>Wear or carry appropriate identification.</li>
              <li>Maintain clear communication with the organizing committee.</li>
              <li>Avoid unnecessary disruption of technical sessions.</li>
              <li>Assist participants in a polite and professional manner.</li>
              <li>Escalate safety, security, medical, or conduct concerns promptly.</li>
              <li>Avoid making unauthorized commitments on behalf of IEEE or the institution.</li>
              <li>Maintain confidentiality regarding sensitive participant information.</li>
              <li>Keep accurate records of important event-related incidents where required.</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#080808] pb-2 border-b border-[#e5e5e5]">21. ATTENDANCE AND REGISTRATION</h2>
            <p className="text-base leading-relaxed">Participants should:</p>
            <ul className="list-disc pl-6 space-y-2 text-base text-[#5a5a5a]">
              <li>Complete registration using accurate information.</li>
              <li>Carry valid identification where required.</li>
              <li>Wear/display the event badge or access pass where applicable.</li>
              <li>Attend only the sessions or activities for which they are authorized.</li>
              <li>Inform organizers in advance where attendance requirements apply.</li>
              <li>Follow any capacity or access restrictions established for specific sessions.</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#080808] pb-2 border-b border-[#e5e5e5]">22. CERTIFICATES AND PARTICIPATION</h2>
            <p className="text-base leading-relaxed">Certificates of participation, completion, or other recognition may be subject to attendance and participation requirements communicated by the organizing committee. The organizing committee reserves the right to withhold or revoke event recognition where participation is found to have violated applicable event, institutional, or IEEE requirements.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#080808] pb-2 border-b border-[#e5e5e5]">23. ACCESSIBILITY AND INCLUSION</h2>
            <p className="text-base leading-relaxed">The organizing team should make reasonable efforts to ensure that participants can access and participate in the event. Participants requiring accessibility-related assistance are encouraged to communicate their requirements to the organizers as early as possible. The organizing committee will make reasonable efforts, subject to available facilities and applicable institutional policies, to support accessibility requirements.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#080808] pb-2 border-b border-[#e5e5e5]">24. SOCIAL MEDIA AND PUBLIC COMMUNICATION</h2>
            <p className="text-base leading-relaxed">Participants are welcome to share their experiences from the School while respecting:</p>
            <ul className="list-disc pl-6 space-y-2 text-base text-[#5a5a5a]">
              <li>Privacy of other participants.</li>
              <li>Speaker preferences and recording restrictions.</li>
              <li>Confidential or unpublished information.</li>
              <li>Intellectual property rights.</li>
              <li>IEEE and institutional branding guidelines.</li>
            </ul>
            <p className="text-base leading-relaxed mt-4 italic">Official statements on behalf of the School, IEEE CIS, or the host institution may only be issued by authorized representatives.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#080808] pb-2 border-b border-[#e5e5e5]">25. CHANGES TO THE GUIDELINES</h2>
            <p className="text-base leading-relaxed">The organizing committee reserves the right to make reasonable modifications to these guidelines when required for safety, security, operational requirements, venue regulations, institutional policies, IEEE requirements, or applicable laws. Significant changes should be communicated to participants through the official event communication channels.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#080808] pb-2 border-b border-[#e5e5e5]">26. ACKNOWLEDGEMENT</h2>
            <p className="text-base leading-relaxed">By registering for and/or participating in the IEEE CIS School, participants acknowledge that they have read and understood these Code of Conduct and Participant Guidelines and agree to comply with them. Participants are encouraged to contribute to an environment that reflects the values of IEEE: integrity, respect, professionalism, inclusion, responsible conduct, and the advancement of technology for humanity.</p>
          </div>
          
        </div>
      </section>

      <Footer />
    </div>
  )
}
