export type ProjectStatus = "completed" | "ongoing";

export type Project = {
  slug: string;
  title: string;
  client: string;
  location: string;
  status: ProjectStatus;
  /** Display-only period, e.g. "2022 – 2024". */
  period: string;
  year: number;
  discipline: string;
  summary: string;
  scope: string[];
  highlights: { value: string; label: string }[];
};

export const projects: Project[] = [
  {
    slug: "tapis-riser-replacement",
    title: "Tapis-B Riser Replacement Campaign",
    client: "Regional Operator (confidential)",
    location: "Offshore Terengganu, Malaysia",
    status: "completed",
    period: "2023 – 2024",
    year: 2024,
    discipline: "Engineering Services",
    summary:
      "Replacement of six production risers and associated clamps on a producing platform, executed across two weather windows with no loss of production from adjacent wells.",
    scope: [
      "Underwater survey and riser condition assessment",
      "Detailed design of replacement risers and clamp assemblies",
      "Fabrication, load-out and offshore installation",
      "Hydrotesting, reinstatement and as-built documentation",
    ],
    highlights: [
      { value: "0", label: "Lost time injuries" },
      { value: "6", label: "Risers replaced" },
      { value: "11 days", label: "Ahead of schedule" },
    ],
  },
  {
    slug: "kemaman-gas-terminal-turnaround",
    title: "Kemaman Gas Terminal Turnaround",
    client: "Peninsular Gas Holdings",
    location: "Kemaman, Terengganu",
    status: "completed",
    period: "2023",
    year: 2023,
    discipline: "Maintenance",
    summary:
      "Full statutory turnaround of a two-train onshore gas processing terminal, covering 1,400 discrete work orders inside a 26-day shutdown window.",
    scope: [
      "Turnaround scope challenge and work pack preparation",
      "Heat exchanger bundle extraction and cleaning",
      "Relief valve overhaul and recertification",
      "Catalyst change-out and reinstatement",
    ],
    highlights: [
      { value: "26 days", label: "Shutdown duration" },
      { value: "1,400", label: "Work orders executed" },
      { value: "780", label: "Peak workforce" },
    ],
  },
  {
    slug: "bintulu-flare-tip-modification",
    title: "Bintulu Flare Tip Modification",
    client: "Borneo LNG Ventures",
    location: "Bintulu, Sarawak",
    status: "completed",
    period: "2022",
    year: 2022,
    discipline: "Engineering",
    summary:
      "Engineering and installation of a replacement flare tip and ignition system on a live LNG facility, eliminating a recurring smoke-emission exceedance.",
    scope: [
      "Flare radiation and dispersion modelling",
      "Structural assessment of the existing derrick",
      "Detailed design of replacement tip and pilot system",
      "Installation supervision during a short shutdown",
    ],
    highlights: [
      { value: "-92%", label: "Smoke exceedances" },
      { value: "4 days", label: "Shutdown window" },
      { value: "1", label: "Live facility tie-in" },
    ],
  },
  {
    slug: "sabah-pipeline-integrity",
    title: "Sabah Trunkline Integrity Programme",
    client: "Sabah Upstream Partners",
    location: "Offshore Sabah, Malaysia",
    status: "ongoing",
    period: "2024 – present",
    year: 2024,
    discipline: "Inspection",
    summary:
      "Multi-year risk-based inspection programme covering 220 km of subsea trunkline and eight associated riser sections, extending certified operating life to 2038.",
    scope: [
      "Corrosion loop definition and degradation modelling",
      "Intelligent pigging campaign management",
      "ROV external survey and free-span assessment",
      "Fitness-for-service and remnant life reporting",
    ],
    highlights: [
      { value: "220 km", label: "Trunkline covered" },
      { value: "2038", label: "Extended life to" },
      { value: "8", label: "Riser sections" },
    ],
  },
  {
    slug: "east-natuna-hookup",
    title: "East Natuna Wellhead Platform Hook-Up",
    client: "Nusantara Energy",
    location: "Natuna Sea, Indonesia",
    status: "ongoing",
    period: "2025 – present",
    year: 2025,
    discipline: "Engineering Services",
    summary:
      "Hook-up and commissioning of an unmanned wellhead platform including subsea tie-in to an existing production hub 34 km away.",
    scope: [
      "Offshore hook-up of topside modules",
      "Subsea pipeline tie-in and spool installation",
      "Instrumentation loop checks and pre-commissioning",
      "Start-up support and performance testing",
    ],
    highlights: [
      { value: "34 km", label: "Tie-in distance" },
      { value: "12", label: "Topside modules" },
      { value: "2026", label: "Target first gas" },
    ],
  },
  {
    slug: "terengganu-supply-base",
    title: "Terengganu Supply Base Expansion",
    client: "Arrowlite Solutions Group (internal)",
    location: "Kemaman, Terengganu",
    status: "ongoing",
    period: "2025 – 2026",
    year: 2025,
    discipline: "Logistics",
    summary:
      "Expansion of our Kemaman operations base with an additional 6,000 m² of controlled warehousing and a dedicated dangerous-goods compound.",
    scope: [
      "Site development and civil works",
      "Controlled and bonded warehouse fit-out",
      "Dangerous goods storage compound",
      "Warehouse management system rollout",
    ],
    highlights: [
      { value: "6,000 m²", label: "Additional storage" },
      { value: "2026", label: "Completion target" },
      { value: "45", label: "New local jobs" },
    ],
  },
  {
    slug: "brunei-compressor-overhaul",
    title: "Brunei Offshore Compressor Overhaul",
    client: "Sultanate Offshore Production",
    location: "Offshore Brunei",
    status: "completed",
    period: "2022 – 2023",
    year: 2023,
    discipline: "Maintenance",
    summary:
      "Major overhaul of two gas-lift compressor trains offshore, recovering 14% of lost gas-lift capacity and deferring a planned equipment replacement.",
    scope: [
      "Vibration analysis and root cause investigation",
      "Rotor removal, refurbishment and reinstallation",
      "Auxiliary systems overhaul and control tuning",
      "Performance testing and reliability handover",
    ],
    highlights: [
      { value: "+14%", label: "Gas-lift capacity recovered" },
      { value: "2", label: "Compressor trains" },
      { value: "0", label: "Recordable incidents" },
    ],
  },
  {
    slug: "sarawak-onshore-feed",
    title: "Sarawak Onshore Terminal FEED",
    client: "Borneo LNG Ventures",
    location: "Bintulu, Sarawak",
    status: "completed",
    period: "2021 – 2022",
    year: 2022,
    discipline: "Engineering",
    summary:
      "Front-end engineering design for a debottlenecking package raising onshore terminal throughput by 18% without additional compression.",
    scope: [
      "Process simulation and bottleneck identification",
      "Option selection and cost estimation to ±25%",
      "FEED package and constructability review",
      "Execution strategy and schedule development",
    ],
    highlights: [
      { value: "+18%", label: "Throughput uplift" },
      { value: "±25%", label: "Estimate accuracy" },
      { value: "9 months", label: "FEED duration" },
    ],
  },
];

export const completedProjects = projects.filter((p) => p.status === "completed");
export const ongoingProjects = projects.filter((p) => p.status === "ongoing");

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

/** Stand-in for a photo gallery until real project photography is available. */
export type GalleryItem = {
  title: string;
  caption: string;
  discipline: string;
};

export const gallery: GalleryItem[] = [
  { title: "Riser clamp installation", caption: "Offshore Terengganu, 2024", discipline: "Offshore" },
  { title: "Turnaround night shift", caption: "Kemaman Gas Terminal, 2023", discipline: "Maintenance" },
  { title: "Phased array inspection", caption: "Offshore Sabah, 2024", discipline: "Inspection" },
  { title: "Module load-out", caption: "Natuna Sea, 2025", discipline: "Offshore" },
  { title: "Warehouse expansion", caption: "Kemaman Supply Base, 2025", discipline: "Logistics" },
  { title: "Flare tip lift", caption: "Bintulu, Sarawak, 2022", discipline: "Engineering" },
];
