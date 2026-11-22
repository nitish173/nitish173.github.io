import { type Service } from "@/types/portfolio-types";

export const SERVICES: Service[] = [
  {
    id: 1,
    title: "Frontend Architecture",
    description:
      "Design systems, module boundaries and shared platforms that let several product teams ship without stepping on each other.",
    icon: "/assets/logos/react.svg",
    bullets: [
      "Design systems & component libraries",
      "Shared platform services & micro-frontends",
      "Performance budgets & Core Web Vitals",
    ],
  },
  {
    id: 2,
    title: "Trading & Fintech Products",
    description:
      "Data-dense trading, post-trade and credit workflows built for correctness, real-time data and round-the-clock reliability.",
    icon: "/assets/logos/javascript.svg",
    bullets: [
      "Order, post-trade & credit flows",
      "Real-time balances, cashflows & reporting",
      "Exchange and custody integrations",
    ],
  },
  {
    id: 3,
    title: "0 → 1 Product Engineering",
    description:
      "Taking a product from an empty repository to production: architecture, implementation and the first real users.",
    icon: "/assets/logos/tailwindcss.svg",
    bullets: [
      "Architecture & stack selection",
      "End-to-end delivery ownership",
      "Rewrites that keep the lights on",
    ],
  },
  {
    id: 4,
    title: "Internal Tools & Developer Experience",
    description:
      "Tooling and platforms that shorten the loop between an idea and a shipped internal application.",
    icon: "/assets/logos/react.svg",
    bullets: [
      "Retool & internal dashboards",
      "CI/CD, monitoring & alerts",
      "Code quality, security & hiring standards",
    ],
  },
];
