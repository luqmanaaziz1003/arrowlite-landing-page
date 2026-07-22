import type { Metadata } from "next";
import { Siren } from "lucide-react";

import { CtaBand } from "@/components/site/cta-band";
import { Icon } from "@/components/site/icon";
import { Container, Section, SectionHeader } from "@/components/site/layout";
import { PageHero } from "@/components/site/page-hero";
import { StatGrid } from "@/components/site/stat-grid";
import { certifications, hseMetrics, hsePolicy, pillars } from "@/lib/content/hse";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Health, Safety & Environment",
  description:
    "Our HSE policy, performance metrics, certifications and the stop-work authority every worker holds.",
};

export default function HsePage() {
  return (
    <>
      <PageHero
        eyebrow="Health, Safety & Environment"
        title="Safety is not a value we hold. It is the scope."
        description="Every job we take on is planned so that it can be executed safely. When that is not possible within the client's constraints, we change the plan — we do not quietly change the risk assessment."
        breadcrumbs={[{ label: "HSE" }]}
      />

      {/* Policy statement */}
      <Section>
        <Container>
          <div className="rounded-2xl border border-border bg-muted/50 p-8 sm:p-12">
            <p className="text-xs font-semibold tracking-[0.18em] text-muted-foreground uppercase">
              HSE policy statement
            </p>
            <blockquote className="mt-6 text-xl leading-relaxed font-medium tracking-tight text-balance sm:text-2xl">
              {hsePolicy}
            </blockquote>
            <p className="mt-8 border-t border-border pt-6 text-sm text-muted-foreground">
              Signed by the Chief Executive Officer and reviewed annually by the
              board of {site.legalName}.
            </p>
          </div>
        </Container>
      </Section>

      {/* Performance */}
      <Section tone="muted">
        <Container>
          <SectionHeader
            eyebrow="Performance"
            title="Our numbers, including the uncomfortable ones"
            description="We report in line with IOGP 423 and publish results to clients quarterly. A high hazard-observation count is a good sign, not a bad one — it means people are still reporting."
          />
          <StatGrid stats={hseMetrics} className="mt-12" />
        </Container>
      </Section>

      {/* Pillars */}
      <Section>
        <Container>
          <SectionHeader
            eyebrow="Our approach"
            title="Four areas we manage separately"
            description="Occupational safety and process safety fail in different ways and need different controls. Conflating them is how organisations end up with excellent injury statistics and a major accident."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {pillars.map((pillar) => (
              <article
                key={pillar.title}
                className="rounded-2xl border border-border bg-card p-7 sm:p-8"
              >
                <div className="flex items-center gap-4">
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon name={pillar.icon} className="size-6" />
                  </span>
                  <h3 className="text-xl font-semibold tracking-tight">
                    {pillar.title}
                  </h3>
                </div>
                <p className="mt-5 leading-relaxed text-muted-foreground">
                  {pillar.description}
                </p>
                <ul className="mt-6 flex flex-col gap-2.5 border-t border-border pt-6 text-sm text-muted-foreground">
                  {pillar.points.map((point) => (
                    <li key={point} className="flex gap-2.5">
                      <span
                        aria-hidden
                        className="mt-1.5 size-1.5 shrink-0 rounded-full bg-brand"
                      />
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      {/* Stop-work authority */}
      <Section tone="ink">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-6">
              <SectionHeader
                tone="ink"
                eyebrow="Stop-work authority"
                title="47 jobs stopped last year. None of them cost anyone their position."
                description="Stop-work authority only functions if using it is genuinely free of consequence. We track how often it is exercised and by whom, because a number that falls to zero means the authority has quietly stopped being real."
              />
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:col-span-6">
              {[
                { value: "47", label: "Jobs stopped in 2025" },
                { value: "11", label: "On scopes already behind schedule" },
                { value: "3,180", label: "Hazard observations raised" },
                { value: "100%", label: "Investigated and closed out" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-white/12 bg-white/[0.04] p-6"
                >
                  <p className="text-3xl font-semibold tracking-tight tabular-nums">
                    {item.value}
                  </p>
                  <p className="mt-1.5 text-sm text-ink-muted">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Certifications */}
      <Section>
        <Container>
          <SectionHeader
            eyebrow="Certification"
            title="Independently audited management systems"
            align="center"
          />
          <ul className="mt-12 grid gap-4 sm:grid-cols-2">
            {certifications.map((certification) => (
              <li
                key={certification.code}
                className="rounded-xl border border-border bg-card p-6"
              >
                <p className="font-mono text-sm font-semibold text-primary">
                  {certification.code}
                </p>
                <h3 className="mt-2 font-semibold tracking-tight">
                  {certification.title}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {certification.scope}
                </p>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* Emergency contact */}
      <Section tone="muted" className="py-14 sm:py-16 lg:py-16">
        <Container>
          <div className="flex flex-col items-start gap-6 rounded-2xl border border-brand/30 bg-brand/8 p-8 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-4">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-brand text-brand-foreground">
                <Siren className="size-5" />
              </span>
              <div>
                <h2 className="text-lg font-semibold tracking-tight">
                  24-hour emergency response
                </h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  Incident reporting and emergency support for active scopes,
                  answered around the clock.
                </p>
              </div>
            </div>
            <a
              href={`tel:${site.contact.emergency.replace(/\s/g, "")}`}
              className="shrink-0 font-mono text-xl font-semibold tracking-tight whitespace-nowrap tabular-nums hover:underline"
            >
              {site.contact.emergency}
            </a>
          </div>
        </Container>
      </Section>

      <CtaBand
        title="Want to audit our HSE management system?"
        description="Client audits are welcome and we do not prepare for them. Contact us to arrange access to our documentation and site operations."
        primaryLabel="Arrange an audit"
      />
    </>
  );
}
