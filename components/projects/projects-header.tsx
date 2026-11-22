import { type FC } from "react";
import { SectionHeader } from "@/components/ui/section-header";
import { padIndex } from "@/helpers/format-helpers";

export const ProjectsHeader: FC<{ total: number }> = ({ total }) => (
  <div className="c-space pt-24 md:pt-32">
    <SectionHeader
      eyebrow={`ship log · ${padIndex(total)}`}
      title={
        <>
          Things that{" "}
          <span className="text-gradient">actually shipped.</span>
        </>
      }
      hint={["Scroll", "Pinned"]}
    />
  </div>
);
