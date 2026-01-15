import { siteContent } from "@/data/siteContent";

export default function Testimonials() {
  return (
    <div className="grid md:grid-cols-3 gap-4">
      {siteContent.testimonials.map((t) => (
        <div key={t.name} className="glass rounded-2xl p-6">
          <div className="text-white/90 text-sm">“{t.text}”</div>
          <div className="mt-4 text-xs text-white/60">{t.name} · {t.city}</div>
        </div>
      ))}
    </div>
  );
}
