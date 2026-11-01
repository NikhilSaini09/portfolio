import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nikhil Saini | Systems & Full-Stack Engineer | IIT Bombay",
  description:
    "Portfolio of Nikhil Saini — IIT Bombay Dual Degree graduate, LeetCode Guardian (2300+), Codeforces Candidate Master (1980+), architecting resilient low-latency distributed systems, WebRTC P2P multiplayer engines, and modern full-stack applications.",
  keywords: [
    "Nikhil Saini",
    "IIT Bombay",
    "Distributed Systems",
    "Real-Time WebRTC",
    "LiveKit",
    "LeetCode Guardian",
    "Codeforces Candidate Master",
    "Next.js",
    "TypeScript",
    "FastAPI",
    "Competitive Programming",
    "Software Engineer"
  ],
  authors: [{ name: "Nikhil Saini" }],
  creator: "Nikhil Saini",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased dark"
      data-scroll-behavior="smooth"
    >
      <body className="min-h-full flex flex-col bg-[#09090b] text-zinc-100 selection:bg-emerald-500/20 selection:text-emerald-200">
        {children}
      </body>
    </html>
  );
}
