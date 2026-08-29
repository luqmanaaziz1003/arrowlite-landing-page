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
    "Arrowlite Solutions Sdn. Bhd. is a Malaysian-owned engineering company specializing in offshore crane inspection, maintenance and operation support, alongside engineering design, fabrication, technical training and manpower supply for the oil and gas industry.",
  url: "https://www.arrowlite-solutions.example",
  founded: 2019,
  contact: {
    email: "enquiries@arrowlite-solutions.example",
    careersEmail: "careers@arrowlite-solutions.example",
    phone: "+60 3 5555 0100",
    fax: "+60 3 5555 0101",
  },
  offices: [
    {
      label: "HQ (Seremban)",
      city: "Seremban",
      country: "Malaysia",
      lines: [
        "No. 448-D (1st Floor), Lorong Sri Pulai 31/1,",
        "Taman Sri Pulai 2, Sikamat, 70400, Seremban,",
        "Negeri Sembilan, Malaysia.",
      ],
      phone: "+60 3 5555 0100",
    },
    {
      label: "Branch Office/Yard (Terengganu)",
      city: "Dungun",
      country: "Malaysia",
      lines: [
        "Lot 2478, Jalan Kelicap,",
        "Kg. Cacar, 23100, Paka, Dungun,",
        "Terengganu, Malaysia.",
      ],
      phone: "+60 9 555 0140",
    },
    {
      label: "Branch Office/Yard (Sarawak)",
      city: "Miri",
      country: "Malaysia",
      lines: ["Lot 10807, Block 5 Senadin Industrial Area", "98000, Miri, Sarawak, Malaysia."],
      phone: "+60 85 555 0170",
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
  { label: "Home", href: "/", description: "Back to the homepage" },
  { label: "Services", href: "/services", description: "Engineering, maintenance, inspection, logistics" },
  { label: "Project", href: "/projects", description: "Completed and ongoing work" },
  { label: "About us", href: "/about", description: "Our history, leadership and values" },
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
      { label: "Engineering Service", href: "/services/engineering" },
      {
        label: "Construction, Installation and Maintenance",
        href: "/services/maintenance",
      },
      { label: "Diesel Engine Service", href: "/services/inspection" },
      { label: "Welding and NDT", href: "/services/logistics" },
      { label: "Marine & Subsea Services", href: "/services/marine-subsea" },
      { label: "Hot Tapping", href: "/services/hot-tapping" },
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
