import type { Metadata } from "next";
import { Building2, Mail, MapPin, Phone, Printer } from "lucide-react";

import { ContactForm } from "@/components/site/contact-form";
import { Container, Section, SectionHeader } from "@/components/site/layout";
import { PageHero } from "@/components/site/page-hero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Offices, enquiry details and 24-hour emergency contact for ${site.name}.`,
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Talk to someone who has done the job"
        description="Enquiries reach our commercial team, who route them to an engineer in the relevant discipline. You will not be handed to a call centre."
        breadcrumbs={[{ label: "Contact" }]}
      />

      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

            <aside className="flex flex-col gap-4 lg:col-span-5">
              <div className="rounded-2xl border border-border bg-muted/50 p-7">
                <h2 className="text-xs font-semibold tracking-[0.16em] text-muted-foreground uppercase">
                  General enquiries
                </h2>
                <ul className="mt-5 flex flex-col gap-4 text-sm">
                  <li className="flex items-start gap-3">
                    <Phone className="mt-0.5 size-4 shrink-0 text-brand-strong" />
                    <div>
                      <p className="text-muted-foreground">Telephone</p>
                      <a
                        href={`tel:${site.contact.phone.replace(/\s/g, "")}`}
                        className="font-medium hover:underline"
                      >
                        {site.contact.phone}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Mail className="mt-0.5 size-4 shrink-0 text-brand-strong" />
                    <div>
                      <p className="text-muted-foreground">Email</p>
                      <a
                        href={`mailto:${site.contact.email}`}
                        className="font-medium break-all hover:underline"
                      >
                        {site.contact.email}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Printer className="mt-0.5 size-4 shrink-0 text-brand-strong" />
                    <div>
                      <p className="text-muted-foreground">Fax</p>
                      <p className="font-medium">{site.contact.fax}</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Building2 className="mt-0.5 size-4 shrink-0 text-brand-strong" />
                    <div>
                      <p className="text-muted-foreground">Careers</p>
                      <a
                        href={`mailto:${site.contact.careersEmail}`}
                        className="font-medium break-all hover:underline"
                      >
                        {site.contact.careersEmail}
                      </a>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl border border-dashed border-border p-7">
                <h2 className="text-xs font-semibold tracking-[0.16em] text-muted-foreground uppercase">
                  Response times
                </h2>
                <dl className="mt-5 flex flex-col gap-3 text-sm">
                  {[
                    { term: "General enquiries", detail: "1 working day" },
                    { term: "Requests for quotation", detail: "3 working days" },
                    { term: "Tender submissions", detail: "As per tender schedule" },
                  ].map((item) => (
                    <div
                      key={item.term}
                      className="flex items-baseline justify-between gap-4"
                    >
                      <dt className="text-muted-foreground">{item.term}</dt>
                      <dd className="font-medium">{item.detail}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </aside>
          </div>
        </Container>
      </Section>

      {/* Offices */}
      <Section tone="muted">
        <Container>
          <SectionHeader
            eyebrow="Our offices"
            title="Where to find us"
            description="Corporate headquarters in Kuala Lumpur, an operations base at Kemaman Supply Base, and a regional commercial office in Singapore."
          />
          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            {site.offices.map((office) => (
              <div
                key={office.city}
                className="flex flex-col rounded-2xl border border-border bg-card p-7"
              >
                <p className="text-xs font-semibold tracking-[0.16em] text-muted-foreground uppercase">
                  {office.label}
                </p>
                <h3 className="mt-3 text-xl font-semibold tracking-tight">
                  {office.city}
                  <span className="ml-2 text-sm font-normal text-muted-foreground">
                    {office.country}
                  </span>
                </h3>
                <address className="mt-5 flex flex-1 items-start gap-2.5 text-sm leading-relaxed text-muted-foreground not-italic">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-brand-strong" />
                  <span>
                    {office.lines.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </span>
                </address>
                <a
                  href={`tel:${office.phone.replace(/\s/g, "")}`}
                  className="mt-5 flex items-center gap-2.5 border-t border-border pt-5 text-sm font-medium hover:underline"
                >
                  <Phone className="size-4 shrink-0 text-brand-strong" />
                  {office.phone}
                </a>
              </div>
            ))}
          </div>

          {/* Map placeholder — swap for an embedded map when a provider is chosen */}
          <div className="relative mt-4 flex aspect-21/9 items-center justify-center overflow-hidden rounded-2xl border border-border bg-muted">
            <div
              aria-hidden
              className="absolute inset-0 bg-grid text-foreground/[0.06]"
            />
            <p className="relative text-sm text-muted-foreground">
              Map placeholder — embed a map provider here
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}
