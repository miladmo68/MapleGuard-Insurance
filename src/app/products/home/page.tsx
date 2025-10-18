import { Metadata } from "next";
import { ProductHero } from "@/components/sections/product-hero";
import { CoverageDetails } from "@/components/sections/coverage-details";
import { AddOns } from "@/components/sections/add-ons";
import { SampleRates } from "@/components/sections/sample-rates";
import { ProductFAQ } from "@/components/sections/product-faq";
import { CTABanner } from "@/components/sections/cta-banner";
import { products } from "@/data/products";

const product = products.find(p => p.id === "home")!;

export const metadata: Metadata = {
  title: "Home Insurance - Protect Your Home and Belongings",
  description: "Comprehensive home insurance coverage for your dwelling, personal property, and liability. Get competitive rates and 24/7 claims support.",
  keywords: [
    "home insurance",
    "house insurance",
    "dwelling coverage",
    "personal property",
    "liability insurance",
    "home protection",
    "property insurance",
    "water damage coverage"
  ],
  openGraph: {
    title: "Home Insurance - Protect Your Home and Belongings | MapleGuard",
    description: "Comprehensive home insurance coverage for your dwelling, personal property, and liability. Get competitive rates and 24/7 claims support.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Home Insurance - Protect Your Home and Belongings | MapleGuard",
    description: "Comprehensive home insurance coverage for your dwelling, personal property, and liability. Get competitive rates and 24/7 claims support.",
  },
};

export default function HomeInsurancePage() {
  return (
    <main id="main-content">
      <ProductHero product={product} />
      <CoverageDetails 
        coverage={product.coverage}
        title="Home Insurance Coverage"
        description="Comprehensive protection for your home, belongings, and liability"
      />
      <AddOns 
        addOns={product.addOns}
        title="Home Insurance Add-Ons"
        description="Enhance your home coverage with these optional features"
      />
      <SampleRates 
        sampleRates={product.sampleRates}
        title="Home Insurance Rates"
        description="Competitive rates starting from $89/month with comprehensive coverage"
      />
      <ProductFAQ 
        faqs={product.faqs}
        title="Home Insurance FAQ"
        description="Common questions about home insurance coverage and claims"
      />
      <CTABanner />
    </main>
  );
}
