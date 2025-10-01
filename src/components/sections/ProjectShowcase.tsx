"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { projects } from "@/lib/portfolio-data";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.18 },
  },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export function ProjectShowcase() {
  return (
    <section className="mt-28">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <h2 className="text-3xl font-semibold text-white md:text-4xl">Selected Project Stories</h2>
          <p className="mt-3 max-w-2xl text-sm text-muted">
            A sample of product work across developer platforms, data storytelling, and operations tooling. Each project
            leans on purposeful motion, systems thinking, and sharp execution.
          </p>
        </div>
        <Link
          href="/projects"
          className="inline-flex items-center rounded-full border border-[color:var(--color-accent)/.4] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[color:var(--color-accent)/.12]"
        >
          View project index {"->"}
        </Link>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={container}
        className="mt-12 grid gap-6 md:grid-cols-3"
      >
        {projects.map((project) => (
          <motion.article
            key={project.title}
            variants={item}
            className="group relative flex flex-col overflow-hidden rounded-2xl border border-[color:var(--color-border)]/80 bg-[color:var(--color-background)/.65] p-6"
          >
            <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,var(--tw-gradient-stops))] from-transparent via-[color:var(--color-accent)/.08] to-transparent" />
            </div>
            <div className="flex items-center justify-between">
              <span className="rounded-full border border-[color:var(--color-border)] px-3 py-1 text-xs uppercase tracking-[0.3em] text-muted">
                {project.year}
              </span>
              <div className="flex items-center gap-2 text-xs text-muted">
                {project.technologies.slice(0, 2).map((tech) => (
                  <span key={tech} className="rounded-full bg-[color:var(--color-accent)/.14] px-2 py-1">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <h3 className="mt-6 text-2xl font-semibold text-white">{project.title}</h3>
            <p className="mt-3 text-sm text-muted">{project.summary}</p>
            <p className="mt-4 text-xs text-muted/70">{project.description}</p>

            <div className="mt-auto flex items-center gap-4 pt-6 text-sm font-semibold text-muted">
              {project.liveUrl && (
                <Link
                  href={project.liveUrl}
                  className="relative inline-flex items-center gap-2 transition-colors hover:text-white"
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit product {"->"}
                </Link>
              )}
              {project.repoUrl && (
                <Link
                  href={project.repoUrl}
                  className="relative inline-flex items-center gap-2 transition-colors hover:text-white"
                  target="_blank"
                  rel="noreferrer"
                >
                  Repository ^
                </Link>
              )}
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
