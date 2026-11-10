import Link from "next/link";
import type { ReactNode } from "react";
import { site } from "@/content/site";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <span className="flex items-center gap-2.5">
      <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-brand text-base font-extrabold text-white lg:size-[46px] lg:text-xl">
        {site.initials}
      </span>
      <span
        className={`font-extrabold tracking-[0.05em] whitespace-nowrap text-white ${
          compact ? "text-lg lg:text-[clamp(1.125rem,1.95vw,1.75rem)]" : "text-xl lg:text-[28px]"
        }`}
      >
        {site.brand}
      </span>
    </span>
  );
}

export function ArrowUpRight({ className = "size-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 72 72" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M21 51L51 21M21 21H51V51" />
    </svg>
  );
}

export function PillLink({ href, children, className = "" }: { href: string; children: ReactNode; className?: string }) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-[60px] bg-brand px-[clamp(1.75rem,2.8vw,2.5rem)] py-[clamp(0.875rem,1.4vw,1.25rem)] text-body font-bold whitespace-nowrap text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#f47320] hover:shadow-[0_12px_24px_-10px_rgba(253,133,58,0.8)] ${className}`}
    >
      {children}
    </Link>
  );
}

export function Stars({ className = "size-6 lg:size-8" }: { className?: string }) {
  return (
    <span className="flex" aria-hidden>
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} className={`flex items-center justify-center ${className}`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/icons/star.svg" alt="" className="size-[84%]" />
        </span>
      ))}
    </span>
  );
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex rounded-3xl bg-gray-100 px-[clamp(1.25rem,2.2vw,2rem)] py-[clamp(0.625rem,1vw,0.9375rem)] font-tag text-[clamp(0.9375rem,0.85rem+0.35vw,1.25rem)] tracking-normal whitespace-nowrap text-black">
      {children}
    </span>
  );
}
