"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { HeroContent } from "@/lib/types";

type HeroProps = {
  content: HeroContent;
};

const heroVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export function Hero({ content }: HeroProps) {
  return (
    <section className="relative">
      <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center gap-2 rounded-full border border-[color:var(--color-border)] bg-[color:var(--color-background)/.55] px-4 py-1 text-[13px] text-muted shadow-[var(--shadow-glow)]"
          >
            <span className="h-2 w-2 rounded-full bg-[color:var(--color-accent)]" />
            {content.availability}
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.08 }}
            className="mt-8 text-4xl font-semibold leading-[1.15] text-white md:text-6xl"
          >
            <motion.span variants={heroVariants} className="block">
              {content.intro}
            </motion.span>
            <motion.span
              variants={heroVariants}
              className="relative mt-4 inline-block bg-gradient-to-r from-[color:var(--color-accent-soft)] via-violet-400 to-purple-600 bg-clip-text text-transparent"
            >
              {content.highlight}
            </motion.span>
            <motion.span variants={heroVariants} className="mt-4 block text-muted">
              {content.tagline}
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.6 }}
            className="mt-8 max-w-2xl text-lg text-muted"
          >
            {content.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.6 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Link
              href={content.primaryCta.href}
              className="group relative inline-flex items-center gap-2 rounded-full border border-[color:var(--color-accent)/.2] bg-[color:var(--color-accent)/.18] px-6 py-3 text-sm font-semibold text-white transition-transform duration-300 hover:scale-[1.02]"
            >
              <span className="absolute inset-0 rounded-full bg-[color:var(--color-accent)/.18] blur-lg opacity-0 transition-opacity group-hover:opacity-100" />
              {content.primaryCta.label}
            </Link>
            <Link
              href={content.secondaryCta.href}
              className="inline-flex items-center gap-2 rounded-full border border-[color:var(--color-border)] px-6 py-3 text-sm font-semibold text-muted transition-colors duration-300 hover:border-[color:var(--color-accent)/.4] hover:text-white"
            >
              {content.secondaryCta.label} {"->"}
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="mt-14 grid gap-3 sm:grid-cols-3"
          >
            {content.stats.map((item) => (
              <div
                key={item}
                className="relative overflow-hidden rounded-xl border border-[color:var(--color-border)]/80 bg-[color:var(--color-background)/.6] p-5"
              >
                <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[color:var(--color-accent)/.65] to-transparent" />
                <p className="text-sm font-medium text-white">{item}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.65, duration: 0.6, ease: "easeOut" }}
          className="relative mx-auto flex h-[320px] w-[320px] items-center justify-center overflow-visible rounded-full bg-gradient-to-br from-[color:var(--color-background)/.6] to-[color:var(--color-accent)/.2] p-8 shadow-[var(--shadow-glow)] lg:mx-0"
        >
          <span className="absolute inset-6 rounded-full border border-[color:var(--color-accent)/.25]" />
          <Image
            src={content.visual.src}
            alt={content.visual.alt}
            width={280}
            height={280}
            priority
            className="pointer-events-none select-none"
          />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="mt-14 flex flex-wrap gap-3"
      >
        {content.techStack.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-[color:var(--color-border)] bg-[color:var(--color-background)/.8] px-4 py-2 text-xs uppercase tracking-[0.3em] text-muted"
          >
            {tech}
          </span>
        ))}
      </motion.div>
    </section>
  );
}
