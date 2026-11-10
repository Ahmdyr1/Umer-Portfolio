import type { CardItem } from "./types";

export type Project = {
  slug: string;
  name: string;
  title: string;
  tags: string[];
  excerpt: string;
  overview: string;
  role: string;
  client: string;
  year: string;
  date: string;
  service: string;
  category: string;
  link: string;
  cover: string;
  results: string[];
};

const covers = ["violet", "green", "amber", "coral"].map((c) => `/images/placeholders/${c}.svg`);

const base = {
  excerpt: "One or two sentences on the problem this project solved and who it was for.",
  overview:
    "Describe the context, the challenge and your approach. Explain the decisions you made and why, so a reader understands how you think as well as what you shipped.",
  role: "Your role",
  client: "Client name",
  year: "Year",
  date: "Add a date",
  link: "",
  results: ["A measurable result", "Another measurable result", "What you would do next"],
};

const entries: Array<[string, string, string, string]> = [
  ["project-one", "Project One", "UI / UX Design", "Web"],
  ["project-two", "Project Two", "App Design", "Mobile"],
  ["project-three", "Project Three", "App Design", "Mobile"],
  ["project-four", "Project Four", "Front End", "Web"],
  ["project-five", "Project Five", "UI / UX Design", "Web"],
  ["project-six", "Project Six", "Graphic Design", "Branding"],
  ["project-seven", "Project Seven", "Front End", "Web"],
];

export const projects: Project[] = entries.map(([slug, name, service, category], i) => ({
  ...base,
  slug,
  name,
  title: `${name}: Your Project Headline`,
  tags: [service, category, "Add a tag"],
  service,
  category,
  cover: covers[i % covers.length],
}));

export const projectCards: CardItem[] = projects.map((p) => ({
  href: `/projects/${p.slug}`,
  image: p.cover,
  tag: p.service,
  date: p.date,
  title: p.title,
  excerpt: p.excerpt,
  facets: { Service: p.service, Category: p.category },
}));
