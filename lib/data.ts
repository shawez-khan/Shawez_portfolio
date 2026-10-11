// ─────────────────────────────────────────────────────────────────────────────
// lib/data.ts — All portfolio content sourced from resume
// ─────────────────────────────────────────────────────────────────────────────

export const PERSONAL = {
  name: "Mohammed Shawez Khan",
  shortName: "Shawez Khan",
  title: "AI & Data Science Developer",
  tagline: "Building intelligent systems from data, code and ideas.",
  location: "Indore, India",
  email: "skhan200609@gmail.com",
  phone: "+91 9285510004",
  linkedin: "https://www.linkedin.com/in/shawez-khan-839732362",
  github: "https://github.com/shawez-khan",
  summary:
    "Third-year Computer Science and Biotechnology student with hands-on experience in AI training, data annotation, machine learning, data analysis, and prompt engineering. Experienced in LLM response evaluation, search relevance assessment, image annotation, audio evaluation, and AI model improvement.",
  languages: ["English (Fluent)", "Hindi (Native)", "Urdu (Fluent)"],
  interests: [
    "Artificial Intelligence",
    "Machine Learning",
    "Data Science",
    "Data Analytics",
    "Generative AI",
    "Agentic AI",
    "Software Development",
    "Computer Vision",
    "Prompt Engineering",
  ],
};

export interface SkillCategory {
  id: string;
  label: string;
  icon: string;
  skills: string[];
}

export const SKILLS: SkillCategory[] = [
  {
    id: "programming",
    label: "PROGRAMMING",
    icon: "code",
    skills: ["Python", "JavaScript", "Java", "C++", "C", "PHP", "SQL"],
  },
  {
    id: "data",
    label: "DATA SCIENCE",
    icon: "database",
    skills: [
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "Scikit-learn",
      "OpenCV",
      "PyTorch",
      "Keras",
      "Excel",
      "Power BI",
      "Tableau",
    ],
  },
  {
    id: "ai",
    label: "AI / ML",
    icon: "brain",
    skills: [
      "Machine Learning",
      "Deep Learning",
      "Computer Vision",
      "LLM Evaluation",
      "Prompt Engineering",
      "Generative AI",
      "Data Annotation",
      "Feature Engineering",
    ],
  },
  {
    id: "databases",
    label: "DATABASES",
    icon: "server",
    skills: ["MySQL", "PostgreSQL", "MongoDB"],
  },
  {
    id: "tools",
    label: "TOOLS & PLATFORMS",
    icon: "wrench",
    skills: [
      "Git",
      "GitHub",
      "Jupyter Notebook",
      "Google Colab",
      "VS Code",
    ],
  },
];

export interface Project {
  id: string;
  number: string;
  name: string;
  description: string;
  tech: string[];
  status: "COMPLETE" | "DEVELOPMENT" | "RESEARCH";
  link?: string;
}

export const PROJECTS: Project[] = [
  {
    id: "proj-001",
    number: "PROJECT_001",
    name: "AI-GENERATED FACE DETECTION",
    description:
      "Built image classification models to distinguish AI-generated and real human faces. Applied computer vision preprocessing pipelines, model evaluation, and performance benchmarking techniques.",
    tech: ["Python", "OpenCV", "CNN", "PyTorch", "Computer Vision"],
    status: "COMPLETE",
    link: "https://github.com/shawez-khan",
  },
  {
    id: "proj-002",
    number: "PROJECT_002",
    name: "TITANIC SURVIVAL PREDICTION",
    description:
      "Performed comprehensive data cleaning, exploratory analysis, and feature engineering on the Titanic dataset. Built and evaluated multiple ML models, achieving strong predictive accuracy.",
    tech: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib"],
    status: "COMPLETE",
    link: "https://github.com/shawez-khan",
  },
  {
    id: "proj-003",
    number: "PROJECT_003",
    name: "SMART EMOTION LEARNING SYSTEM",
    description:
      "Real-time facial emotion recognition system designed for adaptive learning environments. Integrates CNNs for expression classification with dynamic content adjustment algorithms.",
    tech: ["OpenCV", "CNN", "TensorFlow", "Keras", "Python"],
    status: "DEVELOPMENT",
    link: "https://github.com/shawez-khan",
  },
  {
    id: "proj-004",
    number: "PROJECT_004",
    name: "LLM EVALUATION FRAMEWORK",
    description:
      "Structured framework for evaluating large language model responses for quality, relevance, accuracy, and instruction-following capability across diverse task categories.",
    tech: ["Python", "NLP", "Prompt Engineering", "Data Analysis"],
    status: "RESEARCH",
    link: "https://github.com/shawez-khan",
  },
];

export interface Experience {
  id: string;
  year: string;
  role: string;
  organization: string;
  description: string[];
  tech: string[];
}

export const EXPERIENCE: Experience[] = [
  {
    id: "exp-001",
    year: "2024 — PRESENT",
    role: "AI Training & Data Annotation Contributor",
    organization: "OneForma & Outlier",
    description: [
      "Completed 150+ hours of AI training, audio recording, evaluation, and annotation projects.",
      "Evaluated AI-generated responses for quality, relevance, accuracy, and instruction following.",
      "Performed image annotation including bounding boxes, segmentation, and classification.",
      "Conducted search relevance assessments and content quality reviews.",
      "Completed audio transcription and audio evaluation assignments.",
    ],
    tech: [
      "LLM Evaluation",
      "Image Annotation",
      "Prompt Engineering",
      "Quality Assurance",
    ],
  },
  {
    id: "exp-002",
    year: "2024",
    role: "Data Science Intern",
    organization: "Averixis Solutions Pvt. Ltd.",
    description: [
      "Performed data preprocessing, cleaning, and exploratory data analysis on real-world datasets.",
      "Built and evaluated machine learning models under a Google Cloud collaboration.",
      "Worked with cloud-based tools and industry-standard data science workflows.",
    ],
    tech: ["Python", "Machine Learning", "Google Cloud", "Data Analysis", "EDA"],
  },
];

export const EDUCATION = {
  degree: "Bachelor of Science (Biotechnology & Computer Science)",
  institution: "Acropolis Institute of Management Studies and Research",
  period: "2024 — 2027",
  location: "Indore, India",
};

export const CERTIFICATIONS = [
  "Advanced Data Science and AI/ML Course",
  "Microsoft Excel Certification",
  "Algorithm and Logic Development Workshop",
];

export const BOOT_SEQUENCE = [
  { text: "S.A.I. CORE", delay: 0 },
  { text: "SYSTEM INITIALIZING...", delay: 0.6 },
  { text: "NEURAL INTERFACE ONLINE", delay: 1.2 },
  { text: "DATA SYSTEM ONLINE", delay: 1.8 },
  { text: "PORTFOLIO SYSTEM ONLINE", delay: 2.4 },
];

export const NAV_LINKS = [
  { label: "HOME", href: "#home" },
  { label: "ABOUT", href: "#about" },
  { label: "SKILLS", href: "#skills" },
  { label: "PROJECTS", href: "#projects" },
  { label: "EXPERIENCE", href: "#experience" },
  { label: "CONTACT", href: "#contact" },
];
