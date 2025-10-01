import { ExperienceTimeline } from "@/components/sections/ExperienceTimeline";

const principles = [
  {
    title: "Motion with purpose",
    description:
      "Design transitions that teach the interface. Every animation frames context, reveals system status, or rewards progressive discovery.",
  },
  {
    title: "Platforms over projects",
    description:
      "Solve classes of problems with tooling that scales. Invest in primitives, design tokens, and automation that future teams can reuse.",
  },
  {
    title: "Earned simplicity",
    description:
      "Contain complexity behind intuitive affordances. Lean on ergonomics, strong defaults, and guided workflows to keep teams focused on outcomes.",
  },
];

export const metadata = {
  title: "Experience",
  description: "Career timeline, values, and the principles guiding immersive engineering work.",
};

export default function ExperiencePage() {
  return (
    <div>
      <header className="max-w-3xl">
        <p className="text-xs uppercase tracking-[0.4em] text-muted">Experience</p>
        <h1 className="mt-4 text-4xl font-semibold text-white md:text-5xl">
          Blending systems thinking, motion, and developer empathy.
        </h1>
        <p className="mt-4 text-sm text-muted">
          I move fluidly between product strategy, frontend architecture, and platform enablement. The goal is always to
          unlock teams-making complex flows feel effortless without compromising on rigor.
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

      <ExperienceTimeline />

      <section className="mt-24 overflow-hidden rounded-3xl border border-[color:var(--color-accent)/.2] bg-[color:var(--color-background)/.6] p-10">
        <h2 className="text-3xl font-semibold text-white">What teammates say</h2>
        <p className="mt-3 max-w-2xl text-sm text-muted">
          &quot;Rokon synthesizes ambiguity into motion-first prototypes that inevitably become the blueprint our squads
          follow. The combination of deep technical empathy and narrative storytelling keeps everyone aligned.&quot;
        </p>
        <p className="mt-6 text-xs uppercase tracking-[0.3em] text-muted">Principal Designer | Vertex Labs</p>
      </section>
    </div>
  );
}
