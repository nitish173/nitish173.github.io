import { type Transition } from "motion/react";
import { type Project } from "@/types/portfolio-types";

export const MY_PROJECTS: Project[] = [
  {
    id: 1,
    title: "FalconX 360",
    category: "Institutional Trading · Post-Trade",
    description:
      "Institutional trading and post-trade platform: orders, allocations, settlements and reporting in one system.",
    subDescription: [
      "Led the frontend from an empty repository to a live product, owning architecture and stack decisions.",
      "Oversaw the product's full lifecycle across several major rewrites without pausing live trading workflows.",
      "Built shared data, auth and design-system layers reused across FalconX products.",
      "Brought Retool into the engineering workflow so internal apps ship in days instead of weeks.",
    ],
    href: "https://www.falconx.io/falconx-360",
    linkLabel: "View FalconX 360",
    logo: "",
    image: "",
    accent: "from-aqua/40 to-royal/10",
    tags: [
      { id: 1, name: "React" },
      { id: 2, name: "TypeScript" },
      { id: 3, name: "UX" },
      { id: 4, name: "Architecture" },
    ],
  },
  {
    id: 2,
    title: "FalconX Credit",
    category: "Credit & Lending",
    description:
      "Credit trading platform covering borrowing, custom loan structures and cashflow tracking across wallets and custody.",
    subDescription: [
      "Built the credit UI from the ground up, then led its re-architecture for the next platform generation.",
      "Led the subaccount pooling redesign, changing how balances and exposure are modelled.",
      "Shipped a cashflow system that tracks every transaction across credit wallets, including custody interactions.",
      "Integrated exchanges such as Bybit into credit borrowing and added support for collar and custom loans.",
    ],
    href: "https://www.falconx.io/services/financing",
    linkLabel: "View financing",
    logo: "",
    image: "",
    accent: "from-royal/40 to-lavender/10",
    tags: [
      { id: 1, name: "TypeScript" },
      { id: 2, name: "React" },
      { id: 3, name: "Node.js" },
      { id: 4, name: "APIs" },
    ],
  },
  {
    id: 3,
    title: "ClearTax GST Desktop",
    category: "Desktop Software · Tax",
    description:
      "Desktop GST filing product built for accountants and enterprises handling high-volume returns.",
    subDescription: [
      "Designed and architected the product while leading a high-performance cross-functional team.",
      "Owned the technical roadmap and OKRs from concept to launch.",
      "Reached 25k filings on the platform after launch.",
    ],
    href: "https://cleartax.in/gst",
    linkLabel: "View GST suite",
    logo: "",
    image: "",
    accent: "from-fuchsia/40 to-royal/10",
    tags: [
      { id: 1, name: "React" },
      { id: 2, name: "TypeScript" },
      { id: 3, name: "Electron" },
      { id: 4, name: "Architecture" },
    ],
  },
  {
    id: 4,
    title: "ClearTax Pro",
    category: "Consumer Mobile · Tax",
    description:
      "Consumer mobile app for tax filing, rated 4.4 stars on the Play Store.",
    subDescription: [
      "Led the technical effort for the app: architecture, implementation and outcomes.",
      "Built shared UI platform services reused across ClearTax verticals.",
      "Drove performance, quality and release standards for the mobile surface.",
    ],
    href: "https://play.google.com/store/apps/details?id=in.cleartax.pro&hl=en_IN&pli=1",
    linkLabel: "View on Play Store",
    logo: "",
    image: "",
    accent: "from-sand/40 to-coral/10",
    tags: [
      { id: 1, name: "React Native" },
      { id: 2, name: "TypeScript" },
      { id: 3, name: "UX" },
      { id: 4, name: "Mobile" },
    ],
  },
  {
    id: 5,
    title: "GST Reconciliation",
    category: "Enterprise SaaS · Tax",
    description:
      "The first GST reconciliation product at ClearTax, now used by more than 1,000 enterprises.",
    subDescription: [
      "Architected and implemented the initial UI for reconciliation workflows.",
      "Automated invoice uploads and return filing with metrics, benchmarks, monitoring and alerts.",
      "Contributed 30% of overall filing traffic through those automation workflows.",
    ],
    href: "https://cleartax.in/",
    linkLabel: "View ClearTax",
    logo: "",
    image: "",
    accent: "from-lavender/40 to-aqua/10",
    tags: [
      { id: 1, name: "React" },
      { id: 2, name: "TypeScript" },
      { id: 3, name: "Python" },
      { id: 4, name: "AWS" },
      { id: 5, name: "Automation" },
    ],
  },
];

export const TILT_SPRING: Transition = { stiffness: 200, damping: 18 };

export const TILT_RANGE: { x: [number, number]; y: [number, number] } = {
  x: [10, -10],
  y: [-14, 14],
};

export const TRACK_SPRING: Transition = { stiffness: 60, damping: 20 };
