import { Metadata } from "next";
import { ProductHero } from "@/components/sections/product-hero";
import { CoverageDetails } from "@/components/sections/coverage-details";
import { AddOns } from "@/components/sections/add-ons";
import { SampleRates } from "@/components/sections/sample-rates";
import { ProductFAQ } from "@/components/sections/product-faq";
import { CTABanner } from "@/components/sections/cta-banner";
import { products } from "@/data/products";

const product = products.find(p => p.id === "life")!;

export const metadata: Metadata = {
  title: "Life Insurance - Secure Your Family's Future",
  description: "Protect your loved ones with flexible life insurance options. Term and whole life coverage with no medical exam required for most policies.",
  keywords: [
    "life insurance",
    "term life insurance",
    "whole life insurance",
    "family protection",
    "financial security",
    "death benefit",
    "living benefits",
    "no medical exam"
  ],
  openGraph: {
    title: "Life Insurance - Secure Your Family's Future | MapleGuard",
    description: "Protect your loved ones with flexible life insurance options. Term and whole life coverage with no medical exam required for most policies.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Life Insurance - Secure Your Family's Future | MapleGuard",
    description: "Protect your loved ones with flexible life insurance options. Term and whole life coverage with no medical exam required for most policies.",
  },
};

export default function LifeInsurancePage() {
  return (
    <main id="main-content">
      <ProductHero product={product} />
      <CoverageDetails 
        coverage={product.coverage}
        title="Life Insurance Coverage"
        description="Flexible life insurance options to protect your family's financial future"
      />
      <AddOns 
        addOns={product.addOns}
        title="Life Insurance Add-Ons"
        description="Enhance your life coverage with these optional features"
      />
      <SampleRates 
        sampleRates={product.sampleRates}
        title="Life Insurance Rates"
        description="Affordable life insurance starting from $45/month with flexible terms"
      />
      <ProductFAQ 
        faqs={product.faqs}
        title="Life Insurance FAQ"
        description="Common questions about life insurance coverage and benefits"
      />
      <CTABanner />
    </main>
  );
}
