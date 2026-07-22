"use client";

import * as React from "react";
import { ChevronDown, CircleCheck, Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input, Label, Select, Textarea } from "@/components/ui/input";
import { services } from "@/lib/content/services";

const enquiryTypes = [
  "General enquiry",
  "Request for quotation",
  "Tender invitation",
  "Media enquiry",
  "Supplier registration",
];

/**
 * Mock enquiry form. There is no backend yet — submitting only swaps the UI
 * into a confirmation state. Wire this to a Server Action or route handler
 * when a real destination for the enquiry exists.
 */
export function ContactForm() {
  const [submitted, setSubmitted] = React.useState(false);

  if (submitted) {
    return (
      <div className="flex flex-col items-start rounded-2xl border border-border bg-card p-8 sm:p-10">
        <span className="flex size-11 items-center justify-center rounded-lg bg-brand/15 text-brand-strong">
          <CircleCheck className="size-5" />
        </span>
        <h3 className="mt-5 text-xl font-semibold tracking-tight">
          Thanks — your enquiry is noted
        </h3>
        <p className="mt-3 leading-relaxed text-muted-foreground">
          In the finished site this would reach our commercial team, who reply
          within one working day. Right now the form is a front-end mock and
          nothing has been sent anywhere.
        </p>
        <Button
          variant="outline"
          size="lg"
          className="mt-6"
          onClick={() => setSubmitted(false)}
        >
          Submit another enquiry
        </Button>
      </div>
    );
  }

  return (
    <form
      className="rounded-2xl border border-border bg-card p-7 sm:p-9"
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
      }}
    >
      <h2 className="text-xl font-semibold tracking-tight">Send us an enquiry</h2>
      <p className="mt-2 text-sm text-muted-foreground">
        Fields marked with an asterisk are required.
      </p>

      <div className="mt-7 grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="name">Full name *</Label>
          <Input id="name" name="name" autoComplete="name" required />
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="company">Company *</Label>
          <Input id="company" name="company" autoComplete="organization" required />
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="email">Work email *</Label>
          <Input id="email" name="email" type="email" autoComplete="email" required />
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="phone">Phone</Label>
          <Input id="phone" name="phone" type="tel" autoComplete="tel" />
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="enquiryType">Enquiry type *</Label>
          <div className="relative">
            <Select id="enquiryType" name="enquiryType" required defaultValue="">
              <option value="" disabled>
                Select an option
              </option>
              {enquiryTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </Select>
            <ChevronDown
              aria-hidden
              className="pointer-events-none absolute top-1/2 right-3 size-4 -translate-y-1/2 text-muted-foreground"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="service">Service of interest</Label>
          <div className="relative">
            <Select id="service" name="service" defaultValue="">
              <option value="">Not sure yet</option>
              {services.map((service) => (
                <option key={service.slug} value={service.slug}>
                  {service.title}
                </option>
              ))}
            </Select>
            <ChevronDown
              aria-hidden
              className="pointer-events-none absolute top-1/2 right-3 size-4 -translate-y-1/2 text-muted-foreground"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2 sm:col-span-2">
          <Label htmlFor="message">How can we help? *</Label>
          <Textarea
            id="message"
            name="message"
            required
            placeholder="Tell us about the asset, the scope and the window you are working with."
          />
        </div>
      </div>

      <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-sm text-xs leading-relaxed text-muted-foreground">
          Demo form — nothing is transmitted or stored. Do not enter confidential
          information.
        </p>
        <Button type="submit" size="lg" className="shrink-0">
          Send enquiry
          <Send data-icon="inline-end" />
        </Button>
      </div>
    </form>
  );
}
