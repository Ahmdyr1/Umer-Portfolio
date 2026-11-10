"use client";

import { useMemo, useRef, useState } from "react";
import { FiChevronDown, FiChevronLeft, FiChevronRight, FiSearch, FiSend } from "react-icons/fi";
import type { CardItem } from "@/content/types";
import { ContentCard } from "./ContentCard";

const PAGE_SIZE = 6;

const pagerButton =
  "inline-flex h-12 items-center gap-1 rounded-[60px] bg-brand px-5 text-body text-white transition-opacity disabled:cursor-not-allowed disabled:opacity-40 sm:h-16 sm:px-10";

export function ListingPage({ heading, items, filters }: { heading: string; items: CardItem[]; filters: string[] }) {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<Record<string, string>>({});
  const [page, setPage] = useState(1);
  const resultsRef = useRef<HTMLHeadingElement>(null);

  const options = useMemo(
    () => Object.fromEntries(filters.map((f) => [f, [...new Set(items.map((i) => i.facets[f]))].sort()])),
    [filters, items],
  );

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return items.filter(
      (item) =>
        (!q || `${item.title} ${item.tag} ${item.excerpt}`.toLowerCase().includes(q)) &&
        filters.every((f) => !selected[f] || item.facets[f] === selected[f]),
    );
  }, [items, filters, query, selected]);

  const pages = Math.max(1, Math.ceil(results.length / PAGE_SIZE));
  const current = Math.min(page, pages);
  const visible = results.slice((current - 1) * PAGE_SIZE, current * PAGE_SIZE);
  const scrollToResults = () => resultsRef.current?.scrollIntoView({ block: "start" });

  const goTo = (next: number) => {
    setPage(next);
    scrollToResults();
  };

  return (
    <div className="shell pt-[clamp(1.5rem,2.8vw,2.5rem)]">
      <div className="mx-auto flex max-w-[1255px] flex-col items-stretch justify-center gap-3 md:flex-row md:gap-5 lg:gap-10">
        <form
          role="search"
          onSubmit={(e) => {
            e.preventDefault();
            scrollToResults();
          }}
          className="flex h-16 w-full max-w-[832px] items-center rounded-[50px] border-2 border-[#e8eaef] bg-white px-2 md:flex-1"
        >
          <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#ffe6d5] text-brand">
            <FiSearch className="size-6" aria-hidden />
          </span>
          <label htmlFor="listing-search" className="sr-only">
            Search {heading}
          </label>
          <input
            id="listing-search"
            type="search"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setPage(1);
            }}
            placeholder="Search"
            className="min-w-0 flex-1 bg-transparent px-2 text-body outline-none placeholder:text-gray-800"
          />
          <button type="submit" aria-label="Search" className="flex size-12 shrink-0 items-center justify-center rounded-full bg-brand text-white">
            <FiSend className="size-5" />
          </button>
        </form>

        <div className="flex gap-3 lg:gap-5">
          {filters.map((f) => (
            <div key={f} className="relative flex-1 md:flex-none">
              <label htmlFor={`filter-${f}`} className="sr-only">
                Filter by {f}
              </label>
              <select
                id={`filter-${f}`}
                value={selected[f] ?? ""}
                onChange={(e) => {
                  setSelected((s) => ({ ...s, [f]: e.target.value }));
                  setPage(1);
                }}
                className="h-16 w-full cursor-pointer appearance-none rounded-[60px] bg-brand pr-12 pl-6 text-body text-white outline-offset-2 lg:pr-14 lg:pl-10 [&>option]:text-gray-800"
              >
                <option value="">{f}</option>
                {options[f].map((o) => (
                  <option key={o} value={o}>
                    {o}
                  </option>
                ))}
              </select>
              <FiChevronDown className="pointer-events-none absolute top-1/2 right-5 size-6 -translate-y-1/2 text-white lg:right-7" aria-hidden />
            </div>
          ))}
        </div>
      </div>

      <h2 ref={resultsRef} className="mt-[clamp(1.75rem,2.8vw,2.5rem)] scroll-mt-28 text-h1 font-bold text-gray-700 lg:text-[70px] lg:leading-[84px]">
        {heading}
      </h2>

      <p className="sr-only" role="status">
        {results.length} results
      </p>

      {visible.length > 0 ? (
        <div className="mt-[clamp(1.5rem,2.8vw,2.5rem)] grid gap-x-[25.5px] gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((item) => (
            <ContentCard key={item.href} item={item} />
          ))}
        </div>
      ) : (
        <p className="py-20 text-center text-body text-gray-500">Nothing matches that search. Try a different term or filter.</p>
      )}

      <nav aria-label="Pagination" className="mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-10">
        <button type="button" className={pagerButton} disabled={current <= 1} onClick={() => goTo(current - 1)}>
          <FiChevronLeft className="size-6" aria-hidden /> Previous
        </button>
        <span className="order-first w-full text-center text-lead whitespace-nowrap text-gray-700 xs:order-none xs:w-auto">
          Page {current} of {pages}
        </span>
        <button type="button" className={pagerButton} disabled={current >= pages} onClick={() => goTo(current + 1)}>
          Next <FiChevronRight className="size-6" aria-hidden />
        </button>
      </nav>
    </div>
  );
}
