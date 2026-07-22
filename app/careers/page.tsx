import type { Metadata } from "next";
import { Briefcase, Clock, MapPin } from "lucide-react";

import { CtaBand } from "@/components/site/cta-band";
import { Icon } from "@/components/site/icon";
import { Container, Section, SectionHeader } from "@/components/site/layout";
import { PageHero } from "@/components/site/page-hero";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { benefits, hiringProcess, vacancies } from "@/lib/content/careers";
import { formatDate } from "@/lib/content/news";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Careers",
  description: `Open roles, benefits and the hiring process at ${site.name}.`,
};

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Work that matters, run by people who have done the job"
        description="We employ more than 640 people across engineering, offshore operations, inspection, logistics and HSE. Most of our supervisors started here as technicians or graduates."
        breadcrumbs={[{ label: "Careers" }]}
      >
        <Button asChild size="lg">
          <a href="#vacancies">
            View {vacancies.length} open roles
            <Briefcase data-icon="inline-end" />
          </a>
        </Button>
      </PageHero>

      {/* Life at Adibte */}
      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionHeader
                eyebrow="Life at Adibte"
                title="What we actually offer"
                description="Every contractor claims to invest in its people. Here is what that means in practice, in terms you can hold us to."
              />
            </div>
            <dl className="grid gap-8 sm:grid-cols-2 lg:col-span-7">
              {benefits.map((benefit) => (
                <div key={benefit.title}>
                  <dt className="flex items-center gap-3 text-base font-semibold tracking-tight">
                    <span className="flex size-9 items-center justify-center rounded-lg bg-brand/15 text-brand-strong">
                      <Icon name={benefit.icon} className="size-4.5" />
                    </span>
                    {benefit.title}
                  </dt>
                  <dd className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {benefit.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </Container>
      </Section>

      {/* Vacancies */}
      <Section tone="muted" id="vacancies" className="scroll-mt-20">
        <Container>
          <SectionHeader
            eyebrow="Open positions"
            title={`${vacancies.length} roles currently open`}
            description="Applications go directly to the hiring manager for the role. We reply either way, usually within ten working days."
          />

          <ul className="mt-12 flex flex-col gap-4">
            {vacancies.map((vacancy) => (
              <li
                key={vacancy.id}
                className="rounded-2xl border border-border bg-card p-7 sm:p-8"
              >
                <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                  <div className="max-w-2xl">
                    <div className="flex flex-wrap items-center gap-2">
                      <Badge variant="secondary">{vacancy.department}</Badge>
                      <Badge variant="outline">{vacancy.type}</Badge>
                      {vacancy.rotation ? (
                        <Badge variant="outline">
                          <Clock />
                          {vacancy.rotation}
                        </Badge>
                      ) : null}
                    </div>

                    <h3 className="mt-4 text-xl font-semibold tracking-tight">
                      {vacancy.title}
                    </h3>
                    <p className="mt-1.5 flex items-center gap-1.5 text-sm text-muted-foreground">
                      <MapPin className="size-4 shrink-0" />
                      {vacancy.location}
                    </p>
                    <p className="mt-4 leading-relaxed text-muted-foreground">
                      {vacancy.summary}
                    </p>

                    <h4 className="mt-6 text-xs font-semibold tracking-[0.16em] text-muted-foreground uppercase">
                      Requirements
                    </h4>
                    <ul className="mt-3 flex flex-col gap-2 text-sm text-muted-foreground">
                      {vacancy.requirements.map((requirement) => (
                        <li key={requirement} className="flex gap-2.5">
                          <span
                            aria-hidden
                            className="mt-1.5 size-1.5 shrink-0 rounded-full bg-brand"
                          />
                          {requirement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex shrink-0 flex-col items-start gap-3 lg:items-end">
                    <Button asChild size="lg">
                      <a
                        href={`mailto:${site.contact.careersEmail}?subject=${encodeURIComponent(
                          `Application: ${vacancy.title} (${vacancy.id})`
                        )}`}
                      >
                        Apply for this role
                      </a>
                    </Button>
                    <p className="text-xs text-muted-foreground">
                      Ref {vacancy.id} · Posted {formatDate(vacancy.postedOn)}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-8 rounded-xl border border-dashed border-border p-7 text-center">
            <h3 className="font-semibold tracking-tight">
              Nothing matching your discipline?
            </h3>
            <p className="mx-auto mt-2 max-w-lg text-sm leading-relaxed text-muted-foreground">
              We keep speculative applications on file for twelve months and
              review them whenever a scope is awarded. Send your CV with a note
              about the work you want to be doing.
            </p>
            <Button asChild variant="outline" size="lg" className="mt-5">
              <a href={`mailto:${site.contact.careersEmail}?subject=Speculative%20application`}>
                Send a speculative application
              </a>
            </Button>
          </div>
        </Container>
      </Section>

      {/* Hiring process */}
      <Section>
        <Container>
          <SectionHeader
            eyebrow="Hiring process"
            title="What to expect after you apply"
            description="Four steps, no unpaid take-home exercises, and a decision at every stage rather than silence."
          />
          <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {hiringProcess.map((step) => (
              <li key={step.step} className="relative">
                <span className="font-mono text-sm font-semibold text-brand-strong tabular-nums">
                  {step.step}
                </span>
                <h3 className="mt-3 border-t border-border pt-4 font-semibold tracking-tight">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <CtaBand
        title="Questions before you apply?"
        description="Our people team is happy to talk through a role, a rotation pattern or what certification we would fund before you commit to an application."
        primaryLabel="Contact the people team"
      />
    </>
  );
}
