import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { CtaBand } from "@/components/site/cta-band";
import { Container, GridPattern, Section } from "@/components/site/layout";
import { PageHero } from "@/components/site/page-hero";
import { Badge } from "@/components/ui/badge";
import { formatDate, sortedArticles } from "@/lib/content/news";

export const metadata: Metadata = {
  title: "News",
  description:
    "Contract awards, project milestones, HSE performance and engineering insight from across our operations.",
};

const [featured, ...rest] = sortedArticles;

export default function NewsPage() {
  return (
    <>
      <PageHero
        eyebrow="News"
        title="Announcements, project updates and engineering insight"
        description="Contract awards and milestones, plus the occasional longer piece from our engineers on problems we think the industry gets wrong."
        breadcrumbs={[{ label: "News" }]}
      />

      {/* Featured article */}
      <Section className="pb-0 sm:pb-0 lg:pb-0">
        <Container>
          <Link
            href={`/news/${featured.slug}`}
            className="group grid overflow-hidden rounded-2xl border border-border bg-card transition-all outline-none hover:border-primary/40 hover:shadow-md focus-visible:ring-3 focus-visible:ring-ring/50 lg:grid-cols-2"
          >
            <div className="relative isolate min-h-52 overflow-hidden bg-ink">
              <GridPattern className="[mask-image:none] opacity-70" />
              <div
                aria-hidden
                className="absolute -right-12 -bottom-16 size-60 rounded-full bg-primary/40 blur-2xl"
              />
              <div className="relative flex h-full items-start p-7">
                <Badge variant="brand">Latest</Badge>
              </div>
            </div>
            <div className="flex flex-col p-7 sm:p-9">
              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <Badge variant="secondary">{featured.category}</Badge>
                <time dateTime={featured.date}>{formatDate(featured.date)}</time>
              </div>
              <h2 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
                {featured.title}
              </h2>
              <p className="mt-4 flex-1 leading-relaxed text-muted-foreground">
                {featured.excerpt}
              </p>
              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                Read the announcement
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </div>
          </Link>
        </Container>
      </Section>

      {/* Article list */}
      <Section>
        <Container>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((article) => (
              <li key={article.slug} className="flex">
                <Link
                  href={`/news/${article.slug}`}
                  className="group flex flex-1 flex-col rounded-xl border border-border bg-card p-6 transition-all outline-none hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md focus-visible:ring-3 focus-visible:ring-ring/50"
                >
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <Badge variant="muted">{article.category}</Badge>
                    <time dateTime={article.date}>{formatDate(article.date)}</time>
                  </div>
                  <h2 className="mt-4 text-lg leading-snug font-semibold tracking-tight">
                    {article.title}
                  </h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {article.excerpt}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                    Read more
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <CtaBand
        title="Media or investor enquiry?"
        description="Our corporate communications team handles press enquiries, interview requests and image licensing."
        primaryLabel="Contact communications"
      />
    </>
  );
}
