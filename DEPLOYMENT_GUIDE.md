# 🚀 Production Deployment Guide
**Mohammed Shawez Khan — Portfolio (S.A.I. Core & Creative Lab)**

This folder (`deploy_portfolio/`) contains everything prepared and pre-configured to deploy your portfolio to the web in just a few minutes.

---

## 📁 What is in this Folder?

| Item | Description |
| :--- | :--- |
| **`static_export/`** | **Ready-to-deploy static website** (`index.html`, CSS, JS, 3D Iron Man models, fonts, and ATS resume). Perfect for Netlify Drop, GitHub Pages, or any web host without needing Node.js! |
| **`resumes/`** | Your ATS-friendly PDFs (`Mohammed_Shawez_Khan_ATS_Resume.pdf`, Data Science Resume, and Resume JSON). |
| **`app/`, `components/`, `lib/`, `public/`** | Full Next.js 16 source code with Three.js / React Three Fiber. |
| **`package.json`** | Dependencies and scripts configured for production build & export. |
| **`vercel.json`** | Pre-tuned caching headers for fast 3D model streaming on Vercel. |
| **`netlify.toml`** | Pre-tuned configuration for Netlify. |
| **`.github/workflows/deploy.yml`** | Automated GitHub Actions workflow for GitHub Pages. |
| **`deploy.bat`** | Windows interactive 1-click launcher. |

---

## ⚡ Method 1: The Fastest Way (Netlify Drop — 30 Seconds, No Code)

You can have your site live on a public URL immediately with zero commands:

1. Open **[https://app.netlify.com/drop](https://app.netlify.com/drop)** in your web browser.
2. In Windows File Explorer, open this `deploy_portfolio` folder.
3. **Drag the `static_export` folder** and drop it onto the Netlify webpage.
4. Netlify will instantly upload and give you a live HTTPS link (e.g. `https://shawez-khan-portfolio.netlify.app`).
5. *(Optional)* Create a free Netlify account to change your site name or add a custom domain.

> **Tip:** You can also just double-click **`deploy.bat`** and choose **Option [1]** to open Netlify Drop automatically!

---

## 🌟 Method 2: Vercel (Recommended for Next.js)

Vercel is built by the creators of Next.js and provides the best performance and global CDN.

### Option A: Using the Command Line (Easiest)
1. Open PowerShell or Command Prompt inside `deploy_portfolio`.
2. Run:
   ```bash
   npx vercel
   ```
3. Follow the 3 prompts:
   - *Set up and deploy?* Press **Y**
   - *Which scope?* Select your account
   - *Link to existing project?* **N**
   - *Project name?* `shawez-portfolio`
   - *In which directory is your code located?* `./` (press Enter)
   - *Want to modify settings?* **N** (press Enter)
4. Your site will deploy and output your live production URL!

### Option B: Connecting via GitHub
1. Create a new repository on [GitHub](https://github.com/new) named `portfolio` (or `portfolio-site`).
2. Inside `deploy_portfolio`, run:
   ```bash
   git init
   git add .
   git commit -m "feat: initial portfolio deployment"
   git branch -M main
   git remote add origin https://github.com/shawez-khan/portfolio.git
   git push -u origin main
   ```
3. Go to [https://vercel.com/new](https://vercel.com/new).
4. Click **Import** next to your `portfolio` repository.
5. Click **Deploy**! (Vercel automatically detects Next.js settings). Every time you push changes to GitHub, Vercel will automatically redeploy!

---

## 🐙 Method 3: GitHub Pages (Free forever on `github.io`)

1. Create a repository on GitHub named:
   `shawez-khan.github.io` (or any repo name).
2. Push this folder to that repository:
   ```bash
   git init
   git add .
   git commit -m "Deploy portfolio to GitHub Pages"
   git branch -M main
   git remote add origin https://github.com/shawez-khan/shawez-khan.github.io.git
   git push -u origin main
   ```
3. On GitHub, go to **Settings** > **Pages**.
4. Under **Build and deployment** > **Source**, select **GitHub Actions**.
5. The included workflow (`.github/workflows/deploy.yml`) will automatically build and publish your site!

---

## 🌐 Custom Domain Setup (e.g. `shawezkhan.com` or `shawez.dev`)

Once deployed on Vercel or Netlify:
1. Go to **Project Settings** > **Domains**.
2. Type your domain name (e.g. `shawezkhan.com`).
3. Add the DNS records shown by Vercel/Netlify to your domain registrar (Namecheap, GoDaddy, Cloudflare, Hostinger):
   - **Type A**: `@` -> `76.76.21.21` (for Vercel)
   - **Type CNAME**: `www` -> `cname.vercel-dns.com` (for Vercel)
4. Free SSL (HTTPS) will automatically activate within a few minutes.

---

## 💻 Local Preview

To test the exact production static build locally before sharing:
1. Double-click `deploy.bat` and select **Option [4]**
   OR run in terminal:
   ```bash
   npx serve static_export -l 3000
   ```
2. Open `http://localhost:3000` in your browser.

---

## 📄 Contact Form & Resume Download

- **Resume Download:** The ATS resume is included directly in the deployment package at `/resume.pdf`. Visitors clicking the **ATS RESUME** button in either mode will download your resume directly.
- **Contact Form:** The contact form transmits directly to your Formspree endpoint (`skhan200609@gmail.com`). Messages arrive in your email inbox immediately.
