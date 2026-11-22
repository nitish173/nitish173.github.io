"use client";

import { useEffect, useRef } from "react";
import { useMotionValue } from "motion/react";

export const usePinnedProgress = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const progress = useMotionValue(0);

  useEffect(() => {
    let frame: number | null = null;

    const compute = () => {
      const element = trackRef.current;
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const scrollable = rect.height - window.innerHeight;
      if (scrollable <= 0) {
        progress.set(0);
        return;
      }

      const scrolled = Math.min(Math.max(-rect.top, 0), scrollable);
      progress.set(scrolled / scrollable);
    };

    const handleScroll = () => {
      if (frame !== null) return;
      frame = requestAnimationFrame(() => {
        frame = null;
        compute();
      });
    };

    compute();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", compute);

    return () => {
      if (frame !== null) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", compute);
    };
  }, [progress]);

  return { trackRef, progress };
};
