import Image from "next/image";
import { site } from "@/content/site";
import { DarkPanel, Shapes } from "./DarkPanel";

const rings = [
  { src: "ring-1", inset: "0%" },
  { src: "ring-2", inset: "2.72%" },
  { src: "ring-3", inset: "5.77%" },
  { src: "ring-4", inset: "9.46%" },
  { src: "ring-5", inset: "13.14%" },
  { src: "ring-6", inset: "17.15%" },
];

/** Inner-page hero. Keeps the 1300:480 Figma proportions from 640px up and stacks below that. */
export function PageBanner({ accent, text }: { accent: string; text: string }) {
  return (
    <div className="shell mt-[clamp(1rem,2.8vw,2.5rem)]">
      <DarkPanel className="flex flex-col-reverse sm:block sm:aspect-[1300/480]">
        <Shapes dimmed tops={["30%", "10%", "14%"]} />

        <div className="relative mx-auto h-[250px] w-[300px] overflow-hidden sm:absolute sm:top-[2.5%] sm:left-[5.4%] sm:mx-0 sm:h-[130%] sm:w-[48%] sm:overflow-visible">
          <div className="relative aspect-square w-full">
            {rings.map((r) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img key={r.src} src={`/images/rings/${r.src}.svg`} alt="" className="absolute" style={{ inset: r.inset, width: `calc(100% - 2 * ${r.inset})`, height: `calc(100% - 2 * ${r.inset})` }} />
            ))}
            <div className="absolute top-[3.85%] left-[17.15%] aspect-[2/3] w-[52.9%]">
              <Image src={site.portraits.banner} alt={site.name} fill priority sizes="(max-width: 640px) 160px, 28vw" className="object-cover object-top" />
            </div>
          </div>
        </div>

        <h1 className="relative px-5 pt-10 pb-4 text-center text-[clamp(2.75rem,6.67vw,6rem)] leading-none font-semibold text-gray-25 sm:absolute sm:top-1/2 sm:right-[4%] sm:w-[46%] sm:-translate-y-1/2 sm:p-0 sm:text-right">
          <span className="text-brand">{accent}</span> {text}
        </h1>
      </DarkPanel>
    </div>
  );
}
