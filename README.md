# PCCOE Summer School

A modern, highly-responsive web application for the **PCCOE Summer School on Fine-Tuning LLMs & Inference Optimization 2026**, hosted by Pimpri Chinchwad College of Engineering (PCCoE) in Pune, India.

This platform provides event details, schedule timetables, speaker profiles, registration links, venue information, and a showcase of the development team.

---

## 🚀 Features

- **6-Day Interactive Schedule**: A detailed breakdown of workshops, plenary presentations, lab sessions, and clinics. Fully responsive and optimized for mobile devices.
- **Expert Speaker Profiles**: Complete directory of plenary presenters and tutorial instructors with biography, topic details, and direct links to their LinkedIn and Google Scholar profiles.
- **Development Team Section**: Showcases the student developers from PCCoE who designed and built the application.
- **Modern Responsive Design**: Optimized for desktop, tablet, and mobile browsers using custom HSL colors, smooth transitions, and premium aesthetics.
- **SEO & Metadata**: Optimized title tags, page descriptions, icons, and layout structure.

---

## 🛠️ Technology Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (using the App Router with Turbopack)
- **UI & Logic**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) & Vanilla CSS (`app/globals.css`)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Components & Utilities**: Base UI, class-variance-authority, clsx, and tailwind-merge

---

## 📂 Project Structure

```plaintext
/
├── app/                  # Next.js App Router pages and layouts
│   ├── about/            # About Page
│   ├── contact/          # Contact Page & Development Team
│   ├── faq/              # FAQ Page
│   ├── program/          # Program Details Page
│   ├── register/         # Registration Page
│   ├── speakers/         # Speakers list Page
│   ├── venue/            # Venue & Location Page
│   ├── globals.css       # Core Tailwind CSS & design tokens
│   ├── layout.tsx        # Root layout with navbar and footer
│   └── page.tsx          # Home page entrypoint
├── components/           # Reusable UI and Section components
│   ├── cards/            # Card components (e.g. SpeakerCard)
│   ├── layout/           # Shared layout components (Navbar, Footer)
│   ├── sections/         # Main page sections (HeroSection, ScheduleSwitcher)
│   └── ui/               # Lower level UI primitives
├── data/                 # JSON and TypeScript mock datasets
│   ├── schedule.ts       # 6-day program schedule data
│   └── speakers.ts       # Plenary presenters & instructors list
├── public/               # Static assets (images, logos, icons)
├── package.json          # Node dependencies and scripts
└── tsconfig.json         # TypeScript configuration
```

---

## 💻 Getting Started

### Prerequisites

Make sure you have Node.js (version 22.12.0 or later recommended) installed on your system.

### Installation

1. Install the dependencies:
   ```bash
   npm install
   ```

2. Start the local development server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

3. Build the application for production:
   ```bash
   npm run build
   ```

4. Start the production build locally:
   ```bash
   npm start
   ```

---

## 📝 License

Developed for the Pimpri Chinchwad College of Engineering (PCCoE) Summer School 2026. All rights reserved.
