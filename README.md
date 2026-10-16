# PARVA 2027 – Bengaluru North Educational Expo
### 2nd Edition | Official Event Website

> **"Where Bengaluru North Chooses Its Schools"**  
> Organised by **Bhadri's Academy**  
> **Dates:** 9 and 10 January 2027 (Saturday & Sunday)  
> **Timings:** 11:00 AM – 8:00 PM both days  
> **Venue:** MEI Layout Ground, Bagalagunte, Bengaluru North, Karnataka, India  

---

## 🏛️ Project Overview

This is the production-ready official event website for **PARVA 2027**, the 2nd Edition of the premier Bengaluru North Educational Expo. Conceived and managed by educators at **Bhadri's Academy**, the expo brings together leading schools, PU colleges, admission-seeking parents, and students on a unified platform for the 2027–28 academic admission cycle.

### Key Targets & Expected Projections
- **60+** Schools and PU Colleges (Target Exhibitors)
- **10,000+** Admission-seeking Families Expected
- **7** Expert Panel Discussions across 2 days
- **2 Days** of dynamic educational exhibitions and student showcases
- **Eligible Exhibitors:** Strictly restricted to recognized **Schools and PU Colleges** (coaching centres, tuition classes, robotics companies, and ed-tech companies are excluded to maintain institutional purity).

---

## 🎨 Brand Identity & Design System

The visual style embodies the credibility, exclusivity, and prestige of a global educational summit:

| Element | Specification | Hex / Value |
| :--- | :--- | :--- |
| **Primary Navy** | Midnight Navy | `#101A35` |
| **Secondary Navy** | Royal Navy | `#182547` |
| **Deep Background**| Dark Deep Navy | `#0A1022` |
| **Accent Gold** | Champagne Gold | `#D6AD55` |
| **Light Grey** | Soft Contrast Grey | `#F3F4F7` |
| **Heading Font** | Playfair Display | Elegant serif with editorial gravitas |
| **Body Font** | Inter | Clean, modern, highly legible sans-serif |

---

## 🧩 Architectural Structure

The website is engineered with modular, reusable React + TypeScript components styled with Tailwind CSS and Lucide icons:

```
src/
├── components/
│   ├── Navbar.tsx             # Sticky navigation with mobile drawer & gold booking CTA
│   ├── HeroSection.tsx        # Cinematic full-screen hero with event details & early-bird badge
│   ├── EventCountdown.tsx     # Dynamic countdown to 9 Jan 2027 11:00 AM IST with live/completed states
│   ├── AboutSection.tsx       # Expo mission and 4 target statistics cards with count indicators
│   ├── WhyParvaSection.tsx    # 6 feature cards: audience, engagement, visibility, leads, stage, networking
│   ├── EventProgramme.tsx     # Day 1 DRISTI (Vision & Guidance) and Day 2 SRISTI (Creation & Talent)
│   ├── ExpertPanels.tsx       # 7 numbered educational panel topics + Platinum partner stage advantage
│   ├── MarketingSection.tsx   # 6 promotional pillars (Media, Pre-reg, Pop-ups, Print, Draws, Events)
│   ├── VisitorJourney.tsx     # 5-step "Expo Passport" visitor flow with incentive mechanism
│   ├── ExhibitorBenefits.tsx  # 6 core exhibitor value propositions
│   ├── PackagesSection.tsx    # Basic ("Be Seen"), Premium ("Stand Out"), Platinum ("Lead the Stage")
│   ├── EligibilitySection.tsx # Exclusive to Schools & PU Colleges + Bhadri's Academy legacy
│   ├── BookingTimeline.tsx    # Key milestone dates from 15 Nov 2026 early-bird to 9-10 Jan 2027
│   ├── LocationSection.tsx    # Verified MEI Layout Ground map embed & Google Maps directions
│   ├── BookingForm.tsx        # High-conversion enquiry form with validation & Supabase/demo handling
│   ├── FAQSection.tsx         # Interactive accordion with all 10 verified questions & answers
│   ├── ContactSection.tsx     # Clickable direct phones, email link, and action buttons
│   ├── Footer.tsx             # Navy footer with navigation, dates, contacts, and copyright
│   └── LegalModal.tsx         # Modals for Privacy Policy and Terms of Participation
├── lib/
│   └── supabase.ts            # Supabase PostgreSQL client, validation & demo fallback handler
├── types/
│   └── index.ts               # Complete TypeScript definitions
├── App.tsx                    # Root layout coordinating state and smooth scroll
├── index.css                  # Tailwind directives, custom scrollbars, and gold gradients
└── main.tsx                   # Application DOM entry point
```

---

## 🗄️ Database & Supabase Integration

The stall enquiry form is wired directly to Supabase PostgreSQL.

### SQL Setup for `exhibitor_enquiries` Table
To connect your live database, open your Supabase Project SQL Editor and execute:

```sql
CREATE TABLE IF NOT EXISTS exhibitor_enquiries (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  institution_name TEXT NOT NULL,
  institution_type TEXT NOT NULL CHECK (institution_type IN ('School', 'PU College')),
  contact_person TEXT NOT NULL,
  designation TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  whatsapp TEXT NOT NULL,
  location TEXT NOT NULL,
  preferred_package TEXT NOT NULL CHECK (preferred_package IN ('Basic', 'Premium', 'Platinum', 'Need Guidance')),
  preferred_stall_type TEXT NOT NULL,
  additional_requirements TEXT,
  consent BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable Row Level Security (RLS)
ALTER TABLE exhibitor_enquiries ENABLE ROW LEVEL SECURITY;

-- Allow public anonymous visitors to submit enquiries
CREATE POLICY "Allow public insert of enquiries"
  ON exhibitor_enquiries
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Restrict read access strictly to authenticated organizers
CREATE POLICY "Allow authenticated read of enquiries"
  ON exhibitor_enquiries
  FOR SELECT
  TO authenticated
  USING (true);
```

### Environment Configuration
Create a `.env` file in the project root:
```env
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-public-key
```

> **Note on Demo Mode:** If Supabase credentials are not configured, the website automatically operates in **Demo Preview Mode**. Enquiries are validated, stored in local storage (`parva_demo_enquiries`), and accompanied by a clear on-screen notice explaining demo mode so testing works without failure.

---

## 🚀 Running the Project

### Development
```bash
npm run dev
```

### Production Build
```bash
npm run build
```

### Production Preview
```bash
npm run preview
```

---

## 📞 Verified Official Contacts

- **Primary Desk:** [+91 96326 45625](tel:9632645625)
- **Coordinator Desk:** [+91 70196 56192](tel:7019656192)
- **Exhibitor Support:** [+91 63669 20921](tel:6366920921)
- **Email:** [bhadrisacademy.expo2026@gmail.com](mailto:bhadrisacademy.expo2026@gmail.com)
- **Early-Bird Deadline:** 15 November 2026
- **Stall Allotment:** 20 December 2026
- **Event:** 9 & 10 January 2027 (11:00 AM – 8:00 PM IST) at MEI Layout Ground, Bagalagunte, Bengaluru North
