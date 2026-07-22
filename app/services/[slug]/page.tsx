import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check, FileText } from "lucide-react";

import { CtaBand } from "@/components/site/cta-band";
import { Icon } from "@/components/site/icon";
import { Container, Section, SectionHeader } from "@/components/site/layout";
import { PageHero } from "@/components/site/page-hero";
import { StatGrid } from "@/components/site/stat-grid";
import { Button } from "@/components/ui/button";
import { industries } from "@/lib/content/industries";
import { getService, services } from "@/lib/content/services";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata(
  props: PageProps<"/services/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  const service = getService(slug);

  if (!service) return {};

  return {
    title: service.title,
    description: service.summary,
  };
}

export default async function ServiceDetailPage(
  props: PageProps<"/services/[slug]">
) {
  const { slug } = await props.params;
  const service = getService(slug);

  if (!service) notFound();

  const others = services.filter((item) => item.slug !== service.slug);
  const relatedIndustries = industries.filter((industry) =>
    industry.relatedServices.includes(service.slug)
  );

  return (
    <>
      <PageHero
        eyebrow={service.title}
        title={service.summary}
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: service.title },
        ]}
      >
        <span className="flex size-14 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-brand">
          <Icon name={service.icon} className="size-7" />
        </span>
      </PageHero>

      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <SectionHeader eyebrow="Overview" title={`About our ${service.title.toLowerCase()}`} />
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                {service.intro}
              </p>

              <h3 className="mt-12 text-xl font-semibold tracking-tight">
                Capabilities
              </h3>
              <dl className="mt-6 grid gap-6 sm:grid-cols-2">
                {service.capabilities.map((capability) => (
                  <div
                    key={capability.title}
                    className="rounded-xl border border-border bg-card p-6"
                  >
                    <dt className="font-semibold tracking-tight">
                      {capability.title}
                    </dt>
                    <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {capability.description}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <aside className="lg:col-span-5">
              <div className="sticky top-28 flex flex-col gap-6">
                <div className="rounded-xl border border-border bg-muted/50 p-7">
                  <h3 className="flex items-center gap-2.5 text-sm font-semibold tracking-[0.14em] uppercase">
                    <FileText className="size-4 text-brand-strong" />
                    What you receive
                  </h3>
                  <ul className="mt-5 flex flex-col gap-3">
                    {service.deliverables.map((deliverable) => (
                      <li key={deliverable} className="flex gap-2.5 text-sm leading-relaxed">
                        <Check className="mt-0.5 size-4 shrink-0 text-brand-strong" />
                        {deliverable}
                      </li>
                    ))}
                  </ul>
                </div>

                {relatedIndustries.length ? (
                  <div className="rounded-xl border border-border p-7">
                    <h3 className="text-sm font-semibold tracking-[0.14em] uppercase">
                      Industries served
                    </h3>
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {relatedIndustries.map((industry) => (
                        <li key={industry.slug}>
                          <Link
                            href="/industries"
                            className="inline-flex rounded-full border border-border px-3 py-1 text-xs font-medium text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
                          >
                            {industry.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </div>
            </aside>
          </div>
        </Container>
      </Section>

      <Section tone="muted" className="py-14 sm:py-16 lg:py-16">
        <Container>
          <StatGrid stats={service.stats} />
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeader eyebrow="Other services" title="Explore the rest of what we do" />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {others.map((other) => (
              <Link
                key={other.slug}
                href={`/services/${other.slug}`}
                className="group flex items-center justify-between gap-4 rounded-xl border border-border bg-card p-5 transition-colors outline-none hover:border-primary/40 focus-visible:ring-3 focus-visible:ring-ring/50"
              >
                <span className="flex items-center gap-3">
                  <Icon name={other.icon} className="size-5 text-primary" />
                  <span className="text-sm font-medium tracking-tight">
                    {other.title}
                  </span>
                </span>
                <ArrowRight className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
              </Link>
            ))}
          </div>
          <Button asChild variant="link" className="mt-8 h-auto p-0">
            <Link href="/services">Back to all services</Link>
          </Button>
        </Container>
      </Section>

      <CtaBand
        title={`Need ${service.title.toLowerCase()} on a live asset?`}
        description="Send us the asset details and the window you are working with. We will come back with an approach and an honest view of the risks."
      />
    </>
  );
}
