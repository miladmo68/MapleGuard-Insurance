import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { OrganizationJsonLd } from "@/components/json-ld";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "MapleGuard Insurance - Smarter coverage. Faster claims.",
    template: "%s | MapleGuard Insurance",
  },
  description: "Get comprehensive insurance coverage for auto, home, life, travel, and business. Canadian-based with 24/7 claims support and transparent pricing.",
  keywords: [
    "insurance",
    "auto insurance",
    "home insurance",
    "life insurance",
    "travel insurance",
    "business insurance",
    "Canada",
    "claims",
    "coverage",
    "MapleGuard",
  ],
  authors: [{ name: "MapleGuard Insurance" }],
  creator: "MapleGuard Insurance",
  publisher: "MapleGuard Insurance",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://mapleguard.ca"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "/",
    title: "MapleGuard Insurance - Smarter coverage. Faster claims.",
    description: "Get comprehensive insurance coverage for auto, home, life, travel, and business. Canadian-based with 24/7 claims support and transparent pricing.",
    siteName: "MapleGuard Insurance",
  },
  twitter: {
    card: "summary_large_image",
    title: "MapleGuard Insurance - Smarter coverage. Faster claims.",
    description: "Get comprehensive insurance coverage for auto, home, life, travel, and business. Canadian-based with 24/7 claims support and transparent pricing.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <OrganizationJsonLd />
          <a href="#main-content" className="skip-link">
            Skip to main content
          </a>
          <Navigation />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
