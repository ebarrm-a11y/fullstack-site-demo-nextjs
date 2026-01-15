import { siteContent } from "@/data/siteContent";
import CTA from "@/components/CTA";

export default function AboutPage() {
  return (
    <main className="container mx-auto px-4 py-14 max-w-4xl">
      <h1 className="text-4xl font-semibold">About</h1>
      <p className="mt-3 text-white/70">{siteContent.tagline}</p>

      <div className="mt-10 glass rounded-2xl p-6 space-y-4 text-white/75">
        <p>
          NorthLens Studio is built for teams and individuals who want visuals that feel premium, consistent, and campaign-ready.
          The workflow is simple: align on style and deliverables, execute efficiently on set, then deliver exports with clean naming
          and predictable quality.
        </p>
        <p>
          This demo site showcases modern engineering practices companies look for: reusable templates, content/data separation, SEO basics,
          accessibility, safe form handling, and controlled changes via versioned code.
        </p>
        <div className="grid md:grid-cols-3 gap-3 pt-2">
          {["Mobile-first delivery", "Performance-focused media", "EN/FR structure ready"].map((x) => (
            <div key={x} className="bg-white/5 border border-white/10 rounded-xl p-4">
              <div className="text-white/90 font-medium">{x}</div>
              <div className="mt-1 text-sm text-white/60">Designed for marketing teams.</div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10">
        <CTA title="Let’s plan your shoot" subtitle="Send your dates and scope — we’ll come back with a clean plan and quote range." />
      </div>
    </main>
  );
}
