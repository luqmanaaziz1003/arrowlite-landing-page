import Link from "next/link";
import { ArrowRight, ArrowUpRight, Quote, ShieldCheck } from "lucide-react";

import { CtaBand } from "@/components/site/cta-band";
import { Icon } from "@/components/site/icon";
import { Container, Eyebrow, GridPattern, Section, SectionHeader } from "@/components/site/layout";
import { StatGrid } from "@/components/site/stat-grid";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { clients, companyStats, testimonials, values } from "@/lib/content/about";
import { completedProjects, ongoingProjects } from "@/lib/content/projects";
import { services } from "@/lib/content/services";
import { site } from "@/lib/site";

// Deliberately a mix, so the homepage shows live work as well as a track record.
const featuredProjects = [
  ...ongoingProjects.slice(0, 1),
  ...completedProjects.slice(0, 2),
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-ink text-ink-foreground">
        <GridPattern />
        <div
          aria-hidden
          className="pointer-events-none absolute -top-40 -right-32 size-[36rem] rounded-full bg-primary/25 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-56 -left-24 size-[30rem] rounded-full bg-brand/10 blur-3xl"
        />
        <Container className="relative py-20 sm:py-24 lg:py-32">
          <div className="max-w-3xl">
            <Badge variant="onInk" className="mb-6 py-1">
              <ShieldCheck className="text-brand" />
              4.2 million manhours without a lost time injury
            </Badge>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              Keeping energy infrastructure{" "}
              <span className="text-brand">safe, running and certified</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-muted">
              {site.name} delivers engineering, maintenance, inspection and
              logistics services to offshore and onshore operators across
              Southeast Asia — from hook-up and commissioning through to
              late-life integrity management.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/services">
                  Explore our services
                  <ArrowRight data-icon="inline-end" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/20 bg-white/5 text-ink-foreground hover:bg-white/10 hover:text-ink-foreground"
              >
                <Link href="/projects">View projects</Link>
              </Button>
            </div>
          </div>

          <div className="mt-16 grid gap-x-8 gap-y-6 border-t border-white/10 pt-10 sm:grid-cols-2 lg:grid-cols-4">
            {companyStats.map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-semibold tracking-tight tabular-nums sm:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-1.5 text-sm text-ink-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Company introduction */}
      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionHeader
                eyebrow="Who we are"
                title="An integrated services partner, not a body shop"
              />
            </div>
            <div className="space-y-5 text-base leading-relaxed text-muted-foreground lg:col-span-7">
              <p>
                Founded in {site.founded} as a specialist inspection contractor,{" "}
                {site.name} now employs more than 640 people across Malaysia,
                Singapore and Indonesia. We hold scopes end to end — design,
                fabricate, install, inspect and maintain — so that accountability
                does not fragment across three subcontractors when something goes
                wrong.
              </p>
              <p>
                Most of the assets we work on were built to last twenty-five
                years and have been producing for thirty-five. Extending that
                life safely is a discipline of evidence: knowing what condition
                the steel is actually in, and being willing to say so plainly.
              </p>
              <Button asChild variant="link" className="h-auto p-0">
                <Link href="/about">
                  Read our story
                  <ArrowUpRight data-icon="inline-end" />
                </Link>
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Services overview */}
      <Section tone="muted">
        <Container>
          <SectionHeader
            eyebrow="What we do"
            title="Five capabilities, one accountable contractor"
            description="Each service stands alone, but the value shows up when they run together — an inspection finding that flows straight into an engineered repair and a planned shutdown."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group flex flex-col rounded-xl border border-border bg-card p-6 transition-all outline-none hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md focus-visible:ring-3 focus-visible:ring-ring/50"
              >
                <span className="flex size-11 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon name={service.icon} className="size-5" />
                </span>
                <h3 className="mt-5 text-lg font-semibold tracking-tight">
                  {service.title}
                </h3>
                <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {service.summary}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                  Learn more
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            ))}

            <div className="flex flex-col justify-between rounded-xl border border-dashed border-border bg-transparent p-6">
              <div>
                <h3 className="text-lg font-semibold tracking-tight">
                  Not sure which you need?
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                  Most scopes cross two or three of these. Describe the problem
                  and we will scope it properly.
                </p>
              </div>
              <Button asChild variant="outline" size="lg" className="mt-5 w-fit">
                <Link href="/contact">Talk to an engineer</Link>
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Why choose us */}
      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionHeader
                eyebrow="Why choose us"
                title="The reasons clients re-award"
                description="We are not the cheapest bid on most tenders. These are the four things clients tell us they are actually paying for."
              />
            </div>
            <dl className="grid gap-8 sm:grid-cols-2 lg:col-span-7">
              {values.map((value) => (
                <div key={value.title}>
                  <dt className="flex items-center gap-3 text-base font-semibold tracking-tight">
                    <span className="flex size-9 items-center justify-center rounded-lg bg-brand/15 text-brand-strong">
                      <Icon name={value.icon} className="size-4.5" />
                    </span>
                    {value.title}
                  </dt>
                  <dd className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {value.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </Container>
      </Section>

      {/* Featured projects */}
      <Section tone="muted">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeader
              eyebrow="Featured projects"
              title="Recent work"
              description="A selection of completed and ongoing scopes across the region."
            />
            <Button asChild variant="outline" size="lg">
              <Link href="/projects">
                All projects
                <ArrowRight data-icon="inline-end" />
              </Link>
            </Button>
          </div>

          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <Link
                key={project.slug}
                href={`/projects#${project.slug}`}
                className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all outline-none hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md focus-visible:ring-3 focus-visible:ring-ring/50"
              >
                {/* Stands in for project photography */}
                <div className="relative isolate h-40 overflow-hidden bg-ink">
                  <GridPattern className="[mask-image:none] opacity-70" />
                  <div
                    aria-hidden
                    className="absolute -right-8 -bottom-12 size-40 rounded-full bg-primary/40 blur-2xl"
                  />
                  <div className="relative flex h-full flex-col justify-between p-5">
                    <Badge
                      variant={project.status === "ongoing" ? "brand" : "onInk"}
                    >
                      {project.status === "ongoing" ? "Ongoing" : "Completed"}
                    </Badge>
                    <p className="text-xs tracking-[0.14em] text-ink-muted uppercase">
                      {project.discipline}
                    </p>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-base font-semibold tracking-tight">
                    {project.title}
                  </h3>
                  <p className="mt-1.5 text-xs text-muted-foreground">
                    {project.location} · {project.period}
                  </p>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {project.summary}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      {/* Testimonials */}
      <Section>
        <Container>
          <div className="grid gap-6 lg:grid-cols-2">
            {testimonials.map((testimonial) => (
              <figure
                key={testimonial.company}
                className="flex flex-col rounded-xl border border-border bg-card p-8"
              >
                <Quote
                  aria-hidden
                  className="size-7 rotate-180 text-brand"
                  strokeWidth={1.5}
                />
                <blockquote className="mt-5 flex-1 text-lg leading-relaxed font-medium tracking-tight text-balance">
                  {testimonial.quote}
                </blockquote>
                <figcaption className="mt-6 border-t border-border pt-5 text-sm">
                  <span className="font-medium">{testimonial.name}</span>
                  <span className="mt-0.5 block text-muted-foreground">
                    {testimonial.company}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </Container>
      </Section>

      {/* Clients */}
      <Section tone="muted" className="py-14 sm:py-16 lg:py-16">
        <Container>
          <Eyebrow className="justify-center text-muted-foreground">
            Trusted by operators across the region
          </Eyebrow>
          <ul className="mt-8 grid grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-4">
            {clients.map((client) => (
              <li
                key={client}
                className="text-center text-sm font-semibold tracking-tight text-muted-foreground/70"
              >
                {client}
              </li>
            ))}
          </ul>
          <p className="mt-8 text-center text-xs text-muted-foreground">
            Client names shown are placeholders for layout purposes.
          </p>
        </Container>
      </Section>

      {/* Safety proof point */}
      <Section className="py-14 sm:py-16 lg:py-16">
        <Container>
          <StatGrid
            stats={[
              { value: "0.00", label: "Lost time injury frequency", note: "Rolling 12 months" },
              { value: "0.14", label: "Total recordable case frequency", note: "Rolling 12 months" },
              { value: "3,180", label: "Hazard observations raised", note: "By the workforce in 2025" },
              { value: "47", label: "Jobs stopped on safety grounds", note: "Without consequence to the reporter" },
            ]}
          />
        </Container>
      </Section>

      <CtaBand />
    </>
  );
}
