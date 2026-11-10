import Link from "next/link";
import type { IconType } from "react-icons";
import { FaFacebook, FaInstagram, FaWhatsapp, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { nav, site } from "@/content/site";
import { SubscribeForm } from "./forms";
import { ArrowUpRight, Logo, PillLink } from "./ui";

const socialIcons: Record<string, IconType> = {
  facebook: FaFacebook,
  youtube: FaYoutube,
  whatsapp: FaWhatsapp,
  instagram: FaInstagram,
  x: FaXTwitter,
};

const heading = "text-body font-semibold text-brand";
const link = "text-base text-white transition-colors hover:text-brand-300";

export function Footer() {
  return (
    <footer className="mt-[clamp(1.5rem,2.8vw,2.5rem)] rounded-t-panel bg-footer pt-[clamp(2rem,3.5vw,3.125rem)] text-white">
      <div className="shell">
        <div className="flex flex-wrap items-center justify-between gap-6 pb-[clamp(2rem,3.8vw,3.4375rem)]">
          <h2 className="text-h1 font-bold">Let&rsquo;s Connect there</h2>
          <PillLink href="/contact" className="font-medium">
            Hire me <ArrowUpRight className="size-7" />
          </PillLink>
        </div>

        <div className="grid gap-10 border-y border-[#434f5f] py-[clamp(2.5rem,3.8vw,3.4375rem)] sm:grid-cols-2 lg:grid-cols-[minmax(0,635fr)_103fr_auto_304fr] lg:gap-7">
          <div className="sm:col-span-2 lg:col-span-1">
            <Logo />
            <p className="mt-6 max-w-[635px] text-body">{site.footerBlurb}</p>
            <ul className="mt-6 flex gap-2">
              {site.social.map((s) => {
                const Icon = socialIcons[s.icon];
                return (
                  <li key={s.label}>
                    {s.url ? (
                      <a href={s.url} aria-label={s.label} target="_blank" rel="noreferrer" className="transition-colors hover:text-brand-300">
                        <Icon className="size-6" />
                      </a>
                    ) : (
                      <Icon className="size-6" aria-hidden />
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <h3 className={heading}>Navigation</h3>
            <ul className="mt-5 grid gap-3 lg:mt-7 lg:gap-5">
              {[...nav.left, ...nav.right].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={link}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className={heading}>Contact</h3>
            <ul className="mt-5 grid gap-3 lg:mt-7 lg:gap-5">
              <li>
                <a href={`tel:${site.phone.replace(/\s/g, "")}`} className={link}>
                  {site.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className={link}>
                  {site.email}
                </a>
              </li>
              <li className="text-base">{site.website}</li>
            </ul>
          </div>

          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className={heading}>Get the latest information</h3>
            <div className="mt-5 lg:mt-7">
              <SubscribeForm />
            </div>
          </div>
        </div>

        <p className="py-[clamp(1.5rem,1.9vw,1.75rem)] text-body">
          Copyright &copy; {new Date().getFullYear()} {site.name}. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
