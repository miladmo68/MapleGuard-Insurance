import { Metadata } from "next";
import { FAQ } from "@/components/sections/faq";
import { FAQJsonLd } from "@/components/json-ld";

export const metadata: Metadata = {
  title: "Frequently Asked Questions - Insurance FAQ",
  description: "Find answers to common questions about MapleGuard Insurance products, claims, coverage, and services.",
  keywords: [
    "insurance FAQ",
    "insurance questions",
    "insurance answers",
    "auto insurance FAQ",
    "home insurance FAQ",
    "life insurance FAQ",
    "travel insurance FAQ",
    "business insurance FAQ"
  ],
  openGraph: {
    title: "Frequently Asked Questions - Insurance FAQ | MapleGuard",
    description: "Find answers to common questions about MapleGuard Insurance products, claims, coverage, and services.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Frequently Asked Questions - Insurance FAQ | MapleGuard",
    description: "Find answers to common questions about MapleGuard Insurance products, claims, coverage, and services.",
  },
};

const faqs = [
  {
    id: "1",
    question: "How do I get an insurance quote?",
    answer: "Getting a quote is easy! You can get an instant online quote by visiting our quotes page and answering a few simple questions about your insurance needs. You can also call us at 1-800-MAPLE-01 or visit one of our branch locations."
  },
  {
    id: "2",
    question: "What types of insurance do you offer?",
    answer: "We offer comprehensive insurance solutions including auto insurance, home insurance, life insurance, travel insurance, and business insurance. Each product is designed to provide the protection you need at competitive rates."
  },
  {
    id: "3",
    question: "How quickly can I get coverage?",
    answer: "For most insurance products, you can get coverage immediately after completing your application and payment. Some products like life insurance may require additional underwriting and can take 1-3 business days."
  },
  {
    id: "4",
    question: "Do you offer discounts for bundling policies?",
    answer: "Yes! We offer significant discounts when you bundle multiple policies. You can save up to 25% when you combine auto, home, and life insurance with us. Contact us to learn about all available discounts."
  },
  {
    id: "5",
    question: "How do I file a claim?",
    answer: "You can file a claim 24/7 through our online portal, mobile app, or by calling our claims hotline at 1-800-MAPLE-01. Most claims are processed within 24-48 hours, and we'll keep you updated throughout the process."
  },
  {
    id: "6",
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, bank transfers, and pre-authorized payments. You can choose to pay monthly, quarterly, or annually. We also offer flexible payment plans to fit your budget."
  },
  {
    id: "7",
    question: "Can I manage my policy online?",
    answer: "Absolutely! Our online portal and mobile app allow you to view your policies, make payments, file claims, update your information, and access important documents 24/7 from anywhere."
  },
  {
    id: "8",
    question: "What if I need to make changes to my policy?",
    answer: "You can make most changes to your policy online through your account portal. For complex changes or if you need assistance, our customer service team is available to help you over the phone or in person."
  },
  {
    id: "9",
    question: "Do you have 24/7 customer support?",
    answer: "Yes! Our claims hotline is available 24/7 for urgent matters. Our customer service team is available Monday through Friday, 9 AM to 5 PM, and Saturday, 10 AM to 2 PM. You can also reach us via email anytime."
  },
  {
    id: "10",
    question: "What makes MapleGuard different from other insurers?",
    answer: "We're committed to providing transparent pricing, exceptional customer service, and fast claims processing. Our Canadian-based team understands local needs, and we offer comprehensive coverage with competitive rates and flexible payment options."
  },
  {
    id: "11",
    question: "How do I cancel my policy?",
    answer: "You can cancel your policy at any time by calling us at 1-800-MAPLE-01 or visiting one of our branch locations. We'll process your cancellation and provide a prorated refund for any unused premium, minus applicable fees."
  },
  {
    id: "12",
    question: "What if I have a complaint or concern?",
    answer: "We take all feedback seriously. You can contact our customer service team at 1-800-MAPLE-01 or email us at complaints@mapleguard.ca. We also have a formal complaints process and can connect you with our ombudsman if needed."
  }
];

export default function FAQPage() {
  return (
    <main id="main-content">
      <FAQJsonLd faqs={faqs} />
      <FAQ faqs={faqs} />
    </main>
  );
}
