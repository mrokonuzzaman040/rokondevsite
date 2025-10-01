"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import type { Project } from "@/lib/types";

type ProjectShowcaseProps = {
  projects: Project[];
};

const container: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.18 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

export function ProjectShowcase({ projects }: ProjectShowcaseProps) {
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
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            variants={item}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="group relative flex flex-col overflow-hidden rounded-2xl border border-[color:var(--color-border)]/80 bg-[color:var(--color-background)/.65]"
          >
            <div className="relative h-48 overflow-hidden">
              <Image
                src={project.image.src}
                alt={project.image.alt}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[rgba(10,6,26,0.8)]" />
              <div className="absolute top-4 left-4 flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-muted">
                <span className="rounded-full border border-[color:var(--color-border)] bg-[color:var(--color-background)/.7] px-3 py-1">
                  {project.year}
                </span>
                <span className="rounded-full border border-[color:var(--color-border)] bg-[color:var(--color-background)/.6] px-3 py-1">
                  {project.technologies.slice(0, 2).join(" | ")}
                </span>
              </div>
            </div>

            <div className="flex flex-1 flex-col p-6">
              <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
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
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
