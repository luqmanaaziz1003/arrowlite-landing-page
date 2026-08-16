/**
 * Central site configuration.
 *
 * Everything here is placeholder/mock content — swap the values for the real
 * company details when they're available. Nothing else in the app hardcodes
 * the company name, address or navigation.
 */

export const site = {
  name: "Arrowlite Solutions Group",
  legalName: "Arrowlite Solutions Sdn. Bhd.",
  tagline: "Your reliable solutions partner",
  description:
    "Arrowlite Solutions Group delivers engineering, maintenance, inspection and logistics services to offshore and onshore oil and gas operators across Southeast Asia.",
  url: "https://www.arrowlite-solutions.example",
  founded: 2009,
  contact: {
    email: "enquiries@arrowlite-solutions.example",
    careersEmail: "careers@arrowlite-solutions.example",
    phone: "+60 3 5555 0100",
    fax: "+60 3 5555 0101",
    emergency: "+60 12 555 0199",
  },
  offices: [
    {
      label: "Corporate Headquarters",
      city: "Kuala Lumpur",
      country: "Malaysia",
      lines: ["Level 22, Menara Perdana", "Jalan Sultan Ismail", "50250 Kuala Lumpur"],
      phone: "+60 3 5555 0100",
    },
    {
      label: "Operations Base",
      city: "Kemaman",
      country: "Malaysia",
      lines: ["Lot 4471, Kemaman Supply Base", "Telok Kalong", "24007 Kemaman, Terengganu"],
      phone: "+60 9 555 0140",
    },
    {
      label: "Regional Office",
      city: "Singapore",
      country: "Singapore",
      lines: ["18 Tuas Crescent", "#03-11 Marine Hub", "Singapore 638722"],
      phone: "+65 6555 0170",
    },
  ],
  social: [
    { label: "LinkedIn", href: "https://www.linkedin.com" },
    { label: "YouTube", href: "https://www.youtube.com" },
  ],
} as const;

export type NavItem = {
  label: string;
  href: string;
  description?: string;
};

export const mainNav: NavItem[] = [
  { label: "About Us", href: "/about", description: "Our history, leadership and values" },
  { label: "Services", href: "/services", description: "Engineering, maintenance, inspection, logistics" },
  { label: "Projects", href: "/projects", description: "Completed and ongoing work" },
  { label: "Industries", href: "/industries", description: "Sectors we serve" },
  { label: "HSE", href: "/hse", description: "Health, safety and environment" },
  { label: "Careers", href: "/careers", description: "Open roles and life at Arrowlite" },
  { label: "News", href: "/news", description: "Announcements and insights" },
  { label: "Contact", href: "/contact", description: "Offices and enquiries" },
];

export const footerNav: { title: string; items: NavItem[] }[] = [
  {
    title: "Company",
    items: [
      { label: "About Us", href: "/about" },
      { label: "Leadership", href: "/about#leadership" },
      { label: "Careers", href: "/careers" },
      { label: "News", href: "/news" },
    ],
  },
  {
    title: "Capabilities",
    items: [
      { label: "Offshore Services", href: "/services/offshore-services" },
      { label: "Engineering", href: "/services/engineering" },
      { label: "Maintenance", href: "/services/maintenance" },
      { label: "Inspection", href: "/services/inspection" },
      { label: "Logistics", href: "/services/logistics" },
    ],
  },
  {
    title: "Resources",
    items: [
      { label: "Projects", href: "/projects" },
      { label: "Industries", href: "/industries" },
      { label: "HSE Policy", href: "/hse" },
      { label: "Contact", href: "/contact" },
    ],
  },
];
