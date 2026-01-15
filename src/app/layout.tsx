import "./globals.css";
import type { Metadata } from "next";
import { siteContent } from "@/data/siteContent";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Providers from "@/components/Providers";

export const metadata: Metadata = {
  title: siteContent.seo.title,
  description: siteContent.seo.description,
  openGraph: {
    title: siteContent.seo.title,
    description: siteContent.seo.description,
    images: [{ url: siteContent.seo.ogImage }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteContent.seo.title,
    description: siteContent.seo.description,
    images: [siteContent.seo.ogImage],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteContent.siteName,
    areaServed: siteContent.serviceAreas,
    address: { "@type": "PostalAddress", addressCountry: "CA" },
    url: siteContent.seo.siteUrl,
    email: siteContent.socials.email,
    telephone: siteContent.socials.phone,
    sameAs: [siteContent.socials.instagram],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>

        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
