export type FeaturedProject = {
  id: string;
  title: string;
  subtitle: string;
  role?: string;
  problem: string;
  built: string;
  how: string;
  stack: string[];
  code: string;
  live?: string;
};

export type SmallProject = {
  id: string;
  title: string;
  description: string;
  stack: string[];
  code: string;
  live?: string;
};

export const featured: FeaturedProject[] = [
  {
    id: "voxshield",
    title: "VoxShield",
    subtitle: "AI voice deepfake detector",
    role: "Team lead, team of 6",
    problem: "AI voice cloning makes it easy to impersonate someone over audio, and hard for a listener to tell.",
    built:
      "A detector that decides whether speech is real or AI-generated, with a web interface for real-time audio analysis.",
    how: "Librosa pulls out MFCC, Mel spectrogram, spectral features, pitch, zero-crossing rate, chroma and RMS energy. We compared several machine-learning models and deployed the prediction API with Flask.",
    stack: ["Python", "Librosa", "Flask", "JavaScript", "scikit-learn", "NumPy"],
    code: "https://github.com/codepiyusss/VoxShield",
    live: "https://voxshield-psi.vercel.app",
  },
  {
    id: "ats-check",
    title: "ATS Check",
    subtitle: "Resume analyzer",
    problem: "Resumes are often filtered by ATS software before a person reads them, and it's hard to know why.",
    built:
      "A resume analyzer that scores ATS compatibility, formatting, readability, grammar and keyword relevance, then gives structured feedback.",
    how: "pdfplumber extracts the text from a PDF, rule-based scoring runs the checks, and optional Gemini-powered analysis adds more. You can upload or paste a resume in the web interface.",
    stack: ["Python", "Flask", "pdfplumber"],
    code: "https://github.com/codepiyusss/ATS-Check",
  },
];

export const smaller: SmallProject[] = [
  {
    id: "repopilot",
    title: "RepoPilot-AI",
    description: "College project. Paste a GitHub repo link and see its stats and activity on a dashboard.",
    stack: ["Python", "Flask", "GitHub API"],
    code: "https://github.com/codepiyusss/RepoPilot-AI",
    live: "https://repo-pilot-ai-tau.vercel.app",
  },
  {
    id: "weather",
    title: "Weather Dashboard",
    description: "Fetches live weather data and shows current conditions.",
    stack: ["Python"],
    code: "https://github.com/codepiyusss/WEATHER-DASHBOARD",
  },
  {
    id: "results",
    title: "Student Result Management System",
    description: "Records marks, computes results and manages academic records.",
    stack: ["Python"],
    code: "https://github.com/codepiyusss/Student-Result-Management-System",
  },
  {
    id: "password",
    title: "Password Strength Checker",
    description: "A Tkinter app that checks the strength of a password as you type.",
    stack: ["Python", "Tkinter"],
    code: "https://github.com/codepiyusss/Password-Strength-Checker",
  },
];

export const projectIndex: Record<string, { title: string; code: string }> = Object.fromEntries(
  [...featured, ...smaller].map((p) => [p.id, { title: p.title, code: p.code }]),
);