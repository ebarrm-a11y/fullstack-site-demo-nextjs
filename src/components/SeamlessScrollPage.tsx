"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import BackgroundStack, { BgLayer } from "./BackgroundStack";

export type SeamSection = { id: string; bg: BgLayer };

export default function SeamlessScrollPage({
  sections,
  children,
}: {
  sections: SeamSection[];
  children: (activeIndex: number) => React.ReactNode;
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const refs = useRef<(HTMLElement | null)[]>([]);

  const layers = useMemo(() => sections.map((s) => s.bg), [sections]);

  useEffect(() => {
    refs.current = sections.map((s) => document.getElementById(s.id));
    const els = refs.current.filter(Boolean) as HTMLElement[];
    if (!els.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        const best = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];
        if (!best) return;
        const idx = els.indexOf(best.target as HTMLElement);
        if (idx >= 0) setActiveIndex(idx);
      },
      { threshold: [0.25, 0.4, 0.55, 0.7] }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [sections]);

  return (
    <main>
      <BackgroundStack layers={layers} activeIndex={activeIndex} />
      <div className="relative">{children(activeIndex)}</div>
    </main>
  );
}
