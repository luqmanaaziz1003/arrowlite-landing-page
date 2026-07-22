import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, TriangleAlert } from "lucide-react";

import { CtaBand } from "@/components/site/cta-band";
import { Icon } from "@/components/site/icon";
import { Container, Section, SectionHeader } from "@/components/site/layout";
import { PageHero } from "@/components/site/page-hero";
import { industries } from "@/lib/content/industries";
import { getService } from "@/lib/content/services";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Sectors we serve: offshore and onshore upstream, midstream pipelines, LNG and gas processing, petrochemicals and energy transition.",
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="The sectors we know well enough to be useful in"
        description="We do not claim to serve every industry. These are the six where our engineers have enough operating history to challenge an assumption rather than just follow a specification."
        breadcrumbs={[{ label: "Industries" }]}
      />

      <Section>
        <Container>
          <div className="grid gap-6 lg:grid-cols-2">
            {industries.map((industry) => (
              <article
                key={industry.slug}
                className="flex flex-col rounded-2xl border border-border bg-card p-7 sm:p-8"
              >
                <div className="flex items-center gap-4">
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon name={industry.icon} className="size-6" />
                  </span>
                  <h2 className="text-xl font-semibold tracking-tight">
                    {industry.title}
                  </h2>
                </div>

                <p className="mt-5 leading-relaxed text-muted-foreground">
                  {industry.summary}
                </p>

                <h3 className="mt-7 flex items-center gap-2 text-xs font-semibold tracking-[0.16em] text-muted-foreground uppercase">
                  <TriangleAlert className="size-3.5 text-brand-strong" />
                  Typical challenges
                </h3>
                <ul className="mt-3 flex flex-col gap-2 text-sm text-muted-foreground">
                  {industry.challenges.map((challenge) => (
                    <li key={challenge} className="flex gap-2.5">
                      <span
                        aria-hidden
                        className="mt-1.5 size-1.5 shrink-0 rounded-full bg-brand"
                      />
                      {challenge}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-7">
                  <h3 className="text-xs font-semibold tracking-[0.16em] text-muted-foreground uppercase">
                    How we help
                  </h3>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {industry.relatedServices.map((slug) => {
                      const service = getService(slug);
                      if (!service) return null;

                      return (
                        <li key={slug}>
                          <Link
                            href={`/services/${slug}`}
                            className="group inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs font-medium transition-colors hover:border-primary/40 hover:bg-muted"
                          >
                            {service.title}
                            <ArrowRight className="size-3 transition-transform group-hover:translate-x-0.5" />
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="ink">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionHeader
                tone="ink"
                eyebrow="Regional footprint"
                title="Where we operate"
                description="Three operating locations covering the Malay basin, the Natuna Sea, Bruneian waters and the Sarawak gas corridor."
              />
            </div>
            <ul className="grid gap-4 sm:grid-cols-3 lg:col-span-7">
              {[
                {
                  country: "Malaysia",
                  detail: "Corporate headquarters in Kuala Lumpur and an operations base at Kemaman Supply Base serving the Malay basin.",
                },
                {
                  country: "Singapore",
                  detail: "Regional office handling commercial, procurement and freight forwarding for cross-border scopes.",
                },
                {
                  country: "Indonesia",
                  detail: "Project-based presence in the Natuna Sea, currently supporting wellhead platform hook-up and commissioning.",
                },
              ].map((location) => (
                <li
                  key={location.country}
                  className="rounded-xl border border-white/12 bg-white/[0.04] p-6"
                >
                  <h3 className="font-semibold tracking-tight">{location.country}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-ink-muted">
                    {location.detail}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      <CtaBand
        title="Operating in a sector we have not listed?"
        description="Tell us what the asset is. If our capability does not transfer cleanly, we will say so rather than learn on your scope."
      />
    </>
  );
}
