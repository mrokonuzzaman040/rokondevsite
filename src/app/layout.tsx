import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import { getWhatsAppConfig } from "@/lib/get-portfolio-data";

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
    default: "Rokon - Software Engineer Portfolio",
    template: "%s | Rokon",
  },
  description:
    "Portfolio for Rokon, a software engineer crafting immersive web experiences, platform tooling, and animation-driven interfaces.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Rokon - Software Engineer Portfolio",
    description:
      "Explore projects, engineering experiments, and case studies from Rokon, a software engineer focused on immersive web products.",
    url: "https://rokon.dev",
    siteName: "Rokon",
    type: "website",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const whatsapp = await getWhatsAppConfig();
  const whatsappHref = `https://wa.me/${whatsapp.number}?text=${encodeURIComponent(whatsapp.message)}`;

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
          <a
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            aria-label="Chat on WhatsApp"
            className="group fixed bottom-8 right-8 z-50 inline-flex items-center gap-3 rounded-full border border-[color:var(--color-accent)/.4] bg-[color:var(--color-background)/.9] px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_45px_rgba(120,60,255,0.25)] transition-transform hover:scale-[1.04]"
          >
            <span className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-full bg-[color:var(--color-accent)/.18]">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-white"
              >
                <path
                  d="M12.04 3C7.6 3 4 6.45 4 10.91C4 12.96 4.82 14.83 6.18 16.25L5 21L9.86 19.85C10.88 20.2 11.95 20.38 13.02 20.38H13.03C17.46 20.38 21.06 16.93 21.06 12.47C21.05 8.01 16.49 3 12.04 3ZM13.02 18.55C12.08 18.55 11.16 18.38 10.28 18.05L9.96 17.93L7.62 18.52L8.18 16.3L7.99 16.06C6.84 14.66 6.21 12.86 6.21 10.92C6.21 7.6 8.87 4.93 12.11 4.93C15.33 4.93 17.92 7.66 17.93 11C17.93 14.32 15.35 18.55 13.02 18.55ZM16.09 13.59C15.87 13.48 14.91 13.03 14.7 12.96C14.48 12.88 14.32 12.84 14.16 13.08C14 13.31 13.59 13.82 13.47 13.96C13.36 14.09 13.24 14.1 13.02 14C12.8 13.89 12 13.63 11.07 12.83C10.31 12.2 9.78 11.41 9.66 11.19C9.54 10.97 9.66 10.86 9.76 10.75C9.85 10.66 9.97 10.5 10.08 10.38C10.18 10.26 10.22 10.17 10.3 10.01C10.38 9.86 10.34 9.72 10.28 9.61C10.22 9.51 9.77 8.46 9.57 7.98C9.37 7.51 9.16 7.58 9 7.58C8.85 7.58 8.68 7.56 8.5 7.56C8.32 7.56 8.04 7.62 7.83 7.85C7.62 8.08 7 8.63 7 9.78C7 10.92 7.83 12.02 7.95 12.18C8.08 12.34 9.58 14.44 11.74 15.41C12.08 15.57 12.43 15.69 12.75 15.79C13.19 15.92 13.56 15.87 13.84 15.81C14.15 15.74 15.1 15.25 15.28 14.81C15.46 14.37 15.46 14.01 15.39 13.96C15.31 13.92 15.12 13.7 16.09 13.59Z"
                  fill="currentColor"
                />
              </svg>
            </span>
            <span className="hidden sm:inline">Chat on WhatsApp</span>
          </a>
        </div>
      </body>
    </html>
  );
}
