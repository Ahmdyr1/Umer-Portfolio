import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/motion";
import { PageBanner } from "@/components/PageBanner";
import { ArrowUpRight, PillLink, Tag } from "@/components/ui";
import { projects } from "@/content/projects";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  return { title: project?.name, description: project?.excerpt };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const index = projects.findIndex((p) => p.slug === slug);
  if (index < 0) notFound();
  const project = projects[index];
  const next = projects[(index + 1) % projects.length];
  const facts = [
    ["Role", project.role],
    ["Client", project.client],
    ["Year", project.year],
    ["Category", project.category],
  ];

  return (
    <main>
      <PageBanner accent="Case" text="Study" />
      <article className="shell section-y">
        <Reveal>
          <div className="flex flex-wrap gap-2.5">
            {project.tags.map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </div>
          <h2 className="mt-6 max-w-[900px] text-h1 leading-[1.1] font-bold text-gray-700">{project.title}</h2>
        </Reveal>

        <Reveal className="relative mt-[clamp(2rem,3.3vw,3rem)] aspect-[16/9] overflow-hidden rounded-card">
          <Image src={project.cover} alt="" fill unoptimized={project.cover.endsWith(".svg")} sizes="(max-width: 1298px) 100vw, 1298px" className="object-cover" />
        </Reveal>

        <div className="mt-[clamp(2rem,4vw,3.5rem)] grid gap-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] lg:gap-16">
          <Reveal>
            <h3 className="text-h3 font-bold text-gray-700">Overview</h3>
            <p className="mt-4 text-body text-gray-500">{project.overview}</p>
            <h3 className="mt-10 text-h3 font-bold text-gray-700">Results</h3>
            <ul className="mt-4 grid gap-3">
              {project.results.map((r) => (
                <li key={r} className="flex items-center gap-3 text-body text-gray-500">
                  <span className="size-2 shrink-0 rounded-full bg-brand" aria-hidden />
                  {r}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1} className="h-fit rounded-card bg-gray-100 p-[clamp(1.5rem,2.5vw,2.25rem)]">
            <dl className="grid gap-5">
              {facts.map(([label, value]) => (
                <div key={label}>
                  <dt className="text-body text-gray-500">{label}</dt>
                  <dd className="text-h4 font-bold text-gray-700">{value}</dd>
                </div>
              ))}
            </dl>
            {project.link && (
              <PillLink href={project.link} className="mt-6">
                Visit <ArrowUpRight className="size-6" />
              </PillLink>
            )}
          </Reveal>
        </div>

        <div className="mt-[clamp(2.5rem,5vw,4.5rem)] flex flex-wrap items-center justify-between gap-4 border-t border-gray-200 pt-8">
          <Link href="/projects" className="text-body font-medium text-gray-700 hover:text-brand">
            All projects
          </Link>
          <Link href={`/projects/${next.slug}`} className="flex items-center gap-2 text-body font-bold text-brand">
            Next: {next.name} <ArrowUpRight className="size-6" />
          </Link>
        </div>
      </article>
    </main>
  );
}
