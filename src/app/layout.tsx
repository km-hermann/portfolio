import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#060513",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "[PLACEHOLDER - Hermann Mea (KMH)] • Software Engineer",
  description:
    "[PLACEHOLDER - Portfolio of Hermann Mea (KMH) - Software Engineer building resilient full-stack systems, modern web platforms, and real-time event-driven architectures.]",
  keywords: [
    "Software Engineer",
    "Full Stack Developer",
    "Next.js",
    "TypeScript",
    "React",
    "Tailwind CSS",
    "Real-Time Systems",
    "KMH",
    "Hermann Mea",
  ],
  authors: [{ name: "Hermann Mea (KMH)" }],
  creator: "Hermann Mea (KMH)",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://example.com",
    title: "Hermann Mea (KMH) • Software Engineer Portfolio",
    description:
      "Crafting resilient full-stack systems, distributed architectures, and modern web applications.",
    siteName: "Hermann Mea (KMH) Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hermann Mea (KMH) • Software Engineer Portfolio",
    description:
      "Crafting resilient full-stack systems, distributed architectures, and modern web applications.",
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
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-[#060513] text-zinc-100 selection:bg-indigo-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
