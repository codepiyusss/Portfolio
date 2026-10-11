import type { IconName } from "@/components/Icons.tsx";

export const profile = {
  name: "Piyush Tiwari",
  role: "Python developer and AI/ML student",
  email: "info.contactpiyush@gmail.com",
  github: "https://github.com/codepiyusss",
  linkedin: "https://www.linkedin.com/in/codepiyusss",
  resume: "/Piyush_Tiwari_Resume.pdf",
};

export const education = {
  university: "Ramchandra Chandravanshi University",
  degree: "B.Tech, Computer Science and Engineering (AI/ML)",
  years: "2024 to 2028",
  cgpa: "8.18 / 10",
  coursework: [
    "Data Structures and Algorithms",
    "Object-Oriented Programming",
    "Database Management Systems",
    "Operating Systems",
    "Computer Networks",
  ],
};

/**
 * Footer social links. A link only appears once it has an address.
 * Fill in the empty ones below, for example: "https://instagram.com/yourname"
 */
export const socials: { icon: IconName; label: string; href: string; handle: string }[] = [
  { icon: "github", label: "GitHub", href: "https://github.com/codepiyusss", handle: "codepiyusss" },
  { icon: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/in/codepiyusss", handle: "codepiyusss" },
  { icon: "instagram", label: "Instagram", href: "", handle: "" },
  { icon: "x", label: "X", href: "", handle: "" },
  { icon: "telegram", label: "Telegram", href: "", handle: "" },
  { icon: "reddit", label: "Reddit", href: "", handle: "" },
  { icon: "mail", label: "Email", href: "mailto:info.contactpiyush@gmail.com", handle: "info.contactpiyush@gmail.com" },
  { icon: "phone", label: "Phone", href: "tel:+918271276201", handle: "+91 82712 76201" },
];

// ---- Skills. `projects` lists the ids of projects (see projects.ts) that used the skill. ----
export type Skill = { name: string; projects: string[]; note?: string };

const NOT_YET = "I've learned this, but it isn't in one of the projects shown here yet.";
const COURSE = "Studied in my B.Tech coursework.";
const ALL = ["voxshield", "ats-check", "repopilot", "rcu-connect", "hotel", "weather", "results", "password"];

export const skillGroups: { group: string; items: Skill[] }[] = [
  {
    group: "Languages",
    items: [
      { name: "Python", projects: ["voxshield", "ats-check", "repopilot", "hotel", "weather", "results", "password"] },
      { name: "JavaScript", projects: ["voxshield", "rcu-connect"] },
      { name: "HTML", projects: ["voxshield", "ats-check", "rcu-connect"] },
      { name: "CSS", projects: ["voxshield", "ats-check", "rcu-connect"] },
      { name: "C", projects: [], note: NOT_YET },
      { name: "Java", projects: [], note: NOT_YET },
    ],
  },
  {
    group: "Frameworks and libraries",
    items: [
      { name: "Flask", projects: ["voxshield", "ats-check", "repopilot"] },
      { name: "Librosa", projects: ["voxshield"] },
      { name: "scikit-learn", projects: ["voxshield"]},
      { name: "NumPy", projects: ["voxshield"] },
      { name: "Pandas", projects: ["voxshield"] },
      { name: "Matplotlib", projects: [], note: NOT_YET },
    ],
  },
  {
    group: "Core CS",
    items: [
      { name: "Data Structures and Algorithms", projects: [], note: COURSE },
      { name: "Object-Oriented Programming", projects: [], note: COURSE },
      { name: "DBMS", projects: [], note: COURSE },
      { name: "Operating Systems", projects: [], note: COURSE },
      { name: "Computer Networks", projects: [], note: COURSE },
    ],
  },
  {
    group: "Tools and concepts",
    items: [
      { name: "Git", projects: ALL },
      { name: "GitHub", projects: ALL },
      { name: "REST APIs", projects: ["voxshield", "repopilot"] },
      { name: "JSON", projects: ["voxshield", "repopilot"] },
      { name: "Vercel", projects: ["voxshield", "repopilot"] },
      { name: "Vite", projects: [], note: NOT_YET },
    ],
  },
];

// ---- Timeline ----
export const timeline = [
  {
    when: "2024",
    items: ["Started B.Tech in Computer Science and Engineering (AI/ML) at Ramchandra Chandravanshi University"],
  },
  { when: "May 2026", items: ["Python, HackerRank", "Data Science and Analytics, HP LIFE"] },
  { when: "Jul 2026", items: ["Machine Learning, Anaconda Inc.", "Data Visualisation, Forage"] },
];
