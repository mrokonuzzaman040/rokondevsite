export type Project = {
  title: string;
  summary: string;
  description: string;
  year: number;
  technologies: string[];
  liveUrl?: string;
  repoUrl?: string;
};

export type Experience = {
  company: string;
  role: string;
  start: string;
  end: string;
  achievements: string[];
  technologies: string[];
};

export type CodeSample = {
  title: string;
  description: string;
  code: string;
  language: string;
  repoUrl?: string;
};

export const projects: Project[] = [
  {
    title: "Nebula Dev Platform",
    summary:
      "Full-stack developer portal that orchestrates onboarding, documentation, and self-service environments for engineering teams.",
    description:
      "I designed and led the build of a control plane for platform teams. The system provisions ephemeral environments, syncs with service catalogs, and exposes a plug-in SDK that scaled adoption across 14 product squads.",
    year: 2024,
    technologies: ["Next.js", "tRPC", "PostgreSQL", "AWS", "Terraform"],
    liveUrl: "https://example.com/nebula",
    repoUrl: "https://github.com/example/nebula",
  },
  {
    title: "Spectral Analytics",
    summary:
      "Data storytelling suite used by product analytics teams to compose real-time dashboards and narrative reports.",
    description:
      "Built a rich-client experience with collaborative stories, live queries, and animated transitions across 3D charts. Attention was spent on framing data in human language with inline insights.",
    year: 2023,
    technologies: ["React", "WebGL", "Framer Motion", "ClickHouse", "GraphQL"],
    liveUrl: "https://example.com/spectral",
  },
  {
    title: "Operator Workbench",
    summary:
      "Mission control for customer success engineers featuring real-time observability, workflow automation, and AI assisted runbooks.",
    description:
      "Architected the frontend platform, created a design system, and shipped a workflow composer with an expressive DSL that drives AI suggestions.",
    year: 2022,
    technologies: ["Next.js", "State Machines", "Tailwind CSS", "OpenAI", "Redis Streams"],
    repoUrl: "https://github.com/example/operator-workbench",
  },
];

export const experiences: Experience[] = [
  {
    company: "Vertex Labs",
    role: "Senior Software Engineer",
    start: "Jul 2022",
    end: "Present",
    achievements: [
      "Led platform initiative that cut onboarding time for new services from days to minutes.",
      "Prototyped an event-driven rendering pipeline that now powers 60% of customer dashboards.",
      "Mentored six engineers across frontend and infrastructure tracks with growth plans and pairing rituals.",
    ],
    technologies: ["Next.js", "Go", "AWS", "Temporal", "Terraform"],
  },
  {
    company: "Chromatic Systems",
    role: "Full-Stack Engineer",
    start: "Mar 2019",
    end: "Jun 2022",
    achievements: [
      "Shipped collaboration suite adopted by 40k daily active creatives.",
      "Introduced code health guardrails and continuous delivery practices for 14 services.",
      "Led migration from monolith to federated graph with observable instrumentation.",
    ],
    technologies: ["React", "Node.js", "GraphQL", "PostgreSQL", "Kubernetes"],
  },
  {
    company: "Freelance",
    role: "Product Engineer",
    start: "2015",
    end: "2019",
    achievements: [
      "Consulted early-stage founders; shipped prototypes and MVPs in under eight weeks.",
      "Built design systems and front-of-site experiences with motion-first storytelling.",
    ],
    technologies: ["Next.js", "Vue", "Svelte", "Firebase"],
  },
];

export const codeSamples: CodeSample[] = [
  {
    title: "Composable Animation Harness",
    description:
      "Utility hook that choreographs staggered entrance animations and orchestrations across sections.",
    code: `import { useEffect } from "react";
import { animate, stagger } from "framer-motion";

type StaggerOptions = {
  selector: string;
  duration?: number;
  delay?: number;
};

export function useStagger({ selector, duration = 0.6, delay = 0.08 }: StaggerOptions) {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);
    return animate(
      elements,
      { opacity: [0, 1], y: [24, 0] },
      { duration, delay: stagger(delay) }
    );
  }, [selector, duration, delay]);
}
`,
    language: "ts",
  },
  {
    title: "Edge Deployer",
    description:
      "Deploy workflow that streams build telemetry and ensures traffic is warmed before flipping routes.",
    code: `type Region = "iad" | "dub" | "sfo";

type Deployment = {
  id: string;
  regions: Region[];
  onProgress: (message: string) => void;
};

export async function deployEdge({ id, regions, onProgress }: Deployment) {
  onProgress(`[launch] starting ${id}`);

  for (const region of regions) {
    onProgress(`[package] shipping to ${region}`);
    await warmRegion(region);
    onProgress(`[ready] warmed ${region}`);
  }

  onProgress(`[live] flipped traffic for ${id}`);
}

async function warmRegion(region: Region) {
  await new Promise((resolve) => setTimeout(resolve, 400));
}
`,
    language: "ts",
  },
  {
    title: "Metric Lens",
    description:
      "Server action that blends business metrics with qualitative signals for weekly planning rituals.",
    code: `import "server-only";
import { cache } from "react";
import { db } from "@/lib/db";

export const fetchMetricLens = cache(async (teamId: string) => {
  const metrics = await db.metric.findMany({
    where: { teamId },
    orderBy: { capturedAt: "desc" },
    take: 12,
  });

  return metrics.map((metric) => ({
    ...metric,
    sentiment: metric.trend > 0 ? "upbeat" : "regroup",
  }));
});
`,
    language: "ts",
  },
];
