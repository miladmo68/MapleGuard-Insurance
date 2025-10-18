import { Metadata } from "next";
import { ProductHero } from "@/components/sections/product-hero";
import { CoverageDetails } from "@/components/sections/coverage-details";
import { AddOns } from "@/components/sections/add-ons";
import { SampleRates } from "@/components/sections/sample-rates";
import { ProductFAQ } from "@/components/sections/product-faq";
import { CTABanner } from "@/components/sections/cta-banner";
import { products } from "@/data/products";

const product = products.find(p => p.id === "travel")!;

export const metadata: Metadata = {
  title: "Travel Insurance - Travel with Confidence Worldwide",
  description: "Comprehensive travel insurance with emergency medical coverage, trip cancellation protection, and 24/7 assistance anywhere in the world.",
  keywords: [
    "travel insurance",
    "trip insurance",
    "emergency medical",
    "trip cancellation",
    "baggage coverage",
    "travel protection",
    "medical evacuation",
    "travel assistance"
  ],
  openGraph: {
    title: "Travel Insurance - Travel with Confidence Worldwide | MapleGuard",
    description: "Comprehensive travel insurance with emergency medical coverage, trip cancellation protection, and 24/7 assistance anywhere in the world.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Travel Insurance - Travel with Confidence Worldwide | MapleGuard",
    description: "Comprehensive travel insurance with emergency medical coverage, trip cancellation protection, and 24/7 assistance anywhere in the world.",
  },
};

export default function TravelInsurancePage() {
  return (
    <main id="main-content">
      <ProductHero product={product} />
      <CoverageDetails 
        coverage={product.coverage}
        title="Travel Insurance Coverage"
        description="Comprehensive protection for your travels anywhere in the world"
      />
      <AddOns 
        addOns={product.addOns}
        title="Travel Insurance Add-Ons"
        description="Enhance your travel coverage with these optional features"
      />
      <SampleRates 
        sampleRates={product.sampleRates}
        title="Travel Insurance Rates"
        description="Affordable travel insurance starting from $25/month with comprehensive coverage"
      />
      <ProductFAQ 
        faqs={product.faqs}
        title="Travel Insurance FAQ"
        description="Common questions about travel insurance coverage and claims"
      />
      <CTABanner />
    </main>
  );
}
