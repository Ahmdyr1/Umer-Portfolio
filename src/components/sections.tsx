/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { FaAward, FaShieldHalved, FaStar } from "react-icons/fa6";
import { HiOutlineBriefcase, HiOutlineCube, HiOutlineUserGroup } from "react-icons/hi2";
import type { Project } from "@/content/projects";
import { achievements, aboutIntro, experience, marquee, services, servicesIntro, site, skills, trust } from "@/content/site";
import type { CardItem } from "@/content/types";
import { ContentCard } from "./ContentCard";
import { DarkPanel, Shapes } from "./DarkPanel";
import { DiscussForm } from "./forms";
import { GlassCarousel, PortfolioShowcase, ServicesCarousel, Timeline, type GlassItem } from "./interactive";
import { Counter, Reveal } from "./motion";
import { ArrowUpRight, PillLink, Stars, Tag } from "./ui";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="shell relative flex flex-col items-center pt-[clamp(1.25rem,2.57vw,2.3125rem)]">
        <Reveal className="relative z-0 flex w-full max-w-[913px] flex-col items-center gap-2.5">
          <span className="relative mt-[19px] inline-flex h-[45px] items-center rounded-[38px] border-[1.275px] border-ink bg-white/10 px-[25.5px] text-body font-medium text-ink">
            Hello!
            <img src="/images/decor/scribble-hello.svg" alt="" className="absolute -top-[19px] -right-[23px] h-[28.5px] w-[27.5px] max-w-none" />
          </span>
          <h1 className="text-center text-display leading-none font-semibold text-ink">
            I&rsquo;m <span className="text-brand">{site.firstName}</span>,<br />
            {site.title}
          </h1>
          <img
            src="/images/decor/scribble-hero.svg"
            alt=""
            className="absolute top-[88%] left-[3.4%] hidden w-[6vw] max-w-[72px] rotate-[-167.61deg] md:block"
          />
        </Reveal>

        <Reveal delay={0.15} y={40} className="relative z-10 mt-3 lg:mt-[-3.9vw] min-[1436px]:mt-[-3.5rem] aspect-[2/3] w-[clamp(15.5rem,27.8vw,25rem)]">
          <img src="/images/decor/hero-ellipse.svg" alt="" className="absolute bottom-0 left-1/2 w-[203%] max-w-none -translate-x-1/2" />
          <Image src={site.portraits.hero} alt={site.name} fill priority sizes="(max-width: 1024px) 248px, 400px" className="object-cover" />
          <div className="absolute bottom-[clamp(0.75rem,3.2vw,2.875rem)] left-1/2 z-20 flex w-[min(367px,calc(100vw-2rem))] -translate-x-1/2 items-center gap-2.5 rounded-[50px] border border-white/40 bg-white/10 p-2 backdrop-blur-[10px] lg:p-2.5">
            <Link
              href="/projects"
              className="flex flex-1 items-center justify-center gap-1 rounded-[60px] border-[0.5px] border-gray-300 bg-brand px-3 py-2 text-[clamp(1.125rem,1.78vw,1.6rem)] font-medium whitespace-nowrap text-white transition-colors hover:bg-[#f47320]"
            >
              Portfolio <ArrowUpRight className="size-8 lg:size-[42px]" />
            </Link>
            <Link
              href="/contact"
              className="flex-1 rounded-[60px] px-3 py-2 text-center text-[clamp(1.125rem,1.78vw,1.6rem)] font-light whitespace-nowrap text-white transition-colors hover:bg-white/15"
            >
              Hire me
            </Link>
          </div>
        </Reveal>

        <div className="flex w-full flex-col gap-8 py-10 sm:flex-row sm:items-start sm:justify-between lg:contents">
          <Reveal delay={0.25} className="flex max-w-[371px] flex-col gap-6 lg:absolute lg:top-[44%] lg:left-[var(--gutter)] lg:max-w-[25.8vw]">
            <img src="/images/icons/quote-up.svg" alt="" className="size-9" />
            <p className="text-body font-medium text-gray-700">{site.heroQuote}</p>
          </Reveal>
          <Reveal delay={0.3} className="flex flex-col gap-5 sm:items-end lg:absolute lg:top-[45%] lg:right-[var(--gutter)]">
            <Stars />
            <p className="flex flex-col gap-[5px] text-ink sm:items-end">
              <span className="text-[clamp(2.25rem,3.26vw,2.9375rem)] leading-none font-bold">
                <Counter value={site.yearsExperience} pad={2} /> Years
              </span>
              <span className="text-body leading-none">Experience</span>
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Services() {
  return (
    <DarkPanel id="services" className="panel-y">
      <Shapes tops={["22%", "11%", "14%"]} />
      <div className="shell relative">
        <Reveal className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="text-h2 leading-none font-semibold text-gray-25">
            My <span className="text-brand">Services</span>
          </h2>
          <p className="max-w-[576px] text-body font-medium text-white">{servicesIntro}</p>
        </Reveal>
        <div className="mt-[clamp(2rem,6.67vw,6rem)]">
          <ServicesCarousel services={services} />
        </div>
      </div>
    </DarkPanel>
  );
}

export function WorkExperience() {
  return (
    <section className="shell pb-[clamp(3rem,6vw,5rem)]">
      <Reveal className="py-[clamp(3rem,5.9vw,5.3125rem)] text-center">
        <h2 className="text-h1 leading-none font-semibold text-gray-700">
          My <span className="text-brand">Work Experience</span>
        </h2>
      </Reveal>
      <Timeline items={experience} />
    </section>
  );
}

export function SplitFeature({
  heading,
  text,
  stats,
  portrait,
}: {
  heading: ReactNode;
  text: string;
  stats: ReadonlyArray<{ value: number; suffix: string; label: string }>;
  portrait: string;
}) {
  return (
    <section className="rounded-panel bg-gray-100 py-[clamp(3.5rem,8.47vw,7.625rem)]">
      <div className="shell flex flex-col items-center gap-8 lg:flex-row lg:justify-between">
        <Reveal className="relative aspect-square w-full max-w-[600px] shrink-0 lg:w-[46.2%]">
          <div className="absolute top-[21%] left-[15.3%] h-[79%] w-[69.3%] rounded-[clamp(2rem,4.17vw,3.75rem)] bg-brand-300" />
          <Image src={portrait} alt={site.name} fill sizes="(max-width: 1024px) 100vw, 600px" className="object-cover" />
        </Reveal>
        <Reveal delay={0.1} className="flex w-full flex-1 flex-col items-start gap-[clamp(1.5rem,3.26vw,2.9375rem)]">
          <h2 className="text-h1 leading-none font-bold text-gray-700">{heading}</h2>
          <p className="max-w-[444px] text-body text-gray-400">{text}</p>
          <div className="grid w-full grid-cols-2 gap-2.5">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col gap-2.5">
                <p className="text-[clamp(1.75rem,2.5vw,2.25rem)] font-semibold text-gray-800">
                  <Counter value={s.value} suffix={s.suffix} pad={2} />
                </p>
                <p className="text-body text-gray-500">{s.label}</p>
              </div>
            ))}
          </div>
          <Link
            href="/contact"
            className="rounded-[32px] border border-[#151515] px-[clamp(2.25rem,4.1vw,3.6875rem)] py-[clamp(1.125rem,2.3vw,2.0625rem)] text-h4 font-bold text-[#151515] transition-colors duration-300 hover:bg-[#151515] hover:text-white"
          >
            Hire me
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

function SectionHead({ children, href }: { children: ReactNode; href: string }) {
  return (
    <Reveal className="flex items-center justify-between gap-6">
      <h2 className="max-w-[643px] text-h1 leading-[1.17] font-bold text-gray-700">{children}</h2>
      <PillLink href={href} className="shrink-0">
        See All
      </PillLink>
    </Reveal>
  );
}

export function Portfolio({ projects }: { projects: Project[] }) {
  return (
    <section className="shell section-y">
      <SectionHead href="/projects">
        Let&rsquo;s have a look at my <span className="text-brand">Portfolio</span>
      </SectionHead>
      <div className="mt-[clamp(1.75rem,3.3vw,3rem)]">
        <PortfolioShowcase projects={projects} />
      </div>
    </section>
  );
}

export function GlassSection({ heading, intro, items, label }: { heading: ReactNode; intro: string; items: GlassItem[]; label: string }) {
  return (
    <DarkPanel className="panel-y">
      <div className="shell">
        <Reveal className="relative mx-auto flex max-w-[742px] flex-col items-center gap-3.5 text-center">
          <h2 className="relative text-h2 leading-[1.17] font-semibold text-gray-25">
            {heading}
            <img src="/images/decor/scribble-white.svg" alt="" className="absolute -top-2 -right-7 hidden h-[28.5px] w-[27.5px] max-w-none md:block" />
          </h2>
          <p className="text-body text-gray-50">{intro}</p>
          <img src="/images/decor/spark-a.svg" alt="" className="absolute top-[110px] -right-[12%] hidden size-[25.5px] lg:block" />
          <img src="/images/decor/spark-b.svg" alt="" className="absolute top-[100%] -left-[6%] hidden size-[26px] rotate-[35deg] lg:block" />
        </Reveal>
      </div>
      <div className="mt-[clamp(2.5rem,6.67vw,6rem)]">
        <GlassCarousel items={items} label={label} />
      </div>
    </DarkPanel>
  );
}

const trustIcons = [FaStar, FaAward, FaShieldHalved];

export function Discuss() {
  return (
    <section className="shell py-[clamp(3rem,6.8vw,6.125rem)]">
      <Reveal className="mx-auto max-w-[832px]">
        <h2 className="mx-auto max-w-[799px] text-center text-h1 leading-[1.17] font-bold text-gray-700">
          Have an Awesome Project Idea? <span className="text-brand">Let&rsquo;s Discuss</span>
        </h2>
        <div className="mt-2.5 lg:mt-3">
          <DiscussForm />
        </div>
        <ul className="mt-4 flex flex-col items-center gap-2 px-[31px] text-[clamp(1rem,0.95rem+0.2vw,1.125rem)] text-gray-800 sm:flex-row sm:justify-between">
          {trust.map((t, i) => {
            const Icon = trustIcons[i];
            return (
              <li key={t} className="flex items-center gap-1.5">
                <Icon className="size-5" aria-hidden /> {t}
              </li>
            );
          })}
        </ul>
      </Reveal>
    </section>
  );
}

function Sparkle() {
  return (
    <svg className="size-[0.7em] shrink-0 text-brand" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 0c1 7.5 4.5 11 12 12-7.5 1-11 4.5-12 12-1-7.5-4.5-11-12-12 7.5-1 11-4.5 12-12Z" />
    </svg>
  );
}

export function Marquee() {
  const row = [...marquee, ...marquee];
  return (
    <section className="relative h-[clamp(5.5rem,10.2vw,9.1875rem)] overflow-hidden rounded-[20px] bg-marquee" aria-label="Areas of work">
      <div className="absolute top-[57%] left-[-5%] flex h-[46%] w-[110%] -translate-y-1/2 -rotate-[2.5deg] items-center overflow-hidden bg-white">
        <div className="animate-marquee flex w-max text-[clamp(1.5rem,3.1vw,2.75rem)] whitespace-nowrap text-ink">
          {[0, 1].map((copy) => (
            <ul key={copy} className="flex items-center" aria-hidden={copy === 1}>
              {row.map((word, i) => (
                <li key={i} className="flex items-center gap-[0.4em] pr-[0.4em]">
                  {word} <Sparkle />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}

export function BlogPreview({ posts }: { posts: CardItem[] }) {
  return (
    <section className="shell section-y">
      <SectionHead href="/blogs">
        From my
        <br />
        blog post
      </SectionHead>
      <div className="mt-[clamp(1.75rem,3.3vw,3rem)] grid gap-x-[25.5px] gap-y-10 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((p, i) => (
          <Reveal key={p.href} delay={i * 0.08} className={i === 2 ? "md:max-lg:hidden" : ""}>
            <ContentCard item={p} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

const collageIcons = [HiOutlineCube, HiOutlineUserGroup];

export function AboutIntro() {
  const [a, b, c] = aboutIntro.cards;
  const IconA = collageIcons[0];
  const IconC = collageIcons[1];
  const card = "absolute rounded-[3.6cqw] border-[1.5px] border-gray-800 bg-white shadow-[0_18px_30px_-18px_rgba(16,24,40,0.35)]";
  const icon = "flex size-[9.6cqw] shrink-0 items-center justify-center rounded-[2.2cqw] bg-brand text-white";

  return (
    <section className="shell flex flex-col gap-10 py-[clamp(2.5rem,2.8vw,2.5rem)] lg:flex-row lg:items-center lg:justify-between">
      <Reveal className="@container relative aspect-[508/473] w-full max-w-[508px] shrink-0 lg:w-[39%]">
        <div className="absolute top-[10.1%] left-[15.4%] h-[80.3%] w-[66.9%] rounded-[3.6cqw] bg-brand-300" />
        <div className={`${card} top-0 left-[24.6%] flex items-center gap-[3cqw] p-[3.5cqw]`}>
          <span className={icon}>
            <IconA className="size-[62%]" aria-hidden />
          </span>
          <div className="text-[3.9cqw] leading-tight text-gray-800">
            <p className="text-[4.9cqw] font-bold">
              <Counter value={a.value} suffix={a.suffix} pad={2} />
            </p>
            <p className="font-medium whitespace-nowrap">{a.label}</p>
          </div>
        </div>
        <div className={`${card} top-[29.8%] left-[64.8%] flex w-[35.2%] flex-col items-center gap-[2cqw] p-[3.5cqw] text-center`}>
          <svg className="size-[15.7cqw]" viewBox="0 0 80 80" fill="none" aria-hidden>
            <circle cx="40" cy="40" r="35" stroke="#e4e7ec" strokeWidth="8" />
            <path d="M40 5a35 35 0 0 1 10 68.5" stroke="#fd853a" strokeWidth="8" strokeLinecap="round" />
          </svg>
          <p className="text-[4.9cqw] leading-none font-bold text-gray-800">
            <Counter value={b.value} suffix={b.suffix} pad={2} />
          </p>
          <p className="text-[3.9cqw] leading-tight font-medium text-gray-800">{b.label}</p>
        </div>
        <div className={`${card} bottom-0 left-0 flex items-center gap-[2.5cqw] p-[3.5cqw]`}>
          <span className={`${icon} rounded-full`}>
            <IconC className="size-[62%]" aria-hidden />
          </span>
          <div className="text-[3.9cqw] leading-tight font-medium text-gray-800">
            <p>{c.label}</p>
            <p className="text-[4.9cqw] font-bold">
              <Counter value={c.value} suffix={c.suffix} pad={2} />
            </p>
          </div>
        </div>
      </Reveal>
      <Reveal delay={0.1} className="w-full max-w-[688px]">
        <p className="text-body text-gray-800">{aboutIntro.eyebrow}</p>
        <h2 className="mt-3 max-w-[519px] text-h3 leading-[1.17] font-bold text-ink">{aboutIntro.title}</h2>
        <p className="mt-4 max-w-[640px] text-body font-medium text-gray-800">{aboutIntro.body}</p>
        <PillLink href="/projects" className="mt-8">
          See All
        </PillLink>
      </Reveal>
    </section>
  );
}

export function Skills() {
  return (
    <section className="shell section-y">
      <Reveal className="text-center">
        <h2 className="text-h1 leading-none font-semibold text-gray-700">
          My <span className="text-brand">Skills</span>
        </h2>
      </Reveal>
      <div className="mt-[clamp(2rem,4vw,3.5rem)] grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((group, i) => (
          <Reveal key={group.group} delay={i * 0.08} className="rounded-card border border-gray-200 p-[clamp(1.5rem,2.5vw,2.25rem)]">
            <h3 className="text-h4 font-bold text-gray-700">{group.group}</h3>
            <div className="mt-5 flex flex-wrap gap-2.5">
              {group.items.map((s) => (
                <Tag key={s}>{s}</Tag>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function Achievements() {
  return (
    <section className="shell pb-[clamp(3.5rem,6.74vw,6.0625rem)]">
      <Reveal className="text-center">
        <h2 className="text-h1 leading-none font-semibold text-gray-700">
          My <span className="text-brand">Achievements</span>
        </h2>
      </Reveal>
      <div className="mt-[clamp(2rem,4vw,3.5rem)] grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {achievements.map((a, i) => (
          <Reveal key={i} delay={i * 0.08} className="rounded-card bg-gray-100 p-[clamp(1.5rem,2.5vw,2.25rem)]">
            <span className="flex size-14 items-center justify-center rounded-full bg-brand text-white">
              <HiOutlineBriefcase className="size-7" aria-hidden />
            </span>
            <p className="mt-5 text-body text-gray-500">{a.year}</p>
            <h3 className="mt-1 text-h4 font-bold text-gray-700">{a.title}</h3>
            <p className="mt-2 text-body text-gray-500">{a.text}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
