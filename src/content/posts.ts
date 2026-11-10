import type { CardItem } from "./types";

/** Each slug needs a matching file in src/content/blog/<slug>.mdx */
export type Post = {
  slug: string;
  title: string;
  topic: string;
  date: string;
  excerpt: string;
  cover: string;
};

const covers = ["violet", "green", "amber", "coral"].map((c) => `/images/placeholders/${c}.svg`);

const entries: Array<[string, string, string]> = [
  ["post-one", "Your First Article Headline Goes Here", "Design"],
  ["post-two", "Your Second Article Headline Goes Here", "Development"],
  ["post-three", "Your Third Article Headline Goes Here", "Career"],
  ["post-four", "Your Fourth Article Headline Goes Here", "Design"],
  ["post-five", "Your Fifth Article Headline Goes Here", "Development"],
  ["post-six", "Your Sixth Article Headline Goes Here", "Career"],
  ["post-seven", "Your Seventh Article Headline Goes Here", "Design"],
];

export const posts: Post[] = entries.map(([slug, title, topic], i) => ({
  slug,
  title,
  topic,
  date: "Add a date",
  excerpt: "A one-sentence summary of this article.",
  cover: covers[i % covers.length],
}));

export const postCards: CardItem[] = posts.map((p) => ({
  href: `/blogs/${p.slug}`,
  image: p.cover,
  tag: p.topic,
  date: p.date,
  title: p.title,
  excerpt: p.excerpt,
  facets: { Topic: p.topic },
}));
