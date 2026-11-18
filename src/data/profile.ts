import type { IconName } from "@/components/Icons";
import { projectIndex } from "./projects";

export const profile = {
  name: "Piyush Tiwari",
  role: "Python developer and AI/ML student",
  email: "info.contactpiyush@gmail.com",
  github: "https://github.com/codepiyusss",
  linkedin: "https://www.linkedin.com/in/codepiyusss",
  resume: "/Piyush_Tiwari_Resume.pdf",
  location: "Jharkhand, India",
  // Put a photo in public/ and set its path, for example "/avatar.jpg". Empty shows initials.
  avatar: "",
};

export const education = {
  university: "Ramchandra Chandravanshi University",
  degree: "Bachelor of Technology",
  field: "Computer Science and Engineering (AI/ML)",
  years: "2024 to 2028",
  cgpa: "8.18",
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
  { icon: "instagram", label: "Instagram", href: "https://instagram.com/p.yussh", handle: "p.yussh" },
  { icon: "x", label: "X", href: "https://x.com/codepiyusss", handle: "codepiyusss" },
  { icon: "telegram", label: "Telegram", href: "https://t.me/p_yussh", handle: "p_yussh" },
  { icon: "reddit", label: "Reddit", href: "https://www.reddit.com/user/pyussh/", handle: "pyussh" },
  { icon: "mail", label: "Email", href: "mailto:info.contactpiyush@gmail.com", handle: "info.contactpiyush@gmail.com" },
  { icon: "phone", label: "Phone", href: "tel:+918271276201", handle: "+91 82712 76201" },
];

// ---- Skills. `projects` lists the ids of projects (see projects.ts) that used the skill. ----
export type Skill = { name: string; projects: string[]; note?: string };

const NOT_YET = "I've learned this, but it isn't in one of the projects shown here yet.";
const COURSE = "Studied in my B.Tech coursework.";
// Every project that currently exists in projects.ts, so removing a project never breaks this list.
const ALL = Object.keys(projectIndex);

export const skillGroups: { group: string; items: Skill[] }[] = [
  {
    group: "Languages",
    items: [
      { name: "Python", projects: ["voxshield", "ats-check", "repopilot", "weather", "results", "password"] },
      { name: "JavaScript", projects: ["voxshield"] },
      { name: "HTML", projects: ["voxshield", "ats-check"] },
      { name: "CSS", projects: ["voxshield", "ats-check"] },
      { name: "C", projects: [], note: NOT_YET },
      { name: "Java", projects: [], note: NOT_YET },
    ],
  },
  {
    group: "Frameworks and libraries",
    items: [
      { name: "Flask", projects: ["voxshield", "ats-check", "repopilot"] },
      { name: "Librosa", projects: ["voxshield"] },
      { name: "scikit-learn", projects: ["voxshield"] },
      { name: "NumPy", projects: ["voxshield"] },
      { name: "Pandas", projects: [], note: NOT_YET },
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