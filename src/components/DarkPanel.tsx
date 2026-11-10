import Image from "next/image";
import type { CSSProperties, ReactNode } from "react";

const shape = "/images/decor/shape.png";

/** The three floating 3D shapes, positioned in percentages of the panel. */
const shapes: Array<{ style: CSSProperties; className: string }> = [
  { style: { left: "66.25%", top: "var(--shape-a-top)", width: "60.6%" }, className: "" },
  { style: { left: "38.4%", top: "var(--shape-b-top)", width: "12.56%", transform: "rotate(-146.4deg)" }, className: "hidden blur-[2.5px] lg:block" },
  { style: { left: "-7.3%", top: "var(--shape-c-top)", width: "30%", transform: "rotate(151.66deg)" }, className: "hidden blur-[1.5px] lg:block" },
];

export function Shapes({ dimmed = false, tops }: { dimmed?: boolean; tops: [string, string, string] }) {
  const vars = { "--shape-a-top": tops[0], "--shape-b-top": tops[1], "--shape-c-top": tops[2] } as CSSProperties;
  return (
    <div aria-hidden style={vars} className={`pointer-events-none absolute inset-0 overflow-hidden ${dimmed ? "opacity-50" : ""}`}>
      {shapes.map((s, i) => (
        <div key={i} style={s.style} className={`absolute aspect-square ${s.className}`}>
          <Image src={shape} alt="" fill sizes="(max-width: 768px) 60vw, 900px" className="object-cover" />
        </div>
      ))}
    </div>
  );
}

export function DarkPanel({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`relative isolate overflow-hidden rounded-panel bg-ink ${className}`}>
      <Image src="/images/decor/texture.png" alt="" fill sizes="100vw" className="-z-10 object-cover opacity-20" />
      {children}
    </section>
  );
}
