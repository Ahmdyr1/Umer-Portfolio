import type { Metadata } from "next";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import { ContactForm } from "@/components/forms";
import { Reveal } from "@/components/motion";
import { PageBanner } from "@/components/PageBanner";
import { site } from "@/content/site";

export const metadata: Metadata = { title: "Contact" };

export default async function ContactPage({ searchParams }: { searchParams: Promise<{ email?: string | string[] }> }) {
  const { email } = await searchParams;
  const details = [
    { Icon: FiMail, label: site.email, href: `mailto:${site.email}` },
    { Icon: FiPhone, label: site.phone, href: `tel:${site.phone.replace(/\s/g, "")}` },
    { Icon: FiMapPin, label: site.location },
  ];

  return (
    <main>
      <PageBanner accent="Contact" text="Me" />
      <section className="shell section-y grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.5fr)] lg:gap-16">
        <Reveal>
          <h2 className="text-h1 leading-[1.1] font-bold text-gray-700">
            Let&rsquo;s <span className="text-brand">Discuss</span>
          </h2>
          <p className="mt-4 text-body text-gray-500">Tell me about your project, role or idea and I&rsquo;ll get back to you.</p>
          <ul className="mt-8 grid gap-4">
            {details.map(({ Icon, label, href }) => (
              <li key={label} className="flex items-center gap-4 text-body font-medium text-gray-700">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#ffe6d5] text-brand">
                  <Icon className="size-5" aria-hidden />
                </span>
                {href ? (
                  <a href={href} className="min-w-0 break-words hover:text-brand">
                    {label}
                  </a>
                ) : (
                  label
                )}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={0.1}>
          <ContactForm initialEmail={typeof email === "string" ? email : ""} />
        </Reveal>
      </section>
    </main>
  );
}
