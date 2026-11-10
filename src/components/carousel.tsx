"use client";

import type { EmblaCarouselType } from "embla-carousel";
import { useCallback, useEffect, useState } from "react";

export function useCarouselState(api: EmblaCarouselType | undefined) {
  const [selected, setSelected] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;
    const sync = () => {
      setSelected(api.selectedScrollSnap());
      setCount(api.scrollSnapList().length);
    };
    sync();
    api.on("select", sync).on("reInit", sync);
    return () => {
      api.off("select", sync).off("reInit", sync);
    };
  }, [api]);

  const scrollTo = useCallback((i: number) => api?.scrollTo(i), [api]);
  return { selected, count, scrollTo };
}

export function Dots({
  count,
  selected,
  onSelect,
  label,
}: {
  count: number;
  selected: number;
  onSelect: (i: number) => void;
  label: string;
}) {
  return (
    <div className="flex items-center justify-center" role="group" aria-label={label}>
      {Array.from({ length: count }, (_, i) => (
        <button
          key={i}
          type="button"
          onClick={() => onSelect(i)}
          aria-label={`Show item ${i + 1}`}
          aria-current={i === selected ? "true" : undefined}
          className="flex h-8 items-center px-[5.5px]"
        >
          <span
            className={`block h-[15px] rounded-[20px] transition-all duration-300 ${
              i === selected ? "w-[60px] bg-brand" : "w-[15px] bg-gray-200"
            }`}
          />
        </button>
      ))}
    </div>
  );
}
