import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shawez Khan — Visual Designer & AI Developer | Portfolio",
  description:
    "Portfolio of Mohammed Shawez Khan — Visual Designer, UI/UX Designer, and AI & Data Science Developer based in Indore, India. Specializing in web design, frontend development (Next.js, React, Tailwind), machine learning, and computer vision.",
  keywords: [
    "Shawez Khan",
    "Visual Designer",
    "UI/UX Designer",
    "Frontend Developer",
    "Web Designer",
    "Next.js Developer",
    "React Developer",
    "AI Developer",
    "Data Science",
    "Machine Learning",
    "Figma",
    "Tailwind CSS",
    "Portfolio",
    "Indore",
  ],
  authors: [{ name: "Mohammed Shawez Khan", url: "https://www.linkedin.com/in/shawez-khan-839732362" }],
  openGraph: {
    title: "Shawez Khan — Visual Designer & AI Developer",
    description:
      "Visual Designer & Frontend Developer crafting clear, intentional digital experiences. Also an AI & Data Science Developer building intelligent systems.",
    type: "website",
    locale: "en_IN",
    siteName: "Shawez Khan Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shawez Khan — Visual Designer & AI Developer",
    description:
      "Visual Designer & Frontend Developer | AI & Data Science Developer | Indore, India",
  },
  robots: {
    index: true,
    follow: true,
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@300;400;500;700&family=Orbitron:wght@400;500;600;700;800;900&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Syne:wght@600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
