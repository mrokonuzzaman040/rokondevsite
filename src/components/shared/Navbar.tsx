"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/code", label: "Code Lab" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="text-sm font-semibold uppercase tracking-[0.4em] text-muted">
          ROKON.DEV
        </Link>

        <div className="relative flex items-center gap-1 rounded-full border border-[color:var(--color-border)] bg-[color:var(--color-background)/.65] px-2 py-1 shadow-[var(--shadow-glow)]">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className="relative rounded-full px-3 py-1 text-sm font-medium text-muted transition-colors hover:text-white"
              >
                {isActive && (
                  <motion.span
                    layoutId="navActive"
                    className="absolute inset-0 rounded-full bg-[color:var(--color-accent)/.22]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </Link>
            );
          })}
        </div>

        <Link
          href="/contact"
          className="group relative inline-flex items-center gap-2 rounded-full border border-[color:var(--color-accent)/.5] bg-[color:var(--color-accent)/.12] px-4 py-2 text-sm font-medium text-white transition-transform duration-300 hover:scale-[1.03]"
        >
          <span className="absolute inset-0 -z-10 rounded-full bg-[color:var(--color-accent)/.2] blur-md opacity-0 transition-opacity group-hover:opacity-100" />
          Let's Collaborate
        </Link>
      </nav>
    </header>
  );
}
