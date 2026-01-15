import Testimonials from "@/components/Testimonials";

export default function ReviewsPage() {
  return (
    <main className="container mx-auto px-4 py-14 max-w-5xl">
      <h1 className="text-4xl font-semibold">Reviews</h1>
      <p className="mt-3 text-white/70">A few words from clients.</p>
      <div className="mt-10">
        <Testimonials />
      </div>
      <div className="mt-10 glass rounded-2xl p-6 text-white/70 text-sm">
        <div className="text-white/90 font-medium">Google Reviews (placeholder)</div>
        <p className="mt-2">Embed your Google Reviews widget here, or link to your profile.</p>
      </div>
    </main>
  );
}
