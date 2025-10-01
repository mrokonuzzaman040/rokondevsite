import { ExperienceTimeline } from "@/components/sections/ExperienceTimeline";
import { getPortfolioData } from "@/lib/get-portfolio-data";

export const metadata = {
  title: "Experience",
  description: "Career timeline, values, and the principles guiding immersive engineering work.",
};

export default async function ExperiencePage() {
  const { experiences, principles, testimonials } = await getPortfolioData();
  const testimonial = testimonials[0];

  return (
    <div>
      <header className="max-w-3xl">
        <p className="text-xs uppercase tracking-[0.4em] text-muted">Experience</p>
        <h1 className="mt-4 text-4xl font-semibold text-white md:text-5xl">
          Blending systems thinking, motion, and developer empathy.
        </h1>
        <p className="mt-4 text-sm text-muted">
          I move fluidly between product strategy, frontend architecture, and platform enablement. The goal is always to
          unlock teams, making complex flows feel effortless without compromising on rigor.
        </p>
      </header>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {principles.map((principle) => (
          <article
            key={principle.title}
            className="rounded-3xl border border-[color:var(--color-border)] bg-[color:var(--color-background)/.7] p-6"
          >
            <h2 className="text-xl font-semibold text-white">{principle.title}</h2>
            <p className="mt-3 text-sm text-muted">{principle.description}</p>
          </article>
        ))}
      </div>

      <ExperienceTimeline experiences={experiences} />

      {testimonial && (
        <section className="mt-24 overflow-hidden rounded-3xl border border-[color:var(--color-accent)/.2] bg-[color:var(--color-background)/.6] p-10">
          <h2 className="text-3xl font-semibold text-white">What teammates say</h2>
          <p className="mt-3 max-w-2xl text-sm text-muted">&quot;{testimonial.quote}&quot;</p>
          <p className="mt-6 text-xs uppercase tracking-[0.3em] text-muted">
            {testimonial.role} | {testimonial.company}
          </p>
        </section>
      )}
    </div>
  );
}
