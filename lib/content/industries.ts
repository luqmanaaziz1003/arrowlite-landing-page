import type { IconName } from "@/components/site/icon";

export type Industry = {
  slug: string;
  title: string;
  icon: IconName;
  summary: string;
  challenges: string[];
  /** Service slugs most relevant to this industry. */
  relatedServices: string[];
};

export const industries: Industry[] = [
  {
    slug: "upstream-offshore",
    title: "Upstream — Offshore",
    icon: "Waves",
    summary:
      "Fixed platforms, FPSOs and mobile drilling units, where every hour of intervention is constrained by weather, bed space and production deferment.",
    challenges: [
      "Ageing platforms operating beyond original design life",
      "Limited offshore bed space and weather windows",
      "Production deferment cost of any shutdown",
    ],
    relatedServices: ["offshore-services", "inspection", "maintenance"],
  },
  {
    slug: "upstream-onshore",
    title: "Upstream — Onshore",
    icon: "Drill",
    summary:
      "Onshore wellsites, gathering networks and early production facilities that need reliable support far from major infrastructure.",
    challenges: [
      "Dispersed assets with long response distances",
      "Sand, wax and corrosion management",
      "Local content and community expectations",
    ],
    relatedServices: ["maintenance", "engineering", "logistics"],
  },
  {
    slug: "midstream",
    title: "Midstream & Pipelines",
    icon: "Layers",
    summary:
      "Trunklines, pump and compressor stations and metering facilities where integrity evidence underpins the licence to operate.",
    challenges: [
      "Regulatory pressure for demonstrable pipeline integrity",
      "Internal and external corrosion in long trunklines",
      "Free-span and third-party interference offshore",
    ],
    relatedServices: ["inspection", "engineering", "maintenance"],
  },
  {
    slug: "lng-processing",
    title: "LNG & Gas Processing",
    icon: "Flame",
    summary:
      "Liquefaction trains, gas terminals and processing plants where turnaround duration directly determines annual throughput.",
    challenges: [
      "Very high cost of extended shutdown windows",
      "Cryogenic and high-temperature material considerations",
      "Emissions and flaring performance under scrutiny",
    ],
    relatedServices: ["maintenance", "engineering", "inspection"],
  },
  {
    slug: "petrochemical",
    title: "Petrochemical & Refining",
    icon: "Factory",
    summary:
      "Refineries and downstream chemical plants with complex, tightly coupled units and demanding statutory inspection regimes.",
    challenges: [
      "Dense plant layouts complicating access and isolation",
      "Statutory inspection and relief system compliance",
      "Catalyst and exchanger campaigns on fixed cycles",
    ],
    relatedServices: ["maintenance", "inspection", "logistics"],
  },
  {
    slug: "energy-transition",
    title: "Energy Transition",
    icon: "Leaf",
    summary:
      "Carbon capture and storage, offshore wind foundations and repurposed infrastructure — where oilfield integrity discipline transfers directly.",
    challenges: [
      "Repurposing depleted reservoirs and existing pipelines",
      "New material and monitoring requirements for CO₂ service",
      "Marine growth and fatigue on offshore wind foundations",
    ],
    relatedServices: ["engineering", "inspection", "offshore-services"],
  },
];
