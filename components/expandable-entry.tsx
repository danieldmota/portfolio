"use client";

import type { CSSProperties, ReactNode } from "react";
import { useId, useRef, useState } from "react";

type ExpandableEntryProps = {
  children: ReactNode;
  expandable?: boolean;
  reveal?: boolean;
};

export function ExpandableEntry({ children, expandable = true, reveal = false }: ExpandableEntryProps) {
  const [expanded, setExpanded] = useState(false);
  const [expandedHeight, setExpandedHeight] = useState<number | null>(null);
  const contentId = useId();
  const boxRef = useRef<HTMLDivElement>(null);

  function toggleExpanded() {
    if (!expanded) {
      const contentHeight = boxRef.current?.scrollHeight;
      if (contentHeight) setExpandedHeight(contentHeight + 2);
      setExpanded(true);
      return;
    }

    setExpanded(false);
    window.requestAnimationFrame(() => {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      boxRef.current?.scrollIntoView({
        behavior: reduceMotion ? "auto" : "smooth",
        block: "nearest",
      });
    });
  }

  return (
    <div className="edu-work-entry" data-reveal={reveal ? "true" : undefined}>
      <div
        ref={boxRef}
        id={contentId}
        className={`edu-work-box${expanded ? " expanded" : ""}`}
        style={
          expandedHeight
            ? ({ "--expanded-height": `${expandedHeight}px` } as CSSProperties)
            : undefined
        }
      >
        {children}
        {expandable ? <div className="fade-overlay" aria-hidden="true" /> : null}
      </div>
      {expandable ? (
        <div className="edu-work-readmore">
          <button
            type="button"
            className="edu-readmore-btn"
            aria-expanded={expanded}
            aria-controls={contentId}
            onClick={toggleExpanded}
          >
            {expanded ? "Ler menos" : "Ler mais"}
          </button>
        </div>
      ) : null}
    </div>
  );
}
