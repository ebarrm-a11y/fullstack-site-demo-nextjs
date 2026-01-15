import { siteContent } from "@/data/siteContent";

export default function PricingCards() {
  return (
    <div className="grid md:grid-cols-3 gap-4">
      {siteContent.pricingPackages.map((p) => (
        <div key={p.name} className="glass rounded-2xl p-6">
          <div className="text-white font-semibold">{p.name}</div>
          <div className="mt-2 text-white/70 text-sm">{p.priceRange}</div>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            {p.includes.map((x) => (
              <li key={x} className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-white/60" />
                <span>{x}</span>
              </li>
            ))}
          </ul>
          <div className="mt-5 text-xs text-white/55">Final quote after consultation.</div>
        </div>
      ))}
    </div>
  );
}
