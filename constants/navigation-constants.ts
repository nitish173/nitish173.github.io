export const NAV_ITEMS = [
  { label: "home", href: "#home" },
  { label: "whoami", href: "#about" },
  { label: "what i do", href: "#services" },
  { label: "ship log", href: "#work" },
  { label: "say hi", href: "#contact" },
] as const;

export const NAV_OFFSET = 72;

export const NAV_OBSERVER_OPTIONS: IntersectionObserverInit = {
  rootMargin: "-40% 0px -50% 0px",
  threshold: [0, 0.25, 0.5, 0.75, 1],
};

export const NAV_SCROLLED_AT = 20;
