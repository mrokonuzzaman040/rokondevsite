"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { codeSamples } from "@/lib/portfolio-data";

export function CodeShowcase() {
  return (
    <section className="mt-28">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <h2 className="text-3xl font-semibold text-white md:text-4xl">Code experiments</h2>
          <p className="mt-3 max-w-2xl text-sm text-muted">
            Prototypes and utilities that explore motion primitives, edge deployments, and platform guardrails. Built for
            teaching, onboarding, and the sheer joy of making things move.
          </p>
        </div>
        <Link
          href="/code"
          className="inline-flex items-center rounded-full border border-[color:var(--color-border)] px-4 py-2 text-sm font-semibold text-muted transition-colors hover:border-[color:var(--color-accent)/.4] hover:text-white"
        >
          View the lab →
        </Link>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-[1.2fr_1fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="overflow-hidden rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-background)/.65]"
        >
          <div className="flex items-center justify-between border-b border-[color:var(--color-border)]/80 px-6 py-4">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-muted">
              <span className="h-2 w-2 rounded-full bg-[color:var(--color-accent)]" />
              motion.ts
            </div>
            <span className="text-xs text-muted">Composed with TypeScript</span>
          </div>
          <pre className="relative overflow-x-auto bg-gradient-to-br from-[color:var(--color-background)] via-[color:var(--color-background)/.6] to-[color:var(--color-accent)/.12] p-6 font-mono text-[13px] leading-relaxed text-muted">
            <code>{codeSamples[0].code}</code>
          </pre>
        </motion.div>

        <div className="grid gap-6">
          {codeSamples.slice(1).map((sample, index) => (
            <motion.article
              key={sample.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              className="rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-background)/.65] p-6"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-muted">{sample.language}</p>
              <h3 className="mt-3 text-xl font-semibold text-white">{sample.title}</h3>
              <p className="mt-3 text-sm text-muted">{sample.description}</p>
              <pre className="mt-6 overflow-x-auto rounded-xl border border-[color:var(--color-border)]/60 bg-black/40 p-4 font-mono text-[12px] leading-relaxed text-muted">
                <code>{sample.code}</code>
              </pre>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
