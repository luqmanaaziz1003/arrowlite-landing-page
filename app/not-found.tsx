import Link from "next/link";

import { Container, GridPattern } from "@/components/site/layout";
import { Button } from "@/components/ui/button";
import { mainNav } from "@/lib/site";

export default function NotFound() {
  return (
    <section className="relative isolate flex min-h-[60vh] items-center overflow-hidden bg-ink text-ink-foreground">
      <GridPattern />
      <Container className="relative py-20 text-center">
        <p className="font-mono text-sm tracking-[0.2em] text-brand uppercase">
          Error 404
        </p>
        <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
          This page could not be located
        </h1>
        <p className="mx-auto mt-5 max-w-lg leading-relaxed text-ink-muted">
          The page may have been moved or retired. Try one of the sections below,
          or head back to the homepage.
        </p>
        <Button asChild size="lg" className="mt-8">
          <Link href="/">Return home</Link>
        </Button>
        <ul className="mt-12 flex flex-wrap justify-center gap-2 border-t border-white/10 pt-8">
          {mainNav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="inline-flex rounded-full border border-white/15 px-4 py-1.5 text-sm text-ink-muted transition-colors hover:bg-white/10 hover:text-ink-foreground"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
