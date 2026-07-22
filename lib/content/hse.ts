import type { IconName } from "@/components/site/icon";

export const hsePolicy =
  "No scope of work is so urgent that it cannot be done safely. Every person working for Adibte Energy has the authority to stop a job, without consequence, if they believe it is unsafe — and the obligation to use it.";

export type HseMetric = {
  value: string;
  label: string;
  note: string;
};

export const hseMetrics: HseMetric[] = [
  { value: "0.00", label: "Lost time injury frequency", note: "Per million manhours, rolling 12 months" },
  { value: "0.14", label: "Total recordable case frequency", note: "Per million manhours, rolling 12 months" },
  { value: "4.2M", label: "Consecutive safe manhours", note: "Across all operating locations" },
  { value: "3,180", label: "Hazard observations raised", note: "Reported by the workforce in 2025" },
];

export type HsePillar = {
  icon: IconName;
  title: string;
  description: string;
  points: string[];
};

export const pillars: HsePillar[] = [
  {
    icon: "HardHat",
    title: "Occupational Safety",
    description:
      "The controls that protect people doing physical work — permits, isolation, working at height and lifting operations.",
    points: [
      "Permit-to-work and energy isolation discipline",
      "Life-saving rules with clear consequence management",
      "Stop-work authority held by every worker",
      "Daily toolbox talks and task risk assessment",
    ],
  },
  {
    icon: "Siren",
    title: "Process Safety",
    description:
      "Preventing loss of containment on facilities that hold hydrocarbons under pressure and at temperature.",
    points: [
      "Barrier management and safety-critical element assurance",
      "Management of change for every deviation",
      "Process safety performance indicators reported monthly",
      "Incident investigation to root cause, shared openly",
    ],
  },
  {
    icon: "Leaf",
    title: "Environment",
    description:
      "Reducing the environmental footprint of our own operations and of the assets we help our clients run.",
    points: [
      "Zero routine flaring commitments in scope design",
      "Waste segregation and tracked disposal chains",
      "Spill prevention and marine discharge controls",
      "Emissions reporting aligned to client requirements",
    ],
  },
  {
    icon: "GraduationCap",
    title: "Competency & Training",
    description:
      "Making sure that everyone on site has demonstrated they can do the job, not just that they hold a certificate.",
    points: [
      "Competency assurance matrix by role and task",
      "BOSIET, HUET and offshore medical currency tracking",
      "In-house NDT and permit-holder training",
      "Apprenticeship intake at both operating bases",
    ],
  },
];

export type Certification = {
  code: string;
  title: string;
  scope: string;
};

export const certifications: Certification[] = [
  { code: "ISO 45001:2018", title: "Occupational Health & Safety", scope: "All operating locations" },
  { code: "ISO 14001:2015", title: "Environmental Management", scope: "All operating locations" },
  { code: "ISO 9001:2015", title: "Quality Management", scope: "All operating locations" },
  { code: "IOGP 423", title: "HSE Performance Reporting", scope: "Voluntary alignment" },
];
