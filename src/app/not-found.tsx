import { PillLink } from "@/components/ui";

export default function NotFound() {
  return (
    <main className="shell flex flex-col items-center py-32 text-center">
      <h1 className="text-display leading-none font-semibold text-ink">
        4<span className="text-brand">0</span>4
      </h1>
      <p className="mt-4 mb-8 text-body text-gray-500">That page doesn&rsquo;t exist.</p>
      <PillLink href="/">Back home</PillLink>
    </main>
  );
}
