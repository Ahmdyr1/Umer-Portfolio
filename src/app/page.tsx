import { BlogPreview, Discuss, GlassSection, Hero, Marquee, Portfolio, Services, SplitFeature, WorkExperience } from "@/components/sections";
import { postCards } from "@/content/posts";
import { projects } from "@/content/projects";
import { site, testimonials, testimonialsIntro, whyHire } from "@/content/site";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Services />
      <WorkExperience />
      <SplitFeature
        heading={
          <>
            Why <span className="text-brand">Hire me</span>?
          </>
        }
        text={whyHire.text}
        stats={whyHire.stats}
        portrait={site.portraits.why}
      />
      <Portfolio projects={projects.slice(0, 4)} />
      <GlassSection
        label="Testimonials"
        intro={testimonialsIntro}
        items={testimonials}
        heading={
          <>
            Testimonials That
            <br />
            Speak to <span className="text-brand">My Results</span>
          </>
        }
      />
      <Discuss />
      <Marquee />
      <BlogPreview posts={postCards.slice(0, 3)} />
    </main>
  );
}
