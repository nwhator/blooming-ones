# The Blooming Ones Initiative (formerly The Testybam Initiative)

> **"Helping Every Girl Bloom, Never Wither."**  
> An institutional, high-performance web platform built with Astro, TypeScript, and Tailwind CSS 4.

---

## 🌸 About The Organization

**The Blooming Ones Initiative** (founded in 2023 as *The Testybam Initiative*) is a grassroots nonprofit organization dedicated to edifying, nourishing, and empowering adolescent girls across Nigeria and Africa through:
- **Menstrual Health & Dignity:** Eradicating period poverty through free biodegradable sanitary kits and nurse-led workshops in public secondary schools.
- **Education & Mentorship:** 1-on-1 sisterhood mentorship, STEM workshops, and examination micro-grants.
- **Girl-Child Empowerment:** Rights awareness, public voice training, and bodily sovereignty under Nigeria's Child Rights Act.
- **Girls' Hangouts:** Bi-weekly judgment-free safe sisterhood circles for mental wellness and life skills.
- **Community Outreach & Orphanage Care:** Quarterly hygiene and nutritional provisions for 12 partner children's homes.

---

## 🛠 Technology Stack

- **Framework:** [Astro](https://astro.build) (v7.3)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com) (Vite plugin integration)
- **Icons:** Inline SVG via `@lucide/astro` (zero icon font flashes or CDN dependencies)
- **Type Safety:** TypeScript
- **Content:** Astro Content Collections (`src/content.config.ts`) with Markdown
- **SEO & Discovery:** `@astrojs/sitemap`, OpenGraph metadata, Schema.org JSON-LD (`NGO`, `Article`, `BreadcrumbList`), semantic HTML5.

---

## 📁 Project Structure

```
blooming/
├── public/
│   ├── images/              # High-resolution documentary photos & logo
│   └── robots.txt           # Search crawler instructions
├── src/
│   ├── assets/images/       # Asset source images
│   ├── components/          # Reusable UI components
│   │   ├── Breadcrumbs.astro
│   │   ├── Button.astro
│   │   ├── CTA.astro
│   │   ├── DonationSelector.astro
│   │   ├── Footer.astro
│   │   ├── Header.astro
│   │   ├── ImpactStat.astro
│   │   ├── PartnerLogos.astro
│   │   ├── ProgramCard.astro
│   │   ├── SectionHeading.astro
│   │   └── StoryCard.astro
│   ├── content/
│   │   └── stories/         # Markdown dispatches for content collection
│   ├── layouts/             # Shared layouts
│   │   ├── BaseLayout.astro
│   │   ├── PageLayout.astro
│   │   └── StoryLayout.astro
│   ├── pages/               # 30 fully rendered static pages
│   │   ├── index.astro
│   │   ├── about/           # Overview, Story, Mission, Team, Partners
│   │   ├── our-work/        # Overview & 5 individual program pages
│   │   ├── impact/          # Impact overview & Audited Reports
│   │   ├── stories/         # Dynamic stories listing & [slug]
│   │   ├── gallery/         # Responsive media gallery with lightbox
│   │   ├── get-involved/    # Hub, Volunteer, Partner, Sponsor forms
│   │   ├── donate/          # Dedicated multi-tier donation page
│   │   ├── contact/         # Contact channels & inquiry form
│   │   ├── privacy/         # Privacy policy
│   │   ├── terms/           # Terms of service
│   │   └── safeguarding/    # Child safeguarding policy
│   ├── styles/
│   │   └── global.css       # Tailwind 4 theme & typography tokens
│   └── content.config.ts    # Content schema definition
└── ui_designs/              # Stitch design system & source assets
```

---

## 🚀 Development & Build

```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Build static production bundle
npm run build

# Preview production build locally
npm run preview
```

---

## 💳 Payment Gateway & Form Integration

1. **Donation Gateway (Paystack / Flutterwave):**
   - The interactive donation component in `src/components/DonationSelector.astro` and `src/pages/donate/index.astro` is architected with clear JavaScript trigger hooks ready to initialize Paystack Pop (`PaystackPop.setup()`) or Flutterwave inline checkout.
2. **Form Endpoints:**
   - Forms on `/get-involved/volunteer`, `/get-involved/partner`, `/get-involved/sponsor`, and `/contact` have clean submission hooks ready to connect to services like Formspree, Resend, or a custom backend API.
