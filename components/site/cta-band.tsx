import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

import { Container, GridPattern } from "@/components/site/layout";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

export function CtaBand({
  title = "Have a scope you need delivered safely?",
  description = "Tell us what the asset is, what the constraint is, and when the window opens. We will tell you honestly whether we are the right contractor for it.",
  primaryLabel = "Start an enquiry",
  primaryHref = "/contact",
}: {
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-ink text-ink-foreground">
      <GridPattern />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 left-1/4 size-[32rem] rounded-full bg-primary/20 blur-3xl"
      />
      <Container className="relative py-16 sm:py-20">
        <div className="flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              {title}
            </h2>
            <p className="mt-4 leading-relaxed text-ink-muted">{description}</p>
          </div>
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
            <Button asChild size="lg">
              <Link href={primaryHref}>
                {primaryLabel}
                <ArrowRight data-icon="inline-end" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/20 bg-white/5 text-ink-foreground hover:bg-white/10 hover:text-ink-foreground"
            >
              <a href={`tel:${site.contact.phone.replace(/\s/g, "")}`}>
                <Phone data-icon="inline-start" />
                {site.contact.phone}
              </a>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
