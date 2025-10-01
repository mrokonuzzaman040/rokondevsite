import { Hero } from "@/components/sections/Hero";
import { ProjectShowcase } from "@/components/sections/ProjectShowcase";
import { ExperienceTimeline } from "@/components/sections/ExperienceTimeline";
import { CodeShowcase } from "@/components/sections/CodeShowcase";
import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-32">
      <Hero />
      <ProjectShowcase />
      <ExperienceTimeline variant="compact" />
      <CodeShowcase />

      <section className="relative overflow-hidden rounded-3xl border border-[color:var(--color-accent)/.2] bg-[color:var(--color-background)/.7] p-10">
        <div className="absolute -left-10 top-0 h-32 w-32 rounded-full bg-[color:var(--color-accent)/.2] blur-3xl" />
        <div className="absolute bottom-0 right-0 h-40 w-40 rounded-full bg-[color:var(--color-accent-soft)/.3] blur-3xl" />
        <div className="relative">
          <h2 className="text-3xl font-semibold text-white">Let's craft the future of your product.</h2>
          <p className="mt-3 max-w-2xl text-sm text-muted">
            I collaborate with teams to ship platforms, design systems, and cinematic experiences that feel effortless.
            If you're building something that deserves a new dimension, let's chat.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-[color:var(--color-accent)/.4] bg-[color:var(--color-accent)/.2] px-5 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.02]"
            >
              Start a conversation
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-full border border-[color:var(--color-border)] px-5 py-3 text-sm font-semibold text-muted transition-colors hover:border-[color:var(--color-accent)/.4] hover:text-white"
            >
              Browse case studies ->
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
