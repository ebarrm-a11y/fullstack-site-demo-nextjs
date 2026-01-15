"use client";

import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function Lightbox({
  open,
  onClose,
  items,
  index,
  setIndex,
}: {
  open: boolean;
  onClose: () => void;
  items: { imageUrl: string; alt: string; title: string; location: string }[];
  index: number;
  setIndex: (i: number) => void;
}) {
  if (!open) return null;

  const item = items[index];
  function prev() { setIndex((index - 1 + items.length) % items.length); }
  function next() { setIndex((index + 1) % items.length); }

  return (
    <div className="fixed inset-0 z-[60] bg-black/85 backdrop-blur-md" role="dialog" aria-modal="true">
      <div className="absolute inset-0" onClick={onClose} />
      <div className="relative mx-auto max-w-6xl h-full p-4 flex flex-col">
        <div className="flex items-center justify-between text-white/80">
          <div className="text-sm">
            <span className="text-white">{item.title}</span> · {item.location}
          </div>
          <button className="focus-ring rounded-full p-2 glass" onClick={onClose} aria-label="Close" type="button">
            <X size={18} />
          </button>
        </div>

        <div className="relative flex-1 mt-3 rounded-2xl overflow-hidden border border-white/10">
          <Image src={item.imageUrl} alt={item.alt} fill className="object-contain" sizes="100vw" />
        </div>

        <div className="mt-3 flex justify-center gap-2">
          <button className="focus-ring rounded-full px-4 py-2 glass" onClick={prev} aria-label="Previous" type="button">
            <ChevronLeft size={16} />
          </button>
          <button className="focus-ring rounded-full px-4 py-2 glass" onClick={next} aria-label="Next" type="button">
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
