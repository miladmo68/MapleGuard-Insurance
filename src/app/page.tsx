import { Hero } from "@/components/sections/hero";
import { ProductsGrid } from "@/components/sections/products-grid";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { HowClaimsWork } from "@/components/sections/how-claims-work";
import { Discounts } from "@/components/sections/discounts";
import { Testimonials } from "@/components/sections/testimonials";
import { FAQ } from "@/components/sections/faq";
import { CTABanner } from "@/components/sections/cta-banner";

const homeFaqs = [
  {
    id: "1",
    question: "Can I bundle multiple insurance policies?",
    answer:
      "Yes! You can save up to 25% when you bundle multiple policies like auto, home, and life insurance. The more policies you combine, the more you save.",
  },
  {
    id: "2",
    question: "How quickly can I get a quote?",
    answer:
      "You can get an instant online quote in just a few minutes. For more complex situations, our agents can provide a detailed quote within 24 hours.",
  },
  {
    id: "3",
    question: "What makes MapleGuard different from other insurers?",
    answer:
      "We offer transparent pricing, 24/7 claims support, Canadian-based agents, and a streamlined digital experience. Our focus is on making insurance simple and affordable.",
  },
  {
    id: "4",
    question: "How do I file a claim?",
    answer:
      "You can file a claim online through our website or mobile app, or call our 24/7 claims hotline at 1-800-MAPLE-01. Most claims are processed within 24-48 hours.",
  },
  {
    id: "5",
    question: "Do you offer discounts for safe drivers?",
    answer:
      "Yes! We offer safe driver discounts of up to 20% for drivers with clean records and no at-fault accidents in the past 3 years.",
  },
  {
    id: "6",
    question: "Can I manage my policy online?",
    answer:
      "Absolutely! Our online portal and mobile app allow you to view your policies, make payments, file claims, and update your information 24/7.",
  },
];

export default function Home() {
  return (
    <main id="main-content">
      {/* <Hero /> */}
      <ProductsGrid />
      <WhyChooseUs />
      <HowClaimsWork />
      <Discounts />
      <Testimonials />
      <FAQ faqs={homeFaqs} />
      <CTABanner />
    </main>
  );
}
