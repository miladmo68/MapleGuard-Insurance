import { Metadata } from "next";
import { QuoteForm } from "@/components/forms/quote-form";

export const metadata: Metadata = {
  title: "Get Insurance Quote - Fast & Easy Online Quotes",
  description: "Get a personalized insurance quote in minutes. Compare rates for auto, home, life, travel, and business insurance with MapleGuard.",
  keywords: [
    "insurance quote",
    "auto insurance quote",
    "home insurance quote",
    "life insurance quote",
    "travel insurance quote",
    "business insurance quote",
    "online quote",
    "instant quote"
  ],
  openGraph: {
    title: "Get Insurance Quote - Fast & Easy Online Quotes | MapleGuard",
    description: "Get a personalized insurance quote in minutes. Compare rates for auto, home, life, travel, and business insurance with MapleGuard.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Get Insurance Quote - Fast & Easy Online Quotes | MapleGuard",
    description: "Get a personalized insurance quote in minutes. Compare rates for auto, home, life, travel, and business insurance with MapleGuard.",
  },
};

export default function QuotesPage() {
  return <QuoteForm />;
}
