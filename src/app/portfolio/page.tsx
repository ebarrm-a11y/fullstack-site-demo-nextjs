import PortfolioGrid from "@/components/PortfolioGrid";
import { siteContent } from "@/data/siteContent";

export default function PortfolioPage() {
  return (
    <main className="container mx-auto px-4 py-14">
      <h1 className="text-4xl font-semibold">Portfolio</h1>
      <p className="mt-3 text-white/70">Filter by category. Lightbox viewer included.</p>
      <div className="mt-8">
        <PortfolioGrid items={siteContent.portfolioItems} />
      </div>
    </main>
  );
}
