"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import type { Project } from "@/lib/types";

type ProjectGalleryProps = {
  projects: Project[];
};

export function ProjectGallery({ projects }: ProjectGalleryProps) {
  return (
    <div className="mt-12 space-y-10">
      {projects.map((project, idx) => (
        <motion.article
          key={project.title}
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: idx * 0.08, ease: "easeOut" }}
          className="relative overflow-hidden rounded-3xl border border-[color:var(--color-border)] bg-[color:var(--color-background)/.7]"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,var(--tw-gradient-stops))] from-[color:var(--color-accent)/.12] via-transparent to-transparent opacity-0 transition-opacity duration-700 hover:opacity-100" />
          <div className="relative z-10 grid gap-8 lg:grid-cols-[1.2fr_1fr]">
            <div className="p-8">
              <div className="relative overflow-hidden rounded-2xl border border-[color:var(--color-border)]/80 bg-[color:var(--color-background)/.6]">
                <div className="relative h-64">
                  <Image
                    src={project.image.src}
                    alt={project.image.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover"
                    priority={idx === 0}
                  />
                </div>
              </div>

              <div className="mt-6 flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-muted">
                <span className="rounded-full border border-[color:var(--color-border)] px-3 py-1">{project.year}</span>
                <span>{project.technologies.join("  |  ")}</span>
              </div>
              <h2 className="mt-6 text-3xl font-semibold text-white">{project.title}</h2>
              <p className="mt-4 text-sm text-muted">{project.summary}</p>
              <p className="mt-4 text-sm text-muted/70">{project.description}</p>

              <div className="mt-6 flex flex-wrap gap-3">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-[color:var(--color-border)] px-3 py-1 text-xs uppercase tracking-[0.3em] text-muted"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-4 text-sm font-semibold text-muted">
                {project.liveUrl && (
                  <Link
                    href={project.liveUrl}
                    className="transition-colors hover:text-white"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live experience {"->"}
                  </Link>
                )}
                {project.repoUrl && (
                  <Link
                    href={project.repoUrl}
                    className="transition-colors hover:text-white"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Source ^
                  </Link>
                )}
              </div>
            </div>

            <div className="relative flex flex-col justify-between gap-6 rounded-l-3xl bg-[color:var(--color-background)/.85] p-8">
              <div className="space-y-3 text-sm text-muted">
                <p>
                  <strong className="text-white">Project focus.</strong> {project.focus}
                </p>
                <p>
                  <strong className="text-white">Role.</strong> {project.role}
                </p>
              </div>

              <div className="rounded-xl border border-[color:var(--color-border)]/60 bg-black/40 p-4">
                <p className="text-xs uppercase tracking-[0.3em] text-muted">Outcome snapshots</p>
                <ul className="mt-3 space-y-2 text-xs text-muted">
                  {project.outcomes.map((item) => (
                    <li key={item}>- {item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.article>
      ))}
    </div>
  );
}
