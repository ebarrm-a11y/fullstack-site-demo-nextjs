import { siteContent } from "@/data/siteContent";

export default function FaqPage() {
  return (
    <main className="container mx-auto px-4 py-14 max-w-4xl">
      <h1 className="text-4xl font-semibold">FAQ</h1>
      <p className="mt-3 text-white/70">Answers to the most common questions.</p>

      <div className="mt-10 grid md:grid-cols-2 gap-4">
        {siteContent.faqs.map((f) => (
          <div key={f.q} className="glass rounded-2xl p-6">
            <div className="text-white font-semibold">{f.q}</div>
            <div className="mt-2 text-white/70">{f.a}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
