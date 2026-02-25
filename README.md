# Comfort Nyatsine — Portfolio Website

A high-end, editorial-style portfolio built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**.

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Install & Run Locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## 🌐 Deploy to Vercel (Recommended — Free)

### Option 1: GitHub + Vercel (Best)

1. Push this project to a GitHub repo
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub
3. Click **New Project** → import your repo
4. Leave all settings as default → click **Deploy**
5. Your site is live at `your-repo-name.vercel.app`

To add a custom domain (e.g. `comfortnyatsine.dev`):
- Go to Vercel Dashboard → your project → Settings → Domains
- Add your domain and follow DNS instructions

### Option 2: CLI Deploy

```bash
npm install -g vercel
vercel
```

---

## 🏗️ Project Structure

```
comfort-portfolio/
├── app/
│   ├── components/
│   │   ├── Cursor.tsx        # Custom cursor
│   │   ├── Nav.tsx           # Fixed navigation
│   │   └── Footer.tsx        # Footer
│   ├── sections/
│   │   ├── Hero.tsx          # Full-screen hero + typewriter
│   │   ├── About.tsx         # Bio + info card
│   │   ├── TechStack.tsx     # Skills grid + marquee
│   │   ├── Experience.tsx    # Vertical timeline
│   │   ├── Projects.tsx      # Project cards
│   │   └── Contact.tsx       # Contact CTA
│   ├── globals.css           # Global styles + animations
│   ├── layout.tsx            # Root layout + metadata
│   └── page.tsx              # Main page
├── tailwind.config.ts
├── next.config.js
└── tsconfig.json
```

---

## 🎨 Design System

| Token | Value |
|---|---|
| Background | `#080808` |
| Surface | `#111111` |
| Accent | `#FF6B35` (vibrant orange) |
| Text | `#F2EDE4` (warm off-white) |
| Muted | `#666666` |
| Display Font | Syne (Google Fonts) |
| Body Font | DM Sans (Google Fonts) |
| Mono Font | JetBrains Mono (Google Fonts) |

---

## ✏️ Customising Content

All content is hardcoded in the section files for simplicity. To update:

- **Personal info / bio** → `app/sections/About.tsx`
- **Work experience** → `app/sections/Experience.tsx`
- **Projects** → `app/sections/Projects.tsx`
- **Tech stack** → `app/sections/TechStack.tsx`
- **Stats** → `app/sections/Hero.tsx` (the stats grid at the bottom)

---

## 📦 Next Steps / Optional Enhancements

- [ ] Add a downloadable PDF CV link (upload to `/public/Comfort_Nyatsine_CV.pdf`)
- [ ] Add project screenshots/mockups to the project cards
- [ ] Connect the contact form to Resend or Formspree
- [ ] Set up Google Analytics or Plausible
- [ ] Add a custom domain (R200/year on Namecheap: `comfortnyatsine.dev`)
