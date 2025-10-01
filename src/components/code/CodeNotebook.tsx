"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { codeSamples } from "@/lib/portfolio-data";

export function CodeNotebook() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSample = codeSamples[activeIndex];

  return (
    <div className="mt-12 grid gap-10 lg:grid-cols-[280px_1fr]">
      <div className="flex flex-col gap-3">
        {codeSamples.map((sample, index) => {
          const isActive = index === activeIndex;
          return (
            <button
              key={sample.title}
              onClick={() => setActiveIndex(index)}
              className={`relative overflow-hidden rounded-2xl border px-5 py-4 text-left transition-colors ${
                isActive
                  ? "border-[color:var(--color-accent)/.5] bg-[color:var(--color-accent)/.15] text-white"
                  : "border-[color:var(--color-border)] bg-[color:var(--color-background)/.6] text-muted hover:border-[color:var(--color-accent)/.25]"
              }`}
            >
              {isActive && (
                <motion.span
                  layoutId="nav-highlight"
                  className="absolute inset-0 -z-10 bg-[color:var(--color-accent)/.2]"
                  transition={{ type: "spring", stiffness: 260, damping: 28 }}
                />
              )}
              <p className="text-xs uppercase tracking-[0.3em]">{sample.language}</p>
              <p className="mt-2 text-sm font-semibold">{sample.title}</p>
            </button>
          );
        })}
      </div>

      <div className="relative overflow-hidden rounded-3xl border border-[color:var(--color-border)] bg-[color:var(--color-background)/.7] p-8">
        <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-muted">
          <span>{activeSample.language}</span>
          <span>Motion & DX lab</span>
        </div>
        <h2 className="mt-4 text-2xl font-semibold text-white">{activeSample.title}</h2>
        <p className="mt-3 text-sm text-muted">{activeSample.description}</p>

        <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_240px]">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.pre
                key={activeSample.title}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="overflow-x-auto rounded-2xl border border-[color:var(--color-border)]/60 bg-black/50 p-6 font-mono text-[13px] leading-relaxed text-muted"
              >
                <code>{activeSample.code}</code>
              </motion.pre>
            </AnimatePresence>
          </div>

          <div className="rounded-2xl border border-[color:var(--color-border)]/60 bg-black/40 p-5 text-xs text-muted">
            <p className="text-xs uppercase tracking-[0.3em] text-muted">Implementation Notes</p>
            <ul className="mt-3 space-y-2">
              <li>- Designed for reuse across product surfaces.</li>
              <li>- Strong defaults with typed extension hooks.</li>
              <li>- Aligned with accessibility and performance budgets.</li>
            </ul>
            {activeSample.repoUrl && (
              <a
                href={activeSample.repoUrl}
                className="mt-4 inline-flex items-center text-xs font-semibold text-white"
                target="_blank"
                rel="noreferrer"
              >
                View repository ^
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
