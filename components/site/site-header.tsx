"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Mail, Menu, Phone, X } from "lucide-react";

import { Logo } from "@/components/site/logo";
import { Container } from "@/components/site/layout";
import { Button } from "@/components/ui/button";
import { mainNav, site } from "@/lib/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);
  const [renderedPath, setRenderedPath] = React.useState(pathname);

  // Close the mobile panel whenever the route changes — including on browser
  // back/forward. Adjusting during render rather than in an effect avoids a
  // cascading re-render. See https://react.dev/learn/you-might-not-need-an-effect
  if (pathname !== renderedPath) {
    setRenderedPath(pathname);
    setOpen(false);
  }

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="sticky top-0 z-50">
      {/* Utility strip */}
      <div className="hidden bg-ink text-ink-muted lg:block">
        <Container className="flex h-9 items-center justify-between text-xs">
          <p className="tracking-wide">{site.tagline}</p>
          <div className="flex items-center gap-6">
            <a
              href={`tel:${site.contact.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-1.5 transition-colors hover:text-ink-foreground"
            >
              <Phone className="size-3.5" />
              {site.contact.phone}
            </a>
            <a
              href={`mailto:${site.contact.email}`}
              className="flex items-center gap-1.5 transition-colors hover:text-ink-foreground"
            >
              <Mail className="size-3.5" />
              {site.contact.email}
            </a>
          </div>
        </Container>
      </div>

      {/* Main bar */}
      <div className="border-b border-border bg-background/85 backdrop-blur-md">
        <Container className="flex h-16 items-center justify-between gap-4">
          <Logo />

          <nav aria-label="Main" className="hidden flex-1 justify-center lg:flex">
            <ul className="flex items-center gap-1">
              {mainNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    className={cn(
                      "relative rounded-md px-3 py-2 text-sm font-medium transition-colors outline-none focus-visible:ring-3 focus-visible:ring-ring/50",
                      isActive(item.href)
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {item.label}
                    {isActive(item.href) ? (
                      <span
                        aria-hidden
                        className="absolute inset-x-3 -bottom-px h-0.5 rounded-full bg-brand"
                      />
                    ) : null}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <Button asChild size="lg" className="hidden sm:inline-flex">
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button
              variant="outline"
              size="icon-lg"
              className="lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((value) => !value)}
            >
              {open ? <X /> : <Menu />}
            </Button>
          </div>
        </Container>
      </div>

      {/* Mobile panel */}
      {open ? (
        <div
          id="mobile-nav"
          className="max-h-[calc(100dvh-4rem)] overflow-y-auto border-b border-border bg-background shadow-lg lg:hidden"
        >
          <Container className="py-4">
            <ul className="flex flex-col">
              {mainNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    className={cn(
                      "flex flex-col gap-0.5 rounded-lg px-3 py-3 transition-colors",
                      isActive(item.href)
                        ? "bg-muted text-foreground"
                        : "hover:bg-muted/60"
                    )}
                  >
                    <span className="text-sm font-medium">{item.label}</span>
                    {item.description ? (
                      <span className="text-xs text-muted-foreground">
                        {item.description}
                      </span>
                    ) : null}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex flex-col gap-2 border-t border-border pt-4 text-sm">
              <a
                href={`tel:${site.contact.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-2 text-muted-foreground"
              >
                <Phone className="size-4" />
                {site.contact.phone}
              </a>
              <a
                href={`mailto:${site.contact.email}`}
                className="flex items-center gap-2 text-muted-foreground"
              >
                <Mail className="size-4" />
                {site.contact.email}
              </a>
            </div>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
