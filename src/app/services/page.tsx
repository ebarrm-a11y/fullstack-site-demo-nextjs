import CTA from "@/components/CTA";
import { siteContent } from "@/data/siteContent";

export default function ServicesPage() {
  return (
    <main className="container mx-auto px-4 py-14 max-w-5xl">
      <h1 className="text-4xl font-semibold">Services</h1>
      <p className="mt-3 text-white/70">Clear deliverables, consistent edits, and marketing-ready exports.</p>

      <div className="mt-10 grid md:grid-cols-2 gap-4">
        {siteContent.services.map((s) => (
          <div key={s.id} className="glass rounded-2xl p-6">
            <div className="text-white font-semibold text-xl">{s.title}</div>
            <div className="mt-2 text-white/70">{s.short}</div>

            <div className="mt-5 text-sm text-white/80 font-medium">Deliverables</div>
            <ul className="mt-2 space-y-2 text-sm text-white/70">
              {s.deliverables.map((x) => (
                <li key={x} className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/60" />{x}</li>
              ))}
            </ul>

            <div className="mt-5 text-sm text-white/80 font-medium">Ideal for</div>
            <div className="mt-2 flex flex-wrap gap-2">
              {s.idealFor.map((x) => (
                <span key={x} className="px-3 py-1 rounded-full bg-white/10 text-sm text-white/75">{x}</span>
              ))}
            </div>

            <div className="mt-5 text-sm text-white/70">Starting: <span className="text-white/90 font-medium">{s.priceRange}</span></div>
          </div>
        ))}
      </div>

      <div className="mt-10">
        <CTA title="Need a campaign microsite fast?" subtitle="Reusable templates + content data layer make it easy to ship landing pages and language variants quickly." />
      </div>
    </main>
  );
}
