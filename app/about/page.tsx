import type { Metadata } from "next";
import { Building2 } from "lucide-react";

import { CtaBand } from "@/components/site/cta-band";
import { Icon } from "@/components/site/icon";
import { Container, Section, SectionHeader } from "@/components/site/layout";
import { PageHero } from "@/components/site/page-hero";
import { StatGrid } from "@/components/site/stat-grid";
import {
  accreditations,
  companyStats,
  groupOfCompanies,
  leadership,
  milestones,
  mission,
  values,
  vision,
} from "@/lib/content/about";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description: `The history, leadership and values behind ${site.name}.`,
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Sixteen years of keeping other people's assets running"
        description={`${site.name} was founded in ${site.founded} by four inspection engineers who believed integrity work was being treated as a paperwork exercise. That conviction still shapes how we operate.`}
        breadcrumbs={[{ label: "About Us" }]}
      />

      {/* Group of companies */}
      <Section tone="muted">
        <Container>
          <SectionHeader
            eyebrow="Group of companies"
            title={`${site.name}: a group of companies`}
            description="Four registered entities operating across Peninsular and East Malaysia, each scoped to the region it serves."
            align="center"
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {groupOfCompanies.map((company) => (
              <div
                key={company.name}
                className="flex flex-col rounded-xl border border-border bg-card p-6"
              >
                <span className="flex size-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Building2 className="size-5" />
                </span>
                <h3 className="mt-5 text-base leading-snug font-semibold tracking-tight">
                  {company.name}
                </h3>
                <p className="mt-2.5 text-sm font-medium text-brand-strong">
                  {company.isHq ? `${company.location} (HQ)` : company.location}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Company history */}
      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionHeader
                eyebrow="Our history"
                title="From four engineers to a regional contractor"
                description="Growth has been deliberate. We have turned down more work than we have taken in years when capability would have been stretched past what we could supervise properly."
              />
            </div>

            <ol className="relative lg:col-span-7">
              {milestones.map((milestone, index) => (
                <li key={milestone.year} className="relative flex gap-6 pb-9 last:pb-0">
                  {/* Timeline rail */}
                  <div className="flex flex-col items-center">
                    <span className="flex size-3 shrink-0 rounded-full bg-brand ring-4 ring-brand/15" />
                    {index < milestones.length - 1 ? (
                      <span aria-hidden className="mt-1 w-px flex-1 bg-border" />
                    ) : null}
                  </div>
                  <div className="-mt-1 pb-2">
                    <p className="text-sm font-semibold tabular-nums text-primary">
                      {milestone.year}
                    </p>
                    <h3 className="mt-1 text-base font-semibold tracking-tight">
                      {milestone.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {milestone.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </Section>

      {/* Vision & mission */}
      <Section tone="ink">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <SectionHeader tone="ink" eyebrow="Vision" title="Where we are going" />
              <p className="mt-6 text-xl leading-relaxed font-medium tracking-tight text-balance">
                {vision}
              </p>
            </div>
            <div>
              <SectionHeader tone="ink" eyebrow="Mission" title="What we do about it" />
              <p className="mt-6 text-xl leading-relaxed font-medium tracking-tight text-balance">
                {mission}
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Core values */}
      <Section>
        <Container>
          <SectionHeader
            eyebrow="Core values"
            title="Four commitments we are willing to be measured against"
            description="Values are only useful if they cost something to hold. These have each cost us work at some point."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-xl border border-border bg-card p-7"
              >
                <span className="flex size-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon name={value.icon} className="size-5" />
                </span>
                <h3 className="mt-5 text-lg font-semibold tracking-tight">
                  {value.title}
                </h3>
                <p className="mt-2.5 leading-relaxed text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* By the numbers */}
      <Section tone="muted">
        <Container>
          <SectionHeader
            eyebrow="By the numbers"
            title="Where we stand today"
            align="center"
          />
          <StatGrid stats={companyStats} className="mt-12" />
        </Container>
      </Section>

      {/* Leadership */}
      <Section id="leadership" className="scroll-mt-24">
        <Container>
          <SectionHeader
            eyebrow="Leadership"
            title="The people accountable for the work"
            description="Every member of our executive team has spent time on a platform, in a yard or on a turnaround. None of them are career administrators."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {leadership.map((leader) => (
              <div
                key={leader.name}
                className="flex flex-col rounded-xl border border-border bg-card p-6"
              >
                <div className="flex items-center gap-4">
                  {/* Initials stand in until portrait photography is available */}
                  <span
                    aria-hidden
                    className="flex size-14 shrink-0 items-center justify-center rounded-full bg-primary/10 text-lg font-semibold tracking-tight text-primary"
                  >
                    {leader.initials}
                  </span>
                  <div>
                    <h3 className="font-semibold tracking-tight">{leader.name}</h3>
                    <p className="mt-0.5 text-sm text-muted-foreground">
                      {leader.role}
                    </p>
                  </div>
                </div>
                <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                  {leader.bio}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Accreditations */}
      <Section tone="muted" className="py-14 sm:py-16 lg:py-16">
        <Container>
          <SectionHeader
            eyebrow="Accreditations"
            title="Certified and independently audited"
            align="center"
          />
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {accreditations.map((item) => (
              <li
                key={item.code}
                className="flex items-baseline gap-3 rounded-lg border border-border bg-card px-5 py-4"
              >
                <span className="font-mono text-sm font-semibold text-primary">
                  {item.code}
                </span>
                <span className="text-sm text-muted-foreground">{item.label}</span>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <CtaBand
        title="Want to know whether we have done this before?"
        description="Ask us for references on a scope like yours. We will connect you with a client who can speak to how it actually went."
        primaryLabel="Request references"
      />
    </>
  );
}
