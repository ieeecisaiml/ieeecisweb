# BUILD PROMPT — IEEE CIS Summer School 2026 (FTIO) Website
### PCCoE | "Fine-Tuning Large Language Models & Inference Optimization"

Use this entire document as the build brief. Tech stack, design system, page structure, and content are all specified below — treat this as a single project brief for an AI coding agent (or your own dev work).

---

## 1. PROJECT SUMMARY

Build a modern, content-rich marketing/event website for the **2026 IEEE CIS Summer School on Fine-Tuning Large Language Models and Inference Optimization (FTIO)**, hosted by the **Department of CSE (AI & ML), Pimpri Chinchwad College of Engineering (PCCoE), Pune**, June 22–27, 2026.

This is a **6-day intensive residential + hybrid program** with 60 in-person participants, 100+ online viewers, 20+ speakers, daily schedules, registration tiers, and a capstone showcase. The site needs to communicate **technical credibility, IEEE legitimacy, and a premium "real conference" feel** — not a generic college-club poster site.

**Reference site:** https://events.iiti.ac.in/ieee-cis-summer-school-2025/main — use this ONLY for understanding what information an IEEE summer school site typically needs (speakers, schedule, registration tiers, venue). **Do not copy its visual design** — our site should look significantly more polished, modern, and editorial — closer to a Webflow/SaaS product marketing site than a typical academic event page.

---

## 2. TECH STACK (strict)

- **Framework:** Next.js 14+ (App Router), **TypeScript** throughout — no `.js`/`.jsx` files
- **Styling:** Tailwind CSS, with design tokens defined in `tailwind.config.ts` (see Section 3)
- **Components:** shadcn/ui as the base primitive layer (buttons, cards, dialogs, accordions, tabs) — restyled to match our design tokens, not default shadcn look
- **Animation:** Framer Motion for scroll reveals, hover states, and the hero
- **Content:** Structured as typed data files (`/data/speakers.ts`, `/data/schedule.ts`, `/data/registration.ts`, `/data/faq.ts`) — NOT hardcoded inline in JSX. This makes future content edits trivial.
- **Forms:** Registration CTA links out to Google Form (no custom backend needed for v1); Contact form can use a simple API route + Resend/Formspree, written in TS
- **Images:** `next/image` for all imagery; SVG icons via `lucide-react`
- **Deployment target:** Vercel
- **Fonts:** `Inter` (variable, weights 400/500/600 only) via `next/font/google` — see Section 3 for rationale
- **Linting:** ESLint + Prettier, strict TS (`strict: true` in tsconfig)

---

## 3. DESIGN DIRECTION — "Technical Editorial" System

The attached `design.md` describes a Webflow-style design language (near-black ink primary on white canvas, a 5-stop chromatic accent system, tight 4px/8px radii, Inter-based type scale, layered shadows). **Adapt this system** to an academic/technical event context as follows:

### 3.1 Core Palette
| Token | Value | Use |
|---|---|---|
| `--color-ink` | `#0A0A0A` | Primary text, headings, primary CTA background, logo |
| `--color-canvas` | `#FFFFFF` | Page background |
| `--color-canvas-soft` | `#F7F7F5` | Alternating section backgrounds |
| `--color-hairline` | `#E2E2E0` | Borders, dividers, card chrome |
| `--color-body` | `#3A3A3A` | Body text |
| `--color-mute` | `#8A8A8A` | Secondary/meta text |

### 3.2 The "Day Accent" System (replaces the generic 5-stop palette)
Instead of arbitrary product-category colors, **map the 5 chromatic accents to the 6-day program themes** — this becomes the site's signature device, used in the Schedule, Programme, and Speaker sections as colored tags/chips/left-borders:

| Accent | Hex | Mapped to |
|---|---|---|
| `--accent-violet` | `#6D4FFF` | Day 1–2: Foundations & PEFT (Fine-Tuning) |
| `--accent-cyan` | `#2F8AFF` | Day 3: Alignment & RLHF |
| `--accent-amber` | `#FF9F1C` | Day 4: Inference Optimization & Quantization |
| `--accent-emerald` | `#1FAE6E` | Day 5: Serving & Deployment |
| `--accent-rose` | `#FF4D6D` | Day 6: Capstone & Presentations |

Use these as: full-fill "day chips" in the schedule, left-border accents on speaker cards (color = which day they speak), and section eyebrow underlines. **Never** use them as primary button backgrounds — primary CTA stays `--color-ink`.

### 3.3 Typography
- Single family: **Inter** (var weights 400/500/600 — cap at 600, per the reference system's "never bolder than semibold" principle)
- Scale (Tailwind custom):
  - `text-display-xl` → 64px/600/-1px tracking (hero only, desktop)
  - `text-display-lg` → 44px/600/-0.5px (section headlines)
  - `text-display-md` → 28px/500 (card cluster headings)
  - `text-eyebrow` → 13px/600/+1.5px tracking/uppercase (section labels — e.g. "PROGRAM · DAY 04")
  - `text-body-lg` → 19px/400/1.6 line-height (lead paragraphs)
  - `text-body` → 16px/400/1.6
  - `text-caption` → 12px/550/uppercase (badges, meta tags)

### 3.4 Shape & Elevation
- Buttons: `rounded-md` (6px), tight padding (`px-5 py-3`)
- Cards: `rounded-xl` (12px) — slightly more generous than the reference's 8px, to feel a bit warmer for an academic audience
- Speaker photo frames: `rounded-lg`, 1px hairline border, subtle grayscale-to-color hover transition
- Elevation: flat by default (Level 0); on hover, cards lift with a soft multi-stop shadow (`shadow-[0_20px_40px_-15px_rgba(0,0,0,0.15)]`)
- Section dividers: thin hairline rules, generous vertical rhythm (`py-24` / `py-32` sections)

### 3.5 Layout Principles
- Wide container (`max-w-7xl`), generous gutters (`px-6 md:px-12`)
- Schedule = horizontal tab/day-switcher (not a giant table) — click a day, see that day's session timeline as vertical cards
- Speaker grid = 3-up desktop / 2-up tablet / 1-up mobile, with a "Plenary Speakers" row visually distinct (larger cards) from "Lecture Instructors" (smaller grid)
- Use a sticky, transparent-to-solid navbar (transparent over hero, solid white + hairline border on scroll)
- Dark "ink" sections used sparingly for high-contrast breaks (e.g., the closing CTA / "Apply Now" band, and maybe the stats/impact band)

---

## 4. SITE MAP & PAGES

| Route | Purpose |
|---|---|
| `/` | Home — hero, overview, highlights, day-accent program teaser, speaker teaser, stats, CTA |
| `/about` | About the program — aims, why now, problem statement, target audience, prerequisites |
| `/program` | Full 6-day schedule, day-by-day tabs, fine-tuning clinics explainer |
| `/speakers` | All plenary speakers + lecture instructors, full bios |
| `/register` | Registration tiers, fees table, benefits, deadlines, CTA to Google Form |
| `/venue` | PCCoE campus info, accommodation, travel, virtual tour embeds |
| `/faq` | Accordion FAQ |
| `/contact` | Contact form + organizer/coordinator directory |
| `/gallery` *(optional, can be a section on home instead)* | Past edition photos / placeholder |

Footer + Navbar are shared across all pages via `app/layout.tsx`.

---

## 5. PAGE-BY-PAGE CONTENT BRIEF

### 5.1 Home (`/`)

**Navbar**
- Logo: `IEEE CIS Summer School` wordmark + small `PCCoE` tag
- Links: `Program` · `Speakers` · `Register` · `Venue` · `FAQ`
- CTA button (ink, top right): `Apply Now`

**Hero**
- Eyebrow: `IEEE CIS SUMMER SCHOOL 2026 · PCCoE, PUNE`
- Headline (display-xl): `Fine-Tuning LLMs & Inference Optimization`
- Subhead: `A 6-day intensive residential + hybrid program on building, aligning, optimizing, and deploying large language models — from LoRA to production serving.`
- Meta row (small chips): `June 22–27, 2026` · `PCCoE, Pune` · `In-person + Hybrid` · `60 seats`
- Primary CTA: `Apply Now →` (links to `/register`)
- Secondary CTA: `View Full Schedule` (links to `/program`)
- Visual: abstract animated gradient/mesh in the accent colors behind a clean device mockup or architecture diagram illustration (no stock photos of "students smiling at laptops" — keep it technical/abstract)

**"By the Numbers" stat band** (dark ink section, light text)
- `6 Days` — Intensive in-person + hybrid program
- `20+ Speakers` — From IIT Bombay, NVIDIA, TCS, Microsoft, UBS & more
- `12+ Hands-on Labs` — HuggingFace, PEFT, vLLM, TGI, bitsandbytes
- `60 Seats` — In-person, IEEE CIS sponsored

**Overview / "Why This Program" section**
- Eyebrow: `WHY FTIO`
- Headline: `From foundations to production-grade LLM systems`
- Body (condensed from proposal §1.1–1.2): As AI moves into healthcare, finance, and public infrastructure, the ability to fine-tune, align, and efficiently deploy LLMs is now core engineering literacy. This program takes participants from transformer fundamentals through LoRA/QLoRA fine-tuning, RLHF alignment, quantization, and production serving with vLLM/TGI — culminating in a deployed capstone project.
- 3-column highlight grid (use day-accent colors as left-border):
  1. **Foundations & PEFT** (violet) — Transformer review, SFT, LoRA, QLoRA, adapters, prompt tuning
  2. **Alignment & Optimization** (cyan/amber) — RLHF, DPO, quantization (GPTQ/AWQ), pruning, distillation
  3. **Serving & Capstone** (emerald/rose) — vLLM/TGI deployment, RAG integration, final project presentations

**Program Teaser (Day Accent Strip)**
- Eyebrow: `THE 6-DAY ARC`
- Horizontal strip of 6 day-chips (Day 1 → Day 6), each showing date + theme + accent color, linking to `/program#day-N`
  - Day 1 — Foundations of LLM Fine-Tuning
  - Day 2 — Parameter-Efficient Fine-Tuning Methods
  - Day 3 — Advanced Fine-Tuning & Alignment
  - Day 4 — Inference Optimization & Quantization
  - Day 5 — Serving, Deployment & Production Systems
  - Day 6 — Capstone Projects & Final Presentations

**Speaker Teaser**
- Eyebrow: `WHO YOU'LL LEARN FROM`
- Headline: `20+ researchers and engineers from IIT Bombay, NVIDIA, TCS Research, UBS, Microsoft & more`
- 6–8 featured speaker cards (photo placeholder, name, affiliation, topic) — link to `/speakers`

**Outcomes Section**
- Eyebrow: `WHAT YOU'LL WALK AWAY WITH`
- Checklist-style grid (from proposal §1.5):
  - Fine-tune open-source LLMs (LLaMA, Mistral, Phi) with LoRA/QLoRA
  - Apply GPTQ/AWQ quantization & pruning for smaller, faster models
  - Benchmark LLM serving with vLLM and TGI
  - Build an end-to-end fine-tuning → deployment pipeline
  - Ship a documented capstone: a fine-tuned, optimized LLM for a real application
  - Engage with the engineering trade-offs of LLM deployment at scale

**Closing CTA Band** (dark ink, full-bleed)
- Headline: `60 seats. June 22–27, 2026. Apply early.`
- Body: `IEEE CIS Student Members attend free. Early-bird pricing ends June 5, 2026.`
- CTA: `Apply Now →`

---

### 5.2 About (`/about`)

Pull from proposal §1.1–1.3, §6, §7:

- **Hero:** `About the Program` — short framing paragraph
- **Section: Why This Topic Matters Now** — interpretability, EU AI Act, India's National AI Strategy context (condensed, 2–3 paragraphs)
- **Section: Problem Statement** — gap in structured hands-on LLM fine-tuning/inference training in emerging economies; why 6 days > typical 3–5 day sprints
- **Section: Target Audience** (4-card grid):
  - Senior undergrads (CS/ECE/Data Science) seeking practical AI skills
  - Masters/PhD students needing structured exposure to fine-tuning & alignment
  - Early-career researchers/postdocs building a deployable-AI portfolio
  - Industry practitioners in regulated domains (healthcare, finance, legal, infra)
- **Section: Prerequisites** — Basic Python, familiarity with PyTorch or TensorFlow, working understanding of neural networks. No prior LLM fine-tuning experience required.
- **Section: Relevance to IEEE CIS** — bullet list from proposal §7 (advanced fine-tuning techniques, efficient inference, robust evaluation), plus mentions of IEEE CIS Resource Center, vTools, Collabratec, ILN
- **Host institution block** — short PCCoE blurb + Department of CSE (AI&ML) blurb + embed/link the two virtual tour videos:
  - Department tour: (Google Drive link from proposal)
  - PCCoE campus tour: (YouTube link from proposal)

---

### 5.3 Program / Schedule (`/program`)

This is the most structurally important page. Build a **day-switcher tab component**:

- Top: 6 tabs (Day 1 – Day 6), each styled with its accent color when active
- Each tab reveals:
  - Date + theme headline (e.g., "Day 1 — June 22, 2026 — Foundations of LLM Fine-Tuning")
  - A two-column timeline: **Morning Session** | **Afternoon Lab**, each as a vertical list of timed session cards
  - Use the exact session content from proposal §5 (Day 1–6 tables) — reproduce all sessions, lectures, labs, fine-tuning clinics, guest talks, poster sessions

**Day 1 (violet):** Opening Ceremony + Plenary (LLM Landscape), Transformer Architecture Deep Dive, SFT, Case Study, Guest Talk (Dr. Yogesh Kulkarni) / Lab 1 (HuggingFace setup), Fine-Tuning Clinic 1, Lab 2 (SFT on instruction dataset), team formation, Poster Session 1

**Day 2 (violet):** LoRA/QLoRA lecture (Prof. Pal), Adapters/Prefix/Prompt Tuning, Dataset Curation, Q&A Panel (PEFT selection) / Lab 3 (LoRA with PEFT), Fine-Tuning Clinic 2, Lab 4 (Alpaca/FLAN formatting), milestone check, peer review

**Day 3 (cyan):** Plenary: Instruction Tuning & Alignment, RLHF lecture, DPO/ORPO lecture, Guest Talk (Dr. Bhushan Borotikar — Clinical NLP), Case Study Challenge (DPO vs RLHF) / Lab 5 (SFTTrainer), Fine-Tuning Clinic 3, Lab 6 (DPO with TRL), Lab 7 (Medical QA assistant), milestone check

**Day 4 (amber):** Plenary: Quantization & Pruning (Prof. Ravindran), Knowledge Distillation & Structured Pruning, Speculative Decoding/Continuous Batching/PagedAttention, AWQ/GGUF lecture, Guest Talk (Dr. Pratap Sanap) / Lab 8 (PTQ with bitsandbytes/GPTQ), Fine-Tuning Clinic 4, Lab 9 (vLLM benchmarking), Lab 10 (AWQ on CPU/edge), Poster Session 2

**Day 5 (emerald):** Plenary: LLM Serving at Scale (vLLM/TGI/TensorRT-LLM), Plenary: Deploying LLMs in Production (Dr. Gupta, Microsoft Research), RAG Integration lecture, Panel: Future of Open-Source LLMs in India, Guest Talks (Dr. Aniruddha Joshi, Dr. Sachin Pawar, Ms. Mita Gaware) / Lab 11 (vLLM deployment + throughput benchmarking), Fine-Tuning Clinic 5, Lab 12 (RAG pipeline), Cost/Latency Profiling Workshop, final milestone review

**Day 6 (rose):** Capstone finalization, internal dry-runs, final presentations (20 min + 10 min Q&A with external evaluators), closing ceremony + certificates + group photo, Gala Dinner

**Below the day tabs**, add a section: **"Fine-Tuning Clinics"** explaining the daily small-group (4–5 person) hands-on debugging format using PEFT, TRL, bitsandbytes, vLLM (from proposal §3.5).

Also add a **"Program Highlights"** summary strip (from proposal): 5 plenary talks · 12+ lectures · 12 hands-on labs · 5 fine-tuning clinics · 2 poster sessions · 1 ethics panel · capstone presentations.

Add a small **"Pre-Program & Post-Program"** section (from §3.2 and §3.7): pre-event video modules + reading list two weeks before; post-event Slack/Discord, alumni seminars, mentorship for 6 months.

---

### 5.4 Speakers (`/speakers`)

Two sections, using the data from the speakers file:

**Section 1 — Plenary Speakers** (larger cards, 2–3 per row)
1. Dr. Debmalya Biswas (UBS, Switzerland) — *AI/ML, Big Data Analytics, Privacy & Security in LLM Systems*
2. Dr. Aniruddha Joshi (IIT Bombay / Atreya Innovations) — *AI in Healthcare: Integrating LLMs with Interpretable Diagnostic Systems*
3. Dr. Pratap Sanap (Neilsoft) — *Deploying LLMs at Scale: Serving Frameworks, Batching & Cost Optimization*
4. Dr. Sachin Pawar (TCS Research) — *Foundation Models & LLM Landscape: Architecture, Pretraining & Fine-Tuning*
5. Prof. Dr. Surya Durbha (IIT Bombay) — *Efficient LLM Inference: Quantization, Pruning & Knowledge Distillation*
6. Rakshit Jain (PTC / IEEE YP Pune Chair) — *From Fine-Tuning to Inference: Designing Scalable LLM Systems with RAG and Graph-Based Retrieval*

**Section 2 — Lecture Instructors** (grid, 3–4 per row, smaller cards)
1. Dr. Kishor Burchundi (VNIT Nagpur) — *Introduction to LLM Architectures: Transformers, Pretraining & Tokenization*
2. Prof. Nikhil R. Pal (ISI Kolkata, IEEE Fellow) — *LoRA and Parameter-Efficient Fine-Tuning: Theory & Implementation*
3. Dr. Leelavati Narlikar (IISER Pune) — *Instruction Tuning, RLHF & Direct Preference Optimization (DPO)*
4. Ms. Mita Gaware (Dassault Systèmes) — *Quantization Techniques: INT8, INT4, GPTQ & AWQ*
5. Dr. Uday Khedkar (IIT Bombay) — *Efficient Training Pipelines & Compiler-Level Optimizations for LLMs*
6. Atul Kamble (AI/ML Industry Expert) — *Bridging Business & AI: Applying Fine-Tuned LLMs to Real-World Systems*
7. Dr. Bhushan Borotikar (Symbiosis CMIA) — *AI in Healthcare: Applying Fine-Tuned LLMs for Clinical Decision Support*
8. Dr. Dipesh Walte (Brainchain MPI, PCCoE Alumni) — *Deploying Scalable LLM Systems in Enterprise Environments*
9. Tejas Gajare (HPE) — *Backend Infrastructure for LLM Deployment & Inference Optimization*
10. Abhishek Gaikwad (NVIDIA, California) — *Data Pipelines & Infrastructure for Large-Scale LLM Training and Inference*
11. Dr. Yogesh Kulkarni (Pune AI Community) — *Building AI Ecosystems: From Research to LLM Productization*
12. Dr. Jayashree Prasad (IBM / IEEE CIS Pune Chair) — *Responsible AI & Ethics in LLM Fine-Tuning and Deployment*
13. Dr. Anuradha Thakare (PCCoE) — *Foundations of Machine Learning for LLM Fine-Tuning*
14. Dr. Sonal Gore (PCCoE) — *Applications of LLMs in Healthcare & Medical Data Systems*

Each speaker card: photo placeholder (initials avatar if no photo), name, affiliation, **topic** (as a colored tag matching the day they speak, if mapped), short bio (truncate with "Read more" → expands inline or opens a dialog using shadcn `Dialog`), LinkedIn/Google Scholar icon links where available (from the Additional Resource Persons table — full URLs are in `/data/speakers.ts` source notes).

Add a small **Diversity & Reach** strip near the bottom (from proposal §4.4): institutional diversity (IIT Bombay, ISI Kolkata, IISER Pune, etc.) and industry partners (NVIDIA, TCS, UBS, Dassault, HPE, Microsoft).

---

### 5.5 Register (`/register`)

**Hero**
- `Registration` headline
- Key dates chip row: `Early Bird ends June 5, 2026` · `Registration closes June 10, 2026 (or at capacity)`
- Note: *"At least 60% of total attendees will be offline/in-person."*

**Fee Table** (reproduce exactly from proposal §8.1) — build as a responsive table on desktop, stacked cards on mobile:

| Participant Type | Online (Early Bird) | Online (Standard) | Offline (Early Bird) | Offline (Standard) |
|---|---|---|---|---|
| IEEE CIS Student Member | Free | Free | Free | Free |
| IEEE Student Member | ₹500 | ₹600 | ₹700 | ₹800 |
| Non-IEEE Student Member | ₹700 | ₹800 | ₹900 | ₹1,000 |
| IEEE CIS Professional Member | ₹500 | ₹600 | ₹700 | ₹800 |
| IEEE Professional Member | ₹550 | ₹650 | ₹750 | ₹850 |
| Non-IEEE Professional Member | ₹900 | ₹1,200 | ₹1,500 | ₹2,000 |
| International (All categories) | $15 | $20 | $50 | $55 |

Highlight the `IEEE CIS Student Member — Free` row with the emerald accent + a "Best Value" badge.

**Registration Benefits section** — pull whatever bullet points exist under proposal §8.2 (lunch/refreshments, materials, certificate, IEEE CIS branding, capstone mentorship, etc. — if the doc is cut off here, write plausible standard benefits consistent with the proposal: digital handbook access, certificate co-issued by IEEE CIS & PCCoE, all lecture recordings & Jupyter notebooks, lunch/refreshments for offline attendees, capstone mentorship, networking events, Slack/Discord community access for 6 months).

**CTA section** — large `Apply via Google Form →` button (placeholder href `#`, to be replaced with actual form link), plus note: *"You'll receive a confirmation email with batch and track details within [X] working days."*

**Eligibility note** — short callout: open to senior undergrads, postgrads, researchers, and industry professionals; basic Python + PyTorch/TensorFlow familiarity expected.

---

### 5.6 Venue (`/venue`)

From proposal §2.1, §2.3:

- **Location card:** PCCoE, Sector 26, Pradhikaran, Nigdi, Pune – 411044, Maharashtra, India (embed Google Maps iframe)
- **Facilities list:** GPU-enabled computing labs, seminar halls, fully equipped auditorium, high-speed internet
- **Host Department:** Department of CSE (AI & ML), PCCoE — active research collaborations with IIT Bombay, IISER Pune, TCS, Persistent Systems, Dassault Systèmes
- **Virtual Tours:** embed both videos (Department tour — Google Drive link; PCCoE campus tour — YouTube embed)
- **Mode info:** In-person (with hybrid streaming for plenaries); recordings available within 48 hours
- **Travel/stay note:** placeholder section for accommodation info for outstation participants (mark as `TODO: confirm with organizers`)

---

### 5.7 FAQ (`/faq`)

Use shadcn `Accordion`. Write FAQs covering:

1. **Who can attend?** — eligibility per target audience (§6)
2. **What are the prerequisites?** — Python, PyTorch/TensorFlow, neural network basics
3. **Is this free for students?** — IEEE CIS Student Members attend free; other tiers per fee table
4. **What's the difference between online and offline registration?** — offline = in-person labs + all sessions; online = live-streamed plenaries + asynchronous lab tracks with forum support
5. **Will I get a certificate?** — yes, co-branded IEEE CIS + PCCoE, based on attendance + capstone completion
6. **What do I need to bring?** — laptop (specify min specs if known, else "a laptop capable of running Python/Jupyter"), confirmation email, ID
7. **What happens after the program ends?** — 6-month Slack/Discord community, monthly alumni seminars, capstone feedback within 3 months
8. **Can I get a refund if I cancel?** — placeholder policy (`TODO: confirm cancellation policy`)
9. **Is accommodation provided?** — placeholder (`TODO: confirm with organizers`)
10. **How is this different from a typical 3-day workshop?** — emphasize depth: 6-day sustained engagement, fine-tuning clinics, capstone with external evaluators (from §1.1, §1.3)

---

### 5.8 Contact (`/contact`)

**Contact form** (Name, Email, Subject/Category dropdown — General / Registration / Sponsorship / Media, Message) → POST to a TS API route that emails the organizing team.

**Organizer Directory** (from proposal §11):

| Role | Name | Email |
|---|---|---|
| Lead Organizer | Prof. Pallavi Nikumbh | pallavi.dhade@pccoepune.org |
| Co-Organizer (Program Chair) | Dr. Anuradha Thakare | anuradha.thakre@pccoepune.org |
| Co-Organizer | Prof. Shailaja Pede | shailaja.pede@pccoepune.org |
| Co-Organizer | Prof. Santwana Gudadhe | santwana.gudadhe@pccoepune.org |
| Collaborator | Mr. Rakshit Jain (IEEE YP Pune Chair) | rakshit.jain@ieee.org |
| Collaborator | Dr. Amar Buchade (IEEE Pune Section Chair) | amar.buchade@gmail.com |

**Student Coordinators:**
- Kshitij Jadhav — kshitij.jadhav24@pccoepune.org
- Ruturaj Pandharkar — ruturaj.pandharkar23@pccoepune.org
- Piyush Daspute — piyush.daspute23@pccoepune.org
- Trupti Sukale — trupti.sukale23@pccoepune.org

(Render emails as `mailto:` links; consider obscuring with a simple JS reveal-on-click to reduce scraping.)

---

## 6. SHARED COMPONENTS

- **Navbar** — sticky, transparent over hero → solid on scroll; mobile hamburger → full-screen overlay menu
- **Footer** — 3-column: (1) Wordmark + one-line tagline + IEEE CIS / PCCoE / Dept logos, (2) Quick links (Program, Speakers, Register, Venue, FAQ), (3) Contact + social (LinkedIn/Instagram of IEEE CIS PCCOE SBC)
- **DayChip** — reusable component for the 6-day accent system (used in Home, Program, Speaker cards)
- **SpeakerCard** — photo/avatar, name, affiliation, topic tag, expandable bio
- **StatBand** — dark section with 3–4 large numeric stats
- **SectionHeader** — eyebrow + headline + optional subhead, used consistently across all pages
- **CTASection** — reusable dark/ink closing band with headline + button, used on Home, Register, and as a footer-adjacent block on other pages

---

## 7. DATA FILES TO CREATE (TypeScript)

```
/data/speakers.ts       → typed array: { name, affiliation, role: 'plenary' | 'instructor', topic, bio, links: { linkedin?, scholar? }, dayAccent? }
/data/schedule.ts        → typed array of 6 Day objects: { day, date, theme, accent, morning: Session[], afternoon: Session[] }
/data/registration.ts    → typed array of fee rows: { category, onlineEarly, onlineStandard, offlineEarly, offlineStandard, highlight?: boolean }
/data/faq.ts             → typed array: { question, answer }
/data/organizers.ts      → typed array: { role, name, email }
```

Define a shared `types.ts` with interfaces for `Speaker`, `Session`, `DaySchedule`, `FeeRow`, `FAQItem`, `Organizer`.

---

## 8. TONE & COPYWRITING GUIDELINES

- Write like a serious technical conference, not a college fest — confident, precise, no exclamation marks in headings
- Lead with substance (topics, speakers, schedule) over generic enthusiasm ("Join us for an amazing experience!")
- Use the day-accent system as the primary visual differentiator instead of decorative illustrations
- Keep all proposal-sourced facts (dates, fees, names, affiliations) **accurate to the source documents** — do not invent speaker details; only placeholder/TODO items where the source docs are genuinely incomplete (accommodation, cancellation policy, laptop specs)

---

## 9. ITEMS MARKED `TODO` (confirm before launch)
- [ ] Accommodation/stay details for outstation participants
- [ ] Cancellation & refund policy
- [ ] Minimum laptop specs for lab sessions
- [ ] Final Google Form link for registration
- [ ] Speaker headshots (use initials-avatar fallback until provided)
- [ ] IEEE CIS / IEEE Pune Section / PCCoE logo assets (SVG)
- [ ] Confirm exact event year branding — proposal says "2026 IEEE CIS Summer School," dates June 22–27, 2026
