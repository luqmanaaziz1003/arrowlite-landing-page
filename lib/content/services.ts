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
    slug: "engineering",
    title: "Engineering Service",
    icon: "Compass",
    summary:
      "Civil, structural and mechanical design backed by rigorous review and qualification for producing assets.",
    intro:
      "Our in-house engineering team covers civil, structural and mechanical disciplines. Every design is put through independent review and endorsement, validated with FMEA and FEA, and paired with fully developed welding procedures so that what reaches the field is qualified and repeatable.",
    capabilities: [
      {
        title: "Civil, Structural & Mechanical Design",
        description:
          "Civil, structural and mechanical design for new-build and brownfield oil and gas facilities.",
      },
      {
        title: "Design Review & Endorsement",
        description:
          "Independent review and endorsement of design packages prior to fabrication or construction.",
      },
      {
        title: "FMEA & FEA",
        description:
          "Failure Mode Effect Analysis (FMEA) and Finite Element Analysis (FEA) to validate design integrity.",
      },
      {
        title: "WPS & WQT Development",
        description:
          "Welding Procedure Specification (WPS) and Welder Qualification Test (WQT) development.",
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
    title: "Construction, Installation and Maintenance",
    icon: "Wrench",
    summary:
      "Structural and pipeline construction, crane inspection and mechanical maintenance for producing assets.",
    intro:
      "From structural and pipeline construction through to crane inspection, certified lifting equipment and mechanical maintenance, we keep producing assets built, installed and running to certification standard.",
    capabilities: [
      {
        title: "Structural / Pipeline",
        description:
          "Structural and pipeline construction and installation for onshore and offshore facilities.",
      },
      {
        title: "Crane Inspection & Maintenance",
        description:
          "Overhead crane, offshore crane and port crane inspection, preventive/corrective maintenance and repair/refurbishment.",
      },
      {
        title: "DNV Certified Lifting Equipment",
        description:
          "DNV certified baskets and containers for offshore lifting operations.",
      },
      {
        title: "Mechanical & Hydraulic Maintenance",
        description:
          "Mechanical and hydraulic system maintenance and troubleshooting.",
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
    title: "Diesel Engine Service",
    icon: "ScanLine",
    summary:
      "Overhaul, installation, commissioning and troubleshooting for all types of diesel engines.",
    intro:
      "Our technicians work on all types of diesel engines, from general overhaul through to equipment installation, commissioning and health checks, backed by hands-on troubleshooting when something needs to be diagnosed and fixed in the field.",
    capabilities: [
      {
        title: "General / Top / Bottom Overhaul",
        description:
          "General overhaul and top/bottom overhaul for all types of diesel engines.",
      },
      {
        title: "Installation, Commissioning & Inspection",
        description:
          "Equipment installation, commissioning and inspection/health check.",
      },
      {
        title: "Troubleshooting",
        description:
          "On-site diagnosis and troubleshooting to resolve diesel engine faults.",
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
    title: "Welding and NDT",
    icon: "Flame",
    summary:
      "Welding consumables, equipment trading, inspection, fabrication training and NDT for industrial assets.",
    intro:
      "We support welding and fabrication operations end to end — trading consumables and equipment, running welding inspections and industrial training, and delivering non-destructive testing so that every weld is qualified and traceable.",
    capabilities: [
      {
        title: "Welding Consumables Trading",
        description:
          "Supply and trading of welding consumables for industrial fabrication.",
      },
      {
        title: "Welding Inspections",
        description:
          "Welding inspection services to verify weld quality against specification.",
      },
      {
        title: "Welding/Cutting Equipment Supply & Trading",
        description:
          "Supply and trading of welding and cutting equipment.",
      },
      {
        title: "Welding & Fabrication Industrial Training",
        description:
          "Industrial training programmes for welding and fabrication personnel.",
      },
      {
        title: "NDT (DPI, MPI, UT and PAUT)",
        description:
          "Non-destructive testing including dye penetrant, magnetic particle, ultrasonic and phased array ultrasonic testing.",
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
  {
    slug: "marine-subsea",
    title: "Marine & Subsea Services",
    icon: "Waves",
    summary:
      "Diver and ROV-supported pipeline, riser, hull and offshore construction work below the waterline.",
    intro:
      "Our marine and subsea teams work underwater on the same infrastructure our topside crews support onshore — pipelines, risers, hulls, moorings and marine civil works — combining commercial diving with inspection, construction and maintenance scopes.",
    capabilities: [
      {
        title: "Pipeline & Riser Demolition, Recovery & Repair",
        description:
          "Underwater demolition, recovery and repair of pipelines and risers.",
      },
      {
        title: "Underwater Cutting, Welding & Hull Cleaning",
        description:
          "Diver-performed underwater cutting, welding and hull cleaning.",
      },
      {
        title: "Pipeline Pre-commissioning & Hydro Testing",
        description:
          "Pipeline pre-commissioning, flooding, cleaning and hydrostatic testing.",
      },
      {
        title: "Propeller Polishing & Cathodic Protection Installation",
        description:
          "Propeller polishing and installation of cathodic protection systems.",
      },
      {
        title: "SBM/SPM Inspection, Change-Out & Installation",
        description:
          "Inspection, change-out and installation of single buoy/single point mooring systems.",
      },
      {
        title: "Marine Offshore Construction",
        description:
          "Marine offshore construction including jetty works, pile wrap and geo-fabric laying.",
      },
      {
        title: "Hook-up & Topside Services",
        description:
          "Hook-up and topside services supporting marine and subsea campaigns.",
      },
      {
        title: "Invasive Marine Species Inspection",
        description:
          "Inspection for invasive marine species on subsea structures and hulls.",
      },
    ],
    deliverables: [
      "Dive and ROV operations plan and method statements",
      "Diver logs and inspection video/photo records",
      "As-found and as-left condition reports",
      "Marine campaign close-out dossier",
    ],
    stats: [
      { value: "24/7", label: "Dive support availability" },
      { value: "8", label: "Subsea capabilities offered" },
    ],
  },
  {
    slug: "hot-tapping",
    title: "Hot Tapping",
    icon: "Drill",
    summary:
      "Live connections to in-service piping without shutting down or depressurising the system.",
    intro:
      "Hot tapping lets us make new connections to piping while the system stays live — attaching a hot tap fitting by welding, then cutting through the pipe wall at the point of attachment with an appropriate hot tap machine, so production is never interrupted.",
    capabilities: [
      {
        title: "Live Hot Tap Connections",
        description:
          "Hot Tap is the method of making connections to piping by attaching a Hot Tap fitting to the system, usually by welding, followed by cutting through the pipe wall at the point of attachment utilizing an appropriate hot tap machine.",
      },
    ],
    deliverables: [
      "Hot tap procedure and method statement",
      "Fitting welding and NDT records",
      "Machine setup and cutting records",
      "Post-tap pressure test and close-out report",
    ],
    stats: [
      { value: "0", label: "Production downtime required" },
      { value: "24/7", label: "Crew availability" },
    ],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}
