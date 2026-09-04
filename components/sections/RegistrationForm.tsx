'use client'

import { useState, useRef, useCallback } from 'react'
import { submitRegistration } from '@/app/register/actions'
import {
  User,
  GraduationCap,
  Building2,
  Cpu,
  FolderGit2,
  FileText,
  FileUp,
  Calendar,
  Check,
  CheckCircle2,
  AlertCircle,
  Plus,
  Trash2,
  ChevronLeft,
  ChevronRight,
  Loader2,
} from 'lucide-react'

// ─── Types ────────────────────────────────────────────────────

interface Publication {
  title: string
  venue: string
  year: string
  doi_link: string
}

interface Internship {
  organization: string
  role: string
  duration: string
  brief_description: string
}

interface FormData {
  full_name: string
  gender: string
  date_of_birth: string
  email: string
  phone_number: string
  whatsapp_number: string
  city: string
  state: string
  country: string
  photograph: File | null
  current_status: string
  institution_name: string
  department: string
  degree_program: string
  specialization: string
  current_year: string
  expected_graduation_year: string
  cgpa_percentage: string
  ieee_membership_status: string
  ieee_membership_number: string
  ieee_section_name: string
  technical_skills: Record<string, string>
  relevant_project: string
  github_profile: string
  portfolio_website: string
  publications: Publication[]
  internships: Internship[]
  motivation_primary: string
  topics_of_interest: string[]
  institution_recommendation_letter: File | null
  ieee_recommendation_letter: File | null
  availability_confirmation: string
  accommodation_required: string
  travel_assistance_required: string
  travelling_from: string
  travel_grant_justification: string
}

// ─── Constants ────────────────────────────────────────────────

const STEPS = [
  { label: 'Personal', icon: User },
  { label: 'Academic', icon: GraduationCap },
  { label: 'IEEE', icon: Building2 },
  { label: 'Skills', icon: Cpu },
  { label: 'Projects', icon: FolderGit2 },
  { label: 'Motivation', icon: FileText },
  { label: 'Documents', icon: FileUp },
  { label: 'Logistics', icon: Calendar },
]

const SKILLS = [
  'Machine Learning',
  'Deep Learning',
  'PyTorch',
  'TensorFlow/Keras',
  'NLP',
  'Transformers',
  'LLMs',
  'RAG',
  'Fine-tuning',
  'Model deployment',
]

const SKILL_LEVELS = ['None', 'Basic', 'Intermediate', 'Advanced']

const TOPICS = [
  'LoRA / QLoRA',
  'SFT',
  'RLHF / DPO',
  'Quantization',
  'Pruning',
  'Knowledge Distillation',
  'vLLM / TGI',
  'RAG',
  'Deployment',
  'Cost/latency optimization',
  'Other',
]

const INITIAL_FORM: FormData = {
  full_name: '',
  gender: '',
  date_of_birth: '',
  email: '',
  phone_number: '',
  whatsapp_number: '',
  city: '',
  state: '',
  country: '',
  photograph: null,
  current_status: '',
  institution_name: '',
  department: '',
  degree_program: '',
  specialization: '',
  current_year: '',
  expected_graduation_year: '',
  cgpa_percentage: '',
  ieee_membership_status: '',
  ieee_membership_number: '',
  ieee_section_name: '',
  technical_skills: {},
  relevant_project: '',
  github_profile: '',
  portfolio_website: '',
  publications: [],
  internships: [],
  motivation_primary: '',
  topics_of_interest: [],
  institution_recommendation_letter: null,
  ieee_recommendation_letter: null,
  availability_confirmation: '',
  accommodation_required: '',
  travel_assistance_required: '',
  travelling_from: '',
  travel_grant_justification: '',
}

function wordCount(text: string): number {
  return text.trim().split(/\s+/).filter(Boolean).length
}

const inputBase =
  'w-full px-3.5 py-2.5 rounded-[4px] border border-[#d8d8d8] bg-white text-[#080808] text-sm placeholder:text-[#888888] focus:outline-none focus:border-[#080808] focus:ring-1 focus:ring-[#080808] transition-all'
const labelBase = 'block text-sm font-medium text-[#080808] mb-1.5'

// ─── Component ────────────────────────────────────────────────

export function RegistrationForm() {
  const [step, setStep] = useState(0)
  const [form, setForm] = useState<FormData>(INITIAL_FORM)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitResult, setSubmitResult] = useState<{ success: boolean; error?: string; id?: string } | null>(null)
  const formRef = useRef<HTMLDivElement>(null)

  const set = useCallback(
    <K extends keyof FormData>(key: K, value: FormData[K]) => {
      setForm((prev) => ({ ...prev, [key]: value }))
      setErrors((prev) => {
        const next = { ...prev }
        delete next[key]
        return next
      })
    },
    [],
  )

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  // ─── Validation ─────────────────────────────────────────────
  const validate = (): Record<string, string> => {
    const e: Record<string, string> = {}
    if (step === 0) {
      if (!form.full_name.trim()) e.full_name = 'Required'
      if (!form.date_of_birth) e.date_of_birth = 'Required'
      if (!form.email.trim()) e.email = 'Required'
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Invalid email'
      if (!form.phone_number.trim()) e.phone_number = 'Required'
      if (!form.city.trim()) e.city = 'Required'
      if (!form.state.trim()) e.state = 'Required'
      if (!form.country.trim()) e.country = 'Required'
    }
    if (step === 1) {
      if (!form.current_status) e.current_status = 'Required'
      if (!form.institution_name.trim()) e.institution_name = 'Required'
      if (!form.department.trim()) e.department = 'Required'
      if (!form.degree_program.trim()) e.degree_program = 'Required'
      if (!form.specialization.trim()) e.specialization = 'Required'
      if (!form.current_year) e.current_year = 'Required'
      if (!form.expected_graduation_year) e.expected_graduation_year = 'Required'
      if (!form.cgpa_percentage.trim()) e.cgpa_percentage = 'Required'
    }
    if (step === 2) {
      if (!form.ieee_membership_status) e.ieee_membership_status = 'Required'
      if (form.ieee_membership_status === 'IEEE Student Member' && !form.ieee_membership_number.trim())
        e.ieee_membership_number = 'Required for IEEE members'
    }
    if (step === 4) {
      if (!form.relevant_project.trim()) e.relevant_project = 'Required'
      else if (wordCount(form.relevant_project) < 50) e.relevant_project = 'Write at least 50 words'
    }
    if (step === 5) {
      if (!form.motivation_primary.trim()) e.motivation_primary = 'Required'
      else if (wordCount(form.motivation_primary) > 250) e.motivation_primary = 'Keep it under 250 words'
    }
    if (step === 6) {
      if (!form.institution_recommendation_letter)
        e.institution_recommendation_letter = 'PDF required'
    }
    if (step === 7) {
      if (!form.availability_confirmation) e.availability_confirmation = 'Required'
      if (!form.accommodation_required) e.accommodation_required = 'Required'
      if (!form.travel_assistance_required) e.travel_assistance_required = 'Required'
      if (form.travel_assistance_required === 'Yes' && !form.travelling_from.trim())
        e.travelling_from = 'Required'
    }
    return e
  }

  const goNext = () => {
    const errs = validate()
    if (Object.keys(errs).length > 0) { setErrors(errs); return }
    setErrors({})
    setStep((s) => Math.min(s + 1, STEPS.length - 1))
    scrollToForm()
  }

  const goPrev = () => {
    setErrors({})
    setStep((s) => Math.max(s - 1, 0))
    scrollToForm()
  }

  const handleSubmit = async () => {
    const errs = validate()
    if (Object.keys(errs).length > 0) { setErrors(errs); return }
    setIsSubmitting(true)
    setSubmitResult(null)
    try {
      const fd = new window.FormData()
      const scalars: (keyof FormData)[] = [
        'full_name','gender','date_of_birth','email','phone_number','whatsapp_number',
        'city','state','country','current_status','institution_name','department',
        'degree_program','specialization','current_year','expected_graduation_year',
        'cgpa_percentage','ieee_membership_status','ieee_membership_number','ieee_section_name',
        'relevant_project','github_profile','portfolio_website','motivation_primary',
        'availability_confirmation','accommodation_required','travel_assistance_required',
        'travelling_from','travel_grant_justification',
      ]
      for (const k of scalars) fd.append(k, form[k] as string)
      fd.append('technical_skills', JSON.stringify(form.technical_skills))
      fd.append('publications', JSON.stringify(form.publications))
      fd.append('internships', JSON.stringify(form.internships))
      fd.append('topics_of_interest', JSON.stringify(form.topics_of_interest))
      if (form.photograph) fd.append('photograph', form.photograph)
      if (form.institution_recommendation_letter) fd.append('institution_recommendation_letter', form.institution_recommendation_letter)
      if (form.ieee_recommendation_letter) fd.append('ieee_recommendation_letter', form.ieee_recommendation_letter)

      const result = await submitRegistration(fd)
      setSubmitResult(result)
      if (result.success) scrollToForm()
    } catch {
      setSubmitResult({ success: false, error: 'An unexpected error occurred.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  // ─── Render helpers ─────────────────────────────────────────

  const Err = ({ k }: { k: string }) =>
    errors[k] ? <p className="text-xs text-red-600 mt-1">{errors[k]}</p> : null

  const Star = () => <span className="text-red-500 ml-0.5">*</span>

  const Input = ({
    k, label, required, type = 'text', placeholder,
  }: {
    k: keyof FormData; label: string; required?: boolean; type?: string; placeholder?: string
  }) => (
    <div>
      <label className={labelBase}>{label}{required && <Star />}</label>
      <input
        type={type}
        value={form[k] as string}
        onChange={(e) => set(k, e.target.value as never)}
        className={`${inputBase} ${errors[k] ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`}
        placeholder={placeholder}
      />
      <Err k={k} />
    </div>
  )

  const Radio = ({
    k, label, options, required, note,
  }: {
    k: keyof FormData; label: string; options: string[]; required?: boolean; note?: string
  }) => (
    <div>
      <label className={labelBase}>{label}{required && <Star />}</label>
      {note && <p className="text-xs text-[#5a5a5a] mb-2">{note}</p>}
      <div className="flex flex-wrap gap-2">
        {options.map((opt) => (
          <label
            key={opt}
            className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-[4px] border text-sm cursor-pointer transition-all select-none ${
              form[k] === opt
                ? 'border-[#080808] bg-[#080808] text-white shadow-sm'
                : 'border-[#d8d8d8] text-[#5a5a5a] bg-white hover:border-[#080808]'
            }`}
          >
            <input type="radio" name={k} value={opt} checked={form[k] === opt} onChange={(e) => set(k, e.target.value as never)} className="sr-only" />
            <div className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center flex-shrink-0 ${form[k] === opt ? 'border-white' : 'border-[#888888]'}`}>
              {form[k] === opt && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
            </div>
            <span className="font-medium">{opt}</span>
          </label>
        ))}
      </div>
      <Err k={k} />
    </div>
  )

  // ─── Success ────────────────────────────────────────────────

  if (submitResult?.success) {
    return (
      <div ref={formRef} className="border border-[#d8d8d8] rounded-[8px] bg-white p-8 sm:p-12 text-center shadow-layered">
        <div className="w-16 h-16 bg-[#00d722]/15 text-[#080808] rounded-full flex items-center justify-center mx-auto mb-5 border border-[#00d722]/40">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h2 className="text-2xl font-semibold text-[#080808] mb-2">Application Submitted</h2>
        <p className="text-[#5a5a5a] mb-1">Your application to the IEEE CIS Summer School has been received.</p>
        <p className="text-sm text-[#5a5a5a]">Confirmation will be sent to <strong className="text-[#080808]">{form.email}</strong></p>
      </div>
    )
  }

  if (submitResult && !submitResult.success) {
    return (
      <div ref={formRef} className="border border-red-200 rounded-[8px] bg-white p-8 sm:p-12 text-center shadow-layered">
        <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-5 border border-red-200">
          <AlertCircle className="w-8 h-8" />
        </div>
        <h2 className="text-2xl font-semibold text-[#080808] mb-2">Submission Failed</h2>
        <p className="text-red-600 text-sm mb-6 max-w-md mx-auto">{submitResult.error}</p>
        <button onClick={() => setSubmitResult(null)} className="px-6 py-2.5 bg-[#080808] text-white font-medium rounded-[4px] hover:bg-[#222222] transition-colors text-sm">
          Try Again
        </button>
      </div>
    )
  }

  // ─── Step content ───────────────────────────────────────────

  const renderStep = () => {
    switch (step) {
      case 0:
        return (
          <div className="space-y-4">
            <Input k="full_name" label="Full Name" required placeholder="Enter your full name" />
            <div>
              <label className={labelBase}>Gender</label>
              <select value={form.gender} onChange={(e) => set('gender', e.target.value)} className={inputBase}>
                <option value="">Select (optional)</option>
                {['Male', 'Female', 'Other', 'Prefer not to say'].map((o) => <option key={o} value={o}>{o}</option>)}
              </select>
            </div>
            <Input k="date_of_birth" label="Date of Birth" required type="date" />
            <Input k="email" label="Email Address" required type="email" placeholder="you@example.com" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input k="phone_number" label="Phone Number" required type="tel" placeholder="+91 XXXXX XXXXX" />
              <Input k="whatsapp_number" label="WhatsApp Number" type="tel" placeholder="+91 XXXXX XXXXX" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Input k="city" label="City" required placeholder="Pune" />
              <Input k="state" label="State" required placeholder="Maharashtra" />
              <Input k="country" label="Country" required placeholder="India" />
            </div>
            <div>
              <label className={labelBase}>Photograph <span className="text-[#5a5a5a] font-normal text-xs">(optional, for ID card)</span></label>
              <input type="file" accept="image/*" onChange={(e) => set('photograph', e.target.files?.[0] || null)} className={inputBase} />
            </div>
          </div>
        )

      case 1:
        return (
          <div className="space-y-4">
            <Radio k="current_status" label="Current Status" options={['Undergraduate', "Master's"]} required />
            <Input k="institution_name" label="Institution Name" required placeholder="e.g. PCCoE, Pune" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input k="department" label="Department" required placeholder="Computer Science" />
              <Input k="degree_program" label="Degree / Program" required placeholder="B.Tech" />
            </div>
            <Input k="specialization" label="Specialization" required placeholder="AI & ML" />
            <Radio k="current_year" label="Current Year" options={['2nd year', '3rd year', 'Final year', 'Other']} required />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input k="expected_graduation_year" label="Expected Graduation Year" required type="number" placeholder="2027" />
              <Input k="cgpa_percentage" label="CGPA / Percentage" required placeholder="8.5 or 85%" />
            </div>
          </div>
        )

      case 2:
        return (
          <div className="space-y-4">
            <p className="text-sm text-[#5a5a5a] -mt-1 mb-2">
              Your IEEE membership details help with registration categorization and reporting.
            </p>
            <Radio k="ieee_membership_status" label="IEEE Membership Status" options={['IEEE Student Member', 'Non-IEEE']} required />
            {form.ieee_membership_status === 'IEEE Student Member' && (
              <Input k="ieee_membership_number" label="IEEE Membership Number" required placeholder="12345678" />
            )}
            <Input k="ieee_section_name" label="IEEE Section Name" placeholder="Pune Section (optional)" />
          </div>
        )

      case 3:
        return (
          <div className="space-y-4">
            <p className="text-sm text-[#5a5a5a] -mt-1 mb-2">
              Rate your proficiency in each AI/ML skill. This helps us tailor the program.
            </p>

            {/* Desktop table */}
            <div className="hidden md:block border border-[#d8d8d8] rounded-[8px] overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#f5f5f5]">
                    <th className="text-left text-xs font-semibold text-[#080808] py-2.5 px-4 border-b border-[#d8d8d8]">Skill</th>
                    {SKILL_LEVELS.map((l) => (
                      <th key={l} className="text-center text-xs font-semibold text-[#080808] py-2.5 px-3 border-b border-[#d8d8d8] w-24">{l}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {SKILLS.map((skill, i) => (
                    <tr key={skill} className={`${i % 2 === 0 ? 'bg-white' : 'bg-[#fafafa]'} hover:bg-[#f5f5f5] transition-colors border-b border-[#d8d8d8] last:border-b-0`}>
                      <td className="py-2.5 px-4 text-sm text-[#080808] font-medium">{skill}</td>
                      {SKILL_LEVELS.map((level) => (
                        <td key={level} className="text-center py-2.5 px-3">
                          <input
                            type="radio"
                            name={`skill_${skill}`}
                            checked={form.technical_skills[skill] === level}
                            onChange={() => set('technical_skills', { ...form.technical_skills, [skill]: level })}
                            className="w-4 h-4 accent-[#080808] cursor-pointer"
                          />
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile cards */}
            <div className="md:hidden space-y-3">
              {SKILLS.map((skill) => (
                <div key={skill} className="border border-[#d8d8d8] rounded-[8px] p-3 bg-white">
                  <p className="text-sm font-medium text-[#080808] mb-2">{skill}</p>
                  <div className="grid grid-cols-4 gap-1.5">
                    {SKILL_LEVELS.map((level) => (
                      <button
                        key={level}
                        type="button"
                        onClick={() => set('technical_skills', { ...form.technical_skills, [skill]: level })}
                        className={`py-1.5 px-1 rounded-[4px] text-xs font-medium transition-all text-center ${
                          form.technical_skills[skill] === level
                            ? 'bg-[#080808] text-white shadow-sm'
                            : 'bg-[#f5f5f5] text-[#5a5a5a] border border-[#d8d8d8]'
                        }`}
                      >
                        {level}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )

      case 4:
        return (
          <div className="space-y-4">
            {/* Project */}
            <div>
              <label className={labelBase}>Describe your most relevant project<Star /></label>
              <p className="text-xs text-[#5a5a5a] mb-1.5">
                Include: Problem, Dataset, Model/approach, Tools, Your contribution, Result (150–200 words)
              </p>
              <textarea
                value={form.relevant_project}
                onChange={(e) => set('relevant_project', e.target.value)}
                rows={5}
                className={`${inputBase} resize-y ${errors.relevant_project ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`}
                placeholder="Describe the problem, dataset, approach, tools, your contribution, and result..."
              />
              <div className="flex justify-between mt-1">
                <Err k="relevant_project" />
                <p className="text-xs text-[#5a5a5a]">{wordCount(form.relevant_project)} words</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input k="github_profile" label="GitHub Profile" type="url" placeholder="https://github.com/username" />
              <Input k="portfolio_website" label="Portfolio / Website" type="url" placeholder="https://yoursite.com" />
            </div>

            {/* Publications */}
            <div className="pt-2">
              <div className="flex items-center justify-between mb-2">
                <label className={`${labelBase} mb-0`}>Publications <span className="text-[#5a5a5a] font-normal text-xs">(optional)</span></label>
                <button
                  type="button"
                  onClick={() => set('publications', [...form.publications, { title: '', venue: '', year: '', doi_link: '' }])}
                  className="inline-flex items-center gap-1 text-xs text-[#080808] font-semibold hover:underline"
                >
                  <Plus className="w-3 h-3" />
                  Add Publication
                </button>
              </div>
              {form.publications.map((pub, idx) => (
                <div key={idx} className="border border-[#d8d8d8] rounded-[8px] p-3 mb-2 space-y-2 bg-[#f9f9f9]">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-semibold text-[#5a5a5a]">Publication {idx + 1}</span>
                    <button
                      type="button"
                      onClick={() => set('publications', form.publications.filter((_, i) => i !== idx))}
                      className="inline-flex items-center gap-1 text-xs text-red-600 hover:underline"
                    >
                      <Trash2 className="w-3 h-3" />
                      Remove
                    </button>
                  </div>
                  <input type="text" value={pub.title} onChange={(e) => { const u = [...form.publications]; u[idx] = { ...u[idx], title: e.target.value }; set('publications', u) }} className={inputBase} placeholder="Title" />
                  <div className="grid grid-cols-3 gap-2">
                    <input type="text" value={pub.venue} onChange={(e) => { const u = [...form.publications]; u[idx] = { ...u[idx], venue: e.target.value }; set('publications', u) }} className={inputBase} placeholder="Venue" />
                    <input type="number" value={pub.year} onChange={(e) => { const u = [...form.publications]; u[idx] = { ...u[idx], year: e.target.value }; set('publications', u) }} className={inputBase} placeholder="Year" />
                    <input type="url" value={pub.doi_link} onChange={(e) => { const u = [...form.publications]; u[idx] = { ...u[idx], doi_link: e.target.value }; set('publications', u) }} className={inputBase} placeholder="DOI / Link" />
                  </div>
                </div>
              ))}
            </div>

            {/* Internships */}
            <div className="pt-2">
              <div className="flex items-center justify-between mb-2">
                <label className={`${labelBase} mb-0`}>Internships <span className="text-[#5a5a5a] font-normal text-xs">(optional)</span></label>
                <button
                  type="button"
                  onClick={() => set('internships', [...form.internships, { organization: '', role: '', duration: '', brief_description: '' }])}
                  className="inline-flex items-center gap-1 text-xs text-[#080808] font-semibold hover:underline"
                >
                  <Plus className="w-3 h-3" />
                  Add Internship
                </button>
              </div>
              {form.internships.map((intern, idx) => (
                <div key={idx} className="border border-[#d8d8d8] rounded-[8px] p-3 mb-2 space-y-2 bg-[#f9f9f9]">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-semibold text-[#5a5a5a]">Internship {idx + 1}</span>
                    <button
                      type="button"
                      onClick={() => set('internships', form.internships.filter((_, i) => i !== idx))}
                      className="inline-flex items-center gap-1 text-xs text-red-600 hover:underline"
                    >
                      <Trash2 className="w-3 h-3" />
                      Remove
                    </button>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <input type="text" value={intern.organization} onChange={(e) => { const u = [...form.internships]; u[idx] = { ...u[idx], organization: e.target.value }; set('internships', u) }} className={inputBase} placeholder="Organization" />
                    <input type="text" value={intern.role} onChange={(e) => { const u = [...form.internships]; u[idx] = { ...u[idx], role: e.target.value }; set('internships', u) }} className={inputBase} placeholder="Role" />
                  </div>
                  <input type="text" value={intern.duration} onChange={(e) => { const u = [...form.internships]; u[idx] = { ...u[idx], duration: e.target.value }; set('internships', u) }} className={inputBase} placeholder="Duration (e.g. 3 months)" />
                  <textarea value={intern.brief_description} onChange={(e) => { const u = [...form.internships]; u[idx] = { ...u[idx], brief_description: e.target.value }; set('internships', u) }} rows={2} className={`${inputBase} resize-y`} placeholder="Brief description" />
                </div>
              ))}
            </div>
          </div>
        )

      case 5:
        return (
          <div className="space-y-5">
            <div>
              <label className={labelBase}>
                Why do you want to attend the IEEE CIS Summer School on Fine-Tuning LLMs and Inference Optimization, and how do you plan to apply the knowledge gained?<Star />
              </label>
              <p className="text-xs text-[#5a5a5a] mb-1.5">Maximum 250 words</p>
              <textarea
                value={form.motivation_primary}
                onChange={(e) => set('motivation_primary', e.target.value)}
                rows={7}
                className={`${inputBase} resize-y ${errors.motivation_primary ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`}
                placeholder="Describe your motivation and how you plan to apply the knowledge..."
              />
              <div className="flex justify-between mt-1">
                <Err k="motivation_primary" />
                <p className={`text-xs ${wordCount(form.motivation_primary) > 250 ? 'text-red-600 font-semibold' : 'text-[#5a5a5a]'}`}>
                  {wordCount(form.motivation_primary)} / 250
                </p>
              </div>
            </div>

            <div>
              <label className={labelBase}>Topics of interest <span className="text-[#5a5a5a] font-normal text-xs">(optional, select all that apply)</span></label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {TOPICS.map((topic) => (
                  <label
                    key={topic}
                    className={`inline-flex items-center gap-2.5 px-3 py-2.5 rounded-[4px] border text-sm cursor-pointer transition-all select-none ${
                      form.topics_of_interest.includes(topic)
                        ? 'border-[#080808] bg-[#080808]/5 text-[#080808] shadow-sm'
                        : 'border-[#d8d8d8] text-[#5a5a5a] bg-white hover:border-[#080808]'
                    }`}
                  >
                    <div className={`w-4 h-4 rounded-[3px] border flex items-center justify-center flex-shrink-0 transition-colors ${
                      form.topics_of_interest.includes(topic) ? 'border-[#080808] bg-[#080808]' : 'border-[#888888]'
                    }`}>
                      {form.topics_of_interest.includes(topic) && (
                        <Check className="w-3 h-3 text-white stroke-[3]" />
                      )}
                    </div>
                    <input
                      type="checkbox"
                      checked={form.topics_of_interest.includes(topic)}
                      onChange={(e) => {
                        if (e.target.checked) set('topics_of_interest', [...form.topics_of_interest, topic])
                        else set('topics_of_interest', form.topics_of_interest.filter((t) => t !== topic))
                      }}
                      className="sr-only"
                    />
                    <span className="font-medium text-xs sm:text-sm">{topic}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        )

      case 6:
        return (
          <div className="space-y-5">
            <p className="text-sm text-[#5a5a5a] -mt-1 mb-2">Upload recommendation letters in PDF format.</p>
            <div>
              <label className={labelBase}>Recommendation Letter from HoD (Institution)<Star /></label>
              <input type="file" accept="application/pdf" onChange={(e) => set('institution_recommendation_letter', e.target.files?.[0] || null)} className={`${inputBase} ${errors.institution_recommendation_letter ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`} />
              {form.institution_recommendation_letter && (
                <p className="text-xs text-green-700 mt-1.5 font-medium flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" />
                  {form.institution_recommendation_letter.name}
                </p>
              )}
              <Err k="institution_recommendation_letter" />
            </div>
            <div>
              <label className={labelBase}>Recommendation Letter (IEEE) <span className="text-[#5a5a5a] font-normal text-xs">(optional)</span></label>
              <input type="file" accept="application/pdf" onChange={(e) => set('ieee_recommendation_letter', e.target.files?.[0] || null)} className={inputBase} />
              {form.ieee_recommendation_letter && (
                <p className="text-xs text-green-700 mt-1.5 font-medium flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" />
                  {form.ieee_recommendation_letter.name}
                </p>
              )}
            </div>
          </div>
        )

      case 7:
        return (
          <div className="space-y-4">
            <p className="text-sm text-[#5a5a5a] -mt-1 mb-2">The program is in-person and intensive. Limited to 60 participants.</p>
            <Radio k="availability_confirmation" label="I confirm that I can attend the complete six-day program." options={['Yes', 'No']} required />
            <Radio k="accommodation_required" label="Do you require accommodation?" options={['Yes', 'No']} required note="FCFS Basis" />
            <Radio k="travel_assistance_required" label="Are you travelling from outside Pune City?" options={['Yes', 'No']} required note="Travel assistance is on FCFS Basis" />
            {form.travel_assistance_required === 'Yes' && (
              <>
                <Input k="travelling_from" label="Travelling From" required placeholder="Mumbai, Delhi, etc." />
                <div>
                  <label className={labelBase}>Why should we consider you for a travel grant?</label>
                  <p className="text-xs text-[#5a5a5a] mb-1.5">Maximum 100 characters</p>
                  <textarea
                    value={form.travel_grant_justification}
                    onChange={(e) => { if (e.target.value.length <= 100) set('travel_grant_justification', e.target.value) }}
                    rows={2}
                    className={`${inputBase} resize-y`}
                    placeholder="Briefly justify..."
                    maxLength={100}
                  />
                  <p className="text-xs text-[#5a5a5a] mt-1">{form.travel_grant_justification.length}/100</p>
                </div>
              </>
            )}
          </div>
        )

      default:
        return null
    }
  }

  // ─── Main render ────────────────────────────────────────────

  const CurrentStepIcon = STEPS[step].icon

  return (
    <div ref={formRef} className="scroll-mt-24">
      {/* ── Step indicator ────────────────────────────────────── */}

      {/* Desktop: horizontal step bar */}
      <div className="hidden md:block mb-8">
        <div className="flex items-center">
          {STEPS.map((s, idx) => {
            const StepIcon = s.icon
            return (
              <div key={idx} className="flex items-center flex-1 last:flex-none">
                <button
                  type="button"
                  onClick={() => { if (idx < step) { setStep(idx); scrollToForm() } }}
                  disabled={idx > step}
                  className={`flex flex-col items-center gap-1.5 group ${idx <= step ? 'cursor-pointer' : 'cursor-default'}`}
                >
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-semibold transition-all ${
                      idx === step
                        ? 'bg-[#080808] text-white shadow-sm ring-4 ring-[#080808]/10'
                        : idx < step
                          ? 'bg-[#f5f5f5] text-[#080808] border border-[#d8d8d8]'
                          : 'bg-[#f9f9f9] text-[#888888] border border-[#d8d8d8]'
                    }`}
                  >
                    {idx < step ? (
                      <Check className="w-4 h-4 stroke-[2.5]" />
                    ) : (
                      <StepIcon className="w-4 h-4" />
                    )}
                  </div>
                  <span className={`text-[11px] font-medium leading-tight ${
                    idx === step ? 'text-[#080808] font-semibold' : idx < step ? 'text-[#080808]' : 'text-[#888888]'
                  }`}>
                    {s.label}
                  </span>
                </button>
                {idx < STEPS.length - 1 && (
                  <div className={`flex-1 h-0.5 mx-1.5 rounded transition-colors ${idx < step ? 'bg-[#080808]' : 'bg-[#d8d8d8]'}`} />
                )}
              </div>
            )
          })}
        </div>
      </div>

      {/* Mobile: compact progress */}
      <div className="md:hidden mb-6">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <CurrentStepIcon className="w-5 h-5 text-[#080808]" />
            <span className="text-sm font-semibold text-[#080808]">{STEPS[step].label}</span>
          </div>
          <span className="text-xs font-medium text-[#5a5a5a] bg-[#f5f5f5] border border-[#d8d8d8] px-2.5 py-1 rounded-[4px]">
            {step + 1} / {STEPS.length}
          </span>
        </div>
        <div className="w-full h-1.5 bg-[#d8d8d8] rounded-full overflow-hidden">
          <div className="h-full bg-[#080808] rounded-full transition-all duration-500 ease-out" style={{ width: `${((step + 1) / STEPS.length) * 100}%` }} />
        </div>
      </div>

      {/* ── Form card ─────────────────────────────────────────── */}
      <div className="border border-[#d8d8d8] rounded-[8px] bg-white p-5 sm:p-8 shadow-sm">
        {/* Section header */}
        <div className="mb-6">
          <div className="flex items-center gap-2.5 mb-2">
            <CurrentStepIcon className="w-5 h-5 text-[#080808]" />
            <h3 className="text-xl sm:text-2xl font-semibold text-[#080808]">
              {STEPS[step].label === 'Personal' ? 'Personal Information'
                : STEPS[step].label === 'Academic' ? 'Academic / Professional Information'
                : STEPS[step].label === 'IEEE' ? 'IEEE Information'
                : STEPS[step].label === 'Skills' ? 'Technical Skills'
                : STEPS[step].label === 'Projects' ? 'Projects & Research'
                : STEPS[step].label === 'Motivation' ? 'Motivation / Statement of Purpose'
                : STEPS[step].label === 'Documents' ? 'Recommendation Letters'
                : 'Participation & Logistics'}
            </h3>
          </div>
          <div className="h-px bg-[#d8d8d8]" />
        </div>

        {renderStep()}

        {/* ── Navigation ──────────────────────────────────────── */}
        <div className="flex justify-between items-center mt-8 pt-5 border-t border-[#d8d8d8]">
          <div>
            {step > 0 && (
              <button
                type="button"
                onClick={goPrev}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 text-sm font-medium text-[#080808] bg-white rounded-[4px] hover:bg-[#f5f5f5] transition-colors border border-[#d8d8d8] cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
                Previous
              </button>
            )}
          </div>
          <div>
            {step < STEPS.length - 1 ? (
              <button
                type="button"
                onClick={goNext}
                className="inline-flex items-center gap-1.5 px-5 py-2.5 text-sm font-medium bg-[#080808] text-white rounded-[4px] hover:bg-[#222222] transition-all shadow-sm cursor-pointer"
              >
                Next
                <ChevronRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                type="button"
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-medium bg-[#080808] text-white rounded-[4px] hover:bg-[#222222] transition-all shadow-sm disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Submitting…
                  </>
                ) : (
                  'Submit Application'
                )}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
