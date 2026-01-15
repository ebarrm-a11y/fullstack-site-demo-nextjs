"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

export type BgLayer = { id: string; imageUrl: string; overlay?: "soft" | "strong" };

export default function BackgroundStack({ layers, activeIndex }: { layers: BgLayer[]; activeIndex: number }) {
  return (
    <div aria-hidden className="fixed inset-0 -z-10">
      {layers.map((l, idx) => (
        <div
          key={l.id}
          className={cn(
            "absolute inset-0 transition-opacity duration-700 motion-reduce:duration-0",
            idx === activeIndex ? "opacity-100" : "opacity-0"
          )}
        >
          <Image
            src={l.imageUrl}
            alt=""
            fill
            priority={idx === 0}
            sizes="100vw"
            className="object-cover"
          />
          <div
            className={cn(
              "absolute inset-0",
              l.overlay === "strong"
                ? "bg-gradient-to-b from-black/80 via-black/55 to-black/90"
                : "bg-gradient-to-b from-black/70 via-black/40 to-black/80"
            )}
          />
          <div className="absolute inset-0 opacity-[0.08] [background-image:radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.35)_1px,transparent_0)] [background-size:22px_22px]" />
        </div>
      ))}
    </div>
  );
}
