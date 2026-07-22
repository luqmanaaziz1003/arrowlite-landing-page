import type { IconName } from "@/components/site/icon";

export type Vacancy = {
  id: string;
  title: string;
  department: string;
  location: string;
  type: "Full-time" | "Contract" | "Rotational";
  rotation?: string;
  postedOn: string;
  summary: string;
  requirements: string[];
};

export const vacancies: Vacancy[] = [
  {
    id: "eng-piping-001",
    title: "Senior Piping Engineer",
    department: "Engineering",
    location: "Kuala Lumpur, Malaysia",
    type: "Full-time",
    postedOn: "2026-07-02",
    summary:
      "Lead piping design packages for brownfield modification scopes, from stress analysis through to issued-for-construction isometrics.",
    requirements: [
      "8+ years piping design experience in oil and gas",
      "Proficiency in CAESAR II and a 3D plant modelling suite",
      "Experience with brownfield tie-in design on live facilities",
    ],
  },
  {
    id: "ops-oim-002",
    title: "Offshore Installation Manager",
    department: "Offshore Operations",
    location: "Offshore Malaysia",
    type: "Rotational",
    rotation: "28 days on / 28 days off",
    postedOn: "2026-06-24",
    summary:
      "Take overall accountability for safety, execution and personnel on board during hook-up and construction campaigns.",
    requirements: [
      "Valid OIM certification and offshore medical",
      "10+ years offshore construction, 3+ in a supervisory role",
      "Demonstrated emergency response command experience",
    ],
  },
  {
    id: "insp-ndt-003",
    title: "NDT Level II Technician (PAUT)",
    department: "Inspection",
    location: "Kemaman, Terengganu",
    type: "Full-time",
    postedOn: "2026-06-18",
    summary:
      "Carry out advanced ultrasonic inspection on pressure systems and structural welds, both onshore and on offshore campaigns.",
    requirements: [
      "ISO 9712 Level II in UT and PAUT",
      "Offshore survival and medical certification (or willingness to obtain)",
      "Clear written reporting in English",
    ],
  },
  {
    id: "hse-adv-004",
    title: "HSE Advisor",
    department: "HSE",
    location: "Kemaman, Terengganu",
    type: "Full-time",
    postedOn: "2026-06-11",
    summary:
      "Support site teams with risk assessment, permit auditing and incident investigation across the operations base and offshore scopes.",
    requirements: [
      "NEBOSH IGC or equivalent qualification",
      "5+ years HSE experience in energy or heavy construction",
      "Incident investigation training (TapRooT, ICAM or similar)",
    ],
  },
  {
    id: "log-coord-005",
    title: "Logistics Coordinator",
    department: "Logistics",
    location: "Kemaman, Terengganu",
    type: "Full-time",
    postedOn: "2026-05-29",
    summary:
      "Coordinate offshore sailings, backloads and materials movement between the supply base and client assets.",
    requirements: [
      "3+ years supply base or offshore logistics coordination",
      "Familiarity with dangerous goods documentation",
      "Working knowledge of a warehouse management system",
    ],
  },
  {
    id: "grad-prog-006",
    title: "Graduate Engineer Programme 2027",
    department: "Engineering",
    location: "Kuala Lumpur, Malaysia",
    type: "Full-time",
    postedOn: "2026-05-15",
    summary:
      "A two-year structured rotation across process, mechanical and integrity engineering, with offshore exposure in year two.",
    requirements: [
      "Bachelor's degree in an engineering discipline, 2026 or 2027 graduate",
      "Eligibility to work in Malaysia",
      "Willingness to travel and work offshore",
    ],
  },
];

export type Benefit = {
  icon: IconName;
  title: string;
  description: string;
};

export const benefits: Benefit[] = [
  {
    icon: "GraduationCap",
    title: "Funded certification",
    description:
      "We pay for the tickets your role requires — NDT levels, offshore survival, professional chartership — and the time to study for them.",
  },
  {
    icon: "Activity",
    title: "Health cover for families",
    description:
      "Medical cover extends to spouses and children, with offshore personnel covered for evacuation and specialist care.",
  },
  {
    icon: "Clock",
    title: "Predictable rotations",
    description:
      "Offshore rotations are published a quarter ahead. We protect leave and we do not extend hitches without agreement.",
  },
  {
    icon: "TrendingUp",
    title: "Promotion from within",
    description:
      "Most of our supervisors and half of our management team started in technician or graduate roles here.",
  },
];

export type HiringStep = {
  step: string;
  title: string;
  description: string;
};

export const hiringProcess: HiringStep[] = [
  {
    step: "01",
    title: "Application review",
    description:
      "Every application is read by the hiring manager for the role. We reply either way, usually within ten working days.",
  },
  {
    step: "02",
    title: "Technical conversation",
    description:
      "A working discussion about scopes you have actually delivered — not a whiteboard test.",
  },
  {
    step: "03",
    title: "Competency assessment",
    description:
      "Verification of certification and, for technical roles, a practical assessment relevant to the job.",
  },
  {
    step: "04",
    title: "Offer and onboarding",
    description:
      "Offer, medical, and an induction covering our HSE expectations before you set foot on a site.",
  },
];
