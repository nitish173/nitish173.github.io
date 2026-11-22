import { HERO_LOCATION, HERO_NAME, HERO_ROLE } from "./hero-constants";
import { CONTACT_EMAIL, MY_SOCIALS } from "./social-constants";

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://kumarnitish.com"
).replace(/\/$/, "");

export const absoluteUrl = (path: string) =>
  `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;

export const SITE_NAME = `${HERO_NAME} | ${HERO_ROLE}`;

export const SITE_TITLE = `${HERO_NAME} | ${HERO_ROLE}`;

export const SITE_DESCRIPTION =
  "Senior Software Engineer at FalconX with 9+ years building fintech platforms — trading, credit and post-trade — across React, Python and AWS.";

export const SITE_TAGLINE =
  "Fintech platforms for trading, credit and post-trade, built end to end.";

export const OG_IMAGE = "/og.jpg";
export const OG_IMAGE_ALT = `${HERO_NAME}, ${HERO_ROLE} portfolio`;
export const OG_LOCALE = "en_US";

export const OG_IMAGES = [
  {
    url: OG_IMAGE,
    width: 1200,
    height: 630,
    alt: OG_IMAGE_ALT,
  },
];

export const GOOGLE_SITE_VERIFICATION =
  process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ?? "";

export const SITE_KEYWORDS = [
  HERO_NAME,
  "Software Engineer",
  "Senior Software Engineer",
  "Frontend Engineer",
  "Frontend Architect",
  "React Developer",
  "TypeScript Developer",
  "Python Developer",
  "AWS Developer",
  "Fintech Engineer",
  "Backend Engineer",
  "Observability",
  "Trading Platform",
  "Post-Trade Systems",
  "AI Agents",
  "RAG",
  "LLM",
  "FalconX",
  "ClearTax",
  HERO_LOCATION,
  "India",
  "Remote Engineer",
];

export const HOME_TITLE = `${HERO_NAME} | ${HERO_ROLE} & Frontend Architect`;

export const HOME_DESCRIPTION =
  "Senior Software Engineer at FalconX in Bangalore. 9+ years building trading, credit and post-trade platforms with React, Python and AWS.";

export const SITE_SECTIONS = [
  {
    name: "Home",
    hash: "#home",
    description: `${HERO_NAME}, ${HERO_ROLE} building frontend platforms for trading and credit products.`,
  },
  {
    name: "About",
    hash: "#about",
    description: `Background, stack and working style of ${HERO_NAME}, a ${HERO_ROLE} based in ${HERO_LOCATION}.`,
  },
  {
    name: "Services",
    hash: "#services",
    description:
      "Frontend architecture, trading and fintech products, 0 to 1 product engineering, and internal tooling.",
  },
  {
    name: "Work",
    hash: "#work",
    description:
      "Selected projects: FalconX 360, the FalconX credit platform, and ClearTax's GST and mobile products.",
  },
  {
    name: "Experience",
    hash: "#experience",
    description: `Roles at FalconX, ClearTax and Bang The Table across ${HERO_NAME}'s career.`,
  },
  {
    name: "Contact",
    hash: "#contact",
    description: `Get in touch with ${HERO_NAME} about roles, contract work or advisory engagements.`,
  },
] as const;

export const SOCIAL_PROFILES = MY_SOCIALS.map((social) => social.href);

export const CONTACT_POINT_EMAIL = CONTACT_EMAIL;
