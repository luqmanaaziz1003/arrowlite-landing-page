export type NewsCategory = "Announcement" | "Project" | "HSE" | "Insight";

export type Article = {
  slug: string;
  title: string;
  category: NewsCategory;
  /** ISO date — formatted at render time. */
  date: string;
  author: string;
  excerpt: string;
  /** Plain paragraphs of mock body copy. */
  body: string[];
};

export const articles: Article[] = [
  {
    slug: "east-natuna-hookup-award",
    title: "Arrowlite Solutions Group awarded East Natuna wellhead platform hook-up",
    category: "Announcement",
    date: "2026-07-08",
    author: "Corporate Communications",
    excerpt:
      "The contract covers hook-up and commissioning of an unmanned wellhead platform and a 34 km subsea tie-in, with first gas targeted for 2026.",
    body: [
      "Arrowlite Solutions Group has been awarded the hook-up and commissioning contract for Nusantara Energy's East Natuna wellhead platform, extending our offshore construction presence in Indonesian waters.",
      "The scope covers offshore hook-up of twelve topside modules, subsea tie-in to an existing production hub 34 kilometres away, instrumentation loop checking and pre-commissioning, followed by start-up support and performance testing.",
      "Mobilisation begins in the fourth quarter, with a peak offshore workforce of around 180 personnel. First gas is targeted for late 2026.",
      "\"This award reflects a decade of building offshore construction capability that travels,\" said Daud Rahman, Chief Operating Officer. \"The team executing East Natuna is largely the team that delivered Tapis-B, and that continuity is what clients are buying.\"",
    ],
  },
  {
    slug: "four-million-safe-manhours",
    title: "Four million manhours without a lost time injury",
    category: "HSE",
    date: "2026-06-19",
    author: "James Okoro, HSE Director",
    excerpt:
      "The milestone spans offshore campaigns, turnaround execution and supply base operations across three countries — and it belongs to the people who used their stop-work authority.",
    body: [
      "Arrowlite Solutions Group has recorded four million consecutive manhours without a lost time injury across all operating locations.",
      "It is worth being precise about what a number like this does and does not mean. It does not mean nothing went wrong. In the same period our workforce raised 3,180 hazard observations and we stopped work on 47 occasions, eleven of those on scopes that were already behind schedule.",
      "That is the actual mechanism behind the milestone. A stop-work authority that carries no consequence for the person using it is the only control that reliably catches the hazard nobody wrote down in the risk assessment.",
      "We report our safety performance in line with IOGP 423 and publish it to clients quarterly, including the results that are unflattering. The next milestone matters less than keeping the reporting culture that produced this one.",
    ],
  },
  {
    slug: "sabah-trunkline-life-extension",
    title: "Sabah trunkline certified to 2038 following integrity programme",
    category: "Project",
    date: "2026-05-27",
    author: "Corporate Communications",
    excerpt:
      "A risk-based inspection programme covering 220 km of subsea trunkline has supported a fourteen-year extension to certified operating life.",
    body: [
      "The first phase of our multi-year integrity programme for Sabah Upstream Partners has concluded, supporting an extension of the trunkline's certified operating life to 2038.",
      "The programme combined intelligent pigging, ROV external survey and free-span assessment with degradation modelling across sixteen defined corrosion loops. Inspection effort was concentrated on the loops with the highest consequence of failure rather than distributed evenly along the line.",
      "Eight riser sections were assessed under fitness-for-service methodology. Two required reinforcement, which has since been completed; the remaining six were cleared without intervention.",
      "Phase two continues through 2027 and covers the associated pump station piping and metering skids.",
    ],
  },
  {
    slug: "energy-transition-practice",
    title: "Why integrity engineering is the transition skill nobody talks about",
    category: "Insight",
    date: "2026-04-30",
    author: "Priya Selvarajah, Engineering Director",
    excerpt:
      "Carbon storage and offshore wind do not need a new engineering discipline. They need the one the oilfield has been practising for forty years.",
    body: [
      "There is a persistent assumption that the energy transition requires an entirely new engineering workforce. In our experience the opposite is closer to true — much of what the transition needs is exactly what integrity engineers in this industry already do.",
      "A depleted reservoir being repurposed for carbon storage needs the same well integrity assessment it always needed, with different fluid properties. A repurposed pipeline needs the same corrosion modelling, recalibrated for CO₂ in the presence of water. An offshore wind foundation needs the same fatigue and marine growth assessment as a jacket.",
      "The genuinely new parts are narrower than the discourse suggests: material compatibility in dense-phase CO₂ service, monitoring requirements imposed by storage regulators, and the long measurement horizons that storage permits demand.",
      "That is a training problem, not a hiring problem. We launched our transition practice in 2024 by retraining existing integrity engineers rather than recruiting a separate team, and the first two carbon storage studies were delivered by people who spent the previous decade on producing assets.",
    ],
  },
  {
    slug: "kemaman-base-expansion",
    title: "Kemaman supply base expansion breaks ground",
    category: "Announcement",
    date: "2026-03-14",
    author: "Corporate Communications",
    excerpt:
      "An additional 6,000 m² of controlled warehousing and a dedicated dangerous-goods compound will come online through 2026.",
    body: [
      "Construction has begun on the expansion of our Kemaman operations base, adding 6,000 square metres of controlled warehousing and a purpose-built dangerous goods storage compound.",
      "The expansion responds to sustained growth in materials management scopes, where clients increasingly ask us to hold and preserve critical spares rather than carry that inventory themselves.",
      "The development will create around 45 permanent roles locally, with recruitment beginning in the first quarter of 2027. A new warehouse management system will be rolled out across both the existing and new facilities.",
      "Completion is targeted for the second half of 2026.",
    ],
  },
  {
    slug: "turnaround-planning-lessons",
    title: "What a 26-day turnaround teaches you about scope discipline",
    category: "Insight",
    date: "2026-02-06",
    author: "Corporate Communications",
    excerpt:
      "The Kemaman terminal turnaround absorbed 12% scope growth mid-execution and still finished in the window. Here is what made that possible.",
    body: [
      "Turnarounds overrun for a small number of repeated reasons, and almost none of them happen during the shutdown itself. They happen during scope definition, six to nine months earlier.",
      "On the Kemaman Gas Terminal turnaround we ran a formal scope challenge, in which every proposed work order had to justify why it could not be done while the plant was running. Roughly a fifth of the initial list did not survive that question.",
      "The second discipline is work pack readiness. A work order that arrives at the shutdown without materials confirmed, permits drafted and access planned is not scope — it is an intention. We do not schedule intentions on the critical path.",
      "Scope still grew by 12% once units were opened and inspected, which is normal and should be planned for. Because the base scope had been genuinely challenged and genuinely prepared, the float existed to absorb it. The turnaround closed inside its 26-day window.",
    ],
  },
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug);
}

/** Articles are authored newest-first; this keeps that guarantee explicit. */
export const sortedArticles = [...articles].sort((a, b) => b.date.localeCompare(a.date));

export function formatDate(iso: string): string {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}
