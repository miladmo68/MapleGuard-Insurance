import { Metadata } from "next";
import { ProductsGrid } from "@/components/sections/products-grid";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { CTABanner } from "@/components/sections/cta-banner";

export const metadata: Metadata = {
  title: "Insurance Products - Comprehensive Coverage Solutions",
  description: "Explore our range of insurance products including auto, home, life, travel, and business insurance. Get competitive rates and comprehensive coverage.",
  keywords: [
    "insurance products",
    "auto insurance",
    "home insurance",
    "life insurance",
    "travel insurance",
    "business insurance",
    "insurance coverage",
    "insurance quotes"
  ],
  openGraph: {
    title: "Insurance Products - Comprehensive Coverage Solutions | MapleGuard",
    description: "Explore our range of insurance products including auto, home, life, travel, and business insurance. Get competitive rates and comprehensive coverage.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Insurance Products - Comprehensive Coverage Solutions | MapleGuard",
    description: "Explore our range of insurance products including auto, home, life, travel, and business insurance. Get competitive rates and comprehensive coverage.",
  },
};

export default function ProductsPage() {
  return (
    <main id="main-content">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 via-white to-accent-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-neutral-900 mb-6">
              Insurance Products
            </h1>
            <p className="text-xl md:text-2xl text-neutral-600 leading-relaxed">
              Comprehensive insurance solutions designed to protect what matters most to you and your family. 
              Choose from our range of products and find the perfect coverage for your needs.
            </p>
          </div>
        </div>
      </section>

      <ProductsGrid />
      <WhyChooseUs />
      <CTABanner />
    </main>
  );
}
