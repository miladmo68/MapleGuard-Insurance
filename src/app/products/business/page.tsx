import { Metadata } from "next";
import { ProductHero } from "@/components/sections/product-hero";
import { CoverageDetails } from "@/components/sections/coverage-details";
import { AddOns } from "@/components/sections/add-ons";
import { SampleRates } from "@/components/sections/sample-rates";
import { ProductFAQ } from "@/components/sections/product-faq";
import { CTABanner } from "@/components/sections/cta-banner";
import { products } from "@/data/products";

const product = products.find(p => p.id === "business")!;

export const metadata: Metadata = {
  title: "Business Insurance - Protect Your Business Assets",
  description: "Comprehensive business insurance coverage including general liability, professional liability, property insurance, and cyber liability protection.",
  keywords: [
    "business insurance",
    "commercial insurance",
    "general liability",
    "professional liability",
    "property insurance",
    "cyber liability",
    "business protection",
    "commercial coverage"
  ],
  openGraph: {
    title: "Business Insurance - Protect Your Business Assets | MapleGuard",
    description: "Comprehensive business insurance coverage including general liability, professional liability, property insurance, and cyber liability protection.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Business Insurance - Protect Your Business Assets | MapleGuard",
    description: "Comprehensive business insurance coverage including general liability, professional liability, property insurance, and cyber liability protection.",
  },
};

export default function BusinessInsurancePage() {
  return (
    <main id="main-content">
      <ProductHero product={product} />
      <CoverageDetails 
        coverage={product.coverage}
        title="Business Insurance Coverage"
        description="Comprehensive protection for your business assets and operations"
      />
      <AddOns 
        addOns={product.addOns}
        title="Business Insurance Add-Ons"
        description="Enhance your business coverage with these optional features"
      />
      <SampleRates 
        sampleRates={product.sampleRates}
        title="Business Insurance Rates"
        description="Competitive business insurance starting from $89/month with comprehensive coverage"
      />
      <ProductFAQ 
        faqs={product.faqs}
        title="Business Insurance FAQ"
        description="Common questions about business insurance coverage and claims"
      />
      <CTABanner />
    </main>
  );
}
