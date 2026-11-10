import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/site";
import type { CardItem } from "@/content/types";
import { ArrowUpRight, Tag } from "./ui";

/** Notched-image card used by the Projects and Blogs grids. */
export function ContentCard({ item }: { item: CardItem }) {
  return (
    <article className="group">
      <Link href={item.href} className="block">
        <div className="relative aspect-[416/431]">
          <div className="media-mask absolute inset-0 overflow-hidden">
            <Image
              src={item.image}
              alt=""
              fill
              unoptimized={item.image.endsWith(".svg")}
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 416px"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <span className="absolute right-0 bottom-0 flex aspect-square w-[27.4%] items-center justify-center rounded-full bg-gray-800 text-white transition-colors duration-300 group-hover:bg-brand">
            <ArrowUpRight className="size-[63%] transition-transform duration-300 group-hover:rotate-45" />
          </span>
        </div>
        <div className="mt-[clamp(1.25rem,2.5vw,2.25rem)]">
          <Tag>{item.tag}</Tag>
        </div>
        <ul className="mt-5 flex flex-wrap gap-x-8 gap-y-1 font-tag text-[clamp(0.9375rem,0.85rem+0.35vw,1.25rem)] tracking-normal text-gray-700">
          {[site.name, item.date].map((text) => (
            <li key={text} className="flex items-center gap-3">
              <span className="size-2 rounded-full bg-brand" aria-hidden />
              {text}
            </li>
          ))}
        </ul>
        <h3 className="mt-5 text-h4 leading-[1.3] text-gray-700 transition-colors group-hover:text-brand">{item.title}</h3>
      </Link>
    </article>
  );
}
