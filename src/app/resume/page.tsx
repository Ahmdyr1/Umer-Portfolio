import type { Metadata } from "next";
import { FiDownload } from "react-icons/fi";
import { Reveal } from "@/components/motion";
import { PageBanner } from "@/components/PageBanner";
import { Skills, WorkExperience } from "@/components/sections";
import { education, resumeSummary, site } from "@/content/site";

export const metadata: Metadata = { title: "Resume" };

export default function ResumePage() {
  return (
    <main>
      <PageBanner accent="My" text="Resume" />
      <section className="shell flex flex-col items-start gap-6 pt-[clamp(2.5rem,4vw,3.5rem)] lg:flex-row lg:items-center lg:justify-between">
        <p className="max-w-[760px] text-lead text-gray-700">{resumeSummary}</p>
        {site.resumePdf && (
          <a href={site.resumePdf} download className="inline-flex items-center gap-2 rounded-[60px] bg-brand px-10 py-5 text-body font-bold whitespace-nowrap text-white">
            <FiDownload className="size-6" aria-hidden /> Download CV
          </a>
        )}
      </section>
      <WorkExperience />
      <section className="rounded-panel bg-gray-100 py-[clamp(3.5rem,6vw,5.5rem)]">
        <div className="shell">
          <h2 className="text-center text-h1 leading-none font-semibold text-gray-700">
            My <span className="text-brand">Education</span>
          </h2>
          <div className="mt-[clamp(2rem,4vw,3.5rem)] grid gap-6 md:grid-cols-2">
            {education.map((e, i) => (
              <Reveal key={i} delay={i * 0.08} className="rounded-card bg-white p-[clamp(1.5rem,2.5vw,2.25rem)]">
                <h3 className="text-h3 leading-tight font-bold text-gray-700">{e.degree}</h3>
                <p className="mt-2 text-lead text-gray-500">{e.school}</p>
                <p className="mt-1 text-body text-gray-400">{e.period}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <Skills />
    </main>
  );
}
