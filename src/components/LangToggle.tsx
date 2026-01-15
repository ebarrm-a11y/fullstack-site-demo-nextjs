"use client";

import { useEffect, useState } from "react";
import type { Lang } from "@/lib/i18n";

export default function LangToggle({ onChange }: { onChange: (l: Lang) => void }) {
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    const saved = (localStorage.getItem("lang") as Lang | null) ?? "en";
    setLang(saved);
    onChange(saved);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function set(l: Lang) {
    setLang(l);
    localStorage.setItem("lang", l);
    onChange(l);
  }

  return (
    <div className="flex items-center gap-1 glass rounded-full p-1">
      <button className={`focus-ring rounded-full px-3 py-1 ${lang === "en" ? "bg-white/12" : ""}`} onClick={() => set("en")} type="button">
        EN
      </button>
      <button className={`focus-ring rounded-full px-3 py-1 ${lang === "fr" ? "bg-white/12" : ""}`} onClick={() => set("fr")} type="button">
        FR
      </button>
    </div>
  );
}
