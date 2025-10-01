export type Cta = {
  label: string;
  href: string;
};

export type ImageAsset = {
  src: string;
  alt: string;
};

export type HeroContent = {
  availability: string;
  intro: string;
  highlight: string;
  tagline: string;
  description: string;
  stats: string[];
  techStack: string[];
  primaryCta: Cta;
  secondaryCta: Cta;
  visual: ImageAsset;
};

export type Project = {
  title: string;
  summary: string;
  description: string;
  year: number;
  technologies: string[];
  liveUrl?: string;
  repoUrl?: string;
  image: ImageAsset;
  focus: string;
  role: string;
  outcomes: string[];
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

export type Principle = {
  title: string;
  description: string;
};

export type FocusArea = {
  title: string;
  detail: string;
};

export type ContactOption = {
  title: string;
  detail: string;
  href: string;
  cta: string;
};

export type ContactPageContent = {
  title: string;
  headline: string;
  description: string;
  collaborationKit: string[];
};

export type Testimonial = {
  quote: string;
  role: string;
  company: string;
};

export type WhatsAppConfig = {
  number: string;
  message: string;
};

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message: string;
  errors?: {
    name?: string;
    email?: string;
    message?: string;
  };
};

export const initialContactFormState: ContactFormState = {
  status: "idle",
  message: "",
};

export type PortfolioData = {
  hero: HeroContent;
  projects: Project[];
  experiences: Experience[];
  codeSamples: CodeSample[];
  principles: Principle[];
  focusAreas: FocusArea[];
  contacts: ContactOption[];
  contactPage: ContactPageContent;
  testimonials: Testimonial[];
  whatsapp: WhatsAppConfig;
};
