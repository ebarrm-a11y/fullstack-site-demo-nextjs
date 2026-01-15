import Link from "next/link";
import { siteContent } from "@/data/siteContent";

export default function Footer() {
  const y = new Date().getFullYear();
  return (
    <footer className="border-t border-white/10 bg-black/60">
      <div className="container mx-auto px-4 py-10 grid md:grid-cols-3 gap-8 text-sm text-white/70">
        <div>
          <div className="text-white/90 font-medium">{siteContent.siteName}</div>
          <div className="mt-2">{siteContent.tagline}</div>
          <div className="mt-4 text-white/55">© {y} — All rights reserved.</div>
        </div>
        <div className="space-y-2">
          <div className="text-white/90 font-medium">Pages</div>
          <div className="flex flex-col gap-1">
            <Link className="hover:text-white" href="/services">Services</Link>
            <Link className="hover:text-white" href="/portfolio">Portfolio</Link>
            <Link className="hover:text-white" href="/pricing">Pricing</Link>
            <Link className="hover:text-white" href="/contact">Contact</Link>
            <Link className="hover:text-white" href="/admin">Admin</Link>
          </div>
        </div>
        <div className="space-y-2">
          <div className="text-white/90 font-medium">Contact</div>
          <div>{siteContent.socials.email}</div>
          <div>{siteContent.socials.phone}</div>
          <Link className="hover:text-white" href={siteContent.socials.instagram}>Instagram</Link>
          <div className="pt-2 flex gap-3 text-xs">
            <Link className="hover:text-white" href="/legal/privacy">Privacy</Link>
            <Link className="hover:text-white" href="/legal/terms">Terms</Link>
          </div>
        </div>
      </div>

      <div className="sm:hidden fixed bottom-4 inset-x-0 flex justify-center z-50 pointer-events-none">
        <Link
          href="/contact"
          className="pointer-events-auto rounded-full px-5 py-3 bg-white text-black font-semibold shadow-lg"
        >
          Book
        </Link>
      </div>
    </footer>
  );
}
