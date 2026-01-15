"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import Lightbox from "./Lightbox";

type Item = {
  id: string;
  category: string;
  title: string;
  location: string;
  imageUrl: string;
  alt: string;
};

export default function PortfolioGrid({ items }: { items: readonly Item[] }) {
  const cats = useMemo(() => ["All", ...Array.from(new Set(items.map((i) => i.category)))], [items]);
  const [cat, setCat] = useState("All");

  const filtered = useMemo(() => (cat === "All" ? items : items.filter((i) => i.category === cat)), [items, cat]);

  const [open, setOpen] = useState(false);
  const [idx, setIdx] = useState(0);

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {cats.map((c) => (
          <button
            key={c}
            className={`focus-ring rounded-full px-4 py-2 text-sm ${c === cat ? "bg-white text-black" : "glass hover:bg-white/12"}`}
            onClick={() => setCat(c)}
            type="button"
          >
            {c}
          </button>
        ))}
      </div>

      <div className="mt-6 columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]">
        {filtered.map((it, i) => (
          <button
            key={it.id}
            className="mb-4 w-full break-inside-avoid focus-ring rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition"
            onClick={() => { setIdx(i); setOpen(true); }}
            aria-label={`Open ${it.title}`}
            type="button"
          >
            <div className="relative w-full aspect-[4/5]">
              <Image src={it.imageUrl} alt={it.alt} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 33vw" />
            </div>
            <div className="p-3 bg-black/50">
              <div className="text-sm text-white font-medium">{it.title}</div>
              <div className="text-xs text-white/60">{it.category} · {it.location}</div>
            </div>
          </button>
        ))}
      </div>

      <Lightbox
        open={open}
        onClose={() => setOpen(false)}
        items={filtered.map((x) => ({ imageUrl: x.imageUrl, alt: x.alt, title: x.title, location: x.location }))}
        index={idx}
        setIndex={setIdx}
      />
    </div>
  );
}
