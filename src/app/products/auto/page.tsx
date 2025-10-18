import { Metadata } from "next";
import { ProductHero } from "@/components/sections/product-hero";
import { CoverageDetails } from "@/components/sections/coverage-details";
import { AddOns } from "@/components/sections/add-ons";
import { SampleRates } from "@/components/sections/sample-rates";
import { ProductFAQ } from "@/components/sections/product-faq";
import { CTABanner } from "@/components/sections/cta-banner";
import { products } from "@/data/products";

const product = products.find(p => p.id === "auto")!;

export const metadata: Metadata = {
  title: "Auto Insurance - Comprehensive Vehicle Coverage",
  description: "Protect your vehicle with comprehensive auto insurance coverage. Get competitive rates, 24/7 claims support, and flexible payment options.",
  keywords: [
    "auto insurance",
    "car insurance",
    "vehicle insurance",
    "collision coverage",
    "comprehensive coverage",
    "liability insurance",
    "roadside assistance",
    "accident forgiveness"
  ],
  openGraph: {
    title: "Auto Insurance - Comprehensive Vehicle Coverage | MapleGuard",
    description: "Protect your vehicle with comprehensive auto insurance coverage. Get competitive rates, 24/7 claims support, and flexible payment options.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Auto Insurance - Comprehensive Vehicle Coverage | MapleGuard",
    description: "Protect your vehicle with comprehensive auto insurance coverage. Get competitive rates, 24/7 claims support, and flexible payment options.",
  },
};

export default function AutoInsurancePage() {
  return (
    <main id="main-content">
      <ProductHero product={product} />
      <CoverageDetails 
        coverage={product.coverage}
        title="Auto Insurance Coverage"
        description="Comprehensive protection for your vehicle and peace of mind on the road"
      />
      <AddOns 
        addOns={product.addOns}
        title="Auto Insurance Add-Ons"
        description="Enhance your auto coverage with these optional features"
      />
      <SampleRates 
        sampleRates={product.sampleRates}
        title="Auto Insurance Rates"
        description="Competitive rates starting from $89/month with flexible payment options"
      />
      <ProductFAQ 
        faqs={product.faqs}
        title="Auto Insurance FAQ"
        description="Common questions about auto insurance coverage and claims"
      />
      <CTABanner />
    </main>
  );
}
