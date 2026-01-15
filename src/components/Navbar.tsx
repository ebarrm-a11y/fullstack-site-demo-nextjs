"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import ThemeToggle from "./ThemeToggle";
import LangToggle from "./LangToggle";
import type { Lang } from "@/lib/i18n";
import { t } from "@/lib/i18n";
import { siteContent } from "@/data/siteContent";

export default function Navbar() {
  const [lang, setLang] = useState<Lang>("en");
  const tr = useMemo(() => t(lang), [lang]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/50 backdrop-blur-xl">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between gap-3">
        <Link href="/" className="focus-ring rounded-md">
          <div className="flex flex-col leading-tight">
            <span className="text-sm tracking-wide text-white/90">{siteContent.siteName}</span>
            <span className="text-xs text-white/55">{siteContent.primaryCity}</span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
          <Link className="hover:text-white focus-ring rounded" href="/services">{tr.nav.services}</Link>
          <Link className="hover:text-white focus-ring rounded" href="/portfolio">{tr.nav.portfolio}</Link>
          <Link className="hover:text-white focus-ring rounded" href="/pricing">{tr.nav.pricing}</Link>
          <Link className="hover:text-white focus-ring rounded" href="/about">{tr.nav.about}</Link>
          <Link className="hover:text-white focus-ring rounded" href="/contact">{tr.nav.contact}</Link>
        </nav>

        <div className="flex items-center gap-2">
          <LangToggle onChange={setLang} />
          <ThemeToggle />
          <Link
            href="/contact"
            className="hidden sm:inline-flex focus-ring rounded-full px-4 py-2 bg-white text-black font-medium hover:bg-white/90 transition"
          >
            {tr.cta.book}
          </Link>
        </div>
      </div>
    </header>
  );
}
