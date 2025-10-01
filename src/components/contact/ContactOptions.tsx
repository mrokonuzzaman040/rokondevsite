"use client";

import { motion } from "framer-motion";

const contacts = [
  {
    title: "Book a collaboration call",
    detail: "Perfect for product teams looking to craft immersive platform experiences.",
    href: "https://cal.com/rokon/intro",
    cta: "Schedule 30 minutes",
  },
  {
    title: "Say hello",
    detail: "Share context, requirements, or just an idea. I respond within a day.",
    href: "mailto:hello@rokon.dev",
    cta: "Compose email",
  },
  {
    title: "Follow the build log",
    detail: "Snapshots of prototypes, motion explorations, and platform experiments.",
    href: "https://twitter.com/rokondev",
    cta: "Open build log",
  },
];

export function ContactOptions() {
  return (
    <div className="mt-12 grid gap-6 md:grid-cols-3">
      {contacts.map((contact, index) => (
        <motion.a
          key={contact.href}
          href={contact.href}
          target={contact.href.startsWith("http") ? "_blank" : undefined}
          rel={contact.href.startsWith("http") ? "noreferrer" : undefined}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
          className="group relative overflow-hidden rounded-3xl border border-[color:var(--color-border)] bg-[color:var(--color-background)/.65] p-6"
        >
          <div className="absolute inset-0 translate-y-8 bg-[color:var(--color-accent)/.14] opacity-0 blur-3xl transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100" />
          <div className="relative">
            <p className="text-xs uppercase tracking-[0.3em] text-muted">{contact.cta}</p>
            <h2 className="mt-4 text-xl font-semibold text-white">{contact.title}</h2>
            <p className="mt-3 text-sm text-muted">{contact.detail}</p>
            <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white">
              {contact.cta}
              <span aria-hidden>-></span>
            </span>
          </div>
        </motion.a>
      ))}
    </div>
  );
}
