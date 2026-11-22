import { type Stat } from "@/types/portfolio-types";

export const HERO_NAME = "Nitish Kumar";

export const HERO_MODEL_URL = "/models/adv_boy.glb";

export const HERO_MODEL_CREDIT = {
  name: "Adventurer Boy",
  author: "VoxelVidal",
  generator: "Sloyd",
  license: "CC BY 4.0",
  licenseUrl: "https://creativecommons.org/licenses/by/4.0/",
  sourceUrl:
    "https://www.sloyd.ai/free-3d-models/model/adventurer-boy-0va31bxo",
} as const;

export const HERO_ROLE = "Senior Software Engineer";

export const HERO_LOCATION = "Bangalore, India";

export const HERO_TAGLINE =
  "I build frontend platforms for trading, credit and post-trade products — from the first architecture to the rewrites that keep them fast, reliable and extensible.";

export const FLIP_WORDS = ["Reliable", "Scalable", "Extensible"];

export const STATS: Stat[] = [
  { value: "9+", label: "Years shipping software" },
  { value: "0→1", label: "Products built from zero" },
  { value: "1000+", label: "Enterprises on tools I built" },
  { value: "35k", label: "Users on ClearTax Assistant" },
];
