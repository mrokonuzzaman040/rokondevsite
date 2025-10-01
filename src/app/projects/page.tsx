import { ProjectGallery } from "@/components/projects/ProjectGallery";
import { getProjects } from "@/lib/get-portfolio-data";

export const metadata = {
  title: "Projects",
  description: "Case studies and product stories that blend animation systems with platform engineering.",
};

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <div>
      <header className="max-w-3xl">
        <p className="text-xs uppercase tracking-[0.4em] text-muted">Projects</p>
        <h1 className="mt-4 text-4xl font-semibold text-white md:text-5xl">A gallery of immersive product builds.</h1>
        <p className="mt-4 text-sm text-muted">
          Each project pairs storytelling with engineering depth. Smooth interactions, solid architectures, and
          measurable outcomes are always the goal.
        </p>
      </header>
      <ProjectGallery projects={projects} />
    </div>
  );
}
