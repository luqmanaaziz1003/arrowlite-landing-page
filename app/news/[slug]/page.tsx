import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { CtaBand } from "@/components/site/cta-band";
import { Container, Section } from "@/components/site/layout";
import { PageHero } from "@/components/site/page-hero";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { articles, formatDate, getArticle, sortedArticles } from "@/lib/content/news";

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata(
  props: PageProps<"/news/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  const article = getArticle(slug);

  if (!article) return {};

  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      type: "article",
      title: article.title,
      description: article.excerpt,
      publishedTime: article.date,
    },
  };
}

export default async function ArticlePage(props: PageProps<"/news/[slug]">) {
  const { slug } = await props.params;
  const article = getArticle(slug);

  if (!article) notFound();

  const related = sortedArticles
    .filter((item) => item.slug !== article.slug)
    .slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow={article.category}
        title={article.title}
        breadcrumbs={[{ label: "News", href: "/news" }, { label: article.category }]}
      >
        <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-ink-muted">
          <time dateTime={article.date}>{formatDate(article.date)}</time>
          <span aria-hidden className="opacity-40">
            |
          </span>
          <span>{article.author}</span>
        </p>
      </PageHero>

      <Section>
        <Container>
          <article className="mx-auto max-w-2xl">
            <p className="text-lg leading-relaxed font-medium tracking-tight text-balance">
              {article.excerpt}
            </p>
            <div className="mt-8 flex flex-col gap-6 border-t border-border pt-8 text-base leading-relaxed text-muted-foreground">
              {article.body.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-10 border-t border-border pt-8">
              <Button asChild variant="link" className="h-auto p-0">
                <Link href="/news">
                  <ArrowLeft data-icon="inline-start" />
                  Back to all news
                </Link>
              </Button>
            </div>
          </article>
        </Container>
      </Section>

      <Section tone="muted">
        <Container>
          <h2 className="text-2xl font-semibold tracking-tight">More from Arrowlite</h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((item) => (
              <li key={item.slug} className="flex">
                <Link
                  href={`/news/${item.slug}`}
                  className="group flex flex-1 flex-col rounded-xl border border-border bg-card p-6 transition-all outline-none hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md focus-visible:ring-3 focus-visible:ring-ring/50"
                >
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <Badge variant="muted">{item.category}</Badge>
                    <time dateTime={item.date}>{formatDate(item.date)}</time>
                  </div>
                  <h3 className="mt-4 flex-1 leading-snug font-semibold tracking-tight">
                    {item.title}
                  </h3>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                    Read more
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <CtaBand />
    </>
  );
}
