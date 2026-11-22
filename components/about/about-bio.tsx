"use client";

import { useRef, type FC } from "react";
import { motion, useInView } from "motion/react";
import { fadeInUp } from "@/animations/scroll-animations";
import { HERO_LOCATION, HERO_NAME } from "@/constants/hero-constants";

export const AboutBio: FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeInUp}
      transition={{ duration: 0.7 }}
      className="glass gradient-border p-8 md:p-10 lg:col-span-7"
    >
      <p className="mb-3 text-sm uppercase tracking-[0.25em] text-neutral-400">
        Who I Am
      </p>
      <h3 className="mb-4 text-2xl font-bold md:text-3xl">
        {HERO_NAME} · {HERO_LOCATION}
      </h3>
      <p className="text-base leading-relaxed text-neutral-300 md:text-lg">
        I&apos;m a Senior Software Engineer with{" "}
        <span className="font-semibold text-white">9+ years</span> of experience
        building fintech platforms end to end — backend services and APIs, UI
        architecture, design systems. I lead with clean architecture, clear
        interfaces and a deep care for the people who use what we ship.
      </p>
      <p className="mt-4 leading-relaxed text-neutral-400">
        At <span className="text-white">FalconX</span> since 2021, I led the
        frontend for <span className="text-white">FalconX 360</span> from an
        empty repository to a live trading and post-trade platform, then built
        the credit team&apos;s UI from the ground up. Before that, at{" "}
        <span className="text-white">ClearTax</span>, I architected GST
        Reconciliation, shipped GST Desktop and led the consumer mobile app —
        while mentoring engineers and setting the standards teams still work to.
      </p>

      <p className="mt-4 leading-relaxed text-neutral-400">
        <span className="text-neutral-300">Side quest:</span> learning AI by
        building with it. A small internal analyst agent answers questions about
        product behaviour, open issues and support tickets for the credit team.
        Still very much a student of RAG, evals and prompt plumbing.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <a href="#contact" className="btn-primary">
          <span>Start a conversation</span>
          <span aria-hidden>→</span>
        </a>
        <a href="#work" className="btn-ghost">
          <span>See past work</span>
        </a>
      </div>
    </motion.div>
  );
};
