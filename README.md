# HeartLink Landing Page

Production-ready marketing website for **HeartLink** — a dating and social app. Built to convert visitors into app downloads.

## Tech Stack

- **Next.js 14** (App Router)
- **Tailwind CSS**
- **Framer Motion** (animations)
- **TypeScript**

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build & Deploy on Vercel

```bash
npm run build
```

Deploy by connecting this repo to [Vercel](https://vercel.com). Vercel will auto-detect Next.js and use the correct build command and output directory.

Or use the Vercel CLI:

```bash
npm i -g vercel
vercel
```

## Project Structure

```
heart_link_web/
├── app/
│   ├── layout.tsx      # Root layout, fonts, SEO metadata
│   ├── page.tsx        # Home page (all sections)
│   ├── globals.css     # Global styles
│   ├── privacy/        # Privacy Policy page
│   └── terms/          # Terms of Service page
├── components/
│   ├── Header.tsx      # Nav + mobile menu
│   ├── Hero.tsx        # Headline, CTAs, phone mockup
│   ├── SocialProof.tsx # Stats + testimonials
│   ├── Features.tsx    # Feature cards
│   ├── HowItWorks.tsx  # 3-step flow
│   ├── Screenshots.tsx # App UI in phone frames
│   ├── SafetyTrust.tsx # Safety & trust copy
│   ├── CTA.tsx         # Final conversion section
│   └── Footer.tsx      # Links + copyright
├── tailwind.config.ts
├── next.config.js
└── package.json
```

## Pages

- **/** — Landing page (Hero, Social Proof, Features, How It Works, Screenshots, Safety, CTA, Footer)
- **/privacy** — Privacy Policy
- **/terms** — Terms of Service

## Design

- Mobile-first, premium feel (Apple + Tinder inspired)
- Soft pink/red gradient theme
- Smooth scroll and Framer Motion animations
- Clean typography (Outfit + DM Sans)
