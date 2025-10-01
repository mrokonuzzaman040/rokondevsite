"use client";

import { motion } from "framer-motion";
import type { Experience } from "@/lib/types";

type ExperienceTimelineProps = {
  experiences: Experience[];
  variant?: "compact" | "full";
};

const variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: index * 0.08, duration: 0.6, ease: "easeOut" },
  }),
};

export function ExperienceTimeline({ experiences, variant = "full" }: ExperienceTimelineProps) {
  return (
    <section className={variant === "compact" ? "mt-24" : "mt-12"}>
      <header className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl font-semibold text-white md:text-4xl">Experience Timeline</h2>
          <p className="mt-2 max-w-2xl text-sm text-muted">
            Impact across startups and platform teams. I blend animation, systems design, and product instincts to bring
            clarity to complex problems.
          </p>
        </div>
      </header>

      <div className="relative mt-10 pl-6">
        <span className="absolute inset-y-0 left-3 w-px bg-gradient-to-b from-[color:var(--color-accent)/.15] via-[color:var(--color-accent)/.25] to-transparent" />
        <div className="flex flex-col gap-10">
          {experiences.map((experience, index) => (
            <motion.article
              key={`${experience.company}-${experience.role}`}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              variants={variants}
              className="relative rounded-2xl border border-[color:var(--color-border)]/80 bg-[color:var(--color-background)/.7] p-6 backdrop-blur"
            >
              <span className="absolute -left-[14px] top-6 h-3 w-3 rounded-full bg-[color:var(--color-accent)] shadow-[0_0_12px_rgba(var(--accent)/0.8)]" />
              <div className="flex flex-wrap items-baseline justify-between gap-2 text-sm text-muted">
                <div className="text-xs uppercase tracking-[0.35em] text-muted">
                  {experience.start} - {experience.end}
                </div>
                <div className="text-xs text-muted">{experience.technologies.join(" | ")}</div>
              </div>
              <h3 className="mt-4 text-2xl font-semibold text-white">{experience.role}</h3>
              <p className="text-sm text-muted">{experience.company}</p>

              <ul className="mt-4 space-y-3 text-sm text-muted">
                {experience.achievements
                  .slice(0, variant === "compact" ? 2 : experience.achievements.length)
                  .map((achievement) => (
                    <li key={achievement} className="flex gap-3">
                      <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-[color:var(--color-accent)]" />
                      <span>{achievement}</span>
                    </li>
                  ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
