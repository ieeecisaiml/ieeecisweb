-- ============================================================
-- IEEE CIS Summer School Registration Database Schema
-- Supabase PostgreSQL
-- ============================================================

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ──────────────────────────────────────────────────────────────
-- 1. REGISTRATIONS TABLE
-- ──────────────────────────────────────────────────────────────

CREATE TABLE IF NOT EXISTS registrations (
  -- Primary key & timestamps
  id                                UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at                        TIMESTAMPTZ NOT NULL    DEFAULT now(),
  updated_at                        TIMESTAMPTZ NOT NULL    DEFAULT now(),
  status                            TEXT        NOT NULL    DEFAULT 'pending'
                                      CHECK (status IN ('pending', 'approved', 'rejected', 'waitlisted')),

  -- ── Section 1: Personal Information ──────────────────────────
  full_name                         TEXT        NOT NULL,
  gender                            TEXT,
  date_of_birth                     DATE        NOT NULL,
  email                             TEXT        NOT NULL    UNIQUE,
  phone_number                      TEXT        NOT NULL,
  whatsapp_number                   TEXT,
  city                              TEXT        NOT NULL,
  state                             TEXT        NOT NULL,
  country                           TEXT        NOT NULL,
  photograph_url                    TEXT,               -- Supabase Storage URL

  -- ── Section 2: Academic / Professional Information ───────────
  current_status                    TEXT        NOT NULL
                                      CHECK (current_status IN ('Undergraduate', 'Master''s')),
  institution_name                  TEXT        NOT NULL,
  department                        TEXT        NOT NULL,
  degree_program                    TEXT        NOT NULL,
  specialization                    TEXT        NOT NULL,
  current_year                      TEXT        NOT NULL,
  expected_graduation_year          INTEGER     NOT NULL,
  cgpa_percentage                   TEXT        NOT NULL,

  -- ── Section 3: IEEE Information ──────────────────────────────
  ieee_membership_status            TEXT        NOT NULL
                                      CHECK (ieee_membership_status IN ('IEEE Student Member', 'Non-IEEE')),
  ieee_membership_number            TEXT,
  ieee_section_name                 TEXT,

  -- ── Section 4: Technical Skills ──────────────────────────────
  -- JSONB object mapping skill name → proficiency level
  -- e.g. {"Machine Learning": "Intermediate", "PyTorch": "Basic"}
  technical_skills                  JSONB       NOT NULL    DEFAULT '{}',

  -- ── Section 5: Projects & Research ───────────────────────────
  relevant_project                  TEXT        NOT NULL,
  github_profile                    TEXT,
  portfolio_website                 TEXT,
  -- Array of objects: [{title, venue, year, doi_link}]
  publications                      JSONB       NOT NULL    DEFAULT '[]',
  -- Array of objects: [{organization, role, duration, brief_description}]
  internships                       JSONB       NOT NULL    DEFAULT '[]',

  -- ── Section 6: Motivation / SOP ──────────────────────────────
  motivation_primary                TEXT        NOT NULL,
  topics_of_interest                TEXT[]      NOT NULL    DEFAULT '{}',

  -- ── Section 7: Recommendation Letters ────────────────────────
  institution_recommendation_letter_url TEXT    NOT NULL,
  ieee_recommendation_letter_url       TEXT,

  -- ── Section 8: Participation & Logistics ─────────────────────
  availability_confirmation         BOOLEAN     NOT NULL    DEFAULT true,
  accommodation_required            BOOLEAN     NOT NULL    DEFAULT false,
  travel_assistance_required        BOOLEAN     NOT NULL    DEFAULT false,
  travelling_from                   TEXT,
  travel_grant_justification        TEXT
);

-- ── Index for fast email lookups ─────────────────────────────
CREATE INDEX IF NOT EXISTS idx_registrations_email
  ON registrations (email);

-- ── Index for status-based filtering (admin dashboard) ───────
CREATE INDEX IF NOT EXISTS idx_registrations_status
  ON registrations (status);

-- ── Auto-update updated_at trigger ───────────────────────────
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER set_updated_at
  BEFORE UPDATE ON registrations
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();


-- ============================================================
-- 2. ROW LEVEL SECURITY (RLS)
-- ============================================================

ALTER TABLE registrations ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts (public registration form)
CREATE POLICY "Allow anonymous insert"
  ON registrations
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Allow service role full access (admin/server actions)
CREATE POLICY "Allow service role full access"
  ON registrations
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);


-- ============================================================
-- 3. STORAGE BUCKET FOR FILE UPLOADS
-- ============================================================

-- Create the registration_files bucket (public read)
INSERT INTO storage.buckets (id, name, public)
VALUES ('registration_files', 'registration_files', true)
ON CONFLICT (id) DO NOTHING;

-- Allow anonymous uploads to registration_files
CREATE POLICY "Allow anonymous uploads"
  ON storage.objects
  FOR INSERT
  TO anon
  WITH CHECK (bucket_id = 'registration_files');

-- Allow public read access to registration_files
CREATE POLICY "Allow public read on registration_files"
  ON storage.objects
  FOR SELECT
  TO anon
  USING (bucket_id = 'registration_files');

-- Allow service role full access to storage
CREATE POLICY "Allow service role storage access"
  ON storage.objects
  FOR ALL
  TO service_role
  USING (bucket_id = 'registration_files')
  WITH CHECK (bucket_id = 'registration_files');
