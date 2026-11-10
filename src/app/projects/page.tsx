import type { Metadata } from "next";
import { ListingPage } from "@/components/ListingPage";
import { PageBanner } from "@/components/PageBanner";
import { projectCards } from "@/content/projects";

export const metadata: Metadata = { title: "Projects" };

export default function ProjectsPage() {
  return (
    <main>
      <PageBanner accent="My" text="Projects" />
      <ListingPage heading="Projects" items={projectCards} filters={["Service", "Category"]} />
    </main>
  );
}
