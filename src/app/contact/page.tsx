import { ContactOptions } from "@/components/contact/ContactOptions";

export const metadata = {
  title: "Contact",
  description: "Collaborate on immersive product experiences, platform tooling, and animation systems.",
};

export default function ContactPage() {
  return (
    <div>
      <header className="max-w-3xl">
        <p className="text-xs uppercase tracking-[0.4em] text-muted">Contact</p>
        <h1 className="mt-4 text-4xl font-semibold text-white md:text-5xl">
          Let&apos;s engineer experiences that feel otherworldly.
        </h1>
        <p className="mt-4 text-sm text-muted">
          Open to partnering with product teams, founders, and studios that value motion-rich storytelling, durability,
          and developer happiness.
        </p>
      </header>

      <ContactOptions />

      <section className="mt-16 rounded-3xl border border-[color:var(--color-accent)/.2] bg-[color:var(--color-background)/.6] p-10">
        <h2 className="text-2xl font-semibold text-white">Collaboration kit</h2>
        <ul className="mt-4 grid gap-4 text-sm text-muted md:grid-cols-3">
          <li className="rounded-2xl border border-[color:var(--color-border)]/40 bg-black/30 p-4">
            - Technical discovery workshop to uncover opportunities, constraints, and audience needs.
          </li>
          <li className="rounded-2xl border border-[color:var(--color-border)]/40 bg-black/30 p-4">
            - Motion-first prototyping that aligns design, product, and engineering before writing production code.
          </li>
          <li className="rounded-2xl border border-[color:var(--color-border)]/40 bg-black/30 p-4">
            - Engineering enablement through design systems, guild rituals, and pairing sessions.
          </li>
        </ul>
      </section>
    </div>
  );
}
