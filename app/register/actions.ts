'use server'

import { createServiceClient } from '@/lib/supabase'

interface RegistrationPayload {
  full_name: string
  gender: string
  date_of_birth: string
  email: string
  phone_number: string
  whatsapp_number: string
  city: string
  state: string
  country: string
  photograph_url: string | null
  current_status: string
  institution_name: string
  department: string
  degree_program: string
  specialization: string
  current_year: string
  expected_graduation_year: number
  cgpa_percentage: string
  ieee_membership_status: string
  ieee_membership_number: string
  ieee_section_name: string
  technical_skills: Record<string, string>
  relevant_project: string
  github_profile: string
  portfolio_website: string
  publications: Array<{ title: string; venue: string; year: string; doi_link: string }>
  internships: Array<{ organization: string; role: string; duration: string; brief_description: string }>
  motivation_primary: string
  topics_of_interest: string[]
  institution_recommendation_letter_url: string
  ieee_recommendation_letter_url: string | null
  availability_confirmation: boolean
  accommodation_required: boolean
  travel_assistance_required: boolean
  travelling_from: string
  travel_grant_justification: string
}

export async function submitRegistration(formData: FormData): Promise<{ success: boolean; error?: string; id?: string }> {
  try {
    const supabase = createServiceClient()

    // ──────────────────────────────────────────────
    // 1. Upload files to Supabase Storage
    // ──────────────────────────────────────────────

    let photographUrl: string | null = null
    let institutionLetterUrl: string | null = null
    let ieeeLetterUrl: string | null = null

    const email = formData.get('email') as string
    const sanitizedEmail = email.replace(/[^a-zA-Z0-9]/g, '_')
    const timestamp = Date.now()

    // Upload photograph
    const photograph = formData.get('photograph') as File | null
    if (photograph && photograph.size > 0) {
      const ext = photograph.name.split('.').pop()
      const path = `photographs/${sanitizedEmail}_${timestamp}.${ext}`
      const { error: uploadError } = await supabase.storage
        .from('registration_files')
        .upload(path, photograph, {
          cacheControl: '3600',
          upsert: false,
        })
      if (uploadError) {
        console.error('Photo upload error:', uploadError)
        return { success: false, error: `Failed to upload photograph: ${uploadError.message}` }
      }
      const { data: urlData } = supabase.storage.from('registration_files').getPublicUrl(path)
      photographUrl = urlData.publicUrl
    }

    // Upload institution recommendation letter
    const institutionLetter = formData.get('institution_recommendation_letter') as File | null
    if (institutionLetter && institutionLetter.size > 0) {
      const ext = institutionLetter.name.split('.').pop()
      const path = `recommendation_letters/institution_${sanitizedEmail}_${timestamp}.${ext}`
      const { error: uploadError } = await supabase.storage
        .from('registration_files')
        .upload(path, institutionLetter, {
          cacheControl: '3600',
          upsert: false,
        })
      if (uploadError) {
        console.error('Institution letter upload error:', uploadError)
        return { success: false, error: `Failed to upload institution recommendation letter: ${uploadError.message}` }
      }
      const { data: urlData } = supabase.storage.from('registration_files').getPublicUrl(path)
      institutionLetterUrl = urlData.publicUrl
    }

    // Upload IEEE recommendation letter (optional)
    const ieeeLetter = formData.get('ieee_recommendation_letter') as File | null
    if (ieeeLetter && ieeeLetter.size > 0) {
      const ext = ieeeLetter.name.split('.').pop()
      const path = `recommendation_letters/ieee_${sanitizedEmail}_${timestamp}.${ext}`
      const { error: uploadError } = await supabase.storage
        .from('registration_files')
        .upload(path, ieeeLetter, {
          cacheControl: '3600',
          upsert: false,
        })
      if (uploadError) {
        console.error('IEEE letter upload error:', uploadError)
        return { success: false, error: `Failed to upload IEEE recommendation letter: ${uploadError.message}` }
      }
      const { data: urlData } = supabase.storage.from('registration_files').getPublicUrl(path)
      ieeeLetterUrl = urlData.publicUrl
    }

    // ──────────────────────────────────────────────
    // 2. Parse form fields
    // ──────────────────────────────────────────────

    const technicalSkillsRaw = formData.get('technical_skills') as string
    const publicationsRaw = formData.get('publications') as string
    const internshipsRaw = formData.get('internships') as string
    const topicsRaw = formData.get('topics_of_interest') as string

    const payload: RegistrationPayload = {
      full_name: formData.get('full_name') as string,
      gender: (formData.get('gender') as string) || '',
      date_of_birth: formData.get('date_of_birth') as string,
      email,
      phone_number: formData.get('phone_number') as string,
      whatsapp_number: (formData.get('whatsapp_number') as string) || '',
      city: formData.get('city') as string,
      state: formData.get('state') as string,
      country: formData.get('country') as string,
      photograph_url: photographUrl,
      current_status: formData.get('current_status') as string,
      institution_name: formData.get('institution_name') as string,
      department: formData.get('department') as string,
      degree_program: formData.get('degree_program') as string,
      specialization: formData.get('specialization') as string,
      current_year: formData.get('current_year') as string,
      expected_graduation_year: parseInt(formData.get('expected_graduation_year') as string, 10),
      cgpa_percentage: formData.get('cgpa_percentage') as string,
      ieee_membership_status: formData.get('ieee_membership_status') as string,
      ieee_membership_number: (formData.get('ieee_membership_number') as string) || '',
      ieee_section_name: (formData.get('ieee_section_name') as string) || '',
      technical_skills: technicalSkillsRaw ? JSON.parse(technicalSkillsRaw) : {},
      relevant_project: formData.get('relevant_project') as string,
      github_profile: (formData.get('github_profile') as string) || '',
      portfolio_website: (formData.get('portfolio_website') as string) || '',
      publications: publicationsRaw ? JSON.parse(publicationsRaw) : [],
      internships: internshipsRaw ? JSON.parse(internshipsRaw) : [],
      motivation_primary: formData.get('motivation_primary') as string,
      topics_of_interest: topicsRaw ? JSON.parse(topicsRaw) : [],
      institution_recommendation_letter_url: institutionLetterUrl || '',
      ieee_recommendation_letter_url: ieeeLetterUrl,
      availability_confirmation: formData.get('availability_confirmation') === 'Yes',
      accommodation_required: formData.get('accommodation_required') === 'Yes',
      travel_assistance_required: formData.get('travel_assistance_required') === 'Yes',
      travelling_from: (formData.get('travelling_from') as string) || '',
      travel_grant_justification: (formData.get('travel_grant_justification') as string) || '',
    }

    // ──────────────────────────────────────────────
    // 3. Validate required fields server-side
    // ──────────────────────────────────────────────

    if (!payload.full_name || !payload.email || !payload.phone_number) {
      return { success: false, error: 'Missing required personal information fields.' }
    }

    if (!payload.date_of_birth) {
      return { success: false, error: 'Date of birth is required.' }
    }

    if (!payload.current_status || !payload.institution_name || !payload.department) {
      return { success: false, error: 'Missing required academic information fields.' }
    }

    if (!payload.ieee_membership_status) {
      return { success: false, error: 'IEEE membership status is required.' }
    }

    if (payload.ieee_membership_status === 'IEEE Student Member' && !payload.ieee_membership_number) {
      return { success: false, error: 'IEEE membership number is required for IEEE Student Members.' }
    }

    if (!payload.relevant_project) {
      return { success: false, error: 'Project description is required.' }
    }

    if (!payload.motivation_primary) {
      return { success: false, error: 'Motivation statement is required.' }
    }

    if (!payload.institution_recommendation_letter_url) {
      return { success: false, error: 'Institution recommendation letter is required.' }
    }

    // ──────────────────────────────────────────────
    // 4. Check for duplicate email
    // ──────────────────────────────────────────────

    const { data: existing } = await supabase
      .from('registrations')
      .select('id')
      .eq('email', payload.email)
      .maybeSingle()

    if (existing) {
      return { success: false, error: 'An application with this email address already exists. If you believe this is an error, please contact pallavi.dhade@pccoepune.org.' }
    }

    // ──────────────────────────────────────────────
    // 5. Insert registration
    // ──────────────────────────────────────────────

    const { data, error } = await supabase
      .from('registrations')
      .insert(payload)
      .select('id')
      .single()

    if (error) {
      console.error('Registration insert error:', error)
      return { success: false, error: `Failed to submit registration: ${error.message}` }
    }

    return { success: true, id: data.id }
  } catch (err) {
    console.error('Registration error:', err)
    return { success: false, error: 'An unexpected error occurred. Please try again later.' }
  }
}
