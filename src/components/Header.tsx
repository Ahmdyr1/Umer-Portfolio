"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { nav } from "@/content/site";
import { Logo } from "./ui";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const desktopLink = (item: { label: string; href: string }) => {
    const active = isActive(item.href);
    return (
      <Link
        key={item.href}
        href={item.href}
        aria-current={active ? "page" : undefined}
        className={`relative rounded-[60px] px-[clamp(0.75rem,2.5vw,2.5rem)] py-5 text-[clamp(1rem,1.39vw,1.25rem)] whitespace-nowrap text-white transition-colors ${
          active ? "font-bold" : "hover:text-brand-300"
        }`}
      >
        {active && (
          <motion.span
            layoutId="nav-pill"
            className="absolute inset-0 rounded-[60px] bg-brand"
            transition={{ type: "spring", stiffness: 380, damping: 32 }}
          />
        )}
        <span className="relative">{item.label}</span>
      </Link>
    );
  };

  return (
    <header className="shell sticky top-3 z-50 mt-3 lg:top-4 lg:mt-10">
      <div className="flex h-16 items-center justify-between rounded-[50px] border border-white bg-ink pr-2 pl-3 backdrop-blur-[7.5px] lg:h-[86px] lg:px-2.5">
        <Link href="/" className="lg:hidden" aria-label="Home">
          <Logo compact />
        </Link>

        <nav aria-label="Main" className="hidden w-full items-center justify-between lg:flex">
          {nav.left.map(desktopLink)}
          <Link href="/" aria-label="Home" className="px-2">
            <Logo compact />
          </Link>
          {nav.right.map(desktopLink)}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex size-12 items-center justify-center rounded-full bg-brand text-white lg:hidden"
        >
          {open ? <FiX className="size-6" /> : <FiMenu className="size-6" />}
        </button>
      </div>

      {open && (
        <motion.nav
          id="mobile-menu"
          aria-label="Mobile"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute inset-x-[var(--gutter)] top-full mt-2 grid gap-1 rounded-[28px] border border-white/20 bg-ink p-3 shadow-2xl lg:hidden"
        >
          {[...nav.left, ...nav.right].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={`rounded-full px-5 py-3 text-lg text-white ${isActive(item.href) ? "bg-brand font-bold" : "hover:bg-white/10"}`}
            >
              {item.label}
            </Link>
          ))}
        </motion.nav>
      )}
    </header>
  );
}
