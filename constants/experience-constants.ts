import { type Experience } from "@/types/portfolio-types";

// Organisations only — no job titles or levels.
export const EXPERIENCES: Experience[] = [
  {
    company: "FalconX · Bangalore",
    date: "2021 - Present",
    contents: [
      "Led the frontend for FalconX 360, the institutional trading and post-trade product, owning architecture, stack decisions and delivery end to end.",
      "Oversaw the product's full lifecycle across several major rewrites, keeping live trading workflows running while the platform changed underneath them.",
      "Integrated Retool into internal operations, cutting the time to ship internal apps from weeks to days.",
      "Built the credit team's UI from the ground up, then led its re-architecture for the next platform generation.",
      "Led the subaccount pooling redesign and shipped a cashflow system that tracks every transaction across credit wallets, including custody interactions.",
      "Added exchange integrations such as Bybit into credit borrowing, plus support for collar and other custom loan structures.",
    ],
  },
  {
    company: "ClearTax · Bangalore",
    date: "Oct 2017 - 2021",
    contents: [
      "Led the UI platform team, building common services used across ClearTax verticals and owning technical outcomes and developer experience.",
      "Led the technical effort for ClearTax Pro, the consumer mobile app: architecture, implementation and outcomes, rated 4.4 stars on the Play Store.",
      "Designed and architected GST Desktop while leading a cross-functional team, delivering 25k filings after launch.",
      "Architected and implemented the UI for the first GST Reconciliation product, now used by more than 1,000 enterprises.",
      "Built workflow automation for invoice uploads and return filing, with metrics, benchmarks, monitoring and alerts — contributing 30% of overall filing traffic.",
      "Built and scaled ClearTax Assistant, an automation tool for filing, reaching 35k active users.",
      "Drove org-wide frontend efforts across hiring, code quality, performance, security, the design system and SSO.",
    ],
  },
  {
    company: "Bang The Table · India",
    date: "Jun 2016 - Oct 2017",
    contents: [
      "Migrated a legacy codebase for Places, a community engagement tool.",
      "Rebuilt the EngagementHQ UI and theme with vanilla JavaScript and React, integrating it into the Ruby on Rails app.",
      "Built a reporting tool with visualisations and power filters, contributing to an internal state management framework.",
    ],
  },
];
