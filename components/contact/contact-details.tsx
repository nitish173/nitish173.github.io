"use client";

import { type FC } from "react";
import { motion } from "motion/react";
import { revealProps } from "@/animations/scroll-animations";
import {
  CONTACT_EMAIL,
  HERO_LOCATION,
  MY_SOCIALS,
} from "@/constants/portfolio-constants";
import { asset } from "@/helpers/asset-helpers";
import { ContactInfoCard } from "./contact-info-card";

const EMAIL_HREF = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
  "Hello Nitish",
)}`;

export const ContactDetails: FC = () => (
  <motion.div {...revealProps()} className="mx-auto max-w-5xl">
    <div className="mx-auto max-w-2xl text-center">
      <p className="text-eyebrow">say hi</p>
      <h2 className="text-heading mt-3">
        Got a messy problem? <br />
        <span className="text-gradient">Let&apos;s ship it.</span>
      </h2>
      <p className="mt-4 leading-relaxed text-neutral-400">
        No forms, no funnels — just email. Whether you&apos;re hiring, untangling
        a frontend platform, or building something in trading and credit, write
        to me directly.
      </p>

      <div className="mt-8 flex justify-center">
        <a href={EMAIL_HREF} className="btn-primary w-full sm:w-auto">
          <span>Email me</span>
          <span aria-hidden>→</span>
        </a>
      </div>
    </div>

    <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <ContactInfoCard
        icon="✉"
        label="Email"
        value={CONTACT_EMAIL}
        href={EMAIL_HREF}
        gradient="from-coral/30 to-lavender/30"
      />
      <ContactInfoCard
        icon="⌖"
        label="Based In"
        value={`${HERO_LOCATION} · Open to remote`}
        gradient="from-aqua/30 to-mint/30"
      />
      <ContactInfoCard
        icon="⏱"
        label="Response Time"
        value="Usually within 24 hours"
        gradient="from-royal/30 to-fuchsia/30"
      />
    </div>

    <div className="mt-10 flex items-center justify-center gap-3">
      <span className="text-xs uppercase tracking-[0.3em] text-neutral-500">
        Elsewhere
      </span>
      {MY_SOCIALS.map((social) => (
        <a
          key={social.name}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.name}
          className="h-10 w-10 rounded-full border border-white/10 bg-white/[0.04] flex items-center justify-center transition-colors hover:bg-white/[0.1] hover:border-white/30"
        >
          <img
            src={asset(social.icon)}
            alt=""
            loading="lazy"
            decoding="async"
            className="w-4 h-4"
          />
        </a>
      ))}
    </div>
  </motion.div>
);
