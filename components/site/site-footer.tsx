import Link from "next/link";
import { Mail, MapPin, Phone, Siren } from "lucide-react";

import { Container } from "@/components/site/layout";
import { Logo } from "@/components/site/logo";
import { accreditations } from "@/lib/content/about";
import { footerNav, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-ink-muted">
      <Container className="py-14 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <Logo tone="ink" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed">
              {site.description}
            </p>
            <div className="mt-6 flex flex-col gap-2.5 text-sm">
              <a
                href={`tel:${site.contact.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-2.5 transition-colors hover:text-ink-foreground"
              >
                <Phone className="size-4 shrink-0 text-brand" />
                {site.contact.phone}
              </a>
              <a
                href={`mailto:${site.contact.email}`}
                className="flex items-center gap-2.5 transition-colors hover:text-ink-foreground"
              >
                <Mail className="size-4 shrink-0 text-brand" />
                {site.contact.email}
              </a>
              <a
                href={`tel:${site.contact.emergency.replace(/\s/g, "")}`}
                className="flex items-center gap-2.5 transition-colors hover:text-ink-foreground"
              >
                <Siren className="size-4 shrink-0 text-brand" />
                <span>
                  {site.contact.emergency}
                  <span className="ml-1.5 text-xs">(24h emergency)</span>
                </span>
              </a>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-3 lg:col-span-5">
            {footerNav.map((group) => (
              <div key={group.title}>
                <h3 className="text-xs font-semibold tracking-[0.16em] text-ink-foreground uppercase">
                  {group.title}
                </h3>
                <ul className="mt-4 flex flex-col gap-2.5 text-sm">
                  {group.items.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="transition-colors hover:text-ink-foreground"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-xs font-semibold tracking-[0.16em] text-ink-foreground uppercase">
              Offices
            </h3>
            <ul className="mt-4 flex flex-col gap-4 text-sm">
              {site.offices.map((office) => (
                <li key={office.city} className="flex gap-2.5">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-brand" />
                  <div>
                    <p className="font-medium text-ink-foreground">
                      {office.city}
                    </p>
                    <p className="text-xs">{office.label}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-2 border-t border-white/10 pt-8">
          {accreditations.map((item) => (
            <span
              key={item.code}
              title={item.label}
              className="rounded-full border border-white/15 px-3 py-1 text-[0.7rem] font-medium tracking-wide text-ink-muted"
            >
              {item.code}
            </span>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-4 border-t border-white/10 pt-8 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {site.founded}–2026 {site.legalName}. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            {site.social.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer noopener"
                className="transition-colors hover:text-ink-foreground"
              >
                {item.label}
              </a>
            ))}
            <span className="text-ink-muted/60">
              Placeholder content — not a real company
            </span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
