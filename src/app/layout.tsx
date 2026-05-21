import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { CustomCursor } from "@/components/CustomCursor";
import { InteractiveBackground } from "@/components/InteractiveBackground";
import { CursorSpotlight } from "@/components/CursorSpotlight";
import { ScrollProgress } from "@/components/ScrollProgress";
import { TerminalModal } from "@/components/TerminalModal";
import { SoundProvider } from "@/components/SoundContext";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Piyush Tiwari | Portfolio",
  description: "Computer Science student exploring programming and AI. Welcome to my portfolio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${outfit.variable} antialiased h-full scroll-smooth`}>
      <body className="min-h-full flex flex-col font-sans bg-brand-bg text-brand-text overflow-x-hidden transition-colors duration-300">
        <SoundProvider>
          <ThemeProvider attribute="class" defaultTheme="dark" forcedTheme="dark">
            <ScrollProgress />
            <CursorSpotlight />
            <InteractiveBackground />
            <TerminalModal />
            <CustomCursor />
            {children}
          </ThemeProvider>
        </SoundProvider>
      </body>
    </html>
  );
}
