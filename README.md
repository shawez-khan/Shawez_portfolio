# 🤖 Mohammed Shawez Khan — Dual-Mode Portfolio

An interactive, high-performance portfolio featuring dual persona modes:
1. **S.A.I. Core Mode (AI / Data Science Persona):** Sci-fi HUD interface inspired by Iron Man / JARVIS with interactive 3D WebGL helmet rendering, real-time audio boot sequence, terminal telemetry, and technical project showcases.
2. **Creative Lab Mode (UI/UX & Frontend Persona):** Minimalist editorial Swiss/modern design system showcasing visual engineering, interactive project previews, and client services.

---

## 🛠️ Tech Stack

- **Framework:** Next.js 16 (App Router + Turbopack)
- **3D Graphics:** Three.js, React Three Fiber (`@react-three/fiber`), Drei (`@react-three/drei`), Postprocessing
- **Styling:** Tailwind CSS v4, Custom CSS tokens & scanlines
- **Animations:** Framer Motion, GSAP
- **Icons:** Lucide React
- **Forms:** Formspree API integration

---

## ⚡ Quick Deployment

See **[`DEPLOYMENT_GUIDE.md`](./DEPLOYMENT_GUIDE.md)** for full instructions.

### 1. 30-Second Drag-and-Drop (Netlify Drop)
Go to **[app.netlify.com/drop](https://app.netlify.com/drop)** and drag the included **`static_export`** folder onto the page.

### 2. Vercel (1-Click or CLI)
```bash
npx vercel
```

### 3. GitHub Pages
Push to GitHub and enable Pages via GitHub Actions (workflow included in `.github/workflows/deploy.yml`).

---

## 💻 Local Development

```bash
npm install
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

To generate a static export build:
```bash
npm run export
```
The output will be placed in the `out/` directory.

---

## 📂 Project Structure

```
deploy_portfolio/
├── app/                  # Next.js App Router (layout, page, globals.css)
├── components/           # UI Components (3D Scene, HUD, Modes, Sections)
│   ├── 3d/               # Three.js canvas & Iron Man model loader
│   ├── design/           # Creative Lab UI components
│   ├── mode/             # Arc Reactor mode toggle & cinematic transition
│   ├── navigation/       # Sci-fi Navigation bar
│   ├── sections/         # S.A.I. Core sections (Hero, About, Skills, Projects, etc.)
│   └── ui/               # Reusable buttons, HUD cards, decrypter text
├── lib/                  # Portfolio data, design data, mode context
├── public/               # Static assets, 3D GLB models, fonts, ATS resumes
├── resumes/              # ATS & Data Science resume documents
├── static_export/        # Ready-to-upload static HTML/CSS/JS export
├── DEPLOYMENT_GUIDE.md   # Complete step-by-step deployment guide
└── deploy.bat            # Windows 1-click launcher & preview tool
```
