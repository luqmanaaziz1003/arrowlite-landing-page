import type { IconName } from "@/components/site/icon";

export const vision =
  "To be Southeast Asia's most trusted partner for the safe operation and responsible extension of energy infrastructure.";

export const mission =
  "We keep energy assets running safely, reliably and within their environmental limits — by combining disciplined engineering, certified people and honest reporting on every scope we take on.";

export type GroupCompany = {
  name: string;
  location: string;
  isHq?: boolean;
};

export const groupOfCompanies: GroupCompany[] = [
  { name: "Arrowlite Solutions Sdn Bhd", location: "Headquarters", isHq: true },
  { name: "Arrowlite Solutions Engineering Sdn Bhd", location: "Sarawak" },
  { name: "Arrowlite Solutions Engineering Services Sdn Bhd", location: "Sabah" },
  { name: "Arrowlite Engineering Sdn Bhd", location: "Kemaman" },
];

export type Milestone = {
  year: string;
  title: string;
  description: string;
};

export const milestones: Milestone[] = [
  {
    year: "2009",
    title: "Founded in Kuala Lumpur",
    description:
      "Established as a specialist inspection contractor with eleven staff serving two onshore clients.",
  },
  {
    year: "2013",
    title: "Kemaman operations base opened",
    description:
      "Moved offshore support in-house with a dedicated supply base and fabrication yard in Terengganu.",
  },
  {
    year: "2016",
    title: "Engineering division formed",
    description:
      "Added multi-discipline design capability, allowing us to take scopes from concept through to construction.",
  },
  {
    year: "2019",
    title: "One million safe manhours",
    description:
      "Reached a million consecutive manhours without a lost time injury across offshore operations.",
  },
  {
    year: "2021",
    title: "Regional expansion",
    description:
      "Opened the Singapore regional office and won first contracts in Indonesian and Bruneian waters.",
  },
  {
    year: "2024",
    title: "Energy transition practice launched",
    description:
      "Extended our integrity and engineering services to carbon storage and offshore wind foundations.",
  },
];

export type Value = {
  icon: IconName;
  title: string;
  description: string;
};

export const values: Value[] = [
  {
    icon: "ShieldCheck",
    title: "Safety is the scope",
    description:
      "Every scope is planned so it can be executed safely. If it cannot be, we change the plan — not the risk assessment.",
  },
  {
    icon: "Compass",
    title: "Engineering honesty",
    description:
      "We report what the data shows, including when it is inconvenient. Clients make better decisions with accurate information.",
  },
  {
    icon: "Users",
    title: "Local capability",
    description:
      "We hire and train in the communities where we operate, and we promote from within wherever the competency exists.",
  },
  {
    icon: "Leaf",
    title: "Responsible operation",
    description:
      "Extending the life of existing infrastructure is usually the lowest-carbon option available. We take that seriously.",
  },
];

export type Leader = {
  name: string;
  role: string;
  /** Initials used in place of a portrait until photography is available. */
  initials: string;
  bio: string;
};

export const leadership: Leader[] = [
  {
    name: "Nurul Hasyim",
    role: "Chief Executive Officer",
    initials: "NH",
    bio: "Twenty-six years in upstream operations, previously head of asset integrity for a national oil company. Joined Arrowlite as CEO in 2018.",
  },
  {
    name: "Daud Rahman",
    role: "Chief Operating Officer",
    initials: "DR",
    bio: "Former offshore installation manager with deep hook-up and commissioning experience across the Malay and Natuna basins.",
  },
  {
    name: "Priya Selvarajah",
    role: "Engineering Director",
    initials: "PS",
    bio: "Chartered process engineer specialising in brownfield debottlenecking and flare systems. Leads the multi-discipline design team.",
  },
  {
    name: "James Okoro",
    role: "HSE Director",
    initials: "JO",
    bio: "Built process safety management systems for two major operators before taking responsibility for Arrowlite's HSE performance in 2020.",
  },
  {
    name: "Lim Wei Chen",
    role: "Chief Financial Officer",
    initials: "LC",
    bio: "Oversees finance, procurement and commercial governance, with a background in project finance for energy infrastructure.",
  },
  {
    name: "Aisha Karim",
    role: "People & Capability Director",
    initials: "AK",
    bio: "Leads recruitment, competency assurance and the apprenticeship programme across all three operating locations.",
  },
];

export type Stat = { value: string; label: string };

export const companyStats: Stat[] = [
  { value: "16", label: "Years in operation" },
  { value: "640+", label: "People employed" },
  { value: "3", label: "Countries served" },
  { value: "4.2M", label: "Safe manhours" },
];

export type Accreditation = { code: string; label: string };

export const accreditations: Accreditation[] = [
  { code: "ISO 9001", label: "Quality management" },
  { code: "ISO 14001", label: "Environmental management" },
  { code: "ISO 45001", label: "Occupational health & safety" },
  { code: "ISO 9712", label: "NDT personnel certification" },
  { code: "IADC", label: "Member organisation" },
  { code: "IOGP", label: "Reporting alignment" },
];

export type License = { name: string; logo: string; width: number; height: number };

/** width/height are each logo's real pixel dimensions, so object-contain scales them proportionally instead of letterboxing inside a mismatched box. */
export const licenses: License[] = [
  { name: "CIDB Malaysia", logo: "/images/cidb-logo.png", width: 629, height: 175 },
  { name: "PETRONAS", logo: "/images/petronas-logo-0.png", width: 2640, height: 2684 },
  { name: "Ministry of Finance", logo: "/images/ministry.of.finance.png", width: 227, height: 191 },
];

/** Client logos are represented as wordmarks until real assets are supplied. */
export const clients: string[] = [
  "TecnimontHQC",
  "Deleum",
  "TDS",
  "KBC",
  "DCN",
  "Integma Engineering",
  "Elektro Serve",
  "Excellift",
  "NAZ Galaxy Group",
  "Sapura Energy",
  "DDS",
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "They flagged a riser defect that was outside their scope and outside their commercial interest to find. That tells you what kind of contractor they are.",
    name: "Head of Asset Integrity",
    role: "Asset Integrity",
    company: "Regional operator, Malaysia",
  },
  {
    quote:
      "The turnaround finished inside the window with a scope that grew by 12% mid-execution. The planning discipline behind that is the reason we re-awarded.",
    name: "Terminal Manager",
    role: "Operations",
    company: "Peninsular Gas Holdings",
  },
];
