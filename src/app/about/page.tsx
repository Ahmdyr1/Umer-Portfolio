import type { Metadata } from "next";
import { PageBanner } from "@/components/PageBanner";
import { AboutIntro, Achievements, GlassSection, Skills, SplitFeature, WorkExperience } from "@/components/sections";
import { academics, certifications, certificationsIntro, site } from "@/content/site";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <main>
      <PageBanner accent="About" text="Me" />
      <AboutIntro />
      <SplitFeature
        heading={
          <>
            My <span className="text-brand">Academics</span>
          </>
        }
        text={academics.text}
        stats={academics.stats}
        portrait={site.portraits.why}
      />
      <WorkExperience />
      <Skills />
      <Achievements />
      <GlassSection
        label="Certifications"
        intro={certificationsIntro}
        items={certifications}
        heading={
          <>
            <span className="text-brand">My</span> Certifications
          </>
        }
      />
    </main>
  );
}
