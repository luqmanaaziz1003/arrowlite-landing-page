import type { IconName } from "@/components/site/icon";

export type Service = {
  slug: string;
  title: string;
  icon: IconName;
  summary: string;
  /** Longer intro shown on the service detail page. */
  intro: string;
  capabilities: { title: string; description: string }[];
  deliverables: string[];
  stats: { value: string; label: string }[];
};

export const services: Service[] = [
  {
    slug: "offshore-services",
    title: "Offshore Services",
    icon: "Waves",
    summary:
      "Topside and subsea support for fixed platforms, FPSOs and mobile offshore drilling units across the region.",
    intro:
      "Our offshore division provides multi-disciplinary crews, marine spread coordination and specialist equipment for work over water. From hook-up and commissioning of a new wellhead platform through to late-life integrity campaigns, we mobilise self-sufficient teams that live and work offshore for the duration of the scope.",
    capabilities: [
      {
        title: "Hook-up & Commissioning",
        description:
          "Structural, mechanical, piping, electrical and instrumentation teams for greenfield and brownfield tie-ins.",
      },
      {
        title: "Subsea Intervention",
        description:
          "ROV-supported inspection, pipeline stabilisation, riser repair and subsea structure installation.",
      },
      {
        title: "Topside Fabrication",
        description:
          "On-site fabrication, module replacement and structural reinforcement carried out without shutting in production.",
      },
      {
        title: "Marine Coordination",
        description:
          "Vessel chartering, spread management, and offshore logistics planning including personnel-on-board tracking.",
      },
    ],
    deliverables: [
      "Offshore execution plan and method statements",
      "Dedicated OIM and offshore construction supervisors",
      "Daily progress and POB reporting",
      "As-built documentation and handover dossier",
    ],
    stats: [
      { value: "42", label: "Offshore campaigns delivered" },
      { value: "1.9M", label: "Offshore manhours" },
      { value: "18", label: "Platforms supported" },
    ],
  },
  {
    slug: "engineering",
    title: "Engineering",
    icon: "Compass",
    summary:
      "Concept through detailed design for production facilities, pipelines and brownfield modifications.",
    intro:
      "Our in-house engineering team covers process, mechanical, structural, piping, electrical and instrumentation disciplines. We work in a single 3D model environment so that clash detection, material take-offs and constructability reviews happen before anything reaches the fabrication yard.",
    capabilities: [
      {
        title: "Conceptual & FEED Studies",
        description:
          "Feasibility screening, option selection, cost estimation and front-end engineering design packages.",
      },
      {
        title: "Detailed Design",
        description:
          "Issued-for-construction drawings, 3D models, stress analysis and full material take-offs.",
      },
      {
        title: "Brownfield Modifications",
        description:
          "Tie-in design for live facilities, including de-bottlenecking and equipment replacement studies.",
      },
      {
        title: "Digital Twin & As-Built",
        description:
          "Laser-scanned point clouds converted into intelligent models for planning and future modifications.",
      },
    ],
    deliverables: [
      "Design basis and philosophy documents",
      "P&IDs, isometrics and general arrangement drawings",
      "Stress, structural and flow assurance analysis reports",
      "Reviewed material take-off and procurement specifications",
    ],
    stats: [
      { value: "70+", label: "Engineers and designers" },
      { value: "130", label: "Design packages issued" },
      { value: "6", label: "Disciplines in-house" },
    ],
  },
  {
    slug: "maintenance",
    title: "Maintenance",
    icon: "Wrench",
    summary:
      "Planned turnarounds, shutdown execution and long-term maintenance contracts for producing assets.",
    intro:
      "Unplanned downtime is the single largest controllable cost on a producing asset. We build maintenance programmes around criticality — not the calendar — combining condition monitoring with disciplined turnaround planning so that shutdown windows are as short and predictable as possible.",
    capabilities: [
      {
        title: "Turnaround & Shutdown",
        description:
          "Scope freeze, work pack preparation, critical-path scheduling and 24-hour execution crews.",
      },
      {
        title: "Rotating Equipment",
        description:
          "Overhaul, alignment and vibration analysis for pumps, compressors and gas turbines.",
      },
      {
        title: "Valve & Pressure Systems",
        description:
          "On-site valve testing, recertification, hot tapping and leak sealing under pressure.",
      },
      {
        title: "Preventive Programmes",
        description:
          "CMMS-driven planned maintenance regimes with spare-parts strategy and reliability reporting.",
      },
    ],
    deliverables: [
      "Turnaround execution plan and critical-path schedule",
      "Work packs and permit-to-work documentation",
      "Equipment history and reliability records",
      "Post-turnaround close-out report",
    ],
    stats: [
      { value: "98.6%", label: "Turnaround schedule adherence" },
      { value: "24/7", label: "Call-out coverage" },
      { value: "310", label: "Assets under contract" },
    ],
  },
  {
    slug: "inspection",
    title: "Inspection",
    icon: "ScanLine",
    summary:
      "Non-destructive testing, asset integrity assessment and regulatory certification support.",
    intro:
      "Ageing infrastructure is the defining challenge for the region's producing fields. Our certified inspectors combine conventional and advanced NDT with risk-based inspection methodology, so that inspection effort is concentrated where the consequence of failure is highest.",
    capabilities: [
      {
        title: "Advanced NDT",
        description:
          "Phased array ultrasonics, time-of-flight diffraction, eddy current and digital radiography.",
      },
      {
        title: "Risk-Based Inspection",
        description:
          "Corrosion loop definition, degradation modelling and inspection interval optimisation.",
      },
      {
        title: "Structural Integrity",
        description:
          "Fitness-for-service assessment, remnant life calculation and repair scheme verification.",
      },
      {
        title: "Certification Support",
        description:
          "Third-party liaison, statutory inspection scheduling and regulatory dossier preparation.",
      },
    ],
    deliverables: [
      "Inspection test plans and written schemes of examination",
      "NDT reports with traceable technician certification",
      "Anomaly register with severity ranking",
      "Fitness-for-service and remnant life assessments",
    ],
    stats: [
      { value: "55", label: "Certified inspectors" },
      { value: "12,000+", label: "Inspection points logged" },
      { value: "ISO 9712", label: "Technician certification" },
    ],
  },
  {
    slug: "logistics",
    title: "Logistics",
    icon: "Container",
    summary:
      "Supply base operations, freight forwarding and materials management for remote energy operations.",
    intro:
      "Equipment that arrives late is as costly as equipment that fails. We run supply base operations and controlled warehousing that keep critical spares traceable and available, and we handle the customs and permitting complexity of moving oilfield equipment across borders.",
    capabilities: [
      {
        title: "Supply Base Operations",
        description:
          "Quayside handling, backloading, container management and offshore sailing coordination.",
      },
      {
        title: "Freight Forwarding",
        description:
          "Air, sea and land freight including project cargo, oversized lifts and dangerous goods.",
      },
      {
        title: "Materials Management",
        description:
          "Bonded and controlled warehousing with barcode traceability and preservation regimes.",
      },
      {
        title: "Customs & Permitting",
        description:
          "Import permits, temporary importation and duty exemption handling for oilfield equipment.",
      },
    ],
    deliverables: [
      "Logistics execution plan and sailing schedule",
      "Material receipt and preservation records",
      "Customs documentation and permit register",
      "Inventory and consumption reporting",
    ],
    stats: [
      { value: "14,000 m²", label: "Warehousing capacity" },
      { value: "99.2%", label: "On-time delivery" },
      { value: "3", label: "Supply bases operated" },
    ],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}
