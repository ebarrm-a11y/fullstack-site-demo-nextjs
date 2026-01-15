"use client";

import { useMemo, useState } from "react";
import type { Lang } from "@/lib/i18n";
import { t } from "@/lib/i18n";
import { siteContent } from "@/data/siteContent";

type FormState = {
  name: string;
  email: string;
  phone: string;
  service: string;
  date: string;
  message: string;
  website: string; // honeypot
};

export default function ContactForm({ lang }: { lang: Lang }) {
  const tr = useMemo(() => t(lang), [lang]);

  const [s, setS] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    service: siteContent.services[0]?.title ?? "Weddings",
    date: "",
    message: "",
    website: "",
  });

  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setErr(null);
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(s),
      });

      if (!res.ok) {
        const j = await res.json().catch(() => ({}));
        throw new Error(j?.error ?? "Request failed");
      }

      window.location.href = "/success";
    } catch (e: any) {
      setErr(e?.message ?? "Error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={submit} className="space-y-3">
      <label className="block">
        <span className="text-xs text-white/70">{tr.form.name}</span>
        <input className="mt-1 w-full rounded-xl bg-black/40 border border-white/10 px-3 py-2 focus-ring" value={s.name}
          onChange={(e) => setS({ ...s, name: e.target.value })} required />
      </label>

      <div className="grid sm:grid-cols-2 gap-3">
        <label className="block">
          <span className="text-xs text-white/70">{tr.form.email}</span>
          <input className="mt-1 w-full rounded-xl bg-black/40 border border-white/10 px-3 py-2 focus-ring" value={s.email}
            onChange={(e) => setS({ ...s, email: e.target.value })} type="email" required />
        </label>
        <label className="block">
          <span className="text-xs text-white/70">{tr.form.phone}</span>
          <input className="mt-1 w-full rounded-xl bg-black/40 border border-white/10 px-3 py-2 focus-ring" value={s.phone}
            onChange={(e) => setS({ ...s, phone: e.target.value })} />
        </label>
      </div>

      <div className="grid sm:grid-cols-2 gap-3">
        <label className="block">
          <span className="text-xs text-white/70">{tr.form.service}</span>
          <select className="mt-1 w-full rounded-xl bg-black/40 border border-white/10 px-3 py-2 focus-ring"
            value={s.service} onChange={(e) => setS({ ...s, service: e.target.value })}>
            {siteContent.services.map((x) => <option key={x.id} value={x.title}>{x.title}</option>)}
          </select>
        </label>
        <label className="block">
          <span className="text-xs text-white/70">{tr.form.date}</span>
          <input className="mt-1 w-full rounded-xl bg-black/40 border border-white/10 px-3 py-2 focus-ring"
            value={s.date} onChange={(e) => setS({ ...s, date: e.target.value })} type="date" />
        </label>
      </div>

      <label className="block">
        <span className="text-xs text-white/70">{tr.form.msg}</span>
        <textarea className="mt-1 w-full rounded-xl bg-black/40 border border-white/10 px-3 py-2 focus-ring min-h-[120px]"
          value={s.message} onChange={(e) => setS({ ...s, message: e.target.value })} required />
      </label>

      <label className="hidden">
        Website
        <input value={s.website} onChange={(e) => setS({ ...s, website: e.target.value })} />
      </label>

      {err ? <div className="text-sm text-red-300">{err}</div> : null}

      <button disabled={loading} className="w-full rounded-xl bg-white text-black font-semibold px-4 py-3 hover:bg-white/90 transition disabled:opacity-60">
        {loading ? "Sending..." : tr.form.send}
      </button>

      <div className="text-xs text-white/55">
        Or email: <span className="text-white/75">{siteContent.socials.email}</span>
      </div>
    </form>
  );
}
