import { CodeNotebook } from "@/components/code/CodeNotebook";
import { getPortfolioData } from "@/lib/get-portfolio-data";

export const metadata = {
  title: "Code Lab",
  description: "Animation utilities, deployment workflows, and platform tooling experiments.",
};

export default async function CodePage() {
  const { focusAreas, codeSamples } = await getPortfolioData();

  return (
    <div>
      <header className="max-w-3xl">
        <p className="text-xs uppercase tracking-[0.4em] text-muted">Code Lab</p>
        <h1 className="mt-4 text-4xl font-semibold text-white md:text-5xl">
          Experiments that make interfaces feel alive.
        </h1>
        <p className="mt-4 text-sm text-muted">
          Snippets, utilities, and patterns extracted from production work. These pieces explore motion systems, edge
          deployments, and the glue code that empowers teams.
        </p>
      </header>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {focusAreas.map((area) => (
          <article
            key={area.title}
            className="rounded-3xl border border-[color:var(--color-border)] bg-[color:var(--color-background)/.65] p-6"
          >
            <h2 className="text-xl font-semibold text-white">{area.title}</h2>
            <p className="mt-3 text-sm text-muted">{area.detail}</p>
          </article>
        ))}
      </div>

      <CodeNotebook codeSamples={codeSamples} />
    </div>
  );
}
