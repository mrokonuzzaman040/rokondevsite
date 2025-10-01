import { promises as fs } from "fs";
import path from "path";
import type { PortfolioData } from "@/lib/types";

const dataFilePath = path.join(process.cwd(), "src/data/portfolio.json");

let cachedData: PortfolioData | null = null;

export async function getPortfolioData(): Promise<PortfolioData> {
  if (cachedData) {
    return cachedData;
  }

  const fileContents = await fs.readFile(dataFilePath, "utf8");
  cachedData = JSON.parse(fileContents) as PortfolioData;
  return cachedData;
}

export async function getProjects() {
  const data = await getPortfolioData();
  return data.projects;
}

export async function getExperiences() {
  const data = await getPortfolioData();
  return data.experiences;
}

export async function getCodeSamples() {
  const data = await getPortfolioData();
  return data.codeSamples;
}

export async function getPrinciples() {
  const data = await getPortfolioData();
  return data.principles;
}

export async function getFocusAreas() {
  const data = await getPortfolioData();
  return data.focusAreas;
}

export async function getContactOptions() {
  const data = await getPortfolioData();
  return data.contacts;
}

export async function getContactPageContent() {
  const data = await getPortfolioData();
  return data.contactPage;
}

export async function getThemeContent() {
  const data = await getPortfolioData();
  return {
    hero: data.hero,
    testimonials: data.testimonials,
  };
}
export async function getTestimonials() {
  const data = await getPortfolioData();
  return data.testimonials;
}
export async function getWhatsAppConfig() {
  const data = await getPortfolioData();
  return data.whatsapp;
}


