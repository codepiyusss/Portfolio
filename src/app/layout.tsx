import type { Metadata, Viewport } from "next";
import "@fontsource/poppins/latin-400.css";
import "@fontsource/poppins/latin-500.css";
import "@fontsource/poppins/latin-600.css";
import "@fontsource/poppins/latin-700.css";
import "./globals.css";

// Runs before the page paints so there is no flash. Light is the default unless dark was chosen.
const themeScript = `try{document.documentElement.classList.toggle("dark",localStorage.getItem("theme")==="dark")}catch(e){}`;

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://portfolio-phi-fawn-98dglblujq.vercel.app"),
  title: "Piyush Tiwari | Portfolio",
  description:
    "B.Tech CSE (AI/ML) student building machine learning projects in Python. Open to internships and entry-level roles.",
  openGraph: {
    title: "Piyush Tiwari | Portfolio",
    description: "Python developer and AI/ML student. Open to internships and entry-level roles.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffe9da" },
    { media: "(prefers-color-scheme: dark)", color: "#000e1b" },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-screen font-sans">{children}</body>
    </html>
  );
}