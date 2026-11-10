"use client";

import useEmblaCarousel from "embla-carousel-react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/content/projects";
import { Dots, useCarouselState } from "./carousel";
import { ArrowUpRight, Stars, Tag } from "./ui";

export function ServicesCarousel({ services }: { services: Array<{ title: string; image: string }> }) {
  const [ref, api] = useEmblaCarousel({ loop: true, align: "start" });
  const { selected, scrollTo } = useCarouselState(api);
  // Three cards fill the desktop view, so looping needs more slides than services.
  const slides = [...services, ...services];

  return (
    <>
      <div ref={ref} className="overflow-hidden">
        <div className="-ml-[25.5px] flex touch-pan-y">
          {slides.map((s, i) => (
            <div key={`${s.title}-${i}`} className="min-w-0 flex-[0_0_88%] pl-[25.5px] xs:flex-[0_0_70%] md:flex-[0_0_50%] lg:flex-[0_0_33.3333%]">
              <Link href="/projects" className="group @container relative block aspect-[416/508]" aria-label={s.title}>
                <div className="card-mask absolute inset-0 bg-[#686868]/20 backdrop-blur-[15px]" />
                <div className="card-mask absolute inset-0 overflow-hidden">
                  <div className="absolute top-[31.1%] left-[10.6%] h-[64.8%] w-[78.8%] rounded-[8.4cqw] bg-[#757575] opacity-50" />
                  <div className="absolute top-[35.4%] left-[5%] h-[64.8%] w-[90%] rounded-[8.4cqw] bg-[#9e9d9d]" />
                  <div className="absolute top-[39.8%] bottom-0 left-0 w-full overflow-hidden rounded-[8.4cqw]">
                    <Image src={s.image} alt="" fill sizes="(max-width: 768px) 88vw, 416px" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <p className="absolute top-[8.66%] right-0 left-0 px-[8.9cqw] text-[7.7cqw] leading-tight font-medium text-white">{s.title}</p>
                  <div className="absolute top-[20.7%] h-0.5 w-full bg-gray-50/30" />
                </div>
                <span className="absolute right-0 bottom-0 flex aspect-square w-[27.4%] items-center justify-center rounded-full bg-gray-800 text-white transition-colors duration-300 group-hover:bg-brand">
                  <ArrowUpRight className="size-[63%] transition-transform duration-300 group-hover:rotate-45" />
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-[clamp(1.5rem,2.7vw,2.4375rem)]">
        <Dots count={services.length} selected={selected % services.length} onSelect={scrollTo} label="Services" />
      </div>
    </>
  );
}

export function PortfolioShowcase({ projects }: { projects: Project[] }) {
  const [ref, api] = useEmblaCarousel({ loop: true, align: "start" });
  const { selected, count, scrollTo } = useCarouselState(api);
  const active = projects[selected] ?? projects[0];

  return (
    <div>
      <div ref={ref} className="overflow-hidden">
        <div className="-ml-6 flex touch-pan-y">
          {projects.map((p) => (
            <div key={p.slug} className="min-w-0 flex-[0_0_100%] pl-6 md:flex-[0_0_50%]">
              <Link href={`/projects/${p.slug}`} className="group relative block aspect-[633/371] overflow-hidden rounded-[20px] bg-white">
                <Image src={p.cover} alt="" fill unoptimized={p.cover.endsWith(".svg")} sizes="(max-width: 768px) 100vw, 633px" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                <span className="absolute inset-0 bg-[linear-gradient(196.75deg,rgba(0,0,0,0)_47.4%,rgba(0,0,0,0.36)_76.4%,rgba(0,0,0,0.5)_89.2%)]" />
                <span className="absolute top-2.5 right-2.5 flex size-[clamp(3rem,4.44vw,4rem)] items-center justify-center rounded-full border border-brand p-[15px] transition-colors group-hover:bg-white">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/icons/arrow-light.svg" alt="" className="size-full -rotate-90" />
                </span>
                <span className="absolute bottom-5 left-5 text-[clamp(2.5rem,4.86vw,4.375rem)] leading-none font-bold text-brand-25">{p.name}</span>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-[clamp(1.5rem,3.3vw,3rem)]">
        <Dots count={count} selected={selected} onSelect={scrollTo} label="Projects" />
      </div>

      <motion.div
        key={active.slug}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mt-[clamp(1.5rem,3.3vw,3rem)] flex flex-col items-center"
      >
        <div className="flex flex-wrap justify-center gap-2.5 lg:gap-3.5">
          {active.tags.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
        <Link href={`/projects/${active.slug}`} className="group mt-[clamp(1.5rem,3.3vw,3rem)] flex items-end justify-center gap-[18px]">
          <h3 className="text-center text-h2 leading-tight font-bold text-gray-700">{active.title}</h3>
          <span className="flex size-[clamp(2.75rem,4vw,3.625rem)] shrink-0 items-center justify-center rounded-full bg-brand p-2.5 text-white transition-transform group-hover:rotate-45">
            <ArrowUpRight className="size-full" />
          </span>
        </Link>
        <p className="mt-6 max-w-[742px] text-center text-body text-gray-700">{active.excerpt}</p>
      </motion.div>
    </div>
  );
}

export type GlassItem = { name: string; role: string; text: string; rating?: number };

export function GlassCarousel({ items, label }: { items: GlassItem[]; label: string }) {
  const [ref, api] = useEmblaCarousel({ loop: true, align: "center" });
  const { selected, count, scrollTo } = useCarouselState(api);

  return (
    <>
      <div ref={ref} className="overflow-hidden">
        <div className="flex touch-pan-y">
          {items.map((item, i) => (
            <div key={i} className="min-w-0 flex-[0_0_min(49rem,88%)] px-3">
              <article className="relative flex h-full flex-col gap-3.5 overflow-hidden rounded-3xl border border-white/20 bg-white/14 p-[21px] backdrop-blur-sm">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/icons/quote-down.svg" alt="" className="absolute top-3 right-3 size-[clamp(3.5rem,8.9vw,8rem)]" />
                <div className="relative flex items-center gap-3">
                  <span className="flex size-[55px] shrink-0 items-center justify-center rounded-full bg-brand text-lg font-bold text-white" aria-hidden>
                    {item.name
                      .split(" ")
                      .map((w) => w[0])
                      .join("")
                      .slice(0, 2)}
                  </span>
                  <div className="text-gray-25">
                    <p className="text-[clamp(1.25rem,1.63vw,1.469rem)] font-bold">{item.name}</p>
                    <p className="text-[clamp(1rem,1.27vw,1.1425rem)]">{item.role}</p>
                  </div>
                </div>
                {item.rating !== undefined && (
                  <div className="relative flex items-center gap-[5px]">
                    <Stars />
                    <span className="sr-only">Rating:</span>
                    <span className="text-[clamp(1.25rem,1.78vw,1.6rem)] font-medium text-gray-25">{item.rating.toFixed(1)}</span>
                  </div>
                )}
                <p className="relative text-body text-gray-50">{item.text}</p>
              </article>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-8">
        <Dots count={count} selected={selected} onSelect={scrollTo} label={label} />
      </div>
    </>
  );
}

export function Timeline({ items }: { items: Array<{ company: string; period: string; role: string; summary: string }> }) {
  return (
    <ol>
      {items.map((item, i) => (
        <li
          key={i}
          className="relative grid grid-cols-[48px_minmax(0,1fr)] gap-x-4 pb-[clamp(2.5rem,7vw,6.375rem)] last:pb-0 lg:grid-cols-3 lg:gap-x-0"
        >
          {i < items.length - 1 && (
            <motion.span
              aria-hidden
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="absolute top-12 bottom-0 left-[22.5px] origin-top border-l-[3px] border-dashed border-gray-800 lg:left-1/2 lg:-translate-x-1/2"
            />
          )}
          <span className="col-start-1 row-span-2 row-start-1 lg:col-start-2 lg:row-span-1 lg:justify-self-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`/images/decor/dot-${i % 2 ? "navy" : "orange"}.svg`} alt="" className="size-12" />
          </span>
          <div className="col-start-2 row-start-1 lg:col-start-1">
            <h3 className="text-h3 leading-tight font-bold text-gray-700">{item.company}</h3>
            <p className="mt-2 text-lead text-gray-400 lg:mt-3.5">{item.period}</p>
          </div>
          <div className="col-start-2 row-start-2 mt-4 lg:col-start-3 lg:row-start-1 lg:mt-0">
            <h3 className="text-h3 leading-tight font-bold text-gray-700">{item.role}</h3>
            <p className="mt-2 max-w-[444px] text-body font-medium text-gray-400 lg:mt-3.5">{item.summary}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
