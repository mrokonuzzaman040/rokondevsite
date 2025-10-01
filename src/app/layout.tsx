import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Rokon – Software Engineer Portfolio",
    template: "%s · Rokon",
  },
  description:
    "Portfolio for Rokon, a software engineer crafting immersive web experiences, platform tooling, and animation-driven interfaces.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Rokon – Software Engineer Portfolio",
    description:
      "Explore projects, engineering experiments, and case studies from Rokon, a software engineer focused on immersive web products.",
    url: "https://rokon.dev",
    siteName: "Rokon",
    images: [{ url: "/og.png" }],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="relative flex min-h-screen flex-col overflow-hidden">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-32 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[color:var(--color-accent)/0.18] blur-[140px]" />
            <div className="absolute bottom-16 right-20 h-72 w-72 rounded-full bg-[color:var(--color-accent-soft)/0.22] blur-[120px]" />
          </div>
          <Navbar />
          <main className="relative flex-1">
            <div className="mx-auto w-full max-w-6xl px-6 pb-24 pt-12">
              {children}
            </div>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
