import PricingCards from "@/components/PricingCards";
import { siteContent } from "@/data/siteContent";
import CTA from "@/components/CTA";

export default function PricingPage() {
  return (
    <main className="container mx-auto px-4 py-14 max-w-5xl">
      <h1 className="text-4xl font-semibold">Pricing</h1>
      <p className="mt-3 text-white/70">Transparent ranges — final quote after a short consultation.</p>

      <div className="mt-10">
        <PricingCards />
      </div>

      <div className="mt-12 glass rounded-2xl p-6">
        <div className="text-white font-semibold">Starting points by service</div>
        <div className="mt-4 grid md:grid-cols-2 gap-3 text-sm text-white/75">
          {siteContent.services.map((s) => (
            <div key={s.id} className="flex items-center justify-between gap-4 bg-white/5 rounded-xl px-4 py-3 border border-white/10">
              <span className="text-white/90">{s.title}</span>
              <span className="text-white/70">{s.priceRange}</span>
            </div>
          ))}
        </div>
        <div className="mt-4 text-xs text-white/55">Notes: travel, usage rights, and rush delivery are quoted per project.</div>
      </div>

      <div className="mt-10">
        <CTA title="Want a quote today?" subtitle="Send your project scope and preferred dates — you'll receive a clear plan and pricing range." />
      </div>
    </main>
  );
}
