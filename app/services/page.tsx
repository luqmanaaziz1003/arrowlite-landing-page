import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

import { CtaBand } from "@/components/site/cta-band";
import { Icon } from "@/components/site/icon";
import { Container, Section, SectionHeader } from "@/components/site/layout";
import { PageHero } from "@/components/site/page-hero";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/content/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Offshore services, engineering, maintenance, inspection and logistics for oil and gas operators across Southeast Asia.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Five capabilities that hold a scope end to end"
        description="We design it, build it, install it, inspect it and maintain it. Holding the whole chain means the inspection finding and the repair decision sit with the same accountable team."
        breadcrumbs={[{ label: "Services" }]}
      />

      <Section>
        <Container>
          <div className="flex flex-col gap-6">
            {services.map((service, index) => (
              <article
                key={service.slug}
                className="grid gap-8 rounded-2xl border border-border bg-card p-7 sm:p-9 lg:grid-cols-12 lg:gap-10"
              >
                <div className="lg:col-span-5">
                  <div className="flex items-center gap-4">
                    <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon name={service.icon} className="size-6" />
                    </span>
                    <span className="font-mono text-sm text-muted-foreground tabular-nums">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h2 className="mt-5 text-2xl font-semibold tracking-tight">
                    {service.title}
                  </h2>
                  <p className="mt-3 leading-relaxed text-muted-foreground">
                    {service.summary}
                  </p>
                  <Button asChild size="lg" className="mt-6">
                    <Link href={`/services/${service.slug}`}>
                      Service detail
                      <ArrowRight data-icon="inline-end" />
                    </Link>
                  </Button>
                </div>

                <div className="lg:col-span-7">
                  <h3 className="text-xs font-semibold tracking-[0.16em] text-muted-foreground uppercase">
                    Capabilities
                  </h3>
                  <dl className="mt-5 grid gap-x-8 gap-y-5 sm:grid-cols-2">
                    {service.capabilities.map((capability) => (
                      <div key={capability.title}>
                        <dt className="flex items-start gap-2 text-sm font-semibold tracking-tight">
                          <Check className="mt-0.5 size-4 shrink-0 text-brand-strong" />
                          {capability.title}
                        </dt>
                        <dd className="mt-1.5 pl-6 text-sm leading-relaxed text-muted-foreground">
                          {capability.description}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="muted">
        <Container>
          <SectionHeader
            eyebrow="How we engage"
            title="Three ways clients typically bring us in"
            align="center"
          />
          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            {[
              {
                title: "Call-off contract",
                description:
                  "A standing agreement with agreed rates and mobilisation times, drawn down as scopes arise. Best for operators with a continuous maintenance backlog.",
              },
              {
                title: "Lump-sum project",
                description:
                  "A defined scope with a fixed price and schedule, typically for turnarounds, hook-ups and modification packages.",
              },
              {
                title: "Embedded team",
                description:
                  "Our engineers work inside your organisation under your management system, usually for integrity programmes running several years.",
              },
            ].map((model) => (
              <div
                key={model.title}
                className="rounded-xl border border-border bg-card p-7"
              >
                <h3 className="text-lg font-semibold tracking-tight">
                  {model.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {model.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <CtaBand />
    </>
  );
}
