import type { Metadata } from "next";
import { ListingPage } from "@/components/ListingPage";
import { PageBanner } from "@/components/PageBanner";
import { postCards } from "@/content/posts";

export const metadata: Metadata = { title: "Blogs" };

export default function BlogsPage() {
  return (
    <main>
      <PageBanner accent="My" text="Blogs" />
      <ListingPage heading="Blogs" items={postCards} filters={["Topic"]} />
    </main>
  );
}
