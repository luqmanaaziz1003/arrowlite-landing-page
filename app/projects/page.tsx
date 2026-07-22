import type { Metadata } from "next";
import { MapPin } from "lucide-react";

import { CtaBand } from "@/components/site/cta-band";
import {
  Container,
  GridPattern,
  Section,
  SectionHeader,
} from "@/components/site/layout";
import { PageHero } from "@/components/site/page-hero";
import { Badge } from "@/components/ui/badge";
import {
  completedProjects,
  gallery,
  ongoingProjects,
  projects,
  type Project,
} from "@/lib/content/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Completed and ongoing offshore, onshore and engineering projects delivered across Malaysia, Indonesia and Brunei.",
};

function ProjectCard({ project }: { project: Project }) {
  const ongoing = project.status === "ongoing";

  return (
    <article
      id={project.slug}
      className="scroll-mt-28 overflow-hidden rounded-2xl border border-border bg-card"
    >
      <div className="grid lg:grid-cols-12">
        {/* Visual placeholder — swap for project photography when available */}
        <div className="relative isolate min-h-44 overflow-hidden bg-ink lg:col-span-4">
          <GridPattern className="[mask-image:none] opacity-70" />
          <div
            aria-hidden
            className="absolute -right-10 -bottom-16 size-52 rounded-full bg-primary/40 blur-2xl"
          />
          <div className="relative flex h-full flex-col justify-between gap-6 p-6">
            <Badge variant={ongoing ? "brand" : "onInk"}>
              {ongoing ? "Ongoing" : "Completed"}
            </Badge>
            <div>
              <p className="text-xs tracking-[0.14em] text-ink-muted uppercase">
                {project.discipline}
              </p>
              <p className="mt-1 text-2xl font-semibold tracking-tight text-ink-foreground tabular-nums">
                {project.period}
              </p>
            </div>
          </div>
        </div>

        <div className="p-7 sm:p-8 lg:col-span-8">
          <h3 className="text-xl font-semibold tracking-tight">{project.title}</h3>
          <p className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted-foreground">
            <MapPin className="size-4 shrink-0" />
            {project.location}
            <span aria-hidden className="text-border">
              |
            </span>
            <span>{project.client}</span>
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            {project.summary}
          </p>

          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <div>
              <h4 className="text-xs font-semibold tracking-[0.16em] text-muted-foreground uppercase">
                Scope of work
              </h4>
              <ul className="mt-3 flex flex-col gap-2 text-sm text-muted-foreground">
                {project.scope.map((item) => (
                  <li key={item} className="flex gap-2.5">
                    <span
                      aria-hidden
                      className="mt-1.5 size-1.5 shrink-0 rounded-full bg-brand"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <dl className="grid grid-cols-3 gap-4 self-start rounded-xl bg-muted/60 p-5 sm:grid-cols-1 sm:gap-5">
              {project.highlights.map((highlight) => (
                <div key={highlight.label} className="flex flex-col">
                  <dd className="order-1 text-xl font-semibold tracking-tight tabular-nums">
                    {highlight.value}
                  </dd>
                  <dt className="order-2 mt-0.5 text-xs leading-snug text-muted-foreground">
                    {highlight.label}
                  </dt>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="Work delivered, and work in progress"
        description="A representative selection of scopes across offshore construction, turnarounds, engineering studies and integrity programmes. Client names are shown where we have permission."
        breadcrumbs={[{ label: "Projects" }]}
      >
        <dl className="flex flex-wrap gap-x-10 gap-y-4">
          {[
            { value: String(projects.length), label: "Projects listed" },
            { value: String(ongoingProjects.length), label: "Currently ongoing" },
            { value: "3", label: "Countries" },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col">
              <dd className="order-1 text-3xl font-semibold tracking-tight tabular-nums">
                {stat.value}
              </dd>
              <dt className="order-2 mt-1 text-sm text-ink-muted">{stat.label}</dt>
            </div>
          ))}
        </dl>
      </PageHero>

      {/* Ongoing */}
      <Section>
        <Container>
          <SectionHeader
            eyebrow="Ongoing projects"
            title="Currently in execution"
            description="Scopes we are delivering right now. Progress reporting on these is issued to clients weekly."
          />
          <div className="mt-12 flex flex-col gap-6">
            {ongoingProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </Container>
      </Section>

      {/* Completed */}
      <Section tone="muted">
        <Container>
          <SectionHeader
            eyebrow="Completed projects"
            title="Delivered and handed over"
            description="Closed-out scopes with as-built documentation issued and, where applicable, certification extended."
          />
          <div className="mt-12 flex flex-col gap-6">
            {completedProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </Container>
      </Section>

      {/* Gallery */}
      <Section>
        <Container>
          <SectionHeader
            eyebrow="Project gallery"
            title="From the field"
            description="Photography placeholders — replace these tiles with real site imagery when it has been cleared for release."
          />
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((item) => (
              <li
                key={item.title}
                className="relative isolate flex aspect-4/3 flex-col justify-end overflow-hidden rounded-xl bg-ink p-6 text-ink-foreground"
              >
                <GridPattern className="[mask-image:none] opacity-60" />
                <div
                  aria-hidden
                  className="absolute -top-12 -right-12 size-44 rounded-full bg-primary/35 blur-2xl"
                />
                <div className="relative">
                  <Badge variant="onInk" className="mb-3">
                    {item.discipline}
                  </Badge>
                  <h3 className="text-base font-semibold tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm text-ink-muted">{item.caption}</p>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <CtaBand
        title="Looking for a reference on a scope like yours?"
        description="We can usually put you in touch with a client who has run a comparable campaign with us — including one that did not go entirely to plan."
        primaryLabel="Request a reference"
      />
    </>
  );
}
